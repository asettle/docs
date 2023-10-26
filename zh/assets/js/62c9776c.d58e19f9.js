"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[21448],{3905:(e,r,t)=>{t.d(r,{Zo:()=>v,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},v=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,v=l(e,["components","mdxType","originalType","parentName"]),m=p(t),h=n,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return t?a.createElement(u,i(i({ref:r},v),{},{components:t})):a.createElement(u,i({ref:r},v))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},55332:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={id:"terraform-provider",sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},i=void 0,l={unversionedId:"terraform/terraform-provider",id:"version-v1.1/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"\u652f\u6301\u77e9\u9635",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/zh/v1.1/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/terraform/terraform-provider.md",tags:[],version:"v1.1",sidebarPosition:1,frontMatter:{id:"terraform-provider",sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"tutorialSidebar",previous:{title:"Harvester CSI Driver",permalink:"/zh/v1.1/rancher/csi-driver"},next:{title:"\u5b89\u88c5",permalink:"/zh/v1.1/troubleshooting/index"}},s={},p=[{value:"\u652f\u6301\u77e9\u9635",id:"\u652f\u6301\u77e9\u9635",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5 Provider",id:"\u5b89\u88c5-provider",level:2},{value:"\u4f7f\u7528 provider",id:"\u4f7f\u7528-provider",level:2}],v={toc:p},m="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u652f\u6301\u77e9\u9635"},"\u652f\u6301\u77e9\u9635"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Harvester \u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684 Terraform Provider Harvester"),(0,n.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684 Terraformer Harvester"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.1"},"v1.1.1")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.1"},"v0.6.1")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.0-harvester"},"v1.1.0-harvester"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.0"},"v1.1.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.1"},"v0.6.1")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.0-harvester"},"v1.1.0-harvester"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.0.3"},"v1.0.3")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.5.4"},"v0.5.4")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.0.1-harvester"},"v1.0.1-harvester"))))),(0,n.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," \u7248\u672c\u5927\u4e8e\u7b49\u4e8e 0.13.x"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.18\uff0c\u7528\u6765\u6784\u5efa provider \u63d2\u4ef6")),(0,n.kt)("h2",{id:"\u5b89\u88c5-provider"},"\u5b89\u88c5 Provider"),(0,n.kt)("p",null,"\u5c06\u6b64\u4ee3\u7801\u590d\u5236\u5e76\u7c98\u8d34\u5230\u60a8\u7684 Terraform \u914d\u7f6e\u4e2d\u3002\u7136\u540e\uff0c\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")," \u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,n.kt)("h2",{id:"\u4f7f\u7528-provider"},"\u4f7f\u7528 provider"),(0,n.kt)("p",null,"\u6709\u5173 Provider \u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"\u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"Github \u4ed3\u5e93\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}d.isMDXComponent=!0}}]);