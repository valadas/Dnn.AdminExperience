!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t){e.exports=window.dnn.nodeModules.React},function(e,t){e.exports=window.dnn.nodeModules.CommonComponents},function(e,t){e.exports=window.dnn.Sites.CommonActions},function(e,t){e.exports=window.dnn.nodeModules.ReactRedux},function(e,t){e.exports=window.dnn.nodeModules.Redux},function(e,t,n){e.exports=n(22)()},function(e,t){e.exports=window.dnn.Sites.CommonReducers},function(e,t,n){"use strict";t.a={init:function(e){e||(this.applicationSettings={}),this.applicationSettings=e},applicationSettings:null}},function(e,t){e.exports=window.dnn.Sites.CommonComponents},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],p=n(21);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function m(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),m(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=c++;n=l||(l=b(t)),r=P.bind(null,n,i,!1),o=P.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&d(f(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var v,w=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function P(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=window.dnn.nodeModules.ReduxThunk},function(e,t){e.exports=window.dnn.nodeModules.ReactDOM},function(e,t){e.exports=window.dnn.nodeModules.ReduxImmutableStateInvariant},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevTools},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevToolsLogMonitor},function(e,t){e.exports=window.dnn.nodeModules.ReduxDevToolsDockMonitor},function(e,t,n){e.exports=n(27)},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".sites-app *{box-sizing:border-box}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";var r=n(23);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,"._1nE73fXK_Hb5auEMG2mru2 .dnn-persona-bar-page-body .persona-bar-page-body{background:transparent;border:none}._1nE73fXK_Hb5auEMG2mru2 .load-more-button{text-align:center}",""]),t.locals={sitesPortalList:"_1nE73fXK_Hb5auEMG2mru2"}},function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"svg{fill:#C8C8C8}svg:hover{fill:#6F7273}svg:active{fill:#1E88C3}.create-portal{float:left}.create-portal .create-site-container{padding:50px 35px}.create-portal .create-site-container .dnn-single-line-input-with-error,.create-portal .create-site-container .dnn-multi-line-input-with-error{width:100%}.create-portal .create-site-container .portal-description .dnn-ui-common-multi-line-input{height:75px;overflow:auto}.create-portal .create-site-container .site-template-box{margin-top:25px}.create-portal .create-site-container .site-template-box .dnn-label{display:block;width:100%}.create-portal .create-site-container .site-thumbnails-container{width:100%}.create-portal .create-site-container .site-thumbnails-container .dnn-dropdown-with-error{width:100%;margin-top:25px;margin-bottom:35px}.create-portal .create-site-container .site-type-container{margin-top:25px}.create-portal .create-site-container .site-type-container .dnn-radio-buttons{padding-top:6px}.create-portal .create-site-container .site-type-container .dnn-radio-buttons>ul{display:table}.create-portal .create-site-container .site-type-container .dnn-radio-buttons ul li label{float:left}.create-portal .create-site-container .site-type-container .home-directory .dnn-label{width:40%;margin-right:0}.create-portal .create-site-container .site-type-container .home-directory .dnn-label>label{font-size:13px;float:right;margin-right:25px}.create-portal .create-site-container .site-type-container .home-directory .input-tooltip-container{width:60%}.create-portal .create-site-container .site-type-container #home-directory{width:100%}.create-portal .create-site-container .user-as-admin .dnn-switch-container{width:100%}.create-portal .create-site-container .user-as-admin .dnn-switch-container .dnn-switch{float:right}.create-portal .create-site-container .site-action-buttons{text-align:center;margin-top:25px}.create-portal .create-site-container .site-action-buttons .dnn-ui-common-button{margin-right:10px}.create-portal .create-site-container .dnn-grid-system.with-right-border{padding:25px 0}.create-portal .create-site-container .dnn-grid-system.with-right-border>.dnn-grid-cell:last-child{padding-left:15px}.create-portal .create-site-container .dnn-grid-system.with-right-border>.dnn-grid-cell:first-child{padding-right:15px;border-right:1px solid #C8C8C8}",""])},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),i=n.n(a),s=n(3),l=n(1),c=n(8);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=u({},window.dnn.utility),d={get:function(e){return p.getResx("Sites",e)}},f=n(7),m=n(2),h=n(18),b=n.n(h);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,w(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){var e=this.props;e.dispatch(m.CommonPortalListActions.loadPortals({portalGroupId:e.pagination.portalGroupId,filter:e.pagination.filter,pageIndex:e.pagination.pageIndex,pageSize:e.pagination.pageSize}))}},{key:"loadMore",value:function(e){e&&e.preventDefault();var t=this.props;t.dispatch(m.CommonPaginationActions.loadMore(function(){t.dispatch(m.CommonPortalListActions.loadPortals({portalGroupId:t.pagination.portalGroupId,filter:t.pagination.filter,pageIndex:t.pagination.pageIndex+1,pageSize:t.pagination.pageSize},!0))}))}},{key:"render",value:function(){var e=this.props;return o.a.createElement(l.GridCell,{className:b.a.sitesPortalList},o.a.createElement(l.PersonaBarPageHeader,{title:d.get("Sites")},o.a.createElement(l.Button,{type:"primary",onClick:e.onAddNewSite.bind(this),size:"large"},d.get("AddNewSite"))),o.a.createElement(l.PersonaBarPageBody,null,o.a.createElement(c.ListView,{onAddNewSite:e.onAddNewSite.bind(this),culture:f.a.applicationSettings.cultureCode}),e.portals.length<e.totalCount&&o.a.createElement(l.GridCell,{className:"load-more-button"},o.a.createElement(l.Button,{type:"primary",onClick:this.loadMore.bind(this)},d.get("LoadMore.Button")))))}}])&&g(n.prototype,a),i&&g(n,i),t}();var E=Object(s.connect)(function(e){return{portals:e.portal.portals,totalCount:e.portal.totalCount,viewMode:e.viewMode,pagination:e.pagination}})(S);n(25);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U={SiteTemplate:"",SiteName:"",SiteAlias:"",SiteDescription:"",SiteKeywords:"",IsChildSite:!1,HomeDirectory:"Portals/[PortalID]",UseCurrentUserAsAdmin:!0,Firstname:"",Lastname:"",Username:"",Email:"",Password:"",PasswordConfirm:""};function _(e){var t,n,r=L((t=e.indexOf("://")>-1?e.split("/")[2]:e.split("/")[0]).split(":"),2);return t=r[0],void 0!==(n=r[1])&&80!==n&&443!==n?"".concat(t,":").concat(n):t}var k=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,j(t).call(this))).state={defaultTemplate:"",newPortal:x({},U),error:{SiteName:!0,SiteAlias:!0,Firstname:!1,Lastname:!1,Username:!1,Email:!1,Password:!1,PasswordConfirm:!1},triedToSave:!1},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,r["Component"]),n=t,(a=[{key:"resetNewPortal",value:function(){this.setState({newPortal:x({},U)})}},{key:"componentWillMount",value:function(){var e=this,t=this.props,n=this.state;t.dispatch(m.CommonPortalListActions.getPortalTemplates(function(t){var r=n.newPortal;r.SiteTemplate=t.Results.DefaultTemplate,e.setState({defaultTemplate:t.Results.DefaultTemplate,newPortal:r})}))}},{key:"resolveSiteUrl",value:function(e){var t=_(window.location.href);if(e){var n=this.state,r=n.newPortal,o=n.error;""!==r.SiteAlias&&-1===r.SiteAlias.indexOf(t)?r.SiteAlias=t+"/"+r.SiteAlias:r.SiteAlias=t+"/"+r.SiteName,o.SiteAlias=this.resolveSiteAliasError(r.SiteAlias,e),this.setState({newPortal:r,error:o})}else{var a=this.state.newPortal;a.SiteAlias=a.SiteAlias.replace(t+"/",""),this.setState({newPortal:a})}}},{key:"resolveSiteAliasError",value:function(e,t){var n=_(window.location.href),r=e.replace(n+"/","");if(t){return!!(/[^\/a-z0-9_-]/i.test(r)&&""!==r||-1===e.indexOf(n+"/")||""===r||e.indexOf(" ")>0)}return""===e||/[^\/a-z0-9-.:]/i.test(e)||e.indexOf(" ")>0}},{key:"resolvePasswordError",value:function(e){return e!==this.state.newPortal.Password||""===e||e.length<7}},{key:"resolveEmailError",value:function(e){return!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}},{key:"onChange",value:function(e,t){var n="object"===C(t)?t.target.value:t,r=this.state,o=r.newPortal,a=r.error;switch(e){case"IsChildSite":o[e]="true"===n,this.resolveSiteUrl("true"===n);break;case"PasswordConfirm":o[e]=n,a[e]=this.resolvePasswordError(n);break;case"Email":o[e]=n,a[e]=this.resolveEmailError(n);break;case"Password":case"Firstname":case"Lastname":case"Username":case"SiteName":o[e]=n,a[e]=""===n;break;case"SiteAlias":o[e]=n,a[e]=this.resolveSiteAliasError(n,o.IsChildSite);break;case"UseCurrentUserAsAdmin":o[e]=n,!0===n?(a.Firstname=!1,a.Lastname=!1,a.Username=!1,a.Email=!1,a.Password=!1,a.PasswordConfirm=!1):(a.Firstname=""===o.Firstname,a.Lastname=""===o.Lastname,a.Username=""===o.Username,a.Email=this.resolveEmailError(o.Email),a.Password=""===o.Password,a.PasswordConfirm=this.resolvePasswordError(o.PasswordConfirm));break;default:o[e]=n}this.setState({newPortal:o,error:a})}},{key:"onSelect",value:function(e){var t=this.state.newPortal;t.SiteTemplate=e.value,this.setState({newPortal:t})}},{key:"checkForError",value:function(e,t){if(""===e[t])return!0}},{key:"setCreatingPortal",value:function(e){this.setState({creatingPortal:e})}},{key:"createPortal",value:function(){var e=this,t=this.props,n=this.state;n.triedToSave;this.setState({triedToSave:!0},function(){var r=!1;Object.keys(n.error).forEach(function(e){n.error[e]&&(r=!0)}),r||(e.setCreatingPortal(!0),t.dispatch(m.CommonPortalListActions.createPortal(n.newPortal,function(){e.setCreatingPortal(!1),e.resetNewPortal(),t.onCancel()},function(){setTimeout(function(){e.setCreatingPortal(!1)},5200)})))})}},{key:"onCancel",value:function(e){e&&e.preventDefault(),this.props.onCancel(),this.resetNewPortal()}},{key:"render",value:function(){var e=this.props,t=this.state,n=e.portalTemplates.map(function(e){return{label:e.Name,value:e.Value}});return o.a.createElement("div",{className:"create-portal"},o.a.createElement(l.PersonaBarPageHeader,{title:d.get("AddNewSite.Header")}),o.a.createElement(l.PersonaBarPageBody,{backToLinkProps:{text:d.get("BackToSites"),onClick:e.onCancel.bind(this)}},o.a.createElement(l.GridCell,{className:"create-site-container"},o.a.createElement(l.GridCell,null,o.a.createElement(l.SingleLineInputWithError,{label:d.get("Title.Label")+"*",inputId:"add-new-site-title",value:t.newPortal.SiteName,errorMessage:d.get("SiteTitleRequired.Error"),onChange:this.onChange.bind(this,"SiteName"),error:t.error.SiteName&&t.triedToSave})),o.a.createElement(l.GridCell,null,o.a.createElement(l.MultiLineInputWithError,{label:d.get("Description"),inputId:"add-new-site-description",value:t.newPortal.SiteDescription,className:"portal-description",onChange:this.onChange.bind(this,"SiteDescription"),error:!1}),o.a.createElement("hr",null)),o.a.createElement(l.GridCell,{className:"site-thumbnails-container"},o.a.createElement(l.DropdownWithError,{options:n,label:d.get("SiteTemplate.Label"),value:t.newPortal.SiteTemplate,defaultDropdownValue:t.defaultTemplate,onSelect:this.onSelect.bind(this)}),o.a.createElement("hr",null)),o.a.createElement(l.GridCell,{className:"site-type-container"},o.a.createElement(l.GridCell,{columnSize:55},o.a.createElement(l.RadioButtons,{label:d.get("SiteType.Label"),onChange:this.onChange.bind(this,"IsChildSite"),buttonGroup:"siteType",value:t.newPortal.IsChildSite,options:[{label:d.get("Domain"),value:!1},{label:d.get("Directory"),value:!0}]})),o.a.createElement(l.GridCell,{columnSize:45},o.a.createElement(l.SingleLineInputWithError,{label:d.get("Directory"),className:"home-directory",inputId:"home-directory",value:t.newPortal.HomeDirectory,onChange:this.onChange.bind(this,"HomeDirectory"),labelType:"inline",error:!1})),o.a.createElement(l.GridCell,null,o.a.createElement(l.SingleLineInputWithError,{label:d.get("SiteUrl.Label"),inputId:"site-url",value:t.newPortal.SiteAlias,onChange:this.onChange.bind(this,"SiteAlias"),errorMessage:d.get("SiteAliasRequired.Error"),error:t.error.SiteAlias&&t.triedToSave}))),o.a.createElement(l.GridCell,{className:"user-as-admin"},o.a.createElement(l.Switch,{label:d.get("AssignCurrentUserAsAdmin.Label"),onText:d.get("SwitchOn"),offText:d.get("SwitchOff"),value:t.newPortal.UseCurrentUserAsAdmin,onChange:this.onChange.bind(this,"UseCurrentUserAsAdmin")}),o.a.createElement(l.Collapsible,{style:{float:"left"},isOpened:!t.newPortal.UseCurrentUserAsAdmin},o.a.createElement(l.GridSystem,{className:"with-right-border top-half"},o.a.createElement(l.GridCell,null,o.a.createElement(l.SingleLineInputWithError,{label:d.get("CreateSite_AdminUserName.Label"),inputId:"admin-user-name",value:t.newPortal.Username,onChange:this.onChange.bind(this,"Username"),errorMessage:d.get("UsernameRequired.Error"),error:t.error.Username&&t.triedToSave&&!t.newPortal.UseCurrentUserAsAdmin}),o.a.createElement(l.SingleLineInputWithError,{label:d.get("CreateSite_AdminFirstName.Label"),inputId:"admin-first-name",value:t.newPortal.Firstname,onChange:this.onChange.bind(this,"Firstname"),errorMessage:d.get("FirstNameRequired.Error"),error:t.error.Firstname&&t.triedToSave&&!t.newPortal.UseCurrentUserAsAdmin}),o.a.createElement(l.SingleLineInputWithError,{label:d.get("CreateSite_AdminLastName.Label"),inputId:"admin-last-name",value:t.newPortal.Lastname,onChange:this.onChange.bind(this,"Lastname"),errorMessage:d.get("LastNameRequired.Error"),error:t.error.Lastname&&t.triedToSave&&!t.newPortal.UseCurrentUserAsAdmin})),o.a.createElement(l.GridCell,null,o.a.createElement(l.SingleLineInputWithError,{label:d.get("CreateSite_AdminEmail.Label"),inputId:"admin-email",value:t.newPortal.Email,onChange:this.onChange.bind(this,"Email"),errorMessage:d.get("EmailRequired.Error"),error:t.error.Email&&t.triedToSave&&!t.newPortal.UseCurrentUserAsAdmin}),o.a.createElement(l.SingleLineInputWithError,{label:d.get("CreateSite_AdminPassword.Label"),inputId:"admin-password",value:t.newPortal.Password,type:"password",onChange:this.onChange.bind(this,"Password"),errorMessage:d.get("PasswordRequired.Error"),error:t.error.Password&&t.triedToSave&&!t.newPortal.UseCurrentUserAsAdmin}),o.a.createElement(l.SingleLineInputWithError,{label:d.get("CreateSite_AdminPasswordConfirm.Label"),inputId:"admin-password-confirm",type:"password",value:t.newPortal.PasswordConfirm,errorMessage:d.get("PasswordConfirmRequired.Error"),onChange:this.onChange.bind(this,"PasswordConfirm"),error:t.error.PasswordConfirm&&t.triedToSave&&!t.newPortal.UseCurrentUserAsAdmin}))))),o.a.createElement(l.GridCell,{className:"site-action-buttons"},o.a.createElement(l.Button,{type:"secondary",onClick:this.onCancel.bind(this)},d.get("cmdCancel")),o.a.createElement(l.Button,{type:"primary",disabled:this.state.creatingPortal,onClick:this.createPortal.bind(this)},d.get("cmdCreateSite"))))))}}])&&O(n.prototype,a),i&&O(n,i),t}();var I=Object(s.connect)(function(e){return{portalTemplates:e.exportPortal.templates}})(k);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=N(this,B(t).call(this))).state={editMode:!1,portalBeingExported:{}},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,r["Component"]),n=t,(a=[{key:"onAddNewSite",value:function(e){e.preventDefault(),this.navigateMap(1)}},{key:"onEditSite",value:function(){}},{key:"onExportPortal",value:function(e){this.props.dispatch(m.CommonExportPortalActions.setPortalBeingExported(e,this.navigateMap.bind(this,2)))}},{key:"navigateMap",value:function(e){this.props.dispatch(m.CommonVisiblePanelActions.selectPanel(e))}},{key:"cancelExport",value:function(e){void 0!==e&&e.preventDefault(),this.setState({portalBeingExported:{}}),this.navigateMap(0)}},{key:"render",value:function(){var e=this.props;return o.a.createElement("div",{className:"sites-Root"},o.a.createElement(l.PersonaBarPage,{isOpen:0===e.selectedPage||2===e.selectedPage},o.a.createElement(E,{onAddNewSite:this.onAddNewSite.bind(this),onExportPortal:this.onExportPortal.bind(this)})),1===e.selectedPage&&o.a.createElement(l.PersonaBarPage,{isOpen:1===e.selectedPage},o.a.createElement(I,{onCancel:this.navigateMap.bind(this,0)})),2===e.selectedPage&&o.a.createElement(l.PersonaBarPage,{isOpen:2===e.selectedPage},o.a.createElement(c.ExportPortal,{onCancel:this.cancelExport.bind(this)})))}}])&&R(n.prototype,a),i&&R(n,i),t}();G.PropTypes={dispatch:i.a.func.isRequired,selectedPage:i.a.number,selectedPageVisibleIndex:i.a.number};var F=Object(s.connect)(function(e){return{selectedPage:e.visiblePanel.selectedPage,selectedPageVisibleIndex:e.visiblePanel.selectedPageVisibleIndex,portalBeingExported:e.exportPortal.portalBeingExported}})(G);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,H(t).call(this))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"boilerplate-app personaBar-mainContainer"},o.a.createElement(F,null))}}])&&W(n.prototype,a),i&&W(n,i),t}();t.default=K},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),i=n(3),s=n(7),l={init:function(e){if("function"==typeof window.dnn[e]){var t=window.dnn[e]();s.a.init(t)}n(19)},dispatch:function(){throw new Error("dispatch method needs to be overwritten from the Redux store")}},c=n(4),u=n(11),p=n.n(u),d=n(13),f=n.n(d),m=n(6),h=Object(c.combineReducers)({visiblePanel:Object(m.visiblePanel)(),portal:Object(m.portal)(),exportPortal:Object(m.exportPortal)(),pagination:Object(m.pagination)()}),b=n(14),y=n(15),g=n.n(y),v=n(16),w=n.n(v),P=Object(b.createDevTools)(o.a.createElement(w.a,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},o.a.createElement(g.a,null))),S=!0;var E,C=n(17),x=n.n(C),O=Object(c.createStore)(h,E,Object(c.compose)(S?Object(c.applyMiddleware)(p.a):Object(c.applyMiddleware)(p.a,f()()),P.instrument()));l.dispatch=O.dispatch;var A=document.getElementById("sites-container");l.init("initSites"),Object(a.render)(o.a.createElement(i.Provider,{store:O},o.a.createElement(x.a,null)),A)}]);