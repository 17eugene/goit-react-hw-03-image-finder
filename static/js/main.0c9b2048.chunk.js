(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(8),o=a.n(s),c=(a(14),a(2)),i=a(3),l=a(5),u=a(4),d=a(0),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.onHandleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.submit(e.state.query),e.setState({query:""})):alert("No query entered")},e.state={query:""},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.onHandleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryChange,value:this.state.query})]})})}}]),a}(r.a.Component),m=a(7);function j(e){var t=e.id,a=e.alt,n=e.webformatURL,r=e.largeImageURL,s=e.click;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:n,alt:a,"data-source":r,onClick:s,className:"ImageGalleryItem-image"})},t)}function p(e){var t=e.btnName,a=e.className,n=e.onClick;return Object(d.jsx)("button",{type:"submit",className:a,onClick:n,children:t})}var b=a(9);function g(){return Object(d.jsx)("div",{className:"spinContainer",children:Object(d.jsx)(b.a,{className:"Spinner",size:"80"})})}var y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).keydownHandler=function(t){"Escape"===t.code&&e.props.close()},e.onBackdropCloseClick=function(t){t.currentTarget===t.target&&e.props.close()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keydownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keydownHandler)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"Overlay",onClick:this.onBackdropCloseClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.props.largeImageURL,alt:this.props.alt})})})}}]),a}(r.a.Component),f="22456437-7bc40aa948e36a9aa215a1147",O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).openModalHandler=function(t){e.setState({largeImageURL:t.target.dataset.source,alt:t.target.alt})},e.closeModalHandler=function(){e.setState({largeImageURL:"",alt:""})},e.loadMoreHandler=function(t){var a=e.state.page+1,n="https://pixabay.com/api/?q=".concat(e.props.query,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12");fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error('"Something gone wrong"'))})).then((function(t){return e.setState((function(e){return{gallery:[].concat(Object(m.a)(e.gallery),Object(m.a)(t.hits)),page:e.page+1}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.state={status:"idle",page:null,gallery:null},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n="https://pixabay.com/api/?q=".concat(this.props.query,"&page=1&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12");e.query!==this.props.query&&(this.setState({status:"pending"}),fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something gone wrong"))})).then((function(e){return 0===e.total?a.setState({error:"Image(s) not found",status:"rejected"}):a.setState({gallery:e.hits,page:1,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this;return"idle"===this.state.status?Object(d.jsx)(p,{className:"Hidden"}):"pending"===this.state.status?Object(d.jsx)(g,{}):"rejected"===this.state.status?Object(d.jsx)("p",{children:this.state.error}):"resolved"===this.state.status?Object(d.jsxs)("div",{className:"GalleryContainer",children:[Object(d.jsx)("ul",{className:"ImageGallery",children:this.state.gallery.map((function(t){return Object(d.jsx)(j,{alt:t.tags,webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,click:e.openModalHandler},t.id)}))}),Object(d.jsx)("div",{className:"BtnContainer",children:Object(d.jsx)(p,{className:"Button",btnName:"Load more",onClick:this.loadMoreHandler})}),this.state.largeImageURL&&Object(d.jsx)(y,{close:this.closeModalHandler,largeImageURL:this.state.largeImageURL,alt:this.state.alt})]}):void 0}}]),a}(r.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleFormSubmit=function(t){e.setState({query:t})},e.state={query:""},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{submit:this.handleFormSubmit}),Object(d.jsx)(O,{query:this.state.query})]})}}]),a}(r.a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c9b2048.chunk.js.map