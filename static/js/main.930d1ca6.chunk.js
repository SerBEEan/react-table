(this["webpackJsonpreact-task"]=this["webpackJsonpreact-task"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},5:function(e){e.exports=JSON.parse('{"tableFields":["id","firstName","lastName","email","phone"],"addInputs":[{"type":"number","title":"id"},{"type":"text","title":"firstName"},{"type":"text","title":"lastName"},{"type":"email","title":"email"},{"type":"phone","title":"phone"}],"linkData":{"small":"http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}","large":"http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"}}')},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(15),i=c.n(a),l=(c(21),c(2)),r=(c(22),c(16)),u=c.n(r),d=(c(41),c(0));var o=function(){return Object(d.jsx)("div",{className:"loader"})},j=c(5);c(43);function b(e){var t=e.nameColSort,c=e.modeSort,s=e.handleClickSort;return Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:j.tableFields.map((function(e){return Object(d.jsx)("th",{className:t===e?"up"===c?"sortUp":"sortDown":"",onClick:s.bind(null,e),children:e},e)}))})})}c(44);function O(e){var t=e.strings,c=e.handleChooseStr,n=Object(s.useState)(null),a=Object(l.a)(n,2),i=a[0],r=a[1];function u(e){var t=e.target.parentElement;null!==i&&i.classList.remove("active"),t.classList.add("active"),r(t),c(t.dataset.json)}return Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{onClick:u,"data-json":JSON.stringify(e),children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone})]},e.id+e.phone)}))})}c(45);function h(e){var t=e.currentPage,c=e.countPages,s=e.countSrings,n=e.handleChangeCurrPage;return Object(d.jsx)("tfoot",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:"5",children:Object(d.jsxs)("div",{className:"tfootContent",children:[Object(d.jsx)("div",{children:0!==s?"".concat(50*(t-1)+1," - ").concat(50*(t-1)+s):"0"}),c>1&&Object(d.jsx)("div",{className:"buttons",children:Array(c).fill(0).map((function(e,c){return Object(d.jsx)("button",{className:c+1===t?"actionButton":"",onClick:n.bind(null,c+1),children:c+1},c+1)}))})]})})})})}c(46);function x(e){var t=e.data,c=e.handleChooseStr,n=e.handleClickSort,a=e.modeSort,i=e.nameColSort,r=Object(s.useState)(1),u=Object(l.a)(r,2),o=u[0],j=u[1],x=t.slice(50*(o-1),50*o),m=x.length,f=Math.ceil(t.length/50);return Object(d.jsxs)("table",{border:"1",cellPadding:"15",children:[Object(d.jsx)(b,{nameColSort:i,modeSort:a,handleClickSort:n}),Object(d.jsx)(O,{strings:x,handleChooseStr:c}),Object(d.jsx)(h,{countSrings:m,currentPage:o,countPages:f,handleChangeCurrPage:j})]})}c(47);function m(e){var t=e.dataStr;return function(){var e=null;if(null!==t){var c=JSON.parse(t);e=Object(d.jsxs)("div",{className:"selectBlock",children:[Object(d.jsxs)("div",{children:["\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",Object(d.jsxs)("b",{children:[c.firstName," ",c.lastName]})]}),Object(d.jsxs)("div",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",Object(d.jsx)("textarea",{disabled:!0,rows:"5",cols:"90",value:c.description})]}),Object(d.jsxs)("div",{children:["\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",Object(d.jsx)("b",{children:c.address.streetAddress})]}),Object(d.jsxs)("div",{children:["\u0413\u043e\u0440\u043e\u0434: ",Object(d.jsx)("b",{children:c.address.city})]}),Object(d.jsxs)("div",{children:["\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f: ",Object(d.jsx)("b",{children:c.address.state})]}),Object(d.jsxs)("div",{children:["\u0418\u043d\u0434\u0435\u043a\u0441: ",Object(d.jsx)("b",{children:c.address.zip})]})]})}return e}()}c(48);function f(e){var t=e.handleChangeValue,c=Object(s.useState)(""),n=Object(l.a)(c,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){t(a)}),[a]),Object(d.jsxs)("div",{className:"searchForm",children:[Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){i(e.target.value)}}),Object(d.jsx)("button",{onClick:t.bind(null,a),children:"\u041d\u0430\u0439\u0442\u0438"})]})}var S=c(4);c(49);function v(e){var t=e.data,c=e.handlePushInData,n=Object(s.useState)(!1),a=Object(l.a)(n,2),i=a[0],r=a[1],u=Object(s.useState)({value:"",isSuccess:null}),o=Object(l.a)(u,2),b=o[0],O=o[1],h=Object(s.useState)({value:"",isSuccess:null}),x=Object(l.a)(h,2),m=x[0],f=x[1],v=Object(s.useState)({value:"",isSuccess:null}),p=Object(l.a)(v,2),N=p[0],g=p[1],C=Object(s.useState)({value:"",isSuccess:null}),k=Object(l.a)(C,2),w=k[0],y=k[1],z=Object(s.useState)({value:"",isSuccess:null}),A=Object(l.a)(z,2),P=A[0],D=A[1];function F(e,t){var c=t.target.value;switch(e){case"id":I(/^\d+$/,c,O);break;case"firstName":I(/^[A-Za-z]+$/,c,f);break;case"lastName":I(/^[A-Za-z]+$/,c,g);break;case"email":I(/^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,c,y);break;case"phone":I(/^\((\d{3})\)(\d{3})[-](\d{4})$/,c,D)}}function I(e,t,c){c(null!==t.match(e)?{value:t,isSuccess:!0}:""===t?{value:t,isSuccess:null}:{value:t,isSuccess:!1})}function J(e){return"id"===e?b:"firstName"===e?m:"lastName"===e?N:"email"===e?w:"phone"===e?P:void 0}return Object(d.jsxs)("div",{className:"formAdd",children:[i&&Object(d.jsx)("div",{children:j.addInputs.map((function(e,t){return Object(d.jsxs)("label",{children:["".concat(e.title,": "),Object(d.jsx)("input",{type:e.type,name:e.title,value:J(e.title).value,onChange:F.bind(null,e.title),className:null===J(e.title).isSuccess?"":J(e.title).isSuccess?"success":"fail"})]},e.title+t)}))}),Object(d.jsx)("button",{onClick:function(){if(i)if(b.isSuccess&&m.isSuccess&&N.isSuccess&&w.isSuccess&&P.isSuccess){var e={id:Number.parseInt(b.value),firstName:m.value,lastName:N.value,email:w.value,phone:P.value,address:{city:"some city",state:"some state",streetAddress:"some streetAddress",zip:"some zip"},description:"some description"};c(t.concat(e)),O({value:"",isSuccess:null}),f({value:"",isSuccess:null}),g({value:"",isSuccess:null}),y({value:"",isSuccess:null}),D({value:"",isSuccess:null}),r(!1)}else!b.isSuccess&&O(Object(S.a)(Object(S.a)({},b),{},{isSuccess:!1})),!m.isSuccess&&f(Object(S.a)(Object(S.a)({},m),{},{isSuccess:!1})),!N.isSuccess&&g(Object(S.a)(Object(S.a)({},N),{},{isSuccess:!1})),!w.isSuccess&&y(Object(S.a)(Object(S.a)({},w),{},{isSuccess:!1})),!P.isSuccess&&D(Object(S.a)(Object(S.a)({},P),{},{isSuccess:!1}));else r(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),i&&Object(d.jsx)("button",{onClick:function(){r(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})}c(50);function p(e){var t,c=e.linkData,n=Object(s.useState)([]),a=Object(l.a)(n,2),i=a[0],r=a[1],b=Object(s.useState)(null),O=Object(l.a)(b,2),h=O[0],S=O[1],p=Object(s.useState)(""),N=Object(l.a)(p,2),g=N[0],C=N[1],k=Object(s.useState)("id"),w=Object(l.a)(k,2),y=w[0],z=w[1],A=Object(s.useState)("down"),P=Object(l.a)(A,2),D=P[0],F=P[1];function I(e,t){var c=e;return"id"===t?c.sort((function(e,t){return e.id-t.id})):c.sort((function(e,c){return e[t]>c[t]?1:e[t]<c[t]?-1:0})),c}return Object(s.useEffect)((function(){u.a.get(c).then((function(e){return e.data})).then((function(e){r(e.sort((function(e,t){return e.id-t.id})))})).catch((function(e){return console.error(e)}))}),[c]),Object(d.jsx)("div",{className:"container",children:i.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{data:i,handlePushInData:function(e){r(I(e,y))}}),Object(d.jsx)(f,{handleChangeValue:C}),Object(d.jsx)(x,{data:(t=i,t.filter((function(e){for(var t=0;t<j.tableFields.length;t++){var c=e[j.tableFields[t]].toString().includes(g);if(c)return c}return!1}))),handleChooseStr:S,handleClickSort:function(e){e===y?(F("up"===D?"down":"up"),i.reverse()):(z(e),F("down"),r(I(i,e)))},modeSort:D,nameColSort:y}),Object(d.jsx)(m,{dataStr:h})]}):Object(d.jsx)(o,{})})}var N=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1];function a(e){n(e)}return Object(d.jsx)("div",{className:"App",children:c?Object(d.jsx)(p,{linkData:c}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:a.bind(null,j.linkData.small),children:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439"}),Object(d.jsx)("button",{onClick:a.bind(null,j.linkData.large),children:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439"})]})]})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.930d1ca6.chunk.js.map