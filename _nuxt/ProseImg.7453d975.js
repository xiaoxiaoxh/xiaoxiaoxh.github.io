import{g as a,k as c,o,c as h,q as f,y as l}from"./entry.86379cce.js";const u=/\/$|\/\?/;function d(t="",e=!1){return e?u.test(t):t.endsWith("/")}function i(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(d(t,!0))return t||"/";const[r,...s]=t.split("?");return r+"/"+(s.length>0?`?${s.join("?")}`:"")}function g(t=""){return t.startsWith("/")}function m(t=""){return g(t)?t:"/"+t}function S(t){return t&&t!=="/"}const L=/^\.?\//;function _(t,...e){let r=t||"";for(const s of e.filter(n=>S(n)))if(r){const n=s.replace(L,"");r=i(r)+n}else r=s;return r}const R=["src","alt","width","height"],y=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,r=c(()=>{var s;if((s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")){const n=m(i(l().app.baseURL));if(n!=="/"&&!e.src.startsWith(n))return _(n,e.src)}return e.src});return(s,n)=>(o(),h("img",{src:f(r),alt:t.alt,width:t.width,height:t.height},null,8,R))}});export{y as default};