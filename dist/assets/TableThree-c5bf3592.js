import{r as a,j as s,a as e}from"./index-6d4a41d0.js";const f=()=>{const[l,i]=a.useState(0),[o,p]=a.useState(null),[c,d]=a.useState(JSON.parse("{}")),h=localStorage.getItem("accessToken"),m=async()=>{try{const r=await(await fetch("api.azurewebsites.net/users/userinfo",{method:"GET",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"}})).json(),n=JSON.parse(r.bots[l].chat_history);p(r),d(n),console.log(c),r.bots.length==0&&(window.location.href="/addbot")}catch(t){console.error("Error fetching user info:",t)}};a.useEffect(()=>{m()},[]);const b=async t=>{console.log("Bot changed"),i(t.target.selectedIndex);const r=JSON.parse(o.bots[t.target.selectedIndex].chat_history);d(r),console.log(t.target.selectedIndex)};return o?s("div",{className:"rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:[s("div",{className:"border-b  border-stroke py-4 px-4 dark:border-strokedark",children:[e("h3",{className:"font-medium text-black dark:text-white p-3",children:"💬 Chat Sessions"}),e("select",{name:"bot",value:l,onChange:b,className:"relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:o.bots.map((t,r)=>e("option",{name:t.name,value:r,children:t.name},r))})]}),e("div",{className:"max-w-full overflow-x-auto",children:s("table",{className:"w-full table-auto",children:[e("thead",{children:s("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Chat Sessions"}),e("th",{className:"min-w-[150px] py-4 px-4 font-medium text-black dark:text-white",children:"Details"})]})}),e("tbody",{children:Object.entries(c).map(([t,r])=>s("tr",{children:[e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:s("details",{children:[s("summary",{children:[t," ",e("br",{}),e("p",{className:"italic",children:String(r.chats[0]).substring(0,50)+(r.chats.length>50?"...":"")})]}),e("p",{className:"text-sm pb-1",children:r.chats&&r.chats.map((n,u)=>s("p",{children:["💬 ",n]},u))})]})}),e("td",{className:"gap-x-4 border-b border-[#eee] py-5 px-4 dark:border-strokedark inlind-flex",children:s("p",{className:"text-sm font-medium text-success space-x-2",children:[s("p",{className:"text-sm text-success inline-flex rounded-full py-1 px-3 bg-opacity-10 bg-success",children:[r.chats.length," messages in this chat session"]}),e("a",{href:`https://www.infobyip.com/ip-${t.slice(0,-13)}.html`,target:"_blank",children:e("p",{className:"text-sm text-success inline-flex rounded-full py-1 px-3 bg-opacity-10 bg-primary",children:t.slice(0,-13)})})]})})]},t))})]})})]}):null};export{f as default};
