import{W as x,r as p,j as e,d as f}from"./app-ktjZw_DP.js";import{G as g}from"./GuestLayout-iBKq863b.js";import{T as n,I as m}from"./TextInput-y8MHzY5j.js";import{I as l}from"./InputLabel-s0fqiJV1.js";import{P as j}from"./PrimaryButton-uIDfsfAQ.js";function y({status:r}){const{data:a,setData:t,post:u,processing:i,errors:o,reset:d}=x({username:"",password:""});p.useEffect(()=>()=>{d("password")},[]);const c=s=>{s.preventDefault(),u(route("login"))};return e.jsx(g,{children:e.jsxs("div",{className:"px-6 py-8",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-700 mb-4",children:"Login"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"username",value:"Username"}),e.jsx(n,{id:"username",type:"text",name:"username",value:a.username,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>t("username",s.target.value)}),e.jsx(m,{message:o.username,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>t("password",s.target.value)}),e.jsx(m,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(f,{href:route("register"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",children:"Belum punya akun?"}),e.jsx(j,{className:"ms-4",disabled:i,children:"Log in"})]})]})]})})}export{y as default};