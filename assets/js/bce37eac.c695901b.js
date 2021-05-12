(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96611],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,b=m["".concat(o,".").concat(k)]||m[k]||d[k]||s;return a?r.createElement(b,p(p({ref:t},l),{},{components:a})):r.createElement(b,p({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,p=new Array(s);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<s;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34787:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return o},default:function(){return l}});var r=a(74034),n=a(79973),s=(a(67294),a(3905)),p={id:"core.tableexistsexception",title:"Class: TableExistsException",sidebar_label:"TableExistsException",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.tableexistsexception",id:"version-4.5/api/classes/core.tableexistsexception",isDocsHomePage:!1,title:"Class: TableExistsException",description:"core.TableExistsException",source:"@site/versioned_docs/version-4.5/api/classes/core.tableexistsexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.tableexistsexception",permalink:"/docs/api/classes/core.tableexistsexception",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620806876,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"TableExistsException",frontMatter:{id:"core.tableexistsexception",title:"Class: TableExistsException",sidebar_label:"TableExistsException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: SyntaxErrorException",permalink:"/docs/api/classes/core.syntaxerrorexception"},next:{title:"Class: TableNotFoundException",permalink:"/docs/api/classes/core.tablenotfoundexception"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],c={toc:o};function l(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TableExistsException"),(0,s.kt)("p",null,"Exception for an already existing table referenced in a statement detected in the driver."),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},(0,s.kt)("em",{parentName:"a"},"DatabaseObjectExistsException"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},"TableExistsException")))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new TableExistsException"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.tableexistsexception"},(0,s.kt)("em",{parentName:"a"},"TableExistsException"))),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"previous")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.tableexistsexception"},(0,s.kt)("em",{parentName:"a"},"TableExistsException"))),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"code"},"code"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"code"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#code"},"code")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"errmsg"},"errmsg"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#errmsg"},"errmsg")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"errno"},"errno"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"errno"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#errno"},"errno")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"message"},"message"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"message"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#message"},"message")),(0,s.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"name"},"name"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"name"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#name"},"name")),(0,s.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,s.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,s.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Optional override for formatting stack traces"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,s.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,s.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,s.kt)("p",null,"\u25b8 (",(0,s.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,s.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"err")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,s.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#preparestacktrace"},"prepareStackTrace")),(0,s.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#sqlmessage"},"sqlMessage")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sqlstate"},"sqlState"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#sqlstate"},"sqlState")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"stack"},"stack"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"stack"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#stack"},"stack")),(0,s.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#stacktracelimit"},"stackTraceLimit")),(0,s.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,s.kt)("em",{parentName:"p"},"object"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Create .stack property on a target object"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"object"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException")),(0,s.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}l.isMDXComponent=!0}}]);