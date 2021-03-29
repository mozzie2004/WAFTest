(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(12),o=n.n(a),c=n(13),s=n(23),i=n(22),d=n(7),u={foods:[],loading:!1,error:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOODS-LOADED":return Object(d.a)(Object(d.a)({},e),{},{foods:t.payload,loading:!1,error:!1});case"FOODS-REQUESTED":return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:!1});case"FOODS-ERROR":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:!0});case"FOODS-UPDATE":var n=e.foods.findIndex((function(e){return e.id.toString()===t.payload.id.toString()}));return Object(d.a)(Object(d.a)({},e),{},{foods:[].concat(Object(i.a)(e.foods.slice(0,n)),[t.payload],Object(i.a)(e.foods.slice(n+1)))});case"FOODS-ADD":return Object(d.a)(Object(d.a)({},e),{},{foods:[].concat(Object(i.a)(e.foods),[t.payload])});case"FOODS-DEL":var r=e.foods.findIndex((function(e){return e.id.toString()===t.payload.toString()}));return Object(d.a)(Object(d.a)({},e),{},{foods:[].concat(Object(i.a)(e.foods.slice(0,r)),Object(i.a)(e.foods.slice(r+1)))});default:return Object(d.a)({},e)}},j=Object(s.a)((function(e){return function(t){return function(n){console.group("action",n.type),console.log("prev state",e.getState()),console.log("action",n);var r=t(n);return console.log("next state",e.getState()),console.groupEnd(),r}}})),b=Object(s.c)(l,j),f=function(e){return{type:"FOODS-LOADED",payload:e}},O=function(){return{type:"FOODS-REQUESTED"}},p=function(){return{type:"FOODS-ERROR"}},h=n(17),m=n(19),x=n(15),g=n.n(x),v=n(27),y=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/foods");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("server error");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/foods",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/foods",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/foods/"+t,{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(64),w=n(65),N=n(60),k=n(68),F=n(4),R=Object(c.b)((function(e){return{foods:e.foods}}),{foodsError:p,foodAdd:function(e){return{type:"FOODS-ADD",payload:e}}})((function(e){var t=e.show,n=e.handleClose,a=e.foodsError,o=e.foods,c=e.foodAdd,s=Object(r.useState)(!1),i=Object(h.a)(s,2),u=i[0],l=i[1],j=Object(r.useState)({title:"",img:"",price:""}),b=Object(h.a)(j,2),f=b[0],O=b[1],p=f.title,x=f.img,g=f.price,v=f.description,y=function(e){l(!1),O(Object(d.a)(Object(d.a)({},f),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(F.jsxs)(E.a,{show:t,onHide:n,children:[Object(F.jsx)(E.a.Header,{closeButton:!0,children:Object(F.jsx)(E.a.Title,{children:"Add new hot-dog"})}),Object(F.jsx)(E.a.Body,{children:Object(F.jsxs)(w.a,{validated:u,onSubmit:function(e){e.preventDefault(),l(!1),o.find((function(e){return e.title.trim().toLowerCase()===f.title.trim().toLowerCase()}))?l(!0):D(f).then((function(e){n(),c(e)})).catch((function(e){return a()}))},children:[Object(F.jsx)(w.a.Control,{className:"mb-2",placeholder:"Img URL",onChange:y,name:"img",type:"text",value:x}),Object(F.jsxs)(w.a.Group,{children:[Object(F.jsx)(w.a.Control,{isInvalid:u,required:!0,className:"mb-2",placeholder:"Title",onChange:y,name:"title",type:"text",value:p}),Object(F.jsx)(w.a.Control.Feedback,{type:"invalid",children:"This title already exists"})]}),Object(F.jsx)(w.a.Control,{required:!0,className:"mb-2",placeholder:"Price",onChange:y,name:"price",type:"number",value:g}),Object(F.jsx)(w.a.Control,{className:"mb-2",placeholder:"Description",onChange:y,name:"description",as:"textarea",value:v}),Object(F.jsxs)(N.a,{"aria-label":"Basic example",children:[Object(F.jsx)(k.a,{onClick:n,type:"button",className:"mt-1",variant:"secondary",children:"No thanks!"}),Object(F.jsx)(k.a,{type:"submit",className:"mt-1",variant:"dark",children:"Add"})]})]})})]})})),T=n(66),A=function(){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(R,{show:n,handleClose:function(){return a(!1)}}),Object(F.jsxs)(T.a,{className:"d-flex justify-content-between",bg:"dark",variant:"dark",children:[Object(F.jsx)(T.a.Brand,{href:"#home",children:"CRUD"}),Object(F.jsx)(k.a,{onClick:function(){return a(!0)},variant:"outline-light",children:"Add hot-dog"})," "]})]})},L=n(61),U=function(){return Object(F.jsx)("h1",{children:"Error..."})},B=n(67),I=Object(c.b)(null,{foodUpdate:function(e){return{type:"FOODS-UPDATE",payload:e}},foodDel:function(e){return{type:"FOODS-DEL",payload:e}},foodsLoaded:f,foodsRequested:O,foodsError:p})((function(e){var t=Object(r.useState)(!1),n=Object(h.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)({title:e.title,price:e.price,img:e.img,description:e.description,id:e.id}),s=Object(h.a)(c,2),i=s[0],u=s[1],l=i.title,j=i.img,b=i.price,f=i.description,O=i.id,p=function(e){u(Object(d.a)(Object(d.a)({},i),{},Object(m.a)({},e.target.name,e.target.value)))},x=Object(F.jsxs)(B.a.Body,{className:"body-card",children:[Object(F.jsx)(B.a.Title,{children:l}),Object(F.jsx)(B.a.Subtitle,{className:"mb-2 text-muted",children:"".concat(b,"$")}),Object(F.jsx)(B.a.Text,{className:"mb-5",children:f}),Object(F.jsx)(k.a,{onClick:function(){o(!0)},className:"w-100 button-card",variant:"secondary",children:"Edit"})]}),g=Object(F.jsxs)(w.a,{onSubmit:function(t){t.preventDefault(),S(i).then((function(t){o(!1),e.foodUpdate(t)})).catch((function(e){return console.log(e)}))},children:[Object(F.jsx)(w.a.Control,{onChange:p,name:"img",type:"text",value:j}),Object(F.jsx)(w.a.Control,{onChange:p,name:"title",type:"text",value:l}),Object(F.jsx)(w.a.Control,{onChange:p,name:"price",type:"text",value:b}),Object(F.jsx)(w.a.Control,{onChange:p,name:"description",as:"textarea",value:f}),Object(F.jsx)(w.a.Control,{name:"id",type:"hidden",value:O}),Object(F.jsx)(k.a,{type:"submit",className:"w-100 mt-1",variant:"secondary",children:"Update"}),Object(F.jsx)(k.a,{onClick:function(){return function(t){C(t).then((function(n){e.foodDel(t)})).catch((function(e){return console.log(e)}))}(O)},type:"button",className:"w-100 mt-1",variant:"secondary",children:"Delete"})]}),v=a?g:x;return Object(F.jsx)("div",{className:"d-flex",children:Object(F.jsxs)(B.a,{className:"mr-3 ml-3 mt-3",style:{width:"18rem"},children:[Object(F.jsx)(B.a.Img,{style:{minHeight:"250px"},variant:"top",src:j}),v]})})})),q=Object(c.b)((function(e){return{foods:e.foods,loading:e.loading,error:e.error}}))((function(e){var t=e.foods,n=e.loading,r=e.error,a=t.map((function(e){return Object(F.jsx)(I,{title:e.title,img:e.img,price:e.price,description:e.description,id:e.id},e.id)})),o=r?Object(F.jsx)(U,{}):a;return Object(F.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:n?Object(F.jsx)(L.a,{className:"spin",animation:"border",variant:"secondary"}):o})})),P=n(62),J=n(63);var H=Object(c.b)((function(e){return{foods:e.foods}}),{foodsLoaded:f,foodsRequested:O,foodsError:p})((function(e){e.foods;var t=e.foodsLoaded,n=e.foodsRequested;return Object(r.useEffect)((function(){n(),y().then((function(e){return t(e)})).catch((function(e){return{type:"FOODS-ERROR"}}))}),[t,n]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(A,{}),Object(F.jsx)(P.a,{className:"jambo",children:Object(F.jsx)(J.a,{children:Object(F.jsx)(q,{})})})]})}));n(56),n(57);o.a.render(Object(F.jsx)(c.a,{store:b,children:Object(F.jsx)(H,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.d31f5a1e.chunk.js.map