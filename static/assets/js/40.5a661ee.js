(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"/2XR":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav-title",{attrs:{"title-name":e.$t("m.serviceConfig['服务']")}}),e._v(" "),i("div",{staticClass:"page-content"},[i("div",{staticClass:"bk-only-btn"},[i("div",{staticClass:"bk-more-search"},[i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor",value:{active:!e.hasPermission(["service_create"],e.$store.state.project.projectAuthActions)},expression:"{ active: !hasPermission(['service_create'], $store.state.project.projectAuthActions) }"}],class:["mr10","plus-cus",{"btn-permission-disable":!e.hasPermission(["service_create"],e.$store.state.project.projectAuthActions)}],attrs:{"data-test-id":"service_button_createService",theme:"primary",icon:"plus",title:e.$t("m.serviceConfig['新增']")},on:{click:e.onServiceCreatePermissonCheck}},[e._v("\n                    "+e._s(e.$t("m.serviceConfig['新增']"))+"\n                ")]),e._v(" "),i("bk-button",{attrs:{theme:"default","data-test-id":"service_button_batchDeleteService",title:e.$t("m.serviceConfig['批量删除']"),disabled:!e.checkList.length},on:{click:e.deleteCheck}},[e._v("\n                    "+e._s(e.$t("m.serviceConfig['批量删除']"))+"\n                ")]),e._v(" "),i("div",{staticClass:"bk-search-name"},[i("div",{staticClass:"bk-search-content"},[i("bk-input",{attrs:{placeholder:e.moreSearch[0].placeholder||e.$t("m.serviceConfig['请输入服务名']"),clearable:!0,"right-icon":"bk-icon icon-search"},on:{enter:e.searchContent,clear:e.clearSearch},model:{value:e.moreSearch[0].value,callback:function(t){e.$set(e.moreSearch[0],"value",t)},expression:"moreSearch[0].value"}})],1),e._v(" "),i("bk-button",{staticClass:"ml10 filter-btn",attrs:{title:e.$t("m.deployPage['更多筛选条件']"),icon:" bk-itsm-icon icon-search-more"},on:{click:e.searchMore}})],1)],1),e._v(" "),i("search-info",{ref:"searchInfo",attrs:{"more-search":e.moreSearch}})],1),e._v(" "),i("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.isDataLoading},expression:"{ isLoading: isDataLoading }"}],ref:"serviceTable",attrs:{data:e.dataList,size:"small",pagination:e.pagination},on:{"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange,"select-all":e.handleSelectAll,select:e.handleSelect}},[i("bk-table-column",{attrs:{type:"selection",width:"60",align:"center",selectable:e.disabledFn},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission(["service_manage"],e.$store.state.project.projectAuthActions.concat(t.row.auth_actions))?[i("bk-checkbox",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.right",value:{content:e.$t("m.serviceConfig['服务已绑定关联目录，请先解绑后在进行删除操作']"),disabled:!t.row.bounded_catalogs[0],boundary:"window",always:!0},expression:"{\n                                content: $t(`m.serviceConfig['服务已绑定关联目录，请先解绑后在进行删除操作']`),\n                                disabled: !props.row.bounded_catalogs[0],\n                                boundary: 'window',\n                                always: true\n                            }",modifiers:{right:!0}}],attrs:{"data-test-id":"service_checkbox_checkService","true-value":e.trueStatus,"false-value":e.falseStatus,disabled:!!t.row.bounded_catalogs[0]},on:{change:function(i){return e.changeCheck(t.row)}},model:{value:t.row.checkStatus,callback:function(i){e.$set(t.row,"checkStatus",i)},expression:"props.row.checkStatus"}})]:[i("div",{staticStyle:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("span",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"checkbox-permission-disable",on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}})])]]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.common['ID']"),"min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.id}},[e._v(e._s(t.row.id||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['服务名称']"),prop:"name","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission(["service_manage"],e.$store.state.project.projectAuthActions.concat(t.row.auth_actions))?i("span",{staticClass:"bk-lable-primary",attrs:{title:t.row.name},on:{click:function(i){return e.changeEntry(t.row,"edit")}}},[e._v("\n                        "+e._s(t.row.name)+"\n                    ")]):i("span",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"bk-lable-primary text-permission-disable",attrs:{":title":t.row.name},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                        "+e._s(t.row.name)+"\n                    ")])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['服务说明']"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.desc}},[e._v(e._s(t.row.desc||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['类型']")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(e.serviceTypesMap,(function(n,s){return[t.row.key===n.key?i("span",{key:s,attrs:{title:n.name}},[e._v("\n                            "+e._s(n.name)+"\n                        ")]):e._e()]}))]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['关联目录']")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.bounded_catalogs[0]}},[e._v(e._s(t.row.bounded_catalogs[0]||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.common['创建人']")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.creator}},[e._v(e._s(t.row.creator||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.common['更新人']")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.updated_by}},[e._v(e._s(t.row.updated_by||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['更新时间']"),"min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{attrs:{title:t.row.update_at}},[e._v(e._s(t.row.update_at||"--"))])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['状态']"),width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"bk-status-color",class:{"bk-status-gray":!t.row.is_valid}}),e._v(" "),i("span",{staticStyle:{"margin-left":"5px"},attrs:{title:t.row.is_valid?e.$t("m.serviceConfig['启用']"):e.$t("m.serviceConfig['关闭']")}},[e._v("\n                        "+e._s(t.row.is_valid?e.$t('m.serviceConfig["启用"]'):e.$t('m.serviceConfig["关闭"]'))+"\n                    ")])]}}])}),e._v(" "),i("bk-table-column",{attrs:{label:e.$t("m.serviceConfig['操作']"),width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?i("router-link",{staticClass:"bk-button-text bk-primary",attrs:{"data-test-id":"service_link_linkToSLA",to:{name:"projectServiceSla",params:{id:t.row.id},query:{project_id:e.$store.state.project.id}}}},[e._v("SLA")]):i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",attrs:{text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                        SLA\n                    ")]),e._v(" "),e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?i("bk-button",{attrs:{"data-test-id":"service_button_editService",theme:"primary",text:""},on:{click:function(i){return e.changeEntry(t.row,"edit")}}},[e._v("\n                        "+e._s(e.$t('m.serviceConfig["编辑"]'))+"\n                    ")]):i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",attrs:{text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                        "+e._s(e.$t('m.serviceConfig["编辑"]'))+"\n                    ")]),e._v(" "),e.hasPermission(["service_manage"],t.row.auth_actions.concat(e.$store.state.project.projectAuthActions))?t.row.bounded_catalogs[0]?[i("bk-popover",{attrs:{placement:"top"}},[i("bk-button",{attrs:{theme:"primary",text:"",disabled:!!t.row.bounded_catalogs[0]},on:{click:function(i){return e.deleteOne(t.row)}}},[e._v("\n                                "+e._s(e.$t('m.serviceConfig["删除"]'))+"\n                            ")]),e._v(" "),i("div",{staticStyle:{"white-space":"normal"},attrs:{slot:"content"},slot:"content"},[i("span",[e._v(e._s(e.$t("m.serviceConfig['服务已绑定关联目录，请先解绑后在进行删除操作']")))])])],1)]:[i("bk-button",{attrs:{"data-test-id":"service_button_deleteService",theme:"primary",text:""},on:{click:function(i){return e.deleteOne(t.row)}}},[e._v("\n                            "+e._s(e.$t('m.serviceConfig["删除"]'))+"\n                        ")])]:i("bk-button",{directives:[{name:"cursor",rawName:"v-cursor"}],staticClass:"btn-permission-disable",attrs:{text:"",theme:"primary"},on:{click:function(i){return e.onServicePermissonCheck(["service_manage"],t.row)}}},[e._v("\n                        "+e._s(e.$t('m.serviceConfig["删除"]'))+"\n                    ")])]}}])})],1)],1)],1)},s=[];n._withStripped=!0},"0qOp":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bk-search-info"},[i("collapse-transition",[e.showMore?i("div",{staticClass:"bk-filter"},[i("bk-form",{ref:"dynamicForm",attrs:{"label-width":200,"form-type":"vertical"}},e._l(e.moreSearch,(function(t,n){return t.isHidden?e._e():i("div",{key:n,staticClass:"bk-filter-line"},["input"===t.type?i("bk-form-item",{attrs:{label:t.name}},[i("bk-input",{attrs:{placeholder:t.placeholder},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}})],1):e._e(),e._v(" "),"select"===t.type?i("bk-form-item",{attrs:{label:t.name}},[i("bk-select",{attrs:{searchable:"","show-select-all":t.multiSelect,multiple:t.multiSelect},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}},e._l(t.list,(function(e){return i("bk-option",{key:e.key,attrs:{id:e.key,name:e.name}})})),1)],1):e._e(),e._v(" "),"datetime"===t.type?i("bk-form-item",{attrs:{label:t.name}},[i("bk-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:t.placeholder,type:"datetimerange"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}})],1):e._e(),e._v(" "),"cascade"===t.type?i("bk-form-item",{attrs:{label:t.name}},[i("common-cascade",{staticStyle:{width:"100%"},attrs:{options:t.list,iscollect_first:!1,iscollect_two:!1,"isshow-number":!1,isactive:!0},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}})],1):e._e(),e._v(" "),"member"===t.type?i("bk-form-item",{attrs:{label:t.name}},[i("member-select",{attrs:{multiple:!1},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}})],1):e._e()],1)})),0),e._v(" "),i("div",{staticClass:"bk-filter-btn"},[i("bk-button",{attrs:{theme:"primary",title:e.$t("m.deployPage['查询']")},on:{click:e.searchContent}},[e._v("\n                    "+e._s(e.$t('m.deployPage["查询"]'))+"\n                ")]),e._v(" "),i("bk-button",{attrs:{theme:"default",title:e.$t("m.deployPage['清空']")},on:{click:e.clearSearch}},[e._v("\n                    "+e._s(e.$t('m.deployPage["清空"]'))+"\n                ")])],1)],1):e._e()])],1)},s=[];n._withStripped=!0},"5MDp":function(e,t,i){},"5R8N":function(e,t,i){"use strict";i.r(t);var n=i("RkdA"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t.default=s.a},"5Uk1":function(e,t,i){"use strict";i("Pu27")},"8+0e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(i("m1cH")),s=l(i("vDqi")),a=l(i("+qVm")),r=l(i("Ah+g")),o=l(i("0hVY")),c=i("CeR/");function l(e){return e&&e.__esModule?e:{default:e}}t.default={name:"ServiceList",components:{NavTitle:a.default,searchInfo:r.default},mixins:[o.default],data:function(){return{trueStatus:!0,falseStatus:!1,isDataLoading:!1,serviceTypesMap:[],dataList:[],checkList:[],pagination:{current:1,count:10,limit:10},moreSearch:[{name:this.$t('m.serviceConfig["服务名称"]'),type:"input",typeKey:"name__icontains",value:"",placeholder:this.$t('m.serviceConfig["请输入服务名"]')},{name:this.$t('m.serviceConfig["类型"]'),type:"select",typeKey:"key",value:"",list:[]},{name:this.$t('m.serviceConfig["服务级别"]'),type:"select",typeKey:"sla",value:"",list:[]}],addList:[],lineList:[],processInfo:{isShow:!1,title:this.$t('m.serviceConfig["流程预览"]'),position:{top:150},draggable:!0,loading:!0}}},mounted:function(){this.getServiceTypes(),this.getList(),this.getSlaList()},methods:{getList:function(e){var t=this;void 0!==e&&(this.pagination.current=e),this.checkList=[];var i={page:this.pagination.current,page_size:this.pagination.limit,project_key:this.$store.state.project.id,ordering:"-update_at"};this.moreSearch.forEach((function(e){""!==e.value&&e.typeKey&&(i[e.typeKey]=Array.isArray(e.value)?e.value.join(","):e.value)})),this.isDataLoading=!0,this.$store.dispatch("serviceEntry/getList",i).then((function(e){t.dataList=e.data.items,t.dataList.forEach((function(e,i){t.$set(e,"checkStatus",!1)})),t.pagination.current=e.data.page,t.pagination.count=e.data.count})).catch((function(e){(0,c.errorHandler)(e,t)})).finally((function(){t.isDataLoading=!1}))},getServiceTypes:function(){var e=this;this.$store.dispatch("getCustom").then((function(t){e.serviceTypesMap=t.data,e.moreSearch[1].list=t.data})).catch((function(t){(0,c.errorHandler)(t,e)}))},getSlaList:function(){var e=this,t={is_enabled:!0,project_key:this.$store.state.project.id};this.$store.dispatch("slaManagement/getProtocolsList",{params:t}).then((function(t){e.slaList=t.data,e.moreSearch[2].list=t.data,e.moreSearch[2].list.forEach((function(t){e.$set(t,"key",t.id)}))})).catch((function(t){(0,c.errorHandler)(t,e)}))},disabledFn:function(e,t){return!e.bounded_catalogs[0]},onServiceCreatePermissonCheck:function(){if(this.hasPermission(["service_create"],this.$store.state.project.projectAuthActions))this.$router.push({name:"projectServiceEdit",params:{type:"new",step:"basic"},query:{project_id:this.$store.state.project.id}});else{var e=this.$store.state.project.projectInfo,t={project:[{id:e.key,name:e.name}]};this.applyForPermission(["service_create"],this.$store.state.project.projectAuthActions,t)}},changeEntry:function(e,t){this.$router.push({name:"projectServiceEdit",params:{type:"edit",step:"basic"},query:{serviceId:e.id,project_id:this.$store.state.project.id}})},onServicePermissonCheck:function(e,t){var i=this.$store.state.project.projectInfo,s={service:[{id:t.id,name:t.name}],project:[{id:i.key,name:i.name}]};this.applyForPermission(e,[].concat((0,n.default)(this.$store.state.project.projectAuthActions),(0,n.default)(t.auth_actions)),s)},deleteCheck:function(){var e=this;this.$bkInfo({type:"warning",title:this.$t('m.serviceConfig["确认删除服务？"]'),subTitle:this.$t('m.serviceConfig["服务一旦删除，对应的服务将不可用。请谨慎操作。"]'),confirmFn:function(){var t=e.checkList.map((function(e){return e.id})).join(",");e.secondClick||(e.secondClick=!0,e.$store.dispatch("serviceEntry/batchDeleteService",{id:t}).then((function(t){e.$bkMessage({message:e.$t('m.serviceConfig["删除成功"]'),theme:"success"}),e.getList(1)})).catch((function(t){(0,c.errorHandler)(t,e)})).finally((function(){e.secondClick=!1})))}})},deleteOne:function(e){var t=this;this.$bkInfo({type:"warning",title:this.$t('m.serviceConfig["确认删除服务？"]'),subTitle:this.$t('m.serviceConfig["服务一旦删除，对应的服务将不可用。请谨慎操作。"]'),confirmFn:function(){var i=e.id;t.secondClick||(t.secondClick=!0,t.$store.dispatch("serviceEntry/deleteService",i).then((function(e){t.$bkMessage({message:t.$t('m.serviceConfig["删除成功"]'),theme:"success"}),1===t.dataList.length&&(t.pagination.current=1===t.pagination.current?1:t.pagination.current-1),t.getList()})).catch((function(e){(0,c.errorHandler)(e,t)})).finally((function(){t.secondClick=!1})))}})},searchContent:function(){this.getList(1)},clearSearch:function(){this.moreSearch.forEach((function(e){e.value=""})),this.getList(1)},searchMore:function(){this.$refs.searchInfo.searchMore()},handlePageChange:function(e){this.pagination.current=e,this.getList()},handlePageLimitChange:function(){this.pagination.limit=arguments[0],this.getList()},changeCheck:function(e){this.$refs.serviceTable.toggleRowSelection(e,e.checkStatus),e.checkStatus?this.checkList.some((function(t){return t.id===e.id}))||this.checkList.push(e):this.checkList=this.checkList.filter((function(t){return t.id!==e.id}))},handleSelectAll:function(e){var t=this;this.dataList.forEach((function(i){!i.bounded_catalogs[0]&&t.hasPermission(["service_manage"],i.auth_actions)&&(i.checkStatus=!!e.length)})),this.checkList=e.filter((function(e){return t.hasPermission(["service_manage"],e.auth_actions)}))},handleSelect:function(e,t){this.checkList=e},processShow:function(e){var t=this,i=e.workflow;this.processInfo.isShow=!this.processInfo.isShow,this.processInfo.loading=!0,s.default.all([this.$store.dispatch("deployCommon/getNodeVersion",{id:i}),this.$store.dispatch("deployCommon/getLineVersion",{id:i})]).then(s.default.spread((function(e,i){t.addList=e.data;for(var n=0;n<t.addList.length;n++)t.addList[n].indexInfo=n;t.lineList=i.data.items}))).finally((function(){t.processInfo.loading=!1}))}}}},"Ah+g":function(e,t,i){"use strict";i.r(t);var n=i("0qOp"),s=i("5R8N");for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("xDl+");var r=i("KHd+"),o=Object(r.a)(s.default,n.a,n.b,!1,null,"4ac37608",null);o.options.__file="src/views/commonComponent/searchInfo/searchInfo.vue",t.default=o.exports},Pu27:function(e,t,i){},RkdA:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(i("2eEL")),s=r(i("ETop")),a=r(i("u8Ap"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={name:"searchInfo",components:{collapseTransition:n.default,commonCascade:s.default,memberSelect:a.default},props:{moreSearch:{type:Array,default:function(){return[]}}},data:function(){return{searchWord:"",showMore:!1}},methods:{searchMore:function(){this.showMore=!this.showMore},closeSearch:function(){this.showMore=!1},searchContent:function(){this.$parent.getList(1,!0)},clearSearch:function(){this.$parent.clearSearch(),this.$parent.getList(1,!0)}}}},pdRj:function(e,t,i){"use strict";i.r(t);var n=i("/2XR"),s=i("wnDa");for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("5Uk1");var r=i("KHd+"),o=Object(r.a)(s.default,n.a,n.b,!1,null,"1d2091ef",null);o.options.__file="src/views/service/serviceList.vue",t.default=o.exports},wnDa:function(e,t,i){"use strict";i.r(t);var n=i("8+0e"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t.default=s.a},"xDl+":function(e,t,i){"use strict";i("5MDp")}}]);