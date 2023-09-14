"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[7819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"capstone-project",title:"Course Capstone Project",sidebar_label:"Course Capstone Project",description:"Learn the specification of what exactly you will build in this course."},o=void 0,l={unversionedId:"Substrate/section1/capstone-project",id:"Substrate/section1/capstone-project",title:"Course Capstone Project",description:"Learn the specification of what exactly you will build in this course.",source:"@site/docs/Substrate/section1/capstone.md",sourceDirName:"Substrate/section1",slug:"/Substrate/section1/capstone-project",permalink:"/docs/Substrate/section1/capstone-project",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/section1/capstone.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1694453719,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"capstone-project",title:"Course Capstone Project",sidebar_label:"Course Capstone Project",description:"Learn the specification of what exactly you will build in this course."},sidebar:"substrate",previous:{title:"Substrate\u2019s Design Choices",permalink:"/docs/Substrate/section1/substrate-design"},next:{title:"Substrate 101 - Overview of the Substrate Framework",permalink:"/docs/Substrate/section2/"}},s={},u=[{value:"Required Functionality - What You Will Build",id:"required-functionality---what-you-will-build",level:2},{value:"Project Components",id:"project-components",level:2},{value:"Student Objectives",id:"student-objectives",level:2},{value:"Substrate Topics Covered",id:"substrate-topics-covered",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this capstone project is to bring something both engaging and informative to the\nstudent. You, the student, should be able to build a Substrate pallet in the Substrate Node\nTemplate, run it, and modify and view its state in real time."),(0,r.kt)("p",null,"An honorable mention and inspiration behind this project is\n",(0,r.kt)("a",{parentName:"p",href:"https://www.shawntabrizi.com/substrate-collectables-workshop/"},"Substrate Kitties")," by Shawn Tabrizi."),(0,r.kt)("h2",{id:"required-functionality---what-you-will-build"},"Required Functionality - What You Will Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an essential foundation for a Sybil-resistant social network with only profiles. The user\nmust meet a set of prerequisites (balance) to join."),(0,r.kt)("li",{parentName:"ul"},"Teach how to count for Sybil attacks using other pallets."),(0,r.kt)("li",{parentName:"ul"},"Generating random profile pictures in the runtime."),(0,r.kt)("li",{parentName:"ul"},"Storing and managing user metadata and unique usernames. All handles are unique - no two usernames\ncan be the same."),(0,r.kt)("li",{parentName:"ul"},"Learn only bound-constrained metadata for an account. Allow for a person to assign information\nabout themselves, but limit how much information")),(0,r.kt)("h2",{id:"project-components"},"Project Components"),(0,r.kt)("p",null,"The following will be created as a result of this project:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A runtime pallet, which the student can publish and modify as they will."),(0,r.kt)("li",{parentName:"ol"},"An instance of the node template with this pallet integrated."),(0,r.kt)("li",{parentName:"ol"},"A simple front end to display all profiles on a network. (optional)")),(0,r.kt)("h2",{id:"student-objectives"},"Student Objectives"),(0,r.kt)("p",null,"Note: the project should compile even without these!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fill in a new event"),(0,r.kt)("li",{parentName:"ul"},"Fill in a new dispatchable function",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Interact with a storage map; both get a value, then set a new one."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"ensure")))),(0,r.kt)("li",{parentName:"ul"},"Fill in a new error"),(0,r.kt)("li",{parentName:"ul"},"Write a simple unit test to cover the new event"),(0,r.kt)("li",{parentName:"ul"},"Show but not implement the use of Balances pallet")),(0,r.kt)("h2",{id:"substrate-topics-covered"},"Substrate Topics Covered"),(0,r.kt)("p",null,"The following Substrate topics and nuances will be covered as a result of this project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating a FRAME pallet, adding it to the runtime, and configuring it for the runtime."),(0,r.kt)("li",{parentName:"ul"},"Learning how different pallet macros operate and work (dispatch, errors, events, storage)."),(0,r.kt)("li",{parentName:"ul"},"Using the dev_mode macro to mitigate fees, but the concept of weight in Substrate will be\ndiscussed."),(0,r.kt)("li",{parentName:"ul"},"Going over the Rust language for each pallet concept."),(0,r.kt)("li",{parentName:"ul"},"Creating any storage mappings or associations for storing data in the chain"),(0,r.kt)("li",{parentName:"ul"},"Learn how to utilize ",(0,r.kt)("inlineCode",{parentName:"li"},"BoundedVec")," and the importance of bounded data in general in blockchain\ndevelopment."),(0,r.kt)("li",{parentName:"ul"},"Learning safe math via the Like or Dislike mechanism to prevent integer overflows. Explain the\nimportance of safe math in the runtime."),(0,r.kt)("li",{parentName:"ul"},"Creating events for each action taken by a user"),(0,r.kt)("li",{parentName:"ul"},"Learning the importance of error handling and not panicking within a FRAME pallet"),(0,r.kt)("li",{parentName:"ul"},"Interact with ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet_balance")," through its associated trait, ",(0,r.kt)("inlineCode",{parentName:"li"},"Currency"),", to check the balance and\nlock it if needed. Explain the use of ",(0,r.kt)("inlineCode",{parentName:"li"},"BalanceOf<T>")," and how it works regarding Rust."),(0,r.kt)("li",{parentName:"ul"},"Loose vs. tight coupling, with loose coupling being used and prioritized."),(0,r.kt)("li",{parentName:"ul"},"Think through a realistic, real-world scenario of theory to a pallet.")))}d.isMDXComponent=!0}}]);