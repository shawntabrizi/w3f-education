"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[961],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2381:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"installation",title:"Installing & Setting up a Rust Developer Environment",sidebar_label:"Installing & Setting up a Rust Developer Environment",description:"Installing Rust, and setting up your development environment."},s=void 0,u={unversionedId:"Rust/setup/installation",id:"Rust/setup/installation",isDocsHomePage:!1,title:"Installing & Setting up a Rust Developer Environment",description:"Installing Rust, and setting up your development environment.",source:"@site/docs/Rust/setup/installation.md",sourceDirName:"Rust/setup",slug:"/Rust/setup/installation",permalink:"/docs/Rust/setup/installation",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/setup/installation.md",version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1682941449,formattedLastUpdatedAt:"5/1/2023",frontMatter:{id:"installation",title:"Installing & Setting up a Rust Developer Environment",sidebar_label:"Installing & Setting up a Rust Developer Environment",description:"Installing Rust, and setting up your development environment."},sidebar:"rust",previous:{title:"WASM TLDR",permalink:"/docs/Rust/section1/wasm-tldr"},next:{title:"Intro to Basic Rust",permalink:"/docs/Rust/section2/section-2-intro"}},p=[{value:"Rustup",id:"rustup",children:[]},{value:"Visual Studio Code",id:"visual-studio-code",children:[{value:"Extensions",id:"extensions",children:[]}]},{value:"The Rust Playground",id:"the-rust-playground",children:[]}],d={toc:p},c="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, you will: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Rust and its dependencies"),(0,i.kt)("li",{parentName:"ul"},"Learn what ",(0,i.kt)("inlineCode",{parentName:"li"},"rustup")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"cargo")," are"),(0,i.kt)("li",{parentName:"ul"},"Get your local machine environment ready for Rust development")),(0,i.kt)("h1",{id:"setting-up-your-environment"},"Setting up Your Environment"),(0,i.kt)("h2",{id:"rustup"},"Rustup"),(0,i.kt)("p",null,"There is a standard tool in the Rust ecosystem called ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup"),". This tool allows you to easily install and manage multiple Rust versions and use different Rust versions on a per-project basis. It is similar to a tool like ",(0,i.kt)("inlineCode",{parentName:"p"},"nvm"),", the node version manager in the Javascript ecosystem. In addition to managing the version of Rust itself, it also installs ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo"),", the Rust build tool, and various language components such as different target architectures, and clippy, the Rust linting tool."),(0,i.kt)("p",null,"To install ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup"),", run this install script below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,i.kt)("p",null,"This is executing a script from the internet, so if you prefer to be careful, check its contents to ensure it isn't doing anything unwanted.\nThis line of code installs several tools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rustup"),", which was covered above,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"cargo")),", the Rust package manager, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rustc"),", the official compiler for the Rust language.")),(0,i.kt)("p",null,"Executing the line of code above will prompt the installation options below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Current installation options:\n\n\n   default host triple: x86_64-apple-darwin\n     default toolchain: stable (default)\n               profile: default\n  modify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n>\n")),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"Option 1")," for the standard install. We will add more components later in the course as needed. When the command completes, you can confirm that rustup is installed by checking its version with ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup --version"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rustup self update\ninfo: checking for self-updates\n  rustup unchanged - 1.25.2\n")),(0,i.kt)("p",null,"We can also check the version of the rust compiler and the cargo build tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rustc --version\nrustc 1.68.0 (a55dd71d5 2022-09-19)\n\n$ cargo --version\ncargo 1.68.0 (387270bc7 2022-09-16)\n\n")),(0,i.kt)("p",null,"This course will use version 1.68, but similar versions will work just as well."),(0,i.kt)("p",null,"You can update your toolchains at any time by running ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup update"),", and you can even update rustup itself by running ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup self update"),"."),(0,i.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"The most commonly-used (and recommended) tool to use for Rust is ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," (also called VS Code) with the ",(0,i.kt)("a",{parentName:"p",href:"https://rust-analyzer.github.io/"},"Rust analyzer"),", which can be installed as a VS Code extension. Throughout the course, VS Code will be the primary editor of choice. Please head to ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")," to install VS Code."),(0,i.kt)("p",null,"There are other acceptable text editors and integrated development environments also available. ",(0,i.kt)("a",{parentName:"p",href:"https://atom.io/packages/ide-rust"},"Atom IDE-Rust")," may also be used."),(0,i.kt)("p",null,"If you prefer an open source ",(0,i.kt)("em",{parentName:"p"},"and")," freely-licensed distribution of VS Code that omits telemetry, ",(0,i.kt)("a",{parentName:"p",href:"https://vscodium.com/"},"VSCodium")," is also viable. See the project's installation site and the reason why you might want to use this over VS Code itself."),(0,i.kt)("h3",{id:"extensions"},"Extensions"),(0,i.kt)("p",null,"Once VS Code is installed, there are a couple of extensions that will smooth the development experience."),(0,i.kt)("p",null,"The first extension we'll add is Rust Analyzer, a powerful static analysis tool for the Rust programming language. This extension provides some basics such as syntax highlighting and goto definition, as well as more powerful features such as code completion and documentation by hovering over code."),(0,i.kt)("p",null,"To install it, enter VS Code's command pallet with ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P"),", and paste:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ext install rust-lang.rust-analyzer\n")),(0,i.kt)("p",null,"The second extension is optional but recommended if you like to do step debugging on your coding projects. It is the Code LLDB extension that provides seamless integration between LLDB, the low-level debugger, and VS Code. To install it, enter the command pallet again (",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P"),") and paste:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ext install vadimcn.vscode-lldb\n")),(0,i.kt)("p",null,"We will not use this extension actively in this course, but it is a great tool to have handy when it comes time to debug your own code."),(0,i.kt)("h2",{id:"the-rust-playground"},"The Rust Playground"),(0,i.kt)("p",null,"The Rust playground is an in-browser implementation of a Rust development environment.  Feel free to use it to run snippets of code if setting up a proper development environment is somehow inaccessible.  Throughout this course, you will notice it embedded within the page as follows: "),(0,i.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Define+entry+point.%0Afn+main%28%29+%7B%0A++++%2F%2F+Writes+to+the+output.+Delete+the+%27%2F%2F%27+before+println+and+see+what+happens%21%0A+++%2F%2F+println%21%28%22Hello+world%21%22%29%3B%0A%7D"}),(0,i.kt)("p",null,"You may also visit it at ",(0,i.kt)("a",{parentName:"p",href:"https://play.rust-lang.org/"},"https://play.rust-lang.org/"),"."))}m.isMDXComponent=!0}}]);