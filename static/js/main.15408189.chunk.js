(this["webpackJsonpecommerce-book-web-shop"]=this["webpackJsonpecommerce-book-web-shop"]||[]).push([[0],{116:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(13),r=n.n(c),i=(n(116),n(7)),s=n.n(i),o=n(12),l=n(10),j=n(206),d=n(198),b=n(22),u=n(15),p=n(89),h=new(n.n(p).a)("pk_28890d12f9514e8b88de2bb03d4408d525ccd510efc85",!0),m=n(193),x=n(66),O=n(186),g=n(188),f=n(189),v=n(190),y=n(191),k=n(192),C=n(94),w=n.n(C),N=n(184),S=Object(N.a)((function(){return{root:{maxWidth:"100%",minHeight:"500px",overflow:"hidden"},media:{paddingTop:"100%"},cardContent:{display:"block"},CardActions:{display:"flex",justifyContent:"flex-end"},cardContentDescription:{height:"100px",overflow:"hidden"}}})),B=n(2),_=function(t){var e=t.product,n=t.onAddToCart,a=S();return Object(B.jsxs)(O.a,{className:a.root,children:[Object(B.jsx)(g.a,{className:a.media,image:e.media.source,title:e.name}),Object(B.jsxs)(f.a,{children:[Object(B.jsxs)("div",{className:a.cardContent,children:[Object(B.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:e.name}),Object(B.jsx)(x.a,{variant:"h6",children:e.price.formatted_with_symbol})]}),Object(B.jsx)("div",{className:a.cardContentDescription,children:Object(B.jsx)(x.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})})]}),Object(B.jsxs)(v.a,{disableSpacing:!0,className:a.CardActions,children:[Object(B.jsx)(y.a,{"arial-label":"details",title:"Details",children:Object(B.jsx)(b.b,{to:"/products/".concat(e.id),children:Object(B.jsx)(w.a,{})})}),Object(B.jsx)(y.a,{"arial-label":"Add to Cart",title:"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(B.jsx)(k.a,{})})]})]})},T=Object(N.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),I=function(t){var e=t.products,n=t.onAddToCart,a=T();return 0===e.length?Object(B.jsxs)("section",{className:a.content,children:[Object(B.jsx)("div",{className:a.toolbar}),Object(B.jsx)(m.a,{container:!0,justifyContent:"center",spacing:4,children:Object(B.jsx)(x.a,{variant:"h2",gutterBottom:!0,children:"Can not load books"})})]}):Object(B.jsxs)("section",{className:a.content,children:[Object(B.jsx)("div",{className:a.toolbar}),Object(B.jsx)(m.a,{container:!0,justifyContent:"center",spacing:4,children:Object(B.jsx)(x.a,{variant:"h2",gutterBottom:!0,children:"BOOKS"})}),Object(B.jsx)(m.a,{container:!0,justifyContent:"center",spacing:4,children:e.map((function(t){return Object(B.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(B.jsx)(_,{product:t,onAddToCart:n})},t.id)}))})]})},A=n(194),D=n(195),E=n(196),R=n(95),L=n.n(R),P=n.p+"static/media/commerce.6be6b89c.png",F=n(14),W=n(19),q=Object(N.a)((function(t){var e;return{appBar:(e={boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},Object(F.a)(e,t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),Object(F.a)(e,"background","#424242"),e),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(F.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(F.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(W.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(F.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),z=function(t){var e=t.totalItems,n=q(),a=Object(u.g)();return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(A.a,{position:"fixed",className:n.appBar,color:"secondary",children:Object(B.jsxs)(D.a,{children:[Object(B.jsxs)(x.a,{component:b.b,to:"/products",variant:"h6",className:n.title,color:"inherit",children:[Object(B.jsx)("img",{src:P,alt:"Commerce.js",height:"25px",className:n.image}),"Crime Novel Store"]}),Object(B.jsx)("div",{className:n.grow}),a.pathname.includes("/products")&&Object(B.jsx)("div",{className:n.button,children:Object(B.jsx)(y.a,{component:b.b,to:"/cart","arial-label":"show cart item",color:"inherit",children:Object(B.jsx)(E.a,{badgeContent:e,color:"secondary",children:Object(B.jsx)(L.a,{})})})})]})})})};z.defaultProps={totalItems:0};var G=z,Q=Object(N.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(F.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(F.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",marginBottom:"10%",width:"100%",justifyContent:"space-between"}}})),U=function(){var t=Q();return Object(B.jsxs)(x.a,{variant:"subtitle1",children:["You dont have items in your shopping cart,",Object(B.jsx)(b.b,{to:"/products",className:t.Link,children:"start adding some!"})]})},H=n(197),J=Object(N.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),M=function(t){var e=t.item,n=t.onRemoveFromCart,a=t.onUpdateCartQty,c=J();return Object(B.jsxs)(O.a,{children:[Object(B.jsx)(g.a,{image:e.media.source,alt:e.name,className:c.media}),Object(B.jsxs)(f.a,{className:c.cardContent,children:[Object(B.jsx)(x.a,{variant:"h4",children:e.name}),Object(B.jsx)(x.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(B.jsxs)(v.a,{className:c.CardAction,children:[Object(B.jsxs)("div",{className:c.buttons,children:[Object(B.jsx)(H.a,{type:"button",size:"small",onClick:function(){return a(e.id,e.quantity-1)},children:"-"}),Object(B.jsx)(x.a,{children:e.quantity}),Object(B.jsx)(H.a,{type:"button",size:"small",onClick:function(){return a(e.id,e.quantity+1)},children:"+"})]}),Object(B.jsx)(H.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return n(e.id)},children:"Remove"})]})]})},Y=function(t){var e=t.cart,n=t.handleEmptyCart,a=t.handleRemoveFromCart,c=t.handleUpdateCartQty,r=Q();return Object(B.jsxs)(m.a,{container:!0,spacing:3,children:[Object(B.jsx)(m.a,{container:!0,item:!0,xs:12,spacing:3,children:e.line_items.map((function(t){return Object(B.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(B.jsx)(M,{item:t,onRemoveFromCart:a,onUpdateCartQty:c})},t.id)}))}),Object(B.jsx)(m.a,{container:!0,item:!0,xs:12,children:Object(B.jsxs)("div",{className:r.cardDetails,children:[Object(B.jsx)("div",{children:Object(B.jsxs)(x.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]})}),Object(B.jsxs)("div",{children:[Object(B.jsx)(H.a,{className:r.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:n,children:"Empty Cart"}),Object(B.jsx)(H.a,{className:r.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",component:b.b,to:"/checkout",children:"Checkout"})]})]})})]})},K=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,c=t.handleEmptyCart,r=Q();return e.line_items?Object(B.jsxs)(d.a,{children:[Object(B.jsx)("div",{className:r.toolbar}),Object(B.jsx)(x.a,{className:r.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(B.jsx)(Y,{cart:e,handleEmptyCart:c,handleUpdateCartQty:n,handleRemoveFromCart:a}):Object(B.jsx)(U,{})]}):"Loading..."},Z=Object(N.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},DetailsImage:{width:"100%"},Description:{marginBottom:"40px"}}})),V=function(t){var e=t.onAddToCart,n=Z(),c=Object(u.h)(),r=Object(a.useState)({}),i=Object(l.a)(r,2),j=i[0],d=i[1],b=Object(a.useState)(!1),p=Object(l.a)(b,2),O=p[0],g=p[1],f=Object(u.f)(),v=function(){var t=Object(o.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.products.retrieve(e);case 3:n=t.sent,d(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),g(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){c.params.id&&v(c.params.id)}),[]),O?Object(B.jsxs)("section",{className:n.content,children:[Object(B.jsx)("div",{className:n.toolbar}),Object(B.jsx)(m.a,{container:!0,justifyContent:"center",spacing:4,children:Object(B.jsx)(x.a,{variant:"h2",children:"Book Does Not Exists"})})]}):Object(B.jsxs)("section",{className:n.content,children:[Object(B.jsx)("div",{className:n.toolbar}),Object(B.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:4,children:[Object(B.jsx)(m.a,{item:!0,xs:12,children:Object(B.jsx)(x.a,{variant:"h3",gutterBottom:!0,align:"center",children:"Book Details"})}),0===Object.keys(j).length?"Loading...":Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(m.a,{item:!0,xs:12,sm:5,children:Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:"".concat(j.media.source),alt:"book",className:n.DetailsImage})})}),Object(B.jsxs)(m.a,{item:!0,xs:12,sm:7,children:[Object(B.jsxs)("div",{className:n.Description,children:[Object(B.jsx)(x.a,{variant:"h6",children:j.name}),Object(B.jsxs)(x.a,{variant:"h6",gutterBottom:!0,children:["Price: ",j.price.formatted_with_symbol]}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",children:"Description"}),Object(B.jsx)(x.a,{dangerouslySetInnerHTML:{__html:j.description},variant:"body1",color:"textSecondary"})]}),Object(B.jsxs)("div",{className:n.Description,children:[Object(B.jsx)(x.a,{variant:"h6",color:"textSecondary",children:"Add to cart"}),Object(B.jsx)(y.a,{"arial-label":"Add to Cart",title:"Add to Cart",onClick:function(){return e(j.id,1)},children:Object(B.jsx)(k.a,{})})]}),Object(B.jsx)("div",{className:n.Description,children:Object(B.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){f.length>1&&f.goBack(),f.push("/products")},children:"Go Back"})})]})]})]})]})},X=n(208),$=Object(N.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},DetailsImage:{width:"100%"},PictureBackground:{border:"1px solid black",maxWidth:"600px",height:"80vh",margin:"0px auto",position:"relative",overflow:"hidden"},PictureCriminalBackground:Object(F.a)({position:"absolute",top:"0px",bottom:"0px"},t.breakpoints.down("sm"),{width:"100%"}),PictureCriminal:{position:"absolute",right:"0px",bottom:"0px",transition:"10s","&:hover":{transform:"scale(1.3, 1.3)"}},BlockquoteContainer:{maxWidth:"600px",margin:"0px auto",borderLeft:"8px solid rgba(173,163,147,.25)",color:"#ada393",textAlign:"justify"}}})),tt=n.p+"static/media/crimescene.656a4040.jpg",et=n.p+"static/media/criminal.bb6cb7ca.png",nt=function(){var t=$();return Object(B.jsxs)("section",{className:t.content,children:[Object(B.jsx)("div",{className:t.toolbar}),Object(B.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:4,children:[Object(B.jsx)(x.a,{variant:"h2",gutterBottom:!0,children:"Crime Novel Store"}),Object(B.jsx)(m.a,{item:!0,xs:12,children:Object(B.jsx)("div",{className:t.PictureBackground,style:{backgroundImage:"url(".concat(tt,")")},children:Object(B.jsx)("img",{src:et,alt:"criminal",className:t.PictureCriminal})})}),Object(B.jsx)(m.a,{item:!0,xs:12,children:Object(B.jsx)(X.a,{component:"blockquote",className:t.BlockquoteContainer,children:Object(B.jsx)(X.a,{component:"p",marginBottom:"0",padding:"10px",fontWeight:"300",lineHeight:"1.7",fontSize:"1rem",children:"When I finally caught up with Abraham Trahearne, he was drinking beer with an alcoholic bulldog named Fireball Roberts in a ramshackle joint just outside of Sonoma, California, drinking the heart right out of a fine spring afternoon."})})}),Object(B.jsx)(m.a,{item:!0,xs:12,children:Object(B.jsx)(X.a,{component:"blockquote",className:t.BlockquoteContainer,children:Object(B.jsx)(X.a,{component:"p",marginBottom:"0",padding:"10px",fontWeight:"300",lineHeight:"1.7",fontSize:"1rem",children:"It was about eleven o\u2019clock in the morning, mid October, with the sun not shining and a look of hard wet rain in the clearness of the foothills. I was wearing my powder-blue suit, with dark blue shirt, tie and display handkerchief, black brogues, black wool socks with dark blue clocks on them. I was neat, clean, shaved and sober, and I didn\u2019t care who knew it. I was everything the well-dressed private detective ought to be. I was calling on four million dollars."})})})]})]})},at=n(98),ct=n(214),rt=n(205),it=n(210),st=n(209),ot=Object(N.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(F.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(F.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(F.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),lt=n(201),jt=n(65),dt=n(96),bt=n(199),ut=n(156),pt=n(200),ht=function(t){var e=t.checkoutToken;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:"Order Summery"}),Object(B.jsxs)(bt.a,{disablePadding:!0,children:[e.live.line_items.map((function(t){return Object(B.jsxs)(ut.a,{styles:{padding:"10px 0"},children:[Object(B.jsx)(pt.a,{primary:t.name,secondary:"Quantity: ".concat(t.quantity)}),Object(B.jsx)(x.a,{variant:"body2",children:t.line_total.formattes_with_symbol})]},t.name)})),Object(B.jsxs)(ut.a,{styles:{padding:"10px 0"},children:[Object(B.jsx)(pt.a,{primary:"Total"}),Object(B.jsx)(x.a,{variant:"subtitle1",styles:{fontWeight:700},children:e.live.subtotal.formatted_with_symbol})]})]})]})},mt=Object(dt.a)(" ... "),xt=function(t){t.shippingData;var e=t.checkoutToken,n=t.backStep;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ht,{checkoutToken:e}),Object(B.jsx)(lt.a,{}),Object(B.jsx)(x.a,{variant:"h6",gutterBottom:!0,style:{margine:"20px 0"},children:"Payment method"}),Object(B.jsx)(jt.Elements,{stripe:mt,children:Object(B.jsx)(jt.ElementsConsumer,{children:function(t,a){return Object(B.jsxs)("form",{children:[Object(B.jsx)(jt.CardElement,{}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(B.jsx)(H.a,{variant:"outlined",onClick:n,children:"Back"}),Object(B.jsxs)(H.a,{type:"submit",variant:"contained",disabled:!a,color:"primary",children:["Pay",e.live.subtotal.formatted_with_symbol]})]})]})}})})]})},Ot=function(){return console.log("Confirmation"),Object(B.jsx)("div",{children:"Confirmation"})},gt=n(58),ft=n(213),vt=n(207),yt=n(204),kt=n(53),Ct=n(211),wt=function(t){var e=t.name,n=t.label,a=Object(kt.d)().control;return Object(B.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(B.jsx)(kt.a,{name:e,control:a,render:function(t){t.field;return Object(B.jsx)(Ct.a,{fullWidth:!0,label:n,required:!0})}})})},Nt=function(t){var e=t.checkoutToken,n=t.next,c=Object(kt.c)(),r=Object(a.useState)([]),i=Object(l.a)(r,2),j=i[0],d=i[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),O=p[0],g=p[1],f=Object(a.useState)([]),v=Object(l.a)(f,2),y=v[0],k=v[1],C=Object(a.useState)(""),w=Object(l.a)(C,2),N=w[0],S=w[1],_=Object(a.useState)([]),T=Object(l.a)(_,2),I=(T[0],T[1],Object(a.useState)("")),A=Object(l.a)(I,2),D=A[0],E=(A[1],Object(a.useState)(!1)),R=Object(l.a)(E,2),L=R[0],P=R[1],F=Object.entries(j).map((function(t){var e=Object(l.a)(t,2);return{id:e[0],label:e[1]}})),W=Object.entries(y).map((function(t){var e=Object(l.a)(t,2);return{id:e[0],label:e[1]}})),q=function(){var t=Object(o.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.services.localeListShippingCountries(e);case 3:n=t.sent,d(n.countries),g(Object.keys(n.countries)[0]),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),P(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(o.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.services.localeListSubdivisions(e);case 3:n=t.sent,k(n.subdivisions),S(Object.keys(n.subdivisions)[0]),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),P(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){null!==e&&q(e.id)}),[]),Object(a.useEffect)((function(){O&&z(O)}),[O]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(x.a,{varinat:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(B.jsx)(kt.b,Object(gt.a)(Object(gt.a)({},c),{},{children:Object(B.jsxs)("form",{onSubmit:c.handleSubmit((function(t){return n(Object(gt.a)(Object(gt.a)({},t),{},{shippingCountry:O,shippingSubdivision:N,shippingOption:D}))})),children:[Object(B.jsxs)(m.a,{container:!0,spacing:3,children:[Object(B.jsx)(wt,{name:"firstName",label:"First Name"}),Object(B.jsx)(wt,{name:"lastName",label:"Last Name"}),Object(B.jsx)(wt,{name:"address1",label:"Address"}),Object(B.jsx)(wt,{name:"email",label:"Emial"}),Object(B.jsx)(wt,{name:"city",label:"City"}),Object(B.jsx)(wt,{name:"zip",label:"ZIP / Postal code"}),Object(B.jsxs)(m.a,{item:!0,xs:12,sm:6,children:[Object(B.jsx)(ft.a,{children:"Shipping Country"}),Object(B.jsx)(vt.a,{value:O,fullWidth:!0,onChange:function(t){return g(t.target.value)},children:F.map((function(t){return Object(B.jsx)(yt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(B.jsxs)(m.a,{item:!0,xs:12,sm:6,children:[Object(B.jsx)(ft.a,{children:"Shipping Subdivisions"}),Object(B.jsx)(vt.a,{value:N,fullWidth:!0,onChange:function(t){return S(t.target.value)},children:W.map((function(t){return Object(B.jsx)(yt.a,{value:t.id,children:t.label},t.id)}))})]})]}),Object(B.jsx)("br",{}),Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(B.jsx)(H.a,{component:b.b,to:"/cart",variant:"outlined",children:"Back to Cart"}),Object(B.jsx)(H.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})})),Object(B.jsx)(X.a,{mt:3,children:L&&Object(B.jsx)(st.a,{severity:"error",m:5,children:"Problem With Shipping Countries"})})]})},St=["Shipping address","Payment details"],Bt=function(t){var e=t.cart,n=Object(a.useState)(0),c=Object(l.a)(n,2),r=c[0],i=c[1],j=Object(a.useState)(null),d=Object(l.a)(j,2),b=d[0],u=d[1],p=Object(a.useState)({}),m=Object(l.a)(p,2),O=m[0],g=m[1],f=Object(a.useState)(!1),v=Object(l.a)(f,2),y=v[0],k=v[1],C=ot();Object(a.useEffect)((function(){e.id&&function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),k(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var w=function(){return i((function(t){return t-1}))},N=function(t){g(t),i((function(t){return t+1}))},S=function(){return 0===r?Object(B.jsx)(Nt,{checkoutToken:b,next:N}):Object(B.jsx)(xt,{shippingData:O,checkoutToken:b,backStep:w})};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:C.toolbar}),Object(B.jsxs)("main",{className:C.layout,children:[Object(B.jsxs)(at.a,{className:C.paper,children:[Object(B.jsx)(x.a,{variant:"h4",algin:"center",children:"Checkout"}),Object(B.jsx)(ct.a,{activeStep:r,className:C.Stepper,children:St.map((function(t){return Object(B.jsx)(rt.a,{children:Object(B.jsx)(it.a,{children:t})},t)}))}),r===St.length?Object(B.jsx)(Ot,{}):b&&Object(B.jsx)(S,{})]}),Object(B.jsx)(X.a,{mt:3,children:y&&Object(B.jsx)(st.a,{severity:"error",m:5,children:"Problem with token!"})})]})]})};var _t=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),p=i[0],m=i[1],x=Object(a.useState)(!1),O=Object(l.a)(x,2),g=(O[0],O[1],function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.products.list();case 2:e=t.sent,n=e.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),f=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.cart.retrieve();case 3:e=t.sent,m(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.cart.add(e,n);case 3:a=t.sent,m(a.cart),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.cart.update(e,{quantity:n});case 3:a=t.sent,m(a.cart),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.cart.remove(e);case 3:n=t.sent,m(n.cart),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.cart.empty();case 3:e=t.sent,m(e.cart),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(),f()}),[]),Object(B.jsx)(b.a,{basename:"/crimenovel",children:Object(B.jsxs)("div",{children:[Object(B.jsx)(j.a,{}),Object(B.jsx)(G,{totalItems:p.total_items}),Object(B.jsx)(d.a,{children:Object(B.jsxs)(u.c,{children:[Object(B.jsx)(u.a,{exact:!0,path:"/",children:Object(B.jsx)(nt,{})}),Object(B.jsx)(u.a,{exact:!0,path:"/products",children:Object(B.jsx)(I,{products:n,onAddToCart:v})}),Object(B.jsx)(u.a,{expect:!0,path:"/products/:id",children:Object(B.jsx)(V,{onAddToCart:v})}),Object(B.jsx)(u.a,{exact:!0,path:"/cart",children:Object(B.jsx)(K,{cart:p,handleUpdateCartQty:y,handleRemoveFromCart:k,handleEmptyCart:C})}),Object(B.jsx)(u.a,{expect:!0,path:"/checkout",children:Object(B.jsx)(Bt,{cart:p})})]})})]})})};r.a.render(Object(B.jsx)(_t,{}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.15408189.chunk.js.map