(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28021],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35895:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=t(74034),o=t(79973),r=(t(67294),t(3905)),i={title:"Cascading persist, merge and remove",sidebar_label:"Cascading"},l={unversionedId:"cascading",id:"version-4.5/cascading",isDocsHomePage:!1,title:"Cascading persist, merge and remove",description:"From v4.2, cascade merging is no longer configurable (and is kept enabled for all relations).",source:"@site/versioned_docs/version-4.5/cascading.md",sourceDirName:".",slug:"/cascading",permalink:"/docs/cascading",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/cascading.md",version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620806876,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"Cascading",frontMatter:{title:"Cascading persist, merge and remove",sidebar_label:"Cascading"},sidebar:"version-4.5/docs",previous:{title:"Inheritance Mapping",permalink:"/docs/inheritance-mapping"},next:{title:"Filters",permalink:"/docs/filters"}},s=[{value:"Cascade persist",id:"cascade-persist",children:[]},{value:"Cascade remove",id:"cascade-remove",children:[]},{value:"Orphan removal",id:"orphan-removal",children:[]},{value:"Declarative Referential Integrity",id:"declarative-referential-integrity",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From v4.2, cascade merging is no longer configurable (and is kept enabled for all relations).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section is about application level cascading. For that to work, we need\nto have relations populated. ")),(0,r.kt)("p",null,"When persisting or removing entity, all your references are by default cascade persisted.\nThis means that by persisting any entity, ORM will automatically persist all of its\nassociations. "),(0,r.kt)("p",null,"You can control this behaviour via ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," attribute of ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne")," fields."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"New entities without primary key will be always persisted, regardless of ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," value. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// cascade persist is default value\n@OneToMany({ entity: () => Book, mappedBy: 'author' })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST] })\nbooks = new Collection<Book>(this);\n\n// only cascade remove\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n\n// no cascade\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [] })\nbooks = new Collection<Book>(this);\n\n// cascade all (persist and remove)\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.ALL] })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n")),(0,r.kt)("h2",{id:"cascade-persist"},"Cascade persist"),(0,r.kt)("p",null,"Here is example of how cascade persist works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 'id', ['author', 'tags']);\nbook.author.name = 'Foo Bar';\nbook.tags[0].name = 'new name 1';\nbook.tags[1].name = 'new name 2';\nawait orm.em.persistAndFlush(book); // all book tags and author will be persisted too\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When cascade persisting collections, keep in mind only fully initialized collections\nwill be cascade persisted.")),(0,r.kt)("h2",{id:"cascade-remove"},"Cascade remove"),(0,r.kt)("p",null,"Cascade remove works same way as cascade persist, just for removing entities. Following\nexample assumes that ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.publisher")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that cascade remove for collections can be inefficient as it will fire 1 query\nfor each entity in collection.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.remove(book).flush(); // this will also remove book.publisher\n")),(0,r.kt)("p",null,"Keep in mind that cascade remove ",(0,r.kt)("strong",{parentName:"p"},"can be dangerous")," when used on ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," fields,\nas cascade removed entity can stay referenced in another entities that were not removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const publisher = new Publisher(...);\n// all books with same publisher\nbook1.publisher = book2.publisher = book3.publisher = publisher;\nawait orm.em.remove(book1).flush(); // this will remove book1 and its publisher\n\n// but we still have reference to removed publisher here\nconsole.log(book2.publisher, book3.publisher);\n")),(0,r.kt)("h2",{id:"orphan-removal"},"Orphan removal"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", there is also additional and more aggressive remove\ncascading mode which can be specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"orphanRemoval")," flag of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author {\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author', orphanRemoval: true })\n  books = new Collection<Book>(this);\n\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"orphanRemoval")," flag behaves just like ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," for remove operation, so specifying\nboth is redundant.")),(0,r.kt)("p",null,"With simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", you would need to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," entity to cascade\nthe operation down to all loaded ",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"s. By enabling orphan removal on the collection,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"s will be also removed when they get disconnected from the collection (either via\n",(0,r.kt)("inlineCode",{parentName:"p"},"remove()"),", or by replacing collection items via ",(0,r.kt)("inlineCode",{parentName:"p"},"set()"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await author.books.set([book1, book2]); // replace whole collection\nawait author.books.remove(book1); // remove book from collection\nawait orm.em.persistAndFlush(author); // book1 will be removed, as well as all original items (before we called `set()`)\n")),(0,r.kt)("p",null,"In this example, no ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," would be removed with simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," as no remove operation\nwas executed. "),(0,r.kt)("h2",{id:"declarative-referential-integrity"},"Declarative Referential Integrity"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is only supported in SQL drivers.")),(0,r.kt)("p",null,"As opposed to the application level cascading controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," option, we can\nalso define database level referential integrity actions: ",(0,r.kt)("inlineCode",{parentName:"p"},"on update")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"on delete"),"."),(0,r.kt)("p",null,"Their values are automatically inferred from the ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," option value. You can also\ncontrol the value manually via ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdateIntegrity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onDelete")," options. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @ManyToOne({ onUpdateIntegrity: 'set null', onDelete: 'cascade' })\n  author?: Author;\n\n}\n")))}p.isMDXComponent=!0}}]);