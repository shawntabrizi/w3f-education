"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[9125],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return b}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=i,y=u["".concat(c,".").concat(b)]||u[b]||h[b]||o;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},123:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={id:"scalability"},c="Scalability",s={unversionedId:"Polkadot/Module5/scalability",id:"Polkadot/Module5/scalability",isDocsHomePage:!1,title:"Scalability",description:"Validity and Availability",source:"@site/docs/Polkadot/Module5/scalability.md",sourceDirName:"Polkadot/Module5",slug:"/Polkadot/Module5/scalability",permalink:"/docs/Polkadot/Module5/scalability",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module5/scalability.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"scalability"},sidebar:"polkadot",previous:{title:"Parachains",permalink:"/docs/Polkadot/Module5/parachains"},next:{title:"Polkadot Architecture Improvements",permalink:"/docs/Polkadot/Module5/architectureimprovements"}},d=[{value:"Validity and Availability",id:"validity-and-availability",children:[]}],h={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scalability"},"Scalability"),(0,o.kt)("h2",{id:"validity-and-availability"},"Validity and Availability"),(0,o.kt)("p",null,"Once a parachain block is created it is important that the parachain blob consisting of the PoV\nblock and set of outgoing messages from the parachain is available for a while. The naive solution\nfor this would be broadcasting/gossip the parachain blobs to all relay chain nodes, which is not\na feasible option because there are many parachains and the PoV blocks may be big. We want\nto \u2000nd an e\u2000cient solution to ensure PoV blocks from any recently created parachain blocks are\navailable."),(0,o.kt)("p",null,"For a single chain, such as Bitcoin, as long as 51% of hash power is honest, not making block data\navailable ensures that no honest miner builds on it so it will not be in the \u2000nal chain. However,\nparachain consensus in Polkadot is determined by relay chain consensus. A parachain block is\ncanonical when its header is in the relay chain. We have no guarantees that anyone other than the\ncollator and parachain validators have seen the PoV block. If these collude then the rest of the\nparachain network need not have the parachain block and then most collators cannot build a new\nblock and this block's invalidity may not be discovered. We would like the consensus participants,\nhere the validators, to collectively guarantee the availability rather than relying on a few nodes.\nTo this end we designed an availability scheme that uses erasure coding  to\ndistribute the PoV block to all validators. When any misbehaviour, particularly in relation to\ninvalidity, is detected, the blob can be reconstructed from the distributed erasure coded pieces.\nIf a block is available then full nodes of the parachain, and any light client that has the PoV\nblock, can check its validity. We have three-level of validity checks in Polkadot. The \u2000rst validity\ncheck of a PoV block is executed by the corresponding parachain validators. If they verify the\nPoV block then they sign and distribute the erasure codes of the blob, including the PoV block, to\neach validator. We rely on nodes acting as \u2000shermen to report the invalidity of a blob as a second\nlevel of validity checking. They would need to back any claim with their own stake in DOTs. We\nwould assume that most collators will be \u2000shermen, as they have a stake in continued validity of\nthe chain and are already running full nodes, so all they need is stake in DOTs. The third level of\nvalidity checking is executed by a few randomly and privately assigned validators. We determine\nthe number of validators in the third level of validity checking considering the amount of invalidity\nreports given by \u2000shermen and unavailability reports given by collators. If an invalid parachain\nblock is detected, the validators who signed for its validity are slashed. We wait for enough of\nthese randomly assigned checkers to check the block before voting on it in GRANDPA. We also\nwant to ensure that the block is available before selecting the randomly assigned validators. This\nmeans that the parachain validators have to commit running a high risk of being slashed for a small\nprobability of getting an invalid block \u2000nalised. This means that the expected cost of getting an\ninvalid block into Polkadot is higher than the amount of stake backing a single parachain.\nThe security of our availability and validity scheme is based on the security of the GRANDPA\n\u2000nality gadget and the quality of randomness generated in each BABE epoch."))}u.isMDXComponent=!0}}]);