(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13252],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return N}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),N=n,c=s["".concat(o,".").concat(N)]||s[N]||k[N]||i;return a?r.createElement(c,l(l({ref:t},m),{},{components:a})):r.createElement(c,l({ref:t},m))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7764:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return k}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),l={id:"core.QueryHelper",title:"Class: QueryHelper",sidebar_label:"QueryHelper",custom_edit_url:null},p=void 0,o={unversionedId:"api/classes/core.QueryHelper",id:"api/classes/core.QueryHelper",isDocsHomePage:!1,title:"Class: QueryHelper",description:"core.QueryHelper",source:"@site/docs/api/classes/core.QueryHelper.md",sourceDirName:"api/classes",slug:"/api/classes/core.QueryHelper",permalink:"/docs/next/api/classes/core.QueryHelper",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.QueryHelper",title:"Class: QueryHelper",sidebar_label:"QueryHelper",custom_edit_url:null},sidebar:"API",previous:{title:"Platform",permalink:"/docs/next/api/classes/core.Platform"},next:{title:"ReadOnlyException",permalink:"/docs/next/api/classes/core.ReadOnlyException"}},d=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"SUPPORTED_OPERATORS",id:"supported_operators",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getActiveFilters",id:"getactivefilters",children:[]},{value:"inlinePrimaryKeyObjects",id:"inlineprimarykeyobjects",children:[]},{value:"isFilterActive",id:"isfilteractive",children:[]},{value:"processCustomType",id:"processcustomtype",children:[]},{value:"processObjectParams",id:"processobjectparams",children:[]},{value:"processParams",id:"processparams",children:[]},{value:"processWhere",id:"processwhere",children:[]}]}],m={toc:d};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".QueryHelper"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new QueryHelper"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"supported_operators"},"SUPPORTED","_","OPERATORS"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"SUPPORTED","_","OPERATORS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L11"},"packages/core/src/utils/QueryHelper.ts:11")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getactivefilters"},"getActiveFilters"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getActiveFilters"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filters"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"FilterDef"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"FilterDef"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FilterDef"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L165"},"packages/core/src/utils/QueryHelper.ts:165")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inlineprimarykeyobjects"},"inlinePrimaryKeyObjects"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"inlinePrimaryKeyObjects"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"../modules/core#anyentity"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"where")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.EntityMetadata"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityMetadata")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.MetadataStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataStorage")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L45"},"packages/core/src/utils/QueryHelper.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isfilteractive"},"isFilterActive"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"isFilterActive"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filterName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filterName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FilterDef"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L186"},"packages/core/src/utils/QueryHelper.ts:186")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processcustomtype"},"processCustomType"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"processCustomType"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cond"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fromQuery?"),"): ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core.EntityProperty"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityProperty")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cond")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"platform")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromQuery?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L198"},"packages/core/src/utils/QueryHelper.ts:198")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processobjectparams"},"processObjectParams"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"processObjectParams"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L37"},"packages/core/src/utils/QueryHelper.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processparams"},"processParams"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"processParams"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L13"},"packages/core/src/utils/QueryHelper.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processwhere"},"processWhere"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"processWhere"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"where"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"convertCustomTypes?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"root?"),"): ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"where")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.MetadataStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataStorage"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"platform")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"convertCustomTypes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"root")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/utils/QueryHelper.ts#L73"},"packages/core/src/utils/QueryHelper.ts:73")))}k.isMDXComponent=!0}}]);