"use strict";(self.webpackChunkw3f_education=self.webpackChunkw3f_education||[]).push([[6497],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"existential-deposit",title:"E for Existential Deposit",sidebar_position:5},l=void 0,c={unversionedId:"AtoZ/existential-deposit",id:"AtoZ/existential-deposit",isDocsHomePage:!1,title:"E for Existential Deposit",description:"E for Existential Deposit",source:"@site/docs/AtoZ/existential-deposit.md",sourceDirName:"AtoZ",slug:"/AtoZ/existential-deposit",permalink:"/docs/AtoZ/existential-deposit",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/AtoZ/existential-deposit.md",version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1676642761,formattedLastUpdatedAt:"2/17/2023",sidebarPosition:5,frontMatter:{id:"existential-deposit",title:"E for Existential Deposit",sidebar_position:5},sidebar:"atoz",previous:{title:"D for Democracy",permalink:"/docs/AtoZ/democracy"},next:{title:"F for Forkless",permalink:"/docs/AtoZ/forkless"}},p=[{value:"Existential Deposit and reaping",id:"existential-deposit-and-reaping",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"E for Existential Deposit",src:n(3452).Z})),(0,a.kt)("h2",{id:"existential-deposit-and-reaping"},"Existential Deposit and reaping"),(0,a.kt)("p",null,"Accounts must have a minimum balance to exist on-chain. This minimum balance, an existential deposit (ED), is used as a financial incentive to keep wallets alive. If a wallet's balance falls below the ED, it is considered a dust account and will be removed from the on-chain data. Once all references to the account have been removed, the account can be reaped (wholly emptied). "),(0,a.kt)("p",null,"The ED on Polkadot is ",(0,a.kt)("strong",{parentName:"p"},"1 DOT")," and Kusama is ",(0,a.kt)("strong",{parentName:"p"},"0.0000333333 KSM"),". "),(0,a.kt)("p",null,"Reaping does not mean the account is no longer usable, however. The keys still exist in the wallet and can be used in the future, and funds can still be transferred to the account as long as the total funds in the account will exceed the ED. However, the reaped funds are not recoverable if the account was previously reaped. To protect your account from going below the existential deposit amount, the wallet on PolkadotJS has a keep-alive option that will not let transactions take place, which would otherwise put the account balance under the ED amount. "),(0,a.kt)("p",null,"If you are a validator, refrain from depositing any staking rewards to a reaped account, or those funds will be lost and unrecoverable."))}d.isMDXComponent=!0},3452:function(e,t,n){t.Z=n.p+"assets/images/E-d639b0252d6e796f1ea07212ae5792b1.png"}}]);