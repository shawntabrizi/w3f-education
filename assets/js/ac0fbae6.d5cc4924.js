"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[682],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9295:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"module2",sidebar_position:1},s="2. Intro to Basic Rust",u={unversionedId:"Rust/section2/module2",id:"Rust/section2/module2",isDocsHomePage:!1,title:"2. Intro to Basic Rust",description:"Variable Scope. Memory management. How variables interact. References. Background on Programming Safety and why it is critical for Blockchain development. Substrate introduction.",source:"@site/docs/Rust/section2/module2.md",sourceDirName:"Rust/section2",slug:"/Rust/section2/module2",permalink:"/docs/Rust/section2/module2",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section2/module2.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1678293818,formattedLastUpdatedAt:"3/8/2023",sidebarPosition:1,frontMatter:{id:"module2",sidebar_position:1}},p=[{value:"Rust Operators",id:"rust-operators",children:[]}],m={toc:p},c="wrapper";function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-intro-to-basic-rust"},"2. Intro to Basic Rust"),(0,i.kt)("p",null,"Variable Scope. Memory management. How variables interact. References. Background on Programming Safety and why it is critical for Blockchain development. Substrate introduction."),(0,i.kt)("h1",{id:"variables-and-data-types"},"Variables and Data Types"),(0,i.kt)("p",null,"Like other programming languages, Rust has variables which allow binding names to data. The syntax for declaring a variable is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let x = 5;\n")),(0,i.kt)("p",null,"The keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," creates a new variable and the assignment operator, ",(0,i.kt)("inlineCode",{parentName:"p"},"="),", stores a value in the variable."),(0,i.kt)("p",null,"Rust is a statically typed language like Java, Haskell, or Typescript, unlike Python, Javascript, or Ruby. This means that every expression in a Rust program has a data type, and that type is known at the time the program is compiled. Statically typed languages prevent many common classes of programming errors such as comparing two values that can't be compared. When you create a variable as we did in the above expression, the Rust compiler infers the data type. In this case it inferred the type ",(0,i.kt)("inlineCode",{parentName:"p"},"i32")," which means a signed 32-bit integer. When integers appear in Rust code without any more type information, ",(0,i.kt)("inlineCode",{parentName:"p"},"i32")," is the default type. But there are many other numerical data types in Rust, and we can use them by adding type annotations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let x: u32 = 5;\n")),(0,i.kt)("p",null,"By adding a type annotation, ",(0,i.kt)("inlineCode",{parentName:"p"},":u32"),", we are telling the compiler that we want this variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", to be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),", an unsigned 32-bit integer. Another way to express this line of code is by using a more specific integer literal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let x = 5u32;\n")),(0,i.kt)("p",null,"Here we have assigned the value ",(0,i.kt)("inlineCode",{parentName:"p"},"5u32"),". This is the preferred way to unambiguously express the value five as the ",(0,i.kt)("inlineCode",{parentName:"p"},"u32")," type. Since we have assigned a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),", the compiler is able to infer that the variable should also be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),"."),(0,i.kt)("h1",{id:"mutability"},"Mutability"),(0,i.kt)("p",null,"By default, variables are immutable in Rust, which means that the value assigned to the variable can't be changed later on in the program."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let x = 5u32;\nx = 6u32;\n")),(0,i.kt)("p",null,"Here we have tried to change the value of an immutable variable. The compiler will complain about this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TODO error\n")),(0,i.kt)("p",null,"Different languages have different approaches to mutability. In functional languages like Haskell or OCaml, it is common for all variables to be immutable. Other languages like Python or Java have some variable immutable and others mutable and you have to remember which is which on a per-type basis."),(0,i.kt)("p",null,"Rust allows both mutable and immutable variables, and requires that the programmer specify explicitly when a variable is mutable. This allows maximum flexibility without the overhead of having to remember details about each and every type. To make a variable mutable, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mut")," keyword."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let mut x = 5u32;\nx = 6u32;\nprintln!("{}", x);\n')),(0,i.kt)("p",null,"When writing your own programs, you should only make variables mutable when you specifically expect them to change value. This way the Rust compiler can help you detect potential errors in your program if you try to change a variable that was never expected to change."),(0,i.kt)("h1",{id:"shadowing-and-scope"},"Shadowing and Scope"),(0,i.kt)("p",null,"On concept that is often confused with mutability is shadowing. In fact shadowing is a completely different concept, and we'll dive into it now."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let x = 5u32;\nlet x = 6u32;\n")),(0,i.kt)("p",null,"If we compile this program, the compiler allows it without complaining. But why? ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is declared as immutable, and we saw earlier that the compiler should not let us change an immutable variable. If you don't see it already, I encourage you to pause the video, and look back to see how this code differs from our previous example where the compiler did complain about changing an immutable variable."),(0,i.kt)("p",null,"The difference is that we have used the ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," keyword a second time. This declares an entirely separate variable, that just happens to have the same name as the original variable. When a second variable with the same name is created, it is said to shadow the first one."),(0,i.kt)("p",null,"Consider whether this program will compile successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let mut x = 5u32;\nlet x = 6u32;\nx = 7u32;\n")),(0,i.kt)("p",null,"The answer is that this program does not compile. The original variable ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is mutable, but that variable is shadowed by the second variable which is also named ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". When we finally try to mutate ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", is is the second, immutable variable that is still in scope, and thus it can't be changed."),(0,i.kt)("p",null,"It is uncommon to use shadowing in the trivial way I've demonstrated here and in fact it is not a good practice in real-world programs because it leads to confusing scenarios like the ones we just seen. I've done it here only because it illustrates shadowing well for ",(0,i.kt)("em",{parentName:"p"},"learning"),". "),(0,i.kt)("p",null,"But shadowing is common in real programs, just in a slightly more complex scenario. Consider this code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let x = 5u32;\n\n{\n    let x = 6u32;\n    println!("x is {}", x);\n}\n\nprintln!("x is {}", x);\n')),(0,i.kt)("p",null,"Take a moment to predict the output of this program."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x is 6\nx is 5\n")),(0,i.kt)("p",null,"In Rust variables have lexical scope. That is to say that the variable is in scope in the entirety of the curly braces in which it is defined. In this code, we create ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," in the outer scope. Then we create another ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," in the inner scope that shadows the original. We see the shadowing from the first println. But after the inner scope ends, the second ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," no longer exists and the outer ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is no longer shadowed. We see this from the second println."),(0,i.kt)("p",null,"Scoping rules are closely related to Rust's lifetime rules which we will explore in the next module about borrowing and the borrow checker."),(0,i.kt)("h1",{id:"more-simple-data-types"},"More Simple Data Types"),(0,i.kt)("p",null,'Rust has many simple, or "scalar", data types built into the language. There are signed and unsigned integer types of many fixed sizes, like the ',(0,i.kt)("inlineCode",{parentName:"p"},"i32"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"u32")," we saw above."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Unsigned"),(0,i.kt)("th",{parentName:"tr",align:null},"Signed"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"i8"),(0,i.kt)("td",{parentName:"tr",align:null},"u8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"i16"),(0,i.kt)("td",{parentName:"tr",align:null},"u16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"32-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"i32"),(0,i.kt)("td",{parentName:"tr",align:null},"u32")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"64-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"i64"),(0,i.kt)("td",{parentName:"tr",align:null},"u64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"128-bit"),(0,i.kt)("td",{parentName:"tr",align:null},"i128"),(0,i.kt)("td",{parentName:"tr",align:null},"u28")))),(0,i.kt)("p",null,"There are also the ",(0,i.kt)("inlineCode",{parentName:"p"},"isize")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usize")," data types that are fixed width for a particular architecture. If your PC is using the AMD64 architecture, these types will be 64 bits."),(0,i.kt)("p",null,"There are also floating point numerical types ",(0,i.kt)("inlineCode",{parentName:"p"},"f32")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"f64"),". If you are familiar with floating point arithmetic from other languages, Rust's will likely work exactly how you expect. We will not dig into the floating point types in detail in this course because floating point arithmetic is non-deterministic. That means that you may not get the ",(0,i.kt)("em",{parentName:"p"},"Exact")," same result for a given operation when you run it on multiple different systems (although you will certainly get a very close result). this property makes floating point math unsuitable for distributed systems such as those built with Substrate. Later in the course we will explore an alternative called fixed point and you will implement it as an assignment."),(0,i.kt)("p",null,"Of course Rust has the familiar ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," type which can have values ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let b = true;\nlet mut b2 = false;\nb2 = true;\n")),(0,i.kt)("p",null,"Rust also has the ",(0,i.kt)("inlineCode",{parentName:"p"},"char")," type for storing a single character. Character literals are denoted with single quotes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let c: char = 'a';\n")),(0,i.kt)("p",null,"Finally, Rust has the unit type, sometimes referred to as the empty tuple. This type has only a single value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let unit: () = ();\n")),(0,i.kt)("h1",{id:"compound-data-types"},"Compound Data Types"),(0,i.kt)("p",null,"Like many languages, Rust supports compound types that store multiple scalar values. The two that are most common are tuples and arrays."),(0,i.kt)("p",null,"TODO Tuples use parentheses, each value has its own type, types may be of different values. accessed with dot operator."),(0,i.kt)("p",null,"TODO Arrays use square brackets, have fixed length, each value is of the same type. accessed with indices of type usize."),(0,i.kt)("p",null,"It is also possible to make your own data types. We will cover making custom types later in the course. For example, if you need larger integers than the built-in types allow, Substrate includes ",(0,i.kt)("inlineCode",{parentName:"p"},"U256"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"U512")," types for this purpose. If you want arbitrarily large integers like the ones found in Python and other programing languages, you can consider using the ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/num-bigint"},"num-bigint")," crate."),(0,i.kt)("h2",{id:"rust-operators"},"Rust Operators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arithmetic - addition, subtraction, multiplication, division, remainder, exponent"),(0,i.kt)("li",{parentName:"ul"},"Boolean - and, or, not"),(0,i.kt)("li",{parentName:"ul"},"Comparison"),(0,i.kt)("li",{parentName:"ul"},"Bitwise")))}d.isMDXComponent=!0}}]);