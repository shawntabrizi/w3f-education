"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6207],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1405:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={id:"defining-cargo-config",title:"Reading & Defining `cargo.toml`",sidebar_label:"Understanding Cargo",description:"Understand how to utilize cargo."},o=void 0,l={unversionedId:"Rust/section8/defining-cargo-config",id:"Rust/section8/defining-cargo-config",isDocsHomePage:!1,title:"Reading & Defining `cargo.toml`",description:"Understand how to utilize cargo.",source:"@site/docs/Rust/section8/defining-cargo-config.md",sourceDirName:"Rust/section8",slug:"/Rust/section8/defining-cargo-config",permalink:"/docs/Rust/section8/defining-cargo-config",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section8/defining-cargo-config.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1680715006,formattedLastUpdatedAt:"4/5/2023",frontMatter:{id:"defining-cargo-config",title:"Reading & Defining `cargo.toml`",sidebar_label:"Understanding Cargo",description:"Understand how to utilize cargo."},sidebar:"rust",previous:{title:"Learning Cargo, Rust\u2019s Package Management System & Unit Testing",permalink:"/docs/Rust/section8/section-8-intro"},next:{title:"Installing a crate",permalink:"/docs/Rust/section8/installing-crate"}},c=[{value:"Creating a new project with Cargo",id:"creating-a-new-project-with-cargo",children:[]},{value:"Understanding Cargo.toml",id:"understanding-cargotoml",children:[]},{value:"Building &amp; Running with Cargo",id:"building--running-with-cargo",children:[]}],s={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If Rust is installed on your system, then ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," by default is installed.  ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," is Rust's package management system and can be called from the command line."),(0,a.kt)("h2",{id:"creating-a-new-project-with-cargo"},"Creating a new project with Cargo"),(0,a.kt)("p",null,"Create a new project using ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo new")," command.  You will need to have your command line/terminal open.  For the sake of this course, let's call the project ",(0,a.kt)("inlineCode",{parentName:"p"},"first-cargo"),", which will create a new directory with your Rust project within:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo new first-cargo\ncd first-cargo/\n")),(0,a.kt)("p",null,"Upon running ",(0,a.kt)("inlineCode",{parentName:"p"},"tree")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -R"),", the file structure is revealed to be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main.rs\n\n2 directories, 2 files\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"src/")," is where your project lives and contains the source of your Rust project.  ",(0,a.kt)("inlineCode",{parentName:"p"},"main.rs")," is where you can and will write executable code.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is how your Rust project manages project metadata, dependencies, and build options."))),(0,a.kt)("h2",{id:"understanding-cargotoml"},"Understanding Cargo.toml"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is written in the TOML format, and specifies metadata for your Rust project.  Upon inspecting our project, ",(0,a.kt)("inlineCode",{parentName:"p"},"first-cargo"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," it should look relatively barebones:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "first-cargo"\nversion = "0.1.0"\nedition = "2021"\n\n# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html\n\n[dependencies]\n')),(0,a.kt)("p",null,"Each section is defined by square brackets (",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),") followed by the name within (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"[package]"),").  Keys are determined by the name, followed by an equals sign (",(0,a.kt)("inlineCode",{parentName:"p"},"="),") and the value as text in double quotes (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},'name = "first-cargo"'),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"[package]")," - Specifies the name of the package, version of the binary, and the Rust edition used.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]")," - Specifies a list of local or remote external dependencies."))),(0,a.kt)("h2",{id:"building--running-with-cargo"},"Building & Running with Cargo"),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build")," within any directory with ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," will result in an attempt to build the project.  This merely builds the project and generates a ",(0,a.kt)("inlineCode",{parentName:"p"},"target/")," folder with the compiled binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Compiling first-cargo v0.1.0 (/rust-course/first-cargo)\n Finished dev [unoptimized + debuginfo] target(s) in 1.09s\n")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo run")," will both build the project, as well as run the binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Finished dev [unoptimized + debuginfo] target(s) in 0.03s\n Running `target/debug/first-cargo`\nHello, world!\n")))}p.isMDXComponent=!0}}]);