(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31690],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27142:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i={id:"core.QueryResult",title:"Interface: QueryResult<T>",sidebar_label:"QueryResult",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/core.QueryResult",id:"api/interfaces/core.QueryResult",isDocsHomePage:!1,title:"Interface: QueryResult<T>",description:"core.QueryResult",source:"@site/docs/api/interfaces/core.QueryResult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.QueryResult",permalink:"/docs/next/api/interfaces/core.QueryResult",editUrl:null,version:"current",frontMatter:{id:"core.QueryResult",title:"Interface: QueryResult<T>",sidebar_label:"QueryResult",custom_edit_url:null},sidebar:"API",previous:{title:"QueryOrderMap",permalink:"/docs/next/api/interfaces/core.QueryOrderMap"},next:{title:"ReferenceOptions",permalink:"/docs/next/api/interfaces/core.ReferenceOptions"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".QueryResult"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,a.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"T"),">","{ ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),"  }")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"affectedrows"},"affectedRows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"affectedRows"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/544583b/packages/core/src/connections/Connection.ts#L132"},"packages/core/src/connections/Connection.ts:132")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"insertid"},"insertId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"insertId"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#primary"},(0,a.kt)("inlineCode",{parentName:"a"},"Primary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/544583b/packages/core/src/connections/Connection.ts#L133"},"packages/core/src/connections/Connection.ts:133")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"row"},"row"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"row"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/544583b/packages/core/src/connections/Connection.ts#L134"},"packages/core/src/connections/Connection.ts:134")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rows"},"rows"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"rows"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/544583b/packages/core/src/connections/Connection.ts#L135"},"packages/core/src/connections/Connection.ts:135")))}u.isMDXComponent=!0}}]);