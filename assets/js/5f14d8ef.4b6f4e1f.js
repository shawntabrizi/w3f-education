"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={id:"introparachain",sidebar_position:1},o="Parachain Development Guide",c={unversionedId:"introparachain",id:"introparachain",title:"Parachain Development Guide",description:"This guide aims to jumpstart a developer from an overview of Polkadot architecture, creating their own parachain, and going through the process of registering it to a locally available relay chain.",source:"@site/docs/introparachain.md",sourceDirName:".",slug:"/introparachain",permalink:"/docs/introparachain",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/introparachain.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1691089507,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:1,frontMatter:{id:"introparachain",sidebar_position:1},sidebar:"parachain",next:{title:"Parachain Architecture Overview",permalink:"/docs/Parachain/beginner/section1/"}},l={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parachain-development-guide"},"Parachain Development Guide"),(0,n.kt)("p",null,"This guide aims to jumpstart a developer from an overview of Polkadot architecture, creating their own parachain, and going through the process of registering it to a locally available relay chain."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn the basics of how Polkadot works as a network."),(0,n.kt)("li",{parentName:"ul"},"Learn the roles of the relay and parachain architecture."),(0,n.kt)("li",{parentName:"ul"},"Install necessary binaries and dependencies needed to create networks locally."),(0,n.kt)("li",{parentName:"ul"},"Modify your parachain and prep it for connecting to the relay chain."),(0,n.kt)("li",{parentName:"ul"},"Create a parathread and reserve a para ID"),(0,n.kt)("li",{parentName:"ul"},"Create and run an auction, registering your parachain."),(0,n.kt)("li",{parentName:"ul"},"Next steps and moving forward.")))}d.isMDXComponent=!0}}]);