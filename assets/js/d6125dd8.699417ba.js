"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[5658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"what-is-rust",title:"What is Rust?",sidebar_label:"What is Rust?",description:"An introduction to what the Rust programming language is, and how it compares to other languages."},o=void 0,s={unversionedId:"Rust/section1/what-is-rust",id:"Rust/section1/what-is-rust",title:"What is Rust?",description:"An introduction to what the Rust programming language is, and how it compares to other languages.",source:"@site/docs/Rust/section1/what-is-rust.md",sourceDirName:"Rust/section1",slug:"/Rust/section1/what-is-rust",permalink:"/docs/Rust/section1/what-is-rust",draft:!1,editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section1/what-is-rust.md",tags:[],version:"current",lastUpdatedBy:"filippoweb3",lastUpdatedAt:1681916034,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{id:"what-is-rust",title:"What is Rust?",sidebar_label:"What is Rust?",description:"An introduction to what the Rust programming language is, and how it compares to other languages."},sidebar:"rust",previous:{title:"Introduction to Rust",permalink:"/docs/Rust/section1/section-intro"},next:{title:"Why Learn Rust?",permalink:"/docs/Rust/section1/why-rust"}},l={},u=[{value:"Learning Rust for Substrate",id:"learning-rust-for-substrate",level:2},{value:"Course Format",id:"course-format",level:2},{value:"&quot;Hello World&quot; in Rust",id:"hello-world-in-rust",level:3},{value:"The main function",id:"the-main-function",level:4},{value:"Try it yourself!",id:"try-it-yourself",level:4},{value:"What is happening here?",id:"what-is-happening-here",level:4},{value:"Resources",id:"resources",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rust is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systems_programming"},"systems programming")," language aimed to empower its users with high-level, ergonomic code while also maintaining a level of control akin to a language like the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/C_(programming_language)"},"C programming language"),".  It is meant to empower and give confidence to whoever is writing it and guarantee secure and reliable executable code."),(0,r.kt)("p",null,"It combines the best of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"object-oriented")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_programming"},"functional")," programming concepts into one single language.  Rust is ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Category:Statically_typed_programming_languages"},(0,r.kt)("strong",{parentName:"a"},"statically typed")),", focuses on code and memory safety, and has a powerful memory management system that eliminates the need for a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"},"garbage collector"),"."),(0,r.kt)("h2",{id:"learning-rust-for-substrate"},"Learning Rust for Substrate"),(0,r.kt)("p",null,"In this course, we'll learn to program in the Rust programming language with a specific focus on the aspects of Rust that are used in the Substrate Blockchain framework. We do not assume any existing knowledge of Rust and will start from the beginning. However, we assume some general familiarity with programming and that you are fluent in at least one other programming language. If you are new to programming, starting with Rust is possible, but this course may be too fast-paced for a beginner."),(0,r.kt)("p",null,"Throughout the course, we will emphasize the differences and similarities between Rust and other programming languages you may have encountered. Design patterns used in the Substrate blockchain framework will also be highlighted, as well as general familiarity with coding techniques and patterns you will face when using Substrate. "),(0,r.kt)("p",null,"This course will still be beneficial for someone who wants to learn Rust but has yet to intend to use Substrate."),(0,r.kt)("h2",{id:"course-format"},"Course Format"),(0,r.kt)("p",null,"Each module in this course follows the format below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Background information about a particular topic"),(0,r.kt)("li",{parentName:"ol"},"Relevant code example "),(0,r.kt)("li",{parentName:"ol"},"Interactive portion made possible by the ",(0,r.kt)("a",{parentName:"li",href:"https://play.rust-lang.org/"},"Rust Playground")),(0,r.kt)("li",{parentName:"ol"},'A "What is happening here?" with a line-by-line explanation of what the code is accomplishing')),(0,r.kt)("p",null,"Here is an example of how that might look like:"),(0,r.kt)("h3",{id:"hello-world-in-rust"},'"Hello World" in Rust'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'The classic "Hello, world" program in Rust.')),(0,r.kt)("h4",{id:"the-main-function"},"The main function"),(0,r.kt)("p",null,"In every Rust program comes the ",(0,r.kt)("inlineCode",{parentName:"p"},"fn main()")," function.  This function is the entry point for the program and is where code is executed when compiled and where ",(0,r.kt)("strong",{parentName:"p"},"the execution of the program begins"),".  Every Rust program must have a main function.  It takes no arguments and returns what is called a unit type in Rust: ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.unit.html"},"The unit type"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),", is a placeholder value that is used when no meaningful or real value is applicable. All functions without a return type default to returning a unit type in Rust.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Define entry point.\nfn main() {\n\n}\n")),(0,r.kt)("p",null,"What does the program above do? Well, nothing.  There is no executable code within the curly brackets of the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," function; however, it is still a valid Rust program."),(0,r.kt)("h4",{id:"try-it-yourself"},"Try it yourself!"),(0,r.kt)("p",null,"This course is meant to be hands-on.  Delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," before ",(0,r.kt)("inlineCode",{parentName:"p"},'println!("Hello world!");'),", and click run.  Optionally, you may also change the value within the quotes and experiment. "),(0,r.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F+Define+entry+point.%0Afn+main%28%29+%7B%0A++++%2F%2F+Writes+to+the+output.+Delete+the+%27%2F%2F%27+before+println+and+see+what+happens%21%0A+++%2F%2F+println%21%28%22Hello+world%21%22%29%3B%0A%7D"}),(0,r.kt)("h4",{id:"what-is-happening-here"},"What is happening here?"),(0,r.kt)("p",null,"The code above defines a Rust program with a ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function.  As stated before, this function is required in every Rust program and signals where execution begins.  ",(0,r.kt)("inlineCode",{parentName:"p"},"println!")," is a Rust macro, as denoted by the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," affixed to the end of the statement.  Rust macros will be covered later on; however, for now, know that ",(0,r.kt)("inlineCode",{parentName:"p"},"println!()")," is used to print to the console."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Rust Programming Language")," - ",(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"https://www.rust-lang.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Rust Book")," - ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"https://doc.rust-lang.org/book/"))))}h.isMDXComponent=!0}}]);