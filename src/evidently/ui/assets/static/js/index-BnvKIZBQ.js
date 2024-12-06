const __vite__fileDeps=["static/js/index-CDNqhC_e.js","static/js/vendor-C2GWNUp2.js","static/js/index-CWfr-A2J.js","static/js/DashboardViewParams-D9XhJzJS.js","static/js/DashboardWidgets-BRGpEdMo.js","static/js/DashboardContent-Ka8LC1DI.js","static/js/index-CykUxFwF.js","static/js/index-DJ2Ae9EQ.js","static/js/index-qb_niS19.js","static/js/index-DJhIIsZf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var se=Object.defineProperty;var oe=(e,r,s)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;var w=(e,r,s)=>(oe(e,typeof r!="symbol"?r+"":r,s),s);import{c as G,g as R,u as ne,a as ie,r as k,j as t,A as ae,b as ce,d as F,i as he,T as S,e as le,R as M,S as W,B as d,I as J,C as Y,f as de,h as ue,k as pe,l as fe,m as E,n as me,L as je,o as xe,p as Le,q as ye,P as ge,s as _e,t as ve,v as Ce,w as Se,G as I,F as Ee,x as be,y as ke,z as we,D as Ie,M as f,E as H,H as Pe,J as Te,K as A,N as p,O as Oe,Q as Ae,U as De,V as Re,W as Me}from"./vendor-C2GWNUp2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const{transitions:b}=G(),P="#ed0500",Fe=G({cssVariables:{colorSchemeSelector:"class"},colorSchemes:{light:{palette:{text:{primary:"#09090b"},primary:{main:"#09090b",light:R[200]},secondary:{main:P,dark:"#c10400",light:R[200]}}},dark:{palette:{text:{primary:"#fafafa"},primary:{main:"#fafafa",light:R[900]},secondary:{main:P}}}},shape:{borderRadius:5},components:{MuiInputBase:{styleOverrides:{input:{"&:-webkit-autofill":{transitionDelay:"9999s",transitionProperty:"background-color, box-shadow, color"}}}},MuiLink:{styleOverrides:{root:{transition:b.create("color",{duration:b.duration.enteringScreen}),"&:hover":{color:P}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:P}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px"}}},MuiIconButton:{styleOverrides:{root:{transition:b.create("color",{duration:b.duration.enteringScreen}),color:"inherit","&:hover":{color:P}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:b.create("color",{duration:b.duration.enteringScreen}),color:"inherit","&.Mui-disabled":{border:"unset"}}}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{defaultProps:{sx:{border:"1px solid",borderColor:e=>e.palette.divider}},styleOverrides:{root:{boxShadow:"unset"}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),q=()=>{const{mode:e}=ne(),r=ie("(prefers-color-scheme: dark)");return!e||e==="system"?r?"dark":"light":e},It=()=>{const e=q();return k.useMemo(()=>e==="dark"?{tooltip:{container:{background:"#000",color:"#fff"}}}:void 0,[e])},N=({forseFilled:e,sx:r,...s})=>{const o=q();return t.jsx(ae,{sx:[n=>n.applyStyles("light",{border:"none"}),...Array.isArray(r)?r:[r]],variant:o==="dark"?e?"filled":"outlined":void 0,...s})},_=()=>{var r;const e=ce();return t.jsxs(N,{severity:"error",children:[t.jsx(F,{children:"Something went wrong"}),he(e)&&t.jsxs(t.Fragment,{children:[t.jsx(S,{fontWeight:"bold",children:[`Status: ${e.status}`,typeof((r=e.data)==null?void 0:r.detail)=="string"&&e.data.detail].filter(Boolean).join(", ")}),typeof e.data=="string"&&t.jsx(S,{children:e.data})]}),typeof e=="string"&&t.jsx(S,{fontWeight:"bold",children:e})]})},Q=({data:e})=>{const[r,s]=M.useState(!1),o=M.useRef(null);return k.useEffect(()=>{e!=null&&e.error&&(o.current=e.error,s(!0))},[e]),t.jsx(W,{open:r,onClose:(n,i)=>{i!=="clickaway"&&s(!1)},children:t.jsx(d,{children:t.jsx(N,{severity:"error",forseFilled:!0,children:t.jsxs(d,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:2,children:[t.jsxs(d,{children:[t.jsx(F,{children:"Something went wrong"}),o.current&&t.jsx(S,{fontWeight:"bold",children:[typeof o.current.status_code=="number"&&`Status: ${o.current.status_code}`,typeof o.current.detail=="string"&&o.current.detail].filter(Boolean).join(", ")})]}),t.jsx(d,{children:t.jsx(J,{size:"small","aria-label":"close",color:"inherit",onClick:()=>{s(!1)},children:t.jsx(Y,{})})})]})})})})},B=()=>{const e=le();return t.jsx(Q,{data:e})},Ne=()=>{var s;const r=(s=de().find(o=>{var n;return!!((n=o.data)!=null&&n.error)}))==null?void 0:s.data;return t.jsx(Q,{data:r})},Be={path:"*",Component:()=>t.jsx(d,{display:"flex",justifyContent:"center",children:t.jsx(S,{variant:"h4",children:"Page Not Found"})})},$e="modulepreload",He=function(e){return"/"+e},V={},g=function(r,s,o){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(s.map(c=>{if(c=He(c),c in V)return;V[c]=!0;const m=c.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":$e,m||(l.as="script",l.crossOrigin=""),l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),m)return new Promise((x,D)=>{l.addEventListener("load",x),l.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>r()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Ve=()=>t.jsx(ue,{fontSize:"large",sx:{width:180},children:t.jsxs("svg",{"aria-hidden":"true",width:"734",height:"219",viewBox:"0 70 734 90",version:"1.1",children:[t.jsx("path",{d:"M 180 113 L 180 141 201.500 141 L 223 141 223 136.500 L 223 132 207 132 L 191 132 191 124.500 L 191 117 204.500 117 L 218 117 218 112.500 L 218 108 204.500 108 L 191 108 191 101 L 191 94 206 94 L 221 94 221 89.500 L 221 85 200.500 85 L 180 85 180 113 M 221.989 87.250 C 221.983 88.487, 227.010 101.088, 233.160 115.250 L 244.342 141 249.931 141 L 255.521 141 266.865 114.959 C 273.104 100.636, 278.439 88.036, 278.721 86.959 C 279.183 85.191, 278.709 85.002, 273.867 85.024 L 268.500 85.049 259.393 106.080 L 250.285 127.111 243.204 110.806 C 239.309 101.838, 235.210 92.362, 234.096 89.750 L 232.071 85 227.036 85 C 222.483 85, 221.999 85.216, 221.989 87.250 M 280 113 L 280 141 285.500 141 L 291 141 291 113 L 291 85 285.500 85 L 280 85 280 113 M 301 113 L 301 141 316.818 141 C 327.946 141, 334.130 140.557, 337.672 139.505 C 340.601 138.635, 344.617 136.329, 347.270 133.993 C 349.779 131.785, 352.871 127.845, 354.141 125.239 C 355.926 121.575, 356.450 118.799, 356.450 113 C 356.450 107.201, 355.926 104.425, 354.141 100.761 C 352.871 98.155, 349.779 94.215, 347.270 92.007 C 344.617 89.671, 340.601 87.365, 337.672 86.495 C 334.130 85.443, 327.946 85, 316.818 85 L 301 85 301 113 M 362 113 L 362 141 383.500 141 L 405 141 405 136.500 L 405 132 389 132 L 373 132 373 124.500 L 373 117 386.500 117 L 400 117 400 112.500 L 400 108 386.500 108 L 373 108 373 101 L 373 94 388.500 94 L 404 94 404 89.500 L 404 85 383 85 L 362 85 362 113 M 411 113 L 411 141 416.500 141 L 422 141 422 122.426 L 422 103.851 437.126 122.426 L 452.253 141 457.126 141 L 462 141 462 113 L 462 85 456.522 85 L 451.044 85 450.772 103.414 L 450.500 121.828 435.550 103.414 L 420.600 85 415.800 85 L 411 85 411 113 M 464 89.500 L 464 94 473.500 94 L 483 94 483 117.500 L 483 141 488.500 141 L 494 141 494 117.500 L 494 94 503 94 L 512 94 512 89.500 L 512 85 488 85 L 464 85 464 89.500 M 514 113 L 514 141 534.500 141 L 555 141 555 136.500 L 555 132 540.500 132 L 526 132 526 108.500 L 526 85 520 85 L 514 85 514 113 M 544 85.624 C 544 85.967, 548.725 94.001, 554.500 103.477 L 565 120.707 565 130.853 L 565 141 571 141 L 577 141 577 130.825 L 577 120.649 587.500 103.291 C 593.275 93.743, 598 85.722, 598 85.466 C 598 85.210, 595.577 85, 592.615 85 L 587.230 85 579.505 97.991 C 575.257 105.136, 571.435 110.769, 571.012 110.507 C 570.589 110.246, 566.926 104.410, 562.872 97.538 L 555.500 85.043 549.750 85.021 C 546.587 85.010, 544 85.281, 544 85.624 M 312 113 L 312 132 320.250 131.994 C 324.788 131.991, 330.174 131.524, 332.219 130.956 C 334.264 130.388, 337.363 128.724, 339.105 127.258 C 340.847 125.793, 342.886 123.124, 343.636 121.329 C 344.386 119.533, 345 115.785, 345 113 C 345 110.215, 344.386 106.467, 343.636 104.671 C 342.886 102.876, 340.847 100.207, 339.105 98.742 C 337.363 97.276, 334.264 95.612, 332.219 95.044 C 330.174 94.476, 324.788 94.009, 320.250 94.006 L 312 94 312 113",fill:"currentColor",fillRule:"evenodd"}),t.jsx("path",{d:"M 121 112 L 121 169 133.500 169 L 146 169 146 112 L 146 55 133.500 55 L 121 55 121 112 M 77 126 L 77 169 90 169 L 103 169 103 126 L 103 83 90 83 L 77 83 77 126 M 633.540 88.199 C 632.771 90.015, 627.159 102.517, 621.070 115.982 C 614.982 129.447, 610 140.832, 610 141.282 C 610 141.732, 612.528 141.965, 615.617 141.800 L 621.235 141.500 623.794 135.250 L 626.353 129 640.218 129 L 654.084 129 657 135.500 L 659.916 142 665.526 142 C 670.413 142, 671.063 141.775, 670.577 140.250 C 670.271 139.287, 664.639 126.575, 658.064 112 L 646.108 85.500 640.524 85.199 C 635.051 84.904, 634.913 84.964, 633.540 88.199 M 673 113.500 L 673 142 678.500 142 L 684 142 684 113.500 L 684 85 678.500 85 L 673 85 673 113.500 M 635.630 107.723 C 633.074 113.650, 630.986 118.838, 630.991 119.250 C 630.996 119.662, 635.275 120, 640.500 120 C 645.725 120, 650 119.819, 650 119.598 C 650 119.377, 647.923 114.315, 645.385 108.348 C 642.847 102.382, 640.659 97.375, 640.524 97.223 C 640.389 97.070, 638.187 101.795, 635.630 107.723 M 34 140.500 L 34 169 47 169 L 60 169 60 140.500 L 60 112 47 112 L 34 112 34 140.500",fill:"#ed0500",fillRule:"evenodd"})]})});function u(e){return e!=null&&e.notThrowExc?Ue:ze}const ze=e=>{const{data:r,error:s,response:o}=e;if(s)throw pe(s,{status:o.status});return r},Ue=e=>{const{data:r,error:s,response:o}=e;return s?{error:{...s,status_code:o.status}}:r},Ge=({api:e})=>({loader:()=>e.GET("/api/version").then(u())}),We=fe,v=We({baseUrl:"/"}),{loader:Je}=Ge({api:v}),Ye={path:"/",lazy:async()=>{const{HomeComponentTemplate:e,...r}=await g(()=>import("./index-CDNqhC_e.js"),__vite__mapDeps([0,1]));return{Component:()=>t.jsxs(t.Fragment,{children:[t.jsx(Ne,{}),t.jsx(e,{LogoSvg:Ve})]}),...r}},loader:Je,ErrorBoundary:_},K=e=>{if(e.id)return{...e,id:e.id};throw`"id" is missing in object: ${JSON.stringify(e)}`},X=e=>{if(e.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})},qe=({api:e})=>({loader:({params:r})=>{const{projectId:s}=r;return E(s),e.GET("/api/projects/{project_id}/info",{params:{path:{project_id:s}}}).then(u()).then(K)}}),Qe=({event:e})=>{const s=e.points[0].customdata;if(!s)return t.jsx(t.Fragment,{});const o="metric_fingerprint"in s?"report":"test-suite";return t.jsx(t.Fragment,{children:t.jsx(d,{sx:{position:"absolute",bottom:0,right:0,background:n=>n.palette.background.default,p:1,borderRadius:"10px"},children:t.jsx(me,{direction:"row",alignItems:"center",gap:2,children:t.jsx(je,{component:xe,to:`${o}s/${s.snapshot_id}`,children:t.jsxs(Le,{variant:"outlined",children:["View ",o.split("-").join(" ")]})})})})})},Ke=()=>{const[e,r]=ye("is-user-saw-click-on-datapoints-hint",!1),[s,o]=k.useState(!e);return k.useEffect(()=>r(!0),[]),s?t.jsx(t.Fragment,{children:t.jsx(W,{open:s,onClose:(n,i)=>{i!=="clickaway"&&o(!1)},children:t.jsx(ge,{sx:{p:1,borderRadius:2,border:"1px solid",borderColor:n=>n.palette.divider},children:t.jsxs(d,{display:"flex",justifyContent:"space-between",alignItems:"center",gap:2,children:[t.jsx(d,{children:t.jsx(S,{children:"You can click on the data point to open the Report."})}),t.jsx(d,{children:t.jsx(J,{size:"small",onClick:()=>{o(!1)},children:t.jsx(Y,{})})})]})})})}):t.jsx(t.Fragment,{})};function z(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}T${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}const y={FROM:"date_from",TO:"date_to"},Xe=e=>{const r=e.get(y.FROM),s=e.get(y.TO);return{date_from:r,date_to:s}},Ze=({dataRanges:e})=>{const[r,s]=Te(),{date_from:o,date_to:n}=Xe(r),i=A(o||e.minDate),a=A(n||e.maxDate);return{isCorrectTimeInterval:i.isValid()&&a.isValid()&&(i.isSame(a)||i.isBefore(a)),date_from:i,date_to:a,setSearchParams:s}},Pt=({dataRanges:e,isDashboardHideDates:r,setIsDashboardHideDates:s,isShowDateFilter:o})=>{const n=_e(),{isCorrectTimeInterval:i,date_from:a,date_to:c,setSearchParams:m}=Ze({dataRanges:e}),[h,l]=k.useState({date_from:a,date_to:c}),x=ve(h,300),D=i?"":"incorrect time interval";return k.useEffect(()=>{var T,O;if(n)return;const j=(T=x==null?void 0:x.date_to)==null?void 0:T.toDate(),L=(O=x==null?void 0:x.date_from)==null?void 0:O.toDate();m(C=>(C.delete(y.FROM),C.delete(y.TO),L&&C.append(y.FROM,z(L)),j&&C.append(y.TO,z(j)),C),{preventScrollReset:!0,replace:!0})},[x]),t.jsx(Ce,{dateAdapter:Se,adapterLocale:"en-gb",children:t.jsxs(I,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",alignItems:"flex-end",children:[t.jsx(I,{item:!0,children:t.jsx(d,{minWidth:180,display:"flex",justifyContent:"center",children:t.jsx(Ee,{control:t.jsx(be,{checked:r,onChange:j=>s(j.target.checked)}),label:"Show in order"})})}),o&&t.jsxs(t.Fragment,{children:[t.jsx(I,{item:!0,xs:12,md:2,children:t.jsxs(ke,{fullWidth:!0,children:[t.jsx(we,{children:"Period"}),t.jsxs(Ie,{variant:"standard",defaultValue:"",onChange:j=>{const[L,T]=j.target.value.split(",");if(L===""){l({date_from:null,date_to:null});return}const[O,C]=[Number(L),T],$=e.maxDate.subtract(O,C);l({date_from:$.isBefore(e.minDate)?e.minDate:$,date_to:e.maxDate})},children:[t.jsx(f,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(f,{value:"10,minutes",children:"Last 10 Minutes"}),t.jsx(f,{value:"30,minutes",children:"Last 30 Minutes"}),t.jsx(f,{value:"1,hours",children:"Last 1 Hours"}),t.jsx(f,{value:"2,hours",children:"Last 2 Hours"}),t.jsx(f,{value:"8,hours",children:"Last 8 Hours"}),t.jsx(f,{value:"24,hours",children:"Last 24 Hours"}),t.jsx(f,{value:"7,days",children:"Last 7 Days"}),t.jsx(f,{value:"14,days",children:"Last 14 Days"}),t.jsx(f,{value:"28,days",children:"Last 28 Days"}),t.jsx(f,{value:"60,days",children:"Last 60 Days"})]})]})}),t.jsx(I,{item:!0,children:t.jsxs(d,{display:"flex",alignItems:"center",gap:2,children:[t.jsx(H,{minDate:e.minDate,maxDate:e.maxDate&&c,slotProps:{textField:{variant:"standard"}},label:"From",value:h.date_from,onChange:j=>l(L=>({...L,date_from:j}))}),t.jsx(d,{height:1,display:"flex",alignItems:"center",children:t.jsx(S,{children:" - "})}),t.jsx(H,{minDate:e.minDate&&a,maxDate:e.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:h.date_to,onChange:j=>l(L=>({...L,date_to:j}))})]})}),t.jsx(I,{item:!0,xs:12,children:t.jsx(Pe,{unmountOnExit:!0,in:!i,children:t.jsxs(N,{severity:"error",children:[t.jsx(F,{children:"Error"}),D]})})})]})]})})};class et{constructor(){w(this,"at",0);w(this,"ch","");w(this,"text","");w(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(r){throw{name:"SyntaxError",message:r,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(r){r!==this.ch&&this.error(`Expected '${r}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var r="";if(this.ch==="-"&&(r="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),Number.NEGATIVE_INFINITY;for(;this.ch>="0"&&this.ch<="9";)r+=this.ch,this.next();if(this.ch===".")for(r+=".";this.next()&&this.ch>="0"&&this.ch<="9";)r+=this.ch;if(this.ch==="e"||this.ch==="E")for(r+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(r+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)r+=this.ch,this.next();return+r}string(){var r,s,o="",n;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),o;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(n=0,s=0;s<4&&(r=Number.parseInt(this.next(),16),!!isFinite(r));s++)n=n*16+r;o+=String.fromCharCode(n)}else if(this.escapee[this.ch])o+=this.escapee[this.ch];else break;else o+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),Number.NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),Number.POSITIVE_INFINITY}this.error("Unexpected '"+this.ch+"'")}array(){var r=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),r;for(;this.ch;){if(r.push(this.value()),this.white(),this.ch==="]")return this.check("]"),r;this.check(","),this.white()}}this.error("Bad array")}object(){var r,s={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),s;for(;this.ch;){if(r=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(s,r)&&this.error('Duplicate key "'+r+'"'),s[r]=this.value(),this.white(),this.ch==="}")return this.check("}"),s;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(r,s){let o;return this.text=r,this.at=0,this.ch=" ",o=this.value(),this.white(),this.ch&&this.error("Syntax error"),s!==void 0?function n(i,a){var c,m,h=i[a];if(h&&typeof h=="object")for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(m=n(h,c),m!==void 0?h[c]=m:delete h[c]);return s.call(i,a,h)}({"":o},""):o}}const Z=e=>new et().parse(e),tt=({api:e})=>({loader:({params:r,request:s})=>{E(r.projectId);const{searchParams:o}=new URL(s.url);let n=o.get(y.FROM),i=o.get(y.TO);return n&&!A(n).isValid()&&(n=null),i&&!A(i).isValid()&&(i=null),e.GET("/api/projects/{project_id}/dashboard",{params:{path:{project_id:r.projectId},query:{timestamp_start:n,timestamp_end:i}},parseAs:"text"}).then(u()).then(Z)}}),{loader:rt}=tt({api:v}),st={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:e},{DashboardWidgets:r}]=await Promise.all([g(()=>import("./index-CWfr-A2J.js"),__vite__mapDeps([2,1,3])),g(()=>import("./DashboardWidgets-BRGpEdMo.js"),__vite__mapDeps([4,1,5,3]))]);return{Component:()=>t.jsx(e,{Dashboard:({data:{widgets:s}})=>t.jsx(r,{widgets:s}),OnClickedPointComponent:Qe,OnHoveredPlotComponent:Ke})}},loader:rt,ErrorBoundary:_},ee={RELOAD_SNAPSHOTS:"reload-snapshots",DELETE_SNAPSHOT:"delete-snapshot"},ot=p.object({action:p.literal(ee.RELOAD_SNAPSHOTS)}),nt=p.object({action:p.literal(ee.DELETE_SNAPSHOT),snapshotId:p.string().uuid()}),te=e=>async({request:r,params:s})=>{E(s.projectId),X(r);const o=await r.json();if(ot.safeParse(o).success)return e.GET("/api/projects/{project_id}/reload",{params:{path:{project_id:s.projectId}}}).then(u({notThrowExc:!0}));const i=nt.safeParse(o);return i.success?e.DELETE("/api/projects/{project_id}/{snapshot_id}",{params:{path:{project_id:s.projectId,snapshot_id:i.data.snapshotId}}}).then(u({notThrowExc:!0})):{error:{status_code:!1,detail:"Unknown action"}}},it=({api:e})=>({loader:({params:r})=>(E(r.projectId),r.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/reports",{params:{path:{project_id:r.projectId}}}).then(u())),action:te(e)}),at=({api:e})=>({loader:({params:r})=>(E(r.projectId),r.snapshotId?Promise.resolve([]):e.GET("/api/projects/{project_id}/test_suites",{params:{path:{project_id:r.projectId}}}).then(u())),action:te(e)}),ct=({api:e})=>({loader:({params:r})=>{const{projectId:s,snapshotId:o}=r;return E(s),E(o),e.GET("/api/projects/{project_id}/{snapshot_id}/data",{params:{path:{project_id:s,snapshot_id:o}},parseAs:"text"}).then(u()).then(Z)}}),{loader:ht}=ct({api:v}),re={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:e,...r}=await g(()=>import("./index-CykUxFwF.js"),__vite__mapDeps([6,1,5,3]));return{Component:()=>t.jsx(e,{api:v}),...r}},loader:ht,ErrorBoundary:_},{loader:lt,action:dt}=it({api:v}),ut={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:e,...r}=await g(()=>import("./index-DJ2Ae9EQ.js"),__vite__mapDeps([7,1]));return{...r,Component:()=>t.jsxs(t.Fragment,{children:[t.jsx(B,{}),t.jsx(e,{type:"reports"})]})}},loader:lt,action:dt,ErrorBoundary:_,children:[re]},{loader:pt,action:ft}=at({api:v}),mt={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:e,...r}=await g(()=>import("./index-DJ2Ae9EQ.js"),__vite__mapDeps([7,1]));return{...r,Component:()=>t.jsxs(t.Fragment,{children:[t.jsx(B,{}),t.jsx(e,{type:"test suites"})]})}},loader:pt,action:ft,ErrorBoundary:_,children:[re]},{loader:jt}=qe({api:v}),xt={path:"projects/:projectId",lazy:()=>g(()=>import("./index-qb_niS19.js"),__vite__mapDeps([8,1])),loader:jt,ErrorBoundary:_,children:[st,ut,mt]},Lt=p.object({action:p.literal("edit-project")}),yt=p.object({action:p.literal("create-new-project")}),gt=p.object({action:p.literal("delete-project"),projectId:p.string().uuid()}),_t=({api:e})=>({loader:()=>e.GET("/api/projects").then(u()).then(r=>r.map(K)),action:async({request:r})=>{X(r);const s=await r.json();if(yt.safeParse(s).success)return e.POST("/api/projects",{body:s}).then(u({notThrowExc:!0}));const o=gt.safeParse(s);if(o.success)return e.DELETE("/api/projects/{project_id}",{params:{path:{project_id:o.data.projectId}}}).then(u({notThrowExc:!0}));if(Lt.safeParse(s).success)return e.POST("/api/projects/{project_id}/info",{params:{path:{project_id:s.id}},body:s}).then(u({notThrowExc:!0}));throw"Undefined action"}}),{loader:vt,action:Ct}=_t({api:v}),St={index:!0,lazy:()=>g(()=>import("./index-DJhIIsZf.js"),__vite__mapDeps([9,1])).then(e=>({...e,Component:()=>t.jsxs(t.Fragment,{children:[t.jsx(B,{}),t.jsx(e.Component,{})]})})),loader:vt,action:Ct,ErrorBoundary:_},Et={...Ye,children:[St,xt,Be],ErrorBoundary:_},bt=Oe([Et]),U=document.getElementById("root");U&&Ae.createRoot(U).render(t.jsx(M.StrictMode,{children:t.jsxs(De,{theme:Fe,children:[t.jsx(Re,{}),t.jsx(Me,{router:bt})]})}));export{N as A,Pt as D,Z as J,It as a,u as r,q as u};
