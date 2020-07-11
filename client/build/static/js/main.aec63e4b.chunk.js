(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(64)},37:function(e,t,n){},56:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(24),c=n.n(r),l=(n(37),n(25)),u=n(26),i=n(30),s=n(27),m=n(31);var h=function(e){return o.a.createElement("div",{className:"books"},o.a.createElement("h1",null,"Books"),o.a.createElement("label",{htmlFor:"search"},"Search:"),o.a.createElement("input",{placeholder:"Search Book",onChange:e.handleInputChange,value:e.value,name:"search",type:"text",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit},"Search"))},v=n(9),d=n.n(v),f={search:function(e){return d.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}};var k=function(e){var t=o.a.createRef();return o.a.createElement("div",null,e.results.map(function(n){return o.a.createElement("div",{key:n.id,ref:t},"Book: ",n.volumeInfo.title,"Author: ",n.volumeInfo.authors[0],"Description: ",n.volumeInfo.description,o.a.createElement("img",{src:n.volumeInfo.imageLinks.thumbnail}),o.a.createElement("a",{href:n.volumeInfo.canonicalVolumeLink},"See Book"),o.a.createElement("button",{onClick:function(t){return e.saveFunc(t,n)}},"Save Book"))}))},p=n(28),g=n(2);n(55);var E=function(e){return o.a.createElement("div",null,e.myBooks.map(function(t){return o.a.createElement("div",{key:t._id},"Book: ",t.title,"Author: ",t.author,"Description: ",t.description,o.a.createElement("img",{src:t.imageLink}),o.a.createElement("a",{href:t.link},"See Book"),o.a.createElement("button",{onClick:function(n){return e.delFunc(n,t)}},"DeleteBook"))}))},b=(n(56),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",result:[],mySavedBooks:[]},n.handleInputChange=function(e){var t=e.target.value;n.setState({search:t})},n.handleFormSubmit=function(e){e.preventDefault(),f.search(n.state.search).then(function(e){return n.setState({result:e.data.items})}).catch(function(e){return console.log(e)})},n.saveFunc=function(e,t){e.preventDefault();var n={title:t.volumeInfo.title,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,link:t.volumeInfo.canonicalVolumeLink,imageLink:t.volumeInfo.imageLinks.thumbnail};d.a.post("http://localhost:3000/api/save-book",n).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.delFunc=function(e,t){e.preventDefault(),d.a.delete("http://localhost:3000/api/delete-book/".concat(t._id)).then(n.getMyBooks())},n.getMyBooks=function(){d.a.get("http://localhost:3000/api/get-books").then(function(e){return n.setState({mySavedBooks:e.data})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMyBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{value:e.state.search,handleInputChange:e.handleInputChange,handleFormSubmit:e.handleFormSubmit}),o.a.createElement(k,{results:e.state.result,saveFunc:e.saveFunc}))}}),o.a.createElement(g.a,{path:"/saved-books",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{myBooks:e.state.mySavedBooks,delFunc:e.delFunc}))}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[32,1,2]]]);
//# sourceMappingURL=main.aec63e4b.chunk.js.map