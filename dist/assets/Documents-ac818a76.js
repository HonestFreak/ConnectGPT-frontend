import{r as a,a as e,j as o,F as f,L as k}from"./index-6d4a41d0.js";const g=()=>{const[n,d]=a.useState(null),[i,p]=a.useState(0),[c,m]=a.useState(0),[s,u]=a.useState(null),l=localStorage.getItem("accessToken"),h=async()=>{try{const t=await fetch("/api/users/userinfo",{method:"GET",headers:{Authorization:`Bearer ${l}`,Accept:"application/json"}}),r=await t.json();t.ok&&(u(r),console.log(r),console.log(s))}catch(t){console.error("Error fetching user info:",t)}},x=async()=>{try{const t=await fetch(`/api/collections/getcol/?bot_id=${s.bots[c].id}`,{method:"GET",headers:{Authorization:`Bearer ${l}`,Accept:"application/json"}});if(t.ok){const r=await t.json();console.log("Data fetched successfully!"),console.log(r),d(r),p(r.ids)}else console.error("Failed to fetch collections")}catch(t){console.error("An error occurred",t)}},b=async t=>{console.log("Bot changed");const r=t.target.selectedIndex;m(r)};return a.useEffect(()=>{h()},[]),a.useEffect(()=>{s!==null&&x()},[s,c]),s!==null&&n!==null?e("div",{className:"rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:o("div",{className:"max-w-full overflow-x-auto",children:[o("div",{className:"border-b border-stroke py-4 px-4 dark:border-strokedark",children:[e("h3",{className:"font-medium text-black dark:text-white p-3",children:"🧠 Indexed Data"}),e("select",{name:"bot",value:c,onChange:b,className:"relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:s.bots.map((t,r)=>e("option",{name:t.name,value:r,children:t.name},r))})]}),o("table",{className:"w-full table-auto",children:[e("thead",{children:o("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Documents"}),e("th",{className:"min-w-[150px] py-4 px-4 font-medium text-black dark:text-white",children:"Actions"})]})}),e("tbody",{children:n.documents.map((t,r)=>o("tr",{children:[e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e("h5",{className:"font-medium text-black dark:text-white",children:o("details",{children:[e("summary",{children:t.slice(0,50)+(t.length>50?"...":"")}),e("p",{children:t})]})})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("p",{className:"text-sm font-medium text-success",children:e("input",{type:"submit",onClick:()=>fetch(`/api/collections/delindex/${i[r]}`),className:"inline-flex items-center justify-end rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",value:"Delete"})})})]},r))})]})]})}):null},w=()=>o(f,{children:[e("div",{className:"py-3",children:e(k,{to:"adddocs",className:"inline-flex items-center justify-end rounded-md bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",children:"+ Add Documents/Pages/Urls"})}),e("div",{className:"grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5",children:e(g,{})})]});export{w as default};
