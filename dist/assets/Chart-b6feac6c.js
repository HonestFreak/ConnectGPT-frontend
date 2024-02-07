import{r as t,j as a,a as e,_ as r,F as o,B as l,C as d}from"./index-6d4a41d0.js";const n=()=>{const[s,i]=t.useState({series:[{data:[168,385,201,298,187,195,291,110,215,390,280,112,123,212,270,190,310,115,90,380,112,223,292,170,290,110,115,290,380,312]}]});return a("div",{className:"col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5",children:[e("div",{children:e("h3",{className:"text-xl font-semibold text-black dark:text-white",children:"Visitors Analytics"})}),e("div",{className:"mb-2",children:e("div",{id:"chartFour",className:"-ml-5",children:e(r,{options:{colors:["#3C50E0"],chart:{fontFamily:"Satoshi, sans-serif",type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:2}},dataLabels:{enabled:!1},stroke:{show:!0,width:4,colors:["transparent"]},xaxis:{categories:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],axisBorder:{show:!1},axisTicks:{show:!1}},legend:{show:!0,position:"top",horizontalAlign:"left",fontFamily:"inter",markers:{radius:99}},grid:{yaxis:{lines:{show:!1}}},fill:{opacity:1},tooltip:{x:{show:!1}}},series:s.series,type:"bar",height:350})})})]})},c={legend:{show:!1,position:"top",horizontalAlign:"left"},colors:["#3C50E0","#80CAEE"],chart:{fontFamily:"Satoshi, sans-serif",height:335,type:"area",dropShadow:{enabled:!0,color:"#623CEA14",top:10,blur:4,left:0,opacity:.1},toolbar:{show:!1}},responsive:[{breakpoint:1024,options:{chart:{height:300}}},{breakpoint:1366,options:{chart:{height:350}}}],stroke:{width:[2,2],curve:"straight"},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},markers:{size:4,colors:"#fff",strokeColors:["#3056D3","#80CAEE"],strokeWidth:3,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,discrete:[],hover:{size:void 0,sizeOffset:5}},xaxis:{type:"category",categories:["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{title:{style:{fontSize:"0px"}},min:0,max:100}},h=()=>{const[s,i]=t.useState({series:[{name:"Product One",data:[23,11,22,27,13,22,37,21,44,22,30,45]},{name:"Product Two",data:[30,25,36,30,45,35,64,52,59,36,39,51]}]});return a("div",{className:"col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8",children:[a("div",{className:"flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap",children:[a("div",{className:"flex w-full flex-wrap gap-3 sm:gap-5",children:[a("div",{className:"flex min-w-47.5",children:[e("span",{className:"mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary",children:e("span",{className:"block h-2.5 w-full max-w-2.5 rounded-full bg-primary"})}),a("div",{className:"w-full",children:[e("p",{className:"font-semibold text-primary",children:"Total Revenue"}),e("p",{className:"text-sm font-medium",children:"12.04.2022 - 12.05.2022"})]})]}),a("div",{className:"flex min-w-47.5",children:[e("span",{className:"mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary",children:e("span",{className:"block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"})}),a("div",{className:"w-full",children:[e("p",{className:"font-semibold text-secondary",children:"Total Sales"}),e("p",{className:"text-sm font-medium",children:"12.04.2022 - 12.05.2022"})]})]})]}),e("div",{className:"flex w-full max-w-45 justify-end",children:a("div",{className:"inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4",children:[e("button",{className:"rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark",children:"Day"}),e("button",{className:"rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark",children:"Week"}),e("button",{className:"rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark",children:"Month"})]})})]}),e("div",{children:e("div",{id:"chartOne",className:"-ml-5",children:e(r,{options:c,series:s.series,type:"area",height:350})})})]})},m={colors:["#3C50E0","#80CAEE"],chart:{fontFamily:"Satoshi, sans-serif",type:"bar",height:335,stacked:!0,toolbar:{show:!1},zoom:{enabled:!1}},responsive:[{breakpoint:1536,options:{plotOptions:{bar:{borderRadius:0,columnWidth:"25%"}}}}],plotOptions:{bar:{horizontal:!1,borderRadius:0,columnWidth:"25%",borderRadiusApplication:"end",borderRadiusWhenStacked:"last"}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"]},legend:{position:"top",horizontalAlign:"left",fontFamily:"Satoshi",fontWeight:500,fontSize:"14px",markers:{radius:99}},fill:{opacity:1}},p=()=>{const[s,i]=t.useState({series:[{name:"Sales",data:[44,55,41,67,22,43,65]},{name:"Revenue",data:[13,23,20,8,13,27,15]}]});return a("div",{className:"col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4",children:[a("div",{className:"mb-4 justify-between gap-4 sm:flex",children:[e("div",{children:e("h4",{className:"text-xl font-semibold text-black dark:text-white",children:"Profit this week"})}),e("div",{children:a("div",{className:"relative z-20 inline-block",children:[a("select",{name:"#",id:"#",className:"relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none",children:[e("option",{value:"",children:"This Week"}),e("option",{value:"",children:"Last Week"})]}),e("span",{className:"absolute top-1/2 right-3 z-10 -translate-y-1/2",children:a("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z",fill:"#637381"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z",fill:"#637381"})]})})]})})]}),e("div",{children:e("div",{id:"chartTwo",className:"-ml-5 -mb-9",children:e(r,{options:m,series:s.series,type:"bar",height:350})})})]})},x=()=>a(o,{children:[e(l,{pageName:"Chart"}),a("div",{className:"grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5",children:[e("div",{className:"col-span-12",children:e(n,{})}),e(h,{}),e(p,{}),e(d,{})]})]});export{x as default};