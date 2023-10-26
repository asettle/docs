"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[38503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||r;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],Description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},s=void 0,o={unversionedId:"vm/access-to-the-vm",id:"version-v1.1/vm/access-to-the-vm",title:"Access to the Virtual Machine",description:"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI.",source:"@site/versioned_docs/version-v1.1/vm/access-to-the-vm.md",sourceDirName:"vm",slug:"/vm/access-to-the-vm",permalink:"/v1.1/vm/access-to-the-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/access-to-the-vm.md",tags:[],version:"v1.1",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],Description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},sidebar:"tutorialSidebar",previous:{title:"Edit a Virtual Machine",permalink:"/v1.1/vm/edit-vm"},next:{title:"VM Backup, Snapshot & Restore",permalink:"/v1.1/vm/backup-restore"}},c={},l=[{value:"Access with the Harvester UI",id:"access-with-the-harvester-ui",level:2},{value:"SSH Access",id:"ssh-access",level:2},{value:"Static SSH Key Injection via cloud-init",id:"static-ssh-key-injection-via-cloud-init",level:3},{value:"Example of SSH key cloud-init configuration:",id:"example-of-ssh-key-cloud-init-configuration",level:4},{value:"Dynamic SSH Key Injection via Qemu guest agent",id:"dynamic-ssh-key-injection-via-qemu-guest-agent",level:3},{value:"Access with the SSH Client",id:"access-with-the-ssh-client",level:3}],u={toc:l},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/access-to-the-vm"})),(0,a.kt)("p",null,"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI."),(0,a.kt)("p",null,"Additionally, you can connect directly from your computer's SSH client."),(0,a.kt)("h2",{id:"access-with-the-harvester-ui"},"Access with the Harvester UI"),(0,a.kt)("p",null,"VMs can be accessed from the UI directly using either VNC or the serial console."),(0,a.kt)("p",null,"If the VGA display is not enabled on the VM, e.g., the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu-Minimal-Cloud")," image, the VM can only be accessed with the serial console."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92822).Z,width:"4250",height:"1594"})),(0,a.kt)("h2",{id:"ssh-access"},"SSH Access"),(0,a.kt)("p",null,"Harvester provides two ways to inject SSH public keys into virtual machines. Generally, these methods fall into two categories. ",(0,a.kt)("a",{parentName:"p",href:"#static-ssh-key-injection-via-cloud-init"},"Static key injection"),", which places keys in the cloud-init script when the virtual machine is first powered on; ",(0,a.kt)("a",{parentName:"p",href:"#dynamic-ssh-key-injection-via-qemu-guest-agent"},"dynamic injection"),", which allows keys or basic auth to be updated dynamically at runtime."),(0,a.kt)("h3",{id:"static-ssh-key-injection-via-cloud-init"},"Static SSH Key Injection via cloud-init"),(0,a.kt)("p",null,"You can provide ssh keys to your virtual machines during the creation time on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Basics")," tab. Additionally, you can place the public ssh keys into your cloud-init script to allow it to take place."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91233).Z,width:"2207",height:"912"})),(0,a.kt)("h4",{id:"example-of-ssh-key-cloud-init-configuration"},"Example of SSH key cloud-init configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\nssh_authorized_keys:\n  - >-\n    ssh-rsa #replace with your public key\n")),(0,a.kt)("h3",{id:"dynamic-ssh-key-injection-via-qemu-guest-agent"},"Dynamic SSH Key Injection via Qemu guest agent"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,a.kt)("p",null,"Harvester supports dynamically injecting public ssh keys at run time through the use of the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.qemu.org/Features/GuestAgent"},"qemu guest agent"),". This is achieved through the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemuGuestAgent")," propagation method."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method requires the qemu guest agent to be installed within the guest VM."),(0,a.kt)("p",{parentName:"admonition"},"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"qemuGuestAgent")," propagation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/$USER/.ssh/authorized_keys")," file will be owned by the guest agent. Changes to that file that are made outside of the qemu guest agent's control will get deleted.")),(0,a.kt)("p",null,"You can inject your access credentials via the Harvester dashboard as below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the VM and click ",(0,a.kt)("inlineCode",{parentName:"li"},"\u22ee")," button."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit Config")," button and go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Access Credentials")," tab."),(0,a.kt)("li",{parentName:"ol"},"Click to add either basic auth credentials or ssh keys, (e.g., add ",(0,a.kt)("inlineCode",{parentName:"li"},"opensuse")," as the user and select your ssh keys if your guest OS is OpenSUSE)."),(0,a.kt)("li",{parentName:"ol"},"Make sure your qemu guest agent is already installed and the VM should be restarted after the credentials are added.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You need to enter the VM to edit password or remove SSH-Key after deleting the credentials from the UI.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44600).Z,width:"4250",height:"1576"})),(0,a.kt)("h3",{id:"access-with-the-ssh-client"},"Access with the SSH Client"),(0,a.kt)("p",null,"Once the VM is up and running, you can enter the IP address of the VM in a terminal emulation client, such as PuTTY. You may also run the following command to access the VM directly from your computer's SSH client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")))}d.isMDXComponent=!0},92822:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/access-to-vm-f791c865d36729ac644da4e124878e5f.png"},44600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vm-add-access-credentails-cb00d2dcde86ab3864d42c300a19caf6.png"},91233:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vm-ssh-keys-566e05b859f07771f5f7268b4ce0c05e.png"}}]);