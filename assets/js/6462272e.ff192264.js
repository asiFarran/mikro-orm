(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),s=r,O=d["".concat(b,".").concat(s)]||d[s]||m[s]||c;return a?n.a.createElement(O,i(i({ref:t},p),{},{components:a})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var p=2;p<c;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},433:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),c=(a(0),a(1026)),b={id:"reflection.tsmorphmetadataprovider",title:"Class: TsMorphMetadataProvider",sidebar_label:"TsMorphMetadataProvider",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/reflection.tsmorphmetadataprovider",id:"api/classes/reflection.tsmorphmetadataprovider",isDocsHomePage:!1,title:"Class: TsMorphMetadataProvider",description:"Class: TsMorphMetadataProvider",source:"@site/docs/api/classes/reflection.tsmorphmetadataprovider.md",slug:"/api/classes/reflection.tsmorphmetadataprovider",permalink:"/docs/next/api/classes/reflection.tsmorphmetadataprovider",editUrl:null,version:"current",sidebar_label:"TsMorphMetadataProvider",sidebar:"API",previous:{title:"Class: Migrator",permalink:"/docs/next/api/classes/migrations.migrator"},next:{title:"Interface: AssignOptions",permalink:"/docs/next/api/interfaces/core.assignoptions"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getExistingSourceFile",id:"getexistingsourcefile",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],p={toc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-tsmorphmetadataprovider"},"Class: TsMorphMetadataProvider"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/reflection"},"reflection"),".TsMorphMetadataProvider"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},Object(c.b)("em",{parentName:"a"},"MetadataProvider"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"TsMorphMetadataProvider")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new TsMorphMetadataProvider"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iconfiguration"},Object(c.b)("em",{parentName:"a"},"IConfiguration")),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"},Object(c.b)("em",{parentName:"a"},"TsMorphMetadataProvider"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.iconfiguration"},Object(c.b)("em",{parentName:"a"},"IConfiguration")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"},Object(c.b)("em",{parentName:"a"},"TsMorphMetadataProvider"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/5c79e34/packages/core/src/metadata/MetadataProvider.ts#L9"},"packages/core/src/metadata/MetadataProvider.ts:9")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getexistingsourcefile"},"getExistingSourceFile"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getExistingSourceFile"),"(",Object(c.b)("inlineCode",{parentName:"p"},"path"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"ext?"),": ",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(c.b)("em",{parentName:"p"},"boolean"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<SourceFile",">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"path")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:"left"},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"ext?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:"left"},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"validate")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean")),Object(c.b)("td",{parentName:"tr",align:"left"},"true")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<SourceFile",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/5c79e34/packages/reflection/src/TsMorphMetadataProvider.ts#L26"},"packages/reflection/src/TsMorphMetadataProvider.ts:26")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Overrides: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/5c79e34/packages/reflection/src/TsMorphMetadataProvider.ts#L18"},"packages/reflection/src/TsMorphMetadataProvider.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadfromcache"},"loadFromCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadFromCache"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"cache"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">","): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Re-hydrates missing attributes like ",Object(c.b)("inlineCode",{parentName:"p"},"customType")," (functions/instances are lost when caching to JSON)"),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"cache")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Overrides: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/5c79e34/packages/reflection/src/TsMorphMetadataProvider.ts#L39"},"packages/reflection/src/TsMorphMetadataProvider.ts:39")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usecache"},"useCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"useCache"),"(): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Overrides: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/5c79e34/packages/reflection/src/TsMorphMetadataProvider.ts#L14"},"packages/reflection/src/TsMorphMetadataProvider.ts:14")))}l.isMDXComponent=!0}}]);