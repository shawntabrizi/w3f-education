"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[1004],{3905:function(e,a,t){t.d(a,{Zo:function(){return h},kt:function(){return u}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},h=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?n.createElement(f,r(r({ref:a},h),{},{components:t})):n.createElement(f,r({ref:a},h))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5160:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return h},default:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={id:"parachainblock"},c="Path of a Parachain Block",s={unversionedId:"Polkadot/Module4/parachainblock",id:"Polkadot/Module4/parachainblock",isDocsHomePage:!1,title:"Path of a Parachain Block",description:"Collators watch the progress of the block-producing and consensus protocols, e.g. by participating",source:"@site/docs/Polkadot/Module4/parachainblock.md",sourceDirName:"Polkadot/Module4",slug:"/Polkadot/Module4/parachainblock",permalink:"/docs/Polkadot/Module4/parachainblock",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module4/parachainblock.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1656502743,formattedLastUpdatedAt:"6/29/2022",frontMatter:{id:"parachainblock"},sidebar:"polkadot",previous:{title:"Nodes on Polkadot Network",permalink:"/docs/Polkadot/Module4/nodes"},next:{title:"Decentralization of Network",permalink:"/docs/Polkadot/Module4/decentralization"}},h=[{value:"Parachains in Action",id:"parachains-in-action",children:[]}],d={toc:h};function p(e){var a=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"path-of-a-parachain-block"},"Path of a Parachain Block"),(0,i.kt)("p",null,"Collators watch the progress of the block-producing and consensus protocols, e.g. by participating\nin the relay chain as a full node. Based on what they think is the latest relay chain block that will\nmost likely be \u2000nalised, they build on top of the latest parachain block (or other data) that would be \u2000\nfinalised by it."),(0,i.kt)("p",null,"Collators sign data building on top of said latest parachain block, and submit it possibly\nindirectly, to the validators assigned to their parachain (parachain validators for short),\nfor inclusion in the relay chain. Ideally they submit a unique one, to help performance."),(0,i.kt)("p",null,"The parachain validators decide which parachain block to support, and presents relevant\ndata of it as a parachain's next candidate to be added to the next relay chain block."),(0,i.kt)("p",null,"A block-producing validator collects candidates from all parachains, and puts this collection\nalong with any recent relay chain extrinsics into a relay chain head block.\nFor performance, this does not contain the full data from all parachains, but only metadata\nand partial data, including security-related metadata."),(0,i.kt)("p",null,"In the unfavourable case, this can result in forks, resolved later. This subprotocol\nis designed so that even with forks, participants have an idea of the block most likely to be\nfinalised, similar to Proof-of-Work protocols."),(0,i.kt)("p",null,"A subprotocol is run to ensure that the full data is indeed available, including and distributing\nit to various other relay-chain nodes."),(0,i.kt)("p",null,"Data submitted from a parachain might include indications that they are sending messages\nto another parachain, including metadata to facilitate this. This is now included on the relay\nchain head(s), so recipient parachains are aware of which new messages have been sent to\nthem. They now retrieve the message bodies from the sending parachains."),(0,i.kt)("p",null,"Validators submit their votes on the block and \u2000nalises it, resolving any forks to a single\nhead. These votes are added to the relay chain blocks."),(0,i.kt)("h2",{id:"parachains-in-action"},"Parachains in Action"),(0,i.kt)("p",null,"In outline, a collator produces a parachain block, sends it to the parachain validators, who sign\nits header as valid, and the header with enough signatures is placed on the relay chain. At this\npoint, the parachain block is as canonical as the relay chain block its header appeared in. If this\nrelay chain block is in the best chain according to BABE, so is the parachain\nblock and when this relay chain block is \u2000nalised, so is the parachain block.\nBecause the parachain validators switch parachains frequently, they are stateless clients of\nthe parachain. Thus we distinguish between the parachain block B, which is normally enough\nfor full nodes of the parachain such as collators to update the parachain state, and the Proof of\nValidity(PoV) block BPoV , which a validator who does not have the parachain state can verify.\nAny validator should be able to verify BPoV given the relay chain state using the parachain's\nparachain validation function (PVF), the Web assembly code for which is stored on the\nrelay chain in a similar way to the relay chain's runtime. The STVF takes as an input the PoV\nblock, the header of the last parachain block from this parachain and a small amount of data from\nthe relay chain state.\nThe STVF outputs the validity of the block, the header of this block and its outgoing mes-\nsages. The PoV block contains any outgoing messages and the parachain block B. The parachain\nvalidators should gossip the parachain block to the parachain network, as a back up to the collator\nitself doing so.\nThe PoV block will be the parachain block, its outgoing messages, its header and light client\nproof witnesses. These witnesses are Merkle proofs that give all elements of the input and output\nstate that are used or modi\u2000ed by the state transition from the input and output state roots.\nTo aid in censorship resistance, a parachain may want to use proof of work or proof of stake to\nselect collators, where the selection strategy is up to the given parachain. This can be implemented\nin the STVF and need not be a part of the Polkadot protocol. So for proof of work, the STVF would\ncheck that the hash of the block is su\u2000ciently small. However, for speed, it would be useful to\nensure that most relay chain blocks can include a parachain block. For PoW, this would necessitate\nit being probable that multiple collators are allowed to produce a block. As such we will still need\na tie-breaker for the parachain validators to coordinate on validating the same parachain block\n\u2000rst. This may be the golden ticket scheme of. For proof of stake this may not be necessary."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/AlnjFIfwOH0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);