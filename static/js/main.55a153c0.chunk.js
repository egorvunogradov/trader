(this.webpackJsonptradr=this.webpackJsonptradr||[]).push([[0],{142:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(16),s=n.n(i),r=n(15),o=n.n(r),l=n(22),u=n.n(l),j=n(27),d=n(18),b=n(14),p=(n(141),n(142),n(31)),m=n(32),f=n(34),h=n(33),O=n(4),x=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).getjoinbinc=function(){var e=c.props.pairs;fetch("https://api.binance.com/api/v3/ticker/price?symbol=".concat(e)).then((function(e){return e.json()})).then((function(e){c.setState({isLoaded:!0,price:e.price})}),(function(e){c.setState({isLoaded:!0,error:e})}))},c.adf=function(){var e=Math.floor(10*Math.random());c.state.price>=c.state.coindef?(c.state.coindef=c.state.price,c.setState({color:"bggreen"})):(c.state.coindef=c.state.price,c.setState({color:"bgred"})),c.state.coindef<100?e/2?c.setState({price:Number(c.state.coindef)+.01}):c.setState({price:Number(c.state.coindef)-.01}):e/2?c.setState({price:Number(c.state.coindef)+.5}):c.setState({price:Number(c.state.coindef)-.5})},c.state={error:null,isLoaded:!1,price:0,color:"bggreen",coindef:0,price2:0},c}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.getjoinbinc,6e4),this.interval=setInterval(this.adf,4e3)}},{key:"render",value:function(){var e=this.props.fullname,t=this.props.coinname,n="img/".concat(t,".png"),c=(this.props.pairs,this.state),a=c.error,i=(c.isLoaded,Math.ceil(100*this.state.coindef)/100),s=this.state.color;return a?Object(O.jsx)("div",{children:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445:("}):0==i?(this.getjoinbinc(),Object(O.jsx)("div",{className:"isNotLoaded__Coin"})):Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("img",{className:"coinImg",src:n}),Object(O.jsx)("div",{className:"coinName",children:t}),Object(O.jsx)("div",{className:"coinNameTwo",children:e}),Object(O.jsx)("div",{className:s,id:"coinResult",children:i})]})}}]),n}(a.a.Component),v=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(b.c,{children:"\u0422\u0440\u0435\u0439\u0434\u0435\u0440"}),Object(O.jsx)(b.e,{}),Object(O.jsx)(x,{pairs:"BTCUSDT",coinname:"BTC",fullname:"Bitcoin"}),Object(O.jsx)(x,{pairs:"BNBUSDT",coinname:"BNB",fullname:"Binance"}),Object(O.jsx)(x,{pairs:"ETHUSDT",coinname:"ETH",fullname:"Ethereum"}),Object(O.jsx)(x,{pairs:"BCCUSDT",coinname:"BCC",fullname:"Bitcoin Cash"}),Object(O.jsx)(x,{pairs:"NEOUSDT",coinname:"NEO",fullname:"Neo"}),Object(O.jsx)(x,{pairs:"LTCUSDT",coinname:"LTC",fullname:"Litecoin"}),Object(O.jsx)(x,{pairs:"QTUMUSDT",coinname:"QTUM",fullname:"Qtum "}),Object(O.jsx)(x,{pairs:"XRPUSDT",coinname:"XRP",fullname:"Ripple"}),Object(O.jsx)(x,{pairs:"EOSUSDT",coinname:"EOS",fullname:"Eos"}),Object(O.jsx)(x,{pairs:"ETCUSDT",coinname:"ETC",fullname:"Ethereum Classic"})]})},S=function(){var e=Object(c.useState)("home"),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(d.a)(i,2),r=s[0],l=s[1],p=Object(c.useState)(Object(O.jsx)(b.d,{size:"large"})),m=Object(d.a)(p,2),f=m[0],h=m[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,l(t),h(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),function(){e.apply(this,arguments)}()}),[]);return Object(O.jsx)(b.a,{children:Object(O.jsx)(b.b,{children:Object(O.jsx)(b.g,{activePanel:n,popout:f,children:Object(O.jsx)(v,{id:"home",fetchedUser:r,go:function(e){a(e.currentTarget.dataset.to)}})})})})};s.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.55a153c0.chunk.js.map