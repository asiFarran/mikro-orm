(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52891],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=k(n),s=r,N=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return n?a.createElement(N,o(o({ref:t},d),{},{components:n})):a.createElement(N,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var k=2;k<i;k++)o[k]=n[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78415:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return k},default:function(){return m}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o={id:"knex.AbstractSqlConnection",title:"Class: AbstractSqlConnection",sidebar_label:"AbstractSqlConnection",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/knex.AbstractSqlConnection",id:"api/classes/knex.AbstractSqlConnection",isDocsHomePage:!1,title:"Class: AbstractSqlConnection",description:"knex.AbstractSqlConnection",source:"@site/docs/api/classes/knex.AbstractSqlConnection.md",sourceDirName:"api/classes",slug:"/api/classes/knex.AbstractSqlConnection",permalink:"/docs/next/api/classes/knex.AbstractSqlConnection",editUrl:null,tags:[],version:"current",frontMatter:{id:"knex.AbstractSqlConnection",title:"Class: AbstractSqlConnection",sidebar_label:"AbstractSqlConnection",custom_edit_url:null},sidebar:"API",previous:{title:"EntityGenerator",permalink:"/docs/next/api/classes/entity_generator.EntityGenerator"},next:{title:"AbstractSqlDriver",permalink:"/docs/next/api/classes/knex.AbstractSqlDriver"}},k=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"connect",id:"connect",children:[]},{value:"execute",id:"execute",children:[]},{value:"getClientUrl",id:"getclienturl",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getPlatform",id:"getplatform",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"loadFile",id:"loadfile",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"setMetadata",id:"setmetadata",children:[]},{value:"setPlatform",id:"setplatform",children:[]},{value:"transactional",id:"transactional",children:[]}]}],d={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/knex"},"knex"),".AbstractSqlConnection"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"core.Connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AbstractSqlConnection"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AbstractSqlConnection"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.Configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/core.IDatabaseDriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"core.Connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core.ConnectionOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionOptions")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"read"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"write"'))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L23"},"packages/knex/src/AbstractSqlConnection.ts:23")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"begin"},"begin"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"begin"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]",">",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.ctx?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.isolationLevel?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enums/core.IsolationLevel"},(0,i.kt)("inlineCode",{parentName:"a"},"IsolationLevel")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]",">",">"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#begin"},"begin")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L60"},"packages/knex/src/AbstractSqlConnection.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"close"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"force?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Closes the database connection (aka disconnect)"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"force?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#close"},"close")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L32"},"packages/knex/src/AbstractSqlConnection.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"commit"},"commit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"commit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#commit"},"commit")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L76"},"packages/knex/src/AbstractSqlConnection.ts:76")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connect"},"connect"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"connect"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Establishes connection to database"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#connect"},"connect")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L36"},"packages/core/src/connections/Connection.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"queryOrKnex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/core.QueryResult"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryResult")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Object"),">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/core#entitydata"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityData")),"<",(0,i.kt)("a",{parentName:"td",href:"../modules/core#anyentity"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/core#entitydata"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityData")),"<",(0,i.kt)("a",{parentName:"td",href:"../modules/core#anyentity"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">","[][`EntityData`]","(../modules/core#entitydata)<",(0,i.kt)("a",{parentName:"td",href:"../modules/core#anyentity"},(0,i.kt)("inlineCode",{parentName:"a"},"AnyEntity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">","[]")))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"queryOrKnex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Raw"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"QueryBuilder"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"get"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"all"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"run"')),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'all'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#execute"},"execute")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L105"},"packages/knex/src/AbstractSqlConnection.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getclienturl"},"getClientUrl"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getClientUrl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#getclienturl"},"getClientUrl")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L87"},"packages/core/src/connections/Connection.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core.ConnectionConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionConfig"))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core.ConnectionConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionConfig"))),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#getconnectionoptions"},"getConnectionOptions")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L75"},"packages/core/src/connections/Connection.ts:75")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#getdefaultclienturl"},"getDefaultClientUrl")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L55"},"packages/core/src/connections/Connection.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getknex"},"getKnex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getKnex"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Knex"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">"),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Knex"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L28"},"packages/knex/src/AbstractSqlConnection.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getplatform"},"getPlatform"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPlatform"),"(): ",(0,i.kt)("a",{parentName:"p",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform"))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform"))),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#getplatform"},"getPlatform")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L102"},"packages/core/src/connections/Connection.ts:102")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isconnected"},"isConnected"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isConnected"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Are we connected to the database"),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#isconnected"},"isConnected")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L37"},"packages/knex/src/AbstractSqlConnection.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadfile"},"loadFile"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadFile"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Execute raw SQL queries from file"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L131"},"packages/knex/src/AbstractSqlConnection.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rollback"},"rollback"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rollback"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"overrides-6"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#rollback"},"rollback")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L91"},"packages/knex/src/AbstractSqlConnection.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmetadata"},"setMetadata"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setMetadata"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.MetadataStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataStorage")))))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#setmetadata"},"setMetadata")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L94"},"packages/core/src/connections/Connection.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setplatform"},"setPlatform"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setPlatform"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"platform")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform")))))),(0,i.kt)("h4",{id:"returns-14"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#setplatform"},"setPlatform")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/core/src/connections/Connection.ts#L98"},"packages/core/src/connections/Connection.ts:98")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactional"},"transactional"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"transactional"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"cb"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cb")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"trx"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]",">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.ctx?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Transaction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.isolationLevel?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enums/core.IsolationLevel"},(0,i.kt)("inlineCode",{parentName:"a"},"IsolationLevel")))))),(0,i.kt)("h4",{id:"returns-15"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"overrides-7"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Connection"},"Connection"),".",(0,i.kt)("a",{parentName:"p",href:"core.Connection#transactional"},"transactional")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/knex/src/AbstractSqlConnection.ts#L46"},"packages/knex/src/AbstractSqlConnection.ts:46")))}m.isMDXComponent=!0}}]);