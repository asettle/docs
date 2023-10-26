"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[13939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={id:"index",sidebar_position:1,sidebar_label:"Settings",title:"Settings"},o=void 0,i={unversionedId:"advanced/index",id:"advanced/index",title:"Settings",description:"This page contains a list of advanced settings which can be used in Harvester.",source:"@site/docs/advanced/settings.md",sourceDirName:"advanced",slug:"/advanced/index",permalink:"/v1.3/advanced/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Settings",title:"Settings"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/v1.3/monitoring/harvester-monitoring"},next:{title:"StorageClass",permalink:"/v1.3/advanced/storageclass"}},s={},p=[{value:"<code>additional-ca</code>",id:"additional-ca",level:2},{value:"Example",id:"example",level:4},{value:"<code>auto-disk-provision-paths</code> Experimental",id:"auto-disk-provision-paths-experimental",level:2},{value:"Example",id:"example-1",level:4},{value:"<code>backup-target</code>",id:"backup-target",level:2},{value:"Example",id:"example-2",level:4},{value:"<code>cluster-registration-url</code>",id:"cluster-registration-url",level:2},{value:"Example",id:"example-3",level:4},{value:"<code>containerd-registry</code>",id:"containerd-registry",level:2},{value:"Example",id:"example-4",level:4},{value:"<code>csi-driver-config</code>",id:"csi-driver-config",level:2},{value:"<code>default-vm-termination-grace-period-seconds</code>",id:"default-vm-termination-grace-period-seconds",level:2},{value:"<code>http-proxy</code>",id:"http-proxy",level:2},{value:"Example",id:"example-5",level:4},{value:"<code>log-level</code>",id:"log-level",level:2},{value:"Example",id:"example-6",level:4},{value:"<code>ntp-servers</code>",id:"ntp-servers",level:2},{value:"Example",id:"example-7",level:4},{value:"<code>overcommit-config</code>",id:"overcommit-config",level:2},{value:"Example",id:"example-8",level:4},{value:"<code>release-download-url</code>",id:"release-download-url",level:2},{value:"Example of the version.yaml",id:"example-of-the-versionyaml",level:4},{value:"<code>server-version</code>",id:"server-version",level:2},{value:"Example",id:"example-9",level:4},{value:"<code>ssl-certificates</code>",id:"ssl-certificates",level:2},{value:"Example",id:"example-10",level:4},{value:"<code>ssl-parameters</code>",id:"ssl-parameters",level:2},{value:"Example",id:"example-11",level:4},{value:"<code>storage-network</code>",id:"storage-network",level:2},{value:"Example",id:"example-12",level:4},{value:"<code>support-bundle-image</code>",id:"support-bundle-image",level:2},{value:"<code>support-bundle-namespaces</code>",id:"support-bundle-namespaces",level:2},{value:"<code>support-bundle-timeout</code>",id:"support-bundle-timeout",level:2},{value:"<code>upgrade-checker-enabled</code>",id:"upgrade-checker-enabled",level:2},{value:"Example",id:"example-13",level:4},{value:"<code>upgrade-checker-url</code>",id:"upgrade-checker-url",level:2},{value:"Example",id:"example-14",level:4},{value:"<code>vip-pools</code>",id:"vip-pools",level:2},{value:"Example",id:"example-15",level:4},{value:"<code>vm-force-reset-policy</code>",id:"vm-force-reset-policy",level:2},{value:"Example",id:"example-16",level:4},{value:"UI Settings",id:"ui-settings",level:2},{value:"<code>branding</code>",id:"branding",level:3},{value:"<code>ui-index</code>",id:"ui-index",level:3},{value:"Example",id:"example-17",level:4},{value:"<code>ui-plugin-index</code>",id:"ui-plugin-index",level:3},{value:"Example",id:"example-18",level:4},{value:"<code>ui-source</code>",id:"ui-source",level:3},{value:"Example",id:"example-19",level:4}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/settings"})),(0,l.kt)("p",null,"This page contains a list of advanced settings which can be used in Harvester.\nYou can modify the custom resource ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.harvesterhci.io")," from the Dashboard UI or with the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," command."),(0,l.kt)("h2",{id:"additional-ca"},(0,l.kt)("inlineCode",{parentName:"h2"},"additional-ca")),(0,l.kt)("p",null,"This setting allows you to configure additional trusted CA certificates for Harvester to access external services."),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nSOME-CA-CERTIFICATES\n-----END CERTIFICATE-----\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Changing this setting might cause a short downtime for single-node clusters.")),(0,l.kt)("h2",{id:"auto-disk-provision-paths-experimental"},(0,l.kt)("inlineCode",{parentName:"h2"},"auto-disk-provision-paths")," ","[Experimental]"),(0,l.kt)("p",null,"This setting allows Harvester to automatically add disks that match the given glob pattern as VM storage.\nIt's possible to provide multiple patterns by separating them with a comma."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This setting only adds formatted disks mounted to the system.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"This setting is applied to ",(0,l.kt)("strong",{parentName:"li"},"every Node")," in the cluster."),(0,l.kt)("li",{parentName:"ul"},"All the data in these storage devices ",(0,l.kt)("strong",{parentName:"li"},"will be destroyed"),". Use at your own risk."))),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,"The following example will add disks matching the glob pattern ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/sd*")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/hd*"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/dev/sd*,/dev/hd*\n")),(0,l.kt)("h2",{id:"backup-target"},(0,l.kt)("inlineCode",{parentName:"h2"},"backup-target")),(0,l.kt)("p",null,"This setting allows you to set a custom backup target to store VM backups. It supports NFS and S3.\nFor further information, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.2.2/snapshots-and-backups/backup-and-restore/set-backup-target/#set-up-aws-s3-backupstore"},"Longhorn documentation"),"."),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "s3",\n  "endpoint": "https://s3.endpoint.svc",\n  "accessKeyId": "test-access-key-id",\n  "secretAccessKey": "test-access-key",\n  "bucketName": "test-bup",\n  "bucketRegion": "us\u2011east\u20112",\n  "cert": "",\n  "virtualHostedStyle": false\n}\n')),(0,l.kt)("h2",{id:"cluster-registration-url"},(0,l.kt)("inlineCode",{parentName:"h2"},"cluster-registration-url")),(0,l.kt)("p",null,"This setting allows you to import the Harvester cluster to Rancher for multi-cluster management."),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://172.16.0.1/v3/import/w6tp7dgwjj549l88pr7xmxb4x6m54v5kcplvhbp9vv2wzqrrjhrc7c_c-m-zxbbbck9.yaml\n")),(0,l.kt)("h2",{id:"containerd-registry"},(0,l.kt)("inlineCode",{parentName:"h2"},"containerd-registry")),(0,l.kt)("p",null,"This setting allows you to configure a private registry for the Harvester cluster. The value will be set in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml")," of each node. You can read ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration"},"RKE2 - Containerd Registry Configuration")," for more information."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you set a username and password for a private registry, the system will automatically remove it to protect the credential after the system saves it in ",(0,l.kt)("inlineCode",{parentName:"p"},"registries.yaml"),".")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"containerd-registry",src:n(99116).Z,width:"1397",height:"803"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Mirrors": {\n    "docker.io": {\n      "Endpoints": ["https://myregistry.local:5000"],\n      "Rewrites": null\n    }\n  },\n  "Configs": {\n    "myregistry.local:5000": {\n      "Auth": {\n        "Username": "testuser",\n        "Password": "testpassword"\n      },\n      "TLS": {\n        "InsecureSkipVerify": false\n      }\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"csi-driver-config"},(0,l.kt)("inlineCode",{parentName:"h2"},"csi-driver-config")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"If you install third-party CSI drivers in the Harvester cluster, you must configure some necessary information through this setting before using ",(0,l.kt)("strong",{parentName:"p"},"Backup & Snapshot")," related features."),(0,l.kt)("p",null,"Default:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "driver.longhorn.io": {\n    "volumeSnapshotClassName": "longhorn-snapshot",\n    "backupVolumeSnapshotClassName": "longhorn"\n  }\n}\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add the provisioner for the newly added CSI driver."),(0,l.kt)("li",{parentName:"ol"},"Configure ",(0,l.kt)("strong",{parentName:"li"},"Volume Snapshot Class Name"),", which refers to the name of the ",(0,l.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," used to create volume snapshots or VM snapshots."),(0,l.kt)("li",{parentName:"ol"},"Configure ",(0,l.kt)("strong",{parentName:"li"},"Backup Volume Snapshot Class Name"),", which refers to the name of the ",(0,l.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," used to create VM backups.")),(0,l.kt)("h2",{id:"default-vm-termination-grace-period-seconds"},(0,l.kt)("inlineCode",{parentName:"h2"},"default-vm-termination-grace-period-seconds")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"This setting allows you to specify a default termination grace period for stopping a virtual machine in seconds."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"120")),(0,l.kt)("h2",{id:"http-proxy"},(0,l.kt)("inlineCode",{parentName:"h2"},"http-proxy")),(0,l.kt)("p",null,"This setting allows you to configure an HTTP proxy to access external services, including the download of images and backup to s3 services."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")),(0,l.kt)("p",null,"The following options and values can be set:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Proxy URL for HTTP requests: ",(0,l.kt)("inlineCode",{parentName:"li"},'"httpProxy": "http://<username>:<pswd>@<ip>:<port>"')),(0,l.kt)("li",{parentName:"ul"},"Proxy URL for HTTPS requests: ",(0,l.kt)("inlineCode",{parentName:"li"},'"httpsProxy": "https://<username>:<pswd>@<ip>:<port>"')),(0,l.kt)("li",{parentName:"ul"},"Comma-separated list of hostnames and/or CIDRs: ",(0,l.kt)("inlineCode",{parentName:"li"},'"noProxy": "<hostname | CIDR>"'))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you configure ",(0,l.kt)("inlineCode",{parentName:"p"},"httpProxy")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"httpsProxy"),", you must also put Harvester node's CIDR into ",(0,l.kt)("inlineCode",{parentName:"p"},"noProxy"),", otherwise the Harvester cluster will be broken.\nIf you also configure ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-registration-url"),", you usually need to add the host of ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-registration-url")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"noProxy")," as well, otherwise you cannot access the Harvester cluster from Rancher.")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpProxy": "http://my.proxy",\n  "httpsProxy": "https://my.proxy",\n  "noProxy": "some.internal.svc,172.16.0.0/16"\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,l.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,harvester-system,.svc,.cluster.local"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"harvester-system")," was added into the list since v1.1.2.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Changing this setting might cause a short downtime for single-node clusters.")),(0,l.kt)("h2",{id:"log-level"},(0,l.kt)("inlineCode",{parentName:"h2"},"log-level")),(0,l.kt)("p",null,"This setting allows you to configure the log level for the Harvester server."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"info")),(0,l.kt)("p",null,"The following values can be set. The list goes from the least to most verbose log level:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"panic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fatal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"warn"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"warning")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"debug")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trace"))),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"debug\n")),(0,l.kt)("h2",{id:"ntp-servers"},(0,l.kt)("inlineCode",{parentName:"h2"},"ntp-servers")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"This setting allows you to configure NTP servers for time synchronization on the Harvester nodes."),(0,l.kt)("p",null,"Using this setting, you can define NTP servers during ",(0,l.kt)("a",{parentName:"p",href:"/v1.3/install/harvester-configuration#osntp_servers"},"installation")," or update NTP servers after installation."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Modifying the NTP servers will replace the previous values for all nodes.")),(0,l.kt)("p",null,'Default: ""'),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "ntpServers": [\n    "0.suse.pool.ntp.org",\n    "1.suse.pool.ntp.org"\n  ]\n}\n')),(0,l.kt)("h2",{id:"overcommit-config"},(0,l.kt)("inlineCode",{parentName:"h2"},"overcommit-config")),(0,l.kt)("p",null,"This setting allows you to configure the percentage for resources overcommit on CPU, memory, and storage. By setting resources overcommit, this will permit to schedule additional virtual machines even if the the physical resources are already fully utilized."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},'{ "cpu":1600, "memory":150, "storage":200 }')),(0,l.kt)("p",null,"The default CPU overcommit with 1600% means, for example, if the CPU resources\nlimit of a virtual machine is ",(0,l.kt)("inlineCode",{parentName:"p"},"1600m")," core, Harvester would only request ",(0,l.kt)("inlineCode",{parentName:"p"},"100m"),"\nCPU for it from Kubernetes scheduler."),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cpu": 1000,\n  "memory": 200,\n  "storage": 300\n}\n')),(0,l.kt)("h2",{id:"release-download-url"},(0,l.kt)("inlineCode",{parentName:"h2"},"release-download-url")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,l.kt)("p",null,"This setting allows you to configure the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade release download")," URL address. Harvester will get the ISO URL and checksum value from the ",(0,l.kt)("inlineCode",{parentName:"p"},"${URL}/${VERSION}/version.yaml")," file hosted by the configured URL."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester")),(0,l.kt)("h4",{id:"example-of-the-versionyaml"},"Example of the version.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: ${VERSION}\n  namespace: harvester-system\nspec:\n  isoChecksum: ${ISO_CHECKSUM}\n  isoURL: ${ISO_URL}\n")),(0,l.kt)("h2",{id:"server-version"},(0,l.kt)("inlineCode",{parentName:"h2"},"server-version")),(0,l.kt)("p",null,"This setting displays the version of Harvester server."),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"v1.0.0-abcdef-head\n")),(0,l.kt)("h2",{id:"ssl-certificates"},(0,l.kt)("inlineCode",{parentName:"h2"},"ssl-certificates")),(0,l.kt)("p",null,"This setting allows you to configure serving certificates for Harvester UI/API."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ca": "-----BEGIN CERTIFICATE-----\\nSOME-CERTIFICATE-ENCODED-IN-PEM-FORMAT\\n-----END CERTIFICATE-----",\n  "publicCertificate": "-----BEGIN CERTIFICATE-----\\nSOME-CERTIFICATE-ENCODED-IN-PEM-FORMAT\\n-----END CERTIFICATE-----",\n  "privateKey": "-----BEGIN RSA PRIVATE KEY-----\\nSOME-PRIVATE-KEY-ENCODED-IN-PEM-FORMAT\\n-----END RSA PRIVATE KEY-----"\n}\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Changing this setting might cause a short downtime on single-node clusters.")),(0,l.kt)("h2",{id:"ssl-parameters"},(0,l.kt)("inlineCode",{parentName:"h2"},"ssl-parameters")),(0,l.kt)("p",null,"This setting allows you to change the enabled SSL/TLS protocols and ciphers of Harvester GUI and API."),(0,l.kt)("p",null,"The following options and values can be set:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"protocols"),": Enabled protocols. See NGINX Ingress Controller's configs ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#ssl-protocols"},(0,l.kt)("inlineCode",{parentName:"a"},"ssl-protocols"))," for supported input.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ciphers"),": Enabled ciphers. See NGINX Ingress Controller's configs ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#ssl-ciphers"},(0,l.kt)("inlineCode",{parentName:"a"},"ssl-ciphers"))," for supported input."))),(0,l.kt)("p",null,"If no value is provided, ",(0,l.kt)("inlineCode",{parentName:"p"},"protocols")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"TLSv1.2")," only and the ",(0,l.kt)("inlineCode",{parentName:"p"},"ciphers")," list is\n",(0,l.kt)("inlineCode",{parentName:"p"},"ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305"),"."),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"/v1.3/troubleshooting/harvester#i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers"},"Troubleshooting")," if you have misconfigured this setting and no longer have access to Harvester GUI and API.")),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("p",null,"The following example sets the enabled SSL/TLS protocols to ",(0,l.kt)("inlineCode",{parentName:"p"},"TLSv1.2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TLSv1.3")," and the ciphers list to\n",(0,l.kt)("inlineCode",{parentName:"p"},"ECDHE-ECDSA-AES128-GCM-SHA256")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ECDHE-ECDSA-CHACHA20-POLY1305"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "protocols": "TLSv1.2 TLSv1.3",\n  "ciphers": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305"\n}\n')),(0,l.kt)("h2",{id:"storage-network"},(0,l.kt)("inlineCode",{parentName:"h2"},"storage-network")),(0,l.kt)("p",null,"By default, Longhorn uses the default management network in the Harvester cluster that is limited to a single interface and shared with other workloads cluster-wide. This setting allows you to configure a segregated storage network when network isolation is preferred."),(0,l.kt)("p",null,"For details, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v1.3/advanced/storagenetwork"},"Harvester Storage Network")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Any change to storage-network requires shutting down all VMs before applying this setting.\nIP Range should be IPv4 CIDR format and 4 times the number of your cluster nodes.")),(0,l.kt)("p",null,'Default: ""'),(0,l.kt)("h4",{id:"example-12"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "vlan": 100,\n  "clusterNetwork": "storage",\n  "range": "192.168.0.0/24"\n}\n')),(0,l.kt)("h2",{id:"support-bundle-image"},(0,l.kt)("inlineCode",{parentName:"h2"},"support-bundle-image")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"This setting allows you to configure the support bundle image, with various versions available in ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rancher/support-bundle-kit/tags"},"rancher/support-bundle-kit"),"."),(0,l.kt)("p",null,"Default:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "repository": "rancher/support-bundle-kit",\n  "tag": "v0.0.25",\n  "imagePullPolicy": "IfNotPresent"\n}\n')),(0,l.kt)("h2",{id:"support-bundle-namespaces"},(0,l.kt)("inlineCode",{parentName:"h2"},"support-bundle-namespaces")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"This setting allows you to specify additional namespaces when collecting a support bundle. The support bundle will only capture resources from pre-defined namespaces by default."),(0,l.kt)("p",null,"Here is the pre-defined namespaces list:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cattle-dashboards"),(0,l.kt)("li",{parentName:"ul"},"cattle-fleet-local-system"),(0,l.kt)("li",{parentName:"ul"},"cattle-fleet-system"),(0,l.kt)("li",{parentName:"ul"},"cattle-fleet-clusters-system"),(0,l.kt)("li",{parentName:"ul"},"cattle-monitoring-system"),(0,l.kt)("li",{parentName:"ul"},"fleet-local"),(0,l.kt)("li",{parentName:"ul"},"harvester-system"),(0,l.kt)("li",{parentName:"ul"},"local"),(0,l.kt)("li",{parentName:"ul"},"longhorn-system"),(0,l.kt)("li",{parentName:"ul"},"cattle-logging-system")),(0,l.kt)("p",null,"If you select more namespaces, it will append to the pre-defined namespaces list."),(0,l.kt)("p",null,"Default: none"),(0,l.kt)("h2",{id:"support-bundle-timeout"},(0,l.kt)("inlineCode",{parentName:"h2"},"support-bundle-timeout")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"This setting lets you define the support bundle's default timeout duration in minutes. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to disable the timeout feature."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"10")),(0,l.kt)("h2",{id:"upgrade-checker-enabled"},(0,l.kt)("inlineCode",{parentName:"h2"},"upgrade-checker-enabled")),(0,l.kt)("p",null,"This setting allows you to automatically check if there's an upgrade available for Harvester."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"example-13"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("h2",{id:"upgrade-checker-url"},(0,l.kt)("inlineCode",{parentName:"h2"},"upgrade-checker-url")),(0,l.kt)("p",null,"This setting allows you to configure the URL for the upgrade check of Harvester. Can only be used if the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade-checker-enabled")," setting is set to true."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://harvester-upgrade-responder.rancher.io/v1/checkupgrade")),(0,l.kt)("h4",{id:"example-14"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://your.upgrade.checker-url/v99/checkupgrade\n")),(0,l.kt)("h2",{id:"vip-pools"},(0,l.kt)("inlineCode",{parentName:"h2"},"vip-pools")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Deprecated as of v1.2.0, use ",(0,l.kt)("a",{parentName:"em",href:"/v1.3/networking/ippool"},"IP Pool")," instead")),(0,l.kt)("p",null,"This setting allows you to configure the global or namespace IP address pools of the VIP by CIDR or IP range."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Configuring multi-CIDR or IP range from UI is only available from Harvester v1.1.1.")),(0,l.kt)("h4",{id:"example-15"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": "172.16.0.0/24,172.16.1.0/24",\n  "demo": "172.16.2.50-172.16.2.100,172.16.2.150-172.16.3.200"\n}\n')),(0,l.kt)("h2",{id:"vm-force-reset-policy"},(0,l.kt)("inlineCode",{parentName:"h2"},"vm-force-reset-policy")),(0,l.kt)("p",null,"This setting allows you to force reschedule VMs when a node is unavailable. When a node turns to be ",(0,l.kt)("inlineCode",{parentName:"p"},"Not Ready"),", it will force delete the VM on that node and reschedule it to another available node after a period of seconds."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},'{"enable":true, "period":300}')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When a host is unavailable or is powered off, the VM only reboots and does not migrate.")),(0,l.kt)("h4",{id:"example-16"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enable": "true",\n  "period": 300\n}\n')),(0,l.kt)("h2",{id:"ui-settings"},"UI Settings"),(0,l.kt)("h3",{id:"branding"},(0,l.kt)("inlineCode",{parentName:"h3"},"branding")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,l.kt)("p",null,"This setting allows you to globally re-brand the UI by customizing the Harvester product name, logos, and color scheme."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("strong",{parentName:"p"},"Harvester")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"containerd-registry",src:n(28378).Z,width:"2732",height:"1750"})),(0,l.kt)("p",null,"You can set the following options and values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Private Label:"),' This option replaces "Harvester" with the value you provide in most places.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Logo:")," Upload light and dark logos to replace the Harvester logo in the top-level navigation header."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Favicon:")," Upload an icon to replace the Harvester favicon in the browser tab."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Primary Color:")," You can override the primary color used throughout the UI with a custom color of your choice."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Link Color:")," You can override the link color used throughout the UI with a custom color of your choice.")),(0,l.kt)("h3",{id:"ui-index"},(0,l.kt)("inlineCode",{parentName:"h3"},"ui-index")),(0,l.kt)("p",null,"This setting allows you to configure the HTML index location for the UI."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester-ui/dashboard/latest/index.html")),(0,l.kt)("h4",{id:"example-17"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://your.static.dashboard-ui/index.html\n")),(0,l.kt)("h3",{id:"ui-plugin-index"},(0,l.kt)("inlineCode",{parentName:"h3"},"ui-plugin-index")),(0,l.kt)("p",null,"This setting allows you to configure the JS address for the Harvester plugin (when accessing Harvester from Rancher)."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester-ui/plugin/harvester-latest/harvester-latest.umd.min.js")),(0,l.kt)("h4",{id:"example-18"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://your.static.dashboard-ui/*.umd.min.js\n")),(0,l.kt)("h3",{id:"ui-source"},(0,l.kt)("inlineCode",{parentName:"h3"},"ui-source")),(0,l.kt)("p",null,"This setting allows you to configure how to load the UI source."),(0,l.kt)("p",null,"You can set the following values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"auto"),": The default. Auto-detect whether to use bundled UI or not."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external"),": Use external UI source."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bundled"),": Use the bundled UI source.")),(0,l.kt)("h4",{id:"example-19"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"external\n")))}m.isMDXComponent=!0},28378:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/branding-49ad191233c03030305a64308b3449a2.png"},99116:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/containerd-registry-de62fe2333d8d53e52d54da6a2e8233b.png"}}]);