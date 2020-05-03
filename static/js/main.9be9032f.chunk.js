(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),i=a.n(s),o=(a(70),a(10)),l=a(11),c=a(13),m=a(12),u=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black pa3 pointer"},"Register"))},h=a(62),g=a.n(h),p=a(63),d=a.n(p),b=(a(71),function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:35},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3"}," ",r.a.createElement("img",{style:{paddingTop:"5px"},src:d.a,alt:"brain"})," ")))}),E=(a(72),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 washed-blue"},"This Magic Brain will detect faces in your picture. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),f=function(e){var t=e.name,a=e.entries;return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is ...")),r.a.createElement("div",{className:"white f2"},a))},w=(a(73),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://arcane-waters-83680.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",null,r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e("register")},href:"#0",className:"f6 pointer dim black db"},"Register")))))}}]),a}(n.Component),A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({registerName:e.target.value})},n.onEmailChange=function(e){n.setState({registerEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({registerPassword:e.target.value})},n.onSubmitRegister=function(){fetch("https://arcane-waters-83680.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.registerName,email:n.state.registerEmail,password:n.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={registerName:"",registerEmail:"",registerPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",null,r.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register!"})))))}}]),a}(n.Component),C=(a(74),a(64)),y=a.n(C),I={particles:{number:{value:50,density:{enable:!0,value_area:800}}}},N={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onRouteChange=function(t){"signout"===t?e.setState(N):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.calculateFaceLocation=function(e){console.log(e);var t=e.outputs[0].data.regions[0].region_info.bounding_box;console.log(t);var a=document.getElementById("inputImage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,rightCol:n-t.right_col*n,topRow:t.top_row*r,bottomRow:r-t.bottom_row*r}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(t){e.setState({imageUrl:e.state.input}),fetch("https://arcane-waters-83680.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://arcane-waters-83680.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state=N,e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{className:"particles",params:I}),r.a.createElement(u,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(f,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(w,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?r.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(A,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(223);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){e.exports="data:image/png;base64,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"},65:function(e,t,a){e.exports=a(224)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.9be9032f.chunk.js.map