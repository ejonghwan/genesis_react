"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[83],{69288:function(e,s,t){var n=t(72791),i=t(80184);s.Z=function(e){var s=e.name,t=e.children,c=(0,n.useRef)(null);return(0,n.useEffect)((function(){c.current.classList.add("on")}),[]),(0,i.jsx)("section",{className:"content ".concat(s),ref:c,children:t})}},42364:function(e,s,t){t.d(s,{Z:function(){return r}});var n=t.p+"static/media/tac.4ae3dd9e6fd9958d4601.mp4",i=t.p+"static/media/yout.26399237db6a6befd11e.mp4",c=t.p+"static/media/conc.8f46588da3182fbc64d0.mp4",l=t.p+"static/media/comm.36bcb69322915f6277df.mp4",a=t(80184),r=function(e){var s=e.name;return(0,a.jsx)("article",{className:"g_inner full sub_page",children:(0,a.jsxs)("section",{className:"sub_visual",children:[(0,a.jsxs)("h2",{className:"sub_visual_title",children:["GENESIS ",s.toUpperCase()]}),(0,a.jsx)("figure",{className:"main_visual_slide_video",children:(0,a.jsx)("video",{preload:"",src:"gallery"===s?n:"youtube"===s||"member"===s?i:"community"===s?l:"contact"===s?c:null,autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]})})}},16519:function(e,s,t){t.r(s);var n=t(70885),i=t(72791),c=t(59434),l=t(69288),a=t(55190),r=t(68495),u=t(42364),d=t(80184);s.default=function(){var e,s,t,o,p,m=(0,c.v9)((function(e){return e.youtubeReducer})),h=m.youtube,x=m.loading,f=(0,c.I0)(),j=(0,i.useRef)(null),b=(0,i.useState)(0),v=(0,n.Z)(b,2),y=v[0],_=v[1],N=function(e){return function(s){j.current.open()(),_(e)}};return(0,i.useEffect)((function(){f({type:"YOUTUBE_LOAD_REQUEST",payload:{key:"AIzaSyChzicx_fRjO6YQhLL-C8tDxCq0E46sxtk",list:"PLQytOX-GQNjpnWvXUwth7PTdoEA2kZX16",num:10}})}),[f]),(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(u.Z,{name:"youtube"}),(0,d.jsx)(l.Z,{name:"youtube sub_page",children:x?(0,d.jsx)(r.Z,{}):(0,d.jsx)("div",{className:"g_inner",children:(0,d.jsxs)("article",{className:"you_wrap",children:[(0,d.jsxs)("section",{className:"you_head",children:[(0,d.jsx)("strong",{className:"you_head_tit",children:"\uc81c\ub124\uc2dc\uc2a4"}),(0,d.jsxs)("p",{className:"sub_txt",children:[(0,d.jsx)("a",{href:"",role:"button",children:"@GenesisWorldwide"}),(0,d.jsx)("span",{children:"\uad6c\ub3c5\uc790 13.6\ub9cc\uba85"}),(0,d.jsx)("span",{children:"\ub3d9\uc601\uc0c1 502\uac1c"})]}),(0,d.jsx)("p",{className:"sub_txt",children:"\ucd5c\uace0 \uc218\uc900\uc758 \uc131\ub2a5, \ub514\uc790\uc778, \uc548\uc804\uacfc \ud601\uc2e0\uc73c\ub85c \uc9c0\uc18d \uac00\ub2a5\ud55c \ubbf8\ub798\ub97c \uadf8\ub9ac\ub294 \uae00\ub85c\ubc8c \ub7ed\uc154\ub9ac \ube0c\ub79c\ub4dc \uc81c\ub124\uc2dc\uc2a4(GENESIS) \uacf5\uc2dd \uacc4\uc815\uc785\ub2c8\ub2e4. \ub192\uc740 \ud488\uaca9\uacfc \uc548\ubaa9\uc744 \uac00\uc9c4 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud55c \ucd5c\uc0c1\uc758 \uc790\ub3d9\ucc28\uc640 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \ub0b4\uace0\uc790 \ud569\ub2c8\ub2e4."}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]}),(0,d.jsx)("section",{className:"content youtube",children:(0,d.jsx)("div",{className:"inner",children:(0,d.jsx)("div",{className:"wrap",children:null===(e=h.items)||void 0===e?void 0:e.map((function(e,s){var t;if(e.snippet.thumbnails.standard)return(0,d.jsxs)("article",{children:[(0,d.jsx)("button",{type:"button",className:"pic img_box",onClick:N(s),children:(0,d.jsx)("img",{src:null===(t=e.snippet.thumbnails.standard)||void 0===t?void 0:t.url,alt:e.snippet.title})}),(0,d.jsxs)("div",{className:"txt_box",children:[(0,d.jsx)("h2",{children:e.snippet.title.length>50?e.snippet.title.substr(0,50)+"...":e.snippet.title}),(0,d.jsxs)("div",{className:"txt",children:[(0,d.jsx)("p",{children:e.snippet.description.length>200?e.snippet.description.substr(0,200)+"...":e.snippet.description}),(0,d.jsx)("span",{children:e.snippet.publishedAt.split("T")[0].split("-").join(".")})]})]})]},s)}))})})})]})})}),(0,d.jsx)(a.Z,{ref:j,type:"popup_full",children:(0,d.jsx)("iframe",{title:null===(s=h.items)||void 0===s||null===(t=s.map((function(e){return e}))[y])||void 0===t?void 0:t.id,src:"https://www.youtube.com/embed/".concat(null===(o=h.items)||void 0===o||null===(p=o.map((function(e){return e}))[y])||void 0===p?void 0:p.snippet.resourceId.videoId)})})]})}}}]);
//# sourceMappingURL=83.3ef6aa34.chunk.js.map