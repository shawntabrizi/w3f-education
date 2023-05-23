"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6346],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var h=a.createContext({}),p=function(t){var e=a.useContext(h),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(h.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,h=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),l=p(n),d=i,f=l["".concat(h,".").concat(d)]||l[d]||u[d]||r;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=l;var s={};for(var h in e)hasOwnProperty.call(e,h)&&(s[h]=e[h]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7770:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return h},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"hash",title:"H for Hash",sidebar_position:8},h=void 0,p={unversionedId:"AtoZ/hash",id:"AtoZ/hash",isDocsHomePage:!1,title:"H for Hash",description:"H for Hash",source:"@site/docs/AtoZ/hash.md",sourceDirName:"AtoZ",slug:"/AtoZ/hash",permalink:"/docs/AtoZ/hash",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/hash.md",version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1676643540,formattedLastUpdatedAt:"2/17/2023",sidebarPosition:8,frontMatter:{id:"hash",title:"H for Hash",sidebar_position:8},sidebar:"atoz",previous:{title:"G for GRANDPA",permalink:"/docs/AtoZ/grandpa"},next:{title:"I for Interoperability",permalink:"/docs/AtoZ/interoperability"}},c=[{value:"Properties of a Cryptographic Hash Function",id:"properties-of-a-cryptographic-hash-function",children:[]},{value:"Hashing vs. Encryption",id:"hashing-vs-encryption",children:[]},{value:"Hashing on Polkadot",id:"hashing-on-polkadot",children:[]}],u={toc:c};function l(t){var e=t.components,s=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"H for Hash",src:n(4146).Z})),(0,r.kt)("p",null,"Hashing, in its simplest explanation, is a way to transform data. Depending on the underlying hashing algorithm, the transformation of that data happens differently. For example, Bitcoin uses the SHA-256 hashing algorithm (Simple Hashing Algorithm 2, 256bits), which returns a 256-bit output, usually represented as an alphanumeric string. Even the slightest change in the input will significantly modify the hashing algorithm\u2019s output. In cryptography, this is known as ",(0,r.kt)("strong",{parentName:"p"},"diffusion"),". For example, here, we will add whitespace to the end of the input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u201cWow, such hash\u201d = 9DD40341177F8ADD02DA4DE95A572D8BCBF8E07D51726FB51162442B13BB53D6\n\n\u201cWow, such hash \u201d = 8973F8EEA2536243DE4E67AEE2181E3D4C6470B1BA64E0C632E5C91EEDC47108\n")),(0,r.kt)("p",null,"No matter the length of the input data, the hashing function will always return the same sized output. It is a deterministic function, so it always produces the same output for the same input. This output is helpful in many ways, such as quickly verifying and validating data sets of any size. "),(0,r.kt)("p",null,"Hashes are a fundamental component of blockchain technology, and we use them in many parts. For example, we can hash transactions and then query them by their hash. We can hash a collection of transactions and create a transaction root hash; we can hash block data which include transactions and metadata about the transactions, then use that output hash as the block's unique ID. In newer generations of blockchains, we hash function calls and their outputs; we even hash new runtime updates."),(0,r.kt)("p",null,"To understand blockchain, it is important to understand cryptographic hash functions. Well-designed cryptographic hash functions will have the following properties:"),(0,r.kt)("h3",{id:"properties-of-a-cryptographic-hash-function"},"Properties of a Cryptographic Hash Function"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deterministic"),": The same input should always have the same output."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quick computation"),": We need to ensure that the calculation of the function is fast."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Preimage resistance(confusion)"),": We need to be sure that the hashing output cannot be reverse-engineered to find out what the original input was."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A slight change in the input changes the output(diffusion)"),": Even the slightest change in the input should alter the output significantly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Collision-resistant"),": We need to be sure that each unique input maps to an individual output. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Second preimage resistance"),": Given a hash function and its output, we should not be able to generate an input (or inputs) that, when hashed, produce the same result."),(0,r.kt)("h3",{id:"hashing-vs-encryption"},"Hashing vs. Encryption"),(0,r.kt)("p",null,"Hashing and encryption are related but different. ",(0,r.kt)("strong",{parentName:"p"},"Hashing")," is a one-way function, meaning that we should not be able to reverse engineer the original input from just the output. ",(0,r.kt)("strong",{parentName:"p"},"Encryption"),", on the other hand, is a two-way function. Data(plaintext) can be hidden(encrypted) by transforming it to ciphertext with the encryption key. The ciphertext can then be transformed into the original plaintext by decrypting the ciphertext with the decryption key. The encryption and decryption key may be the same value or different, depending on the type of cryptosystem used. "),(0,r.kt)("h3",{id:"hashing-on-polkadot"},"Hashing on Polkadot"),(0,r.kt)("p",null,"Polkadot and Kusama use an implementation called ",(0,r.kt)("strong",{parentName:"p"},"BLAKE2b"),", based on the BLAKE2 cryptographic hashing algorithm. BLAKE2 is also faster than SHA-2 and SHA-3, with similar or better security than SHA-3.  We chose BLAKE2 for its security, speed, and simplicity of implementation. The BLAKE2b implementation is optimized for 64-bit platforms and can be twice as performant compared to running the SHA-256 algorithm on a similar machine. Due to these advantages, the project ZCash transitioned to using BLAKE2 hashing from SHA-256, projecting that BLAKE2 is improving over time while SHA-256 is getting worse."),(0,r.kt)("p",null,"Blake2b hashing would look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u201cWow, such hash\u201d = \ne530f3d3ddfc24213167e7c601733a1b688e6cf362277b46f1135e348aa63477\n\n\u201cWow, such hash \u201d = \nf299f5ee1731f755d0f58bdc54ef3b0cadb94f7f959c3b18627e12138ed5c70e\n")))}l.isMDXComponent=!0},4146:function(t,e,n){e.Z=n.p+"assets/images/H-d860facb2e9977525ece3211f5a4343b.png"}}]);