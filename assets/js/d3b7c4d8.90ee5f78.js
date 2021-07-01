(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76189],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74896:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=t(74034),i=t(79973),a=(t(67294),t(3905)),o={id:"knex.knex-1.migratorconfig",title:"Interface: MigratorConfig",sidebar_label:"MigratorConfig",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.migratorconfig",id:"version-4.5/api/interfaces/knex.knex-1.migratorconfig",isDocsHomePage:!1,title:"Interface: MigratorConfig",description:"knex.Knex.MigratorConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migratorconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.migratorconfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1625124647,formattedLastUpdatedAt:"7/1/2021",sidebar_label:"MigratorConfig",frontMatter:{id:"knex.knex-1.migratorconfig",title:"Interface: MigratorConfig",sidebar_label:"MigratorConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: Migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator"},next:{title:"Interface: MsSqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig"}},s=[{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"directory",id:"directory",children:[]},{value:"disableMigrationsListValidation",id:"disablemigrationslistvalidation",children:[]},{value:"disableTransactions",id:"disabletransactions",children:[]},{value:"extension",id:"extension",children:[]},{value:"loadExtensions",id:"loadextensions",children:[]},{value:"migrationSource",id:"migrationsource",children:[]},{value:"schemaName",id:"schemaname",children:[]},{value:"sortDirsSeparately",id:"sortdirsseparately",children:[]},{value:"stub",id:"stub",children:[]},{value:"tableName",id:"tablename",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MigratorConfig"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"database"},"database"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"database"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2121"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"directory"},"directory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"directory"),": ",(0,a.kt)("em",{parentName:"p"},"string")," ","|"," readonly ",(0,a.kt)("em",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2122"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disablemigrationslistvalidation"},"disableMigrationsListValidation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"disableMigrationsListValidation"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2128"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disabletransactions"},"disableTransactions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"disableTransactions"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2127"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2123"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadextensions"},"loadExtensions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"loadExtensions"),": readonly ",(0,a.kt)("em",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2130"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"migrationsource"},"migrationSource"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"migrationSource"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migrationsource"},(0,a.kt)("em",{parentName:"a"},"MigrationSource")),"<unknown",">"),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2131"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"schemaname"},"schemaName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"schemaName"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2126"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sortdirsseparately"},"sortDirsSeparately"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"sortDirsSeparately"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2129"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stub"},"stub"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stub"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2124"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tablename"},"tableName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tableName"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2125"))}d.isMDXComponent=!0}}]);