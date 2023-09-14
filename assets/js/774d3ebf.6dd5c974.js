"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[7523],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),h=n,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(f,o(o({ref:r},l),{},{components:t})):a.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9817:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const i={id:"creating-parathread",title:"Reserve your parathread",sidebar_label:"Reserve your parathread",description:"Reserve your parathread and para ID."},o=void 0,p={unversionedId:"Parachain/beginner/section3/creating-parathread",id:"Parachain/beginner/section3/creating-parathread",title:"Reserve your parathread",description:"Reserve your parathread and para ID.",source:"@site/docs/Parachain/beginner/section3/creating-parathread.md",sourceDirName:"Parachain/beginner/section3",slug:"/Parachain/beginner/section3/creating-parathread",permalink:"/docs/Parachain/beginner/section3/creating-parathread",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Parachain/beginner/section3/creating-parathread.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1694625501,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"creating-parathread",title:"Reserve your parathread",sidebar_label:"Reserve your parathread",description:"Reserve your parathread and para ID."},sidebar:"parachain",previous:{title:"Creating & Registering Parachain",permalink:"/docs/Parachain/beginner/section3/"},next:{title:"Using Sudo to register your parachain",permalink:"/docs/Parachain/beginner/section3/sudo-register"}},c={},s=[{value:"Reserving a ParaID",id:"reserving-a-paraid",level:2}],l={toc:s},d="wrapper";function u(e){let{components:r,...i}=e;return(0,n.kt)(d,(0,a.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before registering and uploading your parachain's runtime, you must register a ",(0,n.kt)("inlineCode",{parentName:"p"},"ParaId"),".  Each parachain has a unique ID on the relay chain."),(0,n.kt)("admonition",{title:"Different RPC Ports for the Relay and Parachain",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To connect to Polkadot.js, you will need to use the following URLs:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Relay Chain on ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer"},"Port 9944")),(0,n.kt)("li",{parentName:"ul"},"Parachain Collator on ",(0,n.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A8844#/explorer"},"Port 8844")))),(0,n.kt)("h2",{id:"reserving-a-paraid"},"Reserving a ParaID"),(0,n.kt)("p",null,"Navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer"},"Polkadot.js Developer Console"),', select the "Network" dropdown, and select "Parachains":'),(0,n.kt)("p",null,'Select the "Parathreads" tab.  Per our chain spec, our parachain indicates the ID is ',(0,n.kt)("inlineCode",{parentName:"p"},"2000"),".  Luckily, the default starting ",(0,n.kt)("inlineCode",{parentName:"p"},"ParaId")," is 2000, as stated below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(1254).Z,width:"1498",height:"882"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Alice")," as per above, and send the extrinsic.  Your parachain can now be registered using that ",(0,n.kt)("inlineCode",{parentName:"p"},"ParaId")," once the extrinsic is confirmed."))}u.isMDXComponent=!0},1254:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/register_paraid-888d18932e70db3bf1eef53c12e2b64b.png"}}]);