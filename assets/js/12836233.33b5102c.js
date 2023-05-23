"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[2064],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7048:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"installing-crate",title:"Installing a cargo crate",sidebar_label:"Installing a crate",description:"Understand how to install a crate and use it in a project."},l=void 0,s={unversionedId:"Rust/section8/installing-crate",id:"Rust/section8/installing-crate",isDocsHomePage:!1,title:"Installing a cargo crate",description:"Understand how to install a crate and use it in a project.",source:"@site/docs/Rust/section8/installing-crate.md",sourceDirName:"Rust/section8",slug:"/Rust/section8/installing-crate",permalink:"/docs/Rust/section8/installing-crate",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section8/installing-crate.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1680715006,formattedLastUpdatedAt:"4/5/2023",frontMatter:{id:"installing-crate",title:"Installing a cargo crate",sidebar_label:"Installing a crate",description:"Understand how to install a crate and use it in a project."},sidebar:"rust",previous:{title:"Understanding Cargo",permalink:"/docs/Rust/section8/defining-cargo-config"},next:{title:"Specifying features in crates",permalink:"/docs/Rust/section8/defining-crate-features"}},d=[{value:"Adding a new crate",id:"adding-a-new-crate",children:[{value:"Using Cargo.toml",id:"using-cargotoml",children:[]},{value:"Using the cargo CLI",id:"using-the-cargo-cli",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the previous section of this module, you learned how to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," project, build, and run it.  This section will focus on the ",(0,i.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," and how to bring in external crates for usage within your project.  Crates are other Rust packages with publicly exposed types and functionality for usage in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo")," projects."),(0,i.kt)("h2",{id:"adding-a-new-crate"},"Adding a new crate"),(0,i.kt)("p",null,"Two primary methods of declaring an external crate in Rust are directly putting it in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," or using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," CLI."),(0,i.kt)("h3",{id:"using-cargotoml"},"Using Cargo.toml"),(0,i.kt)("p",null,"We'll be importing the crate called ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/hex"},(0,i.kt)("inlineCode",{parentName:"a"},"hex")),".  It is a crate that easily encodes and decodes data into hexadecimal representation."),(0,i.kt)("p",null,"Add this dependency as a key and value under ",(0,i.kt)("inlineCode",{parentName:"p"},"[dependencies]"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nhex = "0.4"\n\n')),(0,i.kt)("p",null,"The convention is the crate's name, ",(0,i.kt)("inlineCode",{parentName:"p"},"hex"),", followed by the version of the crate, ",(0,i.kt)("inlineCode",{parentName:"p"},"0.4"),".  To ensure everything is correctly in place without building the whole project, you may run ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo check"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Checking hex v0.4.3\nChecking first-cargo v0.1.0 (/rust-course/first-cargo)\nFinished dev [unoptimized + debuginfo] target(s) in 0.70s\n")),(0,i.kt)("h3",{id:"using-the-cargo-cli"},"Using the cargo CLI"),(0,i.kt)("p",null,"Optionally, you may also use the CLI to automate this by using ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo add hex"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Updating crates.io index\n  Adding hex v0.4.3 to dependencies.\n         Features:\n         + alloc\n         + std\n         - serde\n")),(0,i.kt)("p",null,"This will have the same effect as directly putting it within the TOML file."),(0,i.kt)("p",null,"For more information regarding Cargo and dependencies, visit the official ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/index.html"},"Cargo documentation"),"."))}p.isMDXComponent=!0}}]);