"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[81382],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const i={id:"harvester-monitoring",sidebar_position:1,sidebar_label:"\u76d1\u63a7",title:"\u76d1\u63a7"},o=void 0,l={unversionedId:"monitoring/harvester-monitoring",id:"monitoring/harvester-monitoring",title:"\u76d1\u63a7",description:"\u4ece v0.3.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/monitoring/harvester-monitoring.md",sourceDirName:"monitoring",slug:"/monitoring/harvester-monitoring",permalink:"/zh/v1.3/monitoring/harvester-monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/monitoring/harvester-monitoring.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"harvester-monitoring",sidebar_position:1,sidebar_label:"\u76d1\u63a7",title:"\u76d1\u63a7"},sidebar:"docs",previous:{title:"\u65e5\u5fd7",permalink:"/zh/v1.3/logging/harvester-logging"},next:{title:"\u8bbe\u7f6e",permalink:"/zh/v1.3/advanced/index"}},p={},m=[{value:"\u4eea\u8868\u76d8\u6307\u6807",id:"\u4eea\u8868\u76d8\u6307\u6807",level:2},{value:"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807",id:"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807",level:2},{value:"\u914d\u7f6e Monitoring",id:"\u914d\u7f6e-monitoring",level:2},{value:"\u4f7f\u7528 WebUI",id:"\u4f7f\u7528-webui",level:3},{value:"\u4f7f\u7528 CLI",id:"\u4f7f\u7528-cli",level:3},{value:"Alertmanager",id:"alertmanager",level:2},{value:"Alertmanager \u914d\u7f6e",id:"alertmanager-\u914d\u7f6e",level:3},{value:"\u542f\u7528/\u7981\u7528 Alertmanager",id:"\u542f\u7528\u7981\u7528-alertmanager",level:4},{value:"\u66f4\u6539\u8d44\u6e90\u8bbe\u7f6e",id:"\u66f4\u6539\u8d44\u6e90\u8bbe\u7f6e",level:4},{value:"\u4ece WebUI \u914d\u7f6e AlertmanagerConfig",id:"\u4ece-webui-\u914d\u7f6e-alertmanagerconfig",level:4},{value:"\u4ece CLI \u914d\u7f6e AlertmanagerConfig",id:"\u4ece-cli-\u914d\u7f6e-alertmanagerconfig",level:4},{value:"Webhook \u6536\u5230\u7684\u544a\u8b66\u793a\u4f8b",id:"webhook-\u6536\u5230\u7684\u544a\u8b66\u793a\u4f8b",level:4},{value:"\u5df2\u77e5\u9650\u5236",id:"\u5df2\u77e5\u9650\u5236",level:4},{value:"\u67e5\u770b\u548c\u7ba1\u7406\u544a\u8b66",id:"\u67e5\u770b\u548c\u7ba1\u7406\u544a\u8b66",level:3},{value:"\u4f7f\u7528 Alertmanager \u4eea\u8868\u677f",id:"\u4f7f\u7528-alertmanager-\u4eea\u8868\u677f",level:4},{value:"\u4f7f\u7528 Prometheus \u4eea\u8868\u677f",id:"\u4f7f\u7528-prometheus-\u4eea\u8868\u677f",level:4},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],s={toc:m},c="wrapper";function d(e){let{components:n,...i}=e;return(0,a.kt)(c,(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v0.3.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u76d1\u63a7\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u73b0\u5728\u7684\u76d1\u63a7\u529f\u80fd\u901a\u8fc7\u63d2\u4ef6\u5b9e\u73b0\uff0c\u5e76\u4e14\u5728\u65b0\u5b89\u88c5\u4e2d\u9ed8\u8ba4\u7981\u7528\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece Harvester WebUI \u542f\u7528/\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.3/advanced/addons"},"\u63d2\u4ef6"),"\u3002"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.3/install/harvester-configuration#installaddons"},"harvester-configuration")," \u6587\u4ef6\u5728 Harvester \u4e2d\u542f\u7528/\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4ece v1.1.* \u5347\u7ea7\u7684 Harvester \u96c6\u7fa4\uff0c\u76d1\u63a7\u529f\u80fd\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a\u63d2\u4ef6\u5e76\u50cf\u4ee5\u524d\u4e00\u6837\u4fdd\u6301\u542f\u7528\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u4eea\u8868\u76d8\u6307\u6807"},"\u4eea\u8868\u76d8\u6307\u6807"),(0,a.kt)("p",null,"Harvester \u5df2\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u5185\u7f6e\u96c6\u6210\u76d1\u63a7\u3002\u76d1\u63a7\u4f1a\u5728 Harvester \u5b89\u88c5\u671f\u95f4\u81ea\u52a8\u542f\u7528\u3002"),(0,a.kt)("p",null,"\u5728 Harvester \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u9875\u9762\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5206\u522b\u67e5\u770b\u96c6\u7fa4\u6307\u6807\u4ee5\u53ca\u6700\u5e38\u7528\u7684 10 \u4e2a\u865a\u62df\u673a\u6307\u6807\u3002\n\u6b64\u5916\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb ",(0,a.kt)("a",{parentName:"p",href:"http://grafana.com/"},"Grafana")," \u4eea\u8868\u76d8\u94fe\u63a5\uff0c\u4ece\u800c\u5728 Grafana UI \u4e0a\u67e5\u770b\u66f4\u591a\u4eea\u8868\u76d8\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(53219).Z,width:"4474",height:"2426"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u53ea\u6709\u7ba1\u200b\u200b\u7406\u5458\u7528\u6237\u624d\u80fd\u67e5\u770b\u96c6\u7fa4\u4eea\u8868\u76d8\u6307\u6807\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u53e6\u5916\uff0cGrafana \u662f\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u63d0\u4f9b\u7684\uff0c\u56e0\u6b64\u9ed8\u8ba4\u7684\u7ba1\u7406\u5458\u5bc6\u7801\u662f prom-operator\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.7/charts/rancher-project-monitoring"},"values.yaml"))),(0,a.kt)("h2",{id:"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807"},"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"VM details page > VM Metrics")," \u6765\u67e5\u770b\u200b\u200b\u5404\u4e2a\u865a\u62df\u673a\u7684\u6307\u6807\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(73687).Z,width:"2264",height:"1132"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Usage")," \u7684\u8ba1\u7b97\u516c\u5f0f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"(1 - free/total) x 100%"),"\uff0c\u800c\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"(used/total) x 100%"),"\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5728 Linux \u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"free -h")," \u547d\u4ee4\u8f93\u51fa\u5f53\u524d\u5185\u5b58\u7684\u7edf\u8ba1\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ free -h\n                total        used        free      shared  buff/cache   available\nMem:          7.7Gi       166Mi       4.6Gi       1.0Mi       2.9Gi       7.2Gi\nSwap:            0B          0B          0B\n")),(0,a.kt)("p",null,"\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Usage")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"(1 - 4.6/7.7) x 100%"),"\uff0c\u5373\u5927\u81f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"40%"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-monitoring"},"\u914d\u7f6e Monitoring"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.0.1 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"Monitoring \u6709\u51e0\u4e2a\u53ef\u7528\u4e8e\u6536\u96c6\u548c\u805a\u5408\u6240\u6709\u8282\u70b9/Pod/VM \u6307\u6807\u6570\u636e\u7684\u7ec4\u4ef6\u3002Monitoring \u6240\u9700\u7684\u8d44\u6e90\u53d6\u51b3\u4e8e\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u786c\u4ef6\u8d44\u6e90\u3002Harvester \u4f1a\u6839\u636e\u4e00\u822c\u7528\u4f8b\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u4f60\u53ef\u4ee5\u76f8\u5e94\u5730\u66f4\u6539\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Resources Settings")," \u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Prometheus Node Exporter\uff08",(0,a.kt)("em",{parentName:"li"},"\u4ece v1.0.2 \u5f00\u59cb\u53ef\u4ee5\u4ece UI \u4e2d\u8fdb\u884c\u914d\u7f6e"),"\uff09")),(0,a.kt)("h3",{id:"\u4f7f\u7528-webui"},"\u4f7f\u7528 WebUI"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring & Logging")," \u9875\u9762\u4e0a\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u548c\u66f4\u6539\u8d44\u6e90\u8bbe\u7f6e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u822a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring > Configuration")," \u9875\u9762\u3002\n",(0,a.kt)("img",{src:t(87646).Z,width:"5116",height:"1944"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Save"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u8d44\u6e90\u4f1a\u5728\u51e0\u79d2\u540e\u91cd\u542f\u3002\u8bf7\u6ce8\u610f\uff0c\u91cd\u65b0\u542f\u52a8\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u6765\u91cd\u65b0\u52a0\u8f7d\u4ee5\u524d\u7684\u6570\u636e\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6700\u5e38\u7528\u7684\u9009\u9879\uff1a\u5185\u5b58\u8bbe\u7f6e")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Requested Memory")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u8d44\u6e90\u6240\u9700\u7684\u6700\u5c0f\u5185\u5b58\u3002\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u5355\u4e2a\u7ba1\u7406\u8282\u70b9\u7cfb\u7edf\u5185\u5b58\u7684 5% \u5230 10%\u3002\u5c0f\u4e8e 500Mi \u7684\u503c\u5c06\u88ab\u62d2\u7edd\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Memory Limit")," \u662f\u53ef\u4ee5\u5206\u914d\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u8d44\u6e90\u7684\u6700\u5927\u5185\u5b58\u3002\u5bf9\u4e8e\u5355\u4e2a\u7ba1\u7406\u8282\u70b9\uff0c\u63a8\u8350\u8bbe\u7f6e\u4e3a\u7cfb\u7edf\u5185\u5b58\u7684 30% \u5de6\u53f3\u3002\u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u4f1a\u81ea\u52a8\u91cd\u542f\u3002"))),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u53ef\u7528\u7684\u786c\u4ef6\u8d44\u6e90\u548c\u7cfb\u7edf\u8d1f\u8f7d\u76f8\u5e94\u5730\u66f4\u6539\u4ee5\u4e0a\u8bbe\u7f6e\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u4e0d\u540c\u786c\u4ef6\u8d44\u6e90\u7684\u7ba1\u7406\u8282\u70b9\uff0c\u8bf7\u6839\u636e\u8f83\u5c0f\u7684\u8282\u70b9\u6765\u8bbe\u7f6e Prometheus \u7684\u503c\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u67d0\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72\u4e86\u8d8a\u6765\u8d8a\u591a\u7684\u865a\u62df\u673a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus-node-exporter")," Pod \u53ef\u80fd\u4f1a\u7531\u4e8e OOM\uff08\u5185\u5b58\u4e0d\u8db3\uff09\u800c\u88ab\u6740\u6b7b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"limits.memory")," \u7684\u503c\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528-cli"},"\u4f7f\u7528 CLI"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 CLI \u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"$kubectl edit managedchart rancher-monitoring -n fleet-local")," \u6765\u66f4\u65b0\u8fd9\u4e9b\u503c\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},">= v1.0.1")," \u7684 Harvester \u7248\u672c\uff0c\u76f8\u5173\u8def\u5f84\u548c\u9ed8\u8ba4\u503c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Prometheus configs\nspec.values.prometheus.prometheusSpec.resources.limits.cpu: 1000m\nspec.values.prometheus.prometheusSpec.resources.limits.memory: 2500Mi\nspec.values.prometheus.prometheusSpec.resources.requests.cpu: 750m\nspec.values.prometheus.prometheusSpec.resources.requests.memory: 1750Mi\n---\n# node exporter configs\nspec.values.prometheus-node-exporter.resources.limits.cpu: 200m\nspec.values.prometheus-node-exporter.resources.limits.memory: 180Mi\nspec.values.prometheus-node-exporter.resources.requests.cpu: 100m\nspec.values.prometheus-node-exporter.resources.requests.memory: 30Mi\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"<= v1.0.0")," \u7684\u7248\u672c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"managedchart rancher-monitoring")," \u4e2d\u6ca1\u6709\u6307\u5b9a\u76f8\u5173\u8def\u5f84\u548c\u9ed8\u8ba4\u503c\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u76f8\u5e94\u6dfb\u52a0\u5b83\u4eec\u3002"),(0,a.kt)("h2",{id:"alertmanager"},"Alertmanager"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Harvester")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager")," \u6765\u6536\u96c6\u548c\u7ba1\u7406\u96c6\u7fa4\u4e2d\u53d1\u751f/\u6b63\u5728\u53d1\u751f\u7684\u6240\u6709\u544a\u8b66\u3002"),(0,a.kt)("h3",{id:"alertmanager-\u914d\u7f6e"},"Alertmanager \u914d\u7f6e"),(0,a.kt)("h4",{id:"\u542f\u7528\u7981\u7528-alertmanager"},"\u542f\u7528/\u7981\u7528 Alertmanager"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager")," \u9ed8\u8ba4\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u8def\u5f84\u6765\u7981\u7528\u5b83\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(51526).Z,width:"2758",height:"1166"})),(0,a.kt)("h4",{id:"\u66f4\u6539\u8d44\u6e90\u8bbe\u7f6e"},"\u66f4\u6539\u8d44\u6e90\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager")," \u7684\u8d44\u6e90\u8bbe\u7f6e\uff0c\u5982\u4e0a\u56fe\u6240\u793a\u3002"),(0,a.kt)("h4",{id:"\u4ece-webui-\u914d\u7f6e-alertmanagerconfig"},"\u4ece WebUI \u914d\u7f6e AlertmanagerConfig"),(0,a.kt)("p",null,"\u8981\u5c06\u544a\u8b66\u53d1\u9001\u5230\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\uff0c\u4f60\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig"),"\u3002"),(0,a.kt)("p",null,"\u5728 WebUI \u4e0a\uff0c\u5bfc\u822a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring & Logging")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager Configs")," \u9875\u9762\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager Config: Create")," \u9875\u9762\u4e2d\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),"\uff0c\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u76ee\u6807\u547d\u540d\u7a7a\u95f4\u5e76\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Name"),"\u3002\u7136\u540e\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(73198).Z,width:"2760",height:"1274"})),(0,a.kt)("p",null,"\u5355\u51fb\u521a\u521a\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager Configs")," \u7ee7\u7eed\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(96545).Z,width:"1648",height:"810"})),(0,a.kt)("p",null,"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Receiver"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(5234).Z,width:"2292",height:"880"})),(0,a.kt)("p",null,"\u4e3a\u63a5\u6536\u5668\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Name"),"\u3002\u7136\u540e\uff0c\u9009\u62e9\u63a5\u6536\u5668\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Webhook"),"\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Webhook"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(90887).Z,width:"1488",height:"844"})),(0,a.kt)("p",null,"\u586b\u5199\u6240\u9700\u53c2\u6570\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Create"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(35526).Z,width:"2268",height:"1566"})),(0,a.kt)("h4",{id:"\u4ece-cli-\u914d\u7f6e-alertmanagerconfig"},"\u4ece CLI \u914d\u7f6e AlertmanagerConfig"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4ece CLI \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig"),"\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Webhook \u63a5\u6536\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat << EOF > a-single-receiver.yaml\napiVersion: monitoring.coreos.com/v1alpha1\nkind: AlertmanagerConfig\nmetadata:\n  name: amc-example\n  # namespace: your value\n  labels:\n    alertmanagerConfig: example\nspec:\n  route:\n    continue: true\n    groupBy:\n    - cluster\n    - alertname\n    receiver: "amc-webhook-receiver"\n  receivers:\n  - name: "amc-webhook-receiver"\n    webhookConfigs:\n    - sendResolved: true\n      url: "http://192.168.122.159:8090/"\nEOF\n\n# kubectl apply -f a-single-receiver.yaml\nalertmanagerconfig.monitoring.coreos.com/amc-example created\n\n# kubectl get alertmanagerconfig -A\nNAMESPACE   NAME          AGE\ndefault     amc-example   27s\n\n')),(0,a.kt)("h4",{id:"webhook-\u6536\u5230\u7684\u544a\u8b66\u793a\u4f8b"},"Webhook \u6536\u5230\u7684\u544a\u8b66\u793a\u4f8b"),(0,a.kt)("p",null,"\u53d1\u9001\u5230 Webhook \u670d\u52a1\u5668\u7684\u544a\u8b66\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n'receiver': 'longhorn-system-amc-example-amc-webhook-receiver',\n'status': 'firing',\n'alerts': [],\n'groupLabels': {},\n'commonLabels': {'alertname': 'LonghornVolumeStatusWarning', 'container': 'longhorn-manager', 'endpoint': 'manager', 'instance': '10.52.0.83:9500', 'issue': 'Longhorn volume is Degraded.',\n'job': 'longhorn-backend', 'namespace': 'longhorn-system', 'node': 'harv2', 'pod': 'longhorn-manager-r5bgm', 'prometheus': 'cattle-monitoring-system/rancher-monitoring-prometheus',\n'service': 'longhorn-backend', 'severity': 'warning'},\n'commonAnnotations': {'description': 'Longhorn volume is Degraded for more than 5 minutes.', 'runbook_url': 'https://longhorn.io/docs/1.3.0/monitoring/metrics/',\n'summary': 'Longhorn volume is Degraded'},\n'externalURL': 'https://192.168.122.200/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-alertmanager:9093/proxy',\n'version': '4',\n'groupKey': '{}/{namespace=\"longhorn-system\"}:{}',\n'truncatedAlerts': 0\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u7684\u63a5\u6536\u5668\u53ef\u4ee5\u4ee5\u4e0d\u540c\u7684\u683c\u5f0f\u5448\u73b0\u544a\u8b66\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u76f8\u5173\u6587\u4ef6\u3002")),(0,a.kt)("h4",{id:"\u5df2\u77e5\u9650\u5236"},"\u5df2\u77e5\u9650\u5236"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig")," \u7531",(0,a.kt)("inlineCode",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u5f3a\u5236\u6267\u884c\u3002\u4e0d\u652f\u6301\u6ca1\u6709\u547d\u540d\u7a7a\u95f4\u7684\u5168\u5c40\u7ea7\u522b ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/2760"},"GithHb issue")," \u6765\u8ddf\u8e2a\u4e0a\u6e38\u66f4\u6539\u3002\u4e00\u65e6\u8be5\u529f\u80fd\u53ef\u7528\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester")," \u5c06\u91c7\u7528\u5b83\u3002"),(0,a.kt)("h3",{id:"\u67e5\u770b\u548c\u7ba1\u7406\u544a\u8b66"},"\u67e5\u770b\u548c\u7ba1\u7406\u544a\u8b66"),(0,a.kt)("h4",{id:"\u4f7f\u7528-alertmanager-\u4eea\u8868\u677f"},"\u4f7f\u7528 Alertmanager \u4eea\u8868\u677f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u4e0b\u9762\u7684\u94fe\u63a5\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager")," \u7684\u539f\u59cb\u4eea\u8868\u677f\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"the-cluster-vip")," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684 cluster-vip\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"https://the-cluster-vip/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-alertmanager:9093/proxy/#/alerts")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alertmanager")," \u4eea\u8868\u677f\u7684\u6574\u4f53\u89c6\u56fe\u5982\u4e0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(45045).Z,width:"1732",height:"1034"})),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u67e5\u770b\u544a\u8b66\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(20214).Z,width:"1914",height:"734"})),(0,a.kt)("h4",{id:"\u4f7f\u7528-prometheus-\u4eea\u8868\u677f"},"\u4f7f\u7528 Prometheus \u4eea\u8868\u677f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u4e0b\u9762\u7684\u94fe\u63a5\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," \u7684\u539f\u59cb\u4eea\u8868\u677f\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"the-cluster-vip")," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684 cluster-vip\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"https://the-cluster-vip/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-prometheus:9090/proxy/")),(0,a.kt)("p",null,"\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Alerts")," \u83dc\u5355\u663e\u793a\u4e86 Prometheus \u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u89c4\u5219\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fc7\u6ee4\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"Inactive"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Pending")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Firing")," \u5feb\u901f\u627e\u5230\u4f60\u9700\u8981\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(78537).Z,width:"2888",height:"1100"})),(0,a.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,a.kt)("p",null,"\u5982\u9700 Monitoring \u7684\u652f\u6301\u548c\u6545\u969c\u6392\u9664\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.3/troubleshooting/monitoring"},"\u6545\u969c\u6392\u9664\u9875\u9762"),"\u3002"))}d.isMDXComponent=!0},20214:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/alert-view-detail-7652c4ac907f179ee6133942cd26beb6.png"},73198:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/alertmanager-config-create-1-c3e85c83aa0467b24e85604774846cb5.png"},51526:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/alertmanager-config-enable-and-resource-2299f14df13f48ef0ede8dbb0f9e545f.png"},45045:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/alertmanager-dashboard-fe37e592162c82e53b936e56ad44a16e.png"},87646:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/monitoring-config-94704ee043c24c1c4faf873e6e28c239.png"},53219:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/monitoring-dashboard-79ab4d05235fe38880afb9bbde00a9e9.png"},5234:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/prepare-to-add-receiver-8fe49d3da3f8b6fc5c1134696439960a.png"},78537:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/prometheus-original-alerts-9b908a5a3c0925e8a822d82057e28be7.png"},96545:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/view-alertmanager-config-df00e265a008f7975230536d7902c061.png"},73687:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vm-metrics-46cc5179899848d80187d69f7185e29e.png"},90887:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/webhook-receiver-1-e98fd1a4551a8b2b95fe1caa85331251.png"},35526:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/webhook-receiver-2-93f2282ddf8e4a5c6f13dc800584e786.png"}}]);