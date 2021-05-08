(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79120],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45355:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i={title:"Using Query Builder"},s={unversionedId:"query-builder",id:"version-4.5/query-builder",isDocsHomePage:!1,title:"Using Query Builder",description:"Since v4, we need to make sure we are working with correctly typed EntityManager",source:"@site/versioned_docs/version-4.5/query-builder.md",sourceDirName:".",slug:"/query-builder",permalink:"/docs/query-builder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/query-builder.md",version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620461570,formattedLastUpdatedAt:"5/8/2021",frontMatter:{title:"Using Query Builder"},sidebar:"version-4.5/docs",previous:{title:"Deployment",permalink:"/docs/deployment"},next:{title:"Result cache",permalink:"/docs/caching"}},l=[{value:"Using Knex.js",id:"using-knexjs",children:[]},{value:"Running Native SQL Query",id:"running-native-sql-query",children:[]},{value:"Executing the Query",id:"executing-the-query",children:[]},{value:"Mapping Raw Results to Entities",id:"mapping-raw-results-to-entities",children:[]},{value:"Implicit Joining",id:"implicit-joining",children:[]},{value:"Explicit Joining",id:"explicit-joining",children:[]},{value:"Mapping joined results",id:"mapping-joined-results",children:[]},{value:"Complex Where Conditions",id:"complex-where-conditions",children:[{value:"Using custom SQL fragments",id:"using-custom-sql-fragments",children:[]},{value:"Custom SQL in where",id:"custom-sql-in-where",children:[]},{value:"andWhere() and orWhere()",id:"andwhere-and-orwhere",children:[]},{value:"Conditions Object",id:"conditions-object",children:[]}]},{value:"Using sub-queries",id:"using-sub-queries",children:[]},{value:"Referring to column in update queries",id:"referring-to-column-in-update-queries",children:[]},{value:"Locking support",id:"locking-support",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Since v4, we need to make sure we are working with correctly typed ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," to have access to ",(0,a.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager, EntityRepository } from '@mikro-orm/mysql'; // or any other driver package\n")))),(0,a.kt)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// update `publisher2` set `name` = ?, `type` = ? where `id` = ? and `type` = ?\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," also supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/query-conditions"},"smart query conditions"),"."),(0,a.kt)("h2",{id:"using-knexjs"},"Using Knex.js"),(0,a.kt)("p",null,"Under the hood, ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://knexjs.org"},(0,a.kt)("inlineCode",{parentName:"a"},"Knex.js"))," to compose and run queries.\nYou can access configured ",(0,a.kt)("inlineCode",{parentName:"p"},"knex")," instance via ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.getKnexQuery()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\nconst knex = qb.getKnexQuery(); // instance of Knex' QueryBuilder\n\n// do what ever you need with `knex`\n\nconst res = await orm.em.getConnection().execute(knex);\nconst entities = res.map(a => orm.em.map(Author, a));\nconsole.log(entities); // Author[]\n")),(0,a.kt)("p",null,"You can also get clear and configured knex instance from the connection via ",(0,a.kt)("inlineCode",{parentName:"p"},"getKnex()")," method.\nAs this method is not available on the base ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," class, you will need to either manually\ntype cast the connection to ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractSqlConnection")," (or the actual implementation you are using,\ne.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"MySqlConnection"),"), or provide correct driver type hint to your ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance,\nwhich will be then automatically inferred in ",(0,a.kt)("inlineCode",{parentName:"p"},"em.getConnection()")," method."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Driver and connection implementations are not directly exported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," module.\nYou can import them from the driver packages (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"import { PostgreSqlDriver } from '@mikro-orm/postgresql'"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const conn = orm.em.getConnection() as AbstractSqlConnection;\n// you can make sure the `em` is correctly typed to `EntityManager<AbstractSqlDriver>`\n// or one of its implementations:\n// const em: EntityManager<AbstractSqlDriver> = orm.em;\n\nconst knex = conn.getKnex();\n\n// do what ever you need with `knex`\n\nconst res = await knex;\n")),(0,a.kt)("h2",{id:"running-native-sql-query"},"Running Native SQL Query"),(0,a.kt)("p",null,"You can run native SQL via underlying connection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const connection = orm.em.getConnection();\nconst res = await connection.execute('select 1 as count');\nconsole.log(res); // res is array of objects: `[ { count: 1 } ]`\n")),(0,a.kt)("h2",{id:"executing-the-query"},"Executing the Query"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"execute(method = 'all', mapResults = true)"),"'s parameters to control form of result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const res1 = await qb.execute('all'); // returns array of objects, default behavior\nconst res2 = await qb.execute('get'); // returns single object\nconst res3 = await qb.execute('run'); // returns object like `{ affectedRows: number, insertId: number, row: any }`\n")),(0,a.kt)("p",null,"Second argument can be used to disable mapping of database columns to property names (which\nis enabled by default). In following example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," entity has ",(0,a.kt)("inlineCode",{parentName:"p"},"createdAt")," property defined\nwith implicit underscored field name ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const res4 = await orm.em.createQueryBuilder(Book).select('*').execute('get', true);\nconsole.log(res4); // `createdAt` will be defined, while `created_at` will be missing\nconst res5 = await orm.em.createQueryBuilder(Book).select('*').execute('get', false);\nconsole.log(res5); // `created_at` will be defined, while `createdAt` will be missing\n")),(0,a.kt)("p",null,"To get entity instances from the QueryBuilder result, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"getResult()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getSingleResult()"),"\nmethods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.createQueryBuilder(Book).select('*').where({ id: 1 }).getSingleResult();\nconsole.log(book instanceof Book); // true\nconst books = await orm.em.createQueryBuilder(Book).select('*').getResult();\nconsole.log(books[0] instanceof Book); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.getResultList()")," which is alias to ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.getResult()"),".")),(0,a.kt)("h2",{id:"mapping-raw-results-to-entities"},"Mapping Raw Results to Entities"),(0,a.kt)("p",null,"Another way to create entity from raw results (that are not necessarily mapped to entity properties)\nis to use ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," method of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),", that is basically a shortcut for mapping results\nvia ",(0,a.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," (which converts field names to property names - e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"createdAt"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"merge()")," which converts the data to entity instance and makes it managed. "),(0,a.kt)("p",null,"This method comes handy when you want to use 3rd party query builders, where the result is not\nmapped to entity properties automatically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));\nconst users = results.map(user => orm.em.map(User, user));\n\n// or use EntityRepository.map()\nconst repo = orm.em.getRepository(User);\nconst users = results.map(user => repo.map(user));\n")),(0,a.kt)("h2",{id:"implicit-joining"},"Implicit Joining"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," supports automatic joining based on entity metadata:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select('*').where({ books: 123 });\n\nconsole.log(qb.getQuery());\n// select `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk`\n// from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// where `e1`.`book_uuid_pk` = ?\n")),(0,a.kt)("p",null,"This also works for multiple levels of nesting:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.select('*')\n  .where({ books: { tags: { name: 'Cool' } } })\n  .orderBy({ books: { tags: { createdBy: QueryOrder.DESC } } });\n\nconsole.log(qb.getQuery());\n// select `e0`.* \n// from `author` as `e0` \n// left join `book2` as `e1` on `e0`.`id` = `e1`.`author_id` \n// left join `book2_to_book_tag2` as `e3` on `e1`.`uuid_pk` = `e3`.`book2_uuid_pk` \n// left join `book_tag2` as `e2` on `e3`.`book_tag2_id` = `e2`.`id` \n// where `e2`.`name` = ? \n// order by `e1`.`tags` asc\n")),(0,a.kt)("p",null,"This is currently available only for filtering (",(0,a.kt)("inlineCode",{parentName:"p"},"where"),") and sorting (",(0,a.kt)("inlineCode",{parentName:"p"},"orderBy"),"), only\nthe root entity will be selected. To populate its relationships, you can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/nested-populate"},(0,a.kt)("inlineCode",{parentName:"a"},"em.populate()")),"."),(0,a.kt)("h2",{id:"explicit-joining"},"Explicit Joining"),(0,a.kt)("p",null,"Another way is to manually specify join property via ",(0,a.kt)("inlineCode",{parentName:"p"},"join()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"leftJoin()")," methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.uuid', 'b.*', 't.*'], true)\n  .join('t.books', 'b')\n  .where({ 'b.title': 'test 123' })\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select distinct `b`.`uuid_pk`, `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where `b`.`title` = ?\n// limit ? offset ?\n")),(0,a.kt)("h2",{id:"mapping-joined-results"},"Mapping joined results"),(0,a.kt)("p",null,"To select multiple entities and map them from ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", we can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"joinAndSelect")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"leftJoinAndSelect")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// `res` will contain array of authors, with books and their tags populated\nconst res = await orm.em.createQueryBuilder(Author, 'a')\n  .select('*')\n  .leftJoinAndSelect('a.books', 'b')\n  .leftJoinAndSelect('b.tags', 't')\n  .where({ 't.name': ['sick', 'sexy'] })\n  .getResultList();\n")),(0,a.kt)("h2",{id:"complex-where-conditions"},"Complex Where Conditions"),(0,a.kt)("p",null,"There are multiple ways to construct complex query conditions. You can either write parts of SQL\nmanually, use ",(0,a.kt)("inlineCode",{parentName:"p"},"andWhere()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"orWhere()"),", or provide condition object:"),(0,a.kt)("h3",{id:"using-custom-sql-fragments"},"Using custom SQL fragments"),(0,a.kt)("p",null,"It is possible to use any SQL fragment in your ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," query or ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const users = orm.em.createQueryBuilder(User)\n  .select('*')\n  .where({ 'lower(email)': 'foo@bar.baz' })\n  .orderBy({ [`(point(loc_latitude, loc_longitude) <@> point(0, 0))`]: 'ASC' })\n  .getResultList();\n")),(0,a.kt)("p",null,"This will produce following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select `e0`.* \nfrom `user` as `e0`\nwhere lower(email) = 'foo@bar.baz'\norder by (point(loc_latitude, loclongitude) <@> point(0, 0)) asc\n")),(0,a.kt)("h3",{id:"custom-sql-in-where"},"Custom SQL in where"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// left join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2))\n// limit ? offset ?\n")),(0,a.kt)("h3",{id:"andwhere-and-orwhere"},"andWhere() and orWhere()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// left join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2))\n// limit ? offset ?\n")),(0,a.kt)("h3",{id:"conditions-object"},"Conditions Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconsole.log(qb.getQuery());\n// select `e0`.* from `test` as `e0` where (`e0`.`id` not in (?, ?) and `e0`.`id` > ?)\n")),(0,a.kt)("h2",{id:"using-sub-queries"},"Using sub-queries"),(0,a.kt)("p",null,"You can filter using sub-queries in where conditions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb1 = orm.em.createQueryBuilder(Book2, 'b').select('b.author').where({ price: { $gt: 100 } });\nconst qb2 = orm.em.createQueryBuilder(Author2, 'a').select('*').where({ id: { $in: qb1.getKnexQuery() } });\n\nconsole.log(qb2.getQuery());\n// select `a`.* from `author2` as `a` where `a`.`id` in (select `b`.`author_id` from `book2` as `b` where `b`.`price` > ?)\n")),(0,a.kt)("p",null,"For sub-queries in selects, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.as(alias)")," method: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The dynamic property (",(0,a.kt)("inlineCode",{parentName:"p"},"booksTotal"),") needs to be defined at the entity level (as ",(0,a.kt)("inlineCode",{parentName:"p"},"persist: false"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb1 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).as('Author2.booksTotal');\nconst qb2 = orm.em.createQueryBuilder(Author2, 'a');\nqb2.select(['*', qb1]).orderBy({ booksTotal: 'desc' });\n\nconsole.log(qb2.getQuery());\n// select `a`.*, (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) as `books_total` from `author2` as `a` order by `books_total` desc\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb3 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).as('books_total');\nconst qb4 = orm.em.createQueryBuilder(Author2, 'a');\nqb4.select(['*', qb3]).orderBy({ booksTotal: 'desc' });\n\nconsole.log(qb4.getQuery());\n// select `a`.*, (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) as `books_total` from `author2` as `a` order by `books_total` desc\n")),(0,a.kt)("p",null,"When you want to filter by sub-query on the left-hand side of a predicate, you will need to register it first via ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.withSubquery()"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The dynamic property (",(0,a.kt)("inlineCode",{parentName:"p"},"booksTotal"),") needs to be defined at the entity level (as ",(0,a.kt)("inlineCode",{parentName:"p"},"persist: false"),").\nYou always need to use prefix in the ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.withSchema()")," (so ",(0,a.kt)("inlineCode",{parentName:"p"},"a.booksTotal"),"). ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb1 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).getKnexQuery();\nconst qb2 = orm.em.createQueryBuilder(Author2, 'a');\nqb2.select('*').withSubQuery(qb1, 'a.booksTotal').where({ 'a.booksTotal': { $in: [1, 2, 3] } });\n\nconsole.log(qb2.getQuery());\n// select `a`.* from `author2` as `a` where (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) in (?, ?, ?)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const knex = orm.em.getKnex();\nconst qb3 = orm.em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).getKnexQuery();\nconst qb4 = orm.em.createQueryBuilder(Author2, 'a');\nqb4.select('*').withSubQuery(qb3, 'a.booksTotal').where({ 'a.booksTotal': 1 });\n\nconsole.log(qb4.getQuery());\n// select `a`.* from `author2` as `a` where (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) = ?\n")),(0,a.kt)("h2",{id:"referring-to-column-in-update-queries"},"Referring to column in update queries"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"qb.raw()")," to insert raw SQL snippets like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Book);\nqb.update({ price: qb.raw('price + 1') }).where({ uuid: '123' });\n\nconsole.log(qb.getQuery());\n// update `book` set `price` = price + 1 where `uuid_pk` = ?\n")),(0,a.kt)("h2",{id:"locking-support"},"Locking support"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ name: 'Lol 321' }).setLockMode(LockMode.PESSIMISTIC_READ);\n\nconsole.log(qb.getQuery()); // for MySQL\n// select `e0`.* from `test` as `e0` where `e0`.`name` = ? lock in share mode\n")))}c.isMDXComponent=!0}}]);