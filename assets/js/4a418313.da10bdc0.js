"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6175],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"explorenetwork"},c="Exploring Polkadot Network",l={unversionedId:"Polkadot/Module2/explorenetwork",id:"Polkadot/Module2/explorenetwork",isDocsHomePage:!1,title:"Exploring Polkadot Network",description:"Polkadot as a State Machine",source:"@site/docs/Polkadot/Module2/explorenetwork.md",sourceDirName:"Polkadot/Module2",slug:"/Polkadot/Module2/explorenetwork",permalink:"/docs/Polkadot/Module2/explorenetwork",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module2/explorenetwork.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1656502743,formattedLastUpdatedAt:"6/29/2022",frontMatter:{id:"explorenetwork"},sidebar:"polkadot",previous:{title:"DOT Token Utility",permalink:"/docs/Polkadot/Module2/dotutility"},next:{title:"On-Chain Governance",permalink:"/docs/Polkadot/Module2/governance"}},d=[{value:"Polkadot as a State Machine",id:"polkadot-as-a-state-machine",children:[]},{value:"State",id:"state",children:[]},{value:"State Transitions",id:"state-transitions",children:[]},{value:"Extrinsics",id:"extrinsics",children:[]},{value:"Transaction Fees",id:"transaction-fees",children:[]}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exploring-polkadot-network"},"Exploring Polkadot Network"),(0,r.kt)("h2",{id:"polkadot-as-a-state-machine"},"Polkadot as a State Machine"),(0,r.kt)("p",null,"Polkadot is a replicated sharded state machine where shards are the parachains and the\nPolkadot relay chain is part of the protocol ensuring global consensus among all the parachains.\nTherefore, the Polkadot relay chain protocol, can itself be considered as a replicated state machine\non its own. In this sense, this section describes the relay chain protocol by specifying the state\nmachine governing the relay chain. To that end, we describe the relay chain state and the detail\nof state transition governed by transactions grouped in the relay chain blocks."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"The state is represented through the use of an associative array data structure composed\nby a collection of (key; value) pairs where each key is unique. There is no assumption on the\nformat of the key or the value stored under it besides the fact that they both the key and the value\nneed to be \u2000nite byte arrays.\nThe (key; value) pairs which comprise the relay chain state are arranged in a Merkle radix-16\ntree. The root of this tree canonically identi\u2000es the current state of the relay chain. The Merkle\ntree also provides an e\u2000cient mean to produce the proof of inclusion for an individual pair in the\nstate.\nTo keep the state size in control, the relay chain state is solely used to facilitate the relay chain\noperations such as staking and identifying validators. The Merkle Radix tree is not supposed to\nstore any information regarding the internal operation of the parachains."),(0,r.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,r.kt)("p",null,'Like any transaction-based transition system, Polkadot state changes via an\nexecuting ordered set of instructions, known as extrinsics. These extrinsics include transactions\nsubmitted by the public. They cover any data provided from \\outside" of the machine\'s state which\ncan a\u2000ect state transition. Polkadot relay chain is divided into two major components, namely the\n\\Runtime" and the \\Runtime environment". The execution logic of the state-transition function\nis mainly encapsulated in the Runtime while all other generic operations, commonly shared among\nmodern blockchain-based replicated state machines, are embedded into the Runtime environment.\nIn particular, the latter is in charge of network communication, block production and consensus\nengines. Runtime functions are compiled into a WebAssembly module and are stored as part of the\nstate. The Runtime environment communicates the extrinsics to the Runtime and interacts with\nit to execute the state transition. In this way, the state transition logic itself can be upgraded as\na part of the state transition.'),(0,r.kt)("h2",{id:"extrinsics"},"Extrinsics"),(0,r.kt)("p",null,'Extrinsics are the input data supplied to the Polkadot relay-chain state machine to\ntransition to new states. Extrinsics need to be stored into blocks of the relay chain in order to\nachieve consensus among the state machine replica. Extrinsics are divided into two broad categories\nnamely: transactions and "inherents" which represent data that is inherent to a relay chain block.\nThe timestamp t of a block is an example of inherent extrinsics which must be included in each\nPolkadot relay chain block.'),(0,r.kt)("p",null,"Transactions are signed and are gossiped around on the network between nodes. In contrast,\ninherents are not signed and are not gossiped individually but rather only when they are included\nin a block. The inherents in a block are assumed to be valid if a supermajority of validators\nassumes so. Transactions on the relay chain are mainly concerned with the operation of the relay\nchain and Polkadot protocol as a whole, such as set code, transfer, bond, validate, nominate,\nvote."),(0,r.kt)("p",null,"Relay chain block producers listen to all transaction network messages. Upon receiving a\ntransaction message, the transaction(s) are validated by the Runtime. The valid transactions then\nare arranged in a queue based on their priority and dependency and are considered for inclusion\nin future blocks accordingly."),(0,r.kt)("h2",{id:"transaction-fees"},"Transaction Fees"),(0,r.kt)("p",null,"We use the model described above to set the fee level of a transaction based\non three parameters: its type, its on-chain length, and its expected resource usage. This fee\ndifferentiation is used to reflect the different costs that a transaction incurs on the network and\non the state, and to encourage the processing of certain types of transactions over others. A\nfraction of every transaction fee is paid to the block producer, while another fraction goes to\n\u2000nance the Treasury. We highlight that, for a block producer, the rewards coming\nfrom transaction fees may constitute only a small fraction of their overall revenue, just enough to\nincentivise inclusion on the block.\nWe also run an adaptive transaction fee schedule that reacts to the traffic level, and ensures\nthat blocks are typically far from full, so that peaks of activity can be dealt with e\u2000ectively and\nlong inclusion times are rare. In particular, the fee of each transaction is multiplied by a parameter\nthat evolves over time depending on the current network traffic.\nWe make fees evolve slowly enough, so that the fee of any transaction can be predicted accu-\nrately within a frame of an hour. In particular, we do not intend for transaction fees to be the\nmain source of income for stakers."))}u.isMDXComponent=!0}}]);