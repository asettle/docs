"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[70146],{86876:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>_,contentTitle:()=>g,default:()=>q,frontMatter:()=>k,metadata:()=>f,toc:()=>b});var s=t(87462),i=(t(67294),t(3905)),m=t(58219),n=(t(62316),t(80667)),p=t.n(n),r=t(24228),l=t.n(r),c=t(9487),o=t(41429),d=t(5397),y=t(4667),u=t(9472),h=t(85162);const k={id:"replace-namespaced-virtual-machine-template",title:"Replace a Virtual Machine Template",description:"Update a VirtualMachineTemplate object.",sidebar_label:"Replace a Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:{description:"Update a VirtualMachineTemplate object.",tags:["Virtual Machine Templates"],operationId:"replaceNamespacedVirtualMachineTemplate",requestBody:{content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}}},201:{description:"Create",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"put",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{apiVersion:"string",kind:"string",metadata:{name:"string",namespace:"string"},spec:{defaultVersionId:"string",description:"string"},status:{defaultVersion:0,latestVersion:0}},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"put api-method",info_path:"api/harvester-apis",custom_edit_url:null},g=void 0,f={unversionedId:"api/replace-namespaced-virtual-machine-template",id:"api/replace-namespaced-virtual-machine-template",title:"Replace a Virtual Machine Template",description:"Update a VirtualMachineTemplate object.",source:"@site/docs/api/replace-namespaced-virtual-machine-template.api.mdx",sourceDirName:"api",slug:"/api/replace-namespaced-virtual-machine-template",permalink:"/zh/v1.3/api/replace-namespaced-virtual-machine-template",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"replace-namespaced-virtual-machine-template",title:"Replace a Virtual Machine Template",description:"Update a VirtualMachineTemplate object.",sidebar_label:"Replace a Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:{description:"Update a VirtualMachineTemplate object.",tags:["Virtual Machine Templates"],operationId:"replaceNamespacedVirtualMachineTemplate",requestBody:{content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}}},201:{description:"Create",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{defaultVersionId:{type:"string",default:""},description:{type:"string"}}},status:{default:{},type:"object",properties:{defaultVersion:{type:"integer",format:"int32"},latestVersion:{type:"integer",format:"int32"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"put",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{apiVersion:"string",kind:"string",metadata:{name:"string",namespace:"string"},spec:{defaultVersionId:"string",description:"string"},status:{defaultVersion:0,latestVersion:0}},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"put api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Virtual Machine Template",permalink:"/zh/v1.3/api/read-namespaced-virtual-machine-template"},next:{title:"Delete a Virtual Machine Template",permalink:"/zh/v1.3/api/delete-namespaced-virtual-machine-template"}},_={},b=[{value:"Request",id:"request",level:2}],N={toc:b},T="wrapper";function q(e){let{components:a,...t}=e;return(0,i.kt)(T,(0,s.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Replace a Virtual Machine Template"),(0,i.kt)(p(),{method:"put",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Update a VirtualMachineTemplate object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(m.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(h.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.default,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Create")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(h.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(h.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}q.isMDXComponent=!0}}]);