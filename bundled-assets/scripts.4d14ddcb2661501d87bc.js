!function(e){function t(t){for(var i,l,o=t[0],a=t[1],c=t[2],u=0,d=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);for(h&&h(t);d.length;)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,o=1;o<s.length;o++){var a=s[o];0!==r[a]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var i={},r={0:0},n=[];function l(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=i,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(s,i,function(t){return e[t]}.bind(null,i));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var h=a;n.push([3,1]),s()}([,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(2);var i=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},r=s(1);var n=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let s=0;s<e;s++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${s}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new r.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}},l=s(0),o=s.n(l);var a=class{constructor(){this.addSearchHtml(),this.resultsDiv=o()("#search-overlay__results"),this.openButton=o()(".js-search-trigger"),this.closeButton=o()(".search-overlay__close"),this.searchOverlay=o()(".search-overlay"),this.searchField=o()(".search-term"),this.events(),this.isOverlayOpen=!1,this.typingTimer,this.isSpinnerVisible=!1,this.previousValue}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),o()(document).on("keyup",this.keyPressDispatcher.bind(this)),this.searchField.on("keyup",this.typingLogic.bind(this))}typingLogic(){this.searchField.val()!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.val()?(this.isSpinnerVisible||(this.resultsDiv.html('<div class="spinner-loader"></div>'),this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),750)):(this.resultsDiv.html(""),this.isSpinnerVisible=!1)),this.previousValue=this.searchField.val()}getResults(){o.a.when(o.a.getJSON(universityData.root_url+"/wp-json/wp/v2/posts?search="+this.searchField.val()),o.a.getJSON(universityData.root_url+"/wp-json/wp/v2/pages?search="+this.searchField.val())).then((e,t)=>{var s=e[0].concat(t[0]);this.resultsDiv.html(`\n        <h2 class="search-overlay__section-title">General Information</h2>\n       ${s.length?' <ul class="link-list min-list">':"<p>No general information matches that search term</p>"}\n       \n        ${s.map(e=>`<li><a href="${e.link}">${e.title.rendered}</a></li>`).join("")}\n       ${s.length?"</ul>":""} \n        `),this.isSpinnerVisible=!1},()=>{this.resultsDiv.html("<p>Unexpected Error; Please try again</p>")})}keyPressDispatcher(e){console.log(e.keyCode),83!=e.keyCode||this.isOverlayOpen||o()("input, textarea").is(":focus")||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),o()("body").addClass("body-no-scroll"),this.searchField.val(""),setTimeout(()=>this.searchField.focus(),301),this.isOverlayOpen=!0}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),o()("body").removeClass("body-no-scroll"),this.isOverlayOpen=!1}addSearchHtml(){o()("body").append('\n    <div class="search-overlay ">\n    <div class="search-overlay__top">\n    <div class="container">\n    <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>\n    <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term" autocomplete="off">\n    <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>\n    </div>\n    </div>\n    <div class="container"> \n  <div id="search-overlay__results"> </div>\n</div>\n     </div>\n    ')}};new i,new n;new a}]);