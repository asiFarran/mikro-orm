(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35157],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=m(a),k=n,f=s["".concat(d,".").concat(k)]||s[k]||c[k]||i;return a?r.createElement(f,p(p({ref:t},l),{},{components:a})):r.createElement(f,p({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},13210:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),p={id:"core.reflectmetadataprovider",title:"Class: ReflectMetadataProvider",sidebar_label:"ReflectMetadataProvider",custom_edit_url:null,hide_title:!0},o="Class: ReflectMetadataProvider",d={unversionedId:"api/classes/core.reflectmetadataprovider",id:"version-4.5/api/classes/core.reflectmetadataprovider",isDocsHomePage:!1,title:"Class: ReflectMetadataProvider",description:"core.ReflectMetadataProvider",source:"@site/versioned_docs/version-4.5/api/classes/core.reflectmetadataprovider.md",sourceDirName:"api/classes",slug:"/api/classes/core.reflectmetadataprovider",permalink:"/docs/api/classes/core.reflectmetadataprovider",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1629471659,formattedLastUpdatedAt:"8/20/2021",frontMatter:{id:"core.reflectmetadataprovider",title:"Class: ReflectMetadataProvider",sidebar_label:"ReflectMetadataProvider",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Reference",permalink:"/docs/api/classes/core.reference"},next:{title:"RequestContext",permalink:"/docs/api/classes/core.requestcontext"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]}]},{value:"Methods",id:"methods",children:[{value:"initProperties",id:"initproperties",children:[]},{value:"initPropertyType",id:"initpropertytype",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],l={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-reflectmetadataprovider"},"Class: ReflectMetadataProvider"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ReflectMetadataProvider"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},(0,i.kt)("em",{parentName:"a"},"MetadataProvider"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"ReflectMetadataProvider")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new ReflectMetadataProvider"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iconfiguration"},(0,i.kt)("em",{parentName:"a"},"IConfiguration")),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reflectmetadataprovider"},(0,i.kt)("em",{parentName:"a"},"ReflectMetadataProvider"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.iconfiguration"},(0,i.kt)("em",{parentName:"a"},"IConfiguration")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reflectmetadataprovider"},(0,i.kt)("em",{parentName:"a"},"ReflectMetadataProvider"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataProvider.ts#L9"},"packages/core/src/metadata/MetadataProvider.ts:9")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.iconfiguration"},(0,i.kt)("em",{parentName:"a"},"IConfiguration"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},"MetadataProvider"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider#config"},"config")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"initproperties"},"initProperties"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected"),(0,i.kt)("strong",{parentName:"p"},"initProperties"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",") => ",(0,i.kt)("em",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">","): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"prop"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",") => ",(0,i.kt)("em",{parentName:"td"},"void")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"Promise"),"<void",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataProvider.ts#L23"},"packages/core/src/metadata/MetadataProvider.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initpropertytype"},"initPropertyType"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected"),(0,i.kt)("strong",{parentName:"p"},"initPropertyType"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">","): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/ReflectMetadataProvider.ts#L12"},"packages/core/src/metadata/ReflectMetadataProvider.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadEntityMetadata"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/ReflectMetadataProvider.ts#L8"},"packages/core/src/metadata/ReflectMetadataProvider.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadfromcache"},"loadFromCache"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadFromCache"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">","): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataProvider.ts#L15"},"packages/core/src/metadata/MetadataProvider.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usecache"},"useCache"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useCache"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataProvider.ts#L19"},"packages/core/src/metadata/MetadataProvider.ts:19")))}c.isMDXComponent=!0}}]);