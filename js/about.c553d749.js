"use strict";(self["webpackChunktrialextension"]=self["webpackChunktrialextension"]||[]).push([[594],{2896:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-2"},[e("br"),t.saveChange?e("div",{staticClass:"alert alert-success text-center"},[e("b",{staticStyle:{"font-size":"12px"}},[t._v("İşlemler Kayıt Edildi")])]):t._e(),e("div",{staticClass:"d-flex justify-content-around"},[e("button",{staticClass:"btn btn-secondary btn-sm",on:{click:t.newItem}},[t._v("Ürün ekle")]),e("button",{staticClass:"btn btn-success btn-sm",on:{click:t.storeItemSaveChange}},[t._v("İşlemleri Kaydet ")])]),t._l(t.items,(function(a){return e("form-item",{key:a,attrs:{item:a},on:{"add-form-item":t.addItem,"delete-form-item":t.deleteFormItem}})}))],2)},s=[],o=(a(4114),function(){var t=this,e=t._self._c;return e("form",[e("div",{staticClass:"row p-1 mt-3 mb-3"},[e("div",{staticClass:"col-4 mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localItem.barcode,expression:"localItem.barcode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Barkod"},domProps:{value:t.localItem.barcode},on:{input:function(e){e.target.composing||t.$set(t.localItem,"barcode",e.target.value)}}})]),e("div",{staticClass:"col-4 mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.localItem.quantity,expression:"localItem.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Stok"},domProps:{value:t.localItem.quantity},on:{input:function(e){e.target.composing||t.$set(t.localItem,"quantity",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-4 mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.localItem.salePrice,expression:"localItem.salePrice",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Trendyol Satış Fiyatı"},domProps:{value:t.localItem.salePrice},on:{input:function(e){e.target.composing||t.$set(t.localItem,"salePrice",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-6 mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.localItem.listPrice,expression:"localItem.listPrice",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Piyasa Satış Fiyatı"},domProps:{value:t.localItem.listPrice},on:{input:function(e){e.target.composing||t.$set(t.localItem,"listPrice",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-6 mb-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn-sm btn btn-danger",on:{click:t.deleteFormItem}},[e("i",{staticClass:"bi bi-trash"})])])])]),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localItem.autoStart,expression:"localItem.autoStart"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:t.localItem.barcode},domProps:{checked:Array.isArray(t.localItem.autoStart)?t._i(t.localItem.autoStart,null)>-1:t.localItem.autoStart},on:{change:function(e){var a=t.localItem.autoStart,l=e.target,s=!!l.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);l.checked?r<0&&t.$set(t.localItem,"autoStart",a.concat([o])):r>-1&&t.$set(t.localItem,"autoStart",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.localItem,"autoStart",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:t.localItem.barcode}},[t._v(" Otomatik Başlat ")])])])]),e("hr")])}),r=[],i={props:{item:{type:Object,required:!0}},data(){return{localItem:this.item}},methods:{deleteFormItem(){this.$emit("delete-form-item",this.localItem)}}},c=i,n=a(1656),m=(0,n.A)(c,o,r,!1,null,null,null),u=m.exports,d={components:{FormItem:u},data(){return{saveChange:!1,items:[]}},methods:{storeItemSaveChange(){this.$store.commit("setItems",this.items),console.log(this.$store.getters.items),this.localStorageSaveChange(),this.saveChange=!0,setTimeout((()=>{this.saveChange=!1}),2e3)},localStorageSaveChange(){localStorage.setItem("adi","Ferhat"),localStorage.setItem("items",JSON.stringify(this.items)),console.log("Items are saved to local storage")},addItem(t){this.items.push(t)},newItem(){this.items.push({barcode:null,quantity:null,salePrice:null,listPrice:null,autoStart:!1})},deleteFormItem(t){const e=this.items.findIndex((e=>e.barcode===t.barcode));this.items.splice(e,1)}},mounted(){localStorage.getItem("items")&&(this.items=JSON.parse(localStorage.getItem("items")))}},v=d,p=(0,n.A)(v,l,s,!1,null,null,null),b=p.exports}}]);
//# sourceMappingURL=about.c553d749.js.map