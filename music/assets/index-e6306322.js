import{k as n,d as o,a as r,c as l,e as a,t as s,u as t}from"./index-408312df.js";const c=n("main",{state:()=>({message:"helloworld!!!",refreshToken:"aaaa",authToken:"",nickName:""})}),d=o({__name:"index",setup(m){const e=c();return console.log(e.message),setInterval(()=>{e.$patch({message:"hello"+new Date().toLocaleString()})},1e3),(u,i)=>(r(),l("div",null,[a("p",null,s(t(e).message),1),a("p",null,s(t(e).refreshToken),1)]))}});export{d as default};
