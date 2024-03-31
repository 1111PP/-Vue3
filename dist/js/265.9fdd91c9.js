"use strict";(self["webpackChunkvue3_waimai"]=self["webpackChunkvue3_waimai"]||[]).push([[265],{3094:function(){},6911:function(){},6585:function(){},3623:function(e,l,t){t.r(l),t.d(l,{default:function(){return U}});var o=t(180),n=(t(1958),t(6196),t(6907)),a=(t(4746),t(458)),i=t(6252),r=t(4719),s=t(8443),d=t(590);const[c,u]=(0,r["do"])("radio-group"),m={shape:String,disabled:Boolean,iconSize:s.Or,direction:String,modelValue:s.Vg,checkedColor:String},p=Symbol(c);var b=(0,i.aZ)({name:c,props:m,emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const{linkChildren:o}=(0,d.$E)(p),n=e=>l("update:modelValue",e);return(0,i.YP)((()=>e.modelValue),(e=>l("change",e))),o({props:e,updateValue:n}),(0,d.aM)((()=>e.modelValue)),()=>{var l;return(0,i.Wm)("div",{class:u([e.direction]),role:"radiogroup"},[null==(l=t.default)?void 0:l.call(t)])}}});const g=(0,a.n)(b);var v=t(293),f=t(5865),h=t(294),k=t(5160),S=t(1569);const C=(0,v.l7)({},S.m,{shape:String}),[y,W]=(0,r["do"])("radio");var x=(0,i.aZ)({name:y,props:C,emits:["update:modelValue"],setup(e,{emit:l,slots:t}){const{parent:o}=(0,d.NB)(p),n=()=>{const l=o?o.props.modelValue:e.modelValue;return l===e.name},a=()=>{o?o.updateValue(e.name):l("update:modelValue",e.name)};return()=>(0,i.Wm)(S.Z,(0,i.dG)({bem:W,role:"radio",parent:o,checked:n(),onToggle:a},e),(0,v.ei)(t,["default","icon"]))}});const w=(0,a.n)(x);const[V,B]=(0,r["do"])("address-item");var T=(0,i.aZ)({name:V,props:{address:(0,s.ir)(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String,rightIcon:(0,s.SQ)("edit")},emits:["edit","click","select"],setup(e,{slots:l,emit:t}){const o=()=>{e.switchable&&t("select"),t("click")},n=()=>(0,i.Wm)(h.JO,{name:e.rightIcon,class:B("edit"),onClick:e=>{e.stopPropagation(),t("edit"),t("click")}},null),a=()=>l.tag?l.tag(e.address):e.address.isDefault&&e.defaultTagText?(0,i.Wm)(f.Vp,{type:"primary",round:!0,class:B("tag")},{default:()=>[e.defaultTagText]}):void 0,r=()=>{const{address:l,disabled:t,switchable:o}=e,n=[(0,i.Wm)("div",{class:B("name")},[`${l.name} ${l.tel}`,a()]),(0,i.Wm)("div",{class:B("address")},[l.address])];return o&&!t?(0,i.Wm)(w,{name:l.id,iconSize:18},{default:()=>[n]}):n};return()=>{var t;const{disabled:a}=e;return(0,i.Wm)("div",{class:B({disabled:a}),onClick:o},[(0,i.Wm)(k.bL,{border:!1,titleClass:B("title")},{title:r,"right-icon":n}),null==(t=l.bottom)?void 0:t.call(l,(0,v.l7)({},e.address,{disabled:a}))])}}});const[A,z,D]=(0,r["do"])("address-list"),P={list:(0,s.Ce)(),modelValue:s.Or,switchable:s.J5,disabledText:String,disabledList:(0,s.Ce)(),showAddButton:s.J5,addButtonText:String,defaultTagText:String,rightIcon:(0,s.SQ)("edit")};var O=(0,i.aZ)({name:A,props:P,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:l,emit:t}){const o=(o,n,a)=>{const r=()=>t(a?"editDisabled":"edit",o,n),s=()=>t("clickItem",o,n),d=()=>{t(a?"selectDisabled":"select",o,n),a||t("update:modelValue",o.id)};return(0,i.Wm)(T,{key:o.id,address:o,disabled:a,switchable:e.switchable,defaultTagText:e.defaultTagText,rightIcon:e.rightIcon,onEdit:r,onClick:s,onSelect:d},{bottom:l["item-bottom"],tag:l.tag})},a=(e,l)=>{if(e)return e.map(((e,t)=>o(e,t,l)))},r=()=>e.showAddButton?(0,i.Wm)("div",{class:[z("bottom"),"van-safe-area-bottom"]},[(0,i.Wm)(n.zx,{round:!0,block:!0,type:"primary",text:e.addButtonText||D("add"),class:z("add"),onClick:()=>t("add")},null)]):void 0;return()=>{var t,o;const n=a(e.list),s=a(e.disabledList,!0),d=e.disabledText&&(0,i.Wm)("div",{class:z("disabled-text")},[e.disabledText]);return(0,i.Wm)("div",{class:z()},[null==(t=l.top)?void 0:t.call(l),(0,i.Wm)(g,{modelValue:e.modelValue},{default:()=>[n]}),d,s,null==(o=l.default)?void 0:o.call(l),r()])}}});const Z=(0,a.n)(O);t(368),t(6742),t(6585),t(3094),t(2939),t(1452),t(6911);var _=t(2056),q=t(9963);const I=e=>((0,i.dD)("data-v-0f79a81e"),e=e(),(0,i.Cn)(),e),J={class:"block"},L=I((()=>(0,i._)("span",null,"是否选择该配送地址",-1)));function Q(e,l,t,a,r,s){const d=_.Z,c=Z,u=n.zx,m=o.aV;return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(d,{title:"地址管理"}),(0,i.Wm)(c,{modelValue:e.chosenAddressId,"onUpdate:modelValue":l[0]||(l[0]=l=>e.chosenAddressId=l),list:e.list,"disabled-list":e.disabledList,"default-tag-text":"默认",onAdd:a.onAdd,onSelect:a.selectAddress,switchable:!0,onEdit:a.onEdit},null,8,["modelValue","list","disabled-list","onAdd","onSelect","onEdit"]),(0,i.Wm)(m,{show:e.show,onClick:l[2]||(l[2]=l=>e.show=!1)},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"wrapper",onClick:l[1]||(l[1]=(0,q.iM)((()=>{}),["stop"]))},[(0,i._)("div",J,[L,(0,i._)("div",null,[(0,i.Wm)(u,{plain:"",class:"icon",type:"primary",onClick:a.sure},{default:(0,i.w5)((()=>[(0,i.Uk)("确定")])),_:1},8,["onClick"]),(0,i.Wm)(u,{plain:"",type:"primary",onClick:a.cancel},{default:(0,i.w5)((()=>[(0,i.Uk)("取消")])),_:1},8,["onClick"])])])])])),_:1},8,["show"])])}t(7658);var $=t(2262),j=t(3907),E=t(2201),F={components:{Header:_.Z},setup(){const e=(0,E.tv)(),l=(0,j.oR)(),t=(0,$.qj)({list:[],disabledList:[],show:!1,getValue:{},chosenAddressId:1001}),o=()=>{console.log("add Address"),e.push({path:"/addressedit",query:{type:"add"}})},n=l=>{console.log("edit Address"),e.push({path:"/addressedit",query:{id:l.id,type:"edit"}})},a=()=>{t.list=l.state.userAddress.map((e=>({id:e.id,name:e.name,tel:e.tel,address:`\n              ${e.province?e.province:""}\n              ${e.city} ${e.county} ${e.addressDetail}\n            `,isDefault:e.isDefault})))},r=()=>{l.state.userAddress.forEach((e=>{!0===e.isDefault&&(t.chosenAddressId=l.state.currentAddress.id||e.id)}))},s=e=>{console.log(e),t.getValue=e,t.show=!0},d=()=>{t.show=!1},c=()=>{l.commit("getCurrentAddress",t.getValue),t.show=!1,e.back()};return(0,i.bv)((()=>{a(),r()})),{store:l,selectAddress:s,onAdd:o,cancel:d,sure:c,onEdit:n,...(0,$.BK)(t)}}},N=t(3744);const G=(0,N.Z)(F,[["render",Q],["__scopeId","data-v-0f79a81e"]]);var U=G},6907:function(e,l,t){t.d(l,{zx:function(){return f}});var o=t(458),n=t(6252),a=t(4719),i=t(293),r=t(8443),s=t(6846),d=t(5314),c=t(1690),u=t(294),m=t(1116);const[p,b]=(0,a["do"])("button"),g=(0,i.l7)({},c.g2,{tag:(0,r.SQ)("button"),text:String,icon:String,type:(0,r.SQ)("default"),size:(0,r.SQ)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,r.SQ)("button"),loadingSize:r.Or,loadingText:String,loadingType:String,iconPosition:(0,r.SQ)("left")});var v=(0,n.aZ)({name:p,props:g,emits:["click"],setup(e,{emit:l,slots:t}){const o=(0,c.yj)(),a=()=>t.loading?t.loading():(0,n.Wm)(m.gb,{size:e.loadingSize,type:e.loadingType,class:b("loading")},null),i=()=>e.loading?a():t.icon?(0,n.Wm)("div",{class:b("icon")},[t.icon()]):e.icon?(0,n.Wm)(u.JO,{name:e.icon,class:b("icon"),classPrefix:e.iconPrefix},null):void 0,r=()=>{let l;if(l=e.loading?e.loadingText:t.default?t.default():e.text,l)return(0,n.Wm)("span",{class:b("text")},[l])},p=()=>{const{color:l,plain:t}=e;if(l){const e={color:t?l:"white"};return t||(e.background=l),l.includes("gradient")?e.border=0:e.borderColor=l,e}},g=t=>{e.loading?(0,s.PF)(t):e.disabled||(l("click",t),o())};return()=>{const{tag:l,type:t,size:o,block:a,round:s,plain:c,square:u,loading:m,disabled:v,hairline:f,nativeType:h,iconPosition:k}=e,S=[b([t,o,{plain:c,block:a,round:s,square:u,loading:m,disabled:v,hairline:f}]),{[d._K]:f}];return(0,n.Wm)(l,{type:h,class:S,style:p(),disabled:v,onClick:g},{default:()=>[(0,n.Wm)("div",{class:b("content")},["left"===k&&i(),r(),"right"===k&&i()])]})}}});const f=(0,o.n)(v)},4746:function(e,l,t){t(1958),t(368),t(6742),t(2939),t(1452)},1083:function(e,l,t){t.d(l,{ZP:function(){return p},x_:function(){return u}});var o=t(6252),n=t(4719),a=t(8443),i=t(293),r=t(1690),s=t(294);const[d,c]=(0,n["do"])("cell"),u={tag:(0,a.SQ)("div"),icon:String,size:String,title:a.Or,value:a.Or,label:a.Or,center:Boolean,isLink:Boolean,border:a.J5,required:Boolean,iconPrefix:String,valueClass:a.Vg,labelClass:a.Vg,titleClass:a.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},m=(0,i.l7)({},u,r.g2);var p=(0,o.aZ)({name:d,props:m,setup(e,{slots:l}){const t=(0,r.yj)(),n=()=>{const t=l.label||(0,i.Xq)(e.label);if(t)return(0,o.Wm)("div",{class:[c("label"),e.labelClass]},[l.label?l.label():e.label])},a=()=>{var t;if(l.title||(0,i.Xq)(e.title)){const a=null==(t=l.title)?void 0:t.call(l);if(Array.isArray(a)&&0===a.length)return;return(0,o.Wm)("div",{class:[c("title"),e.titleClass],style:e.titleStyle},[a||(0,o.Wm)("span",null,[e.title]),n()])}},d=()=>{const t=l.value||l.default,n=t||(0,i.Xq)(e.value);if(n)return(0,o.Wm)("div",{class:[c("value"),e.valueClass]},[t?t():(0,o.Wm)("span",null,[e.value])])},u=()=>l.icon?l.icon():e.icon?(0,o.Wm)(s.JO,{name:e.icon,class:c("left-icon"),classPrefix:e.iconPrefix},null):void 0,m=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const l=e.arrowDirection&&"right"!==e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,o.Wm)(s.JO,{name:l,class:c("right-icon")},null)}};return()=>{var n;const{tag:i,size:r,center:s,border:p,isLink:b,required:g}=e,v=null!=(n=e.clickable)?n:b,f={center:s,required:g,clickable:v,borderless:!p};return r&&(f[r]=!!r),(0,o.Wm)(i,{class:c(f),role:v?"button":void 0,tabindex:v?0:void 0,onClick:t},{default:()=>{var e;return[u(),a(),d(),m(),null==(e=l.extra)?void 0:e.call(l)]}})}}})},5160:function(e,l,t){t.d(l,{bL:function(){return a}});var o=t(458),n=t(1083);const a=(0,o.n)(n.ZP)},1569:function(e,l,t){t.d(l,{Z:function(){return c},m:function(){return d}});var o=t(6252),n=t(2262),a=t(8443),i=t(293),r=t(2639),s=t(294);const d={name:a.Vg,disabled:Boolean,iconSize:a.Or,modelValue:a.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var c=(0,o.aZ)({props:(0,i.l7)({},d,{bem:(0,a.ir)(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:a.J5,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:l,slots:t}){const a=(0,n.iH)(),i=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},d=(0,o.Fl)((()=>{if(e.parent&&e.bindGroup){const l=i("disabled")||e.disabled;if("checkbox"===e.role){const t=i("modelValue").length,o=i("max"),n=o&&t>=+o;return l||n&&!e.checked}return l}return e.disabled})),c=(0,o.Fl)((()=>i("direction"))),u=(0,o.Fl)((()=>{const l=e.checkedColor||i("checkedColor");if(l&&e.checked&&!d.value)return{borderColor:l,backgroundColor:l}})),m=(0,o.Fl)((()=>e.shape||i("shape")||"round")),p=t=>{const{target:o}=t,n=a.value,i=n===o||(null==n?void 0:n.contains(o));d.value||!i&&e.labelDisabled||l("toggle"),l("click",t)},b=()=>{var l,n;const{bem:c,checked:p,indeterminate:b}=e,g=e.iconSize||i("iconSize");return(0,o.Wm)("div",{ref:a,class:c("icon",[m.value,{disabled:d.value,checked:p,indeterminate:b}]),style:"dot"!==m.value?{fontSize:(0,r.Nn)(g)}:{width:(0,r.Nn)(g),height:(0,r.Nn)(g),borderColor:null==(l=u.value)?void 0:l.borderColor}},[t.icon?t.icon({checked:p,disabled:d.value}):"dot"!==m.value?(0,o.Wm)(s.JO,{name:b?"minus":"success",style:u.value},null):(0,o.Wm)("div",{class:c("icon--dot__icon"),style:{backgroundColor:null==(n=u.value)?void 0:n.backgroundColor}},null)])},g=()=>{if(t.default)return(0,o.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:d.value}])},[t.default()])};return()=>{const l="left"===e.labelPosition?[g(),b()]:[b(),g()];return(0,o.Wm)("div",{role:e.role,class:e.bem([{disabled:d.value,"label-disabled":e.labelDisabled},c.value]),tabindex:d.value?void 0:0,"aria-checked":e.checked,onClick:p},[l])}}})},1690:function(e,l,t){t.d(l,{BC:function(){return a},g2:function(){return n},yj:function(){return i}});var o=t(6252);const n={to:[String,Object],url:String,replace:Boolean};function a({to:e,url:l,replace:t,$router:o}){e&&o?o[t?"replace":"push"](e):l&&(t?location.replace(l):location.href=l)}function i(){const e=(0,o.FN)().proxy;return()=>a(e)}},5865:function(e,l,t){t.d(l,{Vp:function(){return b}});var o=t(458),n=t(6252),a=t(9963),i=t(4719),r=t(8443),s=t(5314),d=t(294);const[c,u]=(0,i["do"])("tag"),m={size:String,mark:Boolean,show:r.J5,type:(0,r.SQ)("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var p=(0,n.aZ)({name:c,props:m,emits:["close"],setup(e,{slots:l,emit:t}){const o=e=>{e.stopPropagation(),t("close",e)},i=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},r=()=>{var t;const{type:a,mark:r,plain:c,round:m,size:p,closeable:b}=e,g={mark:r,plain:c,round:m};p&&(g[p]=p);const v=b&&(0,n.Wm)(d.JO,{name:"cross",class:[u("close"),s.e9],onClick:o},null);return(0,n.Wm)("span",{style:i(),class:u([g,a])},[null==(t=l.default)?void 0:t.call(l),v])};return()=>(0,n.Wm)(a.uT,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?r():null]})}});const b=(0,o.n)(p)}}]);
//# sourceMappingURL=265.9fdd91c9.js.map