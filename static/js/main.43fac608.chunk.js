(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(22),s=c.n(n),r=(c(41),c(42),c(43),c(16)),i=c(2),o=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("div",{className:"headerLeft",children:[Object(i.jsx)(r.b,{to:"/",style:{textDecoration:"none"},children:Object(i.jsx)("span",{children:"MOVIES"})}),Object(i.jsx)(r.b,{to:"/my-favourite",style:{textDecoration:"none"},children:Object(i.jsx)("span",{children:"MY FAVOURITE "})})]})})},j=c(20),l=(c(50),c(6)),d=c(35),u=c(10),b=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.favouriteMovies})),c=Object(u.c)((function(e){return e.currentMovieDetail})),n=Object(a.useState)(!1),s=Object(j.a)(n,2),r=s[0],o=s[1],b=Object(l.g)().id,O=Object(a.useState)(!1),v=Object(j.a)(O,2),f=v[0],p=v[1];return Object(a.useEffect)((function(){e({type:"SET_CURRENT_MOVIE_DETAIL",payload:b})}),[]),Object(a.useEffect)((function(){t.map((function(e){e.id===c.id&&p(!0)}))}),[t]),Object(i.jsxs)("div",{className:"movie",children:[Object(i.jsx)("div",{className:"movie__intro",children:Object(i.jsx)("img",{className:"movie__backdrop",src:"https://image.tmdb.org/t/p/original".concat(c?c.backdrop_path:"")})}),Object(i.jsxs)("div",{className:"movie__detail",children:[Object(i.jsx)("div",{className:"movie__detailLeft",children:Object(i.jsx)("div",{className:"movie__posterBox",children:Object(i.jsx)("img",{className:"movie__poster",src:"https://image.tmdb.org/t/p/original".concat(c?c.poster_path:"")})})}),Object(i.jsxs)("div",{className:"movie__detailRight",children:[Object(i.jsxs)("div",{className:"movie__detailRightTop",children:[Object(i.jsx)("div",{className:"movie__name",children:c?c.original_title:""}),Object(i.jsx)("div",{className:"movie__tagline",children:c?c.tagline:""}),Object(i.jsxs)("div",{className:"movie__rating",children:[c?c.vote_average:""," ",Object(i.jsx)("i",{class:"fas fa-star"}),Object(i.jsx)("span",{className:"movie__voteCount",children:c?"("+c.vote_count+") votes":""})]}),Object(i.jsx)("div",{className:"movie__runtime",children:c?c.runtime+" mins":""}),Object(i.jsx)("div",{className:"movie__releaseDate",children:c?"Release date: "+c.release_date:""})]}),Object(i.jsxs)("div",{className:"movie__detailRightBottom",children:[Object(i.jsxs)("div",{className:"synopsisText",children:["Synopsis",f?Object(i.jsxs)("span",{className:"favourite",onClick:function(){e({type:"REMOVE_FAVOURITE",payload:c}),p(!1)},children:["Favourite",Object(i.jsx)("i",{class:"newTab favouriteOne fas fa-heart"})]}):Object(i.jsxs)("span",{className:"favourite",onClick:function(){e({type:"SET_FAVOURITE",payload:c}),p(!0)},children:["Add to favourite",Object(i.jsx)("i",{class:"newTab nonFavourite far fa-heart"})]}),c&&Object(i.jsxs)("span",{className:"favourite",onClick:function(){return o(!r)},children:["Preview video",r?Object(i.jsx)("i",{class:"newTab far fa-eye"}):Object(i.jsx)("i",{class:"newTab far fa-eye-slash"})]})]}),Object(i.jsx)("div",{style:{color:"#000"},children:c?c.overview:""})]})]})]}),r&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"movie__heading",children:"Movie preview video "}),Object(i.jsx)("div",{className:"movie__hlsPlayer",children:Object(i.jsx)(d.a,{src:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8",autoPlay:!0,controls:!0,width:"75%"})})]})]})},O=(c(32),c(30)),v=c.n(O),f=(c(51),function(e){var t=e.movie,c=Object(a.useState)(!0),n=Object(j.a)(c,2),s=n[0],o=n[1],l=Object(u.c)((function(e){return e.favouriteMovies}));return Object(a.useEffect)((function(){setTimeout((function(){o(!1)}),1500)}),[t.poster_path]),Object(i.jsx)(i.Fragment,{children:s?Object(i.jsx)("div",{className:"cards",children:Object(i.jsx)(O.SkeletonTheme,{color:"#fff",highlightColor:"#afacac",children:Object(i.jsx)(v.a,{height:300,duration:2})})}):Object(i.jsx)(r.b,{to:"/AllMovies/movie/".concat(t.id),style:{textDecoration:"none",color:"white"},children:Object(i.jsxs)("div",{className:"cards",children:[l.map((function(e){if(e.id===t.id)return Object(i.jsx)("span",{class:"favourite__indicator",children:Object(i.jsx)("i",{className:"newTab favouriteOne fas fa-heart"})})})),Object(i.jsx)("img",{className:"cards__img",src:"https://image.tmdb.org/t/p/original".concat(t?t.poster_path:"")}),Object(i.jsxs)("div",{className:"cards__overlay",children:[Object(i.jsx)("div",{class:"card__title",children:t?t.original_title:""}),Object(i.jsxs)("div",{class:"card__runtime",children:[t?t.release_date:"",Object(i.jsxs)("span",{className:"card__rating",children:[t?t.vote_average:""," ",Object(i.jsx)("i",{class:"fas fa-star"}),"  "]})]}),Object(i.jsx)("div",{class:"card__description",children:t?t.overview.slice(0,118)+"...":""})]})]})})})}),p=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.popularMovies}));return Object(a.useEffect)((function(){e({type:"GET_POPULAR_MOVIES"})}),[]),Object(i.jsx)("div",{className:"movie_group",children:Object(i.jsx)("div",{className:"movies_card",children:t.map((function(e){return Object(i.jsx)(f,{movie:e})}))})})},m=function(){var e=Object(u.c)((function(e){return e.favouriteMovies}));return Object(i.jsx)("div",{className:"movie_group",children:Object(i.jsx)("div",{className:"movies_card",children:e.map((function(e){return Object(i.jsx)(f,{movie:e})}))})})};var h=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{exact:!0,path:"/",children:Object(i.jsx)(p,{})}),Object(i.jsx)(l.b,{path:"/AllMovies/movie/:id",children:Object(i.jsx)(b,{})}),Object(i.jsx)(l.b,{path:"/my-favourite",children:Object(i.jsx)(m,{})}),Object(i.jsx)(l.b,{path:"/:anything",children:Object(i.jsx)(l.a,{to:"/"})})]})]})})},_=c(21),x=c(31),E=c(13),N={favouriteMovies:[],popularMovies:[],currentMovieDetail:{}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVOURITE_ASYNC":return Object(E.a)(Object(E.a)({},e),{},{favouriteMovies:[].concat(Object(x.a)(e.favouriteMovies),[t.payload.payload])});case"REMOVE_FAVOURITE_ASYNC":return Object(E.a)(Object(E.a)({},e),{},{favouriteMovies:e.favouriteMovies.filter((function(e){return e.id!=t.payload.payload.id}))});case"GET_POPULAR_MOVIES_ASYNC":return Object(E.a)(Object(E.a)({},e),{},{popularMovies:Object(x.a)(t.payload)});case"SET_CURRENT_MOVIE_DETAIL_ASYNC":return Object(E.a)(Object(E.a)({},e),{},{currentMovieDetail:Object(E.a)({},t.payload)});default:return e}},y=c(36),T=c(7),w=c.n(T),M=c(14),R=w.a.mark(D),A=w.a.mark(P),S=w.a.mark(L),I=w.a.mark(Y),V=w.a.mark(G),k=w.a.mark(B),U=w.a.mark(J),C=w.a.mark(q),F=w.a.mark(z);function D(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.b)({type:"SET_FAVOURITE_ASYNC",payload:e});case 2:case"end":return t.stop()}}),R)}function P(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)("SET_FAVOURITE",D);case 2:case"end":return e.stop()}}),A)}function L(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.b)({type:"REMOVE_FAVOURITE_ASYNC",payload:e});case 2:case"end":return t.stop()}}),S)}function Y(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)("REMOVE_FAVOURITE",L);case 2:case"end":return e.stop()}}),I)}function G(e){var t;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e.payload,"?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")).then((function(e){return e.json()}));case 2:return t=c.sent,c.next=5,Object(M.b)({type:"SET_CURRENT_MOVIE_DETAIL_ASYNC",payload:t});case 5:case"end":return c.stop()}}),V)}function B(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)("SET_CURRENT_MOVIE_DETAIL",G);case 2:case"end":return e.stop()}}),k)}function J(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((function(e){return e.json()}));case 2:return e=t.sent,t.next=5,Object(M.b)({type:"GET_POPULAR_MOVIES_ASYNC",payload:e.results});case 5:case"end":return t.stop()}}),U)}function q(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.c)("GET_POPULAR_MOVIES",J);case 2:case"end":return e.stop()}}),C)}function z(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([P(),Y(),q(),B()]);case 2:case"end":return e.stop()}}),F)}var H=Object(y.a)(),K=Object(_.c)(g,Object(_.a)(H));H.run(z);var Q=K;s.a.render(Object(i.jsx)(u.a,{store:Q,children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.43fac608.chunk.js.map