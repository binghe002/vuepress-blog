(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(e,t,o){"use strict";o.r(t),o.d(t,"getblog",(function(){return r})),o.d(t,"addMsg",(function(){return c})),o.d(t,"getPv",(function(){return a}));var n=o(340);const s=o.n(n).a.create({baseURL:"127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://127.0.0.1:3000":"https://zmln1021.cn:3000",withCredentials:!1});s.interceptors.request.use(e=>e,e=>{console.log(e),Promise.reject(e)}),s.interceptors.response.use(e=>e,e=>Promise.reject(e));const r=e=>s.get("/getblog?theme="+e),c=e=>s({method:"post",url:"/addblog",data:e}),a=e=>s.get("/addpv?theme="+e)}}]);