(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(13),n(3)),l=n(4),i=n(6),u=n(5),h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot"}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(h,{key:t,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=(n(14),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading...."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(m,{robots:t}))}}]),n}(a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(b,null))),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.d9efd4bb.chunk.js.map