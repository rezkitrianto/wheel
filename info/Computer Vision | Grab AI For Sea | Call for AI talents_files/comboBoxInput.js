define("comboBoxInput",["lodash","santa-components","componentsCore","prop-types","skins","textCommon"],function(e,t,o,r,i,n){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=443)}({0:function(t,o){t.exports=e},2:function(e,o){e.exports=t},27:function(e,t){e.exports=n},3:function(e,t){e.exports=o},4:function(e,t){e.exports=r},443:function(e,t,o){var r,i;r=[o(2),o(0),o(4),o(27),o(5),o(444),o(3)],void 0===(i=function(e,t,o,r,i,n,a){"use strict";var l=r.labelUtils;function s(t){return e.utils.createReactElement("option",{value:t.value,default:t.default,style:t.style,ref:t.ref||t.value,disabled:t.disabled,key:t.key},t.text)}function p(e,o,r,i){var n=!1,a=t.map(e,function(e,o){return n=n||e.value===r,s(t.assign({default:e.value===r,key:o},e))}),l=void 0;return l=o?t.assign({disabled:!0,default:!n,style:{display:"none"},className:i,ref:"placeholder",key:"placeholder-"+o.value},o,{value:""}):{default:!n,style:{display:"none"},className:i,text:"",value:"",ref:"placeholder",key:"noPlaceholder"},a.unshift(s(l)),a}function d(e){return t.get(e,["compProp","placeholder","value"])}function c(e){return function(e){return e.compData.value===d(e)}(e)?"":e.compData.value}var b=function(t){return e.mixins.validatableMixin.getPublicState(t)};function u(e){return{$validity:e.errorMessage?"invalid":"valid"}}var h={displayName:"ComboBoxInput",mixins:[a.mixins.skinBasedComp,e.mixins.runTimeCompData,r.textScaleMixin,e.mixins.inputFocusMixin,e.mixins.validatableMixin.validatable,e.mixins.compStateMixin(b)],propTypes:{compData:e.santaTypesDefinitions.Component.compData.isRequired,compProp:e.santaTypesDefinitions.Component.compProp.isRequired,componentViewMode:e.santaTypesDefinitions.RenderFlags.componentViewMode,onSelectionChange:o.func,shouldResetComponent:e.santaTypesDefinitions.RenderFlags.shouldResetComponent,errorMessage:o.bool,isMobileView:e.santaTypesDefinitions.isMobileView},statics:{behaviors:t.assign({},e.mixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS,e.mixins.validatableMixin.VALIDATABLE_BEHAVIORS)},focus:function(){this.refs.collection.focus()},blur:function(){this.refs.collection.blur()},getInitialState:function(){return t.assign(u(this.props),b(),{value:c(this.props),defaultValue:this.props.compData.value,placeholderValue:d(this.props)})},setCustomValidity:function(e){this.refs.collection.setCustomValidity(e)},componentWillReceiveProps:function(e){e.shouldResetComponent&&e.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication();var t=u(e),o=e.compData.value!==this.state.value,r=d(e)!==this.state.placeholderValue;(o||r||this.props.onSelectionChange)&&(t.value=c(e)),this.setState(t)},onChange:function(e,o){var r=e.target.value;this.updateData({value:r}),this.props.onSelectionChange?(e.type="selectionChanged",e.payload=t.find(this.props.compData.options,{value:r})||{},this.props.onSelectionChange(e,o)):this.setState({value:r||""}),this.handleAction("change",e)},onFocus:function(e){this.handleAction("focus",e)},onBlur:function(e){this.handleAction("blur",e)},getCollectionClassName:function(){var e={};return this.props.compProp.collectionClass&&(e[this.props.compProp.collectionClass]=!0),[this.isPlaceholderSelected()?this.classSet({"placeholder-style":!0}):"","has-custom-focus",this.classSet(e)].join(" ")},getSkinProperties:function(){var e=this.props,o=e.compProp,r=e.isMobileView,i=e.compData,n=e.compTheme,a={"with-validation-indication":this.shouldShowValidityIndication(),required:l.showRequired(i,o,n)};a[this.props.compProp.textAlignment+"-direction"]=!0,this.props.compProp.class&&(a[this.props.compProp.class]=!0);var s={};s["padding"+t.capitalize(this.props.compProp.textAlignment)]=this.props.compProp.textPadding;var d=this.props.compData.options,c={compId:this.props.id,inputId:"collection"};return t.merge(l.getBaseInputWithLabelSkinProperties({compProp:o,rawFontSyle:this.getFontSize("fntlbl"),isMobileView:r,compData:i,id:c}),{"":{className:this.classSet(a),"data-disabled":!!this.props.compProp.isDisabled,"data-preview":t.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()},collection:{disabled:!!t.get(this.props,"compProp.isDisabled"),children:p(d,this.props.compData.placeholder||this.props.compProp.placeholder,this.state.defaultValue,this.classSet({"placeholder-style":!0})),value:this.state.value,required:this.props.compProp.required,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,style:t.merge(s,this.getFontSize()),className:this.getCollectionClassName(),"data-preview":t.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()},errorMessage:{children:[this.props.errorMessage]}})},measureComponent:function(e,t){var o=this.refs,r=o.icon,i=o.collection,n=o.label,a=r.getBBox().height+16,s=parseInt(t(i).css("line-height"),10)||0,p=2*(parseInt(t(i).css("border-width"),10)||0),d=Math.max(s,a)+p+n.offsetHeight,c=l.measureComponentWithLabel(this.props.compProp,n,this.props.compData),b=c?Math.max(c,d):Math.max(i.offsetHeight,d);return[{node:e,type:"css",changes:{width:Math.max(e.offsetWidth,i.offsetWidth),minHeight:d,height:b}}]},isPlaceholderSelected:function(){return e=this.state,o=this.props.compProp,e.value===t.get(o,"placeholder.value");var e,o}};return a.compRegistrar.register("wysiwyg.viewer.components.inputs.ComboBoxInput",h),i.skinsMap.addBatch(n),h}.apply(t,r))||(e.exports=i)},444:function(e,t,o){var r;void 0===(r=function(){"use strict";var e={ComboBoxInputSkin:{react:[["label","label",[],{}],["div",null,["_selector-wrapper"],{},["select","collection",[],{}],["div","arrow",[],{},["div",null,["_svg_container"],{},["svg","icon",[],{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9.2828 4.89817"},["defs",null,[],{}],["title",null,[],{},"arrow&amp;v"],["path",null,["_cls-1"],{d:"M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"}]]]]]],params:{brwe:"BORDER_SIZES",brde:"BORDER_COLOR_ALPHA",bge:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW",fnt:"FONT",bg:"BG_COLOR_ALPHA",txt:"TEXT_COLOR",brw:"BORDER_SIZES",brd:"BORDER_COLOR_ALPHA",txt2:"TEXT_COLOR",brwh:"BORDER_SIZES",brdh:"BORDER_COLOR_ALPHA",bgh:"BG_COLOR_ALPHA",brwf:"BORDER_SIZES",brdf:"BORDER_COLOR_ALPHA",bgf:"BG_COLOR_ALPHA",brdd:"BORDER_COLOR_ALPHA",txtd:"TEXT_COLOR",bgd:"BG_COLOR_ALPHA",arrowColor:"BG_COLOR_ALPHA",fntlbl:"FONT",txtlbl:"TEXT_COLOR",txtlblrq:"COLOR_ALPHA"},paramsDefaults:{brwe:"2px",brde:"#F9F9F9",bge:"color_8",rd:"5px",shd:"0 0 0 rgba(0, 0, 0, 0)",fnt:"font_7",bg:"color_8",txt:"#888888",brw:"2px",brd:"#F9F9F9",txt2:"color_15",brwh:"2px",brdh:"#F9F9F9",bgh:"color_8",brwf:"2px",brdf:"#F9F9F9",bgf:"color_8",brdd:"#CCCCCC",txtd:"#FFFFFF",bgd:"#CCCCCC",arrowColor:"color_12",fntlbl:"font_8",txtlbl:"color_15",txtlblrq:"transparent"},css:{'%_with-validation-indication select:not([data-preview~="focus"]):invalid':"[brwe]  border-style:solid;border-color:[brde];background-color:[bge];","%":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","% select":"[rd]  -webkit-appearance:none;-moz-appearance:none;[shd]  [fnt]  background-color:[bg];color:[txt];[brw]  border-style:solid;border-color:[brd];margin:0;padding:0 45px;cursor:pointer;position:relative;max-width:100%;min-width:100%;min-height:10px;height:100%;text-overflow:ellipsis;white-space:nowrap;display:block;","% select option":"text-overflow:ellipsis;white-space:nowrap;overflow:hidden;","% select%_placeholder-style":"color:[txt2];","% select:-moz-focusring":"color:transparent;text-shadow:0 0 0 #000;","% select::-ms-expand":"display:none;","% select:focus::-ms-value":"background:transparent;",'% select:not(%_mobileCollection):hover,% select:not(%_mobileCollection)[data-preview~="hover"]':"[brwh]  border-style:solid;border-color:[brdh];background-color:[bgh];",'% select:not(%_mobileCollection):focus,% select:not(%_mobileCollection)[data-preview~="focus"]':"[brwf]  border-style:solid;border-color:[brdf];background-color:[bgf];",'% select:not(%_mobileCollection)[data-error="true"],% select:not(%_mobileCollection)[data-preview~="error"]':"[brwe]  border-style:solid;border-color:[brde];background-color:[bge];",'% select:not(%_mobileCollection):disabled,% select:not(%_mobileCollection)[data-disabled="true"],% select:not(%_mobileCollection)[data-preview~="disabled"]':"border-width:2px;border-color:[brdd];color:[txtd];background-color:[bgd];",'% select:not(%_mobileCollection):disabled + %arrow,% select:not(%_mobileCollection)[data-disabled="true"] + %arrow,% select:not(%_mobileCollection)[data-preview~="disabled"] + %arrow':"border-width:2px;border-color:[brdd];color:[txtd];border:none;","%arrow":"position:absolute;pointer-events:none;top:0;bottom:0;box-sizing:border-box;padding-left:20px;padding-right:20px;height:inherit;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;","%arrow %_svg_container":"width:12px;","%arrow %_svg_container svg":"height:100%;fill:[arrowColor];","%_left-direction":"text-align-last:left;",'%_left-direction %arrow,%_left-direction select:hover + %arrow,%_left-direction select[data-preview~="hover"] + %arrow,%_left-direction select:focus + %arrow,%_left-direction select[data-preview~="focus"] + %arrow,%_left-direction[data-preview~="focus"] %arrow,%_left-direction select[data-error="true"] + %arrow,%_left-direction select[data-preview~="error"] + %arrow':"border-left:0;","%_left-direction %arrow":"right:0;","%_right-direction":"text-align-last:right;",'%_right-direction %arrow,%_right-direction select:hover + %arrow,%_right-direction select[data-preview~="hover"] + %arrow,%_right-direction select:focus + %arrow,%_right-direction select[data-preview~="focus"] + %arrow,%_right-direction[data-preview~="focus"] %arrow,%_right-direction select[data-error="true"] + %arrow,%_right-direction select[data-preview~="error"] + %arrow':"border-right:0;","%_right-direction %arrow":"left:0;","%_center-direction":"text-align-last:left;text-align-last:center;",'%_center-direction %arrow,%_center-direction select:hover + %arrow,%_center-direction select[data-preview~="hover"] + %arrow,%_center-direction select:focus + %arrow,%_center-direction select[data-preview~="focus"] + %arrow,%_center-direction[data-preview~="focus"] %arrow,%_center-direction select[data-error="true"] + %arrow,%_center-direction select[data-preview~="error"] + %arrow':"border-left:0;","%_center-direction %arrow":"right:0;","%_mobileMenuContainer":"border:0;","%_mobileMenuContainer %arrow %_svg_container %icon":"fill:[txt];","%label":"[fntlbl]  color:[txtlbl];word-break:break-word;display:inline-block;line-height:1;","%_required %label::after":'content:" *";color:[txtlblrq];',"%_selector-wrapper":"-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;"}},"wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkin":{react:[["select","collection",[],{}],["p","errorMessage",[],{}]],params:{txt:"TEXT_COLOR",brw:"BORDER_SIZE",brd:"BORDER_COLOR",rd:"BORDER_RADIUS",bg:"BG_COLOR_ALPHA",bg2:"BG_COLOR_ALPHA"},paramsDefaults:{txt:"#333",brw:"2px",brd:"#1ab1ab",rd:"5px",bg:"#fff",bg2:"#aaa"},css:{"%":"position:relative;display:inline-block;padding:0;margin:0;","% select":"color:[txt];border:solid [brw] [brd];padding:5px 40px 5px 5px;[rd]  box-sizing:border-box !important;-webkit-appearance:none;-moz-appearance:none;background-color:[bg];position:relative;cursor:pointer;","% option":"border:solid [brw] [brd];background-color:[bg];padding:5px;","%:after":'content:"?";position:absolute;top:2px;bottom:2px;right:0;width:35px;pointer-events:none;[rd]  box-sizing:border-box !important;background-color:[bg2];border:[brw] solid [brd];color:#fff;text-align:center;font-size:10px;line-height:30px;text-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.6);cursor:pointer !important;border-bottom-left-radius:0;border-top-left-radius:0;','%[data-state~="invalid"] select':"border-color:#d00;color:#d00;",'%[data-state~="invalid"]:after':'content:"?";position:absolute;top:2px;bottom:2px;right:0;width:35px;pointer-events:none;[rd]  box-sizing:border-box !important;background-color:[bg2];border:#d00 solid [brd];color:#d00;text-align:center;font-size:10px;line-height:30px;text-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.6);cursor:pointer !important;border-bottom-left-radius:0;border-top-left-radius:0;','%[data-state~="invalid"]:hover + p':"opacity:1;color:#d00;","% p":"[rd]  opacity:0;display:inline-block;position:absolute;left:0;bottom:100%;width:140px;padding:10px;font-size:13px;line-height:16px;background:#fff;box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);","% p:after":'content:"?";position:absolute;bottom:-12px;left:10px;color:#fff;text-shadow:0 1px 3px rgba(0, 0, 0, 0.6);[rd]'}},"wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkinNoValidation":{react:[["select","collection",[],{}]],params:{txt:"TEXT_COLOR",brw:"BORDER_SIZE",brd:"BORDER_COLOR",rd:"BORDER_RADIUS",bg:"BG_COLOR_ALPHA",bg2:"BG_COLOR_ALPHA"},paramsDefaults:{txt:"#333",brw:"2px",brd:"#1ab1ab",rd:"5px",bg:"#fff",bg2:"#aaa"},css:{"%":"position:relative;display:inline-block;padding:0;margin:0;","% select":"color:[txt];border:solid [brw] [brd];padding:5px 40px 5px 5px;[rd]  box-sizing:border-box !important;-webkit-appearance:none;-moz-appearance:none;background-color:[bg];position:relative;cursor:pointer;","% option":"border:solid [brw] [brd];background-color:[bg];padding:5px;","%:after":'content:"▼";position:absolute;top:3px;bottom:3px;right:0;width:35px;pointer-events:none;[rd]  box-sizing:border-box !important;background-color:[bg2];border:[brw] solid [brd];color:#fff;text-align:center;font-size:10px;line-height:30px;text-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.6);cursor:pointer !important;border-bottom-left-radius:0;border-top-left-radius:0;'}},"wysiwyg.viewer.skins.input.ComboBoxInputSkin":{react:[["select","collection",[],{}],["p","errorMessage",[],{}]],params:{txt:"TEXT_COLOR",brw:"BORDER_SIZE",brd:"BORDER_COLOR",rd:"BORDER_RADIUS",bg:"BG_COLOR_ALPHA",bg2:"BG_COLOR_ALPHA"},paramsDefaults:{txt:"#333",brw:"2px",brd:"#1ab1ab",rd:"5px",bg:"#fff",bg2:"#aaa"},css:{"%":"position:relative;display:inline-block;padding:0;margin:0;","% select":"color:[txt];border:solid [brw] [brd];padding:5px 40px 5px 5px;[rd]  box-sizing:border-box !important;-webkit-appearance:none !important;-moz-appearance:none !important;background-color:[bg];position:relative;cursor:pointer;","% option":"border:solid [brw] [brd];background-color:[bg];padding:5px;","%:after":'content:"▼";position:absolute;top:2px;bottom:2px;right:0;width:35px;pointer-events:none;[rd]  box-sizing:border-box !important;background-color:[bg2];border:[brw] solid [brd];color:#fff;text-align:center;font-size:10px;line-height:30px;text-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.6);cursor:pointer !important;border-bottom-left-radius:0;border-top-left-radius:0;','%[data-state~="invalid"] select':"border-color:#d00;color:#d00;",'%[data-state~="invalid"]:after':'content:"▼";position:absolute;top:2px;bottom:2px;right:0;width:35px;pointer-events:none;[rd]  box-sizing:border-box !important;background-color:[bg2];border:#d00 solid [brd];color:#d00;text-align:center;font-size:10px;line-height:30px;text-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.6);cursor:pointer !important;border-bottom-left-radius:0;border-top-left-radius:0;','%[data-state~="invalid"]:hover + p':"opacity:1;color:#d00;","% p":"[rd]  opacity:0;display:inline-block;position:absolute;left:0;bottom:100%;width:140px;padding:10px;font-size:13px;line-height:16px;background:#fff;box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);","% p:after":'content:"▼";position:absolute;bottom:-12px;left:10px;color:#fff;text-shadow:0 1px 3px rgba(0, 0, 0, 0.6);[rd]'}}};return e}.apply(t,[]))||(e.exports=r)},5:function(e,t){e.exports=i}})});
//# sourceMappingURL=comboBoxInput.min.js.map