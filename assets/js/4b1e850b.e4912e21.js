"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),y=o,m=c["".concat(l,".").concat(y)]||c[y]||p[y]||n;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={id:"treasury"},s="Treasury",i={unversionedId:"Polkadot/Module2/treasury",id:"Polkadot/Module2/treasury",title:"Treasury",description:"The Treasury raises funds continually. These funds are used to pay for developers that provide",source:"@site/docs/Polkadot/Module2/treasury.md",sourceDirName:"Polkadot/Module2",slug:"/Polkadot/Module2/treasury",permalink:"/docs/Polkadot/Module2/treasury",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module2/treasury.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"treasury"},sidebar:"polkadot",previous:{title:"On-Chain Governance",permalink:"/docs/Polkadot/Module2/governance"},next:{title:"Polkadot Network Consensus",permalink:"/docs/Polkadot/Module3/consensus"}},l={},u=[{value:"Polkadot Treasury Overview",id:"polkadot-treasury-overview",level:2},{value:"Treasury Proposals and Bounties",id:"treasury-proposals-and-bounties",level:2},{value:"Polkadot Treasury Payouts",id:"polkadot-treasury-payouts",level:2},{value:"Kusama Treasury",id:"kusama-treasury",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"treasury"},"Treasury"),(0,o.kt)("p",null,"The Treasury raises funds continually. These funds are used to pay for developers that provide\nsoftware updates, apply any changes decided by referenda, adjust parameters, and generally keep the\nsystem running smoothly. Funds may also be used for further goals such as marketing activities,\ncommunity events and outreach. This is ultimately controlled by all DOT holders via Governance and\nit will be the community and their collective imagination and judgment which really determines the\ncourse of the Treasury. Funds for Treasury are raised in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"by channeling some of the validator rewards that come from minting of new tokens, and"),(0,o.kt)("li",{parentName:"ol"},"by channeling a fraction of transaction fees and of slashings. The first method allows us to\nmaintain a fixed in ation rate while simultaneously having the validator rewards be dependent of\nthe staking level: the difference between the scheduled minted tokens and the validator rewards\nis assigned to Treasury in each era. We also argue that it is convenient to have a fraction of\nall slashings be redirected to Treasury: following an event that produced heavy stake slashing,\nthe system is likely to need additional funds to develop software updates or new infrastructure\nthat deal with an existing issue, or it might be decided by Governance to reimburse some of the\nslashed stake. Thus, it makes sense to have the slashed DOTs available in Treasury, instead of\nburning them and having to mint more DOTs soon thereafter.")),(0,o.kt)("h2",{id:"polkadot-treasury-overview"},"Polkadot Treasury Overview"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YEKJocpHsEE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"treasury-proposals-and-bounties"},"Treasury Proposals and Bounties"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/H7S4hWLan58",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"polkadot-treasury-payouts"},"Polkadot Treasury Payouts"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zwiqnXbloCA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"kusama-treasury"},"Kusama Treasury"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OjMkv3OasUU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);