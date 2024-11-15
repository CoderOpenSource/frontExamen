import{d as N,h as z,i as G}from"./chunk-JLWWYKMY.js";import{a as A,b as W,c as D,d as R,e as H,f as q,l as B,m as U}from"./chunk-OGDTTBTQ.js";import{b as O,c as F}from"./chunk-6QFG5ZSD.js";import{Ba as s,Ca as w,Oa as b,Pb as T,Qa as a,Rb as L,Ta as i,Tb as j,Ua as n,Va as p,Ya as P,Za as _,_a as C,aa as k,db as l,eb as I,fb as V,ib as v,ja as g,jb as y,ka as u,kb as M,la as c,ma as S,mb as E}from"./chunk-TYC4EHML.js";function J(e,r){e&1&&(c(),p(0,"path",29))}function K(e,r){e&1&&(c(),p(0,"path",30))}function Q(e,r){e&1&&(c(),p(0,"path",31))}function X(e,r){e&1&&(c(),p(0,"path",32))}function Y(e,r){if(e&1&&(i(0,"div",33),l(1),n()),e&2){let h=C();s(),I(h.error)}}function Z(e,r){if(e&1&&(i(0,"div",34),l(1),n()),e&2){let h=C();a("ngClass",h.toastClass),s(),V(" ",h.toastMessage," ")}}var de=(()=>{let r=class r{constructor(d,t,o){this.http=d,this.router=t,this.authService=o,this.email="",this.password="",this.error=null,this.showPassword=!1,this.toastMessage=null,this.toastClass=""}togglePasswordVisibility(){this.showPassword=!this.showPassword}showToast(d,t){this.toastMessage=d,this.toastClass=t==="success"?"bg-green-500 text-white":"bg-red-500 text-white",setTimeout(()=>{this.toastMessage=null,t==="success"&&this.router.navigate(["/dashboard"])},2e3)}onSubmit(){let d={username:this.email,password:this.password};this.http.post("http://143.198.147.110/authenticate/",d).subscribe(t=>{console.log("Response:",t),t.token?(this.authService.setSession(t.token,t.rol,t.id),this.showToast("Usuario loggeado con \xE9xito","success")):this.showToast("No se recibi\xF3 el token de autenticaci\xF3n.","error")},t=>{console.error("Authentication error:",t),this.showToast("Contrase\xF1a incorrecta o correo electr\xF3nico inv\xE1lido.","error")})}};r.\u0275fac=function(t){return new(t||r)(w(O),w(N),w(G))},r.\u0275cmp=k({type:r,selectors:[["app-login"]],standalone:!0,features:[E],decls:35,vars:9,consts:[["loginForm","ngForm"],[1,"flex","flex-col","items-center","justify-center","h-screen","bg-green-300"],[1,"text-center"],[1,"text-4xl","font-bold","text-green-600"],[1,"mt-2","text-gray-600"],[1,"mt-6","w-full","max-w-md"],[1,"bg-green-200","shadow-md","rounded","px-8","pt-6","pb-8","mb-4",3,"ngSubmit"],[1,"mb-4","text-center"],["src","https://res.cloudinary.com/dkpuiyovk/image/upload/v1731598325/pngwing.com_33_fzyg18.png","alt","Logo",1,"w-40","h-40","mx-auto","rounded-full"],[1,"mb-4"],["for","email",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["id","email","type","email","placeholder","doctor@clinic.com","required","","name","email",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline",3,"ngModelChange","ngModel"],[1,"mb-6"],["for","password",1,"block","text-gray-700","text-sm","font-bold","mb-2"],[1,"relative"],["id","password","placeholder","********","required","","name","password",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","mb-3","leading-tight","focus:outline-none","focus:shadow-outline",3,"ngModelChange","type","ngModel"],["type","button",1,"absolute","inset-y-0","right-0","pr-3","flex","items-center","text-sm","leading-5","text-blue-600",3,"click"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"h-6","w-6","text-blue-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a21.87 21.87 0 015.883-6.181M15 12a3 3 0 11-6 0 3 3 0 016 0z",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6",4,"ngIf"],[1,"flex","items-center","justify-between"],[1,"block","text-gray-500","font-bold"],["type","checkbox",1,"mr-2","leading-tight"],[1,"text-sm"],["type","submit",1,"bg-green-500","hover:bg-green-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline"],["class","text-red-500 text-sm mt-4",4,"ngIf"],["class","fixed bottom-0 right-0 m-6 p-3 rounded shadow-lg",3,"ngClass",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a21.87 21.87 0 015.883-6.181M15 12a3 3 0 11-6 0 3 3 0 016 0z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6"],[1,"text-red-500","text-sm","mt-4"],[1,"fixed","bottom-0","right-0","m-6","p-3","rounded","shadow-lg",3,"ngClass"]],template:function(t,o){if(t&1){let f=P();i(0,"div",1)(1,"div",2)(2,"h1",3),l(3,"Gesti\xF3n de Historia Cl\xEDnica"),n(),i(4,"p",4),l(5,"Administra las historias cl\xEDnicas de los pacientes de manera r\xE1pida y segura."),n()(),i(6,"div",5)(7,"form",6,0),_("ngSubmit",function(){return g(f),u(o.onSubmit())}),i(9,"div",7),p(10,"img",8),n(),i(11,"div",9)(12,"label",10),l(13," Correo electr\xF3nico "),n(),i(14,"input",11),M("ngModelChange",function(m){return g(f),y(o.email,m)||(o.email=m),u(m)}),n()(),i(15,"div",12)(16,"label",13),l(17," Contrase\xF1a "),n(),i(18,"div",14)(19,"input",15),M("ngModelChange",function(m){return g(f),y(o.password,m)||(o.password=m),u(m)}),n(),i(20,"button",16),_("click",function(){return g(f),u(o.togglePasswordVisibility())}),c(),i(21,"svg",17),b(22,J,1,0,"path",18)(23,K,1,0,"path",19)(24,Q,1,0,"path",20)(25,X,1,0,"path",21),n()()()(),S(),i(26,"div",22)(27,"label",23),p(28,"input",24),i(29,"span",25),l(30,"Recordarme"),n()(),i(31,"button",26),l(32," Ingresar "),n()(),b(33,Y,2,1,"div",27),n()(),b(34,Z,2,2,"div",28),n()}t&2&&(s(14),v("ngModel",o.email),s(5),a("type",o.showPassword?"text":"password"),v("ngModel",o.password),s(3),a("ngIf",!o.showPassword),s(),a("ngIf",!o.showPassword),s(),a("ngIf",o.showPassword),s(),a("ngIf",o.showPassword),s(8),a("ngIf",o.error),s(),a("ngIf",o.toastMessage))},dependencies:[j,T,L,U,q,A,W,D,B,H,R,F,z],styles:[".fixed[_ngcontent-%COMP%]{position:fixed}.bottom-0[_ngcontent-%COMP%]{bottom:0}.right-0[_ngcontent-%COMP%]{right:0}.m-6[_ngcontent-%COMP%]{margin:1.5rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.rounded[_ngcontent-%COMP%]{border-radius:.375rem}.shadow-lg[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.bg-green-500[_ngcontent-%COMP%]{background-color:#48bb78}.bg-red-500[_ngcontent-%COMP%]{background-color:#f56565}.text-white[_ngcontent-%COMP%]{color:#fff}"]});let e=r;return e})();export{de as LoginComponent};