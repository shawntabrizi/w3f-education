"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6561],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=n,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return o?a.createElement(f,i(i({ref:t},d),{},{components:o})):a.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5164:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={id:"npos",sidebar_position:3},i="Nominated Proof of Staking",s={unversionedId:"Polkadot/Module3/npos",id:"Polkadot/Module3/npos",title:"Nominated Proof of Staking",description:"Polkadot's validators are selected by the NPoS scheme. Nominated Proof-of-Stake",source:"@site/docs/Polkadot/Module3/npos.md",sourceDirName:"Polkadot/Module3",slug:"/Polkadot/Module3/npos",permalink:"/docs/Polkadot/Module3/npos",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module3/npos.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"Jun 10, 2022",sidebarPosition:3,frontMatter:{id:"npos",sidebar_position:3},sidebar:"polkadot",previous:{title:"Polkadot Network Consensus",permalink:"/docs/Polkadot/Module3/consensus"},next:{title:"Validators and Nominators",permalink:"/docs/Polkadot/Module3/maintainers"}},l={},c=[{value:"Proof of Stake (PoS) Overview",id:"proof-of-stake-pos-overview",level:2},{value:"Polkadot NPoS Algorithm Complexity",id:"polkadot-npos-algorithm-complexity",level:2},{value:"Proof of Stake (PoS) vs Proof of Work (PoW)",id:"proof-of-stake-pos-vs-proof-of-work-pow",level:2},{value:"Phragmen",id:"phragmen",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"nominated-proof-of-staking"},"Nominated Proof of Staking"),(0,n.kt)("p",null,"Polkadot's validators are selected by the NPoS scheme. Nominated Proof-of-Stake\nor NPoS is our adaptation of PoS where an unlimited amount of token holders can participate as\nnominators, backing with their stake a large but limited set of validators. This paradigm simultaneously\nachieves high levels of security and scalability, as well as an unprecedented level of\ndecentralization by ensuring a property known in voting theory as proportional justified representation.\nNominators, who are economically vested in the security of the system, act as watchdogs over the validators'\nperformance. Based on the nominators' expressed preferences over candidates, every era the system selects a\nset of validators with stake backings that are as high. and as evenly distributed as possible. Nominators\nare also economically disincentivized from concentrating their votes on too few validators, which helps\nkeep the system decentralised over time."),(0,n.kt)("p",null,"Furthermore, the election mechanism is highly adaptive to sudden changes, such as some validators\nbeing kicked out after a slashing, as it automatically redistributes the nominators' backings across\nthe new set of validators, even when the votes themselves do not change.\nThe security goal of Polkadot is to be Byzantine fault tolerant when the participants are rational\n(see Section 4.5 for more details on incentives and economics). We assume that with the properties\nNPoS gives, the stakeholders elect a set of validators that has a more than 2/3 fraction of honest\nmembers."),(0,n.kt)("p",null,"The elected validators are responsible for running the relay chain . While each\nparachain's collators are responsible for generating parachain blocks, the validators\nare divided into rotating subsets, one for each parachain, and need to attest to the validity of\nparachain blocks before the headers of those blocks are included in the relay chain.\nTo achieve good scalability the number of validators in each of these subsets is small. Nonethe-\nless, thanks to the NPoS guarantee that every validator is well backed, the availability and validity\nscheme can ensure that any attack on the validity of Polkadot is very expensive in\nexpectation. In fact, the entirety of Polkadot's economic security backs every parachain. This is in\nstark contrast to having, say, 100 independent blockchains with an equivalent sum total of stake,\nwhere on average each blockchain is backed by 1/100-th of the stake, and thus only benefits from\n1/100-th the level of security. We guarantee availability by using erasure coding of each parachain\nblock to make the validators collectively and robustly responsible for the availability of these blocks\nwithout breaking scalability."),(0,n.kt)("h2",{id:"proof-of-stake-pos-overview"},"Proof of Stake (PoS) Overview"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yKo6pvgbvD8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"polkadot-npos-algorithm-complexity"},"Polkadot NPoS Algorithm Complexity"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/HdKEdD_Vdck",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"proof-of-stake-pos-vs-proof-of-work-pow"},"Proof of Stake (PoS) vs Proof of Work (PoW)"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6cdzD6lgOXE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"phragmen"},"Phragmen"),(0,n.kt)("p",null,"Our decentralisation objective translates into the classical notion of proportional representation in voting theory. That is, a committee should represent each minority in the\nelectorate proportional to their aggregate vote strength (in this case, their stake), with no minority\nbeing under-represented. We highlight here that nominators { and their lists of trusted candidates\n{ constitute a valuable gauge for the preferences of the general community, and that diverse pref-\nerences and factions will naturally arise not only due to economical and security-related reasons,\nbut also political, geographical, etc. Such diversity of points of view is expected and welcome in a\ndecentralised community, and it is important to engage all minorities in decision-making processes\nto ensure user satisfaction."),(0,n.kt)("p",null,"The goal of designing an electoral system that achieves proportional representation has been\npresent in the literature for a very long time. Of special note is the work of Scandinavian math-\nematicians Edvard Phragm\u2000en and Thorvald Thiele in the late nineteenth century. Very recently,\nthere has been considerable e\u2000ort in the research community to formalise the notion of proportional\nrepresentation, and revisit the methods by Phragm\u2000en and Thiele and optimise them algorithmi-\ncally. Our validator selection protocol is an adaptation of Phragm\u2000en's methods and is guaranteed\nto observe the technical property of proportional justified representation (PJR)"))}p.isMDXComponent=!0}}]);