import{W as u,j as a,y as p}from"./app-ktjZw_DP.js";import{C as x,B as h}from"./Container-WS9zXGFb.js";import{T as j,I as f}from"./TextInput-y8MHzY5j.js";import{I as s}from"./InputLabel-s0fqiJV1.js";import{P as v}from"./PrimaryButton-uIDfsfAQ.js";import{S as g}from"./SecondaryButton-1SeIaVYe.js";import{S as N}from"./SelectInput-ha9W1V6E.js";import{A as b}from"./AuthenticatedLayout-vVRDl_6s.js";import"./transition-ZVvPMOig.js";function D({kriteria:n}){const{data:t,setData:r,post:m,processing:l,errors:o}=u({nama:"",kriteria:{}}),d=e=>{e.preventDefault();const i={nama:t.nama,kriteria:t.kriteria};m(route("alternatif.store"),i)},c=e=>{e.preventDefault(),p.visit(route("alternatif.index"))};return a.jsx(b,{children:a.jsx(x,{children:a.jsx(h,{children:a.jsx("div",{className:"max-w-2xl p-6 md:p-8",children:a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{children:[a.jsx(s,{htmlFor:"nama",value:"Nama Alternatif"}),a.jsx(j,{id:"nama",name:"nama",value:t.nama,className:"mt-1 block w-full",onChange:e=>r("nama",e.target.value),autoComplete:"nama",isFocused:!0,required:!0}),a.jsx(f,{message:o.nama,className:"mt-2"})]}),a.jsx("div",{className:"mt-10",children:a.jsx("h3",{className:"text-lg text-gray-800 font-semibold",children:"Matriks Penilaian --"})}),a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2",children:n.map(e=>a.jsxs("div",{className:"col-span-1",children:[a.jsx(s,{htmlFor:e.nama,value:e.nama}),a.jsxs(N,{id:e.nama,name:`kriteria.${e.id}`,className:"mt-1 block w-full",value:t.kriteria[e.id],onChange:i=>r("kriteria",{...t.kriteria,[e.id]:i.target.value}),required:!0,children:[a.jsx("option",{children:"--Pilih--"}),e.sub_kriteria.map(i=>a.jsx("option",{value:i.id,children:i.nama},i.id))]})]},e.id))}),a.jsxs("div",{className:"flex items-center justify-end mt-10",children:[a.jsx(g,{onClick:c,children:"Kembali"}),a.jsx(v,{className:"ml-4",disabled:l,children:"Simpan"})]})]})})})})})}export{D as default};
