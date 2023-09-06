"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,c=u["".concat(i,".").concat(h)]||u[h]||g[h]||o;return a?r.createElement(c,s(s({ref:t},d),{},{components:a})):r.createElement(c,s({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:4,sidebar_label:"Troubleshooting",title:"Troubleshooting"},s=void 0,l={unversionedId:"upgrade/troubleshooting",id:"version-v1.1/upgrade/troubleshooting",title:"Troubleshooting",description:"Overview",source:"@site/versioned_docs/version-v1.1/upgrade/troubleshooting.md",sourceDirName:"upgrade",slug:"/upgrade/troubleshooting",permalink:"/v1.1/upgrade/troubleshooting",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upgrade/troubleshooting.md",tags:[],version:"v1.1",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Upgrade from v1.0.0 to v1.0.1",permalink:"/v1.1/upgrade/previous-releases/v1-0-0-to-v1-0-1"},next:{title:"Authentication",permalink:"/v1.1/authentication"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Diagnose the upgrade flow",id:"diagnose-the-upgrade-flow",level:2},{value:"Phase 1: Provision upgrade repository VM.",id:"phase-1-provision-upgrade-repository-vm",level:3},{value:"Phase 2: Preload container images",id:"phase-2-preload-container-images",level:3},{value:"Phase 3: Upgrade system services",id:"phase-3-upgrade-system-services",level:3},{value:"Phase 4: Upgrade nodes",id:"phase-4-upgrade-nodes",level:3},{value:"Phase 5: Clean-up",id:"phase-5-clean-up",level:3},{value:"Common operations",id:"common-operations",level:2},{value:"Start over an upgrade",id:"start-over-an-upgrade",level:3},{value:"Download upgrade logs",id:"download-upgrade-logs",level:3}],d={toc:p},u="wrapper";function g(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/troubleshooting"})),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Here are some tips to troubleshoot a failed upgrade:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("a",{parentName:"li",href:"/v1.1/upgrade/index#upgrade-support-matrix"},"version-specific upgrade notes"),". You can click the version in the support matrix table to see if there are any known issues."),(0,n.kt)("li",{parentName:"ul"},"Dive into the upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/blob/master/enhancements/20220413-zero-downtime-upgrade.md"},"design proposal"),". The following section briefly describes phases within an upgrade and possible diagnostic methods.")),(0,n.kt)("h2",{id:"diagnose-the-upgrade-flow"},"Diagnose the upgrade flow"),(0,n.kt)("p",null,"A Harvester upgrade process contains several phases.\n",(0,n.kt)("img",{src:a(58928).Z,width:"1345",height:"602"})),(0,n.kt)("h3",{id:"phase-1-provision-upgrade-repository-vm"},"Phase 1: Provision upgrade repository VM."),(0,n.kt)("p",null,"The Harvester controller downloads a Harvester release ISO file and uses it to provision a VM. During this phase you can see the upgrade status windows show:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(72401).Z,width:"1132",height:"1238"})),(0,n.kt)("p",null,"The time to complete the phase depends on the user's network speed and cluster resource utilization. We see failures in this phase due to network speed. If this happens, the user can ",(0,n.kt)("a",{parentName:"p",href:"#start-over-an-upgrade"},"start over the upgrade")," again."),(0,n.kt)("p",null,"We can also check the repository VM (named with the format ",(0,n.kt)("inlineCode",{parentName:"p"},"upgrade-repo-hvst-xxxx"),") status and its corresponding pod:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get vm -n harvester-system\nNAME                              AGE    STATUS     READY\nupgrade-repo-hvst-upgrade-9gmg2   101s   Starting   False\n\n$ kubectl get pods -n harvester-system | grep upgrade-repo-hvst\nvirt-launcher-upgrade-repo-hvst-upgrade-9gmg2-4mnmq     1/1     Running     0          4m44s\n")),(0,n.kt)("h3",{id:"phase-2-preload-container-images"},"Phase 2: Preload container images"),(0,n.kt)("p",null,"The Harvester controller creates jobs on each Harvester node to download images from the repository VM and preload them. These are the container images required for the next release."),(0,n.kt)("p",null,"During this stage you can see the upgrade status windows shows:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(58869).Z,width:"1128",height:"556"})),(0,n.kt)("p",null,"It will take a while for all nodes to preload images. If the upgrade fails at this phase, the user can check job logs in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n cattle-system | grep prepare\napply-hvst-upgrade-9gmg2-prepare-on-node1-with-2bbea1599a-f0e86   0/1           47s        47s\napply-hvst-upgrade-9gmg2-prepare-on-node4-with-2bbea1599a-041e4   1/1           2m3s       2m50s\n\n$ kubectl logs jobs/apply-hvst-upgrade-9gmg2-prepare-on-node1-with-2bbea1599a-f0e86 -n cattle-system\n...\n")),(0,n.kt)("p",null,"It's also safe to ",(0,n.kt)("a",{parentName:"p",href:"#start-over-an-upgrade"},"start over the upgrade")," if an upgrade fails at this phase."),(0,n.kt)("h3",{id:"phase-3-upgrade-system-services"},"Phase 3: Upgrade system services"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10132).Z,width:"1132",height:"970"})),(0,n.kt)("p",null,"In this phase, Harvester controller upgrades component Helm charts with a job. The user can check the ",(0,n.kt)("inlineCode",{parentName:"p"},"apply-manifest")," job with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=manifest\nNAME                                 COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-apply-manifests   0/1           46s        46s\n\n$ kubectl logs jobs/hvst-upgrade-9gmg2-apply-manifests -n harvester-system\n...\n")),(0,n.kt)("h3",{id:"phase-4-upgrade-nodes"},"Phase 4: Upgrade nodes"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(61675).Z,width:"1134",height:"946"})),(0,n.kt)("p",null,"The Harvester controller creates jobs on each node (one by one) to upgrade nodes' OSes and RKE2 runtime. For multi-node clusters, there are two kinds of jobs to update a node:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pre-drain")," job: live-migrate or shutdown VMs on a node. When the job completes, the embedded Rancher service upgrades RKE2 runtime on a node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"post-drain")," job: upgrade OS and reboot.")),(0,n.kt)("p",null,"For single-node clusters, there is only one ",(0,n.kt)("inlineCode",{parentName:"p"},"single-node-upgrade")," type job for each node (named with the format ",(0,n.kt)("inlineCode",{parentName:"p"},"hvst-upgrade-xxx-single-node-upgrade-<hostname>"),")."),(0,n.kt)("p",null,"The user can check node jobs by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=node\nNAME                                  COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-post-drain-node1   1/1           118s       6m34s\nhvst-upgrade-9gmg2-post-drain-node2   0/1           9s         9s\nhvst-upgrade-9gmg2-pre-drain-node1    1/1           3s         8m14s\nhvst-upgrade-9gmg2-pre-drain-node2    1/1           7s         85s\n\n$ kubectl logs -n harvester-system jobs/hvst-upgrade-9gmg2-post-drain-node2\n...\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please do not start over an upgrade if the upgrade fails at this phase.")),(0,n.kt)("h3",{id:"phase-5-clean-up"},"Phase 5: Clean-up"),(0,n.kt)("p",null,"The Harvester controller deletes the upgrade repository VM and all files that are no longer needed."),(0,n.kt)("h2",{id:"common-operations"},"Common operations"),(0,n.kt)("h3",{id:"start-over-an-upgrade"},"Start over an upgrade"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to a control plane node.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"List ",(0,n.kt)("inlineCode",{parentName:"p"},"Upgrade")," CRs in the cluster:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# become root\n$ sudo -i\n\n# list the on-going upgrade\n$ kubectl get upgrade.harvesterhci.io -n harvester-system -l harvesterhci.io/latestUpgrade=true\nNAME                 AGE\nhvst-upgrade-9gmg2   10m\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the Upgrade CR"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl delete upgrade.harvesterhci.io/hvst-upgrade-9gmg2 -n harvester-system\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the upgrade button in the Harvester dashboard to start an upgrade again."))),(0,n.kt)("h3",{id:"download-upgrade-logs"},"Download upgrade logs"),(0,n.kt)("p",null,"We have designed and implemented a mechanism to automatically collect all the upgrade-related logs and display the upgrade procedure. By default, this is enabled. You can also choose to opt out of such behavior."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The &quot;Enable Logging&quot; checkbox on the upgrade confirmation dialog",src:a(61954).Z,width:"1700",height:"988"})),(0,n.kt)("p",null,"You can click the ",(0,n.kt)("strong",{parentName:"p"},"Download Log")," button to download the log archive during an upgrade."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Download the upgrade log archive by clicking the &quot;Download Log&quot; button on the upgrade dialog",src:a(84537).Z,width:"2518",height:"1708"})),(0,n.kt)("p",null,"Log entries will be collected as files for each upgrade-related Pod, even for intermediate Pods. The support bundle provides a snapshot of the current state of the cluster, including logs and resource manifests, while the upgrade log preserves any logs generated during an upgrade. By combining these two, you can further investigate the issues during upgrades."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The upgrade log archive contains all the logs generated by the upgrade-related Pods",src:a(59350).Z,width:"1968",height:"1746"})),(0,n.kt)("p",null,"After the upgrade ended, Harvester stops collecting the upgrade logs to avoid occupying the disk space. In addition, you can click the ",(0,n.kt)("strong",{parentName:"p"},"Dismiss it")," button to purge the upgrade logs."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The upgrade log archive contains all the logs generated by the upgrade-related Pods",src:a(32263).Z,width:"2518",height:"1546"})),(0,n.kt)("p",null,"For more details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/blob/master/enhancements/20221207-upgrade-observability.md"},"upgrade log HEP"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The storage volume for storing upgrade-related logs is 1GB by default. If an upgrade went into issues, the logs may consume all the available space of the volume. To work around such kind of incidents, try the following steps:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Detach the ",(0,n.kt)("inlineCode",{parentName:"li"},"log-archive")," Volume by scaling down the ",(0,n.kt)("inlineCode",{parentName:"li"},"fluentd")," StatefulSet and ",(0,n.kt)("inlineCode",{parentName:"li"},"downloader")," Deployment.")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"# Locate the StatefulSet and Deployment\n$ kubectl -n harvester-system get statefulsets -l harvesterhci.io/upgradeLogComponent=aggregator\nNAME                                               READY   AGE\nhvst-upgrade-xxxxx-upgradelog-infra-fluentd   1/1     43s\n\n$ kubectl -n harvester-system get deployments -l harvesterhci.io/upgradeLogComponent=downloader\nNAME                                            READY   UP-TO-DATE   AVAILABLE   AGE\nhvst-upgrade-xxxxx-upgradelog-downloader   1/1     1            1           38s\n\n\n# Scale down the resources to terminate any Pods using the volume\n$ kubectl -n harvester-system scale statefulset hvst-upgrade-xxxxx-upgradelog-infra-fluentd --replicas=0\nstatefulset.apps/hvst-upgrade-xxxxx-upgradelog-infra-fluentd scaled\n\n$ kubectl -n harvester-system scale deployment hvst-upgrade-xxxxx-upgradelog-downloader --replicas=0\ndeployment.apps/hvst-upgrade-xxxxx-upgradelog-downloader scaled\n")),(0,n.kt)("ol",{parentName:"admonition",start:2},(0,n.kt)("li",{parentName:"ol"},"Find out and expand the ",(0,n.kt)("inlineCode",{parentName:"li"},"log-archive")," volume size via the Longhorn dashboard. For more details, please refer to ",(0,n.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/1.3.2/volumes-and-nodes/expansion/"},"the volume expansion guide"),".")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"# Here's how to find out the actual name of the target volume\n$ kubectl -n harvester-system get pvc -l harvesterhci.io/upgradeLogComponent=log-archive -o jsonpath='{.items[].spec.volumeName}'\npvc-63355afb-ce61-46c4-8781-377cf962278a\n")),(0,n.kt)("ol",{parentName:"admonition",start:3},(0,n.kt)("li",{parentName:"ol"},"Recover the ",(0,n.kt)("inlineCode",{parentName:"li"},"fluentd")," StatefulSet and ",(0,n.kt)("inlineCode",{parentName:"li"},"downloader")," Deployment.")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n harvester-system scale statefulset hvst-upgrade-xxxxx-upgradelog-infra-fluentd --replicas=1\nstatefulset.apps/hvst-upgrade-xxxxx-upgradelog-infra-fluentd scaled\n\n$ kubectl -n harvester-system scale deployment hvst-upgrade-xxxxx-upgradelog-downloader --replicas=1\ndeployment.apps/hvst-upgrade-xxxxx-upgradelog-downloader scaled\n"))))}g.isMDXComponent=!0},32263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dismiss_upgrade_to_remove_upgradelog-8e724fa97a26d14b9c0c594c7680a09e.png"},84537:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/download_upgradelog_dialog-04830e87bccf2ef18516615104100f0f.png"},61954:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/enable_logging-edeec2eaea6ee4c09ce6939477f663d5.png"},72401:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ts_status_phase1-55652281986041ac3e4b3fb4bbc07e74.png"},58869:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ts_status_phase2-940f14e6d6329de62a8aea1cc5facf5c.png"},10132:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ts_status_phase3-364e71e68c693b088072a1b1ae4eb6b3.png"},61675:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ts_status_phase4-0f10c9f6b9c4e6533a40ad10b51ff0e4.png"},58928:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ts_upgrade_phases-7336371ca32df446a0f9da46e79729b6.png"},59350:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgradelog_archive-764f798f5195e39aacd13ebc8b43c4fe.png"}}]);