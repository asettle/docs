"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),h=a,f=l["".concat(d,".").concat(h)]||l[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7,sidebar_label:"Seeder",title:"Seeder"},i=void 0,s={unversionedId:"advanced/seeder",id:"advanced/seeder",title:"Seeder",description:"Available as of v1.2.0",source:"@site/docs/advanced/seeder.md",sourceDirName:"advanced",slug:"/advanced/seeder",permalink:"/zh/v1.2/advanced/seeder",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/seeder.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Seeder",title:"Seeder"},sidebar:"docs",previous:{title:"PCI \u8bbe\u5907",permalink:"/zh/v1.2/advanced/pcidevices"},next:{title:"Rancher vcluster",permalink:"/zh/v1.2/advanced/rancher-vcluster"}},d={},c=[{value:"Power operations",id:"power-operations",level:2},{value:"Hardware event aggregation",id:"hardware-event-aggregation",level:2}],p={toc:c},l="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(l,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/seeder"})),"_Available as of v1.2.0_",(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," addon lets you perform out-of-band operations on underlying nodes. "),(0,a.kt)("p",null,"This addon can also discover hardware and hardware events for bare-metal nodes that support redfish-based access and then associate the hardware with the corresponding Harvester nodes."),(0,a.kt)("p",null,"You must enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," addon from the ",(0,a.kt)("strong",{parentName:"p"},"Addons")," page to get started."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97087).Z,width:"1039",height:"577"})),(0,a.kt)("p",null,"Once the addon is enabled, find the desired host and select ",(0,a.kt)("strong",{parentName:"p"},"Edit Config")," and go to the ",(0,a.kt)("strong",{parentName:"p"},"Out-Of-Band Access")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(15721).Z,width:"1250",height:"544"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92037).Z,width:"1271",height:"682"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"seeder")," leverages ",(0,a.kt)("inlineCode",{parentName:"p"},"ipmi")," to manage the underlying node hardware."),(0,a.kt)("p",null,"Hardware discovery and event detection require ",(0,a.kt)("inlineCode",{parentName:"p"},"redfish")," support."),(0,a.kt)("h2",{id:"power-operations"},"Power operations"),(0,a.kt)("p",null,"Once you've defined the out-of-band config for a node, you can put the node into ",(0,a.kt)("inlineCode",{parentName:"p"},"Maintenance")," mode, which allows you to shut down or reboot the node as needed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73268).Z,width:"1179",height:"381"})),(0,a.kt)("p",null,"If a node is shut down, you can also select ",(0,a.kt)("strong",{parentName:"p"},"Power On")," to power it on again:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(90671).Z,width:"1175",height:"222"})),(0,a.kt)("h2",{id:"hardware-event-aggregation"},"Hardware event aggregation"),(0,a.kt)("p",null,"If you've enabled ",(0,a.kt)("strong",{parentName:"p"},"Event")," in ",(0,a.kt)("strong",{parentName:"p"},"Out-of-Band Access"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"seeder")," will leverage ",(0,a.kt)("inlineCode",{parentName:"p"},"redfish")," to query the underlying hardware for information about component failures and fan temperatures."),(0,a.kt)("p",null,"This information is associated with Harvester nodes and can be used as Kubernetes events."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61944).Z,width:"1111",height:"263"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Sometimes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Out-Of-Band Access")," section may be stuck with the message ",(0,a.kt)("inlineCode",{parentName:"p"},'Waiting for "inventories.metal.harvesterhci.io" to be ready'),". In this case, you need to refresh the page. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4412"},"this issue"),".")))}u.isMDXComponent=!0},15721:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditConfig-a6417b75728e54327ffa1be2e408e461.png"},61944:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/HardwareEvents-cc0c8422f453b4bf923129d8db896f09.png"},92037:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OutOfBandAccess-5cc330e566556c72ae97b290fd0a165a.png"},90671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PowerOn-0fe7143d3be8a1c57ecc883db2500e30.png"},73268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ShutdownReboot-e83fae9ea2bbfcbb7bfd2b1487afb2e1.png"},97087:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);