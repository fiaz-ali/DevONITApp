webpackJsonp([28],{1185:function(e,t,n){"use strict";var i=n(2),r=(n.n(i),this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),o=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function c(e){try{s(i.next(e))}catch(e){o(e)}}function a(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){e.done?r(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(c,a)}s((i=i.apply(e,t||[])).next())})},c=this&&this.__generator||function(e,t){var n,i,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},a=function(e){function t(t){var n=e.call(this,t)||this;return n.state={items:[],dropDownList:n.props.dropDownList},n.addItem=n.addItem.bind(n),n.removeItem=n.removeItem.bind(n),n.handleItemChange=n.handleItemChange.bind(n),n.handleManufacturerChange=n.handleManufacturerChange.bind(n),n.handleModelChange=n.handleModelChange.bind(n),n}return r(t,e),t.prototype.componentDidMount=function(){return o(this,void 0,void 0,function(){return c(this,function(e){return this.props.items&&this.setState({items:this.props.items}),[2]})})},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.setState({dropDownList:e.dropDownList})},t.prototype.addItem=function(){var e={ecmName:"",selectedItem:"",manufacturer:"",model:"",type:this.props.typePredicate},t=this.state.items;t?t.push(e):t=[e],this.setState({items:t}),this.props.handleAdder(t)},t.prototype.removeItem=function(e){var t=this.state.items;t.splice(e,1),this.setState({items:t}),this.props.handleAdder(t)},t.prototype.handleItemChange=function(e,t){var n=this.state.items;n[e].selectedItem=t,this.setState({items:n}),this.props.handleAdder(n)},t.prototype.handleManufacturerChange=function(e,t){var n=this.state.items;n[e].manufacturer=t,this.setState({items:n}),this.props.handleAdder(n)},t.prototype.handleModelChange=function(e,t){var n=this.state.items;n[e].model=t,this.setState({items:n}),this.props.handleAdder(n)},t.prototype.render=function(){var e=this,t=this.props,n=t.isView,r=t.isFromReport,o=this.state,c=o.items,a=o.dropDownList,s=c&&!1===c.map(function(e){return""!==e.selectedItem}).find(function(e){return!1===e}),u=c&&!s||!c,l=this.props.hideAddButton;return i.createElement(i.Fragment,null,c&&c.map(function(t,o){return r&&!t.selectedItem?i.createElement("div",null):i.createElement("div",{key:o,className:"row"},i.createElement("br",null),i.createElement("div",{className:"col-md-4"},i.createElement("div",{className:"form-group"},i.createElement("label",{htmlFor:"repcmp"},e.props.dropDownLabel),i.createElement("select",{className:"form-control",id:"repcmp",disabled:n,value:t.selectedItem,onChange:function(t){return e.handleItemChange(o,t.target.value)}},i.createElement("option",{value:"",key:-2},"Select Item"),a&&a.map(function(e,t){return i.createElement("option",{key:t,value:e},e)})))),i.createElement("div",{className:"col-md-4"},i.createElement("div",{className:"form-group"},i.createElement("label",{htmlFor:"man"},"Manufacturer"),i.createElement("input",{type:"text ",disabled:n,id:"man",className:"form-control",value:t.manufacturer,onChange:function(t){return e.handleManufacturerChange(o,t.target.value)}}))),i.createElement("div",{className:"col-md-3"},i.createElement("div",{className:"form-group"},i.createElement("label",{htmlFor:"model"},"Model"),i.createElement("input",{type:"text ",disabled:n,id:"model",className:"form-control",value:t.model,onChange:function(t){return e.handleModelChange(o,t.target.value)}}))),i.createElement("div",{className:"col-md-1 padding-10"},i.createElement("br",null),o>0&&!r&&i.createElement("button",{type:"button",className:"btn btn-danger btn-xs",title:"Remove Item",onClick:function(){return e.removeItem(o)}},i.createElement("i",{className:"fa fa-remove"}))))}),!l&&i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-1"},i.createElement("label",null,"Add:")),i.createElement("div",{className:"col-md-11 col-xs-11"},!r&&i.createElement("button",{type:"button",disabled:!u,className:"btn btn-dark btn-fill btn-sm",title:"Add Item",onClick:this.addItem},i.createElement("i",{className:"fa fa-plus"})))))},t}(i.Component);t.a=a},2526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r,o=n(2),c=(n.n(o),n(733)),a=n(1185),s=n(672),u=n(12),l=n(1219),m=n(117),h=n(678),d=n(710),f=n(720),p=n(757),b=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),v=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function c(e){try{s(i.next(e))}catch(e){o(e)}}function a(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){e.done?r(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(c,a)}s((i=i.apply(e,t||[])).next())})},E=this&&this.__generator||function(e,t){var n,i,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},y=["Fan","Compressor","Motor","Pump","Ballast","Lamp","Other"],g=["VFD","Dimmer","Occ. Sensor","Controls","Other"],I=function(e){function t(t){var n=e.call(this,t)||this;return n.state={ecm:{ecmItems:[],item:n.props.entityName,notes:"",proposeSchedule:[]},replacementEquipmentList:[],isCompleted:!1,inspectionOntologies:[],inspectionOntology:"",SolutionList:[]},i=n,n.handleECMItems=n.handleECMItems.bind(n),n.handleScheduler=n.handleScheduler.bind(n),n._saveSchedulerInformation=n._saveSchedulerInformation.bind(n),n._saveECM=n._saveECM.bind(n),n.getEquipmentType=n.getEquipmentType.bind(n),n.fetchECM=n.fetchECM.bind(n),n.fetchECM_Notes=n.fetchECM_Notes.bind(n),n.fetchInspection_IsComplete=n.fetchInspection_IsComplete.bind(n),n.unComplete=n.unComplete.bind(n),n._getSolutionList=n._getSolutionList.bind(n),n}return b(t,e),t.prototype.componentWillUnmount=function(){return v(this,void 0,void 0,function(){return E(this,function(e){return clearInterval(r),[2]})})},t.prototype.componentDidMount=function(){return v(this,void 0,void 0,function(){var e,t,n,i=this;return E(this,function(o){switch(o.label){case 0:return Object(m.a)(!0),r=setInterval(function(){var e=Object(p.a)("inspectionOntology");i.state.inspectionOntology!=e&&i.setState({inspectionOntology:e},function(){return v(i,void 0,void 0,function(){return E(this,function(e){return this._getSolutionList(),[2]})})})},1e3),"Equip"==this.props.infoEntity&&this.getEquipmentType(),this.props.infoEntity&&this.props.entityName?(e=this.state.ecm,t=e,[4,this.fetchECM_Notes()]):[3,3];case 1:return t.notes=o.sent(),[4,this.fetchInspection_IsComplete()];case 2:n=o.sent(),this.setState({ecm:e,isCompleted:n},function(){return v(i,void 0,void 0,function(){return E(this,function(e){switch(e.label){case 0:return[4,this.fetchECM()];case 1:return e.sent(),[2]}})})}),o.label=3;case 3:return Object(m.a)(!1),[2]}})})},t.prototype._getSolutionList=function(){return v(this,void 0,void 0,function(){var e,t=this;return E(this,function(n){switch(n.label){case 0:return(e=this.state.inspectionOntology)?[4,Object(f.u)(e).then(function(e){t.setState({SolutionList:e})})]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},t.prototype.fetchECM_Notes=function(){return v(this,void 0,void 0,function(){var e,t,n,i;return E(this,function(r){switch(r.label){case 0:return e=this.props,t=e.buildingName,n=e.entityName,i=e.infoEntity,[4,Object(l.c)(t,n,i).then(function(e){return e?Object(u.g)(e):""})];case 1:return[2,r.sent()]}})})},t.prototype.fetchInspection_IsComplete=function(){return v(this,void 0,void 0,function(){var e,t,n,i,r;return E(this,function(o){switch(o.label){case 0:return e=this.props.entityName,[4,Object(d.h)(e,"ECM")];case 1:return t=o.sent(),n=this.state,i=n.isCompleted,r=n.inspectionOntologies,t&&Object(u.g)(t.inspectionOntology).length>0?(i="true"==Object(u.g)(t.IsCompleted),r=Object(u.g)(t.inspectionOntology).split(","),this.setState({isCompleted:i,inspectionOntologies:r}),[2,i]):[2,!1]}})})},t.prototype.fetchECM=function(){return v(this,void 0,void 0,function(){var e,t,n,r,o,c=this;return E(this,function(a){switch(a.label){case 0:return e=this.props,t=e.buildingName,n=e.entityName,r=e.infoEntity,o=this.state.inspectionOntology,[4,Object(l.b)(t,n,r,o).then(function(e){var t=c.state.ecm,n=e.filter(function(e){return Object(u.g)(e.inspectionOntology)==o});if(n&&n.map(function(e){var n={ecmName:Object(u.g)(e.ecmName),manufacturer:Object(u.g)(e.manufacturer),model:Object(u.g)(e.model),selectedItem:Object(u.g)(e.selectedItem),type:Object(u.g)(e.type),inspectionOntology:Object(u.g)(e.inspectionOntology)};t.ecmItems.push(n)}),t.ecmItems&&!(t.ecmItems.length>0)){var r={ecmName:"",selectedItem:"",manufacturer:"",model:"",type:"hasECMRComp",inspectionOntology:""};t.ecmItems.push(r),r={ecmName:"",selectedItem:"",manufacturer:"",model:"",type:"hasECMNComp",inspectionOntology:""},t.ecmItems.push(r),r={ecmName:"",selectedItem:"",manufacturer:"",model:"",type:"hasECMREquip",inspectionOntology:""},t.ecmItems.push(r)}i.setState({ecm:t})})];case 1:return a.sent(),[2]}})})},t.prototype.getEquipmentType=function(){return v(this,void 0,void 0,function(){var e,t,n,r=this;return E(this,function(o){return e=this.props,t=e.buildingName,n=e.entityName,Object(s.v)(t,n).then(function(e){return v(r,void 0,void 0,function(){return E(this,function(t){return Object(s.u)(Object(u.g)(e[0]),2).then(function(e){var t=e.map(function(e){return Object(u.g)(e)});i.setState({replacementEquipmentList:t})}),[2]})})}),[2]})})},t.prototype.handleECMItems=function(e){var t=this.state.ecm,n=[];e&&e.length>0&&(n=t.ecmItems.filter(function(t){return t.type!=e[0].type})).push.apply(n,e),t.ecmItems=n,this.setState({ecm:t})},t.prototype.handleScheduler=function(e){var t=this.state.ecm;t.proposeSchedule=e,this.setState({ecm:t})},t.prototype._saveSchedulerInformation=function(){},t.prototype.handleNotesChange=function(e){var t=this.state.ecm;t.notes=e,this.setState({ecm:t})},t.prototype._saveECM=function(e){return v(this,void 0,void 0,function(){var t,n,i,r,o,c,a,s,u,h;return E(this,function(f){switch(f.label){case 0:return Object(m.a)(!0),t=this.state,n=t.ecm,i=t.inspectionOntologies,r=t.SolutionList,o=t.inspectionOntology,c=this.props,a=c.buildingName,s=c.infoEntity,u=c.instance,h=!1,n.ecmItems&&n.ecmItems.length>0&&n.ecmItems[0].ecmName&&(h=!0),o?(!!i.find(function(e){return e==o})||i.push(o),[4,Object(l.d)(a,s,n,h,o,r,e)]):[3,3];case 1:return f.sent(),e?[4,Object(d.c)(n.item,i,"ECM")]:[3,3];case 2:switch(f.sent(),s){case"Equip":window.location.hash=u+"/"+a+"/Assets";break;case"Space":window.location.hash=u+"/"+a+"/Space";break;default:return[2,!1]}f.label=3;case 3:return setTimeout(function(){Object(m.a)(!1)},1e3),[2]}})})},t.prototype.unComplete=function(){return v(this,void 0,void 0,function(){var e,t,n,i,r;return E(this,function(o){switch(o.label){case 0:if(e=this.state,t=e.ecm,n=e.inspectionOntologies,i=e.inspectionOntology,!(n&&n.length>0))return[3,2];if(!i)return[3,2];for(r=0;r<n.length;r++)n[r]==i&&n.splice(r,1);return[4,Object(d.k)(t.item,n,"ECM")];case 1:o.sent(),o.label=2;case 2:return this.setState({isCompleted:!1}),[2]}})})},t.prototype.render=function(){var e=this,t=this.props,n=t.buildingName,i=t.instance,r=t.entityName,s=t.infoEntity,u=this.state,l=u.ecm,m=u.replacementEquipmentList,d=u.isCompleted,f=u.inspectionOntologies,p=u.inspectionOntology,b=l.ecmItems.filter(function(e){return"hasECMRComp"==e.type}),v=l.ecmItems.filter(function(e){return"hasECMNComp"==e.type}),E=l.ecmItems.filter(function(e){return"hasECMREquip"==e.type}),I=f.find(function(e){return e==p}),O=!!(I&&I.length>0);return o.createElement("div",{className:"content"},o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-12"},o.createElement(c.a,{instance:this.props.instance,buildingName:n,tabName:s,showComponentButton:"Equip"==s,itemName:r,showAuditTypes:!0,showBIMButtons:!0}))),o.createElement("br",null),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-12 form-group"},o.createElement("div",{className:"pull-right"},o.createElement(h.a,{ElementID:"ecm",data:this.state.ecm,filename:"ecm"})))),o.createElement("div",{className:"card"},o.createElement("div",{className:"container-fluid"},o.createElement("h4",{style:{margin:5}},"Energy Conservation Measures")),o.createElement("div",{className:"container-fluid padding-10",id:"ecm"},o.createElement("div",{className:"col-md-12"},b&&b.length>0&&o.createElement(a.a,{instance:i,buildingName:n,dropDownLabel:"Replacement Component",dropDownList:y,typePredicate:"hasECMRComp",items:b,handleAdder:this.handleECMItems})),o.createElement("div",{className:"col-md-12"},v&&v.length>0&&o.createElement(a.a,{instance:i,buildingName:n,dropDownLabel:"New Component",dropDownList:g,typePredicate:"hasECMNComp",items:v,handleAdder:this.handleECMItems})),o.createElement("div",{className:"col-md-12"},E&&E.length>0&&o.createElement(a.a,{instance:i,buildingName:n,dropDownLabel:"Replacement Equipment",dropDownList:m,typePredicate:"hasECMREquip",items:E,handleAdder:this.handleECMItems,hideAddButton:!0})),o.createElement("div",{className:"col-md-12"},o.createElement("div",{className:"form-group"},o.createElement("div",{className:"col-md-2"},"Notes"),o.createElement("div",{className:"col-md-10"},o.createElement("textarea",{className:"form-control",value:l.notes,rows:3,onChange:function(t){return e.handleNotesChange(t.target.value)}})))),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-12 inline-block"},o.createElement("button",{className:"btn btn-primary btn-fill",type:"button",onClick:function(){e._saveECM(!1)}},o.createElement("i",{className:"fa fa-save"})," Save"),(d||!d)&&o.createElement(o.Fragment,null,!O&&o.createElement("button",{className:"btn btn-primary btn-fill",type:"button",onClick:function(){e._saveECM(!0)}},o.createElement("i",{className:"fa fa-save"})," Save & Complete")," "),d&&O&&o.createElement("button",{className:"btn btn-fill btn-dark text-inspection-completed padding-10 margin-5",type:"button",onClick:function(){e.unComplete()}},o.createElement("b",null,"Remove Inspection Completion"))))))))},t}(o.Component);t.default=I},720:function(e,t,n){"use strict";t.g=function(e,t,n,s){return c(this,void 0,void 0,function(){return a(this,function(c){switch(c.label){case 0:return[4,Object(i.f)({model:e,buildingData:t,equipment:n,lightingEquipment:s},i.a.LIFE.SaveProject,o.b.LIFE).then(function(){Object(r.b)("Project saved Successfully.")}).catch(function(e){Object(r.a)("Error occured while saving Project.")})];case 1:return[2,c.sent()]}})})},t.r=function(e,t){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,Object(i.e)({buildingName:e,instance:t},i.a.LIFE.GetProjectList,o.b.LIFE)];case 1:return[2,n.sent()]}})})},t.m=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({_id:e},i.a.LIFE.DeleteProject,o.b.LIFE).then(function(){Object(r.b)(" Deleted Successfully.")}).catch(function(e){Object(r.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.h=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({model:e},i.a.LIFE.SaveProjectSolution,o.b.LIFE).then(function(){Object(r.b)("Solution saved Successfully.")}).catch(function(e){Object(r.a)("Error occured while saving Solution.")})];case 1:return[2,t.sent()]}})})},t.o=function(e,t){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,Object(i.e)({spreadSheetId:e,fileType:t},i.a.LIFE.ExportSheet,o.b.LIFE)];case 1:return[2,n.sent()]}})})},t.t=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({projectId:e},i.a.LIFE.GetSolutionList,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.u=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({inspectionOntology:e},i.a.LIFE.GetSolutionListForInspection,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.s=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({solutionId:e},i.a.LIFE.GetSolution,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.n=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({_id:e},i.a.LIFE.DeleteSolution,o.b.LIFE).then(function(){Object(r.b)(" Deleted Successfully.")}).catch(function(e){Object(r.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.v=function(e,t){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,Object(i.f)({manageFile:e,fileData:t},i.a.LIFE.ManageFile,o.b.LIFE).then(function(){Object(r.b)("Upload Successfully.")}).catch(function(e){Object(r.a)("Error occured while saving Upload.")})];case 1:return[2,n.sent()]}})})},t.e=function(e,t){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,Object(i.f)({communityFile:e,fileData:t},i.a.LIFE.SaveCommunityFile,o.b.LIFE)];case 1:return[2,n.sent()]}})})},t.p=function(e,t){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,Object(i.e)({buildingName:e,instance:t},i.a.LIFE.GetManageFile,o.b.LIFE)];case 1:return[2,n.sent()]}})})},t.b=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({instance:e},i.a.LIFE.GetCommunityFile,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.l=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({ManageFile:e},i.a.LIFE.DeleteManageFile,o.b.LIFE).then(function(){Object(r.b)(" Deleted Successfully.")}).catch(function(e){Object(r.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.a=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({communityFile:e},i.a.LIFE.DeleteCommunityFile,o.b.LIFE).then(function(){Object(r.b)(" Deleted Successfully.")}).catch(function(e){Object(r.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.q=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({projectId:e},i.a.LIFE.GetProject,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.f=function(e,t,n){return c(this,void 0,void 0,function(){return a(this,function(r){switch(r.label){case 0:return[4,Object(i.f)({email:e,buildingName:t,instance:n},i.a.LIFE.SaveEmailAndDrive,o.b.LIFE)];case 1:return[2,r.sent()]}})})},t.j=function(e,t){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,Object(i.f)({email:e,instance:t},i.a.LIFE.ShareCommunityFolder,o.b.LIFE).then(function(e){e.result?Object(r.b)("Successfully Share."):Object(r.a)("The user Email is not valid.")}).catch(function(e){Object(r.a)("Something Went Wrong!")})];case 1:return[2,n.sent()]}})})},t.k=function(e,t,n){return c(this,void 0,void 0,function(){return a(this,function(c){switch(c.label){case 0:return[4,Object(i.f)({email:e,buildingName:t,instance:n},i.a.LIFE.ShareMMTemplateFolder,o.b.LIFE).then(function(e){e.result?Object(r.b)("Successfully Share."):Object(r.a)("The user Email is not valid.")}).catch(function(e){Object(r.a)("Something Went Wrong!")})];case 1:return[2,c.sent()]}})})},t.i=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({templatePurpose:e},i.a.LIFE.SaveTemplatePurpose,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.c=function(e){return c(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({instance:e},i.a.LIFE.GetTemplatePurpose,o.b.LIFE)];case 1:return[2,t.sent()]}})})},t.d=function(e){var t=e.getFullYear().toString().slice(2,4),n=(e.getMonth()+1).toString().padStart(2,0),i=e.getDate().toString().padStart(2,0),r=e.getHours().toString().padStart(2,0),o=e.getMinutes().toString().padStart(2,0),c=e.getSeconds().toString().padStart(2,0);return t+n+i+r+o+c};var i=n(11),r=n(21),o=n(13),c=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function c(e){try{s(i.next(e))}catch(e){o(e)}}function a(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){e.done?r(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(c,a)}s((i=i.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,i,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}}});