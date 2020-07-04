(this.webpackJsonpnotes_keeper=this.webpackJsonpnotes_keeper||[]).push([[0],{50:function(e,t,n){e.exports=n(74)},60:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(17),c=n(5),s=n(47),u=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},n,{render:function(e){return localStorage.getItem("as")?r.a.createElement(t,e):r.a.createElement(c.a,{to:{pathname:"/",state:{from:e.location}}})}}))},m=n(24),d=n.n(m),p=n(32),h=n(18),E=n(19),f=n(23),g=n(22),b=(n(60),new(function(){function e(){Object(h.a)(this,e),this.authenticated=!1}return Object(E.a)(e,[{key:"login",value:function(e){this.authenticated=!0,localStorage.setItem("as",this.authenticated),e()}},{key:"logout",value:function(e){this.authenticated=!1,localStorage.removeItem("as"),e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}())),v=n(26),w=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={email:null,password:null,loginError:""},a}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return this.userTyping=function(t,n){switch(t){case"email":e.setState({email:n.target.value});break;case"password":e.setState({password:n.target.value})}},this.submitLogin=function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),v.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){b.login((function(){e.props.history.push("/dashboard")}))}),(function(t){e.setState({loginError:"Invalid Credentials!"}),setTimeout((function(){window.location.reload(!1)}),1e3)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.a.createElement("div",{id:"container"},r.a.createElement("h1",{id:"nk"},"Notes Keeper"),r.a.createElement("div",{id:"login"},r.a.createElement("h2",null,"Login!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){return e.submitLogin(t)}},r.a.createElement("input",{type:"email",id:"email1",placeholder:"Enter your email...",onChange:function(t){return e.userTyping("email",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password1",placeholder:"Enter your password...",onChange:function(t){return e.userTyping("password",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.loginError?r.a.createElement("h4",null,this.state.loginError):null,r.a.createElement("p",null,"Don't have an account ?"),r.a.createElement("div",{id:"sbn"},r.a.createElement(l.b,{to:"/signup",style:{textDecoration:"none",color:"#0067B8",fontSize:"19px"}},"Create account!")," ",r.a.createElement("button",{type:"submit",id:"log"}," Login ")))))}}]),n}(r.a.Component),y=(n(71),n(26)),S=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={email:null,password:null,confirm_password:null,signUpError:""},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return this.formValid=function(){return e.state.password===e.state.confirm_password},this.userTyping=function(t,n){switch(t){case"email":e.setState({email:n.target.value});break;case"password":e.setState({password:n.target.value});break;case"confirm_password":e.setState({confirm_password:n.target.value})}},this.submitSignUp=function(t){t.preventDefault(),e.formValid()?y.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){y.firestore().collection("users").doc(e.state.email).collection("notes").doc().set({title:null,body:null}).then((function(){e.props.history.push("/")}),(function(t){e.setState({signUpError:"Failed to add User"}),setTimeout((function(){window.location.reload(!1)}),1e3)}))}),(function(t){e.setState({signUpError:"Email or password is Invalid.."}),setTimeout((function(){window.location.reload(!1)}),1e3)})):e.setState({signUpError:"Password Mismatch!!"})},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{id:"nk"},"Notes Keeper"),r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"Sign Up!"),r.a.createElement("form",{onSubmit:function(t){return e.submitSignUp(t)},id:"signUp"},r.a.createElement("input",{type:"email",onChange:function(t){return e.userTyping("email",t)},id:"email",placeholder:"Enter a valid Email..."}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.userTyping("password",t)},placeholder:"Enter your password.."}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(t){return e.userTyping("confirm_password",t)},id:"confirm_password",placeholder:"Confirm Password... "}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"sbtn"},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none",color:"#0067B8",fontSize:"15px"}},"Already have an account?"),r.a.createElement("button",{id:"sign"},"Sign Up"))),this.state.signUpError?r.a.createElement("h2",{id:"err"},this.state.signUpError):null))}}]),n}(r.a.Component),k=n(46),O=(n(72),n(26),n(96)),j=n(94),I=n(97),C=n(95),x=n(92),U=Object(x.a)({root:{minWidth:160,maxWidth:300,spacing:20,maxHeight:300,marginRight:30,marginTop:40,overflowY:"scroll"},content:{fontSize:20},title:{fontWeight:"bolder"}});var T=function(e){var t=U();return r.a.createElement(O.a,{className:t.root},r.a.createElement(j.a,null,r.a.createElement(I.a,{component:"h5",variant:"h5",className:t.title},e.title),r.a.createElement(C.a,null),r.a.createElement(I.a,{variant:"h6",component:"h6",className:t.content},e.content)))},N=n(26),D=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).componentDidMount=function(){N.auth().onAuthStateChanged(function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n?N.firestore().collection("users").doc(n.email).collection("notes").doc().onSnapshot((function(e){console.log(e.value)})):e.props.history.push("/");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={addItems:[{content:null,title:null}],content:null,title:null},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this;return this.change=function(t,n){switch(t){case"title":e.setState({title:n.target.value});break;case"content":e.setState({content:n.target.value})}document.getElementById("title").style.display="inline-block"},this.contentSubmit=function(t){t.preventDefault(),document.getElementById("title").value="",document.getElementById("title").style.display="none",document.getElementById("notes").value="",console.log(e.state)},this.sub=function(){e.setState({addItems:[].concat(Object(k.a)(e.state.addItems),[{content:e.state.content,title:e.state.title}])}),e.setState({title:""}),e.setState({content:""}),console.log(e.state.addItems.content)},r.a.createElement("div",{id:"dashboard"},r.a.createElement("header",{id:"header"},r.a.createElement("h3",null,"NOTES KEEPER"),r.a.createElement("button",{id:"logout",onClick:function(){b.logout((function(){e.props.history.push("/")}))}},"Logout")),r.a.createElement("div",{id:"containers"},r.a.createElement("div",{id:"inp"},r.a.createElement("form",{onSubmit:function(t){return e.contentSubmit(t)}},r.a.createElement("input",{type:"text",id:"title",name:"title",placeholder:"Title:",onChange:function(t){return e.change("title",t)}}),r.a.createElement("br",null),r.a.createElement("textarea",{id:"notes",name:"content",placeholder:"Enter Your Notes..",onChange:function(t){return e.change("content",t)}}),r.a.createElement("br",null),r.a.createElement("button",{id:"add",type:"submit",onClick:function(){return e.sub()}},"ADD"))),r.a.createElement("div",{id:"content"},this.state.addItems.map((function(e,t){return e.content?r.a.createElement(T,{title:e.title,content:e.content,key:t,id:t}):null})))))}}]),n}(r.a.Component),B={apiKey:"AIzaSyBXurZM-m2wG9Cx39plrEC0noOPYNX8tGQ",authDomain:"notes-keeper-41813.firebaseapp.com",databaseURL:"https://notes-keeper-41813.firebaseio.com",projectId:"notes-keeper-41813",storageBucket:"notes-keeper-41813.appspot.com",messagingSenderId:"167442508358",appId:"1:167442508358:web:3e50bf9a3e198e4b1ab847",measurementId:"G-FMSJZCRCPL"},A=r.a.createElement(l.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,component:w}),r.a.createElement(c.b,{path:"/signup",exact:!0,component:S}),r.a.createElement(u,{path:"/dashboard",exact:!0,component:D}),r.a.createElement(c.b,{path:"*",component:function(){return"404 NOT FOUND"}})))),_=n(26);n(73),_.initializeApp(B),_.analytics(),i.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.ec1a20e4.chunk.js.map