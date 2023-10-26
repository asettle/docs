"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[54609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),v=a,g=d["".concat(p,".").concat(v)]||d[v]||c[v]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},66163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1"},i=void 0,s={unversionedId:"upgrade/v1-2-0-to-v1-2-1",id:"upgrade/v1-2-0-to-v1-2-1",title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",description:"Important changes to this version",source:"@site/docs/upgrade/v1-2-0-to-v1-2-1.md",sourceDirName:"upgrade",slug:"/upgrade/v1-2-0-to-v1-2-1",permalink:"/v1.3/upgrade/v1-2-0-to-v1-2-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/v1-2-0-to-v1-2-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1"},sidebar:"docs",previous:{title:"Upgrading Harvester",permalink:"/v1.3/upgrade/index"},next:{title:"Upgrade from v1.1.2 to v1.2.0 (not recommended)",permalink:"/v1.3/upgrade/v1-1-2-to-v1-2-0"}},p={},u=[{value:"Important changes to this version",id:"important-changes-to-this-version",level:2},{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2}],l={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upgrade/v1-2-0-to-v1-2-1"})),(0,a.kt)("h2",{id:"important-changes-to-this-version"},"Important changes to this version"),(0,a.kt)("p",null,"Harvester ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.1")," fixes upgrade known issues found in ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.0"),", we suggest upgrading ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1.2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.0")," clusters to ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.1"),". The known issues found in ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.0")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v1.3/upgrade/v1-1-2-to-v1-2-0#9-an-upgrade-is-stuck-in-the-post-draining-state"},"An Upgrade is stuck in the Post-draining state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v1.3/upgrade/v1-1-2-to-v1-2-0#10-an-upgrade-is-stuck-in-the-upgrading-system-service-state-due-to-the-customer-provided-ssl-certificate-without-ip-san-error-in-fleet-agent"},"An upgrade is stuck in the Upgrading System Service state due to the customer provided SSL certificate without IP SAN error in fleet-agent"))),(0,a.kt)("p",null,"For clusters already upgraded to v1.2.0, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases/tag/v1.2.1"},"release note")," for new changes."),(0,a.kt)("h2",{id:"general-information"},"General information"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before you start an upgrade, you can run the pre-check script to make sure the cluster is in a stable state. For more details, please visit this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/tree/main/pre-check/v1.1.x"},"URL")," for the script.")),(0,a.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/upgrade/index#start-an-upgrade"},"start an upgrade"),"."),(0,a.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/upgrade/index#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,a.kt)("h2",{id:"known-issues"},"Known issues"),(0,a.kt)("p",null,"Please check v1.2.0 ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/upgrade/v1-1-2-to-v1-2-0#known-issues"},"known issues"),"."))}c.isMDXComponent=!0}}]);