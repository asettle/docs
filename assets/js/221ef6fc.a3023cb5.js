"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8322],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},o=void 0,l={unversionedId:"install/iso-install",id:"version-v1.0/install/iso-install",title:"ISO Installation",description:"To get the Harvester ISO image, download it from the Github releases page.",source:"@site/versioned_docs/version-v1.0/install/iso-install.md",sourceDirName:"install",slug:"/install/iso-install",permalink:"/v1.0/install/iso-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/install/iso-install.md",tags:[],version:"v1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/v1.0/install/requirements"},next:{title:"USB Installation",permalink:"/v1.0/install/usb-install"}},s={},p=[],c={toc:p},h="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/iso-install"})),(0,r.kt)("p",null,"To get the Harvester ISO image, download it from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases")," page."),(0,r.kt)("p",null,"During the installation you can either choose to form a new cluster, or join the node to an existing cluster."),(0,r.kt)("p",null,"Note: This ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/X0VIGZ_lExQ"},"video")," shows a quick overview of the ISO installation."),(0,r.kt)("div",{class:"text-center"},(0,r.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/X0VIGZ_lExQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester Installer")," option.\n",(0,r.kt)("img",{alt:"iso-install.png",src:a(41721).Z,width:"1429",height:"789"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the installation mode by either creating a new Harvester cluster, or by joining an existing one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the installation device on which the Harvester cluster will be installed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: By default, Harvester uses ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," partitioning schema for both UEFI and BIOS. If you use the BIOS boot, then you will have the option to select ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),".\n",(0,r.kt)("img",{alt:"iso-install-disk.png",src:a(79322).Z,width:"2100",height:"674"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bonded NIC named ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),", and the IP address can be configured via DHCP or a statically assigned one ",(0,r.kt)("small",null,"(Note: The Node IP can not change at the lifecycle of a Harvester cluster, in case the DHCP is used, the user must make sure the DHCP server always offers the same IP for the same Node. Due to a changed Node IP the related Node can not join the cluster, or even break the cluster)"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"iso-installed.png",src:a(53109).Z,width:"422",height:"317"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Configure the DNS servers. Use commas as a delimiter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual IP")," which you can use to access the cluster or join other nodes to the cluster ",(0,r.kt)("small",null,"(Note: If your IP address is configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP, VIP must be different than any Node IP)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster token"),". This token will be used for adding other nodes to the cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the login password of the host. The default SSH user is ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Recommended configuring the NTP server to make sure all nodes' times are synchronized. This defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here. Otherwise, leave this blank.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) You can choose to import SSH keys from a remote server URL. Your GitHub public keys can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) If you need to customize the host with a ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration"},"Harvester configuration")," file, enter the HTTP URL here.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After confirming the installation options, Harvester will be installed to your host. The installation may take a few minutes to be complete.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the installation is complete, it will restart the host. After the restart, the Harvester console containing the management URL and status will be displayed. You can Use ",(0,r.kt)("inlineCode",{parentName:"p"},"F12")," to switch between the Harvester console and the Shell.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The default URL of the web interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),".\n",(0,r.kt)("img",{alt:"iso-installed.png",src:a(66986).Z,width:"1580",height:"770"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be prompted to set the password for the default ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user when logging in for the first time.\n",(0,r.kt)("img",{alt:"first-login.png",src:a(15426).Z,width:"2555",height:"1295"})))))}d.isMDXComponent=!0},15426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},79322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iso-install-disk-448de385a9bb510d494266872258c964.png"},41721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iso-install-6aba87041f92c999707af7cea0f6619c.png"},66986:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"},53109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);