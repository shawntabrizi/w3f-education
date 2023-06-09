"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5276],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,u=h["".concat(l,".").concat(p)]||h[p]||m[p]||i;return a?o.createElement(u,r(r({ref:t},d),{},{components:a})):o.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4343:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const i={id:"npos",title:"N for Nominated Proof of Stake (NPoS)",sidebar_position:13},r=void 0,s={unversionedId:"AtoZ/npos",id:"AtoZ/npos",isDocsHomePage:!1,title:"N for Nominated Proof of Stake (NPoS)",description:"N for Nominated Proof of Stake (NPoS)",source:"@site/docs/AtoZ/npos.md",sourceDirName:"AtoZ",slug:"/AtoZ/npos",permalink:"/docs/AtoZ/npos",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/npos.md",version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1677161829,formattedLastUpdatedAt:"2/23/2023",sidebarPosition:13,frontMatter:{id:"npos",title:"N for Nominated Proof of Stake (NPoS)",sidebar_position:13},sidebar:"atoz",previous:{title:"M for Multisig",permalink:"/docs/AtoZ/multisig"},next:{title:"O for On-chain Governance",permalink:"/docs/AtoZ/on-chain-governance"}},l=[],c={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"N for Nominated Proof of Stake (NPoS)",src:a(7802).Z})),(0,n.kt)("p",null,"Nominated Proof of Stake (NPoS) is a flavor of Proof of Stake (PoS); a consensus mechanism that allows token holders to stake (lock) their tokens on the network for the right to participate as validators or nominators. To understand this better, first, we will talk about consensus in general. We will cover Proof of Work (PoW) and PoS, followed by an introduction to NPoS, and wrap it all up with how the security of a network is directly related to its consensus implementation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consensus (noun)"),": "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A general agreement about something. "),(0,n.kt)("li",{parentName:"ol"},"An idea or opinion that everyone shares in a group.")),(0,n.kt)("p",null,"In a blockchain network, participants (nodes) have a full or partial copy of the blockchain on their computers. By using consensus mechanisms, they can ensure the data is synchronized with other participants across the network. There are different ways to achieve consensus, but in almost every case, network participants are tasked with adding data to the blockchain. There need to be ",(0,n.kt)("strong",{parentName:"p"},"well-designed economic incentives")," for these participants to behave ",(0,n.kt)("strong",{parentName:"p"},"truthfully")," and maintain the network's data, creating conditions that make it ",(0,n.kt)("strong",{parentName:"p"},"expensive to misbehave"),". This does not mean misbehavior is eliminated. However, the probability of it  occurring is significantly reduced."),(0,n.kt)("p",null,"Since the introduction of Bitcoin and Nakamoto consensus in 2009, there have been quite a few developments in achieving decentralized consensus. PoS is one of the few that have gained popularity, mainly because it solves some of the issues that come with PoW, such as energy consumption, economic entry barriers to become a validator and problems with centralization in validator pools."),(0,n.kt)("p",null,"PoS is not perfect either; that is why there are different variants of PoS to address one of the main problems we will cover in detail; large token holders potentially controlling the network by becoming the majority of the validators."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A brief description of Proof of Stake")),(0,n.kt)("p",null,"As mentioned, token holders can stake (lock) their tokens to become validators. Like miners in PoW, the validators in PoS are tasked with ordering transactions and creating blocks. For doing this work truthfully, they are rewarded with newly minted tokens (staking rewards). Once locked, those tokens are subject to ",(0,n.kt)("strong",{parentName:"p"},"slashing"),", aka a token burn, which acts as an incentive mechanism so that validators do not misbehave. If they misbehave ( and there are different severities of bad behavior), their tokens are subject to a slash (partially or fully). Most PoS systems require a ",(0,n.kt)("strong",{parentName:"p"},"minimum staking amount"),", which becomes a barrier to entry. And to provide better decentralization and equitability, there need to be good validator election systems in place not to favor larger token holders."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Proof of Stake vs. Proof of Work")),(0,n.kt)("p",null,"PoW is a consensus mechanism in which miners successfully solve computationally intensive problems to create blocks. Anyone with adequate hardware, access to the internet, and electricity can become a miner. However, as more miners join the network, the difficulty of mining increases. This causes the competition to be centralized toward those who can afford better hardware and pay lower electricity costs. Hardware frequently gets improved, constantly rendering even recent machines out of competition, and cheap electricity has a geopolitical implication that makes it difficult for those who live in certain parts of the world where electricity might be expensive to participate in the network as a miner. These two aspects have caused the centralization of mining efforts in PoW networks. PoS solves these issues."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Energy efficiency"),": PoS is considerably more energy efficient. ",(0,n.kt)("a",{parentName:"li",href:"https://www.bloomberg.com/news/articles/2022-02-02/polkadot-has-smallest-carbon-footprint-crypto-researcher-says"},"Recent study")," done by the Crypto Carbon Ratings Institute Ava Labs found Polkadot to be the most cost efficient PoS blockchain. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Lower barrier to entry"),": PoS doesn\u2019t have hardware or energy source barriers; token holders can become validators if they meet the minimum."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"More conducive to decentralization"),": simply, it is easier to become a validator in a PoS system; this, in theory, will create conditions for better decentralization.")),(0,n.kt)("p",null,"Despite the benefits, the minimum amount to stake may only be feasible for some token holders. For instance, Ethereum 2.0 has a minimum stake amount of 32 ETH, and Polkadot has a current minimum amount of approximately 300 DOT to become a nominator; however, ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/kianenigma/aa835946455b9a3f167821b9d05ba376"},"efforts")," to reduce this amount are being worked on."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nominated Proof of Stake")),(0,n.kt)("p",null,"NPoS is the validator election mechanism of the consensus protocol on Polkadot, which gives token holders two different options to participate."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Validator"),", a participant who runs a full blockchain node and builds blocks to be added to the chain. The cost of running a node is something to account for when considering becoming a validator."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Nominator"),", a participant who does not need to run a full blockchain node but is tasked with electing well-behaved validators to be a part of the active validator set.")),(0,n.kt)("p",null,"Both roles are required to stake tokens. The total staked amount for a validator is the sum of their stake and the stake of the nominators backing them."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Consensus on a blockchain is a multistep process, and NPoS is simply the part that decides who can be a validator on the network. It does not contain the logic for adding a block to the chain or chain finality. To have the full picture of consensus on Polkadot, read about ",(0,n.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html"},"BABE")," the block production mechanism and ",(0,n.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/finality.html"},"GRANDPA")," the finality mechanism, in addition, to fully grasp Polkadot\u2019s hybrid consensus implementation."))),(0,n.kt)("p",null,"There are elections in which nominators elect validators to an active validator set. A fixed number of validators (297 on Polkadot and 1000 on Kusama) are subject to change  via a runtime upgrade that passes governance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Validator nomination, active set, and staking rewards")),(0,n.kt)("p",null,"A new active set of validators are elected each era. An era is 24 hours on Polkadot and 6 hours on Kusama. Nominators are tasked with nominating up to 16 validators every election. The network then chooses the highest staked validators into the active set, and for the whole era, these validators will be tasked with creating blocks. At the end of the era, staking reward amounts are based on the era points gained by validators. Era points are calculated based on payable actions performed by validators, such as producing blocks, creating validity statements, etc."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Phragm\xe9n method for elections and distribution of stake")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen"},"The sequential Phragm\xe9n method")," is a system that is designed to elect multiple winners in an election. This is perfect for NPoS validator set selection, and in addition to that, the same method is used to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-phragmen#rationale-for-maintaining-an-even-distribution-of-stake"},"evenly distribute staking rewards")," across the validators in the active set. This ensures validators are paid equally, regardless of their initial stake. There is a security benefit to this as well. The total stake of the active validator set is distributed evenly across the validators, so the cost of taking control of the active validator set is significantly increased by ensuring the least staked validator is not weaker than the highest staked validator. NPoS is optimized to guarantee ",(0,n.kt)("strong",{parentName:"p"},"proportional representation of the minorities"),", in addition to behaving as a reputation system, where nominators are incentivized to elect ",(0,n.kt)("strong",{parentName:"p"},"trusted")," validators."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Consensus mechanisms and security")),(0,n.kt)("p",null,"In the end, consensus mechanisms are trying to solve the same problem, that is, to maintain data synchronicity across a decentralized network and maintain ",(0,n.kt)("a",{parentName:"p",href:"https://decrypt.co/resources/byzantine-fault-tolerance-what-is-it-explained"},"Byzantine Fault Tolerance (BFT)"),". This directly impacts the network, meaning a network is only as secure as its consensus mechanism is fault tolerant. In PoW, the security of a network can be quantified by the amount of computation(work) that the miners are exerting. To successfully attack a PoW network, one has to exercise more than 51% of the computation to change the data on the chain and have the majority of the participants accept it. In PoS, the security of a network can be quantified by the amount of stake. To attack a network, one has to own more than 51% of the network's total stake to control the majority of the validators on the network and change data on the chain."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This attack is relatively easy on a PoW network in its early life stages. Still, on a PoS network, as long as the distribution of tokens from the beginning is decentralized, it will be much more challenging to execute. And as networks mature, PoS has a higher ceiling of potential decentralization as long as the tokenomics are sound."))),(0,n.kt)("p",null,"At the current moment, there are a lot of exciting developments in PoS systems. This does not mean, though, that other consensus mechanisms do not exist, and indeed, there are many different approaches to consensus on blockchains. We are in the era of exploration, and seeing the competition of networks with other approaches is very exciting."))}h.isMDXComponent=!0},7802:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/N-0b1c235a834f359304c4432a44ad46e7.png"}}]);