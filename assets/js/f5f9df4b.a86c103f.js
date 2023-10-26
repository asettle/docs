"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[68610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:8,sidebar_label:"Install Harvester Binaries Only",title:"Install Harvester Binaries Only",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the GitHub releases. During the installation, you can choose to install the binaries only."},o=void 0,s={unversionedId:"install/install-binaries-mode",id:"install/install-binaries-mode",title:"Install Harvester Binaries Only",description:"Available as of v1.2.0",source:"@site/docs/install/install-binaries-mode.md",sourceDirName:"install",slug:"/install/install-binaries-mode",permalink:"/v1.3/install/install-binaries-mode",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/install-binaries-mode.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Install Harvester Binaries Only",title:"Install Harvester Binaries Only",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],Description:"To get the Harvester ISO, download it from the GitHub releases. During the installation, you can choose to install the binaries only."},sidebar:"docs",previous:{title:"Management Address",permalink:"/v1.3/install/management-address"},next:{title:"Air Gapped Environment",permalink:"/v1.3/airgap"}},l={},d=[{value:"Background",id:"background",level:3},{value:"Stream disk mode",id:"stream-disk-mode",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/install/install-binaries-mode"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Install Harvester binaries only")," mode allows you to install and configure binaries only, making it ideal for cloud and edge use cases."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"choose-installation-mode.png",src:n(12328).Z,width:"1152",height:"216"})),(0,a.kt)("h3",{id:"background"},"Background"),(0,a.kt)("p",null,"Currently when a new Harvester node is launched it needs to be the first node in the cluster or join an existing cluster.\nThese two modes are useful when you already know enough about the environment to install the Harvester node.\nHowever, for use cases such as bare-metal cloud providers and the edge, these installation modes load the OS and Harvester content to the node without letting you configure the network. Moreover, the K8s and networking configuration will not be applied."),(0,a.kt)("p",null,"If you choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Install Harvester binaries only"),", you will need to perform additional configuration after the first bootup:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create/Join option for Harvester"),(0,a.kt)("li",{parentName:"ul"},"Management network interface details"),(0,a.kt)("li",{parentName:"ul"},"Cluster token"),(0,a.kt)("li",{parentName:"ul"},"Node password")),(0,a.kt)("p",null,"Then, the installer will apply the endpoint configuration and boot Harvester. No further reboots will be required."),(0,a.kt)("h3",{id:"stream-disk-mode"},"Stream disk mode"),(0,a.kt)("p",null,"Harvester has published a raw image artifact for pre-installed Harvester. The Harvester installer now allows streaming a pre-installed image directly to disk to support better integration with cloud providers."),(0,a.kt)("p",null,"On ",(0,a.kt)("inlineCode",{parentName:"p"},"Equinix Metal"),", you can use the following kernel arguments to use the streaming mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl root=live:http://${artifactEndpoint}/harvester-v1.2.0-rootfs-amd64.squashfs harvester.install.automatic=true harvester.scheme_version=1 harvester.install.device=/dev/vda  harvester.os.password=password harvester.install.raw_disk_image_path=http://${artifactEndpoint}/harvester-v1.2.0-amd64.raw harvester.install.mode=install console=tty1 harvester.install.tty=tty1 harvester.install.config_url=https://metadata.platformequinix.com/userdata harvester.install.management_interface.interfaces="name:enp1s0" harvester.install.management_interface.method=dhcp harvester.install.management_interface.bond_options.mode=balance-tlb harvester.install.management_interface.bond_options.miimon=100\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When streaming to disk, it is recommended to host the raw disk artifact closer to the targets, as the raw disk artifact is nearly 16G in size.")))}u.isMDXComponent=!0},12328:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/choose-installation-mode-5940cde59cb99d8eb4368bc58a5fb434.png"}}]);