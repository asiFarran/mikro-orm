(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39915],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return m},kt:function(){return k}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),g=p(r),k=a,u=g["".concat(s,".").concat(k)]||g[k]||d[k]||i;return r?n.createElement(u,o(o({ref:e},m),{},{components:r})):n.createElement(u,o({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},41273:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"migrations.MigrationStorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/migrations.MigrationStorage",id:"api/classes/migrations.MigrationStorage",isDocsHomePage:!1,title:"Class: MigrationStorage",description:"migrations.MigrationStorage",source:"@site/docs/api/classes/migrations.MigrationStorage.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.MigrationStorage",permalink:"/docs/next/api/classes/migrations.MigrationStorage",editUrl:null,tags:[],version:"current",frontMatter:{id:"migrations.MigrationStorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",custom_edit_url:null},sidebar:"API",previous:{title:"MigrationRunner",permalink:"/docs/next/api/classes/migrations.MigrationRunner"},next:{title:"Migrator",permalink:"/docs/next/api/classes/migrations.Migrator"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ensureTable",id:"ensuretable",children:[]},{value:"executed",id:"executed",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"logMigration",id:"logmigration",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unlogMigration",id:"unlogmigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],m={toc:p};function d(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/migrations"},"migrations"),".MigrationStorage"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new MigrationStorage"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"driver"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"driver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"knex.AbstractSqlDriver"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"knex.AbstractSqlConnection"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractSqlConnection")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/core#migrationsoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationsOptions")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L12"},"packages/migrations/src/MigrationStorage.ts:12")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"ensuretable"},"ensureTable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"ensureTable"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L38"},"packages/migrations/src/MigrationStorage.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"executed"},"executed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"executed"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L15"},"packages/migrations/src/MigrationStorage.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../modules/migrations#migrationrow"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"../modules/migrations#migrationrow"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L28"},"packages/migrations/src/MigrationStorage.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logmigration"},"logMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"logMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L20"},"packages/migrations/src/MigrationStorage.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmastermigration"},"setMasterMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setMasterMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"trx"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"trx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L52"},"packages/migrations/src/MigrationStorage.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unlogmigration"},"unlogMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unlogMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L24"},"packages/migrations/src/MigrationStorage.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/ef9f2a3/packages/migrations/src/MigrationStorage.ts#L56"},"packages/migrations/src/MigrationStorage.ts:56")))}d.isMDXComponent=!0}}]);