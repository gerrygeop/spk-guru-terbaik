import Container, { Board } from "@/Components/Container";
import { IconPlus } from "@/Components/IconPlus";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        bobot: "",
        sub_kriteria: [
            {
                nama: "",
                bobot: "",
            },
        ],
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("kriteria.store"));
    };

    const handleSubInputChange = (e, index) => {
        const { name, value } = e.target;
        const newSubKriteria = [...data.sub_kriteria];
        newSubKriteria[index][name] = value;

        if (name === "bobot") {
            newSubKriteria[index][name] = parseFloat(value);
        }

        setData((prevState) => ({
            ...prevState,
            sub_kriteria: newSubKriteria,
        }));
    };

    const handleAddSub = () => {
        setData((prevState) => ({
            ...prevState,
            sub_kriteria: [
                ...prevState.sub_kriteria,
                {
                    nama: "",
                    bobot: "",
                },
            ],
        }));
    };

    const handleRemoveSub = (index) => {
        setData((prevState) => ({
            ...prevState,
            sub_kriteria: prevState.sub_kriteria.filter((_, i) => i !== index),
        }));
    };

    const handleBackButton = (e) => {
        e.preventDefault();
        router.visit(route("kriteria.index"));
    };

    return (
        <AuthenticatedLayout>
            <Container>
                <Board>
                    <div className="max-w-2xl p-6 md:p-8">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="nama" value="Nama" />

                                <TextInput
                                    id="nama"
                                    name="nama"
                                    value={data.nama}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                    autoComplete="nama"
                                    isFocused={true}
                                    required
                                />

                                <InputError
                                    message={errors.nama}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="bobot" value="Bobot" />

                                <TextInput
                                    id="bobot"
                                    name="bobot"
                                    value={data.bobot}
                                    className="mt-1 block w-full"
                                    autoComplete="bobot"
                                    onChange={(e) =>
                                        setData("bobot", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.bobot}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-6">
                                <h5 className="font-semibold text-gray-800">
                                    Sub Kriteria --
                                </h5>
                            </div>

                            <div>
                                {data.sub_kriteria.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-8 gap-x-2 gap-y-4 mb-2"
                                    >
                                        <div className="col-span-5">
                                            <InputLabel
                                                htmlFor={`${index}-sub-nama`}
                                                value="Nama"
                                            />
                                            <TextInput
                                                id={`${index}-sub-nama`}
                                                name="nama"
                                                value={item.nama}
                                                className="block mt-1 w-full"
                                                onChange={(e) =>
                                                    handleSubInputChange(
                                                        e,
                                                        index
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <InputLabel
                                                htmlFor={`${index}-item-bobot`}
                                                value="Bobot"
                                            />
                                            <TextInput
                                                id={`${index}-item-bobot`}
                                                name="bobot"
                                                value={item.bobot}
                                                className="block mt-1 w-full"
                                                onChange={(e) =>
                                                    handleSubInputChange(
                                                        e,
                                                        index
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="col-span-1 flex items-end justify-center">
                                            <button
                                                type="button"
                                                className="flex items-center px-3 py-2 text-xs border border-gray-300 text-gray-500 hover:border-transparent hover:bg-red-600 hover:text-white rounded-md transition"
                                                onClick={(e) =>
                                                    handleRemoveSub(index)
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="text-white bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-md transition"
                                    onClick={handleAddSub}
                                >
                                    <IconPlus className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex items-center justify-end mt-10">
                                <SecondaryButton onClick={handleBackButton}>
                                    Kembali
                                </SecondaryButton>

                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Simpan
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </Board>
            </Container>
        </AuthenticatedLayout>
    );
}
