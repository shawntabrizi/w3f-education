"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[3149],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(o),p=a,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return o?n.createElement(f,i(i({ref:t},h),{},{components:o})):n.createElement(f,i({ref:t},h))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9271:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={id:"launch",title:"L for Polkadot Launch",sidebar_position:11},i=void 0,s={unversionedId:"AtoZ/launch",id:"AtoZ/launch",title:"L for Polkadot Launch",description:"L for Polkadot Launch",source:"@site/docs/AtoZ/launch.md",sourceDirName:"AtoZ",slug:"/AtoZ/launch",permalink:"/docs/AtoZ/launch",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/launch.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1676645862,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:11,frontMatter:{id:"launch",title:"L for Polkadot Launch",sidebar_position:11},sidebar:"atoz",previous:{title:"K for Kusama",permalink:"/docs/AtoZ/kusama"},next:{title:"M for Multisig",permalink:"/docs/AtoZ/multisig"}},l={},c=[],h={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"L for Polkadot Launch",src:o(9122).Z,width:"1600",height:"840"})),(0,a.kt)("p",null,"At the end of 2021, Polkadot hit an important checkpoint with the rollout of parachains, marking the final phase of the original promise of the whitepaper that was published in 2016 and the Genesis block time stamped on May 26, 2020, at 15:36:21 UTC, marked the first phase of Polkadot\u2019s launch. A planned, phased, and controlled process started to help the network transitioning from being centralized and closely controlled to being decentralized. More than five years have passed since the original whitepaper. In this post, I\u2019d like to explain the phases the network went through and the reasoning behind them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phases (2016 - 2022)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Proof of Authority (PoA) ","[May 26, 2020]")),(0,a.kt)("p",null,"The Polkadot network started as a Proof of Authority network, a consensus mechanism that gives a small number of validators complete control over the network. It was maintained by six validators that Web3 Foundation controlled. With the power of Sudo (a Substrate functionality that allows for a single account to do anything to the chain using root, though a bit technical, you can learn more about it ",(0,a.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_sudo/index.html"},"here")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.shawntabrizi.com/substrate/the-sudo-story-in-substrate/"},"here"),"), the Foundation closely nourished the early stages of the network. Users were allowed to claim their DOT tokens and stake them. However, during this phase, users' staking only meant ",(0,a.kt)("strong",{parentName:"p"},"signaling their intention")," to be a validator or nominator. The Foundation used this as a metric to know when there were enough validators to remove some control over the network and put it into the hands of the DOT holders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nominated Proof of Stake (NPoS) ","[June 18, 2020]")),(0,a.kt)("p",null,"Once there was enough signal from the intended validators, it was time to start the next phase. This would entail a transition of the network from PoA to NPoS. The Foundation did this by using a Sudo call to change the ",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168050-what-is-an-era-"},"Eras"),", which triggered the first validator election. This phase marked the first efforts to decentralize the network further. Also, Sudo was used to increase the active validator set slowly during this phase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Governance and Sudo removal ","[July 20, 2020]")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-governance"},"Governance")," on Polkadot is how the DOT token holders enact runtime upgrades. The only way to remove Sudo from the Foundation\u2019s control was through referendums in which the DOT token holders could participate. This would be done by the Foundation enabling Governance (using Sudo, of course), in which the network can elect Council and Technical Committee members and accept public proposals. With Governance in place, Sudo was removed through public referenda, and the root power was transferred to the DOT holders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Balance Transfers ","[August 18, 2020]")),(0,a.kt)("p",null,"With Sudo removed, anything from here on out required Governance to enable runtime upgrades. A public proposal allowed balance transfers on block number 1,205,128 by the DOT token holders. With this runtime upgrade, DOT holders could now transfer funds between accounts."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parachain Rollout ","[October 13, 2021]")),(0,a.kt)("p",null,"With over a year of development efforts, parachain functionality was first tested on the Rococo test network and then released via governance on Kusama before being announced during the Sub0 conference that parachain functionality was ready for Polkadot in October of 2021. With ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/118"},"Motion 118"),", proposing two batches of auction parachains on Polkadot were on the way. The DOT community voted to pass this motion. Auctions were set to start on November 11, 2021, and the first five parachains (Acala, Moonbeam, Parallel Finance, Astar, and Clover) were onboarded on December 18, 2021. Currently(January 14, 2022), the 2nd batch of auctions are well on their way, with the 2nd batch due to get onboarded on or around March 11, 2022. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Future ","[2022 - infinity]")),(0,a.kt)("p",null,"As the rollout suggests, an important goal is making Polkadot as decentralized as possible. One suggested next step in this direction is to remove the Council and the Technical Committee as they\u2019re both points of centralization, and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/10195"},"a new governance model is being developed")," that does exactly that. In addition to that endeavor, there are several proposals for the following stages of the network, and Robert Habermeier recently talked about some ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=z5i7TVEyn-Y"},"upcoming efforts"),". These include async backing, a way to build and bundle validated parachain blocks before writing them to the Relay Chain, parathreads, and especially, a way to schedule parachain slot availability on a block-by-block basis. Some network optimizations have also been proposed, focusing on improving collator and validator interactions."))}u.isMDXComponent=!0},9122:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/L-9ef4a97578c8e760ff3e0212cac7c2eb.png"}}]);