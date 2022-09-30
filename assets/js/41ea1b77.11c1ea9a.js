"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Rancher Integration",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},o="Rancher Integration",l={unversionedId:"rancher/rancher-integration",id:"version-v1.0/rancher/rancher-integration",title:"",description:"Available as of v0.3.0",source:"@site/versioned_docs/version-v1.0/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/v1.0/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/rancher-integration.md",tags:[],version:"v1.0",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"Sep 27, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher Integration",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/v1.0/monitoring/"},next:{title:"Virtualization Management",permalink:"/v1.0/rancher/virtualization-management"}},s={},c=[{value:"Rancher &amp; Harvester Support Matrix",id:"rancher--harvester-support-matrix",level:2},{value:"Deploying Rancher Server",id:"deploying-rancher-server",level:2},{value:"Virtualization Management",id:"virtualization-management",level:2},{value:"Creating Kubernetes Clusters using the Harvester Node Driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rancher-integration"},"Rancher Integration"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."),(0,n.kt)("h2",{id:"rancher--harvester-support-matrix"},"Rancher & Harvester Support Matrix"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rancher Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Harvester Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.3 - v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.2 - v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Harvester v1.0.0 is compatible with Rancher v2.6.3 or above only.")),(0,n.kt)("p",null,"Users can now import and manage multiple Harvester clusters using the Rancher ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/virtualization-management"},"Virtualization Management")," page and leverage the Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/"},"authentication")," feature and RBAC control for ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"multi-tenancy")," support."),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/fyxDm3HVwWI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"virtualization-management",src:r(90196).Z,width:"5114",height:"1796"})),(0,n.kt)("h2",{id:"deploying-rancher-server"},"Deploying Rancher Server"),(0,n.kt)("p",null,"To use Rancher with Harvester, please install the Rancher and Harvester in two separated servers. If you want to try out the integration features, you can create a VM in Harvester and install Rancher v2.6.3 or above (the latest stable version is recommended)."),(0,n.kt)("p",null,"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster with the provider of your choice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-qs/"},"AWS")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-marketplace-qs/"},"AWS Marketplace")," (uses Amazon EKS)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/microsoft-azure-qs/"},"Azure")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/digital-ocean-qs/"},"DigitalOcean")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/google-gcp-qs/"},"GCP")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/hetzner-cloud-qs/"},"Hetzner Cloud")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/quickstart-vagrant/"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/equinix-metal-qs/"},"Equinix Metal"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do not install Rancher with Docker in production"),". Otherwise, your environment may be damaged and your cluster may not be recovered. Installing Rancher in Docker should only be used for quick evaluation and testing purposes."),(0,n.kt)("p",{parentName:"admonition"},"To install Rancher with Docker:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Begin creation of a custom cluster by provisioning a Linux host. Your host can be any of the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A cloud-hosted virtual machine (VM)"),(0,n.kt)("li",{parentName:"ul"},"An on-premises VM"),(0,n.kt)("li",{parentName:"ul"},"A bare-metal server"))),(0,n.kt)("li",{parentName:"ol"},"Log into your Linux host using your preferred shell, such as PuTTy or a remote terminal connection."),(0,n.kt)("li",{parentName:"ol"},"From your shell, enter the following command:")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# for a quick evaluation, you can run the Rancher server with the following command\n$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.6\n"))),(0,n.kt)("h2",{id:"virtualization-management"},"Virtualization Management"),(0,n.kt)("p",null,"With Rancher's Virtualization Management feature, you can now import and manage Harvester clusters.\nBy clicking on one of the clusters, you are able to view and manage the imported Harvester cluster resources like Hosts, VMs, images, volumes, etc. Additionally, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Virtualization Management")," leverages existing Rancher features such as authentication with various auth providers and multi-tenant support."),(0,n.kt)("p",null,"For more details, please check the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/virtualization-management"},"virtualization management")," page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-cluster",src:r(49653).Z,width:"2559",height:"988"})),(0,n.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes Clusters using the Harvester Node Driver"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/node-driver"},"Harvester node driver")," is used to provision VMs in the Harvester cluster, which Rancher uses to launch and manage guest Kubernetes clusters."),(0,n.kt)("p",null,"Starting with Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver has been added by default. Users can reference the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/node-driver"},"node-driver")," page for more details."))}u.isMDXComponent=!0},49653:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},90196:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/virtualization-management-18bf128eb90c9308b712a84414bbdff3.png"}}]);