(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97849],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,u=m["".concat(s,".").concat(d)]||m[d]||k[d]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8769:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"core.foreignkeyconstraintviolationexception",title:"Class: ForeignKeyConstraintViolationException",sidebar_label:"ForeignKeyConstraintViolationException",custom_edit_url:null,hide_title:!0},p="Class: ForeignKeyConstraintViolationException",s={unversionedId:"api/classes/core.foreignkeyconstraintviolationexception",id:"version-4.5/api/classes/core.foreignkeyconstraintviolationexception",isDocsHomePage:!1,title:"Class: ForeignKeyConstraintViolationException",description:"core.ForeignKeyConstraintViolationException",source:"@site/versioned_docs/version-4.5/api/classes/core.foreignkeyconstraintviolationexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.foreignkeyconstraintviolationexception",permalink:"/docs/api/classes/core.foreignkeyconstraintviolationexception",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1627862745,formattedLastUpdatedAt:"8/2/2021",frontMatter:{id:"core.foreignkeyconstraintviolationexception",title:"Class: ForeignKeyConstraintViolationException",sidebar_label:"ForeignKeyConstraintViolationException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"FileCacheAdapter",permalink:"/docs/api/classes/core.filecacheadapter"},next:{title:"Hydrator",permalink:"/docs/api/classes/core.hydrator"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],l={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-foreignkeyconstraintviolationexception"},"Class: ForeignKeyConstraintViolationException"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ForeignKeyConstraintViolationException"),(0,o.kt)("p",null,"Exception for a foreign key constraint violation detected in the driver."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},(0,o.kt)("em",{parentName:"a"},"ConstraintViolationException"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"ForeignKeyConstraintViolationException")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new ForeignKeyConstraintViolationException"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.foreignkeyconstraintviolationexception"},(0,o.kt)("em",{parentName:"a"},"ForeignKeyConstraintViolationException"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"previous")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.foreignkeyconstraintviolationexception"},(0,o.kt)("em",{parentName:"a"},"ForeignKeyConstraintViolationException"))),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"code"},"code"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"code"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#code"},"code")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errmsg"},"errmsg"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errmsg"},"errmsg")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errno"},"errno"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errno"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errno"},"errno")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#message"},"message")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#name"},"name")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Optional override for formatting stack traces"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,o.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"err")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#preparestacktrace"},"prepareStackTrace")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlmessage"},"sqlMessage")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlstate"},"sqlState"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlstate"},"sqlState")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stack"},"stack"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"stack"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stack"},"stack")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stacktracelimit"},"stackTraceLimit")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,o.kt)("em",{parentName:"p"},"object"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Create .stack property on a target object"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}k.isMDXComponent=!0}}]);