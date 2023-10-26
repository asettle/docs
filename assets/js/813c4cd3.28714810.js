"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[18283],{58040:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>j,frontMatter:()=>k,metadata:()=>_,toc:()=>v});var s=t(87462),i=(t(67294),t(3905)),n=t(58219),m=(t(62316),t(80667)),p=t.n(m),l=t(24228),r=t.n(l),c=t(9487),o=t(41429),d=t(5397),u=t(4667),h=t(9472),y=t(85162);const k={id:"patch-namespaced-virtual-machine-template",title:"Patch a Virtual Machine Template",description:"Patch a VirtualMachineTemplate object.",sidebar_label:"Patch a Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a VirtualMachineTemplate object.",tags:["Virtual Machine Templates"],operationId:"patchNamespacedVirtualMachineTemplate",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},g=void 0,_={unversionedId:"api/patch-namespaced-virtual-machine-template",id:"version-v1.2/api/patch-namespaced-virtual-machine-template",title:"Patch a Virtual Machine Template",description:"Patch a VirtualMachineTemplate object.",source:"@site/versioned_docs/version-v1.2/api/patch-namespaced-virtual-machine-template.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-virtual-machine-template",permalink:"/v1.2/api/patch-namespaced-virtual-machine-template",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"patch-namespaced-virtual-machine-template",title:"Patch a Virtual Machine Template",description:"Patch a VirtualMachineTemplate object.",sidebar_label:"Patch a Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a VirtualMachineTemplate object.",tags:["Virtual Machine Templates"],operationId:"patchNamespacedVirtualMachineTemplate",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Delete a Virtual Machine Template",permalink:"/v1.2/api/delete-namespaced-virtual-machine-template"},next:{title:"List Virtual Machine Template Versions",permalink:"/v1.2/api/list-namespaced-virtual-machine-template-version"}},b={},v=[{value:"Request",id:"request",level:2}],f={toc:v},T="wrapper";function j(e){let{components:a,...t}=e;return(0,i.kt)(T,(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Patch a Virtual Machine Template"),(0,i.kt)(p(),{method:"patch",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(r(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Patch a VirtualMachineTemplate object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(y.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(h.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,i.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(y.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(h.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}j.isMDXComponent=!0}}]);