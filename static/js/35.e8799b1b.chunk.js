webpackJsonp([35],{1072:function(e,t,n){"use strict";t.g=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(l.f)(e,l.a.TICKETS.AddNewTicket,i.b.TICKET).then(function(){Object(a.b)("Ticket Added")}).catch(function(e){Object(a.a)("Error occured while saving Ticket.")})];case 1:return[2,t.sent()]}})})},t.h=function(e,t,n){return o(this,void 0,void 0,function(){return r(this,function(o){switch(o.label){case 0:return[4,Object(l.f)({buildingName:e,ticketType:t},l.a.TICKETS.AddNewTicketType,i.b.TICKET).then(function(){Object(a.b)("Ticket Type "+(n?"Updated":"Added"))}).catch(function(e){Object(a.a)("Error occured while saving Ticket Type.")})];case 1:return[2,o.sent()]}})})},t.b=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(l.f)({ticketTypeOntology:e},l.a.TICKETS.DeleteTicketType,i.b.TICKET).then(function(){Object(a.b)("Ticket Type Deleted")}).catch(function(e){Object(a.a)("Error occured while deleting Ticket Type.")})];case 1:return[2,t.sent()]}})})},t.f=function(){return o(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,Object(l.e)({},l.a.TICKETS.GetAllTickets,i.b.TICKET,!0)];case 1:return[2,e.sent()]}})})},t.d=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(l.e)({buildingName:e},l.a.TICKETS.GetTicketTypes,i.b.TICKET)];case 1:return[2,t.sent()]}})})},t.c=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(l.e)({ticketTypeOntology:e},l.a.TICKETS.GetTicketTypeUsingOntology,i.b.TICKET,!0)];case 1:return[2,t.sent()]}})})},t.e=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(l.e)({ticketOntology:e},l.a.TICKETS.GetTicketUsingOntology,i.b.TICKET,!0)];case 1:return[2,t.sent()]}})})},t.a=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(l.f)({ticketOntology:e},l.a.TICKETS.DeleteTicket,i.b.TICKET).then(function(){Object(a.b)("Ticket Deleted")}).catch(function(e){Object(a.a)("Error occured while deleting Ticket.")})];case 1:return[2,t.sent()]}})})};var a=n(21),i=n(13),l=n(12),o=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function r(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(o,r)}c((a=a.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,a,i,l,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function r(l){return function(r){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&l[0]?a.return:l[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;switch(a=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}}},3245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=n.n(a),l=n(701),o=n(21),r=n(832),c=n(1072),s=n(697),d=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},p=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function r(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){e.done?i(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(o,r)}c((a=a.apply(e,t||[])).next())})},m=this&&this.__generator||function(e,t){var n,a,i,l,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function r(l){return function(r){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&l[0]?a.return:l[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;switch(a=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}},f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={ticketType:Object(),selectedOptions:[],ticketTypes:[],workflows:[],workFlowList:[],workFlowTemplate:[],selectedWorkFlowTemplate:[],deleteOntology:""},n.ticketInputChangeHandler=n.ticketInputChangeHandler.bind(n),n.addNewTicketHandler=n.addNewTicketHandler.bind(n),n.addWorkFlowTemplateChangeHandler=n.addWorkFlowTemplateChangeHandler.bind(n),n.deleteTicketTypeHandler=n.deleteTicketTypeHandler.bind(n),n}return d(t,e),t.prototype.componentDidMount=function(){return p(this,void 0,void 0,function(){var e,t,n,a,i=this;return m(this,function(l){switch(l.label){case 0:return e=this.state,t=e.workFlowList,n=e.workFlowTemplate,[4,Object(r.c)(this.props.buildingName).then(function(e){if(e.length>0&&e[0].ontology){i.setState({workflows:e});for(var n=0;n<e.length;n++){var a=e[n];if("Case"==a.templateType){var l=Object();l.label=a.description,l.value=a.ontology,t.push(l)}}i.setState({workFlowList:t})}else i.setState({workflows:[]})})];case 1:return l.sent(),[4,Object(c.d)(this.props.buildingName)];case 2:return(a=l.sent()).map(function(e,a){if(void 0!=e.assignedWorkFlowTemplate&&"undefined"!=e.assignedWorkFlowTemplate){for(var l=[],o=e.assignedWorkFlowTemplate.split(","),r=0;r<o.length;r++){var c=t.find(function(e){return e.value===o[r]});l.push(c)}n[e.ontology]=l}i.setState({workFlowTemplate:n})}),this.setState({ticketTypes:a}),[2]}})})},t.prototype.ticketInputChangeHandler=function(e){return p(this,void 0,void 0,function(){var t;return m(this,function(n){return(t=this.state.ticketType).ticketType=e,this.setState({ticketType:t}),[2]})})},t.prototype.addNewTicketHandler=function(){return p(this,void 0,void 0,function(){var e,t,n,a,i,l,r,s,d,u,p;return m(this,function(m){switch(m.label){case 0:return e=this.state,t=e.ticketType,n=e.workFlowList,a=e.workFlowTemplate,t&&t.ticketType&&t.assignedWorkFlowTemplate?[4,Object(c.h)(this.props.buildingName,t)]:(Object(o.a)("Case Type Empty."),[2]);case 1:return m.sent(),[4,Object(c.d)(this.props.buildingName)];case 2:for(i=m.sent(),l=0;l<i.length;l++)if(void 0!=(r=i[l]).assignedWorkFlowTemplate&&"undefined"!=r.assignedWorkFlowTemplate){for(s=[],d=r.assignedWorkFlowTemplate.split(","),u=0;u<d.length;u++)p=n.find(function(e){return e.value===d[u]}),s.push(p);a[r.ontology]=s}return this.setState({ticketTypes:i,workFlowTemplate:a,ticketType:{assignedWorkFlowTemplate:"",ontology:"",ticketType:"",notifyManager:!1},selectedWorkFlowTemplate:[]}),[2]}})})},t.prototype.addWorkFlowTemplateChangeHandler=function(e,t){return p(this,void 0,void 0,function(){var n,a,i,l,o,r,c;return m(this,function(s){return t?(n=this.state,a=n.workFlowTemplate,i=n.selectedOptions,l=this.state.ticketTypes,i[t]=e,a[t]=e,l&&l.length>0&&l.find(function(e){return e.ontology==t})&&(l.find(function(e){return e.ontology==t}).assignedWorkFlowTemplate=e&&e.length>0?e.map(function(e){return e.value}).join(","):""),this.setState({selectedOptions:i,workFlowTemplate:a,ticketTypes:l})):(o=this.state,r=o.ticketType,c=o.selectedWorkFlowTemplate,r.assignedWorkFlowTemplate=e&&e.length>0?e.map(function(e){return e.value}).join(","):"",c=e,this.setState({ticketType:r,selectedWorkFlowTemplate:c})),[2]})})},t.prototype.saveTicketTypeHandler=function(e){return p(this,void 0,void 0,function(){var t,n,a;return m(this,function(i){switch(i.label){case 0:return n="",(t=this.state.workFlowTemplate[e])&&t.length>0?(t.map(function(e,t){n=n+e.value+","}),a=this.state.ticketTypes.filter(function(t){return t.ontology===e}),n=n.substring(0,n.length-1),a[0].assignedWorkFlowTemplate=n,a[0].notifyManager=!a[0].notifyManager,[4,Object(c.h)(this.props.buildingName,a[0],!0)]):(Object(o.a)("No WorkFlow Template Selected."),[2]);case 1:return i.sent(),[2]}})})},t.prototype.deleteTicketTypeHandler=function(e){return p(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return[4,Object(c.b)(e)];case 1:return t.sent(),this.setState({deleteOntology:""}),this.setState(function(t){return{ticketTypes:t.ticketTypes.filter(function(t){return t.ontology!==e})}}),[2]}})})},t.prototype.render=function(){var e=this,t={option:function(e,t){return u(u({},e),{display:"inline-flex"})}},n=this.state,a=n.selectedWorkFlowTemplate,o=n.ticketType,r=n.workFlowList,c=n.workFlowTemplate,d=n.ticketTypes,p=!(o&&o.ticketType&&o.assignedWorkFlowTemplate);return i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"container-fluid p-0"},i.a.createElement("div",{className:"container-fluid mb-4"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3 col-sm-5 col-xs-5"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"caseType"},"Case Type ",i.a.createElement("span",null,"\xa0")),i.a.createElement("input",{type:"text",id:"caseType",className:"form-control mx-sm-3 "+(o.ticketType?"":"addFieldValidate"),"aria-describedby":"passwordHelpInline",value:o.ticketType,onChange:function(t){e.ticketInputChangeHandler(t.target.value)}}))),i.a.createElement("div",{className:"col-md-3 col-sm-5 col-xs-5"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"wfTemplate"},"Workflow Template ",i.a.createElement("span",null,"\xa0")),r&&r.length>0?i.a.createElement(l.a,{id:"wfTemplate",isMulti:!0,onChange:function(t){e.addWorkFlowTemplateChangeHandler(t)},placeholder:"Add WorkFlow Template",className:o.assignedWorkFlowTemplate?"":"addFieldValidate",options:r,value:a}):i.a.createElement(l.a,{id:"wfTemplate",className:o.assignedWorkFlowTemplate?"":"addFieldValidate",isMulti:!0,closeMenuOnSelect:!1,onChange:function(t){e.addWorkFlowTemplateChangeHandler(t)},placeholder:"Add WorkFlow Template",options:[],value:a}))),i.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-3"},i.a.createElement("div",{className:"pull-right mx-1 form-inline"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"inputPassword66"},"Notify Manager ",i.a.createElement("span",null,"\xa0")),i.a.createElement("input",{type:"checkbox",id:"inputPassword66",style:{margin:"0px 0px 0px 8px",width:"17px"},className:"form-control mx-sm-3","aria-describedby":"passwordHelpInline",defaultChecked:o.notifyManager,onChange:function(){o.notifyManager=!o.notifyManager,e.setState({ticketType:o})}})))),i.a.createElement("div",{className:"col-md-2 col-sm-4 col-xs-4 "},i.a.createElement("button",{disabled:p,type:"button",className:"btn btn-dark pull-left mx-1",onClick:function(){e.addNewTicketHandler()}},i.a.createElement("i",{className:"fa fa-plus"}),i.a.createElement("span",null,"Save Case Type ")))))),i.a.createElement("div",{className:"card small mt-4"},i.a.createElement("div",{className:"container-fluid p-2"},i.a.createElement("div",{className:"content p-0 mt-0"},i.a.createElement("div",{className:"row no-margin no-padding hidden-sm hidden-xs"},i.a.createElement("div",{className:"col-md-12 p-1"},i.a.createElement("div",{className:"col-md-12 no-padding"},i.a.createElement("div",{style:{display:"block"},className:"col-md-1 px-0 py-2 trim-data grid-header text-center"},i.a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort text-center"}),"No."),i.a.createElement("div",{style:{display:"block"},className:"col-md-3 px-0 py-2 trim-data grid-header text-center"},i.a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort text-center"}),"Case Type"),i.a.createElement("div",{style:{display:"block"},className:"col-md-4 px-0 py-2 trim-data grid-header text-center"},i.a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort text-center"}),"Work Flow Template"),i.a.createElement("div",{style:{display:"block"},className:"col-md-1 px-0 py-2 trim-data grid-header text-center"},i.a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort text-center"}),"Notify Manager"),i.a.createElement("div",{style:{display:"block"},className:"col-md-3 px-0 py-2 trim-data grid-header text-center"},i.a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort text-center"}),"Actions")))),i.a.createElement("div",{className:"dataCard px-1"},d.map(function(n,a){var o=!(n&&n.ticketType&&n.assignedWorkFlowTemplate);return i.a.createElement("div",{key:a,className:"card no-margin no-padding"},i.a.createElement("div",{className:"container-fluid  no-padding"},i.a.createElement("div",{className:"row no-margin no-padding"},i.a.createElement("div",{className:"col-md-12 no-padding"},i.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12  no-padding"},i.a.createElement("div",{className:"col-md-1 col-sm-12 col-xs-12 padding-5 no-margin trim-data text-center"},i.a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"No."),a+1),i.a.createElement("div",{className:"col-md-3 col-sm-12 col-xs-12 padding-5 no-margin trim-data text-center"},i.a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Ticket Type"),n.ticketType),i.a.createElement("div",{className:"col-md-4 col-sm-12 col-xs-12 padding-5 no-margin text-center"},i.a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Work Flow Template"),i.a.createElement("div",null,i.a.createElement(l.a,{isMulti:!0,styles:t,onChange:function(t){e.addWorkFlowTemplateChangeHandler(t,n.ontology)},placeholder:"Add WorkFlow Template",options:r,value:c[n.ontology]}))),i.a.createElement("div",{className:"col-md-1 col-sm-12 col-xs-12 padding-5 no-margin trim-data text-center"},i.a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Notify Manager"),i.a.createElement("input",{type:"checkbox",defaultChecked:n.notifyManager})),i.a.createElement("div",{className:"col-md-3 col-sm-12 col-xs-12 padding-5 no-margin trim-data text-center"},i.a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Actions"),i.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",disabled:o,onClick:function(){e.saveTicketTypeHandler(n.ontology)}},i.a.createElement("i",{className:"fa fa-save"}),i.a.createElement("span",null,"Save ")),i.a.createElement("button",{type:"button",className:"btn btn-danger mx-1",onClick:function(){e.setState({deleteOntology:n.ontology}),document.getElementById("deleteConfirmDialogue").click()}},i.a.createElement("i",{className:"fa fa-trash"}),i.a.createElement("span",null,"Delete "))))))))}),i.a.createElement("button",{type:"button",id:"deleteConfirmDialogue",className:"btn btn-dark pull-right",style:{display:"none"},"data-toggle":"modal","data-target":"#deleteTicketTypeConfirmDialog"}," ."),i.a.createElement(s.a,{id:"deleteTicketTypeConfirmDialog",heading:"Delete Ticket Type",saveButtonText:"Delete",cancelButtonText:"Cancel",disableSaveButton:!1,showCancelButton:!0,showSaveButton:!0,isEditForm:!1,onSaveButtonClick:function(){e.deleteTicketTypeHandler(e.state.deleteOntology)},onCancelButtonClick:function(){e.setState({deleteOntology:""})}},i.a.createElement("p",{className:"headingText"},"Are you sure you want to Delete?"))))))))},t}(i.a.Component);t.default=f}});