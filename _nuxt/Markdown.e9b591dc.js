import s from"./ContentSlot.5ce66280.js";import{g as o,K as u,k as f,N as m}from"./entry.86379cce.js";import"./node.e4a9c3bc.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};