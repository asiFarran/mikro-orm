(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1253:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),m=function(e){var r=c.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=m(e.components);return c.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},l=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=m(t),l=n,d=s["".concat(a,".").concat(l)]||s[l]||u[l]||o;return t?c.a.createElement(d,i(i({ref:r},p),{},{components:t})):c.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=l;var i={};for(var b in r)hasOwnProperty.call(r,b)&&(i[b]=r[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},275:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return b})),t.d(r,"default",(function(){return m}));var n=t(3),c=t(7),o=(t(0),t(1253)),a={id:"core.referencetype",title:"Enumeration: ReferenceType",sidebar_label:"ReferenceType",hide_title:!0},i={unversionedId:"api/enums/core.referencetype",id:"version-4.4/api/enums/core.referencetype",isDocsHomePage:!1,title:"Enumeration: ReferenceType",description:"Enumeration: ReferenceType",source:"@site/versioned_docs/version-4.4/api/enums/core.referencetype.md",slug:"/api/enums/core.referencetype",permalink:"/docs/api/enums/core.referencetype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/core.referencetype.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611683442,sidebar_label:"ReferenceType",sidebar:"version-4.4/API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/api/enums/core.queryordernumeric"},next:{title:"Enumeration: QueryType",permalink:"/docs/api/enums/knex.querytype"}},b=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"EMBEDDED",id:"embedded",children:[]},{value:"MANY_TO_MANY",id:"many_to_many",children:[]},{value:"MANY_TO_ONE",id:"many_to_one",children:[]},{value:"ONE_TO_MANY",id:"one_to_many",children:[]},{value:"ONE_TO_ONE",id:"one_to_one",children:[]},{value:"SCALAR",id:"scalar",children:[]}]}],p={toc:b};function m(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"enumeration-referencetype"},"Enumeration: ReferenceType"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".ReferenceType"),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"embedded"},"EMBEDDED"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"EMBEDDED"),': = "embedded"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L74"}),"packages/core/src/enums.ts:74")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"many_to_many"},"MANY","_","TO","_","MANY"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"MANY","_","TO","_","MANY"),': = "m:n"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L73"}),"packages/core/src/enums.ts:73")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"many_to_one"},"MANY","_","TO","_","ONE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"MANY","_","TO","_","ONE"),': = "m:1"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L72"}),"packages/core/src/enums.ts:72")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"one_to_many"},"ONE","_","TO","_","MANY"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"ONE","_","TO","_","MANY"),': = "1:m"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L71"}),"packages/core/src/enums.ts:71")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"one_to_one"},"ONE","_","TO","_","ONE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"ONE","_","TO","_","ONE"),': = "1:1"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L70"}),"packages/core/src/enums.ts:70")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scalar"},"SCALAR"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"SCALAR"),': = "scalar"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/enums.ts#L69"}),"packages/core/src/enums.ts:69")))}m.isMDXComponent=!0}}]);