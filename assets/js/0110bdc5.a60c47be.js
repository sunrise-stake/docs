"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[464],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={slug:"/details"},l="The Details",u={unversionedId:"details",id:"details",title:"The Details",description:"A Deep Dive into the Staking Process",source:"@site/docs/details.md",sourceDirName:".",slug:"/details",permalink:"/details",draft:!1,editUrl:"https://github.com/sunrise-stake/docs/docs/details.md",tags:[],version:"current",frontMatter:{slug:"/details"},sidebar:"defaultSidebar",next:{title:"Governance",permalink:"/governance"}},p={},c=[{value:"A Deep Dive into the Staking Process",id:"a-deep-dive-into-the-staking-process",level:2},{value:"Step 1: Depositing SOL with Sunrise Stake",id:"step-1-depositing-sol-with-sunrise-stake",level:3},{value:"Step 2: Accruing yield",id:"step-2-accruing-yield",level:3},{value:"Stake Pools",id:"stake-pools",level:5},{value:"Liquidity Pool",id:"liquidity-pool",level:5},{value:"Step 3: Unstaking",id:"step-3-unstaking",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-details"},"The Details"),(0,a.kt)("h2",{id:"a-deep-dive-into-the-staking-process"},"A Deep Dive into the Staking Process"),(0,a.kt)("p",null,"Let\u2019s take a deep dive into what happens when you deposit your SOL with Sunrise Stake"),(0,a.kt)("h3",{id:"step-1-depositing-sol-with-sunrise-stake"},"Step 1: Depositing SOL with Sunrise Stake"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"staking_white_without_comments.png",src:n(7631).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"The staking process begins with you depositing your SOL via Sunrise Stake\u2019s app."),(0,a.kt)("p",null,"Your SOL will be deposited into the underlying pools."),(0,a.kt)("p",null,"The majority of the SOL is deposited into a set of ",(0,a.kt)("a",{parentName:"p",href:"https://solana.org/stake-pools"},"Stake Pools"),".\nAt present, Sunrise Stake deposits into the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.marinade.finance/"},"Marinade Finance")," and ",(0,a.kt)("a",{parentName:"p",href:"https://stake-docs.solblaze.org/"},"SolBlaze")," pools.\nThe stake pool tokens (mSOL and bSOL) will be held by the protocol in a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"},"Program Derived Address (PDA)"),"."),(0,a.kt)("p",null,"A proportion of the deposited SOL is also deposited into the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.marinade.finance/marinade-protocol/system-overview/unstake-liquidity-pool"},"Marinade Unstake Pool"),".\nThis pool is used during the unstaking process to provide fee-less unstaking, ensuring that users can withdraw their SOL at any time without incurring a fee."),(0,a.kt)("p",null,"When you deposit your SOL, you will receive an equivalent amount of gSOL in your wallet.\ngSOL can be used in the same way as SOL, by protocols or recipients that support it."),(0,a.kt)("h3",{id:"step-2-accruing-yield"},"Step 2: Accruing yield"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"accruing_yield_white.png",src:n(8947).Z,width:"1920",height:"1080"})),(0,a.kt)("h5",{id:"stake-pools"},"Stake Pools"),(0,a.kt)("p",null,"At the end of each epoch (every 2 or 3 days), yield gets paid out into stake accounts,\nand the value of the overall stake pool increases."),(0,a.kt)("p",null,"As mSOL and bSOL represent a share of their respective stake pools, the value of mSOL and bSOL also increases."),(0,a.kt)("p",null,"The yield accrued on the staked SOL is equal to the value of mSOL and bSOL held by Sunrise\nminus the value of SOL staked (calculated as the circulating supply of gSOL)."),(0,a.kt)("h5",{id:"liquidity-pool"},"Liquidity Pool"),(0,a.kt)("p",null,"The Marinade Unstake Pool also accrues yield through fees from the marinade liquid unstaking feature.\nThe total value of the holdings of the Sunrise protocol are therefore:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The value of mSOL and bSOL held by Sunrise"),(0,a.kt)("li",{parentName:"ul"},"The value of the liquidity pool tokens held by Sunrise")),(0,a.kt)("h2",{id:"step-3-unstaking"},"Step 3: Unstaking"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"unstaking_white_without_comments.png",src:n(416).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"If you unstake your SOL, Sunrise calculates how much of its share of the underlying stake and liquidity pools to sell, in order to receive your SOL."),(0,a.kt)("p",null,"Unstaking draws from the liquidity pool balance first, and then from the stake pool as needed."),(0,a.kt)("p",null,"For example, if you decide to unstake 100 SOL, and the value of the Sunrise-held liquidity pool tokens are currently at 90,\nSunrise will withdraw 90 from the liquidity pool, and the remaining 10 from the stake pool."),(0,a.kt)("p",null,'Sunrise will also trigger a "rebalancing" transaction, that moves SOL from the stake pool into the liquidity pool,\nin order to maintain a 10% liquidity pool balance.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rebalancing_white.png",src:n(5395).Z,width:"1920",height:"1080"})))}h.isMDXComponent=!0},8947:function(e,t,n){t.Z=n.p+"assets/images/accruing_yield_white-2035c3ff4ddfc394cf39dfb900ae50ac.png"},5395:function(e,t,n){t.Z=n.p+"assets/images/rebalancing_white-dedb297aa499b3a26ea78e7f81982716.png"},7631:function(e,t,n){t.Z=n.p+"assets/images/staking_white_without_comments-7c0a937183d9c4eb060612e3ce16eb14.png"},416:function(e,t,n){t.Z=n.p+"assets/images/unstaking_white_without_comments-0a0614753e4b24ebb22cc0015ced4420.png"}}]);