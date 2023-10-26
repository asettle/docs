"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[94267],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(t),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||c;return t?a.createElement(d,i(i({ref:r},p),{},{components:t})):a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[h]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28672:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const c={id:"index",sidebar_position:1,sidebar_label:"Rancher \u96c6\u6210",title:"Rancher \u96c6\u6210",keywords:["Harvester","harvester","Rancher","rancher","Rancher \u96c6\u6210"],Description:"Rancher \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0\u3002\u4ece Rancher v2.6.1 \u5f00\u59cb\uff0cHarvester \u9ed8\u8ba4\u96c6\u6210 Rancher\u3002"},i=void 0,o={unversionedId:"rancher/index",id:"rancher/index",title:"Rancher \u96c6\u6210",description:"\u4ece v0.3.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/index",permalink:"/zh/v1.3/rancher/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/rancher-integration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Rancher \u96c6\u6210",title:"Rancher \u96c6\u6210",keywords:["Harvester","harvester","Rancher","rancher","Rancher \u96c6\u6210"],Description:"Rancher \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0\u3002\u4ece Rancher v2.6.1 \u5f00\u59cb\uff0cHarvester \u9ed8\u8ba4\u96c6\u6210 Rancher\u3002"},sidebar:"docs",previous:{title:"Rancher Manager",permalink:"/zh/v1.3/advanced/addons/rancher-vcluster"},next:{title:"\u865a\u62df\u5316\u7ba1\u7406",permalink:"/zh/v1.3/rancher/virtualization-management"}},l={},s=[{value:"Rancher \u548c Harvester \u652f\u6301\u77e9\u9635",id:"rancher-\u548c-harvester-\u652f\u6301\u77e9\u9635",level:2},{value:"\u90e8\u7f72 Rancher Server",id:"\u90e8\u7f72-rancher-server",level:2},{value:"\u865a\u62df\u5316\u7ba1\u7406",id:"\u865a\u62df\u5316\u7ba1\u7406",level:2},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa Kubernetes \u96c6\u7fa4",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u521b\u5efa-kubernetes-\u96c6\u7fa4",level:2}],p={toc:s},h="wrapper";function u(e){let{components:r,...c}=e;return(0,n.kt)(h,(0,a.Z)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u4ece v0.3.0 \u8d77\u53ef\u7528")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0\u3002\u4ece Rancher v2.6.1 \u5f00\u59cb\uff0cRancher \u9ed8\u8ba4\u96c6\u6210\u4e86 Harvester \u96c6\u7fa4\u5bfc\u5165\u4ee5\u652f\u6301\u865a\u62df\u673a\u4e0e\u5bb9\u5668\u7684\u7edf\u4e00\u7ba1\u7406\u3002"),(0,n.kt)("h2",{id:"rancher-\u548c-harvester-\u652f\u6301\u77e9\u9635"},"Rancher \u548c Harvester \u652f\u6301\u77e9\u9635"),(0,n.kt)("p",null,"\u6709\u5173\u652f\u6301\u77e9\u9635\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-1/#anchor-h4-item2"},"Harvester & Rancher \u652f\u6301\u77e9\u9635"),"\u3002"),(0,n.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 Rancher \u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.3/rancher/virtualization-management"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u5bfc\u5165\u548c\u7ba1\u7406\u591a\u4e2a Harvester \u96c6\u7fa4\uff0c\u5e76\u5229\u7528 Rancher \u7684",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"\u8ba4\u8bc1"),"\u529f\u80fd\u548c RBAC \u63a7\u5236\u6765\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"\u591a\u79df\u6237"),"\u652f\u6301\u3002"),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/fyxDm3HVwWI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"virtualization-management",src:t(88085).Z,width:"5114",height:"1796"})),(0,n.kt)("h2",{id:"\u90e8\u7f72-rancher-server"},"\u90e8\u7f72 Rancher Server"),(0,n.kt)("p",null,"\u8981\u60f3\u901a\u8fc7 Rancher \u4f7f\u7528 Harvester\uff0c\u8bf7\u5c06 Rancher \u548c Harvester \u5b89\u88c5\u5728\u4e24\u4e2a\u72ec\u7acb\u7684\u670d\u52a1\u5668\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u8bd5\u7528\u96c6\u6210\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5728 Harvester \u4e2d\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u673a\uff0c\u7136\u540e\u5b89\u88c5 Rancher v2.6.3 \u6216\u4ee5\u4e0a\u7248\u672c\uff08\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\uff09\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4f7f\u7528\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\uff0c\u5728\u4f60\u9009\u62e9\u7684\u63d0\u4f9b\u5546\u4e2d\u90e8\u7f72\u548c\u914d\u7f6e Rancher \u548c Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-qs/"},"AWS"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-marketplace-qs/"},"AWS Marketplace"),"\uff08\u4f7f\u7528 Amazon EKS\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/microsoft-azure-qs/"},"Azure"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/digital-ocean-qs/"},"DigitalOcean"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/google-gcp-qs/"},"GCP"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/hetzner-cloud-qs/"},"Hetzner Cloud"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/quickstart-vagrant/"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/equinix-metal-qs/"},"Equinix Metal"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Docker \u6765\u5b89\u88c5 Rancher"),"\u3002\u5426\u5219\uff0c\u4f60\u7684\u73af\u5883\u53ef\u80fd\u4f1a\u635f\u574f\uff0c\u800c\u4e14\u96c6\u7fa4\u53ef\u80fd\u65e0\u6cd5\u6062\u590d\u3002\u5728 Docker \u4e2d\u5b89\u88c5 Rancher \u53ea\u9002\u7528\u4e8e\u5feb\u901f\u8bc4\u4f30\u548c\u6d4b\u8bd5\u573a\u666f\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u8981\u4f7f\u7528 Docker \u5b89\u88c5 Rancher\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e Linux \u4e3b\u673a\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u96c6\u7fa4\u3002\u4f60\u7684\u4e3b\u673a\u53ef\u4ee5\u662f\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e91\u865a\u62df\u673a"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u865a\u62df\u673a"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668"))),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f60\u60ef\u7528\u7684 shell\uff08\u4f8b\u5982 PuTTy \u6216\u8fdc\u7a0b\u7ec8\u7aef\u8fde\u63a5\uff09\u767b\u5f55\u4f60\u7684 Linux \u4e3b\u673a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728 shell \u4e2d\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e3a\u4e86\u5feb\u901f\u8bc4\u4f30\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c Rancher Server\n$ sudo docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.9\n"))),(0,n.kt)("h2",{id:"\u865a\u62df\u5316\u7ba1\u7406"},"\u865a\u62df\u5316\u7ba1\u7406"),(0,n.kt)("p",null,"\u501f\u52a9 Rancher \u7684\u865a\u62df\u5316\u7ba1\u7406\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5bfc\u5165\u548c\u7ba1\u7406 Harvester \u96c6\u7fa4\u3002\n\u901a\u8fc7\u5355\u51fb\u5176\u4e2d\u4e00\u4e2a\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u548c\u7ba1\u7406\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u8d44\u6e90\uff0c\u4f8b\u5982\u4e3b\u673a\u3001\u865a\u62df\u673a\u3001\u955c\u50cf\u3001\u5377\u7b49\u3002\u6b64\u5916\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"Virtualization Management")," \u5229\u7528\u4e86\u73b0\u6709\u7684 Rancher \u529f\u80fd\uff0c\u4f8b\u5982\u901a\u8fc7\u5404\u79cd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u548c\u591a\u79df\u6237\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u8be6\u60c5\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.3/rancher/virtualization-management"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-cluster",src:t(79546).Z,width:"2559",height:"988"})),(0,n.kt)("h2",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u521b\u5efa-kubernetes-\u96c6\u7fa4"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa Kubernetes \u96c6\u7fa4"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zh/v1.3/rancher/node/node-driver"},"Harvester \u4e3b\u673a\u9a71\u52a8"),"\u7528\u4e8e\u5728 Harvester \u96c6\u7fa4\u4e2d\u521b\u5efa\u5e76\u914d\u7f6e\u865a\u62df\u673a\uff0c\u800c Rancher \u4f1a\u4f7f\u7528\u8fd9\u4e9b\u865a\u62df\u673a\u6765\u542f\u52a8\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1")," \u5f00\u59cb\u5df2\u9ed8\u8ba4\u6dfb\u52a0 Harvester \u4e3b\u673a\u9a71\u52a8\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.3/rancher/node/node-driver"},"node-driver")," \u9875\u9762\u3002"))}u.isMDXComponent=!0},79546:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},88085:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/virtualization-management-18bf128eb90c9308b712a84414bbdff3.png"}}]);