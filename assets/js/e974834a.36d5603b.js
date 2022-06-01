"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[7483],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(u,".").concat(h)]||d[h]||s[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8781:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Localization",l={unversionedId:"overview/localization",id:"overview/localization",title:"Localization",description:"The StubHub API supports various request headers to return locale-specific",source:"@site/docs/overview/localization.md",sourceDirName:"overview",slug:"/overview/localization",permalink:"/docs/overview/localization",editUrl:"https://github.com/viagogo/stubhub-api-docs/tree/main/docs/overview/localization.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sorting",permalink:"/docs/overview/sorting"},next:{title:"Sparse Fieldsets",permalink:"/docs/overview/sparse-fieldsets"}},p=[{value:"Accept-Language Header",id:"accept-language-header",children:[],level:2},{value:"VGG-Country Header",id:"vgg-country-header",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"localization"},"Localization"),(0,o.kt)("p",null,"The StubHub API supports various request headers to return locale-specific\ncontent in responses."),(0,o.kt)("h2",{id:"accept-language-header"},"Accept-Language Header"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header can be used to determine the language of the API\nresponse content (e.g. event names and error messages). Content will be returned\nin English if no ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header is provided, or StubHub does not\ncurrently support the requested language codes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language: da, en-gb;q=0.8, en;q=0.7")),(0,o.kt)("p",null,'In the example header above, the request is specifying "I prefer Danish, but\nwill accept British English and other types of English." See more information\nabout the ',(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4"},"Accept-Language header"),"."),(0,o.kt)("h2",{id:"vgg-country-header"},"VGG-Country Header"),(0,o.kt)("p",null,"Applications can include the ",(0,o.kt)("inlineCode",{parentName:"p"},"VGG-Country")," header to change the\ngeography-context of requests. Each domain of the StubHub website is referred to\nas a ",(0,o.kt)("em",{parentName:"p"},"geography")," that has its own category-structure and language, currency and\ncontent defaults. The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"VGG-Country")," header should be a two-letter\ncountry code as defined by ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO_3166-1"},"ISO 3166"),". If an application does not\nprovide a ",(0,o.kt)("inlineCode",{parentName:"p"},"VGG-Country")," header then the API will default to the ",(0,o.kt)("em",{parentName:"p"},"US")," geography\n(",(0,o.kt)("a",{parentName:"p",href:"http://www.stubhub.com"},"www.stubhub.com"),")."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VGG-Country: FR")),(0,o.kt)("p",null,"In the example above, the application is specifying that it would like make\nrequests in the French geography (as if the client were using the ",(0,o.kt)("a",{parentName:"p",href:"http://www.stubhub.fr"},"www.stubhub.fr"),"\nwebsite)."))}d.isMDXComponent=!0}}]);