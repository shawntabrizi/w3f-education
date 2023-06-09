"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5193],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=l(n),p=a,h=d["".concat(u,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(h,o(o({ref:e},c),{},{components:n})):r.createElement(h,o({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9570:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={id:"introrust",sidebar_position:1},o="Introduction to Rust for Blockchain Development",i={unversionedId:"introrust",id:"introrust",isDocsHomePage:!1,title:"Introduction to Rust for Blockchain Development",description:"Developed by the Technical Education team at the Web3 Foundation, this course introduces programming in Rust for Blockchain applications.",source:"@site/docs/introrust.md",sourceDirName:".",slug:"/introrust",permalink:"/docs/introrust",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/introrust.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1685718886,formattedLastUpdatedAt:"6/2/2023",sidebarPosition:1,frontMatter:{id:"introrust",sidebar_position:1},sidebar:"rust",previous:{title:"Course Appendix",permalink:"/docs/Rust/rust-appendix"},next:{title:"Introduction to Rust",permalink:"/docs/Rust/section1/section-intro"}},u=[{value:"Module 1 - Why Learn Rust?",id:"module-1---why-learn-rust",children:[]},{value:"Module 2 - Rust 101 - The Basics",id:"module-2---rust-101---the-basics",children:[]},{value:"Module 3 - Intro to Intermediate Rust: Ownership, Borrowing, & Slices",id:"module-3---intro-to-intermediate-rust-ownership-borrowing--slices",children:[]},{value:"Module 4 - Intro to Intermediate Rust: Enums & Matching Patterns",id:"module-4---intro-to-intermediate-rust-enums--matching-patterns",children:[]},{value:"Module 5 - Intro to Intermediate Rust - Data Structs & Collections",id:"module-5---intro-to-intermediate-rust---data-structs--collections",children:[]},{value:"Module 6 - Intro to Advanced Rust - Traits, Generics, & Lifetimes",id:"module-6---intro-to-advanced-rust---traits-generics--lifetimes",children:[]},{value:"Module 7 - Intro to Advanced Rust - Iterators & Closures",id:"module-7---intro-to-advanced-rust---iterators--closures",children:[]},{value:"Module 8 - Learning Cargo, Rust\u2019s Package Management System & Unit Testing",id:"module-8---learning-cargo-rusts-package-management-system--unit-testing",children:[]}],l={toc:u},c="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-rust-for-blockchain-development"},"Introduction to Rust for Blockchain Development"),(0,a.kt)("p",null,"Developed by the Technical Education team at the Web3 Foundation, this course introduces programming in Rust for Blockchain applications."),(0,a.kt)("p",null,"This course follows the free textbook ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book/"},"The Rust Programming Language")," by Steve Klabnik and Carol Nichols, with the addition of hands-on examples, in-browser executable snippets, and some patterns commonly found in blockchain-based development."),(0,a.kt)("p",null,"This course is designed to teach the fundamentals of Rust to people who know the basics of programming in another language, and are curious about why Rust is used and how to use it."),(0,a.kt)("p",null,"This course provides a strong foundation in general-purpose Rust. Also, it emphasizes some aspects of Rust (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"[no_std]"),", advanced traits, and the use of Rust & Wasm development toolchain) that are particularly useful when developing with the ",(0,a.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," blockchain framework."),(0,a.kt)("h2",{id:"module-1---why-learn-rust"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section1/section-intro"},"Module 1 - Why Learn Rust?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section1/what-is-rust"},"What is Rust?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section1/why-rust"},"Why Rust is the future")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section1/wasm-tldr"},"WASM TLDR & its relation to Rust"))),(0,a.kt)("h2",{id:"module-2---rust-101---the-basics"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section2/section-2-intro"},"Module 2 - Rust 101 - The Basics")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section2/variables-mutability"},"Variables & Mutability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section2/data-types"},"Data Types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section2/heap-vs-stack"},"The Heap vs. The Stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section2/functions-comments"},"Functions & Comments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section2/loops"},"Loops & Logic Flows"))),(0,a.kt)("h2",{id:"module-3---intro-to-intermediate-rust-ownership-borrowing--slices"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section3/section-3-intro"},"Module 3 - Intro to Intermediate Rust: Ownership, Borrowing, & Slices")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section3/ownership"},"Rust\u2019s Ownership Model")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section3/borrowing"},"Rust\u2019s Borrowing Model")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section3/slices"},"Slices in Rust"))),(0,a.kt)("h2",{id:"module-4---intro-to-intermediate-rust-enums--matching-patterns"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section4/section-4-intro"},"Module 4 - Intro to Intermediate Rust: Enums & Matching Patterns")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section4/enums"},"Enums")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section4/panic"},"Panic! in Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section4/error-handling"},"Error handling with Result & Option"))),(0,a.kt)("h2",{id:"module-5---intro-to-intermediate-rust---data-structs--collections"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section5/section-5-intro"},"Module 5 - Intro to Intermediate Rust - Data Structs & Collections")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section5/structs"},"Structs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section5/struct-methods"},"Defining Methods for Structs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section5/collections"},"Vectors, Strings & Hashmaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section5/vectors-vs-strings"},"Vectors vs Strings - what\u2019s the difference?"))),(0,a.kt)("h2",{id:"module-6---intro-to-advanced-rust---traits-generics--lifetimes"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section6/section-6-intro"},"Module 6 - Intro to Advanced Rust - Traits, Generics, & Lifetimes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section6/traits"},"Defining behavior with Traits")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section6/generics"},"Reducing Duplication with Generics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section6/associated-generics"},"Associated Types vs Generics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section6/lifetimes"},"Lifetimes in Rust"))),(0,a.kt)("h2",{id:"module-7---intro-to-advanced-rust---iterators--closures"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section7/section-7-intro"},"Module 7 - Intro to Advanced Rust - Iterators & Closures")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section7/closures"},"Using Closures for Ultimate Code Reuse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section7/iterators"},"Using Iterators with Vectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section7/macros"},"Macros"))),(0,a.kt)("h2",{id:"module-8---learning-cargo-rusts-package-management-system--unit-testing"},(0,a.kt)("a",{parentName:"h2",href:"/docs/Rust/section8/section-8-intro"},"Module 8 - Learning Cargo, Rust\u2019s Package Management System & Unit Testing")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section8/defining-cargo-config"},"Defining & Reading cargo.toml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section8/installing-crate"},"Installing a crate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section8/defining-crate-features"},"Defining features for a crate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Rust/section8/unit-tests"},"Unit Tests in Rust"))))}d.isMDXComponent=!0}}]);