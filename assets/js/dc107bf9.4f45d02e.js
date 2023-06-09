"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5979],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=o,y=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return a?r.createElement(y,n(n({ref:t},d),{},{components:a})):r.createElement(y,n({ref:t},d))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8270:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const i={id:"sharedsecurity"},n="Securing the Network",l={unversionedId:"Polkadot/Module3/sharedsecurity",id:"Polkadot/Module3/sharedsecurity",isDocsHomePage:!1,title:"Securing the Network",description:"Polkadot assumes that parachains are running as external untrusted clients of the relay chain and that",source:"@site/docs/Polkadot/Module3/sharedsecurity.md",sourceDirName:"Polkadot/Module3",slug:"/Polkadot/Module3/sharedsecurity",permalink:"/docs/Polkadot/Module3/sharedsecurity",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module3/sharedsecurity.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"sharedsecurity"},sidebar:"polkadot",previous:{title:"Validators and Nominators",permalink:"/docs/Polkadot/Module3/maintainers"},next:{title:"Security and Consensus Improvements",permalink:"/docs/Polkadot/Module3/securityimprovements"}},c=[{value:"Block Availability and Validity",id:"block-availability-and-validity",children:[]},{value:"Parachain Block Data Availability",id:"parachain-block-data-availability",children:[]},{value:"Blockchain Data Availability through Erasure Coding",id:"blockchain-data-availability-through-erasure-coding",children:[]},{value:"Shared Security - Ethereum vs Polkadot vs Cosmos",id:"shared-security---ethereum-vs-polkadot-vs-cosmos",children:[]}],s={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"securing-the-network"},"Securing the Network"),(0,o.kt)("p",null,"Polkadot assumes that parachains are running as external untrusted clients of the relay chain and that\nthe relay chain only deals with parachains via an interface and does not make assumptions about\ntheir internals. For example, internally they may be permissioned or open; if some internal users\nsubvert the parachain, from Polkadot's viewpoint the entire parachain (as a single client entity) is\nmalicious."),(0,o.kt)("p",null,"The Polkadot relay chain is designed to deal with a level of malicious behaviour internally, as a\nrequirement of being an open decentralised network. Specific individual nodes are untrusted, but\nan indeterminable subset of nodes lower-bounded in size are trusted, and the protocol works to\nensure that the relay chain externally as a whole is trustable."),(0,o.kt)("p",null,"Polkadot does not have any security assumption on block production mechanism for\nparachains. The security of Polkadot does not depend on any precise honest fraction of collators but it requires\nexistence of some honest collators."),(0,o.kt)("p",null,"Parts of the protocol assume that every parachain has at least one reachable honest member;\nwhere this is not feasible or not realistic, we do not follow through on this assumption and instead\nhave additional checks against a totally-malicious membership."),(0,o.kt)("h2",{id:"block-availability-and-validity"},"Block Availability and Validity"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/P4fuYJQDKN4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"parachain-block-data-availability"},"Parachain Block Data Availability"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/S0R4SHdpkeE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"blockchain-data-availability-through-erasure-coding"},"Blockchain Data Availability through Erasure Coding"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/g45QwAfXrGM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"shared-security---ethereum-vs-polkadot-vs-cosmos"},"Shared Security - Ethereum vs Polkadot vs Cosmos"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h3lE5H84xlM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);