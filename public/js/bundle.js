!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(t){return e[t]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}n.r(t),console.log("Main scripts included"),(new(function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.wrapper=$(".cmcrc__slider"),this.dots=document.querySelectorAll(".custom-crc"),this.defColor="#E5E5E5",this.activeClass="active",this.circle=document.querySelector("#cmcrc-vg"),this.idPrefix={dot:"crc-",line:"line-"},this.title=document.querySelector(".cmcrc__title"),this.lines=document.querySelectorAll(".main-line")}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"addLines",value:function(){this.dots.forEach(function(e){e.innerHTML='<div class="idss"></div>'})}},{key:"fnSlider",value:function(){var e=this;this.wrapper.slick({vertical:!0,arrows:!1,slidesToShow:4,autoplay:!1}),this.idPrefix,window.addEventListener("load",function(){e.circle.classList.add("zoomIn"),setTimeout(function(){e.wrapper.slick("slickPlay");var t=document.getElementById(e.idPrefix.line+1),n=document.getElementById(e.idPrefix.dot+1);n.classList.add(e.activeClass),n.style=null,t.style.opacity=1},1500)})}},{key:"fnClickDot",value:function(){var e=this.wrapper;this.dots.forEach(function(t){t.addEventListener("click",function(){var t=this.id.slice(4);e.slick("slickGoTo",t-1)})})}},{key:"fnSliderChanged",value:function(){var e=this;this.wrapper.on("afterChange",function(t,n,i){e.dots.forEach(function(t){t.style.fill=e.defColor,t.classList.remove(e.activeClass)}),e.lines.forEach(function(e){return e.style.opacity=0});var r=document.getElementById(e.idPrefix.line+(i+1)),o=document.getElementById(e.idPrefix.dot+(i+1));o.classList.add(e.activeClass),o.style=null,r.style.opacity=1})}},{key:"init",value:function(){var e=this;this.dots.forEach(function(t){t.style.fill=e.defColor}),this.addLines(),this.fnClickDot(),this.fnSlider(),this.fnSliderChanged()}}]),e}())).init(),window.addEventListener("load",function(){setTimeout(function(){var e=document.getElementById("scene");new Parallax(e)})}),window.addEventListener("load",function(){var e=document.querySelector(".loader");e.style.opacity=0,setTimeout(function(){e.remove()},1e3)})}]);