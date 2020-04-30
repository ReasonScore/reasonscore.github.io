(this.webpackJsonpeditor=this.webpackJsonpeditor||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),l=(a(32),a(33),a(2)),c=a.n(l),s=a(13),m=a(5),d=a(6),p=a(8),u=a(7),h=a(9),g=a(1),f=function(e){function t(e){var a;if(Object(m.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).claim=new g.Claim,a.claimEdge=a.props.claimEdge,a.handleSubmit=function(){var e=[];a.state.pasteClaim&&a.claimEdge?e.push(new g.Change(new g.ClaimEdge(a.claimEdge.parentId,Object(g.ID)(a.state.pasteClaim),void 0,a.state.pro,a.claimEdge.id,a.state.priority))):(e.push(new g.Change(new g.Claim(a.state.content,a.claim.id))),a.claimEdge&&e.push(new g.Change(new g.ClaimEdge(a.claimEdge.parentId,a.claimEdge.childId,void 0,a.state.pro,a.claimEdge.id,a.state.priority)))),a.props.calculationInitator.notify(e).then((function(){a.props.handleEditClose()}))},a.handleContent=function(e){a.setState({content:e.currentTarget.value})},a.handlePriority=function(e){a.setState({priority:e.currentTarget.value})},a.handlePasteClaim=function(e){a.setState({pasteClaim:e.currentTarget.value})},a.handlePro=function(e){var t=a.props.proMainContext?e.currentTarget.checked:!e.currentTarget.checked;a.setState({pro:e.currentTarget.checked,proMain:t})},a.handleProMain=function(e){var t=a.props.proMainContext?e.currentTarget.checked:!e.currentTarget.checked;a.setState({pro:t,proMain:e.currentTarget.checked})},a.handleAffects=function(e){a.setState({affects:e.currentTarget.value})},a.handleDelete=Object(s.a)(c.a.mark((function e(){var t,n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.repository.rsData,!a.claimEdge){e.next=13;break}return n=t.claimEdgesByParentId[a.claimEdge.parentId.toString()],(r=n.indexOf(a.claimEdge.id.toString(),0))>-1&&n.splice(r,1),e.t0=JSON,e.t1=JSON,e.next=9,a.props.repository.getItem(a.claimEdge.parentId);case 9:e.t2=e.sent,e.t3=e.t1.stringify.call(e.t1,e.t2),i=e.t0.parse.call(e.t0,e.t3),a.props.calculationInitator.notify([new g.Change(i)]).then((function(){a.props.handleEditClose()}));case 13:case"end":return e.stop()}}),e)}))),a.handleCancel=function(){a.props.handleEditClose()},a.props.new)a.claim=new g.Claim,a.claimEdge=new g.ClaimEdge(a.props.claimId,a.claim.id);else{var n=a.props.repository.getItem(a.props.claimId);Promise.all([n]).then((function(e){e[0]&&(a.claim=e[0]);var t=!a.claimEdge||a.claimEdge.pro,n={content:a.claim.content,pro:t,proMain:a.props.proMainContext?t:!t,affects:a.claimEdge?a.claimEdge.affects.toString():void 0,priority:a.claimEdge?a.claimEdge.priority:"",pasteClaim:""};void 0===n.priority&&(n.priority=""),a.setState(n)}))}return a.state={content:"",pro:!0,proMain:a.props.proMainContext,affects:void 0,priority:"",pasteClaim:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"claim.content"},"Content"),r.a.createElement("textarea",{className:"form-control",id:"claim.content",value:this.state.content,onChange:this.handleContent,rows:2}),r.a.createElement("small",{className:"form-text text-muted"},"For hyperlinks us ",r.a.createElement("a",{href:"https://spec.commonmark.org/0.29/#links"},"commonMark")," syntax: This is [an example](http://example.com/) inline link.")),this.claimEdge&&r.a.createElement(r.a.Fragment,null,this.props.proMainContext?"True":"false",r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",id:"claimEdge.pro",checked:this.state.pro,onChange:this.handlePro}),r.a.createElement("label",null," Pro Parent")),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",id:"proMain",checked:this.state.proMain,onChange:this.handleProMain}),r.a.createElement("label",null," Pro Main")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Affects:",r.a.createElement("select",{id:"claimEdge.affects",value:this.state.affects,onChange:this.handleAffects},r.a.createElement("option",{value:g.Affects.Confidence},"Confidence"),r.a.createElement("option",{value:g.Affects.Relevance},"Relevance")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"claimEdge.priority"},"Priority"),r.a.createElement("input",{type:"text",className:"form-control",id:"claimEdge.priority",value:this.state.priority,onChange:this.handlePriority})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pasteClaim"},"Paste Claim"),r.a.createElement("input",{type:"text",className:"form-control",id:"pasteClaim",value:this.state.pasteClaim,onChange:this.handlePasteClaim})),r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"Third group"},r.a.createElement("button",{type:"button",value:"Delete",className:"btn btn-secondary",onClick:this.handleDelete},"Delete"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},r.a.createElement("button",{type:"button",value:"Submit",className:"btn btn-primary",onClick:this.handleSubmit},"Submit")),r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"Second group"},r.a.createElement("button",{type:"button",value:"Cancel",className:"btn btn-secondary",onClick:this.handleCancel},"Cancel"))),r.a.createElement("span",null,"ID: ",this.claim.id))}}]),t}(r.a.Component),E=a(42),v=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).handleDataDispatch=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,i,o,l,s,m,d,p,u,h,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,r=!1,i=void 0,e.prev=3,o=t[Symbol.iterator]();case 5:if(n=(l=o.next()).done){e.next=23;break}if(s=l.value,m=s.newItem,d={},m.id===a.props.claimId&&m.type===g.Type.claim&&(p=m,d.claim=p),m.type===g.Type.score&&(u=m).sourceClaimId===a.props.claimId&&(d.score=u),a.state.claimEdge&&m.id===a.state.claimEdge.id&&m.type===g.Type.claimEdge&&(h=m,d.claimEdge=h),m.type!==g.Type.claimEdge){e.next=19;break}if(m.parentId!==a.props.claimId){e.next=19;break}return e.next=17,a.props.repository.getClaimEdgesByParentId(a.props.claimId);case 17:f=e.sent,d.childClaimEedges=f;case 19:a.setState(d);case 20:n=!0,e.next=5;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(3),r=!0,i=e.t0;case 29:e.prev=29,e.prev=30,n||null==o.return||o.return();case 32:if(e.prev=32,!r){e.next=35;break}throw i;case 35:return e.finish(32);case 36:return e.finish(29);case 37:case"end":return e.stop()}}),e,null,[[3,25,29,37],[30,,32,36]])})));return function(t){return e.apply(this,arguments)}}(),a.handleExpanderClick=function(){a.setState({childrenVisible:!a.state.childrenVisible})},a.handleEditButtonClick=function(){a.setState({editorVisible:!a.state.editorVisible,addMode:!1})},a.handleAddButtonClick=function(){a.setState({addMode:!0,editorVisible:!a.state.editorVisible})},a.handleEditClose=function(){a.setState({editorVisible:!1})},a.state={childrenVisible:!a.props.claimEdge,editorVisible:!1,addMode:!1,score:new g.Score,claim:new g.Claim,childClaimEedges:[],claimEdge:a.props.claimEdge};var n=a.props.repository.getScoreBySourceClaimId(a.props.claimId),r=a.props.repository.getItem(a.props.claimId),i=a.props.repository.getClaimEdgesByParentId(a.props.claimId);return Promise.all([n,r,i]).then((function(e){var t={};t.score=e[0],e[1]&&(t.claim=e[1]),t.childClaimEedges=e[2],a.setState(t)})),a.props.messenger.subscribe(a.handleDataDispatch),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){this.props.messenger.unsubscribe(this.handleDataDispatch)}},{key:"render",value:function(){var e=this.props,a=this.state.score;a||(a=new g.Score);var n=this.state.claim,i=this.state.claimEdge,o=this.state.childClaimEedges,l=e.proMainContext,c="".concat(Math.round(100*a.confidence),"%");i&&(i.pro||(l=!l),c=i.affects===g.Affects.Relevance?"\xd7".concat((a.relevance+1).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:1})):"".concat(Math.round(a.confidence*a.relevance*100)));var s=o;o.length>1&&(s=o.sort((function(e,t){return void 0!==e.priority&&""!==e.priority||void 0!==t.priority&&""!==t.priority?void 0===e.priority||""===e.priority?1:void 0===t.priority||""===t.priority?-1:e.priority>t.priority?1:e.priority<t.priority?-1:0:0})));var m=l?"pro":"con";return r.a.createElement("div",{className:"claim-outer"},r.a.createElement("div",{className:"claim "+m},r.a.createElement("div",{className:"editor-button",onClick:this.handleEditButtonClick},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"15",viewBox:"0 0 48 48",width:"15"},r.a.createElement("path",{d:"M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"}),r.a.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}))),r.a.createElement("div",{className:"add-button",onClick:this.handleAddButtonClick},"+"),o.length>0&&r.a.createElement("div",{className:"expander"+(this.state.childrenVisible?" expanded":" collapsed"),onClick:this.handleExpanderClick},"\u25e5"),r.a.createElement("div",{className:"claim-inner"},r.a.createElement("span",{className:"score"},c),r.a.createElement("span",{dangerouslySetInnerHTML:function(){var e=new E.Parser({}),t=new E.HtmlRenderer({safe:!0}),a=e.parse(n.content);return{__html:t.render(a)}}()}))),this.state.editorVisible&&r.a.createElement(f,{claimId:n.id,repository:e.repository,calculationInitator:e.calculationInitator,claimEdge:this.state.claimEdge,proMainContext:this.state.addMode?l:e.proMainContext,handleEditClose:this.handleEditClose,messenger:e.messenger,new:this.state.addMode}),this.state.childrenVisible&&r.a.createElement("ul",{className:"children"},o.length>0&&s.map((function(a){return r.a.createElement("li",{key:a.childId.toString()},r.a.createElement(t,{claimId:a.childId,repository:e.repository,calculationInitator:e.calculationInitator,claimEdge:a,proMainContext:l,messenger:e.messenger}))}))))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSave=function(){window.db.doc("rsData").set(JSON.parse(JSON.stringify(a.props.repository.rsData))).then((function(){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",value:"Save",className:"btn btn-secondary",onClick:this.handleSave},"Save")}}]),t}(r.a.Component),b=function(e){var t=e.claimId,a=e.repository,n=e.calculationInitator,i=e.messenger;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{repository:a}),r.a.createElement(v,{claimId:t,repository:a,calculationInitator:n,proMainContext:!0,messenger:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=new g.Repository,w=new g.Messenger,I=new g.CalculationInitator(C,w.notify);window.db.doc("rsData").get().then((function(e){if(e.exists){C.rsData=e.data();var t=document.getElementsByTagName("rs-claim"),a=!0,n=!1,i=void 0;try{for(var l,c=t[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var s=l.value,m=s.getAttribute("claimId"),d=Object(g.ID)("");m&&(d=Object(g.ID)(m)),o.a.render(r.a.createElement(b,{claimId:d,repository:C,calculationInitator:I,messenger:w}),s)}}catch(k){n=!0,i=k}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}}else{C.rsData=new g.RsData;var p=document.getElementsByTagName("rs-claim"),u=!0,h=!1,f=void 0;try{for(var E,v=function(){var e=E.value,t=e.getAttribute("claimId"),a=Object(g.ID)("");t&&(a=Object(g.ID)(t)),I.notify([new g.Change(new g.Claim("New Claim",a))]).then((function(t){o.a.render(r.a.createElement(b,{claimId:a,repository:C,calculationInitator:I,messenger:w}),e)}))},y=p[Symbol.iterator]();!(u=(E=y.next()).done);u=!0)v()}catch(k){h=!0,f=k}finally{try{u||null==y.return||y.return()}finally{if(h)throw f}}}})).catch((function(e){console.log("Error getting document:",e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.464cd36d.chunk.js.map