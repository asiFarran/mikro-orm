(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72861],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),k=c(n),d=r,u=k["".concat(p,".").concat(d)]||k[d]||m[d]||i;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o={id:"core.uniqueconstraintviolationexception",title:"Class: UniqueConstraintViolationException",sidebar_label:"UniqueConstraintViolationException",custom_edit_url:null,hide_title:!0},s="Class: UniqueConstraintViolationException",p={unversionedId:"api/classes/core.uniqueconstraintviolationexception",id:"version-4.5/api/classes/core.uniqueconstraintviolationexception",isDocsHomePage:!1,title:"Class: UniqueConstraintViolationException",description:"core.UniqueConstraintViolationException",source:"@site/versioned_docs/version-4.5/api/classes/core.uniqueconstraintviolationexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.uniqueconstraintviolationexception",permalink:"/docs/api/classes/core.uniqueconstraintviolationexception",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1632415622,formattedLastUpdatedAt:"9/23/2021",frontMatter:{id:"core.uniqueconstraintviolationexception",title:"Class: UniqueConstraintViolationException",sidebar_label:"UniqueConstraintViolationException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"UnderscoreNamingStrategy",permalink:"/docs/api/classes/core.underscorenamingstrategy"},next:{title:"UnitOfWork",permalink:"/docs/api/classes/core.unitofwork"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],l={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-uniqueconstraintviolationexception"},"Class: UniqueConstraintViolationException"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".UniqueConstraintViolationException"),(0,i.kt)("p",null,"Exception for a unique constraint violation detected in the driver."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},(0,i.kt)("em",{parentName:"a"},"ConstraintViolationException"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"UniqueConstraintViolationException")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new UniqueConstraintViolationException"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.uniqueconstraintviolationexception"},(0,i.kt)("em",{parentName:"a"},"UniqueConstraintViolationException"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"previous")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.uniqueconstraintviolationexception"},(0,i.kt)("em",{parentName:"a"},"UniqueConstraintViolationException"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"code"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#code"},"code")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errmsg"},"errmsg"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errmsg"},"errmsg")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errno"},"errno"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"errno"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errno"},"errno")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#message"},"message")),(0,i.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#name"},"name")),(0,i.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Optional override for formatting stack traces"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,i.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,i.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#preparestacktrace"},"prepareStackTrace")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlmessage"},"sqlMessage")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqlstate"},"sqlState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlstate"},"sqlState")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stack"},"stack"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stack"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stack"},"stack")),(0,i.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stacktracelimit"},"stackTraceLimit")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,i.kt)("em",{parentName:"p"},"object"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Create .stack property on a target object"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),(0,i.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}m.isMDXComponent=!0}}]);