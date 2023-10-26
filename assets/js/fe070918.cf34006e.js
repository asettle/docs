"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[75542],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),m=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=m(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||n;return t?r.createElement(g,o(o({ref:a},p),{},{components:t})):r.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<n;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70878:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=t(87462),i=(t(67294),t(3905));const n={id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],Description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},o=void 0,l={unversionedId:"upload-image",id:"version-v1.1/upload-image",title:"Upload Images",description:"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes.",source:"@site/versioned_docs/version-v1.1/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/v1.1/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upload-image.md",tags:[],version:"v1.1",sidebarPosition:6,frontMatter:{id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],Description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/v1.1/authentication"},next:{title:"Host Management",permalink:"/v1.1/host/"}},s={},m=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3},{value:"Image StorageClass",id:"image-storageclass",level:3},{value:"Image Labels",id:"image-labels",level:3}],p={toc:m},c="wrapper";function d(e){let{components:a,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,i.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,i.kt)("p",null,"To import virtual machine images in the ",(0,i.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(70351).Z,width:"5120",height:"1512"})),(0,i.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,i.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(86046).Z,width:"5120",height:"1616"})),(0,i.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Export Image"),". Enter the image name and select a StorageClass to create an image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(20596).Z,width:"2560",height:"726"})),(0,i.kt)("h3",{id:"image-storageclass"},"Image StorageClass"),(0,i.kt)("p",null,"When creating an image, you can select a ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/advanced/storageclass"},"StorageClass")," and use its pre-defined parameters like replicas, node selectors and disk selectors ."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image will not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," selected here directly. It's just a ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," template."),(0,i.kt)("p",{parentName:"admonition"},"Instead, it will create a special StorageClass under the hood with a prefix name of ",(0,i.kt)("inlineCode",{parentName:"p"},"longhorn-"),". This is automatically done by the Harvester backend, but it will inherit the parameters from the StorageClass you have selected.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(65267).Z,width:"2560",height:"1297"})),(0,i.kt)("h3",{id:"image-labels"},"Image Labels"),(0,i.kt)("p",null,"You can add labels to the image, which will help identify the OS type more accurately. Also, you can add any custom labels for filtering if needed."),(0,i.kt)("p",null,"If your image name or URL contains any valid information, the UI will automatically recognize the OS type and image category for you. If not, you can also manually specify those corresponding labels on the UI."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(80468).Z,width:"4382",height:"1498"})))}d.isMDXComponent=!0},80468:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/image-labels-d742377d68f63e01883436d86f3422e6.png"},65267:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/image-storageclass-4bbb0a3b3152e221f380b15b32ade5b1.png"},86046:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/upload-image-local-4a9a097f0a1cc582797a58411f0940a0.png"},70351:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/upload-image-400a8a7376f481a4347e81d134a80b89.png"},20596:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/export-volume-to-image-1-7eadd6b18692690838773948966a5836.png"}}]);