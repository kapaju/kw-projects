(this["webpackJsonpkw-projects"]=this["webpackJsonpkw-projects"]||[]).push([[0],{104:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(12),o=n.n(i),l=(n(104),n(18)),s=n(13),j=n(7),b=n(150),d=n(153),u=n(114),h=n(82),O=n.n(h),x=n(155),f=n(85),v=function(){var e=r.a.useState(null),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Boolean(n),o=function(){c(null)};return Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{edge:"start",color:"inherit",onClick:function(e){c(e.currentTarget)},children:Object(a.jsx)(O.a,{})}),Object(a.jsxs)(f.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:o,children:[Object(a.jsx)(l.b,{to:"/kw-projects",children:Object(a.jsx)(x.a,{onClick:o,children:"Home"})}),Object(a.jsx)(l.b,{to:"/binaryconverter",children:Object(a.jsx)(x.a,{onClick:o,children:"Binary Converter"})}),Object(a.jsx)(l.b,{to:"/anecdotes",children:Object(a.jsx)(x.a,{onClick:o,children:"Anecdotes"})}),Object(a.jsx)(l.b,{to:"/colors",children:Object(a.jsx)(x.a,{onClick:o,children:"Colors"})}),Object(a.jsx)(l.b,{to:"/unicafe",children:Object(a.jsx)(x.a,{onClick:o,children:"Unicafe"})}),Object(a.jsx)(l.b,{to:"/colorslider",children:Object(a.jsx)(x.a,{onClick:o,children:"RGB slider"})}),Object(a.jsx)(l.b,{to:"/dates",children:Object(a.jsx)(x.a,{onClick:o,children:"Dates"})}),Object(a.jsx)(l.b,{to:"/personform",children:Object(a.jsx)(x.a,{onClick:o,children:"Persons"})}),Object(a.jsx)(l.b,{to:"/dragdrop",children:Object(a.jsx)(x.a,{onClick:o,children:"Drag and drop"})}),Object(a.jsx)(l.b,{to:"/undoredo",children:Object(a.jsx)(x.a,{onClick:o,children:"Undo and redo"})}),Object(a.jsx)(l.b,{to:"/canvashouse",children:Object(a.jsx)(x.a,{onClick:o,children:"Canvas house"})}),Object(a.jsx)(l.b,{to:"/currencyconverter",children:Object(a.jsx)(x.a,{onClick:o,children:"Currency converter"})}),Object(a.jsx)(l.b,{to:"/translation",children:Object(a.jsx)(x.a,{onClick:o,children:"Translation"})}),Object(a.jsx)(l.b,{to:"/contextmenu",children:Object(a.jsx)(x.a,{onClick:o,children:"Context menu"})})]})]})})})})},g=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Katja W:n portfolio"}),Object(a.jsx)("p",{children:"T\xe4h\xe4n sovellukseen on koottu React-harjoituksiani."})]})},p=n(17),m=n(70),C=n(173),k=n(112),S=n(170),y=n(171),w=n(156),T=n(159),D=function(){var e=r.a.useState("00000000"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState("0"),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState({1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1}),d=Object(j.a)(b,2),u=d[0],h=d[1],O=function(e){return function(t){h(Object(m.a)(Object(m.a)({},u),{},Object(p.a)({},e,t.target.checked)));for(var a="",r=0;r<9;r++)r==e-1?t.target.checked?a+="1":a+="0":a+=n.charAt(r);c(a)}},x=u.one,f=u.two,v=u.three,g=u.four,D=u.five,N=u.six,R=u.seven,E=u.eight;return Object(a.jsxs)(k.a,{style:{width:400,textAlign:"center",padding:15},children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:x,onChange:O(1),value:"one"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:f,onChange:O(2),value:"two"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:v,onChange:O(3),value:"three"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:g,onChange:O(4),value:"four"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:D,onChange:O(5),value:"five"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:N,onChange:O(6),value:"six"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:R,onChange:O(7),value:"seven"})}),Object(a.jsx)(w.a,{control:Object(a.jsx)(C.a,{checked:E,onChange:O(8),value:"eight"})})]}),Object(a.jsx)(S.a,{children:Object(a.jsx)(y.a,{value:n,variant:"outlined"})}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{children:Object(a.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(e){var t=parseInt(n,2);s(t)},children:"Convert"})}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{children:Object(a.jsx)(y.a,{value:l,variant:"outlined"})})]})},N=n(19),R=function(e){var t=e.anecdotes,n=e.votes,c=t[n.indexOf(Math.max.apply(Math,Object(N.a)(n)))];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Anecdote with most votes"}),Object(a.jsx)("p",{children:c})]})},E=function(e){var t=e.text,n=e.handleClick;return Object(a.jsx)("button",{onClick:n,children:t})},P=function(){var e=["If it hurts, do it more often","Adding manpower to a late software project makes it later!","The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","Premature optimization is the root of all evil.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."],t=Object(c.useState)(0),n=Object(j.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(new Array(e.length).fill(0)),l=Object(j.a)(o,2),s=l[0],b=l[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Anecdote of the day"}),Object(a.jsx)("p",{children:e[r]}),Object(a.jsxs)("p",{children:["has ",s[r]," votes"]}),Object(a.jsx)(E,{text:"vote",handleClick:function(){var e=Object(N.a)(s);e[r]+=1,b(e)}}),Object(a.jsx)(E,{text:"next anecdote",handleClick:function(){var t=Math.floor(Math.random()*e.length);i(t)}}),Object(a.jsx)(R,{anecdotes:e,votes:s})]})},I=n(160),F=n(172),U=n(174),M=n(158),A=n(52),z=Object(I.a)((function(e){return{textStyle:{fontStyle:"italic",fontFamily:"monospace",fontSize:"5rem",textShadow:"2px 2px #ff0000",color:function(e){return e.color}}}})),B=function(){var e=r.a.useState("blue"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=z({color:n});return Object(a.jsx)(S.a,{children:Object(a.jsxs)(k.a,{style:{width:300,padding:15},children:[Object(a.jsx)(A.a,{variant:"h1",className:i.textStyle,children:"Colour"}),Object(a.jsx)(M.a,{children:Object(a.jsxs)(U.a,{name:"textColour",value:n,onChange:function(e){c(e.target.value)},children:[Object(a.jsx)(w.a,{value:"blue",control:Object(a.jsx)(F.a,{}),label:"Blue"}),Object(a.jsx)(w.a,{value:"orange",control:Object(a.jsx)(F.a,{}),label:"Orange"}),Object(a.jsx)(w.a,{value:"red",control:Object(a.jsx)(F.a,{}),label:"Red"}),Object(a.jsx)(w.a,{value:"green",control:Object(a.jsx)(F.a,{}),label:"Green"})]})})]})})},L=function(e){var t=e.text,n=e.value;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t}),Object(a.jsx)("td",{children:n})]})},V=function(e){var t=e.good,n=e.neutral,c=e.bad,r=t+n+c;return t+c+n===0?Object(a.jsx)("p",{children:"No feedback given."}):Object(a.jsx)("div",{children:Object(a.jsx)("table",{children:Object(a.jsxs)("tbody",{children:[Object(a.jsx)(L,{text:"good",value:t}),Object(a.jsx)(L,{text:"neutral",value:n}),Object(a.jsx)(L,{text:"bad",value:c}),Object(a.jsx)(L,{text:"all",value:r}),Object(a.jsx)(L,{text:"average",value:(t-c)/r}),Object(a.jsx)(L,{text:"positive (%)",value:t/r*100})]})})})},_=function(e){return Object(a.jsx)("button",{onClick:e.handleClick,children:e.text})},G=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),o=Object(j.a)(i,2),l=o[0],s=o[1],b=Object(c.useState)(0),d=Object(j.a)(b,2),u=d[0],h=d[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Give feedback"}),Object(a.jsx)(_,{text:"good",handleClick:function(){return r(n+1)}}),Object(a.jsx)(_,{text:"neutral",handleClick:function(){return s(l+1)}}),Object(a.jsx)(_,{text:"bad",handleClick:function(){return h(u+1)}}),Object(a.jsx)("h1",{children:"Statistics"}),Object(a.jsx)(V,{good:n,neutral:l,bad:u})]})},W=n(175),H=function(){var e=r.a.useState("rgb(255, 255, 255)"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState(255),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState(255),d=Object(j.a)(b,2),u=d[0],h=d[1],O=r.a.useState(255),x=Object(j.a)(O,2),f=x[0],v=x[1],g=Object(I.a)((function(e){return{boxStyle:{height:300,border:"1px solid black",width:150,margin:e.spacing(5),padding:e.spacing(6),backgroundColor:n},sliderStyle:{marginRight:e.spacing(1),marginLeft:e.spacing(1),color:"rgb(0, 0, 0)"},textStyle:{marginTop:e.spacing(2)}}}))(),p=function(e,t){"red"===e.target.id?s(t):"green"===e.target.id?v(t):"blue"===e.target.id&&h(t),c("rgb("+l+", "+u+", "+f+")")};return Object(a.jsx)("div",{children:Object(a.jsxs)(S.a,{className:g.boxStyle,children:[Object(a.jsx)(W.a,{id:"red",orientation:"vertical",valueLabelDisplay:"auto",value:l,step:1,min:0,max:255,className:g.sliderStyle,onChange:p}),Object(a.jsx)(W.a,{id:"green",orientation:"vertical",valueLabelDisplay:"auto",value:f,step:1,min:0,max:255,className:g.sliderStyle,onChange:p}),Object(a.jsx)(W.a,{id:"blue",orientation:"vertical",valueLabelDisplay:"auto",value:u,step:1,min:0,max:255,className:g.sliderStyle,onChange:p}),Object(a.jsx)(A.a,{className:g.textStyle,children:n})]})})},J=n(154),K=n(115),X=n(162),Y=Object(I.a)((function(e){return{paperStyle:{width:500,padding:e.spacing(2)},buttons:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}})),q=function(){var e=r.a.useState([new Date]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState(-1),o=Object(j.a)(i,2),l=o[0],s=o[1],b=Y(),d=new Intl.DateTimeFormat("uk-EN",{year:"numeric",month:"numeric",day:"numeric"});return Object(a.jsxs)(k.a,{className:b.paperStyle,children:[Object(a.jsx)(J.a,{children:n.map((function(e,t){return Object(a.jsxs)(K.a,{button:!0,onClick:function(e){!function(e,t){s(t)}(0,t)},children:[Object(a.jsx)(X.a,{keu:"listText"+t,primary:Object(a.jsxs)(A.a,{children:[" ",t+1,". ",d.format(e)]})}),Object(a.jsx)(y.a,{label:"Date",type:"date",value:e.toISOString().substring(0,10),onChange:function(e){!function(e,t){var a=new Date(e.target.value),r=n.slice(0,t).concat([a]).concat(n.slice(t+1));c(r)}(e,t)},InputLabelProps:{shrink:!0}},"dateSelector"+t)]},"listItem"+t)}))}),Object(a.jsx)(T.a,{variant:"contained",className:b.buttons,onClick:function(e){c(n.concat([new Date]))},children:"Add"}),Object(a.jsx)(T.a,{variant:"contained",className:b.buttons,onClick:function(e){c(n.slice(0,l).concat(n.slice(l+1))),s(-1)},disabled:l<0,children:"Remove"})]})},Q=n(163),Z=n(161),$=n(165),ee=n(169),te=n(168),ne=n(164),ae=n(166),ce=n(167),re=Object(I.a)((function(e){return{paperStyle:{width:500,padding:e.spacing(2)},buttons:{marginTop:e.spacing(1),marginBottom:e.spacing(2),marginRight:e.spacing(2)},tableheading:{fontWeight:"bold",fontFamily:"Trebuchet MS, Helvetica, sans-serif",fontSize:"1.2em"}}})),ie=function(){var e=r.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState(!1),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState([]),d=Object(j.a)(b,2),u=d[0],h=d[1],O=re();return Object(a.jsxs)(k.a,{className:O.paperStyle,children:[Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(y.a,{label:"Name",variant:"outlined",value:n,onChange:function(e){c(e.target.value)},children:n}),Object(a.jsx)(w.a,{control:Object(a.jsx)(Q.a,{checked:l,onChange:function(e,t){s(t)},value:"student"}),label:"student"})]}),Object(a.jsx)(T.a,{variant:"contained",className:O.buttons,onClick:function(e){h(u.concat([{name:n,student:l}])),c("")},disabled:n.length<1,children:"Add"}),Object(a.jsx)(ne.a,{component:k.a,children:Object(a.jsxs)($.a,{children:[Object(a.jsx)(ae.a,{children:Object(a.jsxs)(ce.a,{children:[Object(a.jsx)(te.a,{className:O.tableheading,children:"Name"}),Object(a.jsx)(te.a,{className:O.tableheading,children:"Status"})]})}),Object(a.jsx)(ee.a,{children:u.map((function(e,t){return Object(a.jsxs)(ce.a,{children:[Object(a.jsx)(te.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(te.a,{children:e.student?"student":"not student"})]})}))})]})})]})},oe=Object(I.a)((function(e){return{text:{margin:e.spacing(2),padding:e.spacing(1),border:"1px solid black",fontSize:"1.3em",backgroundColor:"rgb(224, 224, 224)"},container:{maxWidth:"50%",borderRadius:"15px"}}})),le=function(){var e=r.a.useState("1st text"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState("2nd text"),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState("3rd text"),d=Object(j.a)(b,2),u=d[0],h=d[1],O=oe(),x=function(e,t){var a;1===t?a=n:2===t?a=l:3===t&&(a=u),e.dataTransfer.setData("text/plain",a),e.dataTransfer.setData("text/html","<h3>"+a+"<h3>"),e.dataTransfer.dropEffect="copy"},f=function(e,t){for(var n=e.dataTransfer.items,a=0;a<n.length;++a){if("string"===n[a].kind){e.preventDefault();var r=e.dataTransfer.getData("text/plain");return void(1===t?c(r):2===t?s(r):3===t&&h(r))}}e.preventDefault()},v=function(e){},g=function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"};return Object(a.jsx)("div",{children:Object(a.jsxs)(S.a,{display:"flex",flexWrap:"wrap",className:O.container,children:[Object(a.jsx)(A.a,{children:"Drag the boxes over one another or select and drag any text over one of the boxes."}),Object(a.jsx)(A.a,{variant:"h3",className:O.text,draggable:!0,onDragStart:function(e){x(e,1)},onDrop:function(e){f(e,1)},onDragEnter:v,onDragOver:g,children:n}),Object(a.jsx)(A.a,{variant:"h3",className:O.text,draggable:!0,onDragStart:function(e){x(e,2)},onDrop:function(e){f(e,2)},onDragEnter:v,onDragOver:g,children:l}),Object(a.jsx)(A.a,{variant:"h3",className:O.text,draggable:!0,onDragStart:function(e){x(e,3)},onDrop:function(e){f(e,3)},onDragEnter:v,onDragOver:g,children:u})]})})},se=n(83),je=n.n(se),be=n(84),de=n.n(be),ue=Object(I.a)((function(e){return{buttons:{margin:e.spacing(1)},container:{maxWidth:400,height:300,border:"1px solid grey"},textArea:{backgroundColor:"#E3FFFF",minHeight:25,padding:10}}})),he=function(){var e=r.a.useState([""]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState([]),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState([]),d=Object(j.a)(b,2),h=d[0],O=d[1],x=ue(),f=function(e){c(n.concat(e)),s(l.concat([n])),O([])};return Object(a.jsxs)(S.a,{className:x.container,children:[Object(a.jsx)(S.a,{className:x.textArea,children:Object(a.jsx)(A.a,{variant:"body1",children:n})}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)(T.a,{variant:"contained",className:x.buttons,onClick:function(e){f(1)},children:"1"}),Object(a.jsx)(T.a,{variant:"contained",className:x.buttons,onClick:function(e){f("a")},children:"a"}),Object(a.jsx)(T.a,{variant:"contained",className:x.buttons,onClick:function(e){f("bcd")},children:"bcd"})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)(u.a,{disabled:0===l.length,onClick:function(){O(l.concat([n])),c(l[l.length-1]),s(l.slice(0,l.length-1))},children:Object(a.jsx)(je.a,{})}),Object(a.jsx)(u.a,{disabled:0===h.length,onClick:function(){s(l.concat([n])),c(h[h.length-1]),O(h.slice(0,h.length-1))},children:Object(a.jsx)(de.a,{})})]})]})},Oe=function(){var e=Object(c.useRef)(null),t=function(e,t,n){e.fillStyle="#75390e",e.fillRect(t,n,100,100),e.strokeStyle="black",e.fillStyle="black",e.beginPath(),e.moveTo(t,n),e.lineTo(t+50,n-50),e.lineTo(t+100,n),e.lineTo(t,n),e.stroke(),e.closePath(),e.fill(),e.fillRect(t+45,n+45,20,55)};return Object(c.useEffect)((function(){var n=e.current.getContext("2d"),a=[e.current.width,e.current.height],c=a[0],r=a[1];n.fillStyle="#5c9407";var i=.5*r,o=.5*c;n.fillRect(0,0,c,r),n.fillStyle="#c5ddfc",n.fillRect(0,0,c,i),n.save();var l=o-200,s=i-100;t(n,l,s),t(n,l=o+100,s)})),Object(a.jsxs)("div",{children:[Object(a.jsx)(S.a,{children:Object(a.jsx)("canvas",{width:600,height:600,ref:e})}),Object(a.jsx)(A.a,{children:"This image is drawn using Canvas."})]})},xe=n(157),fe=function(){var e=r.a.useState("euros"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState(0),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState(0),d=Object(j.a)(b,2),u=d[0],h=d[1],O=r.a.useState("en-UK"),x=Object(j.a)(O,2),f=x[0],v=x[1],g=new Intl.DateTimeFormat(f,{month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),p=new Intl.NumberFormat(f,{style:"currency",currency:"EUR"});return Object(a.jsxs)(S.a,{border:1,width:400,p:1,children:[Object(a.jsx)(A.a,{children:"Exchange rate at"}),Object(a.jsx)(A.a,{children:g.format(new Date)}),Object(a.jsxs)(S.a,{display:"flex",flexDirection:"row",children:[Object(a.jsx)(xe.a,{onChange:function(e){s(e.target.value)}}),Object(a.jsxs)(A.a,{children:["= ",p.format(u)]})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)(A.a,{children:"Direction:"}),Object(a.jsxs)(U.a,{value:n,onChange:function(e){c(e.target.value),"pounds"===n?(h(1.15*l),v("en-UK")):(h(.87*l),v("fi-FI"))},children:[Object(a.jsx)(w.a,{value:"euros",control:Object(a.jsx)(F.a,{}),label:"\u20ac to \xa3"}),Object(a.jsx)(w.a,{value:"pounds",control:Object(a.jsx)(F.a,{}),label:"\xa3 to \u20ac"})]})]})]})},ve=n(63),ge=function(){var e=r.a.useState("en"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState(null),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState(""),d=Object(j.a)(b,2),u=d[0],h=d[1],O=ve.hasOwnProperty(n)?ve[n]:ve.en,v=Boolean(l);return Object(a.jsxs)(S.a,{border:1,width:400,p:1,children:[Object(a.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(e){s(e.currentTarget)},children:n}),Object(a.jsxs)(f.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:v,onClose:function(e){s(null)},children:[Object(a.jsx)(x.a,{onClick:function(e){c("en"),s(null)},children:"EN"}),Object(a.jsx)(x.a,{onClick:function(e){c("fi"),s(null)},children:"FI"}),Object(a.jsx)(x.a,{onClick:function(e){c("es"),s(null)},children:"ES"})]}),Object(a.jsx)(A.a,{children:O.REV_INPUT}),Object(a.jsx)(y.a,{onChange:function(e){var t=e.target.value.split("").reverse().join("");h(t)}}),Object(a.jsx)(A.a,{children:O.REV_OUTPUT}),Object(a.jsx)(A.a,{children:u})]})},pe=function(){var e=r.a.useState(null),t=Object(j.a)(e,2),n=t[0],c=t[1],i=r.a.useState(null),o=Object(j.a)(i,2),l=o[0],s=o[1],b=r.a.useState(""),d=Object(j.a)(b,2),u=d[0],h=d[1],O=r.a.useState("<<< Change me >>>"),v=Object(j.a)(O,2),g=v[0],p=v[1],m=["Arial","Impact","Georgia","Comic Sans MS"],C=r.a.useState(m[0]),k=Object(j.a)(C,2),y=k[0],w=k[1],D=["#fff","#ffdeb5","#c5b5ff","#d0ffb5"],N=r.a.useState(D[0]),R=Object(j.a)(N,2),E=R[0],P=R[1],I=function(){c(null),s(null)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(S.a,{border:1,width:300,p:2,children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(xe.a,{value:u,style:{width:"60%",fontFamily:y,backgroundColor:E},onChange:function(e){h(e.target.value)},onContextMenu:function(e){e.preventDefault(),c(e.clientX),s(e.clientY)}}),Object(a.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(e){p(u)},style:{margin:10},children:"Change"}),Object(a.jsx)(A.a,{style:{margin:10,fontFamily:y},children:g}),Object(a.jsxs)(f.a,{keepMounted:!0,open:null!==l,onClose:I,anchorReference:"anchorPosition",anchorPosition:null!==l&&null!==n?{top:l,left:n}:void 0,children:[Object(a.jsx)(x.a,{onClick:function(e){!function(){var e=m[Math.floor(Math.random()*m.length)];w(e),h("")}(),I()},children:"Change font"}),Object(a.jsx)(x.a,{onClick:function(e){!function(e){var t=D[Math.floor(Math.random()*m.length)];P(t)}(),I()},children:"Change color"})]})]})}),Object(a.jsx)(A.a,{children:"Right click on the textfield to change font and colour."})]})},me=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{relative:!0,path:"/kw-projects",component:g}),Object(a.jsx)(s.a,{relative:!0,path:"/binaryconverter",component:D}),Object(a.jsx)(s.a,{relative:!0,path:"/anecdotes",component:P}),Object(a.jsx)(s.a,{relative:!0,path:"/colors",component:B}),Object(a.jsx)(s.a,{relative:!0,path:"/unicafe",component:G}),Object(a.jsx)(s.a,{relative:!0,path:"/colorslider",component:H}),Object(a.jsx)(s.a,{relative:!0,path:"/dates",component:q}),Object(a.jsx)(s.a,{relative:!0,path:"/personform",component:ie}),Object(a.jsx)(s.a,{relative:!0,path:"/dragdrop",component:le}),Object(a.jsx)(s.a,{relative:!0,path:"/undoredo",component:he}),Object(a.jsx)(s.a,{relative:!0,path:"/canvashouse",component:Oe}),Object(a.jsx)(s.a,{relative:!0,path:"/currencyconverter",component:fe}),Object(a.jsx)(s.a,{relative:!0,path:"/translation",component:ge}),Object(a.jsx)(s.a,{relative:!0,path:"/contextmenu",component:pe})]}),Object(a.jsx)(v,{})]})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(me,{}),document.getElementById("root")),Ce()},63:function(e){e.exports=JSON.parse('{"en":{"REV_INPUT":"Input:","REV_OUTPUT":"Reversed:"},"fi":{"REV_INPUT":"Peilattava sy\xf6te:","REV_OUTPUT":"Peilikuva:"},"es":{"REV_INPUT":"Entrada:","REV_OUTPUT":"Invertido:"}}')}},[[111,1,2]]]);
//# sourceMappingURL=main.418439a0.chunk.js.map