"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[73606],{83198:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>k,default:()=>N,frontMatter:()=>h,metadata:()=>f,toc:()=>_});var s=t(87462),i=(t(67294),t(3905)),n=t(58219),m=(t(62316),t(80667)),r=t.n(m),p=t(24228),l=t.n(p),o=t(9487),c=t(41429),d=t(5397),u=t(4667),y=t(9472),g=t(85162);const h={id:"read-namespaced-support-bundle",title:"Read a Support Bundle",description:"Get a SupportBundle object.",sidebar_label:"Read a Support Bundle",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a SupportBundle object.",tags:["Support Bundles"],operationId:"readNamespacedSupportBundle",parameters:[{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["description"],properties:{description:{type:"string",default:""},issueURL:{type:"string",default:""}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},filename:{type:"string"},filesize:{type:"integer",format:"int64"},progress:{type:"integer",format:"int32"},state:{type:"string"}}}}}},"application/yaml":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["description"],properties:{description:{type:"string",default:""},issueURL:{type:"string",default:""}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},filename:{type:"string"},filesize:{type:"integer",format:"int64"},progress:{type:"integer",format:"int32"},state:{type:"string"}}}}}},"application/json;stream=watch":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["description"],properties:{description:{type:"string",default:""},issueURL:{type:"string",default:""}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},filename:{type:"string"},filesize:{type:"integer",format:"int64"},progress:{type:"integer",format:"int32"},state:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}},"application/json;stream=watch":{schema:{type:"string"}}}}},method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/supportbundles/{name:[a-z0-9][a-z0-9-]*}",info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},k=void 0,f={unversionedId:"api/read-namespaced-support-bundle",id:"version-v1.2/api/read-namespaced-support-bundle",title:"Read a Support Bundle",description:"Get a SupportBundle object.",source:"@site/versioned_docs/version-v1.2/api/read-namespaced-support-bundle.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-support-bundle",permalink:"/v1.2/api/read-namespaced-support-bundle",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"read-namespaced-support-bundle",title:"Read a Support Bundle",description:"Get a SupportBundle object.",sidebar_label:"Read a Support Bundle",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a SupportBundle object.",tags:["Support Bundles"],operationId:"readNamespacedSupportBundle",parameters:[{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["description"],properties:{description:{type:"string",default:""},issueURL:{type:"string",default:""}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},filename:{type:"string"},filesize:{type:"integer",format:"int64"},progress:{type:"integer",format:"int32"},state:{type:"string"}}}}}},"application/yaml":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["description"],properties:{description:{type:"string",default:""},issueURL:{type:"string",default:""}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},filename:{type:"string"},filesize:{type:"integer",format:"int64"},progress:{type:"integer",format:"int32"},state:{type:"string"}}}}}},"application/json;stream=watch":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["description"],properties:{description:{type:"string",default:""},issueURL:{type:"string",default:""}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},filename:{type:"string"},filesize:{type:"integer",format:"int64"},progress:{type:"integer",format:"int32"},state:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}},"application/json;stream=watch":{schema:{type:"string"}}}}},method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/supportbundles/{name:[a-z0-9][a-z0-9\\-]*}",info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Support Bundle",permalink:"/v1.2/api/create-namespaced-support-bundle"},next:{title:"Replace a Support Bundle",permalink:"/v1.2/api/replace-namespaced-support-bundle"}},b={},_=[{value:"Request",id:"request",level:2}],T={toc:_},q="wrapper";function N(e){let{components:a,...t}=e;return(0,i.kt)(q,(0,s.Z)({},T,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Read a Support Bundle"),(0,i.kt)(r(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/supportbundles/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Get a SupportBundle object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(u.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(u.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(g.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(u.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(g.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(g.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}N.isMDXComponent=!0}}]);