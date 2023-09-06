"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],Description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},o=void 0,s={unversionedId:"index",id:"version-v1.0/index",title:"Harvester Overview",description:"Harvester is an open-source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open alternative to using a proprietary HCI stack that incorporates the design and ethos of Cloud Native Computing.",source:"@site/versioned_docs/version-v1.0/index.md",sourceDirName:".",slug:"/",permalink:"/v1.0/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/index.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],Description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},sidebar:"tutorialSidebar",next:{title:"Requirements",permalink:"/v1.0/install/requirements"}},l={},p=[{value:"Harvester Features",id:"harvester-features",level:2},{value:"Harvester Architecture",id:"harvester-architecture",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"ISO Installation",id:"iso-installation",level:3},{value:"PXE/iPXE Installation",id:"pxeipxe-installation",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Harvester is an open-source ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"hyper-converged infrastructure")," (HCI) software built on Kubernetes. It is an open alternative to using a proprietary HCI stack that incorporates the design and ethos of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cloud_native_computing"},"Cloud Native Computing"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harvester-ui",src:r(38423).Z,width:"2558",height:"1304"})),(0,n.kt)("h2",{id:"harvester-features"},"Harvester Features"),(0,n.kt)("p",null,"Harvester implements HCI on bare metal servers. Harvester is designed to use local, direct attached storage instead of complex external SANs. It ships as an integrated bootable appliance image that can be deployed directly to servers through an ISO or PXE boot artifact."),(0,n.kt)("p",null,"Some notable features of Harvester include the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"VM lifecycle management including SSH-Key injection, cloud-init, and graphic and serial port console"),(0,n.kt)("li",{parentName:"ol"},"VM live migration support"),(0,n.kt)("li",{parentName:"ol"},"Supported VM backup and restore"),(0,n.kt)("li",{parentName:"ol"},"Distributed block storage"),(0,n.kt)("li",{parentName:"ol"},"Multiple network interface controllers (NICs) in the VM connecting to the management network or VLANs"),(0,n.kt)("li",{parentName:"ol"},"Virtual Machine and cloud-init templates"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Rancher")," integration with multi-cluster management and the Harvester node driver"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/v1.0/install/pxe-boot-install"},"PXE/iPXE boot support")),(0,n.kt)("li",{parentName:"ol"},"Virtual IP and bond NIC support"),(0,n.kt)("li",{parentName:"ol"},"Monitoring integration")),(0,n.kt)("h2",{id:"harvester-architecture"},"Harvester Architecture"),(0,n.kt)("p",null,"The following diagram outlines a high-level architecture of Harvester:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(37611).Z,width:"943",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"KubeVirt")," is a virtual machine management add-on for Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"Elemental for SLE-Micro 5.2")," (based on openSUSE Leap 15.3 before v1.0.3) is an immutable Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster.")),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"To get the Harvester server up and running, the following minimum hardware is required:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Requirements"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum; 16-core or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum; 64 GB or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"140 GB minimum for testing; 500 GB or above preferred for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk (SSD/NVMe). Management nodes (first three nodes) must be ",(0,n.kt)("a",{parentName:"td",href:"https://www.suse.com/support/kb/doc/?id=000020100"},"fast enough for etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum for testing; 10Gbps Ethernet recommended for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,"You can install Harvester via the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/install/iso-install"},"ISO")," installation or the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/install/pxe-boot-install"},"PXE")," boot installation. Instructions are provided in the sections below."),(0,n.kt)("h3",{id:"iso-installation"},"ISO Installation"),(0,n.kt)("p",null,"You can use the ISO to install Harvester directly on the bare metal server to form a Harvester cluster. Users can add one or many compute nodes to join the existing cluster."),(0,n.kt)("p",null,"To get the Harvester ISO, download it from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases"),"."),(0,n.kt)("p",null,"During the installation, you can either choose to form a new cluster or join the node to an existing cluster."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Installer"),".\n",(0,n.kt)("img",{alt:"iso-install.png",src:r(41721).Z,width:"1429",height:"789"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the installation mode by either creating a new Harvester cluster or by joining an existing one.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the installation device on which the Harvester cluster will be installed"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: By default, Harvester uses ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," partitioning schema for both UEFI and BIOS. If you use the BIOS boot, then you will have the option to select ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),".\n",(0,n.kt)("img",{alt:"iso-install-disk.png",src:r(79322).Z,width:"2100",height:"674"})))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bonded NIC named ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),", and the IP address can be configured via DHCP or a statically assigned one ",(0,n.kt)("small",null,"(Note: The Node IP can not change at the lifecycle of a Harvester cluster, in case the DHCP is used, the user must make sure the DHCP server always offers the same IP for the same Node. Due to a changed Node IP the related Node can not join the cluster, or even break the cluster)"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"iso-installed.png",src:r(53109).Z,width:"422",height:"317"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: Configure the DNS servers; use commas as delimiters.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"Virtual IP")," which you can use to access the cluster or join other nodes to the cluster ",(0,n.kt)("small",null,"(Note: If your IP address is configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP, VIP must be different than any Node IP)"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster token"),". This token will be used for adding other nodes to the cluster.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the login password of the host. The default SSH user is ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Recommended configuring the NTP server to make sure all nodes' times are synchronized. This defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here. Otherwise, leave this blank.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) You can choose to import SSH keys from a remote server URL. Your GitHub public keys can be used with ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you need to customize the host with a ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration"},"Harvester configuration")," file, enter the HTTP URL here.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm the installation options and Harvester will be installed to your host. The installation may take a few minutes to complete.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the installation is complete, the host will restart, and a console UI with management URL and status will be displayed. ",(0,n.kt)("small",null,"(You can Use F12 to switch between the Harvester console and the Shell)."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The default URL of the web interface is ",(0,n.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),".\n",(0,n.kt)("img",{alt:"iso-installed.png",src:r(66986).Z,width:"1580",height:"770"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Users will be prompted to set the password for the default ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," user at first login.\n",(0,n.kt)("img",{alt:"first-login.png",src:r(15426).Z,width:"2555",height:"1295"})))),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/Ngsk7m6NYf4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h3",{id:"pxeipxe-installation"},"PXE/iPXE Installation"),(0,n.kt)("p",null,"Harvester can also be installed automatically. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/install/pxe-boot-install"},"PXE Boot Install")," for detailed instructions and additional guidance."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"More iPXE usage examples are available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"harvester/ipxe-examples"),".")))}c.isMDXComponent=!0},37611:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"},38423:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dashboard-dbd4bec01989ce3a6a3bb94a79f130f7.png"},15426:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},79322:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-install-disk-448de385a9bb510d494266872258c964.png"},41721:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-install-6aba87041f92c999707af7cea0f6619c.png"},66986:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"},53109:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);