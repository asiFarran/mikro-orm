(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66072],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96901:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={title:"Schema Generator"},l=void 0,s={unversionedId:"schema-generator",id:"version-4.5/schema-generator",isDocsHomePage:!1,title:"Schema Generator",description:"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,",source:"@site/versioned_docs/version-4.5/schema-generator.md",sourceDirName:".",slug:"/schema-generator",permalink:"/docs/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/schema-generator.md",version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1627862745,formattedLastUpdatedAt:"8/2/2021",frontMatter:{title:"Schema Generator"},sidebar:"version-4.5/docs",previous:{title:"Metadata Cache",permalink:"/docs/metadata-cache"},next:{title:"Entity Generator",permalink:"/docs/entity-generator"}},c=[{value:"Using SchemaGenerator programmatically",id:"using-schemagenerator-programmatically",children:[]},{value:"Limitations of SQLite",id:"limitations-of-sqlite",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SchemaGenerator can do harm to your database. It will drop or alter tables, indexes,\nsequences and such. Please use this tool with caution in development and not on a\nproduction server. It is meant for helping you develop your Database Schema, but NOT\nwith migrating schema from A to B in production. A safe approach would be generating\nthe SQL on development server and saving it into SQL Migration files that are executed\nmanually on the production server.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SchemaTool assumes your project uses the given database on its own. Update and Drop\ncommands will mess with other tables if they are not related to the current project\nthat is using MikroORM. Please be careful!")),(0,o.kt)("p",null,"To generate schema from your entity metadata, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," helper. "),(0,o.kt)("p",null,"You can use it via CLI: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm schema:create --dump   # Dumps create schema SQL\nnpx mikro-orm schema:update --dump   # Dumps update schema SQL\nnpx mikro-orm schema:drop --dump     # Dumps drop schema SQL\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"--run")," flag to fire all queries, but be careful as it might break your\ndatabase. Be sure to always check the generated SQL first before executing. Do not use\n",(0,o.kt)("inlineCode",{parentName:"p"},"--run")," flag in production! ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema:create")," will automatically create the database if it does not exist. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema:update")," drops all unknown tables by default, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-drop-tables"),"\nto get around it. There is also ",(0,o.kt)("inlineCode",{parentName:"p"},"--safe")," flag that will disable both table dropping as\nwell as column dropping. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema:drop")," will by default drop all database tables. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--drop-db")," flag to drop\nthe whole database instead. "),(0,o.kt)("h2",{id:"using-schemagenerator-programmatically"},"Using SchemaGenerator programmatically"),(0,o.kt)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./create-schema.ts"',title:'"./create-schema.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getSchemaGenerator();\n\n  const dropDump = await generator.getDropSchemaSQL();\n  console.log(dropDump);\n\n  const createDump = await generator.getCreateSchemaSQL();\n  console.log(createDump);\n\n  const updateDump = await generator.getUpdateSchemaSQL();\n  console.log(updateDump);\n\n  // there is also `generate()` method that returns drop + create queries\n  const dropAndCreateDump = await generator.generate();\n  console.log(dropAndCreateDump);\n\n  // or you can run those queries directly, but be sure to check them first!\n  await generator.dropSchema();\n  await generator.createSchema();\n  await generator.updateSchema();\n\n  await orm.close(true);\n})();\n")),(0,o.kt)("p",null,"Then run this script via ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node create-schema\n")),(0,o.kt)("h2",{id:"limitations-of-sqlite"},"Limitations of SQLite"),(0,o.kt)("p",null,"There are limitations of SQLite database because of which it behaves differently\nthan other SQL drivers. Namely, it is not possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create foreign key constraints when altering columns"),(0,o.kt)("li",{parentName:"ul"},"create empty tables without columns"),(0,o.kt)("li",{parentName:"ul"},"alter column requires nullability")),(0,o.kt)("p",null,"Because of this, you can end up with different schema with SQLite, so it is not\nsuggested to use SQLite for integration tests of your application."))}p.isMDXComponent=!0}}]);