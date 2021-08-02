(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81299],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return g}});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),m=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return i.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=m(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return n?i.createElement(d,o(o({ref:e},p),{},{components:n})):i.createElement(d,o({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64293:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return c}});var i=n(74034),a=n(79973),r=(n(67294),n(3905)),o={title:"Migrations"},s=void 0,l={unversionedId:"migrations",id:"migrations",isDocsHomePage:!1,title:"Migrations",description:"MikroORM has integrated support for migrations via umzug.",source:"@site/docs/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/next/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/migrations.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1627862745,formattedLastUpdatedAt:"8/2/2021",frontMatter:{title:"Migrations"},sidebar:"docs",previous:{title:"Property Validation",permalink:"/docs/next/property-validation"},next:{title:"Seeding",permalink:"/docs/next/seeding"}},m=[{value:"Migration class",id:"migration-class",children:[]},{value:"Initial migration",id:"initial-migration",children:[]},{value:"Snapshots",id:"snapshots",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Using via CLI",id:"using-via-cli",children:[]},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",children:[]},{value:"Providing transaction context",id:"providing-transaction-context",children:[]},{value:"Importing migrations statically",id:"importing-migrations-statically",children:[]},{value:"Limitations",id:"limitations",children:[{value:"MySQL",id:"mysql",children:[]}]}],p={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MikroORM has integrated support for migrations via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequelize/umzug"},"umzug"),".\nIt allows you to generate migrations with current schema differences."),(0,r.kt)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),(0,r.kt)("h2",{id:"migration-class"},"Migration class"),(0,r.kt)("p",null,"Migrations are classes that extend Migration abstract class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),(0,r.kt)("p",null,"To support undoing those changed, you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),(0,r.kt)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration")," class context."),(0,r.kt)("p",null,"You can execute queries in the migration via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.execute()")," method, which\nwill run queries in the same transaction as the rest of the migration. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.addSql()")," method also accepts instances of knex. Knex instance can be\naccessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.getKnex()"),"; "),(0,r.kt)("h2",{id:"initial-migration"},"Initial migration"),(0,r.kt)("p",null,"If you want to start using migrations, and you already have the schema generated,\nyou can do so by creating so called initial migration:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Initial migration can be created only if there are no migrations previously\ngenerated or executed. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create --initial\n")),(0,r.kt)("p",null,"This will create the initial migration, containing the schema dump from\n",(0,r.kt)("inlineCode",{parentName:"p"},"schema:create")," command. The migration will be automatically marked as executed. "),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Creating new migration will automatically save the target schema snapshot into\nmigrations folder. This snapshot will be then used if you try to create new migration,\ninstead of using current database schema. This means that if we try to create new\nmigration before we run the pending ones, we still get the right schema diff."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Snapshots should be versioned just like the regular migration files.")),(0,r.kt)("p",null,"Snapshotting can be disabled via ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations.snapshot: false")," in the ORM config."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pattern: /^[\\w-]+\\d+\\.ts$/, // regex pattern for the migration files\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    snapshot: true, // save snapshot when creating new migrations\n    emit: 'ts', // migration generation mode\n  },\n})\n")),(0,r.kt)("h2",{id:"using-via-cli"},"Using via CLI"),(0,r.kt)("p",null,"You can use it via CLI: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\nnpx mikro-orm migration:fresh    # Drop the database and migrate up to the latest version\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:down")," commands you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-f"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"--to")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),")\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"--only")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migrate down all migrations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To run TS migration files, you will need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/installation"},"enable ",(0,r.kt)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:fresh")," command you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--seed")," to seed the database after migrating."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx mikro-orm migration:fresh --seed              # seed the database with the default database seeder\nnpx mikro-orm migration:fresh --seed=UsersSeeder  # seed the database with the UsersSeeder\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can specify the default database seeder in the orm config with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"config.seeder.defaultSeeder"))),(0,r.kt)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),(0,r.kt)("p",null,"Or you can create a simple script where you initialize MikroORM like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('name'); // runs only given migration, up\n  await migrator.up({ to: 'up-to-name' }); // runs migrations up to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down('name'); // runs only given migration, down\n  await migrator.down({ to: 'down-to-name' }); // runs migrations down to given version\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),(0,r.kt)("p",null,"Then run this script via ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node migrate\n")),(0,r.kt)("h2",{id:"providing-transaction-context"},"Providing transaction context"),(0,r.kt)("p",null,"In some cases you might want to control the transaction context yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(async em => {\n  await migrator.up({ transaction: em.getTransactionContext() });\n});\n")),(0,r.kt)("h2",{id:"importing-migrations-statically"},"Importing migrations statically"),(0,r.kt)("p",null,"If you do not want to dynamically import a folder (e.g. when bundling your code with webpack) you can import migrations\ndirectly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Migration20191019195930 } from '../migrations/Migration20191019195930.ts';\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList: [\n      {\n        name: 'Migration20191019195930.ts',\n        class: Migration20191019195930,\n      },\n    ],\n  },\n});\n")),(0,r.kt)("p",null,"With the help of (webpacks context module api)","[https://webpack.js.org/guides/dependency-management/#context-module-api]","\nwe can dynamically import the migrations making it possible to import all files in a folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { basename } from 'path';\n\nconst migrations = {};\n\nfunction importAll(r) {\n  r.keys().forEach(\n    (key) => (migrations[basename(key)] = Object.values(r(key))[0])\n  );\n}\n\nimportAll(require.context('../migrations', false, /\\.ts$/));\n\nconst migrationsList = Object.keys(migrations).map((migrationName) => ({\n  name: migrationName,\n  class: migrations[migrationName],\n}));\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList,\n  },\n});\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/217"},"https://github.com/mikro-orm/mikro-orm/issues/217")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"},"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/index#table-of-contents"},"\u2190"," Back to table of contents")))}c.isMDXComponent=!0}}]);