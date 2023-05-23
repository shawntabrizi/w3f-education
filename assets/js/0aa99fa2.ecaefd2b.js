"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[9695],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8539:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"error-handling",title:"Error handling with Result & Option in Rust",sidebar_label:"Error handling with Result & Option",description:"Learn how to handle errors in Rust, and what the Error Type is."},l=void 0,p={unversionedId:"Rust/section4/error-handling",id:"Rust/section4/error-handling",isDocsHomePage:!1,title:"Error handling with Result & Option in Rust",description:"Learn how to handle errors in Rust, and what the Error Type is.",source:"@site/docs/Rust/section4/error-handling.md",sourceDirName:"Rust/section4",slug:"/Rust/section4/error-handling",permalink:"/docs/Rust/section4/error-handling",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Rust/section4/error-handling.md",version:"current",lastUpdatedBy:"Bader Youssef",lastUpdatedAt:1679686936,formattedLastUpdatedAt:"3/24/2023",frontMatter:{id:"error-handling",title:"Error handling with Result & Option in Rust",sidebar_label:"Error handling with Result & Option",description:"Learn how to handle errors in Rust, and what the Error Type is."},sidebar:"rust",previous:{title:"Panic! in Rust",permalink:"/docs/Rust/section4/panic"},next:{title:"Intro to Intermediate Rust - Data Structs & Collections",permalink:"/docs/Rust/section5/section-5-intro"}},u=[{value:"Using Option",id:"using-option",children:[]},{value:"Pattern Matching with Option",id:"pattern-matching-with-option",children:[]},{value:"Using <code>if let</code> with Option",id:"using-if-let-with-option",children:[]},{value:"Using Result",id:"using-result",children:[]},{value:"Defining a Custom Error Type For Result",id:"defining-a-custom-error-type-for-result",children:[]},{value:"Try it yourself!",id:"try-it-yourself",children:[]},{value:"What&#39;s happening here?",id:"whats-happening-here",children:[]}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As seen before, ",(0,i.kt)("em",{parentName:"p"},"panicking")," when the program is running is unideal and should be avoided if necessary.  Rust includes two commonly used ",(0,i.kt)("em",{parentName:"p"},"enums")," that help ensure data is valid in runtime: ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,i.kt)("p",null,"Both types ensure invalid data and errors are handled adequately and do not cause the program to panic."),(0,i.kt)("h2",{id:"using-option"},"Using Option"),(0,i.kt)("p",null,"Option is an enum that contains two variants - ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Some"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"enum Option<T> {\n    None,\n    Some(T),\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," here may be a new sight to behold.  This is a ",(0,i.kt)("strong",{parentName:"p"},"generic type parameter"),", which will be covered in module six.  For now, know it means that ",(0,i.kt)("em",{parentName:"p"},"any")," type can be within ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," - it doesn't matter ",(0,i.kt)("em",{parentName:"p"},"what")," it is, just that something is there."),(0,i.kt)("p",null,"A concrete example would be attempting to access an empty array.  Instead of panicking and attempting to access an index that doesn't exist, we can return an ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// An example of a function that returns an Option, aka, Some(i32) or None.\n// Notice the angled brackets which contain the type we're expecting.\nfn safe_access(index: usize, slice: &[i32]) -> Option<i32> {\n    // We check to see if the length of the slice is zero, or\n    // less than the requested index.  If it is, we return `None`\n    if slice.len() == 0 || slice.len() < index {\n        return None;\n    }\n    // Otherwise, we're good to return the requested item!\n    Some(slice[index])\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"None")," does the opposite.  If the Option is ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", it implies the data does not exist.  This is useful for checking the state of some data but does not describe any error associated with a potential failure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let empty_array = [];\nlet valid_array = [1, 2, 3];\n// Pass it in as a reference, as per the function signature\n\nsafe_access(1, &empty_array); // returns None\nsafe_access(1, &valid_array); // returns Some(2)\n")),(0,i.kt)("h2",{id:"pattern-matching-with-option"},"Pattern Matching with Option"),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," returns an enum, it would be good practice to ensure that we handle both variants.  Functions can be called and matched directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let empty_array = [];\nlet valid_array = [1, 2, 3];\n\n// Technically could be None or Some\n// hint: look at the type of this variable\nlet maybe_value: Option<i32> = safe_access(1, &valid_array);\n\n// However, let\'s match the function directly:\nmatch safe_access(1, &valid_array) {\n    Some(value) => println!("We have a value: {value}"),\n    None => println!("It doesn\'t exist :()")\n};\n\n')),(0,i.kt)("h2",{id:"using-if-let-with-option"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"if let")," with Option"),(0,i.kt)("p",null,"Alternatively, an ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," statement may be used instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," essentially will peform the same type of pattern matching, where it will look for ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," value, assign it to a variable if it exists, and safely ",(0,i.kt)("inlineCode",{parentName:"p"},"unwrap")," it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let valid_array = [1, 2, 3];\n\nif let Some(value) = safe_access(0, &valid_array) {\n    println!("{value}"); // 1\n} else {\n     println!("Nothing valid was found!");\n}\n')),(0,i.kt)("h2",{id:"using-result"},"Using Result"),(0,i.kt)("p",null,"A Result also contains two variants, ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok(T)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Err(E)"),".  While the generic ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," still implies any value, the generic ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," can be used to define a custom error type, allowing us to describe why a particular value or scenario did not output as expected."),(0,i.kt)("p",null,"It is used very similarly to ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," at times, with the exception that instead of returning ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", it returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," that describes what went wrong.  Usually, ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," should be used when a value is not certain to be existent or not, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," used when referring to a computation that has the possibility of failing."),(0,i.kt)("p",null,"You may read more on ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," vs. ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," ",(0,i.kt)("a",{parentName:"p",href:"https://levelup.gitconnected.com/rust-option-vs-result-when-to-use-what-e73e82612cb0"},(0,i.kt)("strong",{parentName:"a"},"here")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"enum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n")),(0,i.kt)("p",null,"Here is the example above, only adapted to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Result"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn safe_access_result(index: usize, slice: &[i32]) -> Result<i32, String> {\n    if slice.len() == 0 || slice.len() < index {\n        return Err(String::from("Error! Invalid index!"));\n    }\n    Ok(slice[index])\n}\n')),(0,i.kt)("p",null,"A key aspect is the ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Err"),", part of this expected return type.  It's a String, meaning while it enables us to express why it has failed, it is unideal."),(0,i.kt)("h2",{id:"defining-a-custom-error-type-for-result"},"Defining a Custom Error Type For Result"),(0,i.kt)("p",null,"Rather than having obscure Strings as an Error type, we can instead define a custom enum to represent any potential errors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"enum SafeArrayError {\n    InvalidIndex\n}\n")),(0,i.kt)("p",null,"With this type defined, we can now change our function to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"enum SafeArrayError {\n    InvalidIndex\n}\n\nfn safe_access_result(index: usize, slice: &[i32]) -> Result<i32, SafeArrayError> {\n    if slice.len() == 0 || slice.len() < index {\n        // Now, we return a context-specific error.\n        return Err(SafeArrayError::InvalidIndex);\n    }\n    Ok(slice[index])\n}\n")),(0,i.kt)("h2",{id:"try-it-yourself"},"Try it yourself!"),(0,i.kt)("iframe",{width:"100%",height:"580",src:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn+main%28%29+%7B%0A++++let+empty_array+%3D+%5B%5D%3B%0A++++let+valid_array+%3D+%5B1%2C+2%2C+3%5D%3B%0A++++%2F%2F+Pass+it+in+as+a+reference%2C+as+per+the+function+signature%0A%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+safe_access%281%2C+%26empty_array%29%29%3B+%2F%2F+None%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+safe_access%281%2C+%26valid_array%29%29%3B+%2F%2F+Some%282%29%0A%0A++++%2F%2F+Using+match%0A++++match+safe_access%281%2C+%26valid_array%29+%7B%0A++++++++Some%28value%29+%3D%3E+println%21%28%22We+have+a+value%3A+%7Bvalue%7D%22%29%2C%0A++++++++None+%3D%3E+println%21%28%22It+doesn%27t+exist+%3A%28%29%22%29%2C%0A++++%7D%3B%0A%0A++++%2F%2F+Using+if+let%0A++++if+let+Some%28value%29+%3D+safe_access%280%2C+%26valid_array%29+%7B%0A++++++++println%21%28%22%7Bvalue%7D%22%29%3B+%2F%2F+1%0A++++%7D+else+%7B%0A++++++++println%21%28%22Nothing+valid+was+found%21%22%29%3B%0A++++%7D%0A%0A++++%2F%2F+Using+Result%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+safe_access_result%281%2C+%26empty_array%29%29%3B+%2F%2F+Err%28InvalidIndex%29%0A++++println%21%28%22%7B%3A%3F%7D%22%2C+safe_access_result%281%2C+%26valid_array%29%29%3B+%2F%2F+Ok%282%29%0A%7D%0A%0A%2F%2F+An+example+of+a+function+that+returns+an+Option%2C+aka%2C+Some%28i32%29+or+None.%0A%2F%2F+Notice+the+angled+brackets+which+contain+the+type+we%27re+expecting.%0Afn+safe_access%28index%3A+usize%2C+slice%3A+%26%5Bi32%5D%29+-%3E+Option%3Ci32%3E+%7B%0A++++%2F%2F+We+check+to+see+if+the+length+of+the+slice+is+zero%2C+or%0A++++%2F%2F+less+than+the+requested+index.++If+it+is%2C+we+return+%60None%60%0A++++if+slice.len%28%29+%3D%3D+0+%7C%7C+slice.len%28%29+%3C+index+%7B%0A++++++++return+None%3B%0A++++%7D%0A++++%2F%2F+Otherwise%2C+we%27re+good+to+return+the+requested+item%21%0A++++Some%28slice%5Bindex%5D%29%0A%7D%0A%0A%23%5Bderive%28Debug%29%5D%0Aenum+SafeArrayError+%7B%0A++++InvalidIndex%2C%0A%7D%0A%0Afn+safe_access_result%28index%3A+usize%2C+slice%3A+%26%5Bi32%5D%29+-%3E+Result%3Ci32%2C+SafeArrayError%3E+%7B%0A++++if+slice.len%28%29+%3D%3D+0+%7C%7C+slice.len%28%29+%3C+index+%7B%0A++++++++%2F%2F+Now%2C+we+return+a+context-specific+error.%0A++++++++return+Err%28SafeArrayError%3A%3AInvalidIndex%29%3B%0A++++%7D%0A++++Ok%28slice%5Bindex%5D%29%0A%7D%0A"}),(0,i.kt)("h2",{id:"whats-happening-here"},"What's happening here?"),(0,i.kt)("p",null,"There are two functions, ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_access")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_access_result"),". These functions both accomplish the same task - ensure a particular element of an array can be accessed safely.  A custom error type is also defined, ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeArrayError"),", which is utilized within the ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_access_result")," function."))}d.isMDXComponent=!0}}]);