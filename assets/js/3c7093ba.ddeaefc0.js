(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),s=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,d=l["".concat(a,".").concat(m)]||l[m]||u[m]||o;return t?c.a.createElement(d,i(i({ref:n},b),{},{components:t})):c.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var b=2;b<o;b++)a[b]=t[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},329:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),c=t(7),o=(t(0),t(1253)),a={id:"core.connectionconfig",title:"Interface: ConnectionConfig",sidebar_label:"ConnectionConfig",hide_title:!0},i={unversionedId:"api/interfaces/core.connectionconfig",id:"api/interfaces/core.connectionconfig",isDocsHomePage:!1,title:"Interface: ConnectionConfig",description:"Interface: ConnectionConfig",source:"@site/docs/api/interfaces/core.connectionconfig.md",slug:"/api/interfaces/core.connectionconfig",permalink:"/docs/next/api/interfaces/core.connectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/core.connectionconfig.md",version:"current",sidebar_label:"ConnectionConfig",sidebar:"API",previous:{title:"Interface: CacheAdapter",permalink:"/docs/next/api/interfaces/core.cacheadapter"},next:{title:"Interface: ConnectionOptions",permalink:"/docs/next/api/interfaces/core.connectionoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"host",id:"host",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"user",id:"user",children:[]}]}],b={toc:p};function s(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-connectionconfig"},"Interface: ConnectionConfig"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ConnectionConfig"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ConnectionConfig"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"database"},"database"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"database"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," | ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dac1a8/packages/core/src/connections/Connection.ts#L138"}),"packages/core/src/connections/Connection.ts:138")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"host"},"host"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"host"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," | ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dac1a8/packages/core/src/connections/Connection.ts#L134"}),"packages/core/src/connections/Connection.ts:134")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"password"},"password"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"password"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," | ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dac1a8/packages/core/src/connections/Connection.ts#L137"}),"packages/core/src/connections/Connection.ts:137")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"port"},"port"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"port"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," | ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dac1a8/packages/core/src/connections/Connection.ts#L135"}),"packages/core/src/connections/Connection.ts:135")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"user"},"user"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"user"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," | ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dac1a8/packages/core/src/connections/Connection.ts#L136"}),"packages/core/src/connections/Connection.ts:136")))}s.isMDXComponent=!0}}]);