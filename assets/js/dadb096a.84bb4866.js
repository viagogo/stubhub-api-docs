"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9354],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:e},p),{},{components:n})):r.createElement(y,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5385:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={description:"Specify what type of access is needed by your application."},l="Scopes",c={unversionedId:"authentication/scopes",id:"authentication/scopes",title:"Scopes",description:"Specify what type of access is needed by your application.",source:"@site/docs/authentication/scopes.md",sourceDirName:"authentication",slug:"/authentication/scopes",permalink:"/docs/authentication/scopes",editUrl:"https://github.com/viagogo/stubhub-api-docs/tree/main/docs/authentication/scopes.md",tags:[],version:"current",frontMatter:{description:"Specify what type of access is needed by your application."},sidebar:"docs",previous:{title:"Token Expiration",permalink:"/docs/authentication/token-expiration"},next:{title:"Guides",permalink:"/docs/guides/"}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scopes"},"Scopes"),(0,o.kt)("p",null,"Scopes allow your applications to specify exactly what type of access is needed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"read:events")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants read-only access to events on the StubHub platform.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"read:payment")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants read-only access to the user's payments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"read:sales")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants read access to the user\u2019s sales.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"write:sales")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants write access to the user's sales. This allows users to use your application to confirm and fulfill sales.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"read:sellerlistings")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants read access to the user\u2019s listings.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"write:sellerlistings")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants write access to the user\u2019s listings. This allows users to use your application to create and update listings.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"read:webhooks")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants read access to the user\u2019s webhooks.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"write:webhooks")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants write access to the user\u2019s webhooks.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"write:requestedevents")),(0,o.kt)("td",{parentName:"tr",align:null},"Grants write access to the user's requested events. This allows users to use your application to request an event to be added to the StubHub platform.")))))}d.isMDXComponent=!0}}]);