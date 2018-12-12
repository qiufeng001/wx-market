$script.ready(['lib'], function() {!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,t),o.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n,o){!function(e,t,n,o){function i(e){for(;e&&"undefined"!=typeof e.originalEvent;)e=e.originalEvent;return e}function s(t,n){var s,a,r,c,u,l,p,h,v,d=t.type;if(t=e.Event(t),t.type=n,s=t.originalEvent,a=e.event.props,d.search(/^(mouse|click)/)>-1&&(a=x),s)for(p=a.length,c;p;)c=a[--p],t[c]=s[c];if(d.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==d.search(/^touch/)&&(r=i(s),d=r.touches,u=r.changedTouches,l=d&&d.length?d[0]:u&&u.length?u[0]:o))for(h=0,v=M.length;v>h;h++)c=M[h],t[c]=l[c];return t}function a(t){for(var n,o,i={};t;){n=e.data(t,X);for(o in n)n[o]&&(i[o]=i.hasVirtualBinding=!0);t=t.parentNode}return i}function r(t,n){for(var o;t;){if(o=e.data(t,X),o&&(!n||o[n]))return t;t=t.parentNode}return null}function c(){F=!1}function u(){F=!0}function l(){Q=0,j.length=0,z=!1,u()}function p(){c()}function h(){v(),L=setTimeout(function(){L=0,l()},e.vmouse.resetTimerDuration)}function v(){L&&(clearTimeout(L),L=0)}function d(t,n,o){var i;return(o&&o[t]||!o&&r(n.target,t))&&(i=s(n,t),e(n.target).trigger(i)),i}function f(t){var n,o=e.data(t.target,Y);z||Q&&Q===o||(n=d("v"+t.type,t),n&&(n.isDefaultPrevented()&&t.preventDefault(),n.isPropagationStopped()&&t.stopPropagation(),n.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function m(t){var n,o,s,r=i(t).touches;r&&1===r.length&&(n=t.target,o=a(n),o.hasVirtualBinding&&(Q=q++,e.data(n,Y,Q),v(),p(),N=!1,s=i(t).touches[0],O=s.pageX,B=s.pageY,d("vmouseover",t,o),d("vmousedown",t,o)))}function g(e){F||(N||d("vmousecancel",e,a(e.target)),N=!0,h())}function w(t){if(!F){var n=i(t).touches[0],o=N,s=e.vmouse.moveDistanceThreshold,r=a(t.target);N=N||Math.abs(n.pageX-O)>s||Math.abs(n.pageY-B)>s,N&&!o&&d("vmousecancel",t,r),d("vmousemove",t,r),h()}}function b(e){if(!F){u();var t,n,o=a(e.target);d("vmouseup",e,o),N||(t=d("vclick",e,o),t&&t.isDefaultPrevented()&&(n=i(e).changedTouches[0],j.push({touchID:Q,x:n.clientX,y:n.clientY}),z=!0)),d("vmouseout",e,o),N=!1,h()}}function T(t){var n,o=e.data(t,X);if(o)for(n in o)if(o[n])return!0;return!1}function D(){}function y(t){var n=t.substr(1);return{setup:function(){T(this)||e.data(this,X,{});var o=e.data(this,X);o[t]=!0,S[t]=(S[t]||0)+1,1===S[t]&&V.bind(n,f),e(this).bind(n,D),H&&(S.touchstart=(S.touchstart||0)+1,1===S.touchstart&&V.bind("touchstart",m).bind("touchend",b).bind("touchmove",w).bind("scroll",g))},teardown:function(){--S[t],S[t]||V.unbind(n,f),H&&(--S.touchstart,S.touchstart||V.unbind("touchstart",m).unbind("touchmove",w).unbind("touchend",b).unbind("scroll",g));var o=e(this),i=e.data(this,X);i&&(i[t]=!1),o.unbind(n,D),T(this)||o.removeData(X)}}}var E,P,X="virtualMouseBindings",Y="virtualTouchID",k="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),M="clientX clientY pageX pageY screenX screenY".split(" "),I=e.event.mouseHooks?e.event.mouseHooks.props:[],x=e.event.props.concat(I),S={},L=0,O=0,B=0,N=!1,j=[],z=!1,F=!1,H="addEventListener"in n,V=e(n),q=1,Q=0;for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},P=0;P<k.length;P++)e.event.special[k[P]]=y(k[P]);H&&n.addEventListener("click",function(t){var n,o,i,s,a,r,c=j.length,u=t.target;if(c)for(n=t.clientX,o=t.clientY,E=e.vmouse.clickDistanceThreshold,i=u;i;){for(s=0;c>s;s++)if(a=j[s],r=0,i===u&&Math.abs(a.x-n)<E&&Math.abs(a.y-o)<E||e.data(i,Y)===a.touchID)return t.preventDefault(),void t.stopPropagation();i=i.parentNode}},!0)}(e,t,n),function(e){e.mobile={}}(e),function(e,t){var o={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,o),e.extend(e.mobile.support,o)}(e),function(e,t,o){function i(t,n,i,s){var a=i.type;i.type=n,s?e.event.trigger(i,o,t):e.event.dispatch.call(t,i),i.type=a}var s=e(n),a=e.mobile.support.touch,r="touchmove scroll",c=a?"touchstart":"mousedown",u=a?"touchend":"mouseup",l=a?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){n=t,i(s,n?"scrollstart":"scrollstop",e)}var n,o,s=this,a=e(s);a.bind(r,function(i){e.event.special.scrollstart.enabled&&(n||t(i,!0),clearTimeout(o),o=setTimeout(function(){t(i,!1)},50))})},teardown:function(){e(this).unbind(r)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),o=!1;n.bind("vmousedown",function(a){function r(){clearTimeout(l)}function c(){r(),n.unbind("vclick",u).unbind("vmouseup",r),s.unbind("vmousecancel",c)}function u(e){c(),o||p!==e.target?o&&e.preventDefault():i(t,"tap",e)}if(o=!1,a.which&&1!==a.which)return!1;var l,p=a.target;n.bind("vmouseup",r).bind("vclick",u),s.bind("vmousecancel",c),l=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(o=!0),i(t,"taphold",e.Event("taphold",{target:p}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),s.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,o=t.pageYOffset,i=e.clientX,s=e.clientY;return 0===e.pageY&&Math.floor(s)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(i)>Math.floor(e.pageX)?(i-=n,s-=o):(s<e.pageY-o||i<e.pageX-n)&&(i=e.pageX-n,s=e.pageY-o),{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,o=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,o=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y]}},handleSwipe:function(t,n,o,s){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var a=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return i(o,"swipe",e.Event("swipe",{target:s,swipestart:t,swipestop:n}),!0),i(o,a,e.Event(a,{target:s,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,o=e(n),i={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=i,i.start=function(t){if(!e.event.special.swipe.eventInProgress){e.event.special.swipe.eventInProgress=!0;var o,a=e.event.special.swipe.start(t),r=t.target,c=!1;i.move=function(t){a&&!t.isDefaultPrevented()&&(o=e.event.special.swipe.stop(t),c||(c=e.event.special.swipe.handleSwipe(a,o,n,r),c&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(a.coords[0]-o.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())},i.stop=function(){c=!0,e.event.special.swipe.eventInProgress=!1,s.off(l,i.move),i.move=null},s.on(l,i.move).one(u,i.stop)}},o.on(c,i.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,0===t.length&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(c,n.start),n.move&&s.off(l,n.move),n.stop&&s.off(u,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
"use strict";function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _get=function(e,t,i){for(var n=!0;n;){var r=e,o=t,s=i;n=!1,null===r&&(r=Function.prototype);var a=Object.getOwnPropertyDescriptor(r,o);if(void 0!==a){if("value"in a)return a.value;var l=a.get;if(void 0===l)return;return l.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,i=s,n=!0,a=c=void 0}},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),ID=1,Command=function(){function e(t){_classCallCheck(this,e),this.id=t.id||(new Date).getTime().toString()+ID++,this.preparePlay()}return _createClass(e,[{key:"preparePlay",value:function(){this.playDefer=$.Deferred()}},{key:"renderDOM",value:function(){var e=$(this.render());return e.data("source",this),e}},{key:"playing",get:function(){return this.playDefer.promise()}}]),e}(),ClickCommand=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.type="click",this.label=e.label,this.interrupt=e.interrupt,this.lastModified=e.lastModified||(new Date).getTime()}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return'<div  id="item-'+this.id+'" class=\'command-click history-item\'>\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" xml:space="preserve"><g fill=\'#ffffff\'><path d="M383,266.5c-2.6,0-5.3-1-7.3-3l-254-245.5c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3l254,245.5   c4.2,4,4.3,10.7,0.3,14.9C388.5,265.5,385.8,266.5,383,266.5z" /><path d="M129,512c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9l254-245.5c4.2-4,10.9-3.9,14.9,0.3   c4,4.2,3.9,10.9-0.3,14.9L136.3,509C134.3,511,131.6,512,129,512z"/></g></svg>\n            <span class=\'action\'><span class=\'delete\'>长按删除</span></span>\n        </div>'}},{key:"play",value:function(){var e=this;return tt.timelineResume(this,function(){tt.emit("commandEnd"),e.playDefer.resolve()}),this.playing}},{key:"stop",value:function(){}}]),t}(Command),AudioCommand=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.type="voice",this.duration=e.duration,this.localId=e.localId,this.localId||this.defer.resolve()}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){for(var e=Math.min(Math.ceil(this.duration/10),6),t=[],i=0;e>i;i++)t.push("<i></i>");return'\n            <div id="item-'+this.id+"\" class='audio-record history-item' duration=\""+e+'">\n                '+t.join("")+"\n                <span class='action'><span class='delete'>长按删除</span><span class='retake' data-ing=\"重录中\">长按重录</span></span>\n            </div>\n        "}},{key:"uploading",value:function(e){var t=this;clearTimeout(this.uploadingTimeout),this.uploadingTimeout=setTimeout(function(){console.error("upload timeout!",t),e&&e.timeout&&e.timeout()},12e4)}},{key:"resolve",value:function(e){clearTimeout(this.uploadingTimeout),this.mediaId=e,this.defer.resolve()}},{key:"reject",value:function(){this.defer.reject()}},{key:"play",value:function(){var e=this;return clearTimeout(e._wxVoiceEnd),setTimeout(function(){wx.playVoice({localId:e.localId}),tt.one("voiceEnd_"+e.localId,function(){clearTimeout(e._wxVoiceEnd),tt.emit("voiceEnd"),e.playDefer.resolve()}),e._wxVoiceEnd=setTimeout(function(){tt.emit("voiceEnd"),e.playDefer.resolve()},1e3*(e.duration+1))}),this.playing}},{key:"stop",value:function(){wx.stopVoice({localId:this.localId})}},{key:"localId",set:function(e){this._localId=e,this.lastModified=(new Date).getTime(),this.defer=$.Deferred()},get:function(){return this._localId}},{key:"promise",get:function(){return this.defer.promise()}}]),t}(Command),RemoteAudioCommand=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.resolve(e.mediaId),this.media_url=e.media_url,this.lastModified=e.lastModified}return _inherits(t,e),_createClass(t,[{key:"play",value:function(){var e=this,t=document.getElementById("track");return t.pause(),t.src=this.path,t.play(),this.sound=t,$(t).one("ended error",function(){-1!=t.src.indexOf(e.path)&&(tt.emit("voiceEnd"),e.playDefer.resolve())}),this.playing}},{key:"stop",value:function(){this.sound&&this.sound.pause()}},{key:"path",get:function(){return TTCDN+"/"+this.media_url}}]),t}(AudioCommand),CommandCollection=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.lastSync=0,this.index=e,this.defer=$.Deferred(),this.defer.resolve(),this.lastRemoved=0}return _inherits(t,e),_createClass(t,[{key:"toArray",value:function(){return this.slice(0)}},{key:"prepare",value:function(){return $.when.apply($.when,this.records.map(function(e){return e.promise}))}},{key:"push",value:function(e){return e.pageIndex=this.index,_get(Object.getPrototypeOf(t.prototype),"push",this).call(this,e)}},{key:"replace",value:function(e,t){var i=this.indexOf(e);this.splice(i,1,t),t.pageIndex=this.index,$("#item-"+e.id).replaceWith(t.renderDOM())}},{key:"remove",value:function(e){var t=this.indexOf(e);this.splice(t,1),$("#item-"+e.id).remove(),this.lastRemoved=(new Date).getTime()}},{key:"pop",value:function(){return this.lastRemoved=(new Date).getTime(),_get(Object.getPrototypeOf(t.prototype),"pop",this).call(this)}},{key:"sync",value:function(){if(this.isSynced)return console.log("[page "+this.index+"]no need to sync"),this.defer.resolve(),this.promise;if("pending"==this.defer.state())return console.log("[page "+this.index+"]pending"),this.promise;this.defer=$.Deferred(),console.log("[page "+this.index+"]start....");var e=this;return this.prepare().done(function(){var t={};return t[e.index]=e.toArray(),$.ajax({url:backend+"/update",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({data:t}),success:function(t){console.log("[page "+e.index+"]sync success"),e.lastSync=e.lastModified,e.defer.resolve()},error:function(t,i){console.error("update error",arguments);var n=this;return 401==t.status?void e.defer.reject({code:401}):(this.retry=(this.retry||0)+1,void(this.retry<3?setTimeout(function(){$.ajax(n)},3e3):e.defer.reject()))}})}),this.promise}},{key:"submit",value:function(){}},{key:"play",value:function(){var e=this;return this.playStopped=!1,this.reduce(function(t,i){return i.preparePlay(),t.done(function(){return e.playStopped?void i.playDefer.reject():($("#item-"+i.id).tap(),void(e.lastPlaying=i))}).fail(function(){i.playDefer.reject()}),i.playing},{done:function(e){return e(),this},fail:function(){}})}},{key:"stopPlay",value:function(){this.playStopped=!0,this.lastPlaying&&(this.lastPlaying.stop(),this.lastPlaying.playDefer.reject())}},{key:"lastModified",get:function(){return Math.max.apply(null,this.map(function(e){return e.lastModified||0}).concat([this.lastRemoved]))}},{key:"records",get:function(){return this.filter(function(e){return"voice"==e.type})}},{key:"isSynced",get:function(){return this.lastSync==this.lastModified}},{key:"promise",get:function(){return this.defer.promise()}}]),t}(Array);CommandCollection.parseCommand=function(e){switch(!0){case"voice"==e.type&&null!=e.media_url:return new RemoteAudioCommand(e);case"voice"==e.type:return new AudioCommand(e);case"click"==e.type:return new ClickCommand(e)}};
function renderList(t){return(t||[]).map(function(t){return renderElement(t)})}function renderElement(t){return t.renderDOM()}function upload(t,e){console.log("uploading..."),t.localId||console.error("empty record"),t.uploading({timeout:function(){t.uploadTimeout=!0,t.timeStamp=(new Date).getTime(),tt.emit("uploadVoiceFail",t)}}),wx.uploadVoice({localId:t.localId,isShowProgressTips:0,success:function(e){return console.log("uploaded...",e),t.uploadTimeout?void console.error("success after timeout",t,((new Date).getTime()-t.timeStamp)/1e3):(t.resolve(e.serverId),void tt.syncSlide(tt.getIndex()))},fail:function(o){return t.duration<2?void tt.emit("uploadVoiceFail",t):t.uploadTimeout?void console.error("fail after timeout",t,((new Date).getTime()-t.timeStamp)/1e3):(console.error("upload voice fail",e,t.localId,t.duration,t.pageIndex,o),void(e>0?setTimeout(function(){upload(t,e-1)},1e3):tt.emit("uploadVoiceFail",t)))}})}function toast(t,e,o){var i=$("#toast .message").html(t).parent().clearQueue().fadeIn(200).delay(e||2e3).fadeOut(200);o&&(o.constructor==Object?i.css(o):i.css("top",o))}var TTCDN=window.CDN||"//v5.ppj.io",trackDefer=$.Deferred();wx.error(function(t){console.error("wx.error",t.errMsg),window.tt&&window.tt.inited&&(new Date).getTime()-window.tt.inited>5e3||/invalid/.test(t.errMsg)&&setTimeout(function(){window.location.replace(window.location.href)},500)}),$(document.body).on("complete",function(){loadAssets.debug||(console.log=function(){}),window.waitAudioContext&&window.waitAudioContext(function(){var t=document.getElementById("track");t.pause(),t.src=TTCDN+"/common/silence.mp3?v=2";var e=function(){setTimeout(function(){trackDefer.resolve(),t.removeEventListener("canplaythrough",e)})};t.addEventListener("canplaythrough",e),t.play(),setTimeout(function(){tt.emit("init")})})}),$(document.body).on("playSlide",function(t,e){trackDefer.promise().done(function(){tt.initSlide(e)})}),$(document.body).on("playTimeline",function(t,e){trackDefer.promise().done(function(){tt.playSlide(e)})}),$(document.body).on("playTimeline",function(t,e){}),$(document.body).on("initSlide",function(t,e){tt.beforeInit(e)}),$(document.body).on("finale",function(){tt.finale()}),$(document.body).on("onPause",function(t,e,o){tt.getIndex()===o&&(console.log("onPause"),tt.recordClick(e))}),$(document.body).on("beforeOnPause",function(t,e,o){return tt.getIndex()===o?(tt.lastPause=e,tt.isPreviewing?!1:void 0):void 0}),$(document.body).on("slideComplete",function(t,e){return tt.trigger("slideChange",1)}),$(document.body).on("beforeRevealNext",function(t,e,o){return tt.trigger("slideChange",1)}),$(document.body).on("beforeRevealPrev",function(t,e,o){return tt.trigger("slideChange",-1)}),$.ajaxSetup({xhrFields:{withCredentials:!0}});var RECORD_TIMEOUT=59;window.tt=function(){var t,e,o={};return{inited:!1,action:o,isRecording:!1,event:$({}),init:function(t){if(this.inited=(new Date).getTime(),t&&499==t.err_code&&!/debug/.test(location.href))return void(window.location.href=t.redirect_url);t&&401==t.err_code&&(alert("获取权限失败！请重新扫描录课二维码"),this.inited=!1),t&&t.data&&(o=t.data,this.action=o=Object.keys(t.data).reduce(function(e,o){return e[o]=new CommandCollection(o),t.data[o].map(function(t){e[o].push(CommandCollection.parseCommand(t))}),e[o].lastSync=e[o].lastModified,e},{}));var e=this;wx.onVoicePlayEnd({success:function(t){e.emit("voiceEnd_"+t.localId)}})},emit:function(){this.event.trigger.apply(this.event,arguments)},on:function(t,e){return this.event.on(t,function(){return e&&e.apply(void 0,Array.prototype.slice.call(arguments,1))})},trigger:function(){return this.event.triggerHandler.apply(this.event,arguments)},one:function(t,e){this.event.one(t,function(){e&&e.apply(void 0,Array.prototype.slice.call(arguments,1))})},getPage:function(){return o[this.getIndex()]},getIndex:function(){return frame.getIndex()},getLength:function(){return window.slides.length},getTimeline:function(){return window.slides[this.getIndex()].window.main},getSlideBody:function(){return window.slides[this.getIndex()].slideBody},getSlide:function(){return window.slides[this.getIndex()]},startRecord:function(){function o(e){wx.startRecord({success:function(){console.log("start record"),i.emit("startRecord"),i.isRecording=!0,i.isWaiting=!1,t=(new Date).getTime(),i.lastRecording=setTimeout(function(){i.stopRecord(function(){i.startRecord()})},1e3*RECORD_TIMEOUT)},fail:function(t){switch(i.isWaiting=!1,!0){case e&&("startRecord:fail"==t.errMsg||"startRecord:recording"==t.errMsg):wx.stopRecord(),console.error(t.errMsg,e),i.isRecording=!1,setTimeout(function(){o(e-1)},200);break;case"startRecord:invalid appid"==t.errMsg:console.error(t.errMsg,window.wxConfig),i.emit("failRecord");break;default:console.error("start record error",arguments),i.emit("failRecord")}}})}if(e&&wx.stopVoice({localId:e.localId}),!this.inited)return void toast("获取权限失败<br>请重新扫描录课二维码");var i=this;return console.log("start"),i.isRecording||i.isWaiting?void console.log("locked"):(i.isWaiting=!0,i.emit("beforeRecord"),void setTimeout(function(t){o(2)}))},stopRecord:function(e){function o(e){console.log("success to get a record",e.localId);var o=((new Date).getTime()-t)/1e3;if(tt.retaking){var i=tt.retaking,r=new AudioCommand({localId:e.localId,duration:o});return tt.action[i.pageIndex].replace(i,r),tt.retaking=null,tt.emit("retaken",r),r}return n.recordVoice(e.localId,o)}function i(t){wx.stopRecord({success:function(t){if(n.emit("beforeStopRecord"),n.isRecording=!1,n.isWaitingStop=!1,!t.localId)return void console.log("stopped without a record");var i=o(t);upload(i,2),e&&e()},fail:function(){n.isWaitingStop=!1,console.error("stop record",t,arguments),t?setTimeout(function(){i(t-1)},1e3):(console.error("stop record still",t,arguments),tt.emit("failStopRecord"))}})}var n=this;if(this.isRecording&&!n.isWaitingStop)return console.log("stop"),n.isWaitingStop=!0,clearTimeout(this.lastRecording),window.wx?void i(2):(console.log("try to end"),o({localId:(new Date).getTime()}).resolve("123"),void(e&&e()))},addCommand:function(t){var e=this.getIndex();return o[e]||(o[e]=new CommandCollection(e)),console.log("add command",t),o[e].push(t),this.emit("addCommand",[t]),t},remove:function(t,e){o[t]&&(o[t][e]=null)},recordClick:function(t){var e=this;this.isRecording?this.stopRecord(function(){e.addCommand(new ClickCommand({label:t,interrupt:!0})),e.startRecord()}):this.addCommand(new ClickCommand({label:t}))},recordVoice:function(t,e){return this.addCommand(new AudioCommand({localId:t,duration:e}))},initSlide:function(t){var e=this;e.emit("initSlide",[t])},playSlide:function(t){this.emit("playSlide",[t])},beforeInit:function(t){var e=window.slides[t],o=e.transition||{};e.transition={effect:o.effect}},playVoice:function(t){console.log("play",t.id),e&&e.stop(),e=t,t.play()},stopVoice:function(t){console.log("stop",t.id),t.stop()},popCommand:function(){var t=this.getIndex();o[t].pop()},syncSlide:function(t){var e=o[t];e&&e.sync().fail(function(t){t&&401==t.code&&(console.error("sync slide 401"),toast("同步数据失败<br>请重新扫描录课二维码"))}).done(function(){$.ajax({url:backend+"/save",type:"POST",timeout:2e4})})},finale:function(){this.emit("end")},submit:function(){var t=Object.keys(o).map(function(t){var e=o[t];return e.sync()}),e=$.Deferred();return $.when.apply($.when,t).done(function(){$.ajax({url:backend+"/save",type:"POST",timeout:2e4}).done(function(t){e.resolve(t),toast("提交成功",void 0,"80%")}).fail(function(t,o,i){console.error("submit fail",o,i),"timeout"==o?toast("正在生成中，请稍后重试",void 0,"80%"):toast("保存失败，请重试",void 0,"80%"),e.reject(t)})}),e.promise()},preview:function(t){this.emit("preview",t)},stopPreview:function(){this.emit("stopPreview")},timelineResume:function(t,e){var o=tt.getTimeline();return o?void(o.paused()?(o.resume2(),e()):$(document.body).one("beforeOnPause",function(t,i,n){return o.resume2(),e(),!1})):void console.error("getTimeline error",t,tt.getIndex())}}}(),tt.on("initSlide",function(t){var e=tt.action[t]||[];$("#edit-info").attr("data-total",window.slides.length).attr("data-current",t+1).addClass("ff").removeClass("ff"),$("#edit-history").contents().remove(),$("#edit-history").append(renderList(e)),e.length?$("#preview").show():$("#preview").hide(),tt.isPreviewing&&(tt.preview(!0),$("#preview").addClass("ing"))}),tt.on("playSlide",function(t){for(var e=tt.getTimeline(),o=tt.action[t]||[],t=o.length-1;t>=0;t--)if("click"==o[t].type){console.log("@@@",o[t].label),tt.getSlideBody().off("click.onPause"),e.gotoAndPauseLabel(o[t].label,!1);break}tt.continueRecording&&(tt.startRecord(),tt.continueRecording=!1)}),tt.on("beforeRecord",function(){$("#edit-history .history-item.playing").removeClass("playing"),$("#record-btn").addClass("recording"),tt.lastRecordingTween=TweenLite.set("#record-progress",{drawSVG:"0 0%"})}),tt.on("startRecord",function(){tt.lastRecordingTween=TweenLite.fromTo("#record-progress",RECORD_TIMEOUT,{drawSVG:"0 0%"},{drawSVG:"0% 100%"})}),tt.on("failRecord",function(){tt.syncSlide(tt.getIndex()),toast("录音调用失败，请刷新页面重试",4e3),tt.lastRecordingTween&&tt.lastRecordingTween.kill(),$("#record-btn").removeClass("recording")}),tt.on("failStopRecord",function(){tt.syncSlide(tt.getIndex()),toast("暂停录音失败，请重试或刷新页面",4e3)}),tt.on("beforeStopRecord",function(){tt.lastRecordingTween&&tt.lastRecordingTween.kill(),$("#record-btn").removeClass("recording")}),tt.on("addCommand",function(t){$("#edit-history").append(renderElement(t)),$("#preview").show()}),tt.on("retaken",function(t){$("#edit-history #item-"+t.id).removeClass("retaking").tap()}),tt.on("voiceEnd",function(){$("#edit-history .audio-record.playing").addClass("end")}),tt.on("commandEnd",function(){$("#edit-history .command-click.playing").removeClass("playing")}),tt.on("end",function(){tt.isRecording&&tt.stopRecord(),tt.isPreviewing&&tt.stopPreview(),tt.syncSlide(tt.getIndex()),$("#finale").css("display","block"),setTimeout(function(){$("#finale").removeClass("hidden")},200)}),tt.on("preview",function(t){var e=tt.getTimeline();tt.isPreviewing=!0,e&&(e.gotoAndPauseLabelBefore("begin",!1),e.restart2()),$("#edit-history .audio-record.playing").removeClass("end").removeClass("playing"),tt.getPage()&&tt.getPage().play().done(function(){console.log("preview end!!!"),t&&frame.nextSlide(tt.getIndex())||tt.emit("previewStopped")}).fail(function(){tt.emit("previewStopped"),tt.emit("initSlide",tt.getIndex())})}),tt.on("stopPreview",function(){tt.getPage()&&tt.getPage().stopPlay(),tt.emit("previewStopped")}),tt.on("previewStopped",function(){$("#preview").removeClass("ing"),tt.isPreviewing=!1}),tt.on("uploadVoiceFail",function(t){toast("录音无效，已删除"),t.resolve(),tt.action[t.pageIndex].remove(t)}),tt.on("init",function(){for(var t=tt.getLength(),e=$("<div>"),o=0;t>=o;o++)e.append("<li class='page-ref' data-index='"+(o+1)+"'></li>");var i=$("#toc ul");i.contents().remove(),i.append(e.contents())}),tt.on("slideChange",function(t){if(tt.isRecording){toast("即将翻页，正在自动保存",5e3);var e=tt.getIndex();return console.log("slide complete",e),setTimeout(function(){tt.stopRecord(function(){toast.dismiss(),tt.syncSlide(e),1==t&&frame.nextSlide(e)&&(tt.continueRecording=!0),-1==t&&frame.prevSlide(e)})},1e3),!1}}),$("#edit-history").on("tap",".history-item",function(t){!$("#edit-history").hasClass("expand")&&!$(this).is(":last-child")&&!$(this).is(".playing")}),$("#edit-history").on("tap",function(t){var e=t.target;$(this).hasClass("expand")&&this==e&&$(this).removeClass("expand")}),$("#edit-history").on("tap",".audio-record",function(){var t=$(this).data("source"),e=this;return t?void($(this).hasClass("retaking")||($(this).hasClass("playing")?(tt.stopVoice(t),setTimeout(function(){$(e).removeClass("playing")},100)):(tt.playVoice(t),setTimeout(function(){$(e).siblings(".playing").removeClass("playing").removeClass("end"),$(e).addClass("playing")},100)))):void console.error("empty source",$(this).html())}),$("#edit-history").on("tap",".command-click",function(t){if(!t.originalEvent){var e=$(this).data("source");e.play()}}),$("#edit-history").on("tap",".command-click:last-child",function(){$(this).toggleClass("playing")}),$("#edit-history").on("taphold",".history-item:last-child",function(t){if($(this).remove(),tt.popCommand(),tt.syncSlide(tt.getIndex()),t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation(),$(this).one("mouseup touchend",function(t){t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation()}),$(this).hasClass("command-click")){var e=$(this).data("source");console.log("rm",e.label);var o=tt.getTimeline();o.gotoAndPauseLabelBefore(e.label,!1)}return!0}),$("#edit-history").on("taphold",".audio-record",function(t){$(this).is(":last-child")||(tt.startRecord(),tt.retaking=$(this).data("source"),$(this).addClass("retaking"),t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation())}),$("#edit-history").on("tap",".audio-record.retaking",function(t){tt.startRecord()}),$("#submit").on("tap",function(){$(this);$(this).data("original",$(this).text()),$(this).text($(this).attr("data-ing")),tt.submit().done(function(){$(this).text($(this).data("original"))}.bind(this)).fail(function(){$(this).text($(this).data("original"))}.bind(this))}),$("#back-edit").on("tap",function(){$("#finale").addClass("hidden").css("display","none")}),$("#finale").on("click",function(t){$(t.target).is("button")||$("#finale").addClass("hidden").css("display","none")}),$("#preview").on("click",function(){$(this).hasClass("ing")?(tt.stopPreview(),$(this).removeClass("ing")):(tt.preview(),$(this).addClass("ing"))}),$("#replay").on("click",function(){$("#finale").click(),$("#preview").addClass("ing"),tt.isPreviewing=!0,0==tt.getIndex()?tt.preview(!0):frame.jumpSlide(0)}),$("#record-btn").on("click",function(){tt.isRecording?tt.stopRecord():tt.startRecord()}),$("#edit-info").on("click",function(){$("#toc").css("display","block");var t=$("#toc ul")[0];t.offsetHeight<t.scrollHeight&&$(t).addClass("with-scroller"),setTimeout(function(){$("#toc").removeClass("hidden")},200)}),$(".scroller").on("click",function(t){var e=$($.attr(this,"target"))[0],o=$(t.target).hasClass("prev")?-1:1;e.scrollTop=e.scrollTop+o*e.offsetHeight,t.stopPropagation(),t.preventDefault()}),$("#toc").on("click",function(t){$("#toc").addClass("hidden").css("display","none")}),$("#toc").on("click",".page-ref",function(){var t=$.attr(this,"data-index");frame.jumpSlide(parseInt(t)-1)}),tt.on("init",function(){tt.getPage()&&tt.getPage().length||toast("点击开始录音  &#10140",4e3,{width:"auto",top:"auto",right:"120px",bottom:"50px"})}),$.event.special.tap.emitTapOnTaphold=!1,toast.dismiss=function(){$("#toast").clearQueue().fadeOut(0)};
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function e(e,t,s,r){return s=parseFloat(s)-parseFloat(e),r=parseFloat(r)-parseFloat(t),Math.sqrt(s*s+r*r)}function t(e){return"string"!=typeof e&&e.nodeType||(e=_gsScope.TweenLite.selector(e),e.length&&(e=e[0])),e}function s(e,t,s){var r,i,o=e.indexOf(" ");return-1===o?(r=void 0!==s?s+"":e,i=e):(r=e.substr(0,o),i=e.substr(o+1)),r=-1!==r.indexOf("%")?parseFloat(r)/100*t:parseFloat(r),i=-1!==i.indexOf("%")?parseFloat(i)/100*t:parseFloat(i),r>i?[i,r]:[r,i]}function r(s){if(!s)return 0;s=t(s);var r,i,o,a,h,f,u,l=s.tagName.toLowerCase();if("path"===l){a=s.style.strokeDasharray,s.style.strokeDasharray="none",r=s.getTotalLength()||0;try{i=s.getBBox()}catch(p){}s.style.strokeDasharray=a}else if("rect"===l)r=2*s.getAttribute("width")+2*s.getAttribute("height");else if("circle"===l)r=2*Math.PI*parseFloat(s.getAttribute("r"));else if("line"===l)r=e(s.getAttribute("x1"),s.getAttribute("y1"),s.getAttribute("x2"),s.getAttribute("y2"));else if("polyline"===l||"polygon"===l)for(o=s.getAttribute("points").match(n)||[],"polygon"===l&&o.push(o[0],o[1]),r=0,h=2;h<o.length;h+=2)r+=e(o[h-2],o[h-1],o[h],o[h+1])||0;else"ellipse"===l&&(f=parseFloat(s.getAttribute("rx")),u=parseFloat(s.getAttribute("ry")),r=Math.PI*(3*(f+u)-Math.sqrt((3*f+u)*(f+3*u))));return r||0}function i(e,s){if(!e)return[0,0];e=t(e),s=s||r(e)+1;var i=a(e),o=i.strokeDasharray||"",n=parseFloat(i.strokeDashoffset),h=o.indexOf(",");return 0>h&&(h=o.indexOf(" ")),o=0>h?s:parseFloat(o.substr(0,h))||1e-5,o>s&&(o=s),[Math.max(0,-n),Math.max(0,o-n)]}var o,a=document.defaultView?document.defaultView.getComputedStyle:function(){},n=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;o=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.0.11",global:!0,overwriteProps:["drawSVG"],init:function(e,t,o){if(!e.getBBox)return!1;var a,n,h,f=r(e)+1;return this._style=e.style,t===!0||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",a=i(e,f),n=s(t,f,a[0]),this._length=f+10,0===a[0]&&0===n[0]?(h=Math.max(1e-5,n[1]-f),this._dash=f+h,this._offset=f-a[1]+h,this._addTween(this,"_offset",this._offset,f-n[1]+h,"drawSVG")):(this._dash=a[1]-a[0]||1e-6,this._offset=-a[0],this._addTween(this,"_dash",this._dash,n[1]-n[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-n[0],"drawSVG")),!0},set:function(e){this._firstPT&&(this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,1===e||0===e?this._style.strokeDasharray=this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}}),o.getLength=r,o.getPosition=i}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["../TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=t())}("DrawSVGPlugin");})