webpackJsonp([33],{1019:function(e,t,n){"use strict";t.g=function(e){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,Object(c.f)(e,c.a.TICKETS.AddNewTicket,i.b.TICKET).then(function(){Object(a.b)("Ticket Added")}).catch(function(e){Object(a.a)("Error occured while saving Ticket.")})];case 1:return[2,t.sent()]}})})},t.h=function(e,t,n){return o(this,void 0,void 0,function(){return l(this,function(o){switch(o.label){case 0:return[4,Object(c.f)({buildingName:e,ticketType:t},c.a.TICKETS.AddNewTicketType,i.b.TICKET).then(function(){Object(a.b)("Ticket Type "+(n?"Updated":"Added"))}).catch(function(e){Object(a.a)("Error occured while saving Ticket Type.")})];case 1:return[2,o.sent()]}})})},t.b=function(e){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,Object(c.f)({ticketTypeOntology:e},c.a.TICKETS.DeleteTicketType,i.b.TICKET).then(function(){Object(a.b)("Ticket Type Deleted")}).catch(function(e){Object(a.a)("Error occured while deleting Ticket Type.")})];case 1:return[2,t.sent()]}})})},t.f=function(){return o(this,void 0,void 0,function(){return l(this,function(e){switch(e.label){case 0:return[4,Object(c.e)({},c.a.TICKETS.GetAllTickets,i.b.TICKET,!0)];case 1:return[2,e.sent()]}})})},t.d=function(e){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,Object(c.e)({buildingName:e},c.a.TICKETS.GetTicketTypes,i.b.TICKET)];case 1:return[2,t.sent()]}})})},t.c=function(e){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,Object(c.e)({ticketTypeOntology:e},c.a.TICKETS.GetTicketTypeUsingOntology,i.b.TICKET,!0)];case 1:return[2,t.sent()]}})})},t.e=function(e){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,Object(c.e)({ticketOntology:e},c.a.TICKETS.GetTicketUsingOntology,i.b.TICKET,!0)];case 1:return[2,t.sent()]}})})},t.a=function(e){return o(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,Object(c.f)({ticketOntology:e},c.a.TICKETS.DeleteTicket,i.b.TICKET).then(function(){Object(a.b)("Ticket Deleted")}).catch(function(e){Object(a.a)("Error occured while deleting Ticket.")})];case 1:return[2,t.sent()]}})})};var a=n(21),i=n(13),c=n(12),o=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,c){function o(e){try{s(a.next(e))}catch(e){c(e)}}function l(e){try{s(a.throw(e))}catch(e){c(e)}}function s(e){e.done?i(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(o,l)}s((a=a.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){var n,a,i,c,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function l(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&c[0]?a.return:c[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,c[1])).done)return i;switch(a=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,a=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],a=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}},3050:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=(n.n(a),n(118)),c=n(697),o=n(11),l=n(691),s=n(8),r=n(696),d=n(1019),m=n(682),u=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,c){function o(e){try{s(a.next(e))}catch(e){c(e)}}function l(e){try{s(a.throw(e))}catch(e){c(e)}}function s(e){e.done?i(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(o,l)}s((a=a.apply(e,t||[])).next())})},h=this&&this.__generator||function(e,t){var n,a,i,c,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function l(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&c[0]?a.return:c[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,c[1])).done)return i;switch(a=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,a=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],a=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={ticketData:[],_buildings:[],allTickets:[],selectedBuilding:t.buildingName,search:"",showLogs:!1},n.setupData=n.setupData.bind(n),n}return u(t,e),t.prototype.componentDidMount=function(){return f(this,void 0,void 0,function(){return h(this,function(e){return this.props.buildingName&&this.setupData(),[2]})})},t.prototype.setupData=function(){return f(this,void 0,void 0,function(){var e,t,n,a=this;return h(this,function(i){switch(i.label){case 0:return[4,Object(d.f)()];case 1:return e=i.sent(),[4,Object(l.d)()];case 2:return t=i.sent(),n=e.filter(function(e){return e.buildingOntology==a.state.selectedBuilding}),this.setState({ticketData:n,_buildings:t,allTickets:e}),[2]}})})},t.prototype.search_filter=function(e){this.setState({search:e.target.value})},t.prototype.handleBuildingChangeHandler=function(e){var t=this.state.allTickets.filter(function(t){return t.buildingOntology==e});this.setState({ticketData:t,selectedBuilding:e})},t.prototype.render=function(){var e=this,t=this.props,n=t.instance,l=t.buildingName,u=this.state,p=u._buildings,g=u.selectedBuilding,b=u.allTickets,v=u.search,y=u.showLogs,E=b.filter(function(e){return e.ontology.toLowerCase().includes(v.toLowerCase().trim())}),T=JSON.parse(s.a.getItem("user"));return y?a.createElement(r.a,{instance:n,buildingName:l,fromEntityList:!0,module:c.a.Cases,entityName:"Case",entityList:b.map(function(e){return{label:Object(o.g)(e.ticketIssue),value:Object(o.g)(e.ontology)}}),onLogClose:function(){return e.setState({showLogs:!1})}}):a.createElement(a.Fragment,null," ",a.createElement("div",{className:"content"},a.createElement("div",{className:"container-fluid p-0"},a.createElement("div",{className:"container-fluid "},a.createElement("div",{className:"content"},a.createElement("div",{className:"row padding-10"},a.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 "},a.createElement("button",{type:"button",className:"btn btn-dark",style:{marginLeft:"3%"},onClick:function(){window.location.hash=n+"/"+l+"/TicketForm"}},a.createElement("i",{className:"fa fa-plus"}),a.createElement("span",null," Case"))),a.createElement("div",{className:"col-md-10 col-sm-12 col-xs-12"},a.createElement("div",{className:"col-md-1 col-xs-12 px-0 ml-auto"},a.createElement("h6",{style:{marginTop:"15px"}},"Filter:")),a.createElement("div",{className:"col-md-4 col-xs-12"},a.createElement("input",{style:{outline:"green"},className:"form-control pull-right",onChange:function(t){e.search_filter(t)},id:"soultionfilter",type:"text",placeholder:"Search.."})),a.createElement("div",{className:"col-md-4 col-sm-12 col-xs-12 form-group"},a.createElement("select",{name:"building",id:"building",className:"form-control",value:g,style:{marginRight:5},onChange:function(t){e.handleBuildingChangeHandler(t.target.value)}},a.createElement("option",{value:""},"Select Building "),p&&p.length>0&&p.map(function(e,t){return a.createElement("option",{key:t,value:Object(o.g)(e.building)},Object(o.g)(e.rdfsLabel)," ")}))),a.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 form-group"},a.createElement("button",{type:"button",className:"btn btn-dark pull-left mx-1",onClick:function(){window.location.hash=n+"/"+l+"/AddTicketType"}},a.createElement("i",{className:"fa fa-plus"}),a.createElement("span",null,"Case Type "))),a.createElement("div",{className:"col-md-1 col-sm-12 col-xs-12 form-group"},T&&"1"==T.role&&a.createElement("button",{className:"btn btn-md btn-primary btn-fill pull-right",style:{marginLeft:5},title:"Logs",onClick:function(){e.setState({showLogs:!0})}}," ",a.createElement("img",{src:"assets/img/Logs.png",style:{width:25,height:18}}))))))),a.createElement("div",{className:"card small"},a.createElement("div",{className:"container-fluid p-2"},a.createElement("div",{className:"content p-0 mt-0"},a.createElement("div",{className:"col-md-5 no-padding"},a.createElement("div",{className:"row no-margin no-padding hidden-sm hidden-xs"},a.createElement("div",{className:"col-md-3 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Case No."),a.createElement("div",{className:"col-md-9 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Description"))),a.createElement("div",{className:"col-md-7 no-padding"},a.createElement("div",{className:"row no-margin no-padding hidden-sm hidden-xs"},a.createElement("div",{className:"col-md-1 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Concern"),a.createElement("div",{className:"col-md-1 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Location"),a.createElement("div",{className:"col-md-2 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Due date"),a.createElement("div",{className:"col-md-1 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Status"),a.createElement("div",{className:"col-md-2 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Equipment"),a.createElement("div",{className:"col-md-2 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Floor"),a.createElement("div",{className:"col-md-1 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Customer"),a.createElement("div",{className:"col-md-2 px-0 py-2 trim-data grid-header"},a.createElement("i",{className:" mx-0 px-0 py-2 fa fas fa-sort"})," Action"))),a.createElement("div",{className:"dataCard px-1"},E&&E.length>0&&E.map(function(t,c){if(t.ontology&&t.buildingOntology)return a.createElement("div",{key:c,className:"card no-margin no-padding"},a.createElement("div",{className:"container-fluid  no-padding"},a.createElement("div",{className:"row no-margin no-padding"},a.createElement("div",{className:"col-md-12 no-padding"},a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12 no-padding",onClick:function(){},style:{cursor:"pointer"}},a.createElement("div",{className:"col-md-5 no-padding"},a.createElement("div",{className:"row no-margin no-padding"},a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-3 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.ontology}," ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Case No: "),t.ontology),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-9 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.ticketIssue}," ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Description: "),t.ticketIssue))),a.createElement("div",{className:"col-md-7 no-padding"},a.createElement("div",{className:"row no-margin no-padding"},a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-1 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.criticalityOntology}," ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Concern: "),t.criticalityOntology,"  "),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-1 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.spaceLabel},"    ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Location: "),t.spaceLabel),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-2 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.expectedDoneBy},"    ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Due Date: "),t.expectedDoneBy),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-1 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.status},"    ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Status: "),t.status),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-2 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.assetLabel},"    ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Equipment: "),t.assetLabel),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-2 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.floorLabel},"    ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Floor: "),t.floorLabel," "),a.createElement("div",{onClick:function(){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology},className:"col-md-1 col-sm-12 col-xs-12 padding-5 no-margin trim-data",title:t.customerName},"    ",a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Customer: "),t.customerName),a.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 padding-5 no-margin trim-data"},a.createElement("span",{className:"hidden-md hidden-lg visible-inline-sm visible-inline-xs headingText"},"Action: "),"Completed"!=t.status&&a.createElement("button",{className:"btn btn-warning btn-sm",title:"Edit Ticket",onClick:function(e){window.location.hash="/"+n+"/"+l+"/TicketForm/"+t.ontology+"/true"}},a.createElement("i",{className:"fa fa-edit"})),a.createElement("button",{className:"btn btn-danger btn-sm",title:"Delete Ticket","data-toggle":"modal","data-target":"#deleteTicket"+c,onClick:function(e){}},a.createElement("i",{className:"fa fa-trash"}))))))))),a.createElement(m.a,{instance:e.props.instance,id:"deleteTicket"+c,showCancelButton:!0,cancelButtonText:"No",confirmButtonText:"Yes",confirmationText:"Are you sure you want to delete this ticket?",heading:"Confirmation",onConfirmButtonClick:function(){return f(e,void 0,void 0,function(){var e;return h(this,function(n){switch(n.label){case 0:return Object(i.a)(!0),[4,Object(d.a)(t.ontology)];case 1:return n.sent(),[4,Object(d.f)()];case 2:return e=n.sent(),this.setState({ticketData:e,allTickets:e}),Object(i.a)(!1),[2]}})})}}))})),a.createElement("button",{type:"button",id:"btnRefreshTasks",className:"hidden",onClick:function(){return e.setupData()}},".")))))))},t}(a.Component);t.default=p}});