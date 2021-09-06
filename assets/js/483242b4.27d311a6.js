(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33616],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return c}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),c=o,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32107:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),a={title:"Upgrading from v4 to v5"},p=void 0,l={unversionedId:"upgrading-v4-to-v5",id:"upgrading-v4-to-v5",isDocsHomePage:!1,title:"Upgrading from v4 to v5",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/docs/upgrading-v4-to-v5.md",sourceDirName:".",slug:"/upgrading-v4-to-v5",permalink:"/docs/next/upgrading-v4-to-v5",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/upgrading-v4-to-v5.md",tags:[],version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1630950811,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Upgrading from v4 to v5"}},d=[{value:"Node 12.17.0+ (or 13.10.0+) required",id:"node-12170-or-13100-required",children:[]},{value:"TypeScript 4.1+ required",id:"typescript-41-required",children:[]},{value:"Options parameters",id:"options-parameters",children:[]},{value:"Type-safe populate parameter with dot notation",id:"type-safe-populate-parameter-with-dot-notation",children:[]},{value:"Type-safe fields parameter",id:"type-safe-fields-parameter",children:[]},{value:"Removed <code>@Repository()</code> decorator",id:"removed-repository-decorator",children:[]}],s={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed.")),(0,i.kt)("h2",{id:"node-12170-or-13100-required"},"Node 12.17.0+ (or 13.10.0+) required"),(0,i.kt)("p",null,"Support for older node versions was dropped. "),(0,i.kt)("h2",{id:"typescript-41-required"},"TypeScript 4.1+ required"),(0,i.kt)("p",null,"Support for older TypeScript versions was dropped. "),(0,i.kt)("h2",{id:"options-parameters"},"Options parameters"),(0,i.kt)("p",null,"Previously many methods had many (often boolean) parameters, in v5 such methods are\nrefactored to use options object instead to improve readability. Some methods offered\nboth signatures - the multi parameter signatures are now removed."),(0,i.kt)("p",null,"List of such methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"em.find()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"em.findOne()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"em.findOneOrFail()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"em.findAndCount()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"em.merge()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"em.fork()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.find()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.findOne()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.findOneOrFail()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.findAndCount()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.findAll()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.merge()"))),(0,i.kt)("h2",{id:"type-safe-populate-parameter-with-dot-notation"},"Type-safe populate parameter with dot notation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions.populate")," parameter is now strictly typed and supports only array of strings or a boolean.\nObject way is no longer supported. To set loading strategy, use ",(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions.strategy"),".\nThe return type of all such methods now returns properly typed ",(0,i.kt)("inlineCode",{parentName:"p"},"Loaded")," response. "),(0,i.kt)("h2",{id:"type-safe-fields-parameter"},"Type-safe fields parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions.fields")," parameter is now strictly typed also for the dot notation."),(0,i.kt)("h2",{id:"removed-repository-decorator"},"Removed ",(0,i.kt)("inlineCode",{parentName:"h2"},"@Repository()")," decorator"),(0,i.kt)("p",null,"The decorator was problematic as it could only work properly it the file was required\nsoon enough - before the ORM initialization, otherwise the repository would not be\nregistered at all."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity({ customRepository: () => CustomRepository })")," in the entity definition\ninstead."))}u.isMDXComponent=!0}}]);