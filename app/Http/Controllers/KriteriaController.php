<?php

namespace App\Http\Controllers;

use App\Models\Kriteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class KriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Kriteria/Index', [
            'kriteria' => Kriteria::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Kriteria/Create', [
            'kriteria' => new Kriteria()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => ['required', 'string'],
            'bobot' => ['required'],
            'sub_kriteria' => ['required', 'array'],
            'sub_kriteria.*.nama' => ['required', 'string', 'max:255'],
            'sub_kriteria.*.bobot' => ['required', 'min:1'],
        ]);

        DB::transaction(function () use ($validated) {
            $kriteria = Kriteria::create([
                'nama' => $validated['nama'],
                'bobot' => floatval($validated['bobot'])
            ]);

            $kriteria->subKriteria()->createMany($validated['sub_kriteria']);
        });

        return to_route('kriteria.index')->with('success', 'Kriteria berhasil ditambahkan.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kriteria $kriteria): Response
    {
        return Inertia::render('Kriteria/Edit', [
            'kriteria' => $kriteria
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kriteria $kriteria)
    {
        $validated = $request->validate([
            'nama' => ['required', 'string'],
            'bobot' => ['required'],
            'sub_kriteria' => ['required', 'array'],
            'sub_kriteria.*.nama' => ['required', 'string', 'max:255'],
            'sub_kriteria.*.bobot' => ['required', 'min:1'],
        ]);

        DB::transaction(function () use ($validated, $kriteria) {
            $kriteria->update([
                'nama' => $validated['nama'],
                'bobot' => floatval($validated['bobot']),
            ]);

            $kriteria->subKriteria()->delete();

            $kriteria->subKriteria()->createMany($validated['sub_kriteria']);
        });

        return to_route('kriteria.show', $kriteria)->with('success', 'Kriteria berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kriteria $kriteria)
    {
        DB::transaction(function () use ($kriteria) {
            $kriteria->subKriteria()->delete();
            $kriteria->delete();
        });

        return to_route('kriteria.index')->with('success', 'Kriteria berhasil dihapus.');
    }
}
