(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in t)n=t[i],null!=n&&(e[i]=n);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults)}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},i.prototype.start=function(){var t,e,i,n;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(n=this.boxes,e=0,i=n.length;i>e;e++)t=n[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},i.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},i.prototype.applyStyle=function(t,e){var i,n,o;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.customStyle(t,e,n,i,o)},i.prototype.resetStyle=function(){var t,e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],o.push(t.setAttribute("style","visibility: visible;"));return o},i.prototype.customStyle=function(t,e,i,n,o){return e?(t.style.visibility="hidden",t.style["-webkit-animation-name"]="none",t.style["animation-name"]="none"):(t.style.visibility="visible",t.style["-webkit-animation-name"]=window.getComputedStyle(t).getPropertyValue("webkitAnimationName"),t.style["animation-name"]=window.getComputedStyle(t).getPropertyValue("animationName")),i&&(t.style["-webkit-animation-duration"]=i,t.style["-moz-animation-duration"]=i,t.style["animation-duration"]=i),n&&(t.style["-webkit-animation-delay"]=n,t.style["-moz-animation-delay"]=n,t.style["animation-delay"]=n),o&&(t.style["-webkit-animation-iteration-count"]=o,t.style["-moz-animation-iteration-count"]=o,t.style["animation-iteration-count"]=o),t},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length)?this.stop():void 0},i.prototype.offsetTop=function(t){var e;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,i,n,o,s;return i=t.getAttribute("data-wow-offset")||this.config.offset,s=window.pageYOffset,o=s+this.element.clientHeight-i,n=this.offsetTop(t),e=n+t.clientHeight,o>=n&&e>=s},i.prototype.util=function(){return this._util||(this._util=new t)},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}).call(this);
//# sourceMappingURL=maps/wow.js.map