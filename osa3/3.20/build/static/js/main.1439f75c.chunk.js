(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(19),t(2)),l=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.filterchange}))},i=function(e){var n=e.allpeople.filter(function(n){return n.name.toLowerCase().includes(e.usefilter)});return r.a.createElement("div",null,n.map(function(n){return r.a.createElement("p",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return e.deletion(n.id)}},"delete"))}))},m=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.name,onChange:e.namechange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.number,onChange:e.numberchange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=t(3),d=t.n(f),s="/api/persons",h={getAll:function(){return d.a.get(s).then(function(e){return e.data})},create:function(e){return d.a.post(s,e).then(function(e){return e.data})},update:function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},deletion:function(e){return d.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})}},b=function(){var e=Object(a.useState)([{name:"",number:""}]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(o.a)(c,2),d=f[0],s=f[1],b=Object(a.useState)(""),p=Object(o.a)(b,2),v=p[0],E=p[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),j=w[0],O=w[1],y=Object(a.useState)(null),k=Object(o.a)(y,2),C=k[0],S=k[1];return Object(a.useEffect)(function(){h.getAll().then(function(e){u(e)})},[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},{message:C}),r.a.createElement(l,{filterchange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{submit:function(e){e.preventDefault();var n={name:d,number:v};if(t.every(function(e){return e.name!==d}))h.create(n).then(function(e){u(t.concat(e)),s(""),E(""),S("Added ".concat(n.name," ")),setTimeout(function(){S(null)},5e3)}).catch(function(e){console.log(e.response.data),S(e.response.data.error)});else{var a=window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?")),r=t.find(function(e){return e.name===n.name}).id;a&&h.update(r,n).then(function(e){u(t.map(function(n){return n.id!==r?n:e})),s(""),E(""),S("Changed the number of ".concat(n.name," ")),setTimeout(function(){S(null)},5e3)}).catch(function(e){S("Information of ".concat(n.name," has already been removed from server")),u(t.filter(function(e){return e.id!==r})),setTimeout(function(){S(null)},5e3),s(""),E("")})}},name:d,number:v,namechange:function(e){s(e.target.value)},numberchange:function(e){E(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(i,{allpeople:t,usefilter:j,service:h,deletion:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Delete ".concat(n.name," ?"))&&h.deletion(e).then(u(t.filter(function(e){return e!==n})),S("Deleted ".concat(n.name," ")),setTimeout(function(){S(null)},5e3)).catch(function(a){S("Information of ".concat(n.name," has already been removed from server")),u(t.filter(function(n){return n.id!==e})),setTimeout(function(){S(null)},5e3)})}}))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1439f75c.chunk.js.map