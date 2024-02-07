import{r as d,j as t,F as S,a as r}from"./index-6d4a41d0.js";const D=()=>{const[i,o]=d.useState(!1),[c,p]=d.useState(""),[b,u]=d.useState(""),[l,k]=d.useState(0),[s,g]=d.useState(null),[m,h]=d.useState(""),[f,x]=d.useState(""),n=localStorage.getItem("accessToken"),y=async()=>{o(!0);try{const e=await fetch(`/api/chat/sitemapmethod/?bot_id=${s.bots[l].id}
      &sitemap=${f}`,{method:"GET",headers:{Authorization:`Bearer ${n}`,Accept:"application/json"}});e.ok?(x(""),alert("Data uploaded successfully!")):console.error("Error uploading data:",e.statusText)}catch(e){console.error("Error uploading data:",e)}o(!1)},v=e=>{x(e.target.value)},w=async()=>{o(!0);try{const e=await fetch(`/api/chat/pdfmethod/?bot_id=${s.bots[l].id}
      &pdfurl=${m}`,{method:"GET",headers:{Authorization:`Bearer ${n}`,Accept:"application/json"}});e.ok?(h(""),alert("Data uploaded successfully!")):console.error("Error uploading data:",e.statusText)}catch(e){console.error("Error uploading data:",e)}o(!1)},N=e=>{h(e.target.value),console.log(e.target.value)},T=e=>{p(e.target.value)},U=e=>{u(e.target.value)},C=async()=>{o(!0);const e=c.split(`
`);try{const a=await fetch(`/api/chat/urlmethod/?bot_id=${s.bots[l].id}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify(e)});a.ok?(p(""),alert("Data uploaded successfully!")):console.error("Error uploading data:",a.statusText)}catch(a){console.error("Error uploading data:",a)}o(!1)},E=async()=>{o(!0);try{const e=await fetch(`/api/chat/textmethod/?bot_id=${s.bots[l].id}
        &text=${b}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"}});e.ok?(console.log("Data uploaded successfully!"),u(""),alert("Data uploaded successfully!")):console.error("Error uploading data:",e.statusText)}catch(e){console.error("Error uploading data:",e)}o(!1)},j=async()=>{try{const e=await fetch("/api/users/userinfo",{method:"GET",headers:{Authorization:`Bearer ${n}`,Accept:"application/json"}}),a=await e.json();e.ok&&(console.log(a),g(a))}catch(e){console.error("Error fetching user info:",e)}},A=async e=>{console.log("Bot changed"),await k(e.target.selectedIndex),console.log(e.target.selectedIndex)};if(d.useEffect(()=>{j()},[]),s!=null)return t(S,{children:[r("h3",{className:"font-medium text-black dark:text-white p-3",children:"🧠 Add Data"}),r("select",{name:"bot",value:l,onChange:A,className:"relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:s.bots.map((e,a)=>t("option",{name:e.name,value:a,children:[e.id," ",e.name]},a))})," ",r("br",{}),r("br",{}),t("div",{className:"flex flex-col gap-9",children:[t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[r("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:r("h3",{className:"font-medium text-black dark:text-white",children:"Add Webpage URLs"})}),t("div",{className:"flex flex-col gap-5.5 p-6.5",children:[t("div",{children:[r("label",{className:"mb-3 block text-black dark:text-white",children:"List all the urls"}),r("textarea",{onChange:T,value:c,rows:6,placeholder:"One URL per line",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),t("button",{onClick:()=>{C()},className:"inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",children:[" ",i?"Uploading...":"Upload"]})]})]})," "]}),r("br",{}),t("div",{className:"flex flex-col gap-9",children:[t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[r("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:r("h3",{className:"font-medium text-black dark:text-white",children:"Add Text"})}),t("div",{className:"flex flex-col gap-5.5 p-6.5",children:[t("div",{children:[r("label",{className:"mb-3 block text-black dark:text-white",children:"Paste your text here (avoid single lines or words)"}),r("textarea",{onChange:U,value:b,rows:6,placeholder:"500-1000 words recommended",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),t("button",{onClick:()=>{E()},className:"inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",children:[" ",i?"Uploading...":"Upload"]})]})," "]})," "]}),r("br",{}),t("div",{className:"flex flex-col gap-9",children:[t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[r("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:r("h3",{className:"font-medium text-black dark:text-white",children:"Add Sitemap"})}),t("div",{className:"flex flex-col gap-5.5 p-6.5",children:[t("div",{children:[r("label",{className:"mb-3 block text-black dark:text-white",children:"Paste the website sitemap URL"}),r("input",{type:"text",placeholder:"https://example.com/sitemap.xml",onChange:v,value:f,className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),t("button",{onClick:()=>{y()},className:"inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",children:[" ",i?"Uploading...":"Upload"]})]})," "]})," "]}),r("br",{}),t("div",{className:"flex flex-col gap-9",children:[t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",children:[r("div",{className:"border-b border-stroke py-4 px-6.5 dark:border-strokedark",children:r("h3",{className:"font-medium text-black dark:text-white",children:"Add PDF via URL"})}),t("div",{className:"flex flex-col gap-5.5 p-6.5",children:[t("div",{children:[r("label",{className:"mb-3 block text-black dark:text-white",children:"Paste the PDF url"}),r("input",{type:"text",placeholder:"https://example.com/example.pdf",onChange:N,value:m,className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"})]}),t("button",{onClick:()=>{w()},className:"inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",children:[" ",i?"Uploading...":"Upload"]})]})," "]})," "]})]})};export{D as default};
