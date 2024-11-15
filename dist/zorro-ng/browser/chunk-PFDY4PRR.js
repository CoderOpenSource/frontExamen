import{a as M,b as I,e as O,m as P}from"./chunk-OGDTTBTQ.js";import{b as w}from"./chunk-6QFG5ZSD.js";import{Ba as a,Ca as u,Oa as h,Qa as m,Qb as E,Rb as S,Ta as e,Tb as v,Ua as t,Za as x,_a as b,aa as g,db as i,eb as c,gb as f,ib as C,jb as y,kb as _,mb as F}from"./chunk-TYC4EHML.js";function L(n,o){n&1&&(e(0,"div",7),i(1," No hay citas hoy "),t())}function T(n,o){if(n&1&&(e(0,"tr",12)(1,"td",13),i(2),t(),e(3,"td",13),i(4),t(),e(5,"td",13),i(6),t(),e(7,"td",13),i(8),t(),e(9,"td",13),i(10),t(),e(11,"td",13),i(12),t()()),n&2){let r=o.$implicit;a(2),c(r.fecha),a(2),c(r.hora),a(2),f("",r.medicoNombre," ",r.medicoApellido,""),a(2),f("",r.pacienteNombre," ",r.pacienteApellido,""),a(2),c(r.especialidadNombre),a(2),c(r.estado)}}function k(n,o){if(n&1&&(e(0,"table",8)(1,"thead")(2,"tr",9)(3,"th",10),i(4,"Fecha"),t(),e(5,"th",10),i(6,"Hora"),t(),e(7,"th",10),i(8,"M\xE9dico"),t(),e(9,"th",10),i(10,"Paciente"),t(),e(11,"th",10),i(12,"Especialidad"),t(),e(13,"th",10),i(14,"Estado"),t()()(),e(15,"tbody"),h(16,T,13,8,"tr",11),t()()),n&2){let r=b();a(16),m("ngForOf",r.citasFiltradas)}}var V=(()=>{let o=class o{constructor(l){this.http=l,this.citas=[],this.citasFiltradas=[],this.fechaFiltro="",this.hoy=new Date().toISOString().split("T")[0]}ngOnInit(){this.obtenerCitas()}obtenerCitas(){this.http.get("http://143.198.147.110/api/citas").subscribe(l=>{this.citas=l,this.citasFiltradas=l.filter(d=>d.fecha===this.hoy)},l=>{console.error("Error al cargar las citas",l)})}filtrarPorFecha(){this.fechaFiltro?this.citasFiltradas=this.citas.filter(l=>l.fecha===this.fechaFiltro):this.citasFiltradas=this.citas}};o.\u0275fac=function(d){return new(d||o)(u(w))},o.\u0275cmp=g({type:o,selectors:[["app-citas-list"]],standalone:!0,features:[F],decls:9,vars:3,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"text-2xl","font-bold","mb-4","text-center"],[1,"flex","items-center","justify-center","mb-4"],["type","date",1,"border","p-2","rounded",3,"ngModelChange","ngModel"],[1,"ml-2","px-4","py-2","bg-blue-500","text-white","rounded","hover:bg-blue-600",3,"click"],["class","text-center text-gray-600 mb-4",4,"ngIf"],["class","min-w-full bg-white shadow-lg rounded-lg",4,"ngIf"],[1,"text-center","text-gray-600","mb-4"],[1,"min-w-full","bg-white","shadow-lg","rounded-lg"],[1,"bg-gray-800","text-white"],[1,"p-4","text-left"],["class","hover:bg-gray-100",4,"ngFor","ngForOf"],[1,"hover:bg-gray-100"],[1,"p-4"]],template:function(d,s){d&1&&(e(0,"div",0)(1,"h1",1),i(2,"Listado de Citas"),t(),e(3,"div",2)(4,"input",3),_("ngModelChange",function(p){return y(s.fechaFiltro,p)||(s.fechaFiltro=p),p}),t(),e(5,"button",4),x("click",function(){return s.filtrarPorFecha()}),i(6," Filtrar por fecha "),t()(),h(7,L,2,0,"div",5)(8,k,17,1,"table",6),t()),d&2&&(a(4),C("ngModel",s.fechaFiltro),a(3),m("ngIf",s.citasFiltradas.length===0&&s.fechaFiltro===s.hoy),a(),m("ngIf",s.citasFiltradas.length>0))},dependencies:[v,E,S,P,M,I,O],styles:[".container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;border-bottom:1px solid #ddd}th[_ngcontent-%COMP%]{background-color:#390303;font-weight:700}"]});let n=o;return n})();export{V as CitasListComponent};
