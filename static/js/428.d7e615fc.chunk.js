"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[428],{2428:function(c,e,r){r.r(e);var a=r(72791),n=r(52813),t=r(65986),o=(r(72532),r(45612),r(18965),r(15429)),l=r(37385),s=r(80184);e.default=function(c){var e=c.data,u=(0,a.useRef)(null),i=(0,a.useRef)(null),m=(0,a.useRef)(null),d=(0,a.useRef)(null),p=(0,a.useRef)(null),f=(0,a.useRef)(null);return(0,a.useEffect)((function(){var c;i.current=null===(c=u.current)||void 0===c?void 0:c.querySelectorAll(".car"),m.current=u.current.querySelectorAll(".car_img"),d.current=u.current.querySelectorAll(".color"),p.current=u.current.querySelectorAll(".color_name"),f.current=m.current[0]}),[]),(0,s.jsx)(a.Fragment,{children:(0,s.jsx)(n.tq,{className:"tab_sedan",modules:[t.W_,t.pt,t.xW,t.tl],navigation:!0,pagination:{type:"progressbar"},effect:"fade",observer:!0,observeParents:!0,ref:u,onSlideChange:function(c){c.slides[c.activeIndex].querySelector(".color_name").classList.add("on")},children:e.map((function(c,e){return(0,s.jsxs)(n.o5,{children:[(0,s.jsx)("strong",{className:"main_car_title",children:c.carName}),(0,s.jsxs)("div",{className:"main_car_info",children:[(0,s.jsx)("div",{className:"car_outer",children:c.outerColor.map((function(e,n){return(0,s.jsx)(a.Fragment,{children:(0,s.jsx)("div",{className:"car_wrap",children:e.value.map((function(a,n){return(0,s.jsx)("div",{className:"car ".concat(0===n&&"on"),"data-car":"".concat(c.carName,"_").concat(e.type,"_").concat(n),children:(0,s.jsx)(l.Z,{className:"car_img",webpSrc:r(72471)("./".concat(c.carName,"/").concat(a.car,".webp")),imageSrc:r(82908)("./".concat(c.carName,"/").concat(a.car,".png")),alt:"".concat(c.carName," ").concat(a.colorName," \uc0c9 \ucc28\ub7c9 \uc774\ubbf8\uc9c0")})},n)}))})},n)}))}),(0,s.jsx)("div",{className:"color_outer",children:c.outerColor.map((function(e,n){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)("p",{children:e.material}),(0,s.jsx)("div",{className:"color_wrap",children:e.value.map((function(a,n){return(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"button",className:"color ".concat(0===n&&"u"===e.type&&"on"),"data-color":"".concat(c.carName,"_").concat(e.type,"_").concat(n),onClick:(t="".concat(c.carName,"_").concat(e.type,"_").concat(n),function(){for(var c=function(c){i.current[c].classList.remove("on"),d.current[c].classList.remove("on"),p.current[c].classList.remove("on"),t===i.current[c].dataset.car&&(i.current[c].classList.add("on"),d.current[c].classList.add("on"),p.current[c].classList.add("on"),new o.Z(m.current[c],{limit:window.innerWidth,els:m.current,prev_el:f.current,duration:300,callback:function(){f.current=m.current[c]}}))},e=0;e<i.current.length;e++)c(e)}),children:(0,s.jsx)(l.Z,{webpSrc:r(72471)("./".concat(c.carName,"/").concat(a.color,".webp")),imageSrc:r(82908)("./".concat(c.carName,"/").concat(a.color,".png")),alt:a.colorName})})},n);var t}))}),(0,s.jsx)("div",{className:"color_name_wrap",children:e.value.map((function(r,a){return(0,s.jsx)("span",{className:"color_name ".concat(0===a&&"u"===e.type&&"on"),"data-colorname":"".concat(c.carName,"_").concat(e.type,"_").concat(a),children:r.colorName},a)}))})]},n)}))})]})]},e)}))})})}}}]);
//# sourceMappingURL=428.d7e615fc.chunk.js.map