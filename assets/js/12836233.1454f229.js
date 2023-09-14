"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"installing-crate",title:"Installing a cargo crate",sidebar_label:"Installing a crate",description:"Understand how to install a crate and use it in a project."},o=void 0,l={unversionedId:"Rust/section8/installing-crate",id:"Rust/section8/installing-crate",title:"Installing a cargo crate",description:"Understand how to install a crate and use it in a project.",source:"@site/docs/Rust/section8/installing-crate.md",sourceDirName:"Rust/section8",slug:"/Rust/section8/installing-crate",permalink:"/docs/Rust/section8/installing-crate",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section8/installing-crate.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694695364,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{id:"installing-crate",title:"Installing a cargo crate",sidebar_label:"Installing a crate",description:"Understand how to install a crate and use it in a project."},sidebar:"rust",previous:{title:"Understanding Cargo",permalink:"/docs/Rust/section8/defining-cargo-config"},next:{title:"Specifying features in crates",permalink:"/docs/Rust/section8/defining-crate-features"}},c={},s=[{value:"Adding a new crate",id:"adding-a-new-crate",level:2},{value:"Using Cargo.toml",id:"using-cargotoml",level:3},{value:"Using the cargo CLI",id:"using-the-cargo-cli",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the previous section of this module, you learned how to create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," project, build, and\nrun it. This section will focus on the ",(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," and how to\nbring in external crates for usage within your project. Crates are other Rust packages with publicly\nexposed types and functionality for usage in ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo")," projects."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gv4nkIpbqDI?si=K2KKwYdulrQ_KPUx",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"adding-a-new-crate"},"Adding a new crate"),(0,a.kt)("p",null,"Two primary methods of declaring an external crate in Rust are directly putting it in ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\nor using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo")," CLI."),(0,a.kt)("h3",{id:"using-cargotoml"},"Using Cargo.toml"),(0,a.kt)("p",null,"We'll be importing the crate called ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/hex"},(0,a.kt)("inlineCode",{parentName:"a"},"hex")),". It is a crate that easily\nencodes and decodes data into hexadecimal representation."),(0,a.kt)("p",null,"Add this dependency as a key and value under ",(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]"),", like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nhex = "0.4"\n\n')),(0,a.kt)("p",null,"The convention is the crate's name, ",(0,a.kt)("inlineCode",{parentName:"p"},"hex"),", followed by the version of the crate, ",(0,a.kt)("inlineCode",{parentName:"p"},"0.4"),". To ensure\neverything is correctly in place without building the whole project, you may run ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo check"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Checking hex v0.4.3\nChecking first-cargo v0.1.0 (/rust-course/first-cargo)\nFinished dev [unoptimized + debuginfo] target(s) in 0.70s\n")),(0,a.kt)("h3",{id:"using-the-cargo-cli"},"Using the cargo CLI"),(0,a.kt)("p",null,"Optionally, you may also use the CLI to automate this by using ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo add hex"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Updating crates.io index\n  Adding hex v0.4.3 to dependencies.\n         Features:\n         + alloc\n         + std\n         - serde\n")),(0,a.kt)("p",null,"This will have the same effect as directly putting it within the TOML file."),(0,a.kt)("p",null,"For more information regarding Cargo and dependencies, visit the official\n",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/index.html"},"Cargo documentation"),"."))}u.isMDXComponent=!0}}]);