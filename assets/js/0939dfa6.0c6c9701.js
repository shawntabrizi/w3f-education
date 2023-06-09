"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[9200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={id:"macros",title:"Macros in Rust",sidebar_label:"Macros in Rust",description:"Learn what macros are and how to create basic macros in Rust."},i=void 0,s={unversionedId:"Rust/section7/macros",id:"Rust/section7/macros",title:"Macros in Rust",description:"Learn what macros are and how to create basic macros in Rust.",source:"@site/docs/Rust/section7/macros.md",sourceDirName:"Rust/section7",slug:"/Rust/section7/macros",permalink:"/docs/Rust/section7/macros",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section7/macros.md",tags:[],version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1683582484,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"macros",title:"Macros in Rust",sidebar_label:"Macros in Rust",description:"Learn what macros are and how to create basic macros in Rust."},sidebar:"rust",previous:{title:"Closures",permalink:"/docs/Rust/section7/closures"},next:{title:"Learning Cargo, Rust\u2019s Package Management System & Unit Testing",permalink:"/docs/Rust/section8/section-8-intro"}},l={},c=[{value:"Macro Types",id:"macro-types",level:2},{value:"Declarative Macros",id:"declarative-macros",level:3},{value:"Procedural Macros",id:"procedural-macros",level:3},{value:"Writing a Basic Declarative Macro",id:"writing-a-basic-declarative-macro",level:2},{value:"Overview",id:"overview",level:3},{value:"Creating a square!  and factor!  macro",id:"creating-a-square--and-factor--macro",level:3},{value:"Try it yourself!",id:"try-it-yourself",level:2},{value:"What is happening here?",id:"what-is-happening-here",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Macros in Rust is, in the most basic sense, "code that writes code", also known as ',(0,n.kt)("em",{parentName:"p"},"metaprogramming"),".  By now, you have seen the ",(0,n.kt)("inlineCode",{parentName:"p"},"println!()")," macro many times, and it illustrates how useful macros may be in everyday coding."),(0,n.kt)("p",null,"Another prime example that you have seen is the use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"#[derive]")," macro, which can implement traits on types automatically: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// Automatically implements this type.\n#[derive(PartialEq)]\nstruct SomeType;\n")),(0,n.kt)("p",null,'Macros are called before the compiler interprets the code, so they can perform these operations (i.e., implementing a trait for you).  This is usually called "expanding," as the macro\'s code expands to actual, usable Rust code the compiler can interpret and use.'),(0,n.kt)("h2",{id:"macro-types"},"Macro Types"),(0,n.kt)("p",null,"There are two primary types of macros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Declarative or "',(0,n.kt)("inlineCode",{parentName:"li"},"macro_rules!"),'" Macros'),(0,n.kt)("li",{parentName:"ul"},"Procedural Macros - which also have subtypes")),(0,n.kt)("h3",{id:"declarative-macros"},"Declarative Macros"),(0,n.kt)("p",null,"Declarative macros are the most widely used and often easier to write than procedural ones.  They allow programmers to write expressions akin to ",(0,n.kt)("inlineCode",{parentName:"p"},"match"),' statements that "fill in the blank" to make writing Rust more concise.  Put simply; declarative macros operate almost like a template where the parameters provided by the programmer fill in the blanks.'),(0,n.kt)("h3",{id:"procedural-macros"},"Procedural Macros"),(0,n.kt)("p",null,"Procedural macros are more complex, accepting arbitrary code as input and producing code as output.  This code, called a ",(0,n.kt)("inlineCode",{parentName:"p"},"TokenStream"),", represents this input and output.  Procedural macros operate more like a function, accepting a ",(0,n.kt)("inlineCode",{parentName:"p"},"TokenStream")," as a parameter and specifying a return type as a ",(0,n.kt)("inlineCode",{parentName:"p"},"TokenStream"),".  Part of the complexity in creating these macros is that they must be in a separate crate, impacting the Rust project's structure."),(0,n.kt)("p",null,"There are three primary types of procedural macros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"#[derive]")," macros specify code to add to entities such as structs and enums."),(0,n.kt)("li",{parentName:"ul"},"Function-like macros which structurally look and work like functions."),(0,n.kt)("li",{parentName:"ul"},"Attribute-like macros which define custom attributes on a particular entity.")),(0,n.kt)("p",null,"In this course, we won't be reviewing how to write a procedural macro.  For more reading, it is encouraged to read the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch19-06-macros.html"},"Rust Book's examples"),", as well as the ",(0,n.kt)("a",{parentName:"p",href:"https://veykril.github.io/tlborm/"},"The Little Book of Rust Macros")," for more in-depth reading on how macros can be utilized. "),(0,n.kt)("h2",{id:"writing-a-basic-declarative-macro"},"Writing a Basic Declarative Macro"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In this example, we will be writing a declarative macro that utilizes ",(0,n.kt)("inlineCode",{parentName:"p"},"macro_rules!"),".  As stated before, a declarative macro similarly works in principle to a match statement, as it declares a set of rules executed in order until the condition is reached.  Once the rule is met, the macro generates the corresponding Rust code."),(0,n.kt)("p",null,"Courtesy of ",(0,n.kt)("a",{parentName:"p",href:"https://veykril.github.io/tlborm/decl-macros/macros-methodical.html"},"The Little Book of Rust Macros"),", the following examples help to solidify this concept."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"// Each rule looks like the following: \n($matcher) => {$expansion}\n")),(0,n.kt)("p",null,"And in practice: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// This simply returns the expression: "4", aka the result of "1 + 3"\nmacro_rules! four {\n    () => { 1 + 3 };\n}\n\nfn main() {\n   let f = four!(); // 4\n   println!("{f}"); // 4\n}\n')),(0,n.kt)("h3",{id:"creating-a-square--and-factor--macro"},"Creating a square!  and factor!  macro"),(0,n.kt)("p",null,"Macros can also utilize ",(0,n.kt)("a",{parentName:"p",href:"https://veykril.github.io/tlborm/decl-macros/macros-methodical.html#metavariables"},"metavariables")," to capture input and values from outside of the macro.  One more commonly used is the ",(0,n.kt)("inlineCode",{parentName:"p"},"expr")," metavariable, which signifies some expression as an input."),(0,n.kt)("p",null,"Using these concepts, let's create a macro that takes a number and squares it: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'macro_rules! square {\n    ($e:expr) => { $e * $e };\n}\n\nfn main() {\n   let f = square!(10); // 100\n   println!("{f}"); // 100\n}\n')),(0,n.kt)("p",null,"Slightly more advanced, let's allow our macro to take a number, find all factors, then return a new ",(0,n.kt)("inlineCode",{parentName:"p"},"Vec")," of those factors:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'macro_rules! square {\n    ($e:expr) => {\n        $e * $e\n    };\n}\n\nmacro_rules! find_factors {\n    ($e:expr) => {{\n        let mut factors = Vec::new();\n        for multipler in 1..=$e {\n            if $e % multipler == 0 {\n                factors.push(multipler);\n            }\n        }\n        factors\n    }};\n}\n\nfn main() {\n    let f = square!(10);\n    let factors = find_factors!(24);\n    println!("{f}");\n    println!("{:?}", factors);\n}\n')),(0,n.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,n.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=macro_rules%21+square+%7B%0A++++%28%24e%3Aexpr%29+%3D%3E+%7B%0A++++++++%24e+*+%24e%0A++++%7D%3B%0A%7D%0A%0Amacro_rules%21+find_factors+%7B%0A++++%28%24e%3Aexpr%29+%3D%3E+%7B%7B%0A++++++++let+mut+factors+%3D+Vec%3A%3Anew%28%29%3B%0A++++++++for+multipler+in+1..%3D%24e+%7B%0A++++++++++++if+%24e+%25+multipler+%3D%3D+0+%7B%0A++++++++++++++++factors.push%28multipler%29%3B%0A++++++++++++%7D%0A++++++++%7D%0A++++++++factors%0A++++%7D%7D%3B%0A%7D%0A%0Afn+main%28%29+%7B%0A++++let+f+%3D+square%21%2810%29%3B%0A++++let+factors+%3D+find_factors%21%2824%29%3B%0A++++println%21%28%22%7Bf%7D%22%29%3B%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+factors%29%3B%0A%7D%0A"}),(0,n.kt)("h2",{id:"what-is-happening-here"},"What is happening here?"),(0,n.kt)("p",null,"Two declarative macros are defined, ",(0,n.kt)("inlineCode",{parentName:"p"},"square!")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"find_factors!"),".  Both take an expression and return a mutated version of the input.  ",(0,n.kt)("inlineCode",{parentName:"p"},"square!")," simply returns a square version of the number, while ",(0,n.kt)("inlineCode",{parentName:"p"},"find_factors!")," does a few novel tasks: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Takes an expression, ",(0,n.kt)("inlineCode",{parentName:"li"},"$e"),"."),(0,n.kt)("li",{parentName:"ul"},"Defines a new inner scope to return."),(0,n.kt)("li",{parentName:"ul"},"Within that scope, creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"Vec")," of factors to return."),(0,n.kt)("li",{parentName:"ul"},"Declares a ",(0,n.kt)("inlineCode",{parentName:"li"},"for")," loop, which iterates from the range of ",(0,n.kt)("inlineCode",{parentName:"li"},"1")," to the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"$e")," (i.e.,. ",(0,n.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"24"),")."),(0,n.kt)("li",{parentName:"ul"},"Finds if it is a factor via modulo and appends it to the array if it is.")))}m.isMDXComponent=!0}}]);