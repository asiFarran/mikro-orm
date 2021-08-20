(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68746],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62137:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o={title:"Configuration"},l=void 0,s={unversionedId:"configuration",id:"version-4.2/configuration",isDocsHomePage:!1,title:"Configuration",description:"Entity Discovery",source:"@site/versioned_docs/version-4.2/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/4.2/configuration",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/configuration.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1629471659,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Configuration"},sidebar:"version-4.2/docs",previous:{title:"Decorators",permalink:"/docs/4.2/decorators"},next:{title:"Usage with SQL Drivers",permalink:"/docs/4.2/usage-with-sql"}},p=[{value:"Entity Discovery",id:"entity-discovery",children:[]},{value:"Driver",id:"driver",children:[]},{value:"Connection",id:"connection",children:[]},{value:"Naming Strategy",id:"naming-strategy",children:[]},{value:"Auto-join of 1:1 owners",id:"auto-join-of-11-owners",children:[]},{value:"Propagation of 1:1 and m:1 owners",id:"propagation-of-11-and-m1-owners",children:[]},{value:"Forcing UTC Timezone",id:"forcing-utc-timezone",children:[]},{value:"Custom Hydrator",id:"custom-hydrator",children:[]},{value:"Custom Repository",id:"custom-repository",children:[]},{value:"Strict Mode and property validation",id:"strict-mode-and-property-validation",children:[]},{value:"Debugging &amp; Logging",id:"debugging--logging",children:[]},{value:"Custom Fail Handler",id:"custom-fail-handler",children:[]},{value:"Migrations",id:"migrations",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Importing database dump files (MySQL and Postgress)",id:"importing-database-dump-files-mysql-and-postgress",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"entity-discovery"},"Entity Discovery"),(0,i.kt)("p",null,"You can either provide array of entity instances via ",(0,i.kt)("inlineCode",{parentName:"p"},"entities"),", or let the ORM look up your\nentities in selected folders. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  entities: [Author, Book, Publisher, BookTag],\n});\n")),(0,i.kt)("p",null,"We can also use folder based discovery by providing list of paths to the entities\nwe want to discover (globs are supported as well). This way we also need to specify\n",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesTs"),", where we point the paths to the TS source files instead of the JS\ncompiled files (see more at ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/metadata-providers"},"Metadata Providers"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesTs")," option is used when running the app via ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node"),", as the ORM\nneeds to discover the TS files. Always specify this option if you use folder/file\nbased discovery. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  entities: ['./dist/modules/users/entities', './dist/modules/projects/entities'],\n  entitiesTs: ['./src/modules/users/entities', './src/modules/projects/entities'],\n  // optionally you can override the base directory (defaults to `process.cwd()`)\n  baseDir: process.cwd(),\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Be careful when overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseDir")," with dynamic values like ",(0,i.kt)("inlineCode",{parentName:"p"},"__dirname"),",\nas you can end up with valid paths from ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node"),", but invalid paths from ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),".\nIdeally you should keep the default of ",(0,i.kt)("inlineCode",{parentName:"p"},"process.cwd()")," there to always have the\nsame base path regardless of how you run the app.")),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider")," is used that leverages the ",(0,i.kt)("inlineCode",{parentName:"p"},"reflect-metadata"),".\nYou can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider")," by installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/reflection"),".\nThis provider will analyse your entity source files (or ",(0,i.kt)("inlineCode",{parentName:"p"},".d.ts")," type definition files).\nIf you aim to use plain JavaScript instead of TypeScript, use ",(0,i.kt)("inlineCode",{parentName:"p"},"EntitySchema")," or\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScriptMetadataProvider"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also implement your own metadata provider and use it instead. To do so, extend the\n",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataProvider")," class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MikroORM } from '@mikro-orm/core';\nimport { TsMorphMetadataProvider } from '@mikro-orm/reflection';\n\nMikroORM.init({\n  metadataProvider: TsMorphMetadataProvider,\n});\n")),(0,i.kt)("p",null,"There are also some additional options how you can adjust the discovery process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  discovery: {\n    warnWhenNoEntities: false, // by default, discovery throws when no entity is processed\n    requireEntitiesArray: true, // force usage of class refrences in `entities` instead of paths\n    alwaysAnalyseProperties: false, // do not analyse properties when not needed (with ts-morph)\n  },\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you disable ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery.alwaysAnalyseProperties")," option, you will need to explicitly\nprovide ",(0,i.kt)("inlineCode",{parentName:"p"},"nullable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wrappedReference")," parameters (where applicable).")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/metadata-providers"},"Metadata Providers")," sections."),(0,i.kt)("h2",{id:"driver"},"Driver"),(0,i.kt)("p",null,"To select driver, you can either use ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," option, or provide the driver class reference."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"driver name"),(0,i.kt)("th",{parentName:"tr",align:null},"dependency"),(0,i.kt)("th",{parentName:"tr",align:null},"note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mongo")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MongoDriver")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mongodb^3.3.4")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MySqlDriver")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql2^2.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"compatible with MariaDB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mariadb")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MariaDbDriver")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mariadb^2.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"compatible with MySQL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postgresql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PostgreSqlDriver")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pg^7.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlite")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SqliteDriver")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlite3^4.0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Driver and connection implementations are not directly exported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," module.\nYou can import them from the driver packages (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"import { PostgreSqlDriver } from '@mikro-orm/postgresql'"),").")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql2"),") via ",(0,i.kt)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MySqlDriver } from '@mikro-orm/mysql';\n\nMikroORM.init({\n  driver: MySqlDriver,\n  driverOptions: { connection: { timezone: '+02:00' } },\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From v3.5.1 you can also set the timezone directly in the ORM configuration:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  type: 'mysql',\n  timezone: '+02:00',\n});\n"))),(0,i.kt)("h2",{id:"connection"},"Connection"),(0,i.kt)("p",null,"Each platform (driver) provides default connection string, you can override it as a whole\nthrough ",(0,i.kt)("inlineCode",{parentName:"p"},"clientUrl"),", or partially through one of following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ConnectionOptions {\n  dbName?: string;\n  name?: string; // for logging only (when replicas are used)\n  clientUrl?: string;\n  host?: string;\n  port?: number;\n  user?: string;\n  password?: string;\n  charset?: string;\n  multipleStatements?: boolean; // for mysql driver\n  pool?: PoolConfig; // provided by `knex`\n}\n")),(0,i.kt)("p",null,"Following table shows default client connection strings:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"default connection url"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mongo")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mongodb://127.0.0.1:27017"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql://root@127.0.0.1:3306"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mariadb")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql://root@127.0.0.1:3306"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postgresql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"postgresql://postgres@127.0.0.1:5432"))))),(0,i.kt)("p",null,"To set up read replicas, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," option. You can provide only those parts of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionOptions")," interface, they will be used to override the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," connection options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  type: 'mysql',\n  dbName: 'my_db_name',\n  user: 'write-user',\n  host: 'master.db.example.com',\n  port: 3306,\n  replicas: [\n    { user: 'read-user-1', host: 'read-1.db.example.com', port: 3307 },\n    { user: 'read-user-2', host: 'read-2.db.example.com', port: 3308 },\n    { user: 'read-user-3', host: 'read-3.db.example.com', port: 3309 },\n  ],\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/installation"},"Installation")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/read-connections"},"Read Connections")," sections."),(0,i.kt)("h2",{id:"naming-strategy"},"Naming Strategy"),(0,i.kt)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 3 basic naming strategies you can choose from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntityCaseNamingStrategy")," - uses unchanged entity and property names")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also define your own custom ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  namingStrategy: EntityCaseNamingStrategy,\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/naming-strategy"},"Naming Strategy")," section."),(0,i.kt)("h2",{id:"auto-join-of-11-owners"},"Auto-join of 1:1 owners"),(0,i.kt)("p",null,"By default, owning side of 1:1 relation will be auto-joined when you select the inverse side\nso we can have the reference to it. You can disable this behaviour via ",(0,i.kt)("inlineCode",{parentName:"p"},"autoJoinOneToOneOwner"),"\nconfiguration toggle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  autoJoinOneToOneOwner: false,\n});\n")),(0,i.kt)("h2",{id:"propagation-of-11-and-m1-owners"},"Propagation of 1:1 and m:1 owners"),(0,i.kt)("p",null,"MikroORM defines getter and setter for every owning side of m:1 and 1:1 relation. This is\nthen used for propagation of changes to the inverse side of bi-directional relations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author('n', 'e');\nconst book = new Book('t');\nbook.author = author;\nconsole.log(author.books.contains(book)); // true\n")),(0,i.kt)("p",null,"You can disable this behaviour via ",(0,i.kt)("inlineCode",{parentName:"p"},"propagateToOneOwner")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  propagateToOneOwner: false,\n});\n")),(0,i.kt)("h2",{id:"forcing-utc-timezone"},"Forcing UTC Timezone"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"forceUtcTimezone")," option to force the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),"s to be saved in UTC in datetime columns\nwithout timezone. It works for MySQL (",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," type) and PostgreSQL (",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," type).\nSQLite does this by default. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  forceUtcTimezone: true,\n});\n")),(0,i.kt)("h2",{id:"custom-hydrator"},"Custom Hydrator"),(0,i.kt)("p",null,"Hydrator is responsible for assigning values from the database to entities.\nYou can implement your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Hydrator")," (by extending the abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"Hydrator")," class):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  hydrator: MyCustomHydrator,\n});\n")),(0,i.kt)("h2",{id:"custom-repository"},"Custom Repository"),(0,i.kt)("p",null,"You can also register custom base repository (for all entities where you do not specify\n",(0,i.kt)("inlineCode",{parentName:"p"},"customRepository"),") globally:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can still use entity specific repositories in combination with global base repository.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  entityRepository: CustomBaseRepository,\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/repositories"},"Repositories")," section."),(0,i.kt)("h2",{id:"strict-mode-and-property-validation"},"Strict Mode and property validation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since v4.0.3 the validation needs to be explicitly enabled via ",(0,i.kt)("inlineCode",{parentName:"p"},"validate: true"),".\nIt has performance implications and usually should not be needed, as long as\nyou don't modify your entities via ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MirkoORM")," will validate your properties before actual persisting happens. It will try to fix wrong\ndata types for you automatically. If automatic conversion fails, it will throw an error. You can\nenable strict mode to disable this feature and let ORM throw errors instead. Validation is triggered\nwhen persisting the entity. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  validate: true,\n  strict: true,\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/property-validation"},"Property Validation")," section."),(0,i.kt)("h2",{id:"debugging--logging"},"Debugging & Logging"),(0,i.kt)("p",null,"You can enable logging with ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," option. Either set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to log everything, or\nprovide array of ",(0,i.kt)("inlineCode",{parentName:"p"},"'query' | 'query-params' | 'discovery' | 'info'")," namespaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  logger: (message: string) => myLogger.info(message), // defaults to `console.log()`\n  debug: true, // or provide array like `['query', 'query-params']`\n  highlight: false, // defaults to true\n  highlightTheme: { ... }, // you can also provide custom highlight there\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/debugging"},"Debugging")," section."),(0,i.kt)("h2",{id:"custom-fail-handler"},"Custom Fail Handler"),(0,i.kt)("p",null,"When no entity is found during ",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOneOrFail()")," call, ",(0,i.kt)("inlineCode",{parentName:"p"},"new Error()")," will be thrown.\nYou can customize how the ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," instance is created via ",(0,i.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  findOneOrFailHandler: (entityName: string, where: Dictionary | IPrimaryKey) => {\n    return new NotFoundException(`${entityName} not found!`);\n  },\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/entity-manager#handling-not-found-entities"},"Entity Manager")," docs."),(0,i.kt)("h2",{id:"migrations"},"Migrations"),(0,i.kt)("p",null,"Under the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations")," namespace, you can adjust how the integrated migrations support works.\nFollowing example shows all possible options and their defaults:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  migrations: {\n    tableName: 'mikro_orm_migrations', // migrations table name\n    path: process.cwd() + '/migrations', // path to folder with migration files\n    pattern: /^[\\w-]+\\d+\\.ts$/, // how to match migration files\n    transactional: true, // run each migration inside transaction\n    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)\n    allOrNothing: true, // run all migrations in current batch in master transaction\n    emit: 'ts', // migration generation mode\n  },\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/migrations"},"Migrations")," section."),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"By default, metadata discovery results are cached. You can either disable caching, or adjust\nhow it works. Following example shows all possible options and their defaults:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  cache: {\n    enabled: true,\n    pretty: false, // allows to pretty print the JSON cache\n    adapter: FileCacheAdapter, // you can provide your own implementation here, e.g. with redis\n    options: { cacheDir: process.cwd() + '/temp' }, // options will be passed to the constructor of `adapter` class\n  },\n});\n")),(0,i.kt)("p",null,"Read more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/metadata-cache"},"Metadata Cache")," section."),(0,i.kt)("h2",{id:"importing-database-dump-files-mysql-and-postgress"},"Importing database dump files (MySQL and Postgress)"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mikro-orm database:import db-file.sql")," you can import a database dump file. This can be useful when kickstarting an application or could be used in tests to reset the database. Database dumps often have queries spread over multiple lines and therefore you need the following configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  ...\n  multipleStatements: true,\n  ...\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This should be disabled in production environments for added security.")))}u.isMDXComponent=!0}}]);