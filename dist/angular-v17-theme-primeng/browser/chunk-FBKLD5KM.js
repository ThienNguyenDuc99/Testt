import{i as w,k as W,l as X,m as D,n as A,v as Y,x as Z}from"./chunk-36VCSOLO.js";import{$ as F,Ca as N,G as R,I as M,Ia as K,N as a,Na as U,O,Ta as b,Ua as J,V as p,Va as S,W as g,Wa as z,X as r,Xa as j,Y as B,Za as I,ba as l,ca as o,da as T,ea as P,fa as H,ga as v,ka as u,la as L,lb as Q,ma as k,n as _,qa as C,s as y,sa as x,t as h,ta as E,ua as V,va as c,wa as G,xa as f}from"./chunk-ZCUXDVPO.js";function re(e,i){e&1&&v(0)}function me(e,i){e&1&&v(0)}var q=e=>({$implicit:e});function pe(e,i){if(e&1&&(P(0),p(1,me,1,0,"ng-container",4),H()),e&2){let t=u().$implicit,m=u();a(),r("ngTemplateOutlet",m.markerTemplate)("ngTemplateOutletContext",N(2,q,t))}}function ce(e,i){e&1&&T(0,"div",10),e&2&&g("data-pc-section","marker")}function se(e,i){e&1&&T(0,"div",11)}function de(e,i){e&1&&v(0)}function ue(e,i){if(e&1&&(l(0,"div",2)(1,"div",3),p(2,re,1,0,"ng-container",4),o(),l(3,"div",5),p(4,pe,2,4,"ng-container",6)(5,ce,1,1,"ng-template",null,7,U)(7,se,1,0,"div",8),o(),l(8,"div",9),p(9,de,1,0,"ng-container",4),o()()),e&2){let t=i.$implicit,m=i.last,n=V(6),s=u();g("data-pc-section","event"),a(),g("data-pc-section","opposite"),a(),r("ngTemplateOutlet",s.oppositeTemplate)("ngTemplateOutletContext",N(11,q,t)),a(),g("data-pc-section","seperator"),a(),r("ngIf",s.markerTemplate)("ngIfElse",n),a(3),r("ngIf",!m),a(),g("data-pc-section","content"),a(),r("ngTemplateOutlet",s.contentTemplate)("ngTemplateOutletContext",N(13,q,t))}}var fe=(e,i,t,m,n,s,d)=>({"p-timeline p-component":!0,"p-timeline-left":e,"p-timeline-right":i,"p-timeline-top":t,"p-timeline-bottom":m,"p-timeline-alternate":n,"p-timeline-vertical":s,"p-timeline-horizontal":d}),te=(()=>{class e{el;value;style;styleClass;align="left";layout="vertical";templates;contentTemplate;oppositeTemplate;markerTemplate;constructor(t){this.el=t}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"opposite":this.oppositeTemplate=t.template;break;case"marker":this.markerTemplate=t.template;break}})}static \u0275fac=function(m){return new(m||e)(O(M))};static \u0275cmp=y({type:e,selectors:[["p-timeline"]],contentQueries:function(m,n,s){if(m&1&&C(s,D,4),m&2){let d;x(d=E())&&(n.templates=d)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},decls:2,vars:15,consts:[[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["marker",""],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(m,n){m&1&&(l(0,"div",0),p(1,ue,10,15,"div",1),o()),m&2&&(F(n.styleClass),r("ngStyle",n.style)("ngClass",K(7,fe,n.align==="left",n.align==="right",n.align==="top",n.align==="bottom",n.align==="alternate",n.layout==="vertical",n.layout==="horizontal")),g("data-pc-name","timeline")("data-pc-section","root"),a(),r("ngForOf",n.value))},dependencies:[b,J,S,j,z],styles:[`@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}
`],encapsulation:2,changeDetection:0})}return e})(),ie=(()=>{class e{static \u0275fac=function(m){return new(m||e)};static \u0275mod=h({type:e});static \u0275inj=_({imports:[I,A]})}return e})();function ge(e,i){e&1&&v(0)}function _e(e,i){if(e&1&&(l(0,"div",8),k(1,1),p(2,ge,1,0,"ng-container",6),o()),e&2){let t=u();a(2),r("ngTemplateOutlet",t.headerTemplate)}}function he(e,i){e&1&&v(0)}function Te(e,i){if(e&1&&(l(0,"div",9),c(1),p(2,he,1,0,"ng-container",6),o()),e&2){let t=u();a(),f(" ",t.header," "),a(),r("ngTemplateOutlet",t.titleTemplate)}}function ye(e,i){e&1&&v(0)}function Ce(e,i){if(e&1&&(l(0,"div",10),c(1),p(2,ye,1,0,"ng-container",6),o()),e&2){let t=u();a(),f(" ",t.subheader," "),a(),r("ngTemplateOutlet",t.subtitleTemplate)}}function xe(e,i){e&1&&v(0)}function Ee(e,i){e&1&&v(0)}function be(e,i){if(e&1&&(l(0,"div",11),k(1,2),p(2,Ee,1,0,"ng-container",6),o()),e&2){let t=u();a(2),r("ngTemplateOutlet",t.footerTemplate)}}var Se=["*",[["p-header"]],[["p-footer"]]],Ie=["*","p-header","p-footer"],ne=(()=>{class e{el;header;subheader;style;styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(m){return new(m||e)(O(M))};static \u0275cmp=y({type:e,selectors:[["p-card"]],contentQueries:function(m,n,s){if(m&1&&(C(s,W,5),C(s,X,5),C(s,D,4)),m&2){let d;x(d=E())&&(n.headerFacet=d.first),x(d=E())&&(n.footerFacet=d.first),x(d=E())&&(n.templates=d)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:Ie,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(m,n){m&1&&(L(Se),l(0,"div",0),p(1,_e,3,1,"div",1),l(2,"div",2),p(3,Te,3,2,"div",3)(4,Ce,3,2,"div",4),l(5,"div",5),k(6),p(7,xe,1,0,"ng-container",6),o(),p(8,be,3,1,"div",7),o()()),m&2&&(F(n.styleClass),r("ngClass","p-card p-component")("ngStyle",n.style),g("data-pc-name","card"),a(),r("ngIf",n.headerFacet||n.headerTemplate),a(2),r("ngIf",n.header||n.titleTemplate),a(),r("ngIf",n.subheader||n.subtitleTemplate),a(3),r("ngTemplateOutlet",n.contentTemplate),a(),r("ngIf",n.footerFacet||n.footerTemplate))},dependencies:[b,S,j,z],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(m){return new(m||e)};static \u0275mod=h({type:e});static \u0275inj=_({imports:[I,A]})}return e})();function we(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t.status," ")}}function Me(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t.status," ")}}function Oe(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t.status," ")}}function Fe(e,i){if(e&1&&(l(0,"small",13),c(1),o()),e&2){let t=i.$implicit;a(),G(t.date)}}function ke(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t.status," ")}}function Ne(e,i){if(e&1&&(l(0,"span",14),T(1,"i",15),o()),e&2){let t=i.$implicit;B("background-color",t.color),a(),r("ngClass",t.icon)}}function ze(e,i){if(e&1&&T(0,"img",20),e&2){let t=u().$implicit;r("src","assets/demo/images/product/"+t.image,R)("alt",t.name)}}function je(e,i){if(e&1&&(l(0,"p-card",16),p(1,ze,1,2,"img",17),l(2,"p",18),c(3,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),o(),T(4,"button",19),o()),e&2){let t=i.$implicit;r("header",t.status)("subheader",t.date),a(),r("ngIf",t.image)}}function Ae(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t," ")}}function $e(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t," ")}}function Qe(e,i){if(e&1&&c(0),e&2){let t=i.$implicit;f(" ",t," ")}}function qe(e,i){e&1&&c(0," \xA0 ")}var ae=(()=>{let i=class i{constructor(){this.events1=[],this.events2=[]}ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:w.SHOPPING_CART,color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:w.COG,color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:w.ENVELOPE,color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:w.CHECK,color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["ng-component"]],decls:48,vars:8,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card"],[3,"value"],["pTemplate","content"],["align","right",3,"value"],["align","alternate",3,"value"],["pTemplate","opposite"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","z-1","w-2rem","h-2rem","align-items-center","justify-content-center","text-white","border-circle","shadow-2"],[3,"ngClass"],[3,"header","subheader"],["width","200","class","shadow-2",3,"src","alt",4,"ngIf"],[1,"line-height-3","my-3"],["pButton","","label","Read more",1,"p-button-outlined","mb-5"],["width","200",1,"shadow-2",3,"src","alt"]],template:function(n,s){n&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),c(4,"Left Align"),o(),l(5,"p-timeline",3),p(6,we,1,1,"ng-template",4),o()()(),l(7,"div",1)(8,"div",2)(9,"h5"),c(10,"Right Align"),o(),l(11,"p-timeline",5),p(12,Me,1,1,"ng-template",4),o()()(),l(13,"div",1)(14,"div",2)(15,"h5"),c(16,"Alternate Align"),o(),l(17,"p-timeline",6),p(18,Oe,1,1,"ng-template",4),o()()(),l(19,"div",1)(20,"div",2)(21,"h5"),c(22,"Opposite Content"),o(),l(23,"p-timeline",3),p(24,Fe,2,1,"ng-template",4)(25,ke,1,1,"ng-template",7),o()()()(),l(26,"div",2)(27,"h5"),c(28,"Customized"),o(),l(29,"p-timeline",8),p(30,Ne,2,3,"ng-template",9)(31,je,5,3,"ng-template",4),o()(),l(32,"div",2)(33,"h5"),c(34,"Horizontal"),o(),l(35,"h6"),c(36,"Top Align"),o(),l(37,"p-timeline",10),p(38,Ae,1,1,"ng-template",4),o(),l(39,"h6"),c(40,"Bottom Align"),o(),l(41,"p-timeline",11),p(42,$e,1,1,"ng-template",4),o(),l(43,"h6"),c(44,"Alternate Align"),o(),l(45,"p-timeline",12),p(46,Qe,1,1,"ng-template",4)(47,qe,1,0,"ng-template",7),o()()),n&2&&(a(5),r("value",s.events1),a(6),r("value",s.events1),a(6),r("value",s.events1),a(6),r("value",s.events1),a(6),r("value",s.events1),a(8),r("value",s.events2),a(4),r("value",s.events2),a(4),r("value",s.events2))},dependencies:[b,S,te,D,Y,ne],styles:["@media screen and (max-width: 960px){  .customized-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]});let e=i;return e})();var oe=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=h({type:i}),i.\u0275inj=_({imports:[Q.forChild([{path:"",component:ae}]),Q]});let e=i;return e})();var lt=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=h({type:i}),i.\u0275inj=_({imports:[I,ie,Z,le,oe]});let e=i;return e})();export{lt as TimelineDemoModule};