"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"node-template-tour",title:"Node Template Tour & Overview",sidebar_label:"Node Template Tour & Overview",description:"Get familiar with the Substrate node template and its various components."},i=void 0,l={unversionedId:"Substrate/section3/node-template-tour",id:"Substrate/section3/node-template-tour",title:"Node Template Tour & Overview",description:"Get familiar with the Substrate node template and its various components.",source:"@site/docs/Substrate/section3/node-template-tour.md",sourceDirName:"Substrate/section3",slug:"/Substrate/section3/node-template-tour",permalink:"/docs/Substrate/section3/node-template-tour",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section3/node-template-tour.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1693238811,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"node-template-tour",title:"Node Template Tour & Overview",sidebar_label:"Node Template Tour & Overview",description:"Get familiar with the Substrate node template and its various components."},sidebar:"substrate",previous:{title:"Install, configure, and run the Node Template",permalink:"/docs/Substrate/section3/install-deps"},next:{title:"Exploring the pallet template",permalink:"/docs/Substrate/section3/explore-pallet-template"}},s={},c=[{value:"Node Template Structure",id:"node-template-structure",level:2},{value:"Node / Networking Directory - <code>node/</code>",id:"node--networking-directory---node",level:3},{value:"Runtime Directory - <code>runtime/</code>",id:"runtime-directory---runtime",level:3},{value:"Pallets Subdirectory = <code>pallets/</code>",id:"pallets-subdirectory--pallets",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last section of this module, you installed and ran the ",(0,a.kt)("inlineCode",{parentName:"p"},"substrate-mooc-node"),". It's important\nto realize that this isn't just a node for a blockchain but an entire blockchain itself. If you look\nfurther into the configuration and structure of this node template, some files are specifically for\nsetting the initial state of the entire blockchain."),(0,a.kt)("h2",{id:"node-template-structure"},"Node Template Structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"substrate-mooc-node")," is based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"substrate-node-template"),', "A Substrate project such as\nthis consists of several components spread across a few directories."'),(0,a.kt)("p",null,"It comes pre-configured with several crucial components to develop a blockchain with FRAME and\nSubstrate - including networking, configured runtimes, and a template for adding more pallets to\nyour chain. Pallets can be added either locally, as per this example, or remotely. For now, pallets\nare imported as crates from GitHub (using the ",(0,a.kt)("inlineCode",{parentName:"p"},'git = "<source>"')," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," of a\nparticular project)."),(0,a.kt)("h3",{id:"node--networking-directory---node"},"Node / Networking Directory - ",(0,a.kt)("inlineCode",{parentName:"h3"},"node/")),(0,a.kt)("p",null,"To allow your chain to communicate to the outside world, whether to other nodes in the chain or to\nexpose an RPC interface. It must contain networking to perform peer-to-peer actions for\nfunctionality like finality, which are included within Substrate as a library\n(",(0,a.kt)("inlineCode",{parentName:"p"},"sc_consensus_grandpa"),"). There are also a few other practical files, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"cli.rs"),", which\nexposes a command-line interface for your node."),(0,a.kt)("p",null,"Paraphrasing the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-node-template#node"},"node template"),", a\nblockchain node typically has these three things (which are included with this node):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Networking - This is implemented with ",(0,a.kt)("inlineCode",{parentName:"p"},"libp2p")," and Substrate libraries and is how nodes\ncommunicate in a multi-node scenario.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Consensus - Consensus is the crucial aspect allowing the chain to agree on some state. Substrate\nprovides some implementations for consensus models, i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"sc_consensus_grandpa"),", but also\nprovides a way to create your consensus model.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"RPC Server - A remote procedural call server that enables clients to interact with the node."))),(0,a.kt)("p",null,"It has three primary files that implement the above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"service.rs")," - Defines each related service needed to establish peer-to-peer communications,\nconsensus, finalization, and fork-choice ruling."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rpc.rs")," - Manages and keeps track of clients and their requests, extendable by API if the\ndeveloper wishes (and the pallet exposes methods for the RPC to utilize)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chain_spec.rs")," - The chain specification file establishes an initial configuration for the state\nof the network, such as user balances on genesis (for both development and production).")),(0,a.kt)("h3",{id:"runtime-directory---runtime"},"Runtime Directory - ",(0,a.kt)("inlineCode",{parentName:"h3"},"runtime/")),(0,a.kt)("p",null,"The runtime, also referred to as the ",(0,a.kt)("strong",{parentName:"p"},"state transition function"),", refers to the core business\nlogic at the center of the blockchain. It is the beating heart of the blockchain node and the\ndeciding factor in how a piece of data is transformed and stored and affects another state within\nthe chain. It is also responsible for validating blocks, probably one of the best examples of this\noccurring."),(0,a.kt)("p",null,"It is within this runtime that you will see FRAME being utilized completely. FRAME, as mentioned,\nprovides many support libraries (and their respective macros therein) that are used for building\nruntimes. As also mentioned, ",(0,a.kt)("strong",{parentName:"p"},"pallets")," are used to establish a custom, domain-specific pieces of\nlogic that can be added to the runtime."),(0,a.kt)("p",null,"It has one primary file to look at: ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime/lib.rs"),"."),(0,a.kt)("h3",{id:"pallets-subdirectory--pallets"},"Pallets Subdirectory = ",(0,a.kt)("inlineCode",{parentName:"h3"},"pallets/")),(0,a.kt)("p",null,"Lastly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pallets/")," can be used to add or create pallets locally as a Rust crate. However,\npallets are often added remotely within ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime/Cargo.toml"),". Pallets can also use other pallets\nthrough a coupling mechanism, which you will learn later."),(0,a.kt)("p",null,"All pallets are Rust crates that utilize FRAME's support libraries and macros, where they are then\nregistered and configured within the ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime"),"."))}u.isMDXComponent=!0}}]);