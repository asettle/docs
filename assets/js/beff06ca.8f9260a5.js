"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[53998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,p=u["".concat(l,".").concat(d)]||u[d]||v[d]||i;return r?o.createElement(p,a(a({ref:t},m),{},{components:r})):o.createElement(p,a({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],Description:"Overcommit resources to a VM."},a=void 0,s={unversionedId:"vm/resource-overcommit",id:"version-v1.2/vm/resource-overcommit",title:"Resource Overcommit",description:"Harvester supports global configuration of resource overload percentages on CPU, memory, and storage. By setting overcommit-config, this will allow scheduling of additional virtual machines even when physical resources are fully utilized.",source:"@site/versioned_docs/version-v1.2/vm/resource-overcommit.md",sourceDirName:"vm",slug:"/vm/resource-overcommit",permalink:"/v1.2/vm/resource-overcommit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/vm/resource-overcommit.md",tags:[],version:"v1.2",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],Description:"Overcommit resources to a VM."},sidebar:"docs",previous:{title:"Hot-Plug Volumes",permalink:"/v1.2/vm/hotplug-volume"},next:{title:"Clone VM",permalink:"/v1.2/vm/clone-vm"}},l={},c=[{value:"Configure the global setting <code>overcommit-config</code>",id:"configure-the-global-setting-overcommit-config",level:2},{value:"Configure overcommit for a single virtual machine",id:"configure-overcommit-for-a-single-virtual-machine",level:2},{value:"Reserve more memory for the system overhead",id:"reserve-more-memory-for-the-system-overhead",level:2},{value:"Why my virtual machines are scheduled unevenly?",id:"why-my-virtual-machines-are-scheduled-unevenly",level:2}],m={toc:c},u="wrapper";function v(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/resource-overcommit"})),(0,n.kt)("p",null,"Harvester supports global configuration of resource overload percentages on CPU, memory, and storage. By setting ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/advanced/index#overcommit-config"},(0,n.kt)("inlineCode",{parentName:"a"},"overcommit-config")),", this will allow scheduling of additional virtual machines even when physical resources are fully utilized."),(0,n.kt)("p",null,"Harvester allows you to overcommit CPU and RAM on compute nodes. This allows you to increase the number of instances running on your cloud at the cost of reducing the performance of the instances. The Compute service uses the following ratios by default:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPU allocation ratio: 1600%"),(0,n.kt)("li",{parentName:"ul"},"RAM allocation ratio: 150%"),(0,n.kt)("li",{parentName:"ul"},"Storage allocation ratio: 200%")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Classic memory overcommitment or memory ballooning is not yet supported by this feature. In other words, memory used by a virtual machine instance cannot be returned once allocated.")),(0,n.kt)("h2",{id:"configure-the-global-setting-overcommit-config"},"Configure the global setting ",(0,n.kt)("a",{parentName:"h2",href:"/v1.2/advanced/index#overcommit-config"},(0,n.kt)("inlineCode",{parentName:"a"},"overcommit-config"))),(0,n.kt)("p",null,"Users can modify the global ",(0,n.kt)("inlineCode",{parentName:"p"},"overcommit-config")," by following the steps below, and it will be applied to each newly created virtual machine after the change."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Advanced > Settings")," page."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"overcommit page",src:r(40072).Z,width:"1909",height:"876"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the ",(0,n.kt)("inlineCode",{parentName:"p"},"overcommit-config")," setting.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the desired CPU, Memory, and Storage ratio."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"overcommit panel",src:r(62460).Z,width:"1615",height:"803"})))),(0,n.kt)("h2",{id:"configure-overcommit-for-a-single-virtual-machine"},"Configure overcommit for a single virtual machine"),(0,n.kt)("p",null,"In situations where you require specific configurations for individual virtual machines without affecting the global settings, you can easily achieve this by modifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.template.spec.domain.resources.limits.<memory|cpu>")," value on the corresponding virtual machine spec directly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"vm overcommit config",src:r(46675).Z,width:"620",height:"143"})),(0,n.kt)("h2",{id:"reserve-more-memory-for-the-system-overhead"},"Reserve more memory for the system overhead"),(0,n.kt)("p",null,"By default, the Harvester reserves a certain amount of system management overhead memory from the memory allocated for the virtual machine. In most cases, this will not cause any problems. However, some operating systems, such as Windows 2022, will request more memory than is reserved."),(0,n.kt)("p",null,"To address the issue, Harvester provides an annotation ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory")," on VirtualMachine custom resource to let you specify the amount of memory to reserve. For instance, add ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory: 200Mi")," if you decide to reserve 200 MiB for the system overhead of the VM."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"}," apiVersion: kubevirt.io/v1\n kind: VirtualMachine\n metadata:\n   annotations:\n+    harvesterhci.io/reservedMemory: 200Mi\n     kubevirt.io/latest-observed-api-version: v1\n     kubevirt.io/storage-observed-api-version: v1alpha3\n     network.harvesterhci.io/ips: '[]'\n   ...\n   ...\n")),(0,n.kt)("h2",{id:"why-my-virtual-machines-are-scheduled-unevenly"},"Why my virtual machines are scheduled unevenly?"),(0,n.kt)("p",null,"The scheduling of virtual machines depends on the underlying behavior of the kube-scheduler. We have a dedicated article explaining the details. If you would like to learn more, check out:  ",(0,n.kt)("a",{parentName:"p",href:"https://harvesterhci.io/kb/vm-scheduling/"},"Harvester Knowledge Base: VM Scheduling"),"."))}v.isMDXComponent=!0},40072:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/overcommit-page-dce434aea661da539e60c8bef58038e1.png"},62460:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/overcommit-panel-c734569d29247d1c909455e6e5dae8dc.png"},46675:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vm-overcommit-config-b3385970717064c2ba05d1fee8499259.png"}}]);