(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(e,a,l){},335:function(e,a,l){"use strict";l(300)},362:function(e,a,l){"use strict";l.r(a);var t={data:()=>({fApi:{},rule:[],option:{ref:"formName",global:{"*":{props:{disabled:!1}}},on:{},submitBtn:!1,resetBtn:!1},formdata:{type:"",arrangement:"",disabled:!1,rule:""},arrangementList:[{label:"一行一列",value:24},{label:"一行两列",value:12},{label:"一行三列",value:8},{label:"一行四列",value:6}],typelist:[{label:"Radio 单选框",value:"Radio"},{label:"Checkbox 多选框",value:"Checkbox"},{label:"Input 输入框 ",value:"Input"},{label:"InputNumber 计数器",value:"InputNumber"},{label:"Select 选择器",value:"Select"},{label:"Cascader 级联选择器",value:"Cascader"},{label:"Switch 开关",value:"Switch"},{label:"Slider 滑块",value:"Slider"},{label:"TimePicker 时间选择器",value:"TimePicker"},{label:"DatePicker 日期选择器",value:"DatePicker"},{label:"DateTimePicker 日期时间选择器",value:"DateTimePicker"},{label:"Upload 上传",value:"Upload"},{label:"Rate 评分",value:"Rate"},{label:"ColorPicker 颜色选择器",value:"ColorPicker"},{label:"Transfer 穿梭框",value:"Transfer"}]}),mounted(){},components:{createForm:formCreate.$form()},methods:{remove(){this.formdata={type:"",arrangement:"",disabled:!1,rule:[]}},create(){let e=this.formdata,a={mobile:!0,name:e.type,field:"231",options:[],props:{type:"text",size:"mini",style:"width: 100%",disabled:e.disabled},validate:[],title:e.type,type:"",on:{},urls:null,col:{span:e.arrangement}};switch(e.type){case"number":a.type="Input";break;default:a.type="Input"}this.rule=[a]}}},r=(l(335),l(22)),o=Object(r.a)(t,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"create"},[l("el-form",{ref:"formdata",attrs:{model:e.formdata,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"类型"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formdata.type,callback:function(a){e.$set(e.formdata,"type",a)},expression:"formdata.type"}},e._l(e.typelist,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"展示样式"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formdata.arrangement,callback:function(a){e.$set(e.formdata,"arrangement",a)},expression:"formdata.arrangement"}},e._l(e.arrangementList,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"是否禁用"}},[l("el-checkbox",{model:{value:e.formdata.disabled,callback:function(a){e.$set(e.formdata,"disabled",a)},expression:"formdata.disabled"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.create}},[e._v("立即创建")]),e._v(" "),l("el-button",{on:{click:e.remove}},[e._v("清空")])],1)],1),e._v(" "),l("create-form",{attrs:{id:"formcreate",rule:e.rule,option:e.option},model:{value:e.fApi,callback:function(a){e.fApi=a},expression:"fApi"}})],1)}),[],!1,null,"626700cc",null);a.default=o.exports}}]);