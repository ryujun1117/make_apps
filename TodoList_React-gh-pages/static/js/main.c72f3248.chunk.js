(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),o=c.n(n),l=c(2),i=(c(9),c(0));const d={backgroundColor:"#c1ffff",width:"400px",height:"30px",borderRadius:"8px",padding:"8px",margin:"8px"},j=e=>{const t=e.todoText,c=e.onChange,s=e.onClick,n=e.disabled;return Object(i.jsxs)("div",{style:d,children:[Object(i.jsx)("input",{disabled:n,placeholder:"TODO\u3092\u5165\u529b",value:t,onChange:c}),Object(i.jsx)("button",{disabled:n,onClick:s,children:"\u8ffd\u52a0"})]})},r=e=>{const t=e.todos,c=e.onClickComplete,s=e.onClickDelete;return Object(i.jsxs)("div",{className:"incomplete-area",children:[Object(i.jsx)("p",{className:"title",children:"\u672a\u5b8c\u4e86\u306eTODO"}),Object(i.jsx)("ul",{children:t.map(((e,t)=>Object(i.jsxs)("div",{className:"list-row",children:[Object(i.jsx)("li",{children:e}),Object(i.jsx)("button",{onClick:()=>c(t),children:"\u5b8c\u4e86"}),Object(i.jsx)("button",{onClick:()=>s(t),children:"\u524a\u9664"})]},e)))})]})},a=e=>{const t=e.todos,c=e.onClickBack;return Object(i.jsxs)("div",{className:"complete-area",children:[Object(i.jsx)("p",{className:"title",children:"\u5b8c\u4e86\u306eTODO"}),Object(i.jsx)("ul",{children:t.map(((e,t)=>Object(i.jsxs)("div",{className:"list-row",children:[Object(i.jsx)("li",{children:e}),Object(i.jsx)("button",{onClick:()=>c(t),children:"\u623b\u3059"})]},e)))})]})},b=()=>{const e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)([]),d=Object(l.a)(o,2),b=d[0],O=d[1],h=Object(s.useState)([]),x=Object(l.a)(h,2),p=x[0],u=x[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{todoText:c,onChange:e=>n(e.target.value),onClick:()=>{if(""===c)return;const e=[...b,c];O(e),n("")},disabled:b.length>=5}),b.length>=5&&Object(i.jsx)("p",{style:{color:"red"},children:"\u767b\u9332\u3067\u304d\u308btodo5\u500b\u307e\u3067\u3060\u3088\uff5e\u3002\u6d88\u5316\u3057\u308d\uff5e\u3002"}),Object(i.jsx)(r,{todos:b,onClickComplete:e=>{const t=[...b];t.splice(e,1);const c=[...p,b[e]];O(t),u(c)},onClickDelete:e=>{const t=[...b];t.splice(e,1),O(t)}}),Object(i.jsx)(a,{todos:p,onClickBack:e=>{const t=[...p];t.splice(e,1);const c=[...b,p[e]];u(t),O(c)}})]})};o.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.c72f3248.chunk.js.map