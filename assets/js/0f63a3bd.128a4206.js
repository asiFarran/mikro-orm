(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49536],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(y,a(a({ref:n},c),{},{components:t})):o.createElement(y,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79798:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=t(74034),r=t(79973),i=(t(67294),t(3905)),a={title:"Deployment"},s=void 0,l={unversionedId:"deployment",id:"version-4.4/deployment",isDocsHomePage:!1,title:"Deployment",description:"Under the hood, MikroORM uses ts-morph to read",source:"@site/versioned_docs/version-4.4/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/4.4/deployment",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/deployment.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1627862745,formattedLastUpdatedAt:"8/2/2021",frontMatter:{title:"Deployment"},sidebar:"version-4.4/docs",previous:{title:"Filters",permalink:"/docs/4.4/filters"},next:{title:"Using Query Builder",permalink:"/docs/4.4/query-builder"}},p=[{value:"Deploy pre-built cache",id:"deploy-pre-built-cache",children:[]},{value:"Fill type or entity attributes everywhere",id:"fill-type-or-entity-attributes-everywhere",children:[]},{value:"Deploy your entity source files",id:"deploy-your-entity-source-files",children:[]},{value:"Deploy a bundle of entities and dependencies with Webpack",id:"deploy-a-bundle-of-entities-and-dependencies-with-webpack",children:[{value:"Prepare your project for Webpack",id:"prepare-your-project-for-webpack",children:[]},{value:"Webpack configuration",id:"webpack-configuration",children:[]},{value:"Running Webpack",id:"running-webpack",children:[]}]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Under the hood, ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),(0,i.kt)("p",null,"This has some consequences for deployment of your application. Sometimes you will want to\ndeploy only your compiled output, without TS source files at all. In that case, discovery\nprocess will probably fail. You have several options:"),(0,i.kt)("h2",{id:"deploy-pre-built-cache"},"Deploy pre-built cache"),(0,i.kt)("p",null,"By default, output of metadata discovery will be cached in ",(0,i.kt)("inlineCode",{parentName:"p"},"temp")," folder. You can reuse this\ncache in your deployed application. Currently the cache is saved in files named like the entity\nsource file, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.ts")," entity will store cache in ",(0,i.kt)("inlineCode",{parentName:"p"},"temp/Author.ts.json")," file."),(0,i.kt)("p",null,"When running compiled code, JS entities will be taken into account instead, so you will need to\ngenerate the cache by running the compiled code locally. That will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"temp/Author.js.json"),",\nwhich is the file you will need to deploy alongside your application. "),(0,i.kt)("h2",{id:"fill-type-or-entity-attributes-everywhere"},"Fill type or entity attributes everywhere"),(0,i.kt)("p",null,"What discovery process does is to sniff TS types and save their value to string, so it can be\nused later for validation. You can skip the whole process by simply providing those values\nmanually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: 'number' })\n  id!: number;\n\n  @Property({ type: 'string' })\n  title!: string;\n\n  @Enum(() => BookStatus)\n  status?: BookStatus;\n\n  @ManyToOne(() => Author) // or `@ManyToOne({ type: 'Author' })` or `@ManyToOne({ entity: () => Author })`\n  author1!: Author;\n\n  // or\n  @ManyToOne({ type: 'Author' })\n  author2!: Author;\n\n  // or\n  @ManyToOne({ entity: () => Author })\n  author3!: Author;\n\n}\n\nexport enum BookStatus {\n  SOLD_OUT = 'sold',\n  ACTIVE = 'active',\n  UPCOMING = 'upcoming',\n }\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For numeric enums this is not be required.")),(0,i.kt)("h2",{id:"deploy-your-entity-source-files"},"Deploy your entity source files"),(0,i.kt)("p",null,"Usually it does not matter much that you deploy more files than needed, so the easiest way\nis to just deploy your TS source files next to the compiled output, just like during development."),(0,i.kt)("h2",{id:"deploy-a-bundle-of-entities-and-dependencies-with-webpack"},"Deploy a bundle of entities and dependencies with ",(0,i.kt)("a",{parentName:"h2",href:"https://webpack.js.org/"},"Webpack")),(0,i.kt)("p",null,"Webpack can be used to bundle every entity and dependency: you get a single file that contains\nevery required module/file and has no external dependencies."),(0,i.kt)("h3",{id:"prepare-your-project-for-webpack"},"Prepare your project for Webpack"),(0,i.kt)("p",null,"Webpack requires every required file to be hardcoded in your code. Code like this won't work\n(it will throw an error because Webpack doesn't know which file to include in the bundle):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let dependencyNameInVariable = 'dependency';\nconst dependency = import(dependencyNameInVariable);\n")),(0,i.kt)("p",null,"As Webpack creates a file bundle, it isn't desired that it scans directories for entities\nor metadata. Therefore you need to provide list of entities in the ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," option in\nthe initialization function, folder/file based discovery is not supported (see dynamically\nincluding entities as an alternative solution). Also you need to fill ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"\nattributes everywhere (see above) and disable caching (it will decrease start-time slightly)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In v4 caching is disabled by default when using ",(0,i.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),".")),(0,i.kt)("h4",{id:"disabling-dynamic-file-access"},"Disabling dynamic file access"),(0,i.kt)("p",null,"First thing you should do is to disable dynamic file access in the discovery process via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"discovery.disableDynamicFileAccess")," toggle. This will effectively do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set metadata provider to ",(0,i.kt)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")),(0,i.kt)("li",{parentName:"ul"},"disable caching"),(0,i.kt)("li",{parentName:"ul"},"disallow usage of paths in ",(0,i.kt)("inlineCode",{parentName:"li"},"entities/entitiesTs"))),(0,i.kt)("h4",{id:"manually-defining-entities"},"Manually defining entities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Author, Book, BookTag, Publisher, Test } from '../entities';\n\nawait MikroORM.init({\n  ...\n  entities: [Author, Book, BookTag, Publisher, Test],\n  discovery: { disableDynamicFileAccess: true },\n  ...\n});\n")),(0,i.kt)("h4",{id:"dynamically-loading-dependencies"},"Dynamically loading dependencies"),(0,i.kt)("p",null,"This will make use of a Webpack feature called ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"dynamic imports"),".\nThis way you can import dependencies as long as part of the path is known."),(0,i.kt)("p",null,"In following example ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/dependency-management/#requirecontext"},(0,i.kt)("inlineCode",{parentName:"a"},"require.context")),"\nis used. This 'function' is only usable during the building process from Webpack so therefore\nthere is an alternative solution provided that will as long as the environment variable\nWEBPACK is not set (e.g. during development with ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node"),")."),(0,i.kt)("p",null,"Here, all files with the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," will be imported from the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"../entities"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap"},(0,i.kt)("inlineCode",{parentName:"a"},"flatMap"))," is a method from ECMAScript 2019 and requires ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," 11 or higher.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // ...\n  entities: await getEntities(),\n  discovery: { disableDynamicFileAccess: true },\n  // ...\n});\n\nasync function getEntities(): Promise<any[]> {\n  if (process.env.WEBPACK) {\n    const modules = require.context('../entities', true, /\\.ts$/);\n\n    return modules\n      .keys()\n      .map(r => modules(r))\n      .flatMap(mod => Object.keys(mod).map(className => mod[className]));\n  }\n\n  const promises = fs.readdirSync('../entities').map(file => import(`../entities/${file}`));\n  const modules = await Promise.all(promises);\n\n  return modules.flatMap(mod => Object.keys(mod).map(className => mod[className]));\n}\n")),(0,i.kt)("h3",{id:"webpack-configuration"},"Webpack configuration"),(0,i.kt)("p",null,"Webpack can be run without ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"configuration file")," but\nfor building MikroORM and ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," bundles it requires additional\nconfiguration. Configuration for Webpack is stored in the root of the project as\n",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". For all the options please refer to the following ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"page"),"."),(0,i.kt)("p",null,"For bundling MikroORM the following configuration is required:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\nconst { EnvironmentPlugin, IgnorePlugin } = require('webpack');\nconst TerserPlugin = require('terser-webpack-plugin');\n\n// Mark our dev dependencies as externals so they don't get included in the webpack bundle.\nconst { devDependencies } = require('./package.json');\nconst externals = {};\n\nfor (const devDependency of Object.keys(devDependencies)) {\n  externals[devDependency] = `commonjs ${devDependency}`;\n}\n\n// And anything MikroORM's packaging can be ignored if it's not on disk.\n// Later we check these dynamically and tell webpack to ignore the ones we don't have.\nconst optionalModules = new Set([\n  ...Object.keys(require('knex/package.json').browser),\n  ...Object.keys(require('@mikro-orm/core/package.json').peerDependencies),\n  ...Object.keys(require('@mikro-orm/core/package.json').devDependencies || {})\n]);\n\nmodule.exports = {\n  entry: path.resolve('app', 'server.ts'),\n\n  // You can toggle development mode on to better see what's going on in the webpack bundle,\n  // but for anything that is getting deployed, you should use 'production'.\n  // mode: 'development',\n  mode: 'production',\n\n  optimization: {\n    minimizer: [\n      new TerserPlugin({\n        terserOptions: {\n          // We want to minify the bundle, but don't want Terser to change the names of our entity\n          // classes. This can be controlled in a more granular way if needed, (see\n          // https://terser.org/docs/api-reference.html#mangle-options) but the safest default\n          // config is that we simply disable mangling altogether but allow minification to proceed.\n          mangle: false,\n          // Similarly, Terser's compression may at its own discretion change function and class names.\n          // While it only rarely does so, it's safest to also disable changing their names here.\n          // This can be controlled in a more granular way if needed (see \n          // https://terser.org/docs/api-reference.html#compress-options).\n          compress: {\n            keep_classnames: true,\n            keep_fnames: true,\n          },\n        }\n      })\n    ]\n  },\n  target: 'node',\n  module: {\n    rules: [\n      // Bring in our typescript files.\n      {\n        test: /\\.ts$/,\n        exclude: /node_modules/,\n        loader: 'ts-loader',\n      },\n\n      // Native modules can be bundled as well.\n      {\n        test: /\\.node$/,\n        use: 'node-loader',\n      },\n\n      // Some of MikroORM's dependencies use mjs files, so let's set them up here.\n      {\n        test: /\\.mjs$/,\n        include: /node_modules/,\n        type: 'javascript/auto',\n      },\n    ],\n  },\n\n  // These are computed above.\n  externals,\n\n  resolve: {\n    extensions: ['.ts', '.js']\n  },\n\n  plugins: [\n    // Ignore any of our optional modules if they aren't installed. This ignores database drivers\n    // that we aren't using for example.\n    new EnvironmentPlugin({ WEBPACK: true }),\n    new IgnorePlugin({\n      checkResource: resource => {\n        const baseResource = resource.split('/', resource[0] === '@' ? 2 : 1).join('/');\n\n        if (optionalModules.has(baseResource)) {\n          try {\n            require.resolve(resource);\n            return false;\n          } catch {\n            return true;\n          }\n        }\n\n        return false;\n      },\n    }),\n  ],\n\n  output: {\n    filename: 'server.js',\n    libraryTarget: 'commonjs',\n    path: path.resolve(__dirname, '..', 'output'),\n  },\n};\n")),(0,i.kt)("h3",{id:"running-webpack"},"Running Webpack"),(0,i.kt)("p",null,"To run Webpack execute ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"npx webpack")," if not installed globally) in the root\nof the project. It will probably throw a few warnings but you can ignore the errors regarding\nMikroORM: the mentioned pieces of code won't be executed if properly bundled with Webpack."))}d.isMDXComponent=!0}}]);