webpackJsonp([25],{2731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=(n.n(i),n(122)),r=n(11),l=n(698),o=n(702),c=n(2732),s=n(2733),u=n(771),m=n(711),p=n(21),d=n(20),h=n(8),f=n(719),b=n(720),y=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),v=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function l(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?a(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(l,o)}c((i=i.apply(e,t||[])).next())})},E=this&&this.__generator||function(e,t){var n,i,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},g=function(e){function t(t){var n=e.call(this,t)||this;return n.state={_list:[],supplyChainObject:{infoEntity:[],link:"",vendor:"",item:"",linkName:"",rdfsLabel:""},itemToDelete:Object(),isEdit:!1,showLogs:!1},n.AddSupplyChain=n.AddSupplyChain.bind(n),n.onDeleteInfoEntityItem=n.onDeleteInfoEntityItem.bind(n),n.handleSupplyChainForm=n.handleSupplyChainForm.bind(n),n}return y(t,e),t.prototype.componentDidMount=function(){return v(this,void 0,void 0,function(){return E(this,function(e){switch(e.label){case 0:return this.props.buildingName&&this.props.infoEntity&&this.props.entityName?[4,this.fetchSupplyChains()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},t.prototype.AddSupplyChain=function(){return v(this,void 0,void 0,function(){var e,t,n,i;return E(this,function(r){switch(r.label){case 0:return e=this.state,t=e.supplyChainObject,n=e.isEdit,i=e.itemToDelete,t&&t.infoEntity?(Object(a.a)(!0),1!=n?[3,2]:[4,Object(s.c)(t,this.state.isEdit,i)]):[3,6];case 1:return r.sent(),[3,4];case 2:return[4,Object(s.c)(t,!1)];case 3:r.sent(),r.label=4;case 4:return[4,this.fetchSupplyChains()];case 5:r.sent(),Object(a.a)(!1),r.label=6;case 6:return[2]}})})},t.prototype.handleSupplyChainForm=function(e){this.setState({supplyChainObject:e})},t.prototype.fetchSupplyChains=function(){return v(this,void 0,void 0,function(){var e=this;return E(this,function(t){switch(t.label){case 0:return Object(a.a)(!0),[4,Object(s.b)(this.props.buildingName,this.props.infoEntity,this.props.entityName).then(function(t){e.setState({_list:t})}).catch(function(e){return e})];case 1:return t.sent(),Object(a.a)(!1),[2]}})})},t.prototype.deleteInfoEntityItem=function(){return v(this,void 0,void 0,function(){var e,t=this;return E(this,function(n){return e=this.state.itemToDelete,Object(s.a)(e).then(function(){Object(p.b)("Supply Chain Record Deleted Successfully."),t.fetchSupplyChains()}).catch(function(e){Object(p.a)("Error occured while deleting.")}),[2]})})},t.prototype.onEditInfoEntityItem=function(e){return v(this,void 0,void 0,function(){var t;return E(this,function(n){return(t=this.state.supplyChainObject).infoEntity=[],t.infoEntity.push({label:Object(r.g)(e.equipRdfsLabel),value:Object(r.g)(e.infoEntity)}),t.linkName=Object(r.g)(e.linkName),t.item=Object(r.g)(e.linkItem),t.rdfsLabel=Object(r.g)(e.rdfsLabel),t.vendor=Object(r.g)(e.vendor),t.link=Object(r.g)(e.link),this.setState({supplyChainObject:t,isEdit:!0,itemToDelete:e}),document.getElementById("btnAddSupplyChain").click(),[2]})})},t.prototype.onDeleteInfoEntityItem=function(e){return v(this,void 0,void 0,function(){return E(this,function(t){return this.setState({itemToDelete:e}),[2]})})},t.prototype.render=function(){var e=this,t=this.state,n=t._list,a=t.supplyChainObject,s=t.showLogs,p=this.props,y=p.instance,v=p.buildingName,E=p.entityName,g=p.infoEntity,N=JSON.parse(h.a.getItem("user")),C=Object(m.b)(N,"info-equip","write"),w=a&&a.rdfsLabel&&a.vendor&&a.infoEntity.length>0&&a.link&&!0;return s?i.createElement(f.a,{instance:y,buildingName:v,fromEntityList:!0,module:b.a.Assets,entityName:"SupplyChain",entityList:n.map(function(e){return{label:Object(r.g)(e.rdfsLabel),value:Object(r.g)(e.linkName)}}),onLogClose:function(){return e.setState({showLogs:!1})}}):i.createElement("div",{className:"content"},i.createElement("div",{className:"container-fluid"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-12"},i.createElement(u.a,{instance:this.props.instance,buildingName:v,tabName:g,itemName:E,showDevicesButton:"Point"==g,showComponentButton:"Equip"==g,showAuditTypes:"Equip"==g||"Space"==g,showBIMButtons:"Equip"==g||"Space"==g}),N&&"1"==N.role&&i.createElement("button",{className:"btn btn-md btn-primary btn-fill pull-right",style:{marginLeft:5},title:"Logs",onClick:function(){e.setState({showLogs:!0})}}," ",i.createElement("img",{src:"assets/img/Logs.png",style:{width:25,height:18}})),i.createElement("div",{className:"dropdown pull-right"}),C&&i.createElement("button",{type:"button",className:"btn btn-dark pull-right",onClick:function(){e.setState({isEdit:!1,supplyChainObject:{infoEntity:[{value:e.props.entityName,label:Object(d.z)(e.props.entityName)}],link:"",vendor:"",item:"",linkName:"",rdfsLabel:""}}),document.getElementById("btnAddSupplyChain").click()}},i.createElement("i",{className:"fa fa-plus"})," Add "))),i.createElement("br",null),i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-12"},i.createElement("div",{className:"card",id:"SpacesList"},i.createElement("div",{className:"header"},i.createElement("h4",{className:"title"},"Supply Chain")),i.createElement("div",{className:"content"},i.createElement("div",{className:"dataCard"},i.createElement("button",{type:"button",id:"btnAddSupplyChain",className:"btn btn-dark pull-right",style:{display:"none"},"data-toggle":"modal","data-target":"#supplychainFormDialog"}," ."),i.createElement(l.a,{id:"supplychainFormDialog",onSaveButtonClick:function(){e.AddSupplyChain()},saveButtonText:"Save",disableSaveButton:!w},i.createElement(c.a,{instance:this.props.instance,isEdit:this.state.isEdit,infoEntity:this.props.infoEntity,buildingName:this.props.buildingName,supplyChainObject:a,handleSupplyChain:this.handleSupplyChainForm})),i.createElement("div",{className:"row hidden-xs"},i.createElement("div",{className:"col-sm-12"},i.createElement("div",{className:"col-sm-3 headingText"},"Name"),i.createElement("div",{className:"col-sm-3 headingText"},"Product Inventory"),i.createElement("div",{className:"col-sm-3 headingText"},"Link"),i.createElement("div",{className:"col-sm-3 headingText"},"Vendor"))),n.map(function(t,n){return i.createElement(i.Fragment,null,i.createElement("div",{key:n,className:"row"},i.createElement("div",{className:"col-sm-12"},i.createElement("div",{className:"col-sm-3 trim-data",title:Object(r.g)(t.linkName)},i.createElement("span",{className:"hidden visible-xs-inline headingText"},"Name"),Object(r.g)(t.rdfsLabel)),i.createElement("div",{className:"col-sm-3 trim-data",title:Object(r.g)(t.linkItem)},i.createElement("a",{href:t.linkItem&&t.linkItem.value.indexOf("ttp")>0?t.linkItem&&t.linkItem.value:"http://"+(t.linkItem&&t.linkItem.value),target:"_blank"},i.createElement("span",{className:"hidden visible-xs-inline headingText"},"Product Inventory"),t.linkItem&&t.linkItem.value)),i.createElement("div",{className:"col-sm-3 trim-data",title:Object(r.g)(t.link)},i.createElement("a",{href:t.link&&t.link.value.indexOf("ttp")>0?t.link&&t.link.value:"http://"+(t.link&&t.link.value),target:"_blank"},i.createElement("span",{className:"hidden visible-xs-inline headingText"},"Link"),t.link&&t.link.value)),i.createElement("div",{className:"col-sm-3 trim-data",title:t.vendor&&t.vendor.value},i.createElement("span",{className:"hidden visible-xs-inline headingText"},"Vendor"),t.vendor&&t.vendor.value),C&&i.createElement("div",{className:"col-sm-12 col-xs-12 pull-right"},i.createElement("button",{className:"btn-xs btn-danger btn-fill pull-right",style:{margin:5},"data-toggle":"modal","data-target":"#ConfirmDeleteDialog",onClick:function(n){e.onDeleteInfoEntityItem(t)}},i.createElement("i",{className:"fa fa-trash"})),i.createElement("button",{className:"btn-xs btn-success btn-fill pull-right",style:{margin:5},onClick:function(){e.onEditInfoEntityItem(t)}},i.createElement("i",{className:"fa fa-edit"}))))),i.createElement(o.a,{instance:e.props.instance,id:"ConfirmDeleteDialog",showCancelButton:!0,cancelButtonText:"No",confirmButtonText:"Yes",confirmationText:"Are you sure to delete this item?",heading:"Confirm...",onConfirmButtonClick:function(){e.deleteInfoEntityItem()}}))}))))))))},t}(i.Component);t.default=g},2732:function(e,t,n){"use strict";var i=n(2),a=(n.n(i),n(122)),r=n(703),l=n(722),o=n(709),c=n(704),s=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),u=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function l(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?a(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(l,o)}c((i=i.apply(e,t||[])).next())})},m=this&&this.__generator||function(e,t){var n,i,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={supplyChainObject:n.props.supplyChainObject,_infoEntityItems:[],DropDownList:[],isEdit:n.props.isEdit},n.handleFormChange=n.handleFormChange.bind(n),n.handleMultiInfoEntityChange=n.handleMultiInfoEntityChange.bind(n),n._fetchItems=n._fetchItems.bind(n),n}return s(t,e),t.prototype.componentDidMount=function(){return u(this,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:return this.props.buildingName&&this.props.infoEntity?[4,this._fetchItems()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.setState({isEdit:e.isEdit,supplyChainObject:e.supplyChainObject})},t.prototype._fetchItems=function(){return u(this,void 0,void 0,function(){var e,t,n;return m(this,function(i){switch(i.label){case 0:if(Object(a.a)(!0),!(e=this.props.infoEntity))return[2];switch(t=[],e){case"Equip":return[3,1];case"Space":return[3,3];case"Zone":return[3,5];case"Point":return[3,7]}return[3,8];case 1:return[4,Object(c.l)(this.props.buildingName)];case 2:return t=i.sent(),[3,8];case 3:return[4,Object(o.b)(this.props.buildingName)];case 4:return t=i.sent(),[3,8];case 5:return[4,Object(l.e)(this.props.buildingName)];case 6:return t=i.sent(),[3,8];case 7:return[3,8];case 8:return n=t.map(function(e){return{value:e.ontology.value,label:e.rdfsLabel.value}}),this.setState({_infoEntityItems:t,DropDownList:n}),Object(a.a)(!1),[2]}})})},t.prototype.handleMultiInfoEntityChange=function(e){var t=this.state.supplyChainObject;t.infoEntity=e,this.setState({supplyChainObject:t}),this.props.handleSupplyChain(t)},t.prototype.handleFormChange=function(e){var t=this.state.supplyChainObject;t[""+e.target.name]=e.target.value,this.setState({supplyChainObject:t}),this.props.handleSupplyChain(t)},t.prototype.render=function(){var e=this,t=this.state,n=t.supplyChainObject,a=t.DropDownList,l=t.isEdit;return i.createElement("div",{className:"content"},i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-12 col-xs-12"},i.createElement("div",{className:"col-md-3"},i.createElement("label",{htmlFor:"infoEntity"},this.props.infoEntity,":")),i.createElement("div",{className:"col-md-9"},l&&n&&n.infoEntity&&i.createElement("input",{id:"item",name:"item",disabled:!0,className:"form-control",value:n.infoEntity[0].label}),!l&&i.createElement(r.a,{id:"infoEntity",name:"infoEntity",closeMenuOnSelect:!1,isMulti:!0,value:n.infoEntity,onChange:this.handleMultiInfoEntityChange,placeholder:"Select "+this.props.infoEntity,options:a})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-12 col-xs-12"},i.createElement("div",{className:"col-md-3"},i.createElement("label",{htmlFor:"item"},"Name:")),i.createElement("div",{className:"col-md-9"},i.createElement("input",{id:"item",name:"rdfsLabel",className:"form-control",value:n.rdfsLabel,onChange:function(t){return e.handleFormChange(t)}})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-12 col-xs-12"},i.createElement("div",{className:"col-md-3"},i.createElement("label",{htmlFor:"item"},"Product Inventory Link:")),i.createElement("div",{className:"col-md-9"},i.createElement("input",{id:"item",name:"item",className:"form-control",value:n.item,onChange:function(t){return e.handleFormChange(t)}})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-12 col-xs-12"},i.createElement("div",{className:"col-md-3"},i.createElement("label",{htmlFor:"link"},"Product Link:")),i.createElement("div",{className:"col-md-9"},i.createElement("input",{id:"link",name:"link",className:"form-control",value:n.link,onChange:function(t){return e.handleFormChange(t)}})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-12 col-xs-12"},i.createElement("div",{className:"col-md-3"},i.createElement("label",{htmlFor:"vendor"},"Vendor:")),i.createElement("div",{className:"col-md-9"},i.createElement("input",{id:"vendor",name:"vendor",className:"form-control",value:n.vendor,onChange:function(t){return e.handleFormChange(t)}})))))},t}(i.Component);t.a=p},2733:function(e,t,n){"use strict";t.c=function(e,t,n){return l(this,void 0,void 0,function(){return o(this,function(l){switch(l.label){case 0:return[4,Object(r.f)({model:e,isEdit:t,itemToUpdate:n},r.a.SUPPLY.SaveSupplyChain,i.b.SUPPLYCHAIN).then(function(){Object(a.b)("Supply Chain "+(t?"Updated":"Added")+" Successfully.")}).catch(function(e){Object(a.a)("Error occured while saving Supply Chain.")})];case 1:return[2,l.sent()]}})})},t.b=function(e,t,n){return l(this,void 0,void 0,function(){return o(this,function(a){switch(a.label){case 0:return[4,Object(r.e)({buildingName:e,infoEntity:t,entityName:n},r.a.SUPPLY.GetSupplyChains,i.b.SUPPLYCHAIN)];case 1:return[2,a.sent()]}})})},t.a=function(e){return l(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,Object(r.f)({itemToDelete:e},r.a.SUPPLY.DeleteSupplyChain,i.b.SUPPLYCHAIN)];case 1:return[2,t.sent()]}})})};var i=n(13),a=n(21),r=n(12),l=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function l(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?a(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(l,o)}c((i=i.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,i,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}}});