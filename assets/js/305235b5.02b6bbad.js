"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[86404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},s=void 0,i={unversionedId:"faq",id:"version-v1.0/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.",source:"@site/versioned_docs/version-v1.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v1.0/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/faq.md",tags:[],version:"v1.0",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/v1.0/troubleshooting/monitoring"}},l={},c=[{value:"How can I ssh login to the Harvester node?",id:"how-can-i-ssh-login-to-the-harvester-node",level:3},{value:"What is the default login username and password of the Harvester dashboard?",id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard",level:3},{value:"How can I access the kubeconfig file of the Harvester cluster?",id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster",level:3},{value:"How to install the qemu-guest-agent of a running VM?",id:"how-to-install-the-qemu-guest-agent-of-a-running-vm",level:3},{value:"How can I reset the administrator password?",id:"how-can-i-reset-the-administrator-password",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester."),(0,a.kt)("h3",{id:"how-can-i-ssh-login-to-the-harvester-node"},"How can I ssh login to the Harvester node?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,a.kt)("h3",{id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard"},"What is the default login username and password of the Harvester dashboard?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # you will be promoted to set the default password when logging in for the first time\n")),(0,a.kt)("h3",{id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?"),(0,a.kt)("p",null,"Option 1. You can download the kubeconfig file from the support page of the Harvester dashboard.\n",(0,a.kt)("img",{alt:"harvester-kubeconfig.png",src:r(11159).Z,width:"2866",height:"1246"})),(0,a.kt)("p",null,"Option 2. You can get the kubeconfig file from one of the Harvester management nodes. E.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,a.kt)("h3",{id:"how-to-install-the-qemu-guest-agent-of-a-running-vm"},"How to install the qemu-guest-agent of a running VM?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init will only be executed once, reboot it after add the cloud-init config with the following command.\n$ cloud-init clean --logs --reboot\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean")),(0,a.kt)("h3",{id:"how-can-i-reset-the-administrator-password"},"How can I reset the administrator password?"),(0,a.kt)("p",null,"In case you forget the administrator password, you can reset it via the command line. SSH to one of the management node and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# switch to root and run\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")))}h.isMDXComponent=!0},11159:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);