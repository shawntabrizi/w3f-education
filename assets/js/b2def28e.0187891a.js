"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[8224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={id:"pallet-config",title:"Adjusting Pallet Config & Runtime Overview",sidebar_label:"Adjusting Pallet Config & Runtime Overview",description:"Learn how a pallet's configuration works and connects with the runtime."},o=void 0,l={unversionedId:"Substrate/section4/pallet-config",id:"Substrate/section4/pallet-config",title:"Adjusting Pallet Config & Runtime Overview",description:"Learn how a pallet's configuration works and connects with the runtime.",source:"@site/docs/Substrate/section4/pallet-config.md",sourceDirName:"Substrate/section4",slug:"/Substrate/section4/pallet-config",permalink:"/docs/Substrate/section4/pallet-config",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section4/pallet-config.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1687398313,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{id:"pallet-config",title:"Adjusting Pallet Config & Runtime Overview",sidebar_label:"Adjusting Pallet Config & Runtime Overview",description:"Learn how a pallet's configuration works and connects with the runtime."},sidebar:"substrate",previous:{title:"Intro to Building a Custom FRAME Pallet",permalink:"/docs/Substrate/section4/"},next:{title:"lib.rs Structure Deepdive",permalink:"/docs/Substrate/section4/project-structure"}},s={},c=[{value:"Adjusting <code>pallet_connect</code>&#39;s Config",id:"adjusting-pallet_connects-config",level:2},{value:"<code>runtime/lib.rs</code> Overview",id:"runtimelibrs-overview",level:2},{value:"<code>impl frame_system::Config for Runtime</code> and <code>struct Runtime</code>",id:"impl-frame_systemconfig-for-runtime-and-struct-runtime",level:3},{value:"Pallet Configurations",id:"pallet-configurations",level:3},{value:"<code>construct_runtime!</code> macro",id:"construct_runtime-macro",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before looking at our pallet (",(0,a.kt)("inlineCode",{parentName:"p"},"pallet_connect"),"), let's tour the node's runtime - ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime/lib.rs")," and change our pallet's configuration."),(0,a.kt)("h2",{id:"adjusting-pallet_connects-config"},"Adjusting ",(0,a.kt)("inlineCode",{parentName:"h2"},"pallet_connect"),"'s Config"),(0,a.kt)("p",null,"Upon looking at the file, it is evident that each pallet must be configured.  ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet_connect")," is no different and requires several configuration parameters pertaining to its functionality: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Configure pallet-connect\nimpl pallet_connect::Config for Runtime {\n    type RuntimeEvent = RuntimeEvent;\n    type WeightInfo = pallet_connect::weights::SubstrateWeight<Runtime>;\n    type Currency = Balances;\n    type MaxBioLength = ConstU32<100>;\n    type MinimumLockableAmount = MinimumLockableAmount;\n    type MaxNameLength = ConstU32<100>;\n    type Randomness = InsecureRandomness;\n}\n")),(0,a.kt)("p",null,"The ones to pay attention to for now are ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxBioLength")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxNameLength"),".  These define bounded data types in the pallet and are configurable via the runtime.  "),(0,a.kt)("p",null,"Go ahead and change ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxBioLength")," to a higher limit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Configure pallet-connect\nimpl pallet_connect::Config for Runtime {\n    ...\n    // Increase from 100 to 200.\n    type MaxBioLength = ConstU32<200>;\n    ...\n}\n")),(0,a.kt)("p",null,"Congratulations, you just changed your first runtime configuration parameter!"),(0,a.kt)("h2",{id:"runtimelibrs-overview"},(0,a.kt)("inlineCode",{parentName:"h2"},"runtime/lib.rs")," Overview"),(0,a.kt)("p",null,"If you navigate to this file, it may seem intimidating at first.  The node's runtime defines all the business logic, or state transition function, for how an extrinsic may change the chain's state.  This runtime is built using FRAME and takes advantage of several macros and conventions used to implement various pallets, as well as the runtime itself."),(0,a.kt)("p",null,"The runtime houses the configuration for not only itself but also the pallets that it utilizes.  "),(0,a.kt)("h3",{id:"impl-frame_systemconfig-for-runtime-and-struct-runtime"},(0,a.kt)("inlineCode",{parentName:"h3"},"impl frame_system::Config for Runtime")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"struct Runtime")),(0,a.kt)("p",null,"This implementation defines several configurable factors for a FRAME-based runtime.  It uses associated types, as discussed previously, to determine common types for blockchain-based primitives.  For example, for this runtime, an ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountId")," is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Some way of identifying an account on the chain.  We intentionally make it equivalent\n/// to the public key of our transaction signing scheme.\npub type AccountId = <<Signature as Verify>::Signer as IdentifyAccount>::AccountId;\n\nimpl frame_system::Config for Runtime {\n    ...\n    /// The identifier used to distinguish between accounts.\n    type AccountId = AccountId;\n    ...\n}\n")),(0,a.kt)("p",null,"Note that the common type is often defined via a type alias at the top of ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime/lib.rs"),"."),(0,a.kt)("h3",{id:"pallet-configurations"},"Pallet Configurations"),(0,a.kt)("p",null,"Following the primary configuration of the overall runtime, it is also necessary to configure each pallet.  This is done by implementing the pallet's ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," trait for the runtime.  For example, the sudo pallet (",(0,a.kt)("inlineCode",{parentName:"p"},"pallet_sudo"),") is a simple configuration where it simply utilizes the runtime's ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Call")," types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl pallet_sudo::Config for Runtime {\n    type RuntimeEvent = RuntimeEvent;\n    type RuntimeCall = RuntimeCall;\n}\n")),(0,a.kt)("h3",{id:"construct_runtime-macro"},(0,a.kt)("inlineCode",{parentName:"h3"},"construct_runtime!")," macro"),(0,a.kt)("p",null,"This macro is what is responsible for registering pallets that were configured.  It is what creates the runtime with the pallets and name given (in this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"construct_runtime!(\n    pub struct Runtime\n    where\n        Block = Block,\n        NodeBlock = opaque::Block,\n        UncheckedExtrinsic = UncheckedExtrinsic,\n    {\n        System: frame_system,\n        InsecureRandomness: pallet_insecure_randomness_collective_flip,\n        Timestamp: pallet_timestamp,\n        Aura: pallet_aura,\n        Grandpa: pallet_grandpa,\n        Balances: pallet_balances,\n        TransactionPayment: pallet_transaction_payment,\n        Sudo: pallet_sudo,\n        // Include the custom logic from the pallet-connect in the runtime.\n        Connect: pallet_connect,\n    }\n);\n")))}m.isMDXComponent=!0}}]);