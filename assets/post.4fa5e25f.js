import{_ as p,a as c,o as r,c as n,b as s,w as i,v as a,F as m,r as u,d as b,t as h}from"./index.506e7c17.js";const _={data(){return{postBody:"",postName:"",postJob:"",errors:[]}},methods:{postPost(){var l={name:this.postName,job:this.postJob};this.postBody=JSON.stringify(l),c.post("https://reqres.in/api/users",{body:this.postBody}).then(t=>{}).catch(t=>{this.errors.push(t)}),document.getElementById("name").innerHTML='<div class="fs-4">Nama : '+this.postName+"</div>",document.getElementById("job").innerHTML='<div class="fs-4">Job : '+this.postJob+"</div>",console.log(this.postBody)}}},f={class:"card mx-4",id:"top"},v=s("div",{class:"card-header pb-0"},[s("h2",null,"Tambah User")],-1),y={class:"card-body px-3 pt-0 pb-2"},x={class:"mb-3"},N=s("label",{for:"Name",class:"form-label fs-5 text-uppercase font-weight-bolder opacity-7"},"Name",-1),g=s("label",{for:"Job",class:"form-label fs-5 text-uppercase font-weight-bolder opacity-7"},"Job",-1),J=s("br",null,null,-1),B=s("div",{id:"name"},null,-1),k=s("div",{id:"job"},null,-1),w={key:0};function T(l,t,V,j,o,d){return r(),n("div",f,[v,s("div",y,[s("div",x,[N,i(s("input",{type:"text",class:"form-control",id:"Name","onUpdate:modelValue":t[0]||(t[0]=e=>o.postName=e)},null,512),[[a,o.postName]]),s("div",null,[g,i(s("input",{type:"text",class:"form-control",id:"Job","onUpdate:modelValue":t[1]||(t[1]=e=>o.postJob=e)},null,512),[[a,o.postJob]])]),J,s("button",{onClick:t[2]||(t[2]=e=>d.postPost()),class:"btn btn-primary"},"Save"),B,k,o.errors&&o.errors.length?(r(),n("ul",w,[(r(!0),n(m,null,u(o.errors,e=>(r(),n("li",null,h(e.message),1))),256))])):b("",!0)])])])}const L=p(_,[["render",T]]);export{L as default};
