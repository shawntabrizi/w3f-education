"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[7024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"create-storage-map",title:"Creating storage maps",sidebar_label:"Creating storage maps",description:"Define and create storage maps for our pallet."},o=void 0,s={unversionedId:"Substrate/section4/create-storage-map",id:"Substrate/section4/create-storage-map",title:"Creating storage maps",description:"Define and create storage maps for our pallet.",source:"@site/docs/Substrate/section4/create-storage-map.md",sourceDirName:"Substrate/section4",slug:"/Substrate/section4/create-storage-map",permalink:"/docs/Substrate/section4/create-storage-map",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section4/create-storage-map.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1688485181,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"create-storage-map",title:"Creating storage maps",sidebar_label:"Creating storage maps",description:"Define and create storage maps for our pallet."},sidebar:"substrate",previous:{title:"lib.rs Structure Deepdive",permalink:"/docs/Substrate/section4/project-structure"},next:{title:"Events & Errors",permalink:"/docs/Substrate/section4/events-errors"}},l={},p=[{value:"Defining a Storage Item",id:"defining-a-storage-item",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For this section, you should be in: ",(0,a.kt)("inlineCode",{parentName:"p"},"pallets/connect/lib.rs")," to follow along.")),(0,a.kt)("p",null,"This section will focus on adding a new FRAME storage item to ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet_connect"),".  With our events and errors defined, we have two items left on our action list:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implement events and errors"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Implement storage items")),(0,a.kt)("li",{parentName:"ol"},"Implement dispatchable functions (extrinsics)")),(0,a.kt)("h2",{id:"defining-a-storage-item"},"Defining a Storage Item"),(0,a.kt)("p",null,"While we have errors to define ",(0,a.kt)("strong",{parentName:"p"},"user")," as out of bounds and events that emit when someone successfully registers, there is currently no place to store the data about the user in underlying storage."),(0,a.kt)("p",null,"There are several types of storage items in FRAME.  We will use a ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageMap"),", which works similarly to a ",(0,a.kt)("inlineCode",{parentName:"p"},"HashMap")," in principle.  Navigate to the struct called ",(0,a.kt)("inlineCode",{parentName:"p"},"UserMetadata"),", and right under it, add this type alias:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Registered users mapped by address\n    #[pallet::storage]\n    #[pallet::getter(fn registered_users)]\n    pub type RegisteredUsers<T: Config> =\n        StorageMap<_, Blake2_128Concat, T::AccountId, UserMetadata<T>, OptionQuery>;\n")),(0,a.kt)("p",null,"This storage item maps the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountId")," from Config (hence ",(0,a.kt)("inlineCode",{parentName:"p"},"T::AccountId"),") to the struct ",(0,a.kt)("inlineCode",{parentName:"p"},"UserMetadata"),".  The ",(0,a.kt)("inlineCode",{parentName:"p"},"#[pallet::storage]")," defines and expands this type alias for us."),(0,a.kt)("p",null,"A few notes about this storage item:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Blake2_128Concat")," refers to how the keys are hashed, referring to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Blake2_128")," hashing algorithm.  This is a ",(0,a.kt)("strong",{parentName:"li"},"secure")," hashing algorithm."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T::AccountId")," is the key to access the value, ",(0,a.kt)("inlineCode",{parentName:"li"},"UserMetadata<T>"),"."),(0,a.kt)("li",{parentName:"ul"},"The generic ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"Config")," trait.  This gives it access to overarching types, such as core primitives (i.e., ",(0,a.kt)("inlineCode",{parentName:"li"},"AccountId"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OptionQuery")," refers to how to handle when the value is retrieved.  ",(0,a.kt)("inlineCode",{parentName:"li"},"OptionQuery")," works by returning an ",(0,a.kt)("inlineCode",{parentName:"li"},"Option<T>"),", meaning a user can either be ",(0,a.kt)("inlineCode",{parentName:"li"},"Some(UserMetadata)")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"None"),".")))}d.isMDXComponent=!0}}]);