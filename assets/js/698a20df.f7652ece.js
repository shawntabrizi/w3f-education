"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[3347],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return p}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(o),p=n,f=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return o?a.createElement(f,i(i({ref:t},h),{},{components:o})):a.createElement(f,i({ref:t},h))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7338:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return h},default:function(){return u}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],s={id:"q-faq",title:"Q for FAQ",sidebar_position:16},l=void 0,d={unversionedId:"AtoZ/q-faq",id:"AtoZ/q-faq",isDocsHomePage:!1,title:"Q for FAQ",description:"J for Polkadot JS",source:"@site/docs/AtoZ/q-faq.md",sourceDirName:"AtoZ",slug:"/AtoZ/q-faq",permalink:"/w3f-education/docs/AtoZ/q-faq",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/q-faq.md",version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1677164999,formattedLastUpdatedAt:"2/23/2023",sidebarPosition:16,frontMatter:{id:"q-faq",title:"Q for FAQ",sidebar_position:16},sidebar:"atoz",previous:{title:"P for Phragm\xe9n",permalink:"/w3f-education/docs/AtoZ/phragm\xe9n"}},h=[{value:"How does staking work?",id:"how-does-staking-work",children:[]},{value:"What is the Polkadot-JS UI?",id:"what-is-the-polkadot-js-ui",children:[]},{value:"Why does a parachain need to connect to the Relay Chain?",id:"why-does-a-parachain-need-to-connect-to-the-relay-chain",children:[]},{value:"How is Polkadot different from Cosmos?",id:"how-is-polkadot-different-from-cosmos",children:[]},{value:"Why do different networks have different addresses but the same pubkey?",id:"why-do-different-networks-have-different-addresses-but-the-same-pubkey",children:[]},{value:"Why is the unbonding period 28 days and why can\u2019t I earn staking rewards when I\u2019m unbonding?",id:"why-is-the-unbonding-period-28-days-and-why-cant-i-earn-staking-rewards-when-im-unbonding",children:[]},{value:"Is Kusama a testnet?",id:"is-kusama-a-testnet",children:[]}],c={toc:h};function u(e){var t=e.components,s=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"J for Polkadot JS",src:o(7046).Z})),(0,r.kt)("p",null,"For the past two-plus years that Polkadot has been live, questions from the community are frequently present in socials. In this post, I\u2019ll be answering some of those questions. If you have any other questions that you think should be a part of this post, please leave a comment."),(0,r.kt)("h2",{id:"how-does-staking-work"},"How does staking work?"),(0,r.kt)("p",null,"Staking on Polkadot uses Nominated Proof-of-Stake(NPoS), a flavor of PoS that allows for two types of participants, nominators and validators. Validators are the entities that run a full version of the Polkadot blockchain as a node, and they secure the network by bonding a number of tokens, which in turn allows them to create blocks. Nominators are the entities that elect validators into the active validator set, which currently is 297 on Polkadot and 1000 on Kusama. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The active validator set is an arbitrary value that can be changed via governance."))),(0,r.kt)("p",null,"The role of staking is a part of the consensus mechanism. The mechanism allows token holders to be the on-chain entities that secure the network by putting up their tokens as collateral. This incentive, baked into the protocol, allows any token holder to earn newly created tokens, which the network mints whenever there is a successful new block. In simple terms, this is the inflation portion of the monetary policy of the network."),(0,r.kt)("p",null,"The reason why its design is complex is due to avoid the pitfalls of staking models. Mainly that of a few entities controlling the majority of the stake. Proof-of-Stake systems all have a different flavor of choosing the staked entities as validators. And the goal here is not to favor certain entities more than others. That endevour in itself is a challenging problem to solve. "),(0,r.kt)("p",null,"For a detailed dive into NPoS read the ",(0,r.kt)("a",{parentName:"p",href:"/w3f-education/docs/AtoZ/npos"},"letter N")," post of this blog series. And also be sure to checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"Polkadot wiki"),"."),(0,r.kt)("h2",{id:"what-is-the-polkadot-js-ui"},"What is the Polkadot-JS UI?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/w3f-education/docs/AtoZ/polkadot-js"},"Polkadot-JS")," is a developer-centric interface that allows for granular control of Substrate-based chains. The idea with Polkadot-JS is to be a place where all ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-extrinsics"},"extrinsics")," of all pallets can be engaged. For a tool like Polkadot-JS to stay up to date with the ever-changing Substrate landscape, functionality is the primary goal, and the user interface has to be a secondary consideration. Therefore, we should consider Polkadot-JS as a featureful tool rather than a user-centric one. For more user-centric tools, try one of the many wallets that support Substrate."),(0,r.kt)("h2",{id:"why-does-a-parachain-need-to-connect-to-the-relay-chain"},"Why does a parachain need to connect to the Relay Chain?"),(0,r.kt)("p",null,"The Relay Chain provides security for parachains. On a more granular level, it also provides a marketplace for parachains to compete. Via the parachain auctions, this competition can be considered healthy, as it incentivizes good product development and disincentivizes scams. The security of the Relay Chain is inherited by the parachains, making them as secure as the Relay Chain. This is a big improvement to previous models of blockchain development - as previously blockchains would have needed to develop their network security from scratch. "),(0,r.kt)("h2",{id:"how-is-polkadot-different-from-cosmos"},"How is Polkadot different from Cosmos?"),(0,r.kt)("p",null,"A classic comparison. Polkadot vs. Cosmos has been one of the most debated topics as they are competitors for a chain model that allows other layer 1 chains to connect and interoperate. See ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-comparisons-cosmos"},"this wiki page")," for more info about this topic."),(0,r.kt)("h2",{id:"why-do-different-networks-have-different-addresses-but-the-same-pubkey"},"Why do different networks have different addresses but the same pubkey?"),(0,r.kt)("p",null,"Substrate-based chains use the SS58 format for generating their account keypairs. Different network formats are other representations of the same public key in a key pair generated by an address-generation tool. This results in addresses being compatible across networks as long as the format is converted correctly."),(0,r.kt)("h2",{id:"why-is-the-unbonding-period-28-days-and-why-cant-i-earn-staking-rewards-when-im-unbonding"},"Why is the unbonding period 28 days and why can\u2019t I earn staking rewards when I\u2019m unbonding?"),(0,r.kt)("p",null,"The unbonding feature is designed to ensure that those who stake are not simply able to remove their stake at will, which ensures security in the network. Technically you will earn staking rewards if you unbond in the middle of an era for that era; however, not for the following one. The time you will have to wait until your tokens serves as a cooldown. During this time, you cannot nominate and/or transfer, hence unable to earn staking rewards."),(0,r.kt)("h2",{id:"is-kusama-a-testnet"},"Is Kusama a testnet?"),(0,r.kt)("p",null,"Kusama was intended to be a value-bearing test network, but since its inception, we have seen it become a sovereign network in its own right. Including a vibrant developer community and culture, as well as projects that live solely in Kusama, with no plans to move on to Polkadot. So why? Because, in the world of blockchains, we are dealing with real value. A bug in runtime code can be extremely costly, and to prevent this, runtime code needs to be tested in real value-bearing environments. In addition to Web 2.0 style testing, Web 3.0 needs to be run in the wild to see if any game-theoretic unpredictable behaviors emerge. Kusama is exactly that for Polkadot and any other parachain that plans to be on Polkadot. But now, it is also home to many projects that have found a home in the world of Kusama."))}u.isMDXComponent=!0},7046:function(e,t,o){t.Z=o.p+"assets/images/Q-2caee259075baa504c86aa870364f944.png"}}]);