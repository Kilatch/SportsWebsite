(this["webpackJsonpsport-app"]=this["webpackJsonpsport-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},137:function(e,t,a){e.exports=a(183)},142:function(e,t,a){},143:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),l=(a(142),a(8)),c=a(22);a(143);var i=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],o=function(){document.body.style.overflowY="auto",s(!1)};return r.a.createElement("nav",null,r.a.createElement(c.b,{className:"logo",to:"/"},r.a.createElement("i",{className:"fas fa-futbol link icon"},r.a.createElement("p",{className:"logo-text"},"Ball"))),r.a.createElement("ul",{className:"nav-links ".concat(a&&"active")},r.a.createElement("li",{className:"link"},r.a.createElement(c.b,{onClick:o,to:"/"},"Home")),r.a.createElement("li",{className:"link"},r.a.createElement(c.b,{onClick:o,to:"/sports"},"Sports")),r.a.createElement("li",{className:"link"},r.a.createElement(c.b,{onClick:o,to:"/matches"},"Matches")),r.a.createElement("li",{className:"link"},r.a.createElement(c.b,{to:"/admin"},"Admin"))),r.a.createElement("div",{onClick:function(){s(!a),document.body.style.overflowY=a?"auto":"hidden"},className:"hamburger-toggle"},r.a.createElement("i",{className:"fas fa-bars fa-lg hamburger"})))},u=a(23),m=a.n(u),d=(a(164),a(78)),p=(a(165),a(166),function(e){var t=e.data,a=e.rootItemsOpened,n=void 0===a?[]:a,s=e.toggleItemOpened,o=void 0===s?function(){}:s,l=e.labelClickListener,c=void 0===l?function(){}:l;return r.a.createElement("ul",{className:"selector-item-scroll"},r.a.createElement("div",null,t.map((function(e){return function e(t,a,s,l,c){if("string"===typeof t)return r.a.createElement("label",{onClick:l,className:"selector-child",key:c},t);if(t instanceof Object){var i="".concat(a,".").concat(t.name),u=n.has(t.name);return r.a.createElement("div",{onClick:function(){return o(t)},className:"selector-parent",key:i},r.a.createElement("label",{className:"selector-label"},t.name||"Untitled item"),r.a.createElement("div",null,u&&t.children&&t.children.map((function(a){return e(a.leagueName,i,t,(function(){l(a.leagueId)}),a.leagueId)}))))}}(e,"root",0,c)}))))});function h(e){var t=e.allLeagues,a=e.labelClickListener,s=Object(n.useState)(new Set),o=Object(l.a)(s,2),c=o[0],i=o[1];return r.a.createElement("div",{className:"selector"},r.a.createElement("div",{className:"selector-text"},"Select sport & league"),r.a.createElement(p,{data:t,rootItemsOpened:c,toggleItemOpened:function(e){c.has(e.name)?(c.delete(e.name),i(new Set(c))):(c.add(e.name),i(new Set(c)))},labelClickListener:a}))}var f=function(e){var t=e.latestmatches,a=Object(n.useState)([]),s=Object(l.a)(a,2),o=s[0],i=s[1],u=Object(n.useState)([]),m=Object(l.a)(u,2),p=m[0],f=m[1],v=Object(n.useState)(),b=Object(l.a)(v,2),E=b[0],y=b[1],N=Object(n.useState)({homeTeam:"",awayTeam:"",result:[0,0]}),w=Object(l.a)(N,2),S=w[0],O=w[1],k=function(e){document.getElementById("round-progress-bar").style.width="".concat(e.round/e.numberOfRound*100,"%")};return Object(n.useEffect)((function(){var e=t.filter((function(e){return e.round.season.league.id===E})),a=[];e.map((function(e){a.push({awayTeam:e.awayTeam.name,awayID:e.awayTeam.id,homeTeam:e.homeTeam.name,homeID:e.homeTeam.id,result:[e.result.awayScore,e.result.homeScore],round:e.round.roundNr,numberOfRound:e.round.season.numberOfRound,leagueId:e.round.season.league.id,leagueName:e.round.season.league.name})})),i(a),a[0]&&(O(a[0]),k(a[0]));var n,r=[],s=[],o=[],l=Object(d.a)(t);try{for(l.s();!(n=l.n()).done;){var c=n.value,u=c.round.season.league.sport,m=u.name,p=u.id,h=c.round.season.league,g=h.id,v=h.name;if(s.includes(m)){if(!o.includes(v)){var b,y=Object(d.a)(r);try{for(y.s();!(b=y.n()).done;){var N=b.value;N.name===m&&N.children.push({leagueName:v,leagueId:g})}}catch(w){y.e(w)}finally{y.f()}o.push(v)}}else r.push({name:m,sportId:p,children:[{leagueName:v,leagueId:g}]}),s.push(m),o.push(v)}}catch(w){l.e(w)}finally{l.f()}f(r)}),[t,E]),r.a.createElement("div",{className:"latest-games-container"},r.a.createElement("div",{className:"latest-games-header"},r.a.createElement("div",{className:"latest-games-header-info"},r.a.createElement("div",{className:"league-name"},r.a.createElement(c.b,{className:"league-name",to:"/league/".concat(S.leagueId)},S.leagueName)),r.a.createElement("p",{className:"league-date"},"11 Feburary 2020")),r.a.createElement("div",{className:"round-progress"},r.a.createElement("div",{id:"round-progress-bar"})),r.a.createElement("div",{className:"latest-games-selectors"},r.a.createElement(h,{allLeagues:p,labelClickListener:function(e){y(e)}}))),r.a.createElement("div",{className:"latest-games-body"},r.a.createElement(g,{data:S})),r.a.createElement("div",{className:"latest-games-footer"},o.length>1&&o.map((function(e,t){return r.a.createElement("li",{key:t,onClick:function(){!function(e){k(e),O(e)}(e)},className:"paginate"})}))))},g=function(e){var t=e.data,a=t.homeID,n=t.awayID,s=t.homeTeam,o=t.awayTeam,l=t.result;return r.a.createElement("div",{className:"match-container"},r.a.createElement("div",{className:"teams"},r.a.createElement("div",{className:"team"},r.a.createElement(c.b,{className:"team",to:"/team/".concat(a)},s)),r.a.createElement("div",{className:"score-container"},r.a.createElement("div",{className:"score ".concat(l[1]>l[0]&&"won")},l[1]),r.a.createElement("div",{className:"score"},"-"),r.a.createElement("div",{className:"score ".concat(l[0]>l[1]&&"won")},l[0])),r.a.createElement("div",{className:"team"},r.a.createElement(c.b,{className:"team",to:"/team/".concat(n)},o))))},v=(a(167),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-copyright"}),"2020 Grupp 3"))}),b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){m.a.get("http://grupp5test.jls-sto1.elastx.net/get/gamebydate/2018-11-09").then((function(e){return s(e.data)}))}),[]),r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"front-page-container"},r.a.createElement("div",{className:"front-page-info"},r.a.createElement("p",null,"Welcome to the worlds largest sport website"),r.a.createElement("p",{id:"seeLatestMatches",onClick:function(){document.getElementById("seeLatestMatches").scrollIntoView({behavior:"smooth"})},className:"see-latest-matches"},"Click here to see the latest matches"))),r.a.createElement("div",{className:"latest-matches"},r.a.createElement(f,{latestmatches:a})),r.a.createElement(v,null))},E=(a(168),function(e){var t=e.sports,a=e.onClick,s=Object(n.useState)(!1),o=Object(l.a)(s,2),c=(o[0],o[1],Object(n.useState)(1)),i=Object(l.a)(c,2),u=i[0],m=i[1],d=Object(n.useState)(4),p=Object(l.a)(d,2),h=p[0],f=(p[1],u*h),g=f-h,v=t.slice(g,f),b=function(){t.length>=h&&m(u+1)},E=function(){m(u-1)},y=function(e){var t=document.getElementById("sportsNavLinks");setTimeout((function(){t.style.transform="translateX(0%)",e()}),300),t.style.transform="translateY(".concat(-110,"%)")};return r.a.createElement("div",{id:"sportsNavBar",className:"sports-nav-bar"},r.a.createElement("i",{onClick:function(){y(E)},className:"fas fa-arrow-left add-more ".concat(u<=1&&"hide")}),r.a.createElement("ul",{id:"sportsNavLinks",className:"sports-nav-links"},v.map((function(e,t){return r.a.createElement("li",{key:t,onClick:function(){a(e.id)}},e.name)}))),r.a.createElement("i",{id:"previousIcon",onClick:function(){y(b)},className:"fas fa-arrow-right add-more ".concat(u>=Math.round(t.length/h)+1&&"hide")}))}),y=a(11),N=a.n(y),w=a(24),S="http://grupp5test.jls-sto1.elastx.net/get",O="http://grupp5test.jls-sto1.elastx.net/add",k=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/games/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/homegames/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/awaygames/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(O+"/newsport/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(O+"/newleaguetosport/"+t+"/"+a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/tablebyseason/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/sports");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/leaguesbysport/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/seasonsbyleague/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/gamebyseason/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(w.a)(N.a.mark((function e(t){var a,n,r,s,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=0;case 2:if(!(n<t.length)){e.next=10;break}return e.next=5,m.a.get(S+"/gamebyseason/"+t[n]);case 5:if((r=e.sent).data.length>0)for(s=0;s<r.data.length;s++)null!=(o=r.data[s])&&a.push(o);case 7:n++,e.next=2;break;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(w.a)(N.a.mark((function e(){var t,a,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return t=e.sent,e.next=5,F(t,1);case 5:return a=e.sent,e.next=8,F(a,0);case 8:return n=e.sent,e.next=11,B(n);case 11:return r=e.sent,console.log(r),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n,r,s,o,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],s=0;case 2:if(!(s<t.length)){e.next=15;break}if(1!=a){e.next=7;break}return e.next=6,M(t[s]);case 6:r=e.sent;case 7:if(0!=a){e.next=11;break}return e.next=10,D(t[s]);case 10:r=e.sent;case 11:for(o=0;o<r.data.length;o++)null!=(l=r.data[o])&&n.push(l.id);case 12:s++,e.next=2;break;case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(w.a)(N.a.mark((function e(){var t,a,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(S+"/sports");case 2:for(t=e.sent,a=[],n=0;n<t.data.length;n++)null!=(r=t.data[n])&&a.push(r.id);return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y={getLeagueBySport:M,getSports:L,getTableBySeasonId:T,getSeasonsByLeague:D,getAllAvailabeSeasons:V,getMatchBySeason:A,getAwayGamesByTeamId:x,getGamesByTeamId:k,getHomeGamesByTeamId:j,AddNewSport:C,addNewLeague:I},H=a(25),G=a(26),J=a(13),P=a(28),z=a(27),q=(a(100),a(34));a(170);function W(e){var t=Object(n.useState)({items:e.items}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=function(e){var t=s.items;t.sort(e),o({items:t})};return null!=s.items&&s.items.length>0?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"teamName",onClick:function(){c((function(e,t){return e.teamName.localeCompare(t.teamName)}))}},"Team"),r.a.createElement("th",{onClick:function(){c((function(e,t){return t.gamesPlayed-e.gamesPlayed}))}},"MP"),r.a.createElement("th",{onClick:function(){c((function(e,t){return t.wins-e.wins}))}},"W"),r.a.createElement("th",{onClick:function(){c((function(e,t){return t.draws-e.draws}))}},"D"),r.a.createElement("th",{onClick:function(){c((function(e,t){return t.loss-e.loss}))}},"L"),r.a.createElement("th",{className:"goals",onClick:function(){c((function(e,t){return t.goals-e.goals}))}},"G"),r.a.createElement("th",{className:"goals",onClick:function(){c((function(e,t){return t.goalsConseded-e.goalsConseded}))}},"GC"),r.a.createElement("th",{className:"goals",onClick:function(){c((function(e,t){return t.goalDifference-e.goalDifference}))}},"GD"),r.a.createElement("th",{onClick:function(){c((function(e,t){return t.points-e.points}))}},"P"))),r.a.createElement("tbody",null,s.items.map((function(e){return r.a.createElement("tr",{key:e.teamId},r.a.createElement("td",{className:"teamName"},r.a.createElement("a",{href:"/team/"+e.teamId},e.teamName)),r.a.createElement("td",null,e.gamesPlayed),r.a.createElement("td",null,e.wins),r.a.createElement("td",null,e.draws),r.a.createElement("td",null,e.loss),r.a.createElement("td",{className:"goals"},e.goals),r.a.createElement("td",{className:"goals"},e.goalsConseded),r.a.createElement("td",{className:"goals"},e.goalDifference),r.a.createElement("td",null,e.points))})))):null}var K=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).cachKey="loadTable:"+n.props.seasonId,n.state=JSON.parse(sessionStorage.getItem(n.cachKey))||{error:null,isLoaded:!1,items:[],seasonId:n.props.seasonId},n.updateComponent=n.updateComponent.bind(Object(J.a)(n)),n}return Object(G.a)(a,[{key:"componentDidMount",value:function(){0!=this.props.seasonId&&this.updateComponent()}},{key:"updateComponent",value:function(){var e=this;this.state.isLoaded||Y.getTableBySeasonId(this.props.seasonId).then((function(t){var a=Object(q.a)({},e.state);a.isLoaded=!0,a.items=t.data,e.setState(a),sessionStorage.setItem(e.cachKey,JSON.stringify(a))}),(function(t){e.setState({isLoaded:!0,error:t,items:[]})}))}},{key:"render",value:function(){return this.props.seasonId!=this.state.seasonId&&this.updateComponent(),this.props.seasonId==this.state.seasonId?r.a.createElement("div",null,this.state.error&&r.a.createElement("div",null,"Error: ",this.state.error.message)||!this.state.isLoaded&&r.a.createElement("div",null,"Loading...")||this.state.isLoaded&&r.a.createElement(W,{items:this.state.items})):null}}]),a}(r.a.Component),U=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).state={leagueId:e.leagueId,error:null,items:[]},n.updateComponent=n.updateComponent.bind(Object(J.a)(n)),n.sortData=n.sortData.bind(Object(J.a)(n)),n}return Object(G.a)(a,[{key:"sortData",value:function(){this.state.items.sort((function(e,t){return t.startYear-e.startYear}))}},{key:"componentDidMount",value:function(){this.updateComponent()}},{key:"updateComponent",value:function(){var e=this;Y.getSeasonsByLeague(this.props.leagueId).then((function(t){e.setState({items:t.data,leagueId:e.props.leagueId}),console.log(e.state.items)}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){if(this.props.leagueId!=this.state.leagueId&&this.updateComponent(),this.state.items.length>0){this.sortData();var e=this.state.items[0];return r.a.createElement("div",null,r.a.createElement("h3",{className:"league-list"}," ",e.league.name," "),r.a.createElement(c.b,{to:"/season/"+e.id},r.a.createElement("h4",{className:"season-year"}," ",e.startYear)),r.a.createElement(K,{seasonId:e.id}))}return null}}]),a}(n.Component),Z=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).state={sportId:e.sportId,error:null,items:[],tempBool:0},n.updateComponent=n.updateComponent.bind(Object(J.a)(n)),n}return Object(G.a)(a,[{key:"componentDidMount",value:function(){0!=this.props.sportId&&this.updateComponent()}},{key:"updateComponent",value:function(){var e=this;Y.getLeagueBySport(this.props.sportId).then((function(t){e.setState({items:t.data,sportId:e.props.sportId}),console.log(e.state.items)}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return this.props.sportId!=this.state.sportId&&this.updateComponent(),this.state.items.length>0?r.a.createElement("div",null,r.a.createElement("ul",{className:"league-list"},this.state.items.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(U,{leagueId:e.id}))}))),console.log(this.state.items)):null}}]),a}(n.Component),$=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(0),c=Object(l.a)(o,2),i=c[0],u=c[1];return Object(n.useEffect)((function(){Y.getSports().then((function(e){s(e.data)}))}),[]),r.a.createElement("div",null,r.a.createElement(E,{sports:a,onClick:function(e){u(e)}}),r.a.createElement(Z,{sportId:i}))},X=function(e){for(var t=[],a=[],n=0;n<e.length;n++){var r=e[n],s=r.round.season.league.name;if(t.includes(s)){if(t.includes(s)){for(var o=0,l=0;l<t.length;l++)t[l]===s&&o++;o<3&&(t.push(s),a.push(r))}}else t.push(s),a.push(r)}return a},Q=function(e){for(var t=[],a=[],n=0;n<e.length;n++){var r=e[n];t.includes(r.round.season.id)||(t.push(r.round.season.id),a.push(r.round.season))}return a},_=function(e,t){for(var a=[],n=0;n<e.length;n++){var r=e[n];r.round.season.id==t&&a.push(r)}return a},ee=function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.includes(n.date)||t.push(n.date)}return t},te=function(e,t){for(var a=[],n=0;n<t.length;n++){var r=t[n];r.date==e&&a.push(r)}return a},ae=function(e,t,a){for(var n=[],r=0;r<e.length;r++){var s=e[r];s.awayTeam.id!=t&&s.homeTeam.id!=t||s.awayTeam.id!=a&&s.homeTeam.id!=a||n.push(s)}return n},ne=a(222),re=a(224),se=a(226),oe=a(185),le=a(79),ce=a.n(le),ie=(a(101),Object(ne.a)({root:{width:380,minHeight:250,backgroundImage:"url(".concat(ce.a,")"),border:3,borderRadius:8,padding:"0 30px",marginLeft:"25px",marginTop:"25px"},card:{width:380,minHeight:250,backgroundImage:"url(".concat(ce.a,")"),marginLeft:30,marginTop:30,borderRadius:25,transitionDuration:"1s",boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"},teamCard:{color:"#212121",fontFamily:"Arial",marginLeft:15,fontStyle:"italic",fontSize:20,fontWeight:"bold",marginTop:25,animationName:"wave","&:hover":{color:"#ffff",transition:"0.5s"}},scoreCard:{color:"#212121",marginRight:20,fontFamily:"Arial",fontStyle:" Courier New",fontSize:20,fontWeight:"bold",marginTop:25},seasonLeague:{color:"#e8eaf6",marginTop:50,fontSize:14,textAlign:"center",fontStyle:"italic"},dii:{display:"flex",justifyContent:"space-between"},moreMatch:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",marginRight:0}}));function ue(e){var t=e.d,a=e.getMatchTwo,n=ie();return r.a.createElement(re.a,{className:n.card},r.a.createElement(se.a,null,r.a.createElement("div",{className:n.dii},r.a.createElement("a",{href:"/team/"+t.homeTeam.id,className:n.teamCard},t.homeTeam.name),r.a.createElement("p",{className:n.scoreCard,component:"p"},t.result.homeScore)),r.a.createElement("div",{className:n.dii},r.a.createElement("a",{href:"/team/"+t.awayTeam.id,className:n.teamCard},t.awayTeam.name),r.a.createElement("p",{className:n.scoreCard},t.result.awayScore)),r.a.createElement("div",{className:n.seasonLeague},r.a.createElement("p",null,t.date),r.a.createElement("p",null,t.round.season.league.sport.name+"-"+t.round.season.league.name+" "+t.round.season.startYear))),r.a.createElement(oe.a,{className:n.moreMatch,onClick:function(){return a(t.awayTeam.id,t.homeTeam.id)}},"More Matches"))}var me=a(230),de=a(110),pe=a(240),he=Object(ne.a)({b:{color:" #ffff","&:hover":{backgroundColor:"#b0bec5"}}});function fe(e){var t=e.season,a=e.handelList,n=e.seasons,s=he(),o=r.a.useState(null),c=Object(l.a)(o,2),i=c[0],u=c[1],m=function(e){e&&(u(null),e.currentTarget.value>0&&a(e.currentTarget.value))};return r.a.createElement("div",null,r.a.createElement(oe.a,{className:s.b,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},t),r.a.createElement(de.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:m},n.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(pe.a,{onClick:m,value:e.id},e.league.name+"  "+e.startYear))}))))}var ge=a(116),ve=a(111),be=a.n(ve),Ee=a(112),ye=a.n(Ee),Ne=a(21),we=a(236),Se=Object(ne.a)({b:{color:" #ffff","&:hover":{backgroundColor:"#b0bec5"}}});function Oe(e){var t=e.dates,a=e.dateHandler,s=Se(),o=Object(n.useState)({datum:new Date,started:!1}),c=Object(l.a)(o,2),i=c[0],u=c[1];function m(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}return r.a.createElement(Ne.a,{utils:ge.a},r.a.createElement(we.a,{className:s.b,autoOk:!0,variant:"inline",inputVariant:"outlined",format:"yyyy-MM-dd",leftArrowIcon:r.a.createElement(be.a,null),rightArrowIcon:r.a.createElement(ye.a,null),InputProps:{style:{fontFamily:"Arial",color:"white"}},value:i.datum,onChange:function(e){m(e)==t[t.length]||i.started?e&&i.started?(a(m(e)),u({datum:e})):console.log("date was not selected"):(a(m(e)),u({datum:e,started:!0}))},InputAdornmentProps:{position:"start"},shouldDisableDate:function(e){var a=m(e);return!t.includes(a)}}))}var ke=a(229),je=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(){var e;return Object(H.a)(this,a),(e=t.call(this)).useStyles=Object(ne.a)({divFilter:{backgroundColor:"rgb(65, 130, 195)"}}),e.state={error:null,items:[],itemsToShow:[],availableSeasons:[],started:!1,isLoaded:!1},e.updateComponent=e.updateComponent.bind(Object(J.a)(e)),e.sortData=e.sortData.bind(Object(J.a)(e)),e.useStyles=e.useStyles.bind(Object(J.a)(e)),e.handelList=e.handelList.bind(Object(J.a)(e)),e.dateHandler=e.dateHandler.bind(Object(J.a)(e)),e.getMatchTwo=e.getMatchTwo.bind(Object(J.a)(e)),e}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.updateComponent()}},{key:"sortData",value:function(){this.state.items.sort((function(e,t){return t.round.season.startYear-e.round.season.startYear}))}},{key:"handelList",value:function(e){this.setState({itemsToShow:_(this.state.items,e)})}},{key:"dateHandler",value:function(e){1==this.state.started?this.setState({itemsToShow:te(e,this.state.items)}):this.setState({started:!0})}},{key:"getMatchTwo",value:function(e,t){this.setState({itemsToShow:ae(this.state.items,e,t)})}},{key:"updateComponent",value:function(){var e=this;Y.getAllAvailabeSeasons().then((function(t){e.setState({items:t}),e.sortData(),e.setState({isLoaded:!0,itemsToShow:X(e.state.items),availableSeasons:Q(e.state.items)})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return this.state.isLoaded?this.state.error?r.a.createElement("div",null,this.state.error):this.state.items.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:"bar"},r.a.createElement("div",{className:"menu"},r.a.createElement(fe,{handelList:this.handelList,season:"| Select season",seasons:this.state.availableSeasons})),r.a.createElement("div",{className:"date"},r.a.createElement(Oe,{dates:ee(this.state.items),dateHandler:this.dateHandler}))),r.a.createElement(me.a,{item:!0,container:!0,xs:12},this.state.itemsToShow.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(ue,{d:t,getMatchTwo:e.getMatchTwo}))})))):null:r.a.createElement("div",{className:"progressbar"},r.a.createElement(ke.a,{size:100}))}}]),a}(n.Component),xe=a(237),Ce=a(231),Ie=a(113),Te=a.n(Ie),Le=a(233),Me=a(187),De=a(118),Ae=a(232),Be=a(192),Ve=["Add A Sport","Add A League","Add A Team","Add A Season","Add A Match"];function Fe(e){var t=e.handelList,a=r.a.useState(!1),n=Object(l.a)(a,2),s=n[0],o=n[1],c=r.a.useRef(null),i=r.a.useState(0),u=Object(l.a)(i,2),m=u[0],d=u[1],p=function(e){c.current&&c.current.contains(e.target)||o(!1)};return r.a.createElement(me.a,{container:!0,direction:"column"},r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(Ce.a,{variant:"contained",style:{color:"#535354"},ref:c,"aria-label":"split button"},r.a.createElement(oe.a,{onClick:function(){console.log("You clicked ".concat(Ve[m]))}},Ve[m]),r.a.createElement(oe.a,{color:"primary",size:"small","aria-controls":s?"split-button-menu":void 0,"aria-expanded":s?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){o((function(e){return!e}))}},r.a.createElement(Te.a,null))),r.a.createElement(Ae.a,{open:s,anchorEl:c.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var a=e.TransitionProps,n=e.placement;return r.a.createElement(Me.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(De.a,null,r.a.createElement(Le.a,{onClickAway:p},r.a.createElement(Be.a,{id:"split-button-menu"},Ve.map((function(e,a){return r.a.createElement(pe.a,{key:e,disabled:2===a||3===a||4==a,selected:a===m,onClick:function(e){return function(e,a){d(a),console.log(a),console.log(Ve[a]),t(a),o(!1)}(0,a)}},e)}))))))}))))}var Re=a(119),Ye=a(38),He=a(58),Ge=a.n(He),Je=a(5),Pe=a(238),ze=a(228),qe=a(227),We=a(235),Ke=a(234);function Ue(e){var t=e.op,a=e.handleDialog,n=r.a.useState(t),s=Object(l.a)(n,2),o=s[0],c=s[1],i=function(e){c(!1),a(e.currentTarget.value)};return r.a.createElement("div",null,r.a.createElement(Pe.a,{open:o,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Ke.a,{id:"alert-dialog-title"},"Are you sure you want to save the changes?"),r.a.createElement(qe.a,null,r.a.createElement(We.a,{id:"alert-dialog-description"},"By pressing ok you save the changes to the remote database, this means the data will be available to everyone and might affect their experiens with the database.")),r.a.createElement(ze.a,null,r.a.createElement(oe.a,{onClick:i,value:0,color:"primary"},"Cancel"),r.a.createElement(oe.a,{onClick:i,value:1,color:"primary",autoFocus:!0},"Ok"))))}var Ze=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.state.formData;t[e.target.name]=e.target.value,n.setState({formData:t})},n.handleSubmit=function(){for(var e=!0,t=0;t<n.state.sportList.length;t++){n.state.sportList[t].name==n.state.formData.sportName&&(e=!1,n.setState({savedSportNameAndMessage:"Similar Sport Name Already Exists in The Database And This Might Create confussion!"}))}e&&n.setState({submitted:e,savedSportNameAndMessage:""})},n.state={formData:{sportName:""},submitted:!1,savedSportNameAndMessage:"",sportList:e.data},n.handleDialog=n.handleDialog.bind(Object(J.a)(n)),n.addSportToApi=n.addSportToApi.bind(Object(J.a)(n)),n}return Object(G.a)(a,[{key:"addSportToApi",value:function(e){var t=this;Y.AddNewSport(e).then((function(e){t.setState({savedSportNameAndMessage:e.data.name+" was successfully added to the database"})})).catch((function(e){t.setState({savedSportNameAndMessage:"Something went wrong while saving to the database!!"}),console.log(e)}))}},{key:"handleDialog",value:function(e){console.log(e),1==e&&console.log("sub"+this.state.formData.sportName),this.setState({submitted:!1})}},{key:"componentDidMount",value:function(){Ye.ValidatorForm.addValidationRule("isText",(function(e){var t=e.charAt(0);return!(!e.match(/^[A-Za-z]+$/)||t!=t.toUpperCase())}))}},{key:"render",value:function(){var e=this.state,t=e.formData,a=e.submitted,n=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Re.a,{className:n.txt},this.state.savedSportNameAndMessage),r.a.createElement(Ye.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,className:n.root},r.a.createElement(xe.a,{display:"flex",alignItems:"center",marginLeft:"30%",p:1,m:1},r.a.createElement(xe.a,{p:1,className:n.txt},r.a.createElement(Ye.TextValidator,{label:"Sport Name",onChange:this.handleChange,className:n.textVal,name:"sportName",value:t.sportName,variant:"outlined",validators:["required","isText"],errorMessages:["this field is required","SportName is Not valid"]})),r.a.createElement(xe.a,{p:1},r.a.createElement(oe.a,{className:n.saveBtn,variant:"contained",type:"submit",disabled:a},a&&r.a.createElement("div",null,r.a.createElement(Ge.a,{color:"primary"})," ",r.a.createElement(Ue,{op:!0,handleDialog:this.handleDialog}))||!a&&r.a.createElement(Ge.a,{color:"secondary"})))))),r.a.createElement(xe.a,{p:1},r.a.createElement("div",{className:n.rule},"valid sport name : first letter should be uppercase ,all letters, only new sport")))}}]),a}(r.a.Component),$e=Object(Je.a)((function(e){return{txt:{color:"#a83432",textAlign:"center",fontStyle:"italic",backgroundColor:"#f7f7fa",height:"10%",borderRadius:15},saveBtn:{color:"#f5eded"},rule:{color:"#fafafa",marginLeft:"20%"}}}),{withTheme:!0})(Ze),Xe=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.state.formData;t[e.target.name]=e.target.value,n.setState({formData:t})},n.handleSubmit=function(){n.setState({submitted:!0,savedMessage:""})},n.state={formData:{leagueName:"",sportName:""},submitted:!1,savedMessage:"",sportList:e.data},n.handleDialog=n.handleDialog.bind(Object(J.a)(n)),n.addLeagueToApi=n.addLeagueToApi.bind(Object(J.a)(n)),n.getSportId=n.getSportId.bind(Object(J.a)(n)),n}return Object(G.a)(a,[{key:"getSportId",value:function(e){for(var t,a=0;a<this.state.sportList.length;a++){var n=this.state.sportList[a];n.name==e&&(t=n.id)}return t}},{key:"addLeagueToApi",value:function(e,t){var a=this;Y.addNewLeague(e,t).then((function(e){a.setState({savedMessage:"The League was successfully added to the database"})})).catch((function(e){a.setState({savedMessage:"Something went wrong while saving to the database!!"}),console.log(e)}))}},{key:"handleDialog",value:function(e){console.log(e),1==e&&(console.log("submited sport Id "+this.getSportId(this.state.formData.sportName)),console.log("submited league name :"+this.state.formData.leagueName)),this.setState({submitted:!1})}},{key:"componentDidMount",value:function(){var e=this;Ye.ValidatorForm.addValidationRule("isText",(function(e){var t=e.charAt(0);return!(!e.match(/^[A-Za-z]+$/)||t!=t.toUpperCase())})),Ye.ValidatorForm.addValidationRule("sportDoesNotExist",(function(t){for(var a=0;a<e.state.sportList.length;a++){if(e.state.sportList[a].name==t)return!0}return!1}))}},{key:"render",value:function(){var e=this.state,t=e.formData,a=e.submitted,n=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Re.a,{className:n.txt},this.state.savedMessage),r.a.createElement(Ye.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,className:n.root},r.a.createElement(xe.a,{display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"10%",p:1,m:1},r.a.createElement(xe.a,{p:1,className:n.txt},r.a.createElement(Ye.TextValidator,{label:"League Name",onChange:this.handleChange,className:n.textVal,name:"leagueName",value:t.leagueName,validators:["required","isText"],errorMessages:["this field is required","LeagueName is Not valid"]})),r.a.createElement(xe.a,{p:1,className:n.txt},r.a.createElement(Ye.TextValidator,{label:"Sport Name",onChange:this.handleChange,className:n.textVal,name:"sportName",value:t.sportName,validators:["required","sportDoesNotExist"],errorMessages:["this field is required","sportName does not exist/invalid name"]})),r.a.createElement(xe.a,{p:1},r.a.createElement(oe.a,{className:n.saveBtn,variant:"contained",type:"submit",disabled:a},a&&r.a.createElement("div",null,r.a.createElement(Ge.a,{color:"primary"})," ",r.a.createElement(Ue,{op:!0,handleDialog:this.handleDialog}))||!a&&r.a.createElement(Ge.a,{color:"secondary"})))))),r.a.createElement("div",{className:n.rule},"valid league Name : first letter should be uppercase ,all letters, add to existing sport only"))}}]),a}(r.a.Component),Qe=Object(Je.a)((function(e){return{txt:{textAlign:"center",fontStyle:"italic",backgroundColor:"#f7f7fa",height:"10%"},root:{backgroundColor:"#f7f7fa",borderRadius:15,width:"40%",marginLeft:"35%",boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"},saveBtn:{color:"#f5eded"},rule:{color:"#fafafa",marginLeft:"20%"}}}),{withTheme:!0})(Xe),_e=function(e){Object(P.a)(a,e);var t=Object(z.a)(a);function a(){var e;return Object(H.a)(this,a),(e=t.call(this)).state={error:null,addTask:0,sports:[]},e.handelList=e.handelList.bind(Object(J.a)(e)),e}return Object(G.a)(a,[{key:"componentDidMount",value:function(){var e=this;Y.getSports().then((function(t){e.setState({sports:t.data})})).catch((function(e){console.log(e)}))}},{key:"handelList",value:function(e){this.setState({addTask:e}),console.log(e)}},{key:"render",value:function(){var e=this.props.classes,t=this.state.addTask;return r.a.createElement("div",null,r.a.createElement("div",{className:e.dii},r.a.createElement("div",{className:e.diii},r.a.createElement(xe.a,null,r.a.createElement(Fe,{handelList:this.handelList})))),r.a.createElement("div",{className:e.diiiiii},r.a.createElement(xe.a,{className:e.root},0==t&&r.a.createElement($e,{data:this.state.sports})||1==t&&r.a.createElement(Qe,{data:this.state.sports}))))}}]),a}(r.a.Component),et=Object(Je.a)((function(e){return{root:{alignItems:"center",p:1,m:1,marginRight:"10%",marginTop:"25px",backgroundColor:"#000008",boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",width:"100%"},adminP:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:0,p:1,m:1},dii:{backgroundColor:"rgb(65, 130, 195)",display:"flex"},diii:{marginLeft:"50%"},diiiiii:{marginTop:"250px"}}}),{withTheme:!0})(_e);var tt=function(e){var t,a=e.match.params.id,s="teamDetail:"+a,o=Object(n.useState)(JSON.parse(sessionStorage.getItem(s))||{error:null,isLoaded:!1,id:a,teamName:"",matches:[],seasonId:"",show:"all"}),c=Object(l.a)(o,2),i=c[0],u=c[1];return Object(n.useEffect)((function(){i.isLoaded||Y.getGamesByTeamId(a).then((function(e){var t;if(e.data.length>0){t=e.data[0].homeTeam.id==a?e.data[0].homeTeam.name:e.data[0].awayTeam.name;var n=Object(q.a)({},i);n.isLoaded=!0,n.teamName=t,n.matches=e.data,n.show="all",n.seasonId=e.data[0].round.season.id,u(n),sessionStorage.setItem(s,JSON.stringify(n))}}),(function(e){u({isLoaded:!1,error:e})}))}),[]),"all"==i.show?t=i.matches.map((function(e,t){return r.a.createElement(ue,{key:t,d:e,getMatchTwo:function(e,t){return null}})})):"home"==i.show?t=i.homeMatches.map((function(e,t){return r.a.createElement(ue,{key:t,d:e,getMatchTwo:function(e,t){return null}})})):"away"==i.show&&(t=i.awayMatches.map((function(e,t){return r.a.createElement(ue,{key:t,d:e,getMatchTwo:function(e,t){return null}})}))),i.isLoaded?(console.log(i),r.a.createElement("div",null,console.log(i.teamName),r.a.createElement("h1",null,i.teamName),r.a.createElement(K,{seasonId:i.seasonId}),r.a.createElement(oe.a,{variant:"contained",onClick:function(){var e=Object(q.a)({},i);e.show="all",u(e)}},"All Matches"),r.a.createElement(oe.a,{variant:"contained",onClick:function(){if(i.homeMatches){var e=Object(q.a)({},i);e.show="home",u(e)}else Y.getHomeGamesByTeamId(a).then((function(e){var t=Object(q.a)({},i);t.homeMatches=e.data,t.show="home",u(t),sessionStorage.setItem(s,JSON.stringify(t))}))}},"Home Matches"),r.a.createElement(oe.a,{variant:"contained",onClick:function(){if(i.awayMatches){var e=Object(q.a)({},i);e.show="away",u(e)}else Y.getAwayGamesByTeamId(a).then((function(e){var t=Object(q.a)({},i);t.awayMatches=e.data,t.show="away",u(t),sessionStorage.setItem(s,JSON.stringify(t))}))}},"Away Matches"),r.a.createElement(me.a,{item:!0,container:!0,xs:12},t))):(console.log(i),null)},at=function(e){var t=e.match.params;return r.a.createElement(U,{leagueId:t.id})};function nt(e){var t=e.match.params.id,a="seasonMatch:"+t,s=Object(n.useState)(JSON.parse(sessionStorage.getItem(a))||{id:t,leagueName:"",season:"",matches:[],error:null,isLoaded:!1}),o=Object(l.a)(s,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){c.isLoaded||Y.getMatchBySeason(t).then((function(e){var t=Object(q.a)({},c);e.data.length>1?(t.matches=e.data,t.isLoaded=!0,t.season=e.data[0].round.season.startYear,t.leagueName=e.data[0].round.season.league.name,i(t),sessionStorage.setItem(a,JSON.stringify(t))):(t.error="season empty",i(t))}),(function(e){i({isLoaded:!1,error:"error "+e.response})}))}),[]),c.error?r.a.createElement("div",null,r.a.createElement("h1",null,c.error)):c.isLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,c.leagueName),r.a.createElement("h1",null,c.season),r.a.createElement(K,{seasonId:c.id}),r.a.createElement("h1",null,"Matches"),r.a.createElement(me.a,{item:!0,container:!0,xs:12},c.matches.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(ue,{d:e,getMatchTwo:function(e,t){return null}}))})))):r.a.createElement("div",null,"Loading...")}var rt=a(15);var st=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(rt.c,null,r.a.createElement(rt.a,{path:"/",exact:!0,component:b}),r.a.createElement(rt.a,{path:"/sports",component:$}),r.a.createElement(rt.a,{path:"/matches",component:je}),r.a.createElement(rt.a,{path:"/admin",component:et}),r.a.createElement(rt.a,{path:"/team/:id",component:tt}),r.a.createElement(rt.a,{path:"/season/:id",exact:!0,component:nt}),r.a.createElement(rt.a,{path:"/league/:id",exact:!0,component:at}))))};o.a.render(r.a.createElement(st,null),document.getElementById("root"))},79:function(e,t,a){e.exports=a.p+"static/media/s.81ee673f.jpg"}},[[137,1,2]]]);
//# sourceMappingURL=main.f310802c.chunk.js.map