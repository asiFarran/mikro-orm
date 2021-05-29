(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82734],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54452:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.index",id:"version-4.5/api/interfaces/knex.index",isDocsHomePage:!1,title:"Interface: Index",description:"knex.Index",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.index.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.index",permalink:"/docs/api/interfaces/knex.index",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1622275793,formattedLastUpdatedAt:"5/29/2021",sidebar_label:"Index",frontMatter:{id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: IQueryBuilder<T\\>",permalink:"/docs/api/interfaces/knex.iquerybuilder"},next:{title:"Interface: IndexDef",permalink:"/docs/api/interfaces/knex.indexdef"}},c=[{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"composite",id:"composite",children:[]},{value:"keyName",id:"keyname",children:[]},{value:"primary",id:"primary",children:[]},{value:"unique",id:"unique",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".Index"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"columnname"},"columnName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"columnName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L54"},"packages/knex/src/typings.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"composite"},"composite"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"composite"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L58"},"packages/knex/src/typings.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keyname"},"keyName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"keyName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L55"},"packages/knex/src/typings.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"primary"},"primary"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"primary"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L57"},"packages/knex/src/typings.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unique"},"unique"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"unique"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L56"},"packages/knex/src/typings.ts:56")))}s.isMDXComponent=!0}}]);