"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={id:"unit-tests",title:"Basic Unit Testing in Rust",sidebar_label:"Unit Testing",description:"Understand how to unit test your Rust code."},a=void 0,o={unversionedId:"Rust/section8/unit-tests",id:"Rust/section8/unit-tests",isDocsHomePage:!1,title:"Basic Unit Testing in Rust",description:"Understand how to unit test your Rust code.",source:"@site/docs/Rust/section8/unit-tests.md",sourceDirName:"Rust/section8",slug:"/Rust/section8/unit-tests",permalink:"/docs/Rust/section8/unit-tests",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section8/unit-tests.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1680715006,formattedLastUpdatedAt:"4/5/2023",frontMatter:{id:"unit-tests",title:"Basic Unit Testing in Rust",sidebar_label:"Unit Testing",description:"Understand how to unit test your Rust code."},sidebar:"rust",previous:{title:"Specifying features in crates",permalink:"/docs/Rust/section8/defining-crate-features"}},u=[{value:"Putting tests below the main function",id:"putting-tests-below-the-main-function",children:[{value:"Additional Testing Macros",id:"additional-testing-macros",children:[]}]},{value:"Writing &amp; running a test",id:"writing--running-a-test",children:[]}],l={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"With a basic understanding of how dependencies work in Rust, you may learn how to write and structure a basic testing structure for your Cargo project."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Unit tests")," allow you to ",(0,s.kt)("em",{parentName:"p"},"test")," your code for bugs using a set of predefined functions."),(0,s.kt)("p",null,"Be sure to open your project, ",(0,s.kt)("inlineCode",{parentName:"p"},"first-cargo"),", as that is the repo we will be testing."),(0,s.kt)("h2",{id:"putting-tests-below-the-main-function"},"Putting tests below the main function"),(0,s.kt)("p",null,"Tests are defined using the ",(0,s.kt)("inlineCode",{parentName:"p"},"#[test]")," macro and are usually either in their separate directory on the same level as ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," or, in some cases, included in the project file."),(0,s.kt)("p",null,"Defining tests involves defining a separate module using the ",(0,s.kt)("inlineCode",{parentName:"p"},"mod")," keyword and a special macro to indicate testing is taking place below the ",(0,s.kt)("inlineCode",{parentName:"p"},"main()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    // Testing functions go here...\n}\n")),(0,s.kt)("p",null,"Once this is defined, you may create functions representing unit tests within:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    #[test]\n    fn it_works() {\n        let result = 2 + 2;\n        assert_eq!(result, 4);\n    }\n}\n")),(0,s.kt)("p",null,"Looking further at this function, ",(0,s.kt)("inlineCode",{parentName:"p"},"fn it_works()"),", notice the ",(0,s.kt)("inlineCode",{parentName:"p"},"#[test]")," macro, which denotes that this function is a unit test."),(0,s.kt)("h3",{id:"additional-testing-macros"},"Additional Testing Macros"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"assert!()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"assert_ne!()")," and other macros are used within tests to make an ",(0,s.kt)("strong",{parentName:"p"},"assertion")," about a particular value."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!(value1, value2)")," - tests the equality of two values.  The test passes if they are equal.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"assert!(value)")," - tests whether a value is true (or not). The test passes if the value within is true.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"assert_ne!(value1, value2)")," - tests whether two values are ",(0,s.kt)("strong",{parentName:"p"},"not")," equal,  the tests passes if two values are ",(0,s.kt)("strong",{parentName:"p"},"not")," equal."))),(0,s.kt)("h2",{id:"writing--running-a-test"},"Writing & running a test"),(0,s.kt)("p",null,"The above test would work but is a bit ",(0,s.kt)("em",{parentName:"p"},"bland"),".  Let's import some external functions and run tests using ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),".  Similar to ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo run"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," is a command that only runs the functions specified as unit tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// The function we want to test\nfn square(x: i32) -> i32 {\n   x * x\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n    #[test]\n    fn does_square_work() {\n        let squared = square(4);\n        assert_eq!(squared, 16);\n    }\n}\n")),(0,s.kt)("p",null,"Upon running ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),", we can successfully see the test pass:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"running 1 test\ntest tests::does_square_work ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,s.kt)("p",null,"For more information regarding testing, it is highly encouraged to review the ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch11-01-writing-tests.html"},"Rust Book's")," section on it."))}c.isMDXComponent=!0}}]);