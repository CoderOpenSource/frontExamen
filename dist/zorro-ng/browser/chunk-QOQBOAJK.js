import{a as N}from"./chunk-MSGFT5JS.js";import{b as F}from"./chunk-6QFG5ZSD.js";import{Ba as d,Ca as B,Oa as E,Qa as C,Qb as A,Rb as V,Ta as n,Tb as $,Ua as a,Wa as I,Xa as b,Ya as v,Za as _,_a as p,a as w,aa as T,b as y,d as O,db as o,eb as f,gb as k,ja as g,ka as h,mb as M}from"./chunk-TYC4EHML.js";var l=O(N());function P(c,s){if(c&1){let r=v();I(0),n(1,"button",7),_("click",function(){g(r);let t=p().$implicit,i=p();return h(i.crearConsulta(t))}),o(2," Crear Consulta "),a(),b()}}function D(c,s){if(c&1){let r=v();I(0),n(1,"button",8),_("click",function(){g(r);let t=p().$implicit,i=p();return h(i.aceptarCita(t.id))}),o(2," Atendida "),a(),n(3,"button",9),_("click",function(){g(r);let t=p().$implicit,i=p();return h(i.cancelarCita(t.id))}),o(4," Cancelar "),a(),b()}}function L(c,s){if(c&1&&(n(0,"tr")(1,"td"),o(2),a(),n(3,"td"),o(4),a(),n(5,"td"),o(6),a(),n(7,"td"),o(8),a(),n(9,"td"),o(10),a(),n(11,"td"),E(12,P,3,0,"ng-container",6)(13,D,5,0,"ng-container",6),a()()),c&2){let r=s.$implicit;d(2),f(r.fecha),d(2),f(r.hora),d(2),k("",r.pacienteNombre," ",r.pacienteApellido,""),d(2),f(r.especialidadNombre),d(2),f(r.estado),d(2),C("ngIf",r.estado==="atendida"&&!r.consultaCreada),d(),C("ngIf",r.estado==="aceptado")}}var G=(()=>{let s=class s{constructor(e){this.http=e,this.citas=[],this.medicoId=parseInt(localStorage.getItem("userId")||"0",10)-1}ngOnInit(){this.loadCitas()}loadCitas(){this.http.get("http://143.198.147.110/api/citas").subscribe(e=>{this.citas=e.filter(t=>t.medicoId===this.medicoId)},e=>{l.default.fire({title:"Error al cargar citas",text:"Por favor, int\xE9ntalo nuevamente.",icon:"error",confirmButtonText:"Aceptar"}),console.error("Error loading citas",e)})}aceptarCita(e){this.http.post(`http://143.198.147.110/api/citas/aceptar?citaId=${e}&medicoId=${this.medicoId}`,{},{responseType:"text"}).subscribe(t=>{l.default.fire("Cita atendida",t,"success"),this.loadCitas()},t=>{l.default.fire({title:"Error al aceptar cita",text:"Por favor, int\xE9ntalo nuevamente.",icon:"error",confirmButtonText:"Aceptar"}),console.error("Error al aceptar cita",t)})}cancelarCita(e){this.http.post(`http://143.198.147.110/api/citas/cancelar/medico?citaId=${e}&medicoId=${this.medicoId}`,{},{responseType:"text"}).subscribe(t=>{l.default.fire("Cita cancelada",t,"success"),this.loadCitas()},t=>{l.default.fire({title:"Error al cancelar cita",text:"Por favor, int\xE9ntalo nuevamente.",icon:"error",confirmButtonText:"Aceptar"}),console.error("Error al cancelar cita",t)})}crearConsulta(e){let t=[];l.default.fire({title:"Crear Consulta",html:`
        <textarea id="diagnostico" class="swal2-textarea" placeholder="Diagn\xF3stico"></textarea>
        <textarea id="tratamiento" class="swal2-textarea" placeholder="Tratamiento"></textarea>
        <textarea id="notas" class="swal2-textarea" placeholder="Notas"></textarea>
        <input type="text" id="sintoma" class="swal2-input" placeholder="Agregar s\xEDntoma">
        <button id="addSintomaButton" class="swal2-confirm swal2-styled" style="margin-top: 10px;">Agregar S\xEDntoma</button>
        <ul id="sintomasList"></ul>
      `,focusConfirm:!1,didOpen:()=>{let i=document.getElementById("addSintomaButton"),u=document.getElementById("sintomasList"),m=document.getElementById("sintoma");i?.addEventListener("click",()=>{let x=m.value.trim();if(x){t.push(x);let S=document.createElement("li");S.textContent=x,u?.appendChild(S),m.value=""}})},preConfirm:()=>{let i=document.getElementById("diagnostico").value,u=document.getElementById("tratamiento").value,m=document.getElementById("notas").value;return i||l.default.showValidationMessage("El diagn\xF3stico es obligatorio"),{diagnostico:i,tratamiento:u,notas:m,sintomas:t}}}).then(i=>{if(i.isConfirmed){let u={citaId:e.id,pacienteId:e.pacienteId,medicoId:e.medicoId,fecha:e.fecha,diagnostico:i.value?.diagnostico,sintomas:i.value?.sintomas,tratamiento:i.value?.tratamiento,notas:i.value?.notas};this.http.post("http://143.198.147.110/api/consultas",u,{responseType:"text"}).subscribe(m=>{l.default.fire("Consulta creada","success");let x=y(w({},e),{consultaCreada:!0});this.http.put(`http://143.198.147.110/api/citas/${e.id}`,x).subscribe(()=>{this.loadCitas()})},m=>{l.default.fire({title:"Error al crear consulta",text:"Por favor, int\xE9ntalo nuevamente.",icon:"error",confirmButtonText:"Aceptar"}),console.error("Error al crear consulta",m)})}})}};s.\u0275fac=function(t){return new(t||s)(B(F))},s.\u0275cmp=T({type:s,selectors:[["app-medico-citas"]],standalone:!0,features:[M],decls:20,vars:1,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"text-2xl","font-bold","mb-4","text-center"],[1,"min-w-full","bg-white","shadow-lg","rounded-lg"],[2,"background-color","#343a40","color","white"],[2,"padding","12px"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"bg-green-500","text-white","px-3","py-1","rounded-lg","font-bold","mr-2",3,"click"],[1,"bg-blue-500","text-white","px-3","py-1","rounded-lg","font-bold","mr-2",3,"click"],[1,"bg-red-500","text-white","px-3","py-1","rounded-lg","font-bold",3,"click"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"h1",1),o(2,"Citas del M\xE9dico"),a(),n(3,"table",2)(4,"thead")(5,"tr",3)(6,"th",4),o(7,"Fecha"),a(),n(8,"th",4),o(9,"Hora"),a(),n(10,"th",4),o(11,"Paciente"),a(),n(12,"th",4),o(13,"Especialidad"),a(),n(14,"th",4),o(15,"Estado"),a(),n(16,"th",4),o(17,"Acciones"),a()()(),n(18,"tbody"),E(19,L,14,8,"tr",5),a()()()),t&2&&(d(19),C("ngForOf",i.citas))},dependencies:[$,A,V]});let c=s;return c})();export{G as MedicoCitasComponent};