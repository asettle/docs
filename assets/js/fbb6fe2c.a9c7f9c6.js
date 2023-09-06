"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={id:"harvester-monitoring",sidebar_position:1,sidebar_label:"Monitoring",title:"Monitoring"},i=void 0,l={unversionedId:"monitoring/harvester-monitoring",id:"monitoring/harvester-monitoring",title:"Monitoring",description:"Available as of v1.2.0",source:"@site/docs/monitoring/harvester-monitoring.md",sourceDirName:"monitoring",slug:"/monitoring/harvester-monitoring",permalink:"/dev/monitoring/harvester-monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/monitoring/harvester-monitoring.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"harvester-monitoring",sidebar_position:1,sidebar_label:"Monitoring",title:"Monitoring"},sidebar:"docs",previous:{title:"Logging",permalink:"/dev/logging/harvester-logging"},next:{title:"Settings",permalink:"/dev/advanced/index"}},s={},m=[{value:"Dashboard Metrics",id:"dashboard-metrics",level:2},{value:"VM Detail Metrics",id:"vm-detail-metrics",level:2},{value:"How to Configure Monitoring Settings",id:"how-to-configure-monitoring-settings",level:2},{value:"From UI",id:"from-ui",level:3},{value:"From CLI",id:"from-cli",level:3},{value:"Alertmanager",id:"alertmanager",level:2},{value:"Alertmanager Config",id:"alertmanager-config",level:3},{value:"Enable/Disable Alertmanager",id:"enabledisable-alertmanager",level:4},{value:"Change Resource Setting",id:"change-resource-setting",level:4},{value:"Configure AlertmanagerConfig from WebUI",id:"configure-alertmanagerconfig-from-webui",level:4},{value:"Configure AlertmanagerConfig from CLI",id:"configure-alertmanagerconfig-from-cli",level:4},{value:"Example of an Alert Received by Webhook",id:"example-of-an-alert-received-by-webhook",level:4},{value:"Known Limitation",id:"known-limitation",level:4},{value:"View and Manage Alerts",id:"view-and-manage-alerts",level:3},{value:"From Alertmanager Dashboard",id:"from-alertmanager-dashboard",level:4},{value:"From Prometheus Dashboard",id:"from-prometheus-dashboard",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/monitoring/harvester-monitoring"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,r.kt)("p",null,"The monitoring feature is now implemented with an addon and is disabled by default in new installations."),(0,r.kt)("p",null,"Users can enable/disable ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," ",(0,r.kt)("a",{parentName:"p",href:"/dev/advanced/addons"},"addon")," from the Harvester WebUI after installation."),(0,r.kt)("p",null,"Users can also enable/disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," addon in their Harvester installation by customizing the ",(0,r.kt)("a",{parentName:"p",href:"/dev/install/harvester-configuration#installaddons"},"harvester-configuration")," file."),(0,r.kt)("p",null,"For Harvester clusters upgraded from version v1.1.x, the monitoring feature is converted to an addon automatically and kept enabled as before."),(0,r.kt)("h2",{id:"dashboard-metrics"},"Dashboard Metrics"),(0,r.kt)("p",null,"Harvester has provided a built-in monitoring integration using ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),". Monitoring is automatically enabled during the Harvester installations."),(0,r.kt)("p",null,"From the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard")," page, users can view the cluster metrics and top 10 most used VM metrics respectively.\nAlso, users can click the ",(0,r.kt)("a",{parentName:"p",href:"http://grafana.com/"},"Grafana")," dashboard link to view more dashboards on the Grafana UI."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(53219).Z,width:"4474",height:"2426"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only admin users are able to view the cluster dashboard metrics."),(0,r.kt)("p",{parentName:"admonition"},"Additionally, Grafana is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),", so the default admin password is: prom-operator"),(0,r.kt)("p",{parentName:"admonition"},"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.7/charts/rancher-project-monitoring"},"values.yaml"))),(0,r.kt)("h2",{id:"vm-detail-metrics"},"VM Detail Metrics"),(0,r.kt)("p",null,"For VMs, you can view VM metrics by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"VM details page > VM Metrics"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73687).Z,width:"2264",height:"1132"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The current ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Usage")," is calculated based on ",(0,r.kt)("inlineCode",{parentName:"p"},"(1 - free/total) * 100%"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"(used/total) * 100%"),".")),(0,r.kt)("p",null,"For example, in a Linux OS, the ",(0,r.kt)("inlineCode",{parentName:"p"},"free -h")," command outputs the current memory statistics as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ free -h\n                total        used        free      shared  buff/cache   available\nMem:          7.7Gi       166Mi       4.6Gi       1.0Mi       2.9Gi       7.2Gi\nSwap:            0B          0B          0B\n")),(0,r.kt)("p",null,"The corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Usage")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"(1 - 4.6/7.7) * 100%"),", roughly ",(0,r.kt)("inlineCode",{parentName:"p"},"40%"),"."),(0,r.kt)("h2",{id:"how-to-configure-monitoring-settings"},"How to Configure Monitoring Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.0.2")),(0,r.kt)("p",null,"Monitoring has several components that help to collect and aggregate metric data from all Nodes/Pods/VMs. The resources required for monitoring depend on your workloads and hardware resources. Harvester sets defaults based on general use cases, and you can change them accordingly."),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"Resources Settings")," can be configured for the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prometheus"),(0,r.kt)("li",{parentName:"ul"},"Prometheus Node Exporter")),(0,r.kt)("h3",{id:"from-ui"},"From UI"),(0,r.kt)("p",null,"On the ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," page, you can view and change the resource settings as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,r.kt)("strong",{parentName:"li"},"Addons")," page and select the ",(0,r.kt)("strong",{parentName:"li"},"rancher-monitoring")," page."),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Prometheus")," tab, change the resource requests and limits."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Save")," when finished configuring the settings for the ",(0,r.kt)("strong",{parentName:"li"},"rancher-monitoring")," addon. The ",(0,r.kt)("strong",{parentName:"li"},"Monitoring")," deployments restart within a few seconds. Please be aware that the reboot can take time to reload previous data.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89760).Z,width:"2544",height:"931"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The UI configuration is only visible when the ",(0,r.kt)("strong",{parentName:"p"},"rancher-monitoring")," addon is enabled.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The most frequently used option is the memory setting:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Requested Memory")," is the minimum memory required by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring")," resource. The recommended value is about 5% to 10% of the system memory of one single management node. A value less than 500Mi will be denied.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory Limit")," is the maximum memory that can be allocated to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring")," resource. The recommended value is about 30% of the system's memory for one single management node. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring")," reaches this threshold, it will automatically restart."))),(0,r.kt)("p",null,"Depending on the available hardware resources and system loads, you may change the above settings accordingly."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have multiple management nodes with different hardware resources, please set the value of Prometheus based on the smaller one.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When an increasing number of VMs get deployed on one node, the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-node-exporter")," pod might get killed due to OOM(out of memory). In that case, you should increase the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"limits.memory"),".")),(0,r.kt)("h3",{id:"from-cli"},"From CLI"),(0,r.kt)("p",null,"You can use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command to change resource configurations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," addon: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl edit addons.harvesterhci.io -n cattle-monitoring-system rancher-monitoring"),"."),(0,r.kt)("p",null,"The resource path and default values are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Addon\nmetadata:\n  name: rancher-monitoring\n  namespace: cattle-monitoring-system\nspec:\n  valuesContent: |\n    prometheus:\n      prometheusSpec:\n        resources:\n          limits:\n            cpu: 1000m\n            memory: 2500Mi\n          requests:\n            cpu: 850m\n            memory: 1750Mi\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can still make configuration adjustments when the addon is disabled. However, these changes only take effect when you re-enable the addon.")),(0,r.kt)("h2",{id:"alertmanager"},"Alertmanager"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager")," to collect and manage all the alerts that happened/happening in the cluster."),(0,r.kt)("h3",{id:"alertmanager-config"},"Alertmanager Config"),(0,r.kt)("h4",{id:"enabledisable-alertmanager"},"Enable/Disable Alertmanager"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager")," is enabled by default. You may disable it from the following config path."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89169).Z,width:"2541",height:"924"})),(0,r.kt)("h4",{id:"change-resource-setting"},"Change Resource Setting"),(0,r.kt)("p",null,"You can also change the resource settings of ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager")," as shown in the picture above."),(0,r.kt)("h4",{id:"configure-alertmanagerconfig-from-webui"},"Configure AlertmanagerConfig from WebUI"),(0,r.kt)("p",null,"To send the alerts to third-party servers, you need to config ",(0,r.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig"),"."),(0,r.kt)("p",null,"On the WebUI, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring & Logging")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager Configs"),"."),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager Config: Create")," page, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace")," to select the target namespace from the drop-down list and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),". After this, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," in the lower right corner."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73198).Z,width:"2760",height:"1274"})),(0,r.kt)("p",null,"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager Configs")," you just created to continue the configuration."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96545).Z,width:"1648",height:"810"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Receiver"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5234).Z,width:"2292",height:"880"})),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," for the receiver. After this, select the receiver type, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Webhook"),", and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Webhook"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90887).Z,width:"1488",height:"844"})),(0,r.kt)("p",null,"Fill in the required parameters and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(35526).Z,width:"2268",height:"1566"})),(0,r.kt)("h4",{id:"configure-alertmanagerconfig-from-cli"},"Configure AlertmanagerConfig from CLI"),(0,r.kt)("p",null,"You can also add ",(0,r.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig")," from the CLI."),(0,r.kt)("p",null,"Exampe: a Webhook receiver in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat << EOF > a-single-receiver.yaml\napiVersion: monitoring.coreos.com/v1alpha1\nkind: AlertmanagerConfig\nmetadata:\n  name: amc-example\n  # namespace: your value\n  labels:\n    alertmanagerConfig: example\nspec:\n  route:\n    continue: true\n    groupBy:\n    - cluster\n    - alertname\n    receiver: "amc-webhook-receiver"\n  receivers:\n  - name: "amc-webhook-receiver"\n    webhookConfigs:\n    - sendResolved: true\n      url: "http://192.168.122.159:8090/"\nEOF\n\n# kubectl apply -f a-single-receiver.yaml\nalertmanagerconfig.monitoring.coreos.com/amc-example created\n\n# kubectl get alertmanagerconfig -A\nNAMESPACE   NAME          AGE\ndefault     amc-example   27s\n\n')),(0,r.kt)("h4",{id:"example-of-an-alert-received-by-webhook"},"Example of an Alert Received by Webhook"),(0,r.kt)("p",null,"Alerts sent to the webhook server will be in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n'receiver': 'longhorn-system-amc-example-amc-webhook-receiver',\n'status': 'firing', \n'alerts': [], \n'groupLabels': {}, \n'commonLabels': {'alertname': 'LonghornVolumeStatusWarning', 'container': 'longhorn-manager', 'endpoint': 'manager', 'instance': '10.52.0.83:9500', 'issue': 'Longhorn volume is Degraded.',\n'job': 'longhorn-backend', 'namespace': 'longhorn-system', 'node': 'harv2', 'pod': 'longhorn-manager-r5bgm', 'prometheus': 'cattle-monitoring-system/rancher-monitoring-prometheus',\n'service': 'longhorn-backend', 'severity': 'warning'},\n'commonAnnotations': {'description': 'Longhorn volume is Degraded for more than 5 minutes.', 'runbook_url': 'https://longhorn.io/docs/1.3.0/monitoring/metrics/',\n'summary': 'Longhorn volume is Degraded'},\n'externalURL': 'https://192.168.122.200/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-alertmanager:9093/proxy',\n'version': '4',\n'groupKey': '{}/{namespace=\"longhorn-system\"}:{}',\n'truncatedAlerts': 0\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Different receivers may present the alerts in different formats. For details, please refer to the related documents.")),(0,r.kt)("h4",{id:"known-limitation"},"Known Limitation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig")," is enforced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),". Gloabl-level ",(0,r.kt)("inlineCode",{parentName:"p"},"AlertmanagerConfig")," without a namespace is not supported."),(0,r.kt)("p",null,"We have already created a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/2760"},"GithHb issue")," to track upstream changes. Once the feature is available, ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," will adopt it."),(0,r.kt)("h3",{id:"view-and-manage-alerts"},"View and Manage Alerts"),(0,r.kt)("h4",{id:"from-alertmanager-dashboard"},"From Alertmanager Dashboard"),(0,r.kt)("p",null,"You can visit the original dashboard of ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager")," from the link below. Note that you need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"the-cluster-vip")," with the actual cluster-vip:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"https://the-cluster-vip/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-alertmanager:9093/proxy/#/alerts")),(0,r.kt)("p",null,"The overall view of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alertmanager")," dashboard is as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(45045).Z,width:"1732",height:"1034"})),(0,r.kt)("p",null,"You can view the details of an alert:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20214).Z,width:"1914",height:"734"})),(0,r.kt)("h4",{id:"from-prometheus-dashboard"},"From Prometheus Dashboard"),(0,r.kt)("p",null,"You can visit the original dashboard of ",(0,r.kt)("inlineCode",{parentName:"p"},"Prometheus")," from the link below. Note that you need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"the-cluster-vip")," with the actual cluster-vip:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"https://the-cluster-vip/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-prometheus:9090/proxy/")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Alerts")," menu in the top navigation bar shows all defined rules in Prometheus. You can use the filters ",(0,r.kt)("inlineCode",{parentName:"p"},"Inactive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Firing")," to quickly find the information that you need."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78537).Z,width:"2888",height:"1100"})),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"For Monitoring support and troubleshooting, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/dev/troubleshooting/monitoring"},"troubleshooting page")," ."))}c.isMDXComponent=!0},20214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-view-detail-7652c4ac907f179ee6133942cd26beb6.png"},73198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alertmanager-config-create-1-c3e85c83aa0467b24e85604774846cb5.png"},45045:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alertmanager-dashboard-fe37e592162c82e53b936e56ad44a16e.png"},89169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modify-alertmanager-from-addon-6ef3c855cc3e40d1a57d999e19da0a2f.png"},89760:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modify-prometheus-settings-from-addon-c86c08ad8c7eafb5250c14cb916f8d4e.png"},53219:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/monitoring-dashboard-79ab4d05235fe38880afb9bbde00a9e9.png"},5234:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prepare-to-add-receiver-8fe49d3da3f8b6fc5c1134696439960a.png"},78537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prometheus-original-alerts-9b908a5a3c0925e8a822d82057e28be7.png"},96545:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-alertmanager-config-df00e265a008f7975230536d7902c061.png"},73687:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-metrics-46cc5179899848d80187d69f7185e29e.png"},90887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhook-receiver-1-e98fd1a4551a8b2b95fe1caa85331251.png"},35526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhook-receiver-2-93f2282ddf8e4a5c6f13dc800584e786.png"}}]);