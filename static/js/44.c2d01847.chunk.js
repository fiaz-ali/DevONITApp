webpackJsonp([44],{3209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=(n.n(i),n(698)),c=n(775),o=n(122),r=n(20),l=n(781),s=n(11),u=n(1003),d=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),m=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,c){function o(e){try{l(i.next(e))}catch(e){c(e)}}function r(e){try{l(i.throw(e))}catch(e){c(e)}}function l(e){e.done?a(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(o,r)}l((i=i.apply(e,t||[])).next())})},h=this&&this.__generator||function(e,t){var n,i,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function r(c){return function(r){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&c[0]?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,i=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],i=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,r])}}},f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={SolutionList:[],SolutionObj:Object(),solutionSelected:[],projectData:Object(),workflowList:[],isHistorian:!1},n.onChangeHandler=n.onChangeHandler.bind(n),n.updateSolutionlist=n.updateSolutionlist.bind(n),n.addSolutionObj=n.addSolutionObj.bind(n),n._deleteSolution=n._deleteSolution.bind(n),n._getSolutionList=n._getSolutionList.bind(n),n.onChangeSelection=n.onChangeSelection.bind(n),n._exportSheet=n._exportSheet.bind(n),n._getProject=n._getProject.bind(n),n.fetchWorkflow=n.fetchWorkflow.bind(n),n.onInspectionSelection=n.onInspectionSelection.bind(n),n.restoreSelectedVersion=n.restoreSelectedVersion.bind(n),n}return d(t,e),t.prototype.componentDidMount=function(){return m(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return this.props.projectId?(this._getProject(this.props.projectId),[4,this._getSolutionList()]):[3,2];case 1:e.sent(),e.label=2;case 2:return this.props.buildingName&&this.fetchWorkflow(this.props.buildingName),[2]}})})},t.prototype._getProject=function(e){return m(this,void 0,void 0,function(){var t=this;return h(this,function(n){switch(n.label){case 0:return Object(o.a)(!0),e.length>0?[4,Object(c.q)(e).then(function(e){t.setState({projectData:e},function(){return m(t,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,this._getSolutionList()];case 1:return e.sent(),[2]}})})})})]:[3,2];case 1:n.sent(),n.label=2;case 2:return Object(o.a)(!1),[2]}})})},t.prototype._exportSheet=function(e){return m(this,void 0,void 0,function(){var t,n,i,a,r,l,s,u,d,m,f;return h(this,function(h){switch(h.label){case 0:return t=this.state.SolutionList,n=t[0].spreadSheetId,i=t[0].solutionTitle,n?(Object(o.a)(!0),a=void 0,[4,Object(c.o)(n,e)]):[3,2];case 1:for((r=h.sent())&&(a=window.atob(r)),l=a.length,s=new Uint8Array(l),u=0;u<l;u++)d=a.charCodeAt(u),s[u]=d;Object(o.a)(!1),e?(m=new Blob([s],{type:"application/pdf"}),(f=document.createElement("a")).href=window.URL.createObjectURL(m),f.download=i+".pdf",f.click()):(m=new Blob([s],{type:"application/xlsx"}),(f=document.createElement("a")).href=window.URL.createObjectURL(m),f.download=i+".xlsx",f.click()),h.label=2;case 2:return[2]}})})},t.prototype.onChangeSelection=function(e,t){for(var n=this.state.SolutionList,i=[],a=0;a<n.length;a++){var c=n[a];a==t&&(c.active=e.target.checked,i.push(c))}this.setState({solutionSelected:i})},t.prototype.onInspectionSelection=function(e){var t=this.state.SolutionObj;t.inspection=e.target.value,this.setState({SolutionObj:t})},t.prototype._getSolutionList=function(){return m(this,void 0,void 0,function(){var e,t=this;return h(this,function(n){switch(n.label){case 0:return(e=this.props.projectId)?[4,Object(c.t)(e).then(function(e){e.forEach(function(e){Object(r.R)(e._id,e.solutionTitle)}),t.setState({SolutionList:e})})]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},t.prototype.updateSolutionlist=function(){return m(this,void 0,void 0,function(){var e,t,n,i,a,r,l=this;return h(this,function(s){switch(s.label){case 0:return e=this.props.projectId,t=this.state,n=t.SolutionObj,i=t.SolutionList,a=t.projectData,r=i&&i.find(function(e){return e._id==n._id}),Object(o.a)(!0),r&&r._id.length>0?[4,Object(c.h)(n).then(function(e){}).catch(function(e){console.log("error: ",e)})]:[3,2];case 1:return s.sent(),this.setState({SolutionObj:Object()},function(){return m(l,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,this._getSolutionList()];case 1:return e.sent(),[2]}})})}),[3,4];case 2:return n.spreadSheetId=a.templateId,e?(n.projectId=e,n.projectId.length>0?[4,Object(c.h)(n).then(function(e){}).catch(function(e){console.log("error: ",e)})]:[3,4]):[3,4];case 3:s.sent(),this.setState({SolutionObj:Object()},function(){return m(l,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,this._getSolutionList()];case 1:return e.sent(),[2]}})})}),s.label=4;case 4:return Object(o.a)(!1),[2]}})})},t.prototype.onChangeHandler=function(e,t){var n=this.state.SolutionObj;n[e]=t,this.setState({SolutionObj:n})},t.prototype.addSolutionObj=function(){var e={financialAssumptionsID:"",assigned:"",serviceBidders:"",solutionDescription:"",status:"",projectTitle:this.state.projectData.projectTitle,solutionTitle:"",inspection:""};this.setState({SolutionObj:e}),document.getElementById("editSolutionbtn").click()},t.prototype._deleteSolution=function(e){return m(this,void 0,void 0,function(){return h(this,function(t){switch(t.label){case 0:return e.length>0?[4,Object(c.n)(e)]:[3,3];case 1:return t.sent(),[4,this._getSolutionList()];case 2:t.sent(),t.label=3;case 3:return[2]}})})},t.prototype.fetchWorkflow=function(e){return m(this,void 0,void 0,function(){var t=this;return h(this,function(n){switch(n.label){case 0:return e?[4,Object(l.k)(e).then(function(e){var n=[];if(e&&e.length&&Object(s.g)(e[0].ontology))for(var i=0;i<e.length;i++){var a=Object(),c=e[i];a.ca="true"==Object(s.g)(c.ca),a.ecm="true"==Object(s.g)(c.ecm),a.rcx="true"==Object(s.g)(c.rcx),a.other="true"==Object(s.g)(c.other),a.isTemplate="true"==Object(s.g)(c.isTemplate),a.dateOfStart=Object(s.g)(c.dateOfStart),a.description=Object(s.g)(c.description),a.finishDate=Object(s.g)(c.finishDate),a.lead=Object(s.g)(c.lead),a.ontology=Object(s.g)(c.ontology),n.push.apply(n,[a])}t.setState({workflowList:n})}).catch(function(e){})]:[3,2];case 1:n.sent(),Object(o.a)(!1),n.label=2;case 2:return[2]}})})},t.prototype.restoreSelectedVersion=function(e){return m(this,void 0,void 0,function(){var t;return h(this,function(n){switch(n.label){case 0:return e&&e.model?((t=JSON.parse(e.model)).lastUpdated=(new Date).toString(),[4,Object(c.g)(t)]):[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},t.prototype.render=function(){var e=this,t=this.props,n=t.buildingName,c=t.instance,o=t.projectId,r=this.state,l=r.SolutionList,s=r.SolutionObj,d=r.projectData,m=r.workflowList,h=r.isHistorian;return i.createElement(i.Fragment,null,h&&i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-12"},i.createElement("button",{className:"btn btn-success pull-right active custom-outline-btn",style:{marginLeft:3,marginTop:5},onClick:function(){e.setState({isHistorian:!1})}}," Go Back To ",d.projectTitle))),h&&i.createElement(u.default,{buildingName:n,instance:c,ObjectId:o,restoreSelectedVersion:this.restoreSelectedVersion}),!h&&i.createElement("div",{className:"content"},i.createElement("div",{className:"container-fluid"},i.createElement("div",{className:""},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-12"},i.createElement("div",{className:"col-md-3 col-sm-12",style:{display:"inline-flex"}},i.createElement("h4",{className:"margin-5"},"Project Title: ",d.projectTitle)),i.createElement("button",{style:{marginLeft:3,marginTop:5},className:"btn btn-dark btn-fill dropdown-toggle pull-right",type:"button","data-toggle":"dropdown"},i.createElement("span",null," Export"),i.createElement("b",{className:"caret"})),i.createElement("ul",{className:"dropdown-menu pull-right"},i.createElement("li",{onClick:function(){e._exportSheet()}},i.createElement("a",{href:"javascript:void(0)"},i.createElement("i",{className:"fa fa-file"})," Excel")),i.createElement("li",{onClick:function(){e._exportSheet(!0)}},i.createElement("a",{href:"javascript:void(0)"},i.createElement("i",{className:"fa fa-file"})," PDF"))),i.createElement("button",{type:"button",className:"btn btn-success pull-right active custom-outline-btn",onClick:function(){e.addSolutionObj()}},i.createElement("span",null,"Add"),i.createElement("i",{className:"fa fa-plus"}))," \xa0",i.createElement("button",{type:"button",className:"btn btn-danger pull-right active custom-outline-btn",onClick:function(){window.location.hash=c+"/"+n+"/Risk"}}," Risk "),i.createElement("button",{className:"btn btn-success pull-right active custom-outline-btn",onClick:function(){e.setState({isHistorian:!0})}}," ",i.createElement("i",{className:"fa fa-history","aria-hidden":"true"})," Historian Archive"))),i.createElement("br",null),i.createElement("div",{className:"card padding-10"},i.createElement("div",{className:"container-fluid"},i.createElement("div",{className:"dataCard"},i.createElement("div",{className:"row no-padding  hidden-xs hidden-sm"},i.createElement("div",{className:"col-md-2 small trim-data grid-header"},"Solution Title"),i.createElement("div",{className:"col-md-2 small trim-data grid-header"},"Solution Description"),i.createElement("div",{className:"col-md-1 small trim-data grid-header"},"Status"),i.createElement("div",{className:"col-md-2 small trim-data grid-header"},"Service Bidders"),i.createElement("div",{className:"col-md-1 small trim-data grid-header"},"Assigned"),i.createElement("div",{className:"col-md-4 small trim-data grid-header"},"\xa0")),l&&l.length>0&&l.map(function(t,a){return i.createElement("div",{className:"row no-padding",key:a},i.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 small trim-data padding-10"},i.createElement("span",{className:"hidden visible-sm-inline visible-xs-inline headingText"},"Solution Title"),i.createElement("a",{href:"#"+c+"/"+n+"/Solution/"+t._id,title:t.solutionTitle},t.solutionTitle)),i.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 small trim-data padding-10"},i.createElement("span",{className:"hidden visible-sm-inline visible-xs-inline headingText"},"Solution Description"),t.solutionDescription),i.createElement("div",{className:"col-md-1 col-sm-12 col-xs-12 small trim-data padding-10"},i.createElement("span",{className:"hidden visible-sm-inline visible-xs-inline headingText"},"Status"),t.status),i.createElement("div",{className:"col-md-2 col-sm-12 col-xs-12 small trim-data padding-10"},i.createElement("span",{className:"hidden visible-sm-inline visible-xs-inline headingText"},"Service Bidders"),t.serviceBidders),i.createElement("div",{className:"col-md-1 col-sm-12 col-xs-12 small trim-data padding-10"},i.createElement("span",{className:"hidden visible-sm-inline visible-xs-inline headingText"},"Assigned"),t.assigned),i.createElement("div",{className:"col-md-3 col-sm-12 col-xs-12 center padding-5",style:{display:"inline-block",paddingTop:"7px"}},i.createElement("a",{className:"btn-sm btn-danger active custom-outline-btn trim-data",onClick:function(){window.location.hash=c+"/"+n+"/Risk"}}," Risk "),i.createElement("a",{className:"btn-sm btn-success active custom-outline-btn trim-data",href:"#"+c+"/"+n+"/LightingSheet/"+t._id}," LCA "),i.createElement("a",{className:"btn-sm btn-primary active custom-outline-btn trim-data",onClick:function(){e.setState({SolutionObj:t}),document.getElementById("editSolutionbtn").click()}},"  Edit "),i.createElement("a",{className:"btn-sm btn-danger active custom-outline-btn trim-data",onClick:function(){e._deleteSolution(t._id)}}," Delete ")),i.createElement("div",{className:"col-md-1 col-sm-12 col-xs-12 padding-5",style:{display:"inline-block",paddingTop:"7px"}},i.createElement("input",{className:"trim-data active",type:"checkbox",checked:t.active,onClick:function(t){e.onChangeSelection(t,a)}})))})))))),i.createElement("button",{id:"editSolutionbtn",className:"hidden","data-toggle":"modal","data-target":"#editSolution",title:"Add"}," ",i.createElement("i",{className:"fa fa-plus"})," "),i.createElement(a.a,{id:"editSolution",heading:s&&""==s.solutionTitle?"Add Solution":s.solutionTitle,saveButtonText:l&&l.length>0&&l.indexOf(s)>-1?"Update":"Add",isEditForm:!0,onSaveButtonClick:function(){e.updateSolutionlist()},disableSaveButton:!s.solutionTitle},i.createElement("div",{className:"content dataCard"},i.createElement("div",{className:""},i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4 headingText padding-10"},"Project Title:"),i.createElement("div",{className:"col-md-8"},i.createElement("input",{onChange:function(t){e.onChangeHandler(t.target.name,t.target.value)},disabled:!0,type:"text",name:"projectTitle",value:s.projectTitle,className:"form-control cell_border"}))),i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4 headingText padding-10"},"Solution Title:"),i.createElement("div",{className:"col-md-8"},i.createElement("input",{onChange:function(t){e.onChangeHandler(t.target.name,t.target.value)},type:"text",name:"solutionTitle",value:s.solutionTitle,className:"form-control cell_border"})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4 headingText padding-10 trim-data"},"Solution Description:"),i.createElement("div",{className:"col-md-8"},i.createElement("input",{onChange:function(t){e.onChangeHandler(t.target.name,t.target.value)},type:"text",name:"solutionDescription",value:s.solutionDescription,className:"form-control cell_border"}))),i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4 headingText padding-10"},"Status:"),i.createElement("div",{className:"col-md-8"},i.createElement("input",{onChange:function(t){e.onChangeHandler(t.target.name,t.target.value)},type:"text",name:"status",value:s.status,className:"form-control cell_border"})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4 headingText padding-10"},"Service Bidders:"),i.createElement("div",{className:"col-md-8"},i.createElement("input",{onChange:function(t){e.onChangeHandler(t.target.name,t.target.value)},type:"text",name:"serviceBidders",value:s.serviceBidders,className:"form-control cell_border"}))),i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4 headingText padding-10"},"Assigned:"),i.createElement("div",{className:"col-md-8",style:{paddingTop:"10px"}},i.createElement("input",{onChange:function(t){e.onChangeHandler(t.target.name,t.target.value)},type:"text",name:"assigned",value:s.assigned,className:"form-control cell_border"})))),i.createElement("div",{className:"row padding-10"},i.createElement("div",{className:"col-md-6"},i.createElement("div",{className:"col-md-4"},i.createElement("label",{htmlFor:"coiltype"},"Select Inspection:")),i.createElement("div",{className:"col-md-8"},i.createElement("select",{id:"inspection",className:"form-control",value:s.inspection,onChange:function(t){e.onInspectionSelection(t)}},i.createElement("option",{value:"",key:-2},"Select Inspection"),m&&m.filter(function(e){return 1!=e.isTemplate}).map(function(e,t){return i.createElement("option",{key:t,className:"trim-data",value:e.ontology},e.description," ")}))))))))))},t}(i.Component);t.default=f},775:function(e,t,n){"use strict";t.g=function(e,t,n,l){return o(this,void 0,void 0,function(){return r(this,function(o){switch(o.label){case 0:return[4,Object(i.f)({model:e,buildingData:t,equipment:n,lightingEquipment:l},i.a.LIFE.SaveProject,c.b.LIFE).then(function(){Object(a.b)("Project saved Successfully.")}).catch(function(e){Object(a.a)("Error occured while saving Project.")})];case 1:return[2,o.sent()]}})})},t.r=function(e,t){return o(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,Object(i.e)({buildingName:e,instance:t},i.a.LIFE.GetProjectList,c.b.LIFE)];case 1:return[2,n.sent()]}})})},t.m=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({_id:e},i.a.LIFE.DeleteProject,c.b.LIFE).then(function(){Object(a.b)(" Deleted Successfully.")}).catch(function(e){Object(a.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.h=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({model:e},i.a.LIFE.SaveProjectSolution,c.b.LIFE).then(function(){Object(a.b)("Solution saved Successfully.")}).catch(function(e){Object(a.a)("Error occured while saving Solution.")})];case 1:return[2,t.sent()]}})})},t.o=function(e,t){return o(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,Object(i.e)({spreadSheetId:e,fileType:t},i.a.LIFE.ExportSheet,c.b.LIFE)];case 1:return[2,n.sent()]}})})},t.t=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return e?[4,Object(i.e)({projectId:e},i.a.LIFE.GetSolutionList,c.b.LIFE)]:[3,2];case 1:return[2,t.sent()];case 2:return[2]}})})},t.u=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return e?[4,Object(i.e)({inspectionOntology:e},i.a.LIFE.GetSolutionListForInspection,c.b.LIFE)]:[3,2];case 1:return[2,t.sent()];case 2:return[2]}})})},t.s=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({solutionId:e},i.a.LIFE.GetSolution,c.b.LIFE)];case 1:return[2,t.sent()]}})})},t.n=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({_id:e},i.a.LIFE.DeleteSolution,c.b.LIFE).then(function(){Object(a.b)(" Deleted Successfully.")}).catch(function(e){Object(a.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.v=function(e,t){return o(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,Object(i.f)({manageFile:e,fileData:t},i.a.LIFE.ManageFile,c.b.LIFE).then(function(){Object(a.b)("Upload Successfully.")}).catch(function(e){Object(a.a)("Error occured while saving Upload.")})];case 1:return[2,n.sent()]}})})},t.e=function(e,t){return o(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,Object(i.f)({communityFile:e,fileData:t},i.a.LIFE.SaveCommunityFile,c.b.LIFE)];case 1:return[2,n.sent()]}})})},t.p=function(e,t){return o(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,Object(i.e)({buildingName:e,instance:t},i.a.LIFE.GetManageFile,c.b.LIFE)];case 1:return[2,n.sent()]}})})},t.b=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({instance:e},i.a.LIFE.GetCommunityFile,c.b.LIFE)];case 1:return[2,t.sent()]}})})},t.l=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({ManageFile:e},i.a.LIFE.DeleteManageFile,c.b.LIFE).then(function(){Object(a.b)(" Deleted Successfully.")}).catch(function(e){Object(a.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.a=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({communityFile:e},i.a.LIFE.DeleteCommunityFile,c.b.LIFE).then(function(){Object(a.b)(" Deleted Successfully.")}).catch(function(e){Object(a.a)("Error occured while deleting.")})];case 1:return[2,t.sent()]}})})},t.q=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({projectId:e},i.a.LIFE.GetProject,c.b.LIFE)];case 1:return[2,t.sent()]}})})},t.f=function(e,t,n){return o(this,void 0,void 0,function(){return r(this,function(a){switch(a.label){case 0:return[4,Object(i.f)({email:e,buildingName:t,instance:n},i.a.LIFE.SaveEmailAndDrive,c.b.LIFE)];case 1:return[2,a.sent()]}})})},t.j=function(e,t){return o(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,Object(i.f)({email:e,instance:t},i.a.LIFE.ShareCommunityFolder,c.b.LIFE).then(function(e){e.result?Object(a.b)("Successfully Share."):Object(a.a)("The user Email is not valid.")}).catch(function(e){Object(a.a)("Something Went Wrong!")})];case 1:return[2,n.sent()]}})})},t.k=function(e,t,n){return o(this,void 0,void 0,function(){return r(this,function(o){switch(o.label){case 0:return[4,Object(i.f)({email:e,buildingName:t,instance:n},i.a.LIFE.ShareMMTemplateFolder,c.b.LIFE).then(function(e){e.result?Object(a.b)("Successfully Share."):Object(a.a)("The user Email is not valid.")}).catch(function(e){Object(a.a)("Something Went Wrong!")})];case 1:return[2,o.sent()]}})})},t.i=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.f)({templatePurpose:e},i.a.LIFE.SaveTemplatePurpose,c.b.LIFE)];case 1:return[2,t.sent()]}})})},t.c=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,Object(i.e)({instance:e},i.a.LIFE.GetTemplatePurpose,c.b.LIFE)];case 1:return[2,t.sent()]}})})},t.d=function(e){var t=e.getFullYear().toString().slice(2,4),n=(e.getMonth()+1).toString().padStart(2,0),i=e.getDate().toString().padStart(2,0),a=e.getHours().toString().padStart(2,0),c=e.getMinutes().toString().padStart(2,0),o=e.getSeconds().toString().padStart(2,0);return t+n+i+a+c+o};var i=n(12),a=n(21),c=n(13),o=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,c){function o(e){try{l(i.next(e))}catch(e){c(e)}}function r(e){try{l(i.throw(e))}catch(e){c(e)}}function l(e){e.done?a(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(o,r)}l((i=i.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,i,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function r(c){return function(r){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&c[0]?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,i=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],i=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,r])}}}}});