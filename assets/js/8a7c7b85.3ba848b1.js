"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[4937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,h=p["".concat(c,".").concat(y)]||p[y]||d[y]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},977:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={id:"cryptography"},c="Cryptography",l={unversionedId:"Polkadot/Module4/cryptography",id:"Polkadot/Module4/cryptography",isDocsHomePage:!1,title:"Cryptography",description:"We assume that malicious parties generate their keys with an arbitrary algorithm while",source:"@site/docs/Polkadot/Module4/cryptography.md",sourceDirName:"Polkadot/Module4",slug:"/Polkadot/Module4/cryptography",permalink:"/docs/Polkadot/Module4/cryptography",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Polkadot/Module4/cryptography.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1654881714,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"cryptography"},sidebar:"polkadot",previous:{title:"Security and Consensus Improvements",permalink:"/docs/Polkadot/Module3/securityimprovements"},next:{title:"Networking",permalink:"/docs/Polkadot/Module4/networking"}},u=[{value:"Account Keys",id:"account-keys",children:[]},{value:"Session Keys",id:"session-keys",children:[]}],p={toc:u},d="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cryptography"},"Cryptography"),(0,s.kt)("p",null,"We assume that malicious parties generate their keys with an arbitrary algorithm while\nhonest ones always generate their keys securely."),(0,s.kt)("p",null,"In Polkadot, we necessarily distinguish among di\u2000erent permissions and functionalities with dif-\nferent keys and key types, respectively. We roughly categorise these into account keys with which\nusers interact and session keys that nodes manage without operator intervention beyond a certificcation process."),(0,s.kt)("h2",{id:"account-keys"},"Account Keys"),(0,s.kt)("p",null,"Account keys have an associated balance of which portions can be locked to play roles in staking,\nresource rental, and governance, including waiting out a couple types of unlocking period. We\nallow several locks of varying duration, both because these roles impose di\u2000erent restrictions, and\nfor multiple unlocking periods running concurrently.\nWe encourage active participation in all these roles, but they all require occasional signatures\nfrom accounts. At the same time, account keys have better physical security when kept in incon-\nvenient locations, like safety deposit boxes, which makes signing arduous. We avoid this friction\nfor users as follows.\nAccounts that lock funds for staking are called stash accounts. All stash accounts register a\ncerti\u2000cate on-chain that delegates all validator operation and nomination powers to some controller\naccount, and also designates some proxy key for governance votes. In this state, the controller and\nproxy accounts can sign for the stash account in staking and governance functions respectively,\nbut not transfer funds.\nAt present, we support both ed25519 and Schnorrkel/sr25519 for account keys. These\nare both Schnorr-like signatures implemented using the Ed25519 curve, so both o\u2000er extremely\nsimilar security. We recommend ed25519 keys for users who require Hardware Security Module\n(HSM) support or other external key management solution, while Schnorrkel/sr25519 provides\nmore blockchain-friendly functionality like Hierarchical Deterministic Key Derivation (HDKD)\nand multi-signatures.\nIn particular, Schnorrkel/sr25519 uses the Ristretto implementation of Mike Hamburg's\nDecaf, which provide the 2-torsion free points of the Ed25519 curve as a prime order\ngroup. Avoiding the cofactor like this means Ristretto makes implementing more complex pro-\ntocols signi\u2000cantly safer. We employ Blake2b for most conventional hashing in Polkadot, but\nSchnorrkel/sr25519 itself uses STROBE128, which is based on Keccak-f(1600) and provides a\nhashing interface well suited to signatures and non-interactive zero-knowledge proofs (NIZKs)."),(0,s.kt)("h2",{id:"session-keys"},"Session Keys"),(0,s.kt)("p",null,"Session keys each fill roughly one particular role in consensus or security. As a rule, session keys gain\nauthority only from a session certi\u2000cate, signed by some controller key, that delegates appropriate\nstake.\nAt any time, the controller key can pause or revoke this session certi\u2000cate and/or issue re-\nplacement with new session keys. All new session keys can be registered in advance, and most\nmust be, so validators can cleanly transition to new hardware by issuing session certi\u2000cates that\nonly become valid after some future session. We suggest using pause mechanism for emergency\nmaintenance and using revocation if a session key might be compromised.\nWe prefer if session keys remain tied to one physical machine because doing so minimises the\nrisk of accidental equivocation. We ask validator operators to issue session certi\u2000cates using an\nRPC protocol, not to handle the session secret keys themselves.\nAlmost all early proof-of-stake networks have a negligent public key infrastructure that en-\ncourages duplicating session secret keys across machines, and thus reduces security and leads to\npointless slashing.\nWe impose no prior restrictions on the cryptography employed by specific components or their\nassociated session keys types"))}y.isMDXComponent=!0}}]);