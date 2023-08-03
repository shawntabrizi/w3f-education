"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6880],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3651:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={id:"democracy",title:"D for Democracy",sidebar_position:4},i=void 0,s={unversionedId:"AtoZ/democracy",id:"AtoZ/democracy",title:"D for Democracy",description:"D for Democracy",source:"@site/docs/AtoZ/democracy.md",sourceDirName:"AtoZ",slug:"/AtoZ/democracy",permalink:"/docs/AtoZ/democracy",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/democracy.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1676642556,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:4,frontMatter:{id:"democracy",title:"D for Democracy",sidebar_position:4},sidebar:"atoz",previous:{title:"C for Collator",permalink:"/docs/AtoZ/collator"},next:{title:"E for Existential Deposit",permalink:"/docs/AtoZ/existential-deposit"}},l={},c=[{value:"Proposal of referenda",id:"proposal-of-referenda",level:2},{value:"Voting on referendum proposals",id:"voting-on-referendum-proposals",level:2},{value:"Enactment",id:"enactment",level:2},{value:"Council",id:"council",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"D for Democracy",src:o(6649).Z,width:"800",height:"420"})),(0,n.kt)("p",null,"Democracy is a form of governance that society has been practicing in different forms for centuries. At its purest form, it is the decentralization of power. It first appeared in the 5th century BC derived from the Greek word meaning \u201crule of the people'' and 26 centuries later, taking form in Polkadot, the application of Democracy can be thought of as \u201crule of the stakeholders\u201d. It acts as the ",(0,n.kt)("strong",{parentName:"p"},"governance")," mechanism through which only agreed upon changes to the network by its stakeholders(participants) can pass. The network must function as a decentralized system, which also happens to be how it handles code updates. When a new functionality is proposed, the network participants, the DOT holders, vote on it. And if it passes the Democratic process, it will automatically call the ",(0,n.kt)("inlineCode",{parentName:"p"},"set_code")," function, which will update the runtime code(a WebAssembly blob, which we will cover later this year with letter W) of the network. This is how Polkadot works around hard forks which most other blockchains need to use to update their code. "),(0,n.kt)("p",null,"So how does the system work? The flow follows - ",(0,n.kt)("strong",{parentName:"p"},"proposal of referenda > voting > enactment"),". Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-democracy"},"wiki")," for a deeper dive into each part."),(0,n.kt)("h2",{id:"proposal-of-referenda"},"Proposal of referenda"),(0,n.kt)("p",null,"In Polkadot, the main application of Democracy comes from a public referendum. Referendums are simple, inclusive, stake weighted voting mechanisms, and they start with a proposal, which can be enacted in a few different ways: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Publicly submitted proposals"),(0,n.kt)("li",{parentName:"ul"},"Proposals submitted by the council, either through a majority or unanimously"),(0,n.kt)("li",{parentName:"ul"},"Proposals submitted as part of the enactment of a prior referendum"),(0,n.kt)("li",{parentName:"ul"},"Emergency proposals submitted by the Technical Committee and approved by the Council")),(0,n.kt)("h2",{id:"voting-on-referendum-proposals"},"Voting on referendum proposals"),(0,n.kt)("p",null,"Proposing requires you to bond some tokens, and once the proposal has been made, the tokens are locked until the proposal has been \u201ctabled\u201d. Meaning that there was a voting period. Bonded tokens have a lock period, and in Polkadot one lock period is 28 days, and Kusama is eight days.\nOnce a proposal has been tabled, voting can begin. In reality, getting voting turnouts to be 100% is extremely rare, so we have developed Adaptive Quorum Biasing. In simple terms, this tool allows the network to intelligently adjust the amount of aye or nay votes required to successfully pass or not pass a referendum based on the participant turnout.  "),(0,n.kt)("h2",{id:"enactment"},"Enactment"),(0,n.kt)("p",null,"Every approved proposal will have a period before it is enacted, that is, when the set_code function is called. We call this the delayed enactment period, and it allows participants that do not agree with the new update to leave the network. Also, those who voted for the proposal will have their bonded DOT locked until the upgrade is executed. "),(0,n.kt)("h2",{id:"council"},"Council"),(0,n.kt)("p",null,"Any DOT holder can become elected to the council. This a delegated group of stakeholders that are elected through a rotating approval vote, meaning that the seats in coun  cil are voted on one at a time. Like a few other network parts, the elections use the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"sequential Phragm\xe9n method"),". Polkadot currently has 13 council seats and is planning to eventually have 24, while Kusama has 19. Candidates for council bond their DOT to be voted for, and their DOT is returned when elected. Top runner-ups are persisted until the next election, meaning their bond stays locked till the next seat is up for election. Council terms are seven days on Polkadot and one day on Kusama. They control the treasury, propose referenda, cancel dangerous and non-controversial referenda, and elect the technical committee. The existence of the council allows the network to have a trusted group that represents the absent participants to make sure Democracy is functioning as intended."),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.crowdcast.io/e/governance-on-polkadot--/register"},"this")," crowdcast which dives deeper into the governance of Polkadot."))}h.isMDXComponent=!0},6649:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/D-c9ebe497693976125d82df68d7d263fd.png"}}]);