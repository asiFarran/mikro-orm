(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4590],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return c},kt:function(){return g}});var i=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,i,a=function(t,n){if(null==t)return{};var e,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=i.createContext({}),m=function(t){var n=i.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},c=function(t){var n=m(t.components);return i.createElement(s.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=m(e),g=a,d=u["".concat(s,".").concat(g)]||u[g]||p[g]||r;return e?i.createElement(d,o(o({ref:n},c),{},{components:e})):i.createElement(d,o({ref:n},c))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<r;m++)o[m]=e[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}u.displayName="MDXCreateElement"},51037:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var i=e(74034),a=e(79973),r=(e(67294),e(3905)),o={title:"Migrations"},l=void 0,s={unversionedId:"migrations",id:"version-4.3/migrations",isDocsHomePage:!1,title:"Migrations",description:"MikroORM has integrated support for migrations via umzug.",source:"@site/versioned_docs/version-4.3/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/4.3/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/migrations.md",version:"4.3",lastUpdatedBy:"janac meena",lastUpdatedAt:1626767314,formattedLastUpdatedAt:"7/20/2021",frontMatter:{title:"Migrations"},sidebar:"version-4.3/docs",previous:{title:"Property Validation",permalink:"/docs/4.3/property-validation"},next:{title:"Read Replica Connections",permalink:"/docs/4.3/read-connections"}},m=[{value:"Migration class",id:"migration-class",children:[]},{value:"Initial migration",id:"initial-migration",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Using via CLI",id:"using-via-cli",children:[]},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",children:[]},{value:"Providing transaction context",id:"providing-transaction-context",children:[]},{value:"Importing migrations statically",id:"importing-migrations-statically",children:[]},{value:"Limitations",id:"limitations",children:[{value:"MySQL",id:"mysql",children:[]}]}],c={toc:m};function p(t){var n=t.components,e=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MikroORM has integrated support for migrations via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequelize/umzug"},"umzug"),".\nIt allows you to generate migrations with current schema differences."),(0,r.kt)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),(0,r.kt)("h2",{id:"migration-class"},"Migration class"),(0,r.kt)("p",null,"Migrations are classes that extend Migration abstract class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),(0,r.kt)("p",null,"To support undoing those changed, you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),(0,r.kt)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration")," class context."),(0,r.kt)("p",null,"You can execute queries in the migration via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.execute()")," method, which\nwill run queries in the same transaction as the rest of the migration. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.addSql()")," method also accepts instances of knex. Knex instance can be\naccessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.getKnex()"),"; "),(0,r.kt)("h2",{id:"initial-migration"},"Initial migration"),(0,r.kt)("p",null,"If you want to start using migrations, and you already have the schema generated,\nyou can do so by creating so called initial migration:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Initial migration can be created only if there are no migrations previously\ngenerated or executed. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create --initial\n")),(0,r.kt)("p",null,"This will create the initial migration, containing the schema dump from\n",(0,r.kt)("inlineCode",{parentName:"p"},"schema:create")," command. The migration will be automatically marked as executed. "),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pattern: /^[\\w-]+\\d+\\.ts$/, // regex pattern for the migration files\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    emit: 'ts', // migration generation mode\n  },\n})\n")),(0,r.kt)("h2",{id:"using-via-cli"},"Using via CLI"),(0,r.kt)("p",null,"You can use it via CLI: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:down")," commands you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-f"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"--to")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),")\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"--only")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migratee down all migrations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To run TS migration files, you will need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/installation"},"enable ",(0,r.kt)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,r.kt)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),(0,r.kt)("p",null,"Or you can create a simple script where you initialize MikroORM like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('name'); // runs only given migration, up\n  await migrator.up({ to: 'up-to-name' }); // runs migrations up to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down('name'); // runs only given migration, down\n  await migrator.down({ to: 'down-to-name' }); // runs migrations down to given version\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),(0,r.kt)("p",null,"Then run this script via ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node migrate\n")),(0,r.kt)("h2",{id:"providing-transaction-context"},"Providing transaction context"),(0,r.kt)("p",null,"In some cases you might want to control the transaction context yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(async em => {\n  await migrator.up({ transaction: em.getTransactionContext() });\n});\n")),(0,r.kt)("h2",{id:"importing-migrations-statically"},"Importing migrations statically"),(0,r.kt)("p",null,"If you do not want to dynamically import a folder (e.g. when bundling your code with webpack) you can import migrations\ndirectly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Migration20191019195930 } from '../migrations/Migration20191019195930.ts';\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList: [\n      {\n        name: 'Migration20191019195930.ts',\n        class: Migration20191019195930,\n      },\n    ],\n  },\n});\n")),(0,r.kt)("p",null,"With the help of (webpacks context module api)","[https://webpack.js.org/guides/dependency-management/#context-module-api]","\nwe can dynamically import the migrations making it possible to import all files in a folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { basename } from 'path';\n\nconst migrations = {};\n\nfunction importAll(r) {\n  r.keys().forEach(\n    (key) => (migrations[basename(key)] = Object.values(r(key))[0])\n  );\n}\n\nimportAll(require.context('../migrations', false, /\\.ts$/));\n\nconst migrationsList = Object.keys(migrations).map((migrationName) => ({\n  name: migrationName,\n  class: migrations[migrationName],\n}));\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList,\n  },\n});\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/217"},"https://github.com/mikro-orm/mikro-orm/issues/217")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"},"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/index#table-of-contents"},"\u2190"," Back to table of contents")))}p.isMDXComponent=!0}}]);