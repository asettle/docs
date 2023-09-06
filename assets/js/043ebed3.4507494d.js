"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:9,sidebar_label:"Clone VM",title:"Clone VM",keywords:["Harvester","harvester","Rancher","rancher","Clone VM"],Description:"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."},i=void 0,l={unversionedId:"vm/clone-vm",id:"version-v1.1/vm/clone-vm",title:"Clone VM",description:"Available as of v1.1.0",source:"@site/versioned_docs/version-v1.1/vm/clone-vm.md",sourceDirName:"vm",slug:"/vm/clone-vm",permalink:"/v1.1/vm/clone-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/clone-vm.md",tags:[],version:"v1.1",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Clone VM",title:"Clone VM",keywords:["Harvester","harvester","Rancher","rancher","Clone VM"],Description:"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."},sidebar:"docs",previous:{title:"Resource Overcommit",permalink:"/v1.1/vm/resource-overcommit"},next:{title:"Create a Volume",permalink:"/v1.1/volume/index"}},c={},s=[{value:"Clone VM with volume data",id:"clone-vm-with-volume-data",level:2},{value:"Clone VM without volume data",id:"clone-vm-without-volume-data",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/clone-vm"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."),(0,a.kt)("h2",{id:"clone-vm-with-volume-data"},"Clone VM with volume data"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone")," of the VM actions."),(0,a.kt)("li",{parentName:"ol"},"Set a new VM name and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM.\n",(0,a.kt)("img",{alt:"clone-vm-with-data.png",src:n(82131).Z,width:"1599",height:"639"}))),(0,a.kt)("h2",{id:"clone-vm-without-volume-data"},"Clone VM without volume data"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone")," of the VM actions."),(0,a.kt)("li",{parentName:"ol"},"Unclick the ",(0,a.kt)("inlineCode",{parentName:"li"},"clone volume data")," checkbox."),(0,a.kt)("li",{parentName:"ol"},"Set a new VM name and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM.\n",(0,a.kt)("img",{alt:"clone-vm-without-data.png",src:n(94875).Z,width:"1599",height:"899"}))))}u.isMDXComponent=!0},82131:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clone-vm-with-data-c31f7312f951428fef067e4afd4196f8.png"},94875:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clone-vm-without-data-b04f17ece9f5f6c5872f9801bbd2bb9b.png"}}]);