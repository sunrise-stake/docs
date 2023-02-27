"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4124:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={slug:"/spending"},c="Spending Yield",u={unversionedId:"treasury",id:"treasury",title:"Spending Yield",description:"Thanks to the yield earned in the staking process, Sunrise can purchase carbon tokens and burn them to offset carbon emissions.",source:"@site/docs/treasury.md",sourceDirName:".",slug:"/spending",permalink:"/spending",draft:!1,editUrl:"https://github.com/sunrise-stake/docs/docs/treasury.md",tags:[],version:"current",frontMatter:{slug:"/spending"},sidebar:"defaultSidebar",previous:{title:"Other Questions",permalink:"/faq"}},l={},p=[{value:"1. Yield transfer to the yield account",id:"1-yield-transfer-to-the-yield-account",level:2},{value:"2. Purchasing carbon tokens",id:"2-purchasing-carbon-tokens",level:2},{value:"3. Burning the carbon tokens",id:"3-burning-the-carbon-tokens",level:2}],d={toc:p};function f(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spending-yield"},"Spending Yield"),(0,a.kt)("p",null,"Thanks to the yield earned in the staking process, Sunrise can purchase carbon tokens and burn them to offset carbon emissions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"yield_controller_white_without_comments.png",src:t(7216).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"1-yield-transfer-to-the-yield-account"},"1. Yield transfer to the yield account"),(0,a.kt)("p",null,"The yield earned from staking SOL is transferred to the ",(0,a.kt)("strong",{parentName:"p"},"yield account"),"."),(0,a.kt)("p",null,"It is a Program Derived Address (",(0,a.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"},"PDA"),")\nmeaning that it is owned and controlled by a smart contract, not a private key."),(0,a.kt)("p",null,"This smart contract is known as the ",(0,a.kt)("strong",{parentName:"p"},"yield controller"),".\nIt can trigger a state change to buy or burn carbon tokens, thus retiring underlying carbon credits."),(0,a.kt)("h2",{id:"2-purchasing-carbon-tokens"},"2. Purchasing carbon tokens"),(0,a.kt)("p",null,"The carbon token used by Sunrise Stake is the Toucan Nature Carbon Tonne token."),(0,a.kt)("p",null,"NCT represents a tonne of CO2 or equivalent greenhouse gas removed from the atmosphere in various nature-based projects.\nIt is issued on the Polygon and Celo blockchains and has been bridged to Solana via ",(0,a.kt)("a",{parentName:"p",href:"https://wormhole.com/"},"Wormhole"),"."),(0,a.kt)("p",null,"More on the NCT can be found on Toucan\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://blog.toucan.earth/announcing-nct-nature-carbon-tonne/"},"blog")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ToucanProtocol/contracts"},"GitHub")," repository."),(0,a.kt)("p",null,"The Solana bridged token mint address is ",(0,a.kt)("a",{parentName:"p",href:"https://solscan.io/token/7sbtAMfAuSfsUvZKPWiXUXaizYCnpLL2BBnKNTU3wjfT"},"7sbtAMfAuSfsUvZKPWiXUXaizYCnpLL2BBnKNTU3wjfT"),"."),(0,a.kt)("h2",{id:"3-burning-the-carbon-tokens"},"3. Burning the carbon tokens"),(0,a.kt)("p",null,"The Sunrise yield controller purchases NCT from a DEX, and burns them."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE"),":\nUntil sufficient liquidity is present on Solana for NCT, Sunrise is maintaining a reserve of bridged NCT, and is automatically burning from this pot at a fixed price."))}f.isMDXComponent=!0},7216:function(e,n,t){n.Z=t.p+"assets/images/yield_controller_white_without_comments-0b3b37966c6ed68c7d9301a8e4a1864e.png"}}]);