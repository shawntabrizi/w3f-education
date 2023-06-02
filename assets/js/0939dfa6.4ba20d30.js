"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[9200],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3695:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"macros",title:"Macros in Rust",sidebar_label:"Macros in Rust",description:"Learn what macros are and how to create basic macros in Rust."},l=void 0,c={unversionedId:"Rust/section7/macros",id:"Rust/section7/macros",isDocsHomePage:!1,title:"Macros in Rust",description:"Learn what macros are and how to create basic macros in Rust.",source:"@site/docs/Rust/section7/macros.md",sourceDirName:"Rust/section7",slug:"/Rust/section7/macros",permalink:"/docs/Rust/section7/macros",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section7/macros.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1683582484,formattedLastUpdatedAt:"5/8/2023",frontMatter:{id:"macros",title:"Macros in Rust",sidebar_label:"Macros in Rust",description:"Learn what macros are and how to create basic macros in Rust."},sidebar:"rust",previous:{title:"Closures",permalink:"/docs/Rust/section7/closures"},next:{title:"Learning Cargo, Rust\u2019s Package Management System & Unit Testing",permalink:"/docs/Rust/section8/section-8-intro"}},u=[{value:"Macro Types",id:"macro-types",children:[{value:"Declarative Macros",id:"declarative-macros",children:[]},{value:"Procedural Macros",id:"procedural-macros",children:[]}]},{value:"Writing a Basic Declarative Macro",id:"writing-a-basic-declarative-macro",children:[{value:"Overview",id:"overview",children:[]},{value:"Creating a square!  and factor!  macro",id:"creating-a-square--and-factor--macro",children:[]}]},{value:"Try it yourself!",id:"try-it-yourself",children:[]},{value:"What is happening here?",id:"what-is-happening-here",children:[]}],p={toc:u},m="wrapper";function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Macros in Rust is, in the most basic sense, "code that writes code", also known as ',(0,i.kt)("em",{parentName:"p"},"metaprogramming"),".  By now, you have seen the ",(0,i.kt)("inlineCode",{parentName:"p"},"println!()")," macro many times, and it illustrates how useful macros may be in everyday coding."),(0,i.kt)("p",null,"Another prime example that you have seen is the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"#[derive]")," macro, which can implement traits on types automatically: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Automatically implements this type.\n#[derive(PartialEq)]\nstruct SomeType;\n")),(0,i.kt)("p",null,'Macros are called before the compiler interprets the code, so they can perform these operations (i.e., implementing a trait for you).  This is usually called "expanding," as the macro\'s code expands to actual, usable Rust code the compiler can interpret and use.'),(0,i.kt)("h2",{id:"macro-types"},"Macro Types"),(0,i.kt)("p",null,"There are two primary types of macros:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Declarative or "',(0,i.kt)("inlineCode",{parentName:"li"},"macro_rules!"),'" Macros'),(0,i.kt)("li",{parentName:"ul"},"Procedural Macros - which also have subtypes")),(0,i.kt)("h3",{id:"declarative-macros"},"Declarative Macros"),(0,i.kt)("p",null,"Declarative macros are the most widely used and often easier to write than procedural ones.  They allow programmers to write expressions akin to ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),' statements that "fill in the blank" to make writing Rust more concise.  Put simply; declarative macros operate almost like a template where the parameters provided by the programmer fill in the blanks.'),(0,i.kt)("h3",{id:"procedural-macros"},"Procedural Macros"),(0,i.kt)("p",null,"Procedural macros are more complex, accepting arbitrary code as input and producing code as output.  This code, called a ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenStream"),", represents this input and output.  Procedural macros operate more like a function, accepting a ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenStream")," as a parameter and specifying a return type as a ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenStream"),".  Part of the complexity in creating these macros is that they must be in a separate crate, impacting the Rust project's structure."),(0,i.kt)("p",null,"There are three primary types of procedural macros:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#[derive]")," macros specify code to add to entities such as structs and enums."),(0,i.kt)("li",{parentName:"ul"},"Function-like macros which structurally look and work like functions."),(0,i.kt)("li",{parentName:"ul"},"Attribute-like macros which define custom attributes on a particular entity.")),(0,i.kt)("p",null,"In this course, we won't be reviewing how to write a procedural macro.  For more reading, it is encouraged to read the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch19-06-macros.html"},"Rust Book's examples"),", as well as the ",(0,i.kt)("a",{parentName:"p",href:"https://veykril.github.io/tlborm/"},"The Little Book of Rust Macros")," for more in-depth reading on how macros can be utilized. "),(0,i.kt)("h2",{id:"writing-a-basic-declarative-macro"},"Writing a Basic Declarative Macro"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this example, we will be writing a declarative macro that utilizes ",(0,i.kt)("inlineCode",{parentName:"p"},"macro_rules!"),".  As stated before, a declarative macro similarly works in principle to a match statement, as it declares a set of rules executed in order until the condition is reached.  Once the rule is met, the macro generates the corresponding Rust code."),(0,i.kt)("p",null,"Courtesy of ",(0,i.kt)("a",{parentName:"p",href:"https://veykril.github.io/tlborm/decl-macros/macros-methodical.html"},"The Little Book of Rust Macros"),", the following examples help to solidify this concept."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Each rule looks like the following: \n($matcher) => {$expansion}\n")),(0,i.kt)("p",null,"And in practice: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// This simply returns the expression: "4", aka the result of "1 + 3"\nmacro_rules! four {\n    () => { 1 + 3 };\n}\n\nfn main() {\n   let f = four!(); // 4\n   println!("{f}"); // 4\n}\n')),(0,i.kt)("h3",{id:"creating-a-square--and-factor--macro"},"Creating a square!  and factor!  macro"),(0,i.kt)("p",null,"Macros can also utilize ",(0,i.kt)("a",{parentName:"p",href:"https://veykril.github.io/tlborm/decl-macros/macros-methodical.html#metavariables"},"metavariables")," to capture input and values from outside of the macro.  One more commonly used is the ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," metavariable, which signifies some expression as an input."),(0,i.kt)("p",null,"Using these concepts, let's create a macro that takes a number and squares it: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'macro_rules! square {\n    ($e:expr) => { $e * $e };\n}\n\nfn main() {\n   let f = square!(10); // 100\n   println!("{f}"); // 100\n}\n')),(0,i.kt)("p",null,"Slightly more advanced, let's allow our macro to take a number, find all factors, then return a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec")," of those factors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'macro_rules! square {\n    ($e:expr) => {\n        $e * $e\n    };\n}\n\nmacro_rules! find_factors {\n    ($e:expr) => {{\n        let mut factors = Vec::new();\n        for multipler in 1..=$e {\n            if $e % multipler == 0 {\n                factors.push(multipler);\n            }\n        }\n        factors\n    }};\n}\n\nfn main() {\n    let f = square!(10);\n    let factors = find_factors!(24);\n    println!("{f}");\n    println!("{:?}", factors);\n}\n')),(0,i.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,i.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=macro_rules%21+square+%7B%0A++++%28%24e%3Aexpr%29+%3D%3E+%7B%0A++++++++%24e+*+%24e%0A++++%7D%3B%0A%7D%0A%0Amacro_rules%21+find_factors+%7B%0A++++%28%24e%3Aexpr%29+%3D%3E+%7B%7B%0A++++++++let+mut+factors+%3D+Vec%3A%3Anew%28%29%3B%0A++++++++for+multipler+in+1..%3D%24e+%7B%0A++++++++++++if+%24e+%25+multipler+%3D%3D+0+%7B%0A++++++++++++++++factors.push%28multipler%29%3B%0A++++++++++++%7D%0A++++++++%7D%0A++++++++factors%0A++++%7D%7D%3B%0A%7D%0A%0Afn+main%28%29+%7B%0A++++let+f+%3D+square%21%2810%29%3B%0A++++let+factors+%3D+find_factors%21%2824%29%3B%0A++++println%21%28%22%7Bf%7D%22%29%3B%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+factors%29%3B%0A%7D%0A"}),(0,i.kt)("h2",{id:"what-is-happening-here"},"What is happening here?"),(0,i.kt)("p",null,"Two declarative macros are defined, ",(0,i.kt)("inlineCode",{parentName:"p"},"square!")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"find_factors!"),".  Both take an expression and return a mutated version of the input.  ",(0,i.kt)("inlineCode",{parentName:"p"},"square!")," simply returns a square version of the number, while ",(0,i.kt)("inlineCode",{parentName:"p"},"find_factors!")," does a few novel tasks: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Takes an expression, ",(0,i.kt)("inlineCode",{parentName:"li"},"$e"),"."),(0,i.kt)("li",{parentName:"ul"},"Defines a new inner scope to return."),(0,i.kt)("li",{parentName:"ul"},"Within that scope, creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"Vec")," of factors to return."),(0,i.kt)("li",{parentName:"ul"},"Declares a ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," loop, which iterates from the range of ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," to the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"$e")," (i.e.,. ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"24"),")."),(0,i.kt)("li",{parentName:"ul"},"Finds if it is a factor via modulo and appends it to the array if it is.")))}d.isMDXComponent=!0}}]);