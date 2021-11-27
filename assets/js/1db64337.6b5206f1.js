"use strict";(self.webpackChunkfnts_docs=self.webpackChunkfnts_docs||[]).push([[372],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6777:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"overview",slug:"/",title:"Overview",sidebar_position:0},l=void 0,p={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:'fnts is an abbreviation for something like a "functional TypeScript". You could see a similar concept in libraries like fp-ts or ramda, each endorsing their own implementation of the idea.',source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/fnts/",editUrl:"https://github.com/drizzer14/fnts/docs/docs/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",slug:"/",title:"Overview",sidebar_position:0},sidebar:"default",next:{title:"Installation and Usage",permalink:"/fnts/installation-and-usage"}},c=[{value:"Tooling",id:"tooling",children:[{value:"Currying",id:"currying",children:[],level:3},{value:"Composition",id:"composition",children:[],level:3},{value:"Arguments Permutation",id:"arguments-permutation",children:[],level:3},{value:"Monads",id:"monads",children:[],level:3},{value:"Side effects",id:"side-effects",children:[],level:3},{value:"Guarding",id:"guarding",children:[],level:3},{value:"Control Flow",id:"control-flow",children:[],level:3}],level:2}],m={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fnts"),' is an abbreviation for something like a "functional TypeScript". You could see a similar concept in libraries like ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/gcanti/fp-ts"},"fp-ts")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ramda/ramda"},"ramda"),", each endorsing their own implementation of the idea."),(0,a.kt)("p",null,"Here, the philosophy is to give the small set of functions, the possession of which makes it easier to operate the code in a functional style."),(0,a.kt)("p",null,'The minimal amount of abstractions not present in the TypeScript itself, or being hard to implement and use, (like HKT, typeclasses, overwhelming amount of iterators and transducers) aims to reduce the learning curve of this seemingly "different" style of programming.'),(0,a.kt)("h2",{id:"tooling"},"Tooling"),(0,a.kt)("p",null,"The library basically provides the tools to handily operate the following concepts: monads, currying, composition, guarding, handling side effects and control flows. Nothing more, nothing less."),(0,a.kt)("h3",{id:"currying"},(0,a.kt)("a",{parentName:"h3",href:"/concepts/currying"},"Currying")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"curry")," function is here to help with auto-currying of variadic or fixed amount of arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import curry from 'fnts/curry';\n\nconst sumOfThree = curry(\n  (a: number, b: number, c: number): number => {\n    return a + b + c;\n  }\n);\n\nsumOfThree(1, 2, 3) === \nsumOfThree(1, 2)(3) === \nsumOfThree(1)(2, 3) === \nsumOfThree(1)(2)(3);\n")),(0,a.kt)("h3",{id:"composition"},(0,a.kt)("a",{parentName:"h3",href:"/concepts/composition"},"Composition")),(0,a.kt)("p",null,"Composition in ",(0,a.kt)("inlineCode",{parentName:"p"},"fnts")," is represented through the ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," functions. Both are implemented without the overloads, which causes the types to be rather ",(0,a.kt)("em",{parentName:"p"},"imposed")," than inferred."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import compose from 'fnts/compose';\n\nconst isTwoDigits = compose(\n  (b: boolean) => b ? 'true' : 'false',\n  (s: string) => s.length === 2, // argument type imposed from the next function\n  (n: number) => `${n}`,\n); // will accept only a number as argument\n\nisTwoDigits(5) === 'false';\nisTwoDigits(14) === 'true';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import pipe from 'fnts/pipe';\n\nconst isTwoDigits = pipe(\n  (n: number) => `${n}`,\n  (s: string) => s.length === 2,\n  (b: boolean) => b ? 'true' : 'false',\n);\n\nisTwoDigits(5) === 'false';\nisTwoDigits(14) === 'true';\n")),(0,a.kt)("h3",{id:"arguments-permutation"},(0,a.kt)("a",{parentName:"h3",href:"/concepts/arguments-permutation"},"Arguments Permutation")),(0,a.kt)("p",null,"For non-commutative operations or functions that ",(0,a.kt)("em",{parentName:"p"},"can")," be applied in the compositional context it is handy to be able to automatically permutate (switch places of) their arguments. For some functions in ",(0,a.kt)("inlineCode",{parentName:"p"},"fnts")," this is already implemented:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fmap } from 'fnts/maybe/operators';\n\nconst mapToNumber = (maybe: Maybe<string>): Maybe<number> => fmap(maybe, (value) => Number(value));\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"mapToNumber")," declaration is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { fmap } from 'fnts/maybe/operators';\n\nconst mapToNumber = fmap<string, number>(Number);\n")),(0,a.kt)("h3",{id:"monads"},(0,a.kt)("a",{parentName:"h3",href:"/concepts/monads"},"Monads")),(0,a.kt)("p",null,"Out of the variety of monads ",(0,a.kt)("inlineCode",{parentName:"p"},"fnts")," chooses two presumably most suitable ones: ",(0,a.kt)("inlineCode",{parentName:"p"},"maybe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"either"),". Each have their own constructors and operators (as opposed to classes and methods based approach seen commonly)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import maybe from 'fnts/maybe';\nimport { foldMap } from 'fnts/maybe/operators';\n\nfoldMap(\n  maybe([1, 2, 3].find((n) => n > 2)),\n  (n) => n === 3\n); // true\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import either from 'fnts/either';\nimport { bifoldMap } from 'fnts/either/operators';\n\nbifoldMap(\n  await either(\n    () => fetch('https://github.com')\n  ),\n  (error) => console.error(error),\n  (data) => data\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import eitherSync from 'fnts/either';\nimport { bifoldMap } from 'fnts/either/operators';\n\nbifoldMap(\n  eitherSync(\n   () => JSON.parse(localStorage.getItem('context'))\n  ),\n  (error) => console.error(error),\n  (data) => data\n);\n")),(0,a.kt)("h3",{id:"side-effects"},(0,a.kt)("a",{parentName:"h3",href:"/concepts/side-effects"},"Side effects")),(0,a.kt)("p",null,"For handling side effects there are a couple of functions, the underlying concept of which is to not interfere with the main execution flow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import inject from 'fnts/inject';\n\nconst computeAndLog = inject(\n  compute,\n  (...args) => console.log('Computing with args: ', args)\n);\n\ncomputeAndLog(1, 2, 3);\n")),(0,a.kt)("h3",{id:"guarding"},(0,a.kt)("a",{parentName:"h3",href:"/concepts/guarding"},"Guarding")),(0,a.kt)("p",null,'In computing there\'s a pattern called "guard". Specifically, Haskell has a dedicated ',(0,a.kt)("a",{parentName:"p",href:"https://wiki.haskell.org/Pattern_guard"},"syntax")," for that, which ",(0,a.kt)("inlineCode",{parentName:"p"},"fnts")," also implemented in a more JavaScripty way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import guard from 'fnts/guard';\n\nguard<(x: number) => number>(\n  [(x) => x < 5, (x) => x + 1],\n  [(x) => x === 5, (x) => x - 1],\n  () => 1\n)(5) // 4\n")),(0,a.kt)("h3",{id:"control-flow"},"Control Flow"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ternary")," function is here to help, when there's a need to add a simple control flow expression which relies on the same argument in a condition and both branches. Additionally, it enforces the same return type for truthy and falsy expressions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import ternary from 'fnts/ternary';\n\nconst lt = (b: number) => (a: number) => a < b;\n\nconst incr = (a: number) => a + 1;\n\nconst decr = (a: number) => a - 1;\n\nternary(\n  lt(5), // condition\n  incr, // if true\n  decr // if false\n)(4);\n")),(0,a.kt)("p",null,"Equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"4 < 5 ? 4 + 1 : 4 - 1;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"For a full overview of the available tools consult with the ",(0,a.kt)("a",{parentName:"p",href:"/api"},"API")," reference."))}u.isMDXComponent=!0}}]);