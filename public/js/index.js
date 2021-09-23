"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[396],{6166:(e,t,n)=>{var r=n(7294),o=n(3935),c=n(5513),a=n(8216),i=n(6709),u=n(5697),l=n(5893),s=["children","url"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const h=function(e){var t=e.children,n=e.url,r=y(e,s);return void 0===n&&(n=""),(0,l.jsx)(c.rU,d(d({to:n},r),{},{children:t}))};var m=n(7183),b=n(9210),v=n(7614),j=n(7119),g=n(9669),O=n.n(g),x=n(5648),w=n(86),_=n(8648),P=n(6808),R=n.n(P);n(6606),w.Z.TextArea;var S=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;_.Z.destroy(),_.Z[e]({message:t,description:n,duration:r})},Z={Accept:"application/json","Content-Type":"application/json","X-CSRF-TOKEN":document.getElementsByTagName("meta")["csrf-token"].getAttribute("content")},k=O().create({baseURL:app.baseUrl}),C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0;return o||(o=Z),k.request({data:n,params:r,headers:o,method:e,url:t}).then((function(e){return e}))},D=x.lX();n(5105);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=m.Z.Content,z=(m.Z.Footer,m.Z.Sider,m.Z.Header);b.Z.SubMenu;const U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(c,e);var t,n,r,o=V(c);function c(e){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),L(N(r=o.call(this,e)),"onCollapse",(function(e){console.log(e),r.setState({collapsed:e})})),L(N(r),"logout",(function(){O().post("/logout").then((function(e){window.location.replace("/register")}))})),L(N(r),"confirmLogout",(function(){v.Z.confirm({title:"Confirm",icon:(0,l.jsx)(j.Z,{}),onOk:r.logout,content:"Are you sure you want to log out?",okText:"Yes, Let me out",cancelText:"Cancel",width:"600px"})}));var a,i=(a="theme",R().get(a));return r.state={collapsed:!1,role:null===(t=app)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.role,theme:i||"light"},r}return t=c,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state;return e.role,e.theme,(0,l.jsxs)(m.Z,{className:"layout",children:[(0,l.jsxs)(z,{children:[(0,l.jsx)("div",{className:"logo"}),(0,l.jsx)(b.Z,{theme:"dark",mode:"horizontal",defaultSelectedKeys:this.props.keyMenu,children:(0,l.jsx)(b.Z.Item,{children:(0,l.jsx)(h,{to:"/",children:"Product Recomend"})},"product-recomend")})]}),(0,l.jsx)(M,{style:{padding:"0 50px"},children:(0,l.jsx)("div",{className:"site-layout-content",children:this.props.children})})]})}}])&&T(t.prototype,n),r&&T(t,r),c}(r.Component);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=W(e);if(t){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}function H(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.Component;var X=n(3286);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=oe(e);if(t){var o=oe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}function ne(e,t){if(t&&("object"===Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return re(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.Component;function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=pe(e);if(t){var o=pe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return fe(this,n)}}function fe(e,t){if(t&&("object"===ae(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return de(e)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.Component;function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=xe(e);if(t){var o=xe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ge(this,n)}}function ge(e,t){if(t&&("object"===he(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Oe(e)}function Oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xe(e){return(xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.Component;n(5749);var _e=n(4794),Pe=n(7031),Re=n(7428),Se=n(331),Ze=n(1577),ke=n(2530),Ce=n(1230),De=n(5746),Ee=n(9650),Te=n(8272),Ae=n(1874),Ve=n(5873);function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e,t){return(Ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Ue(e);if(t){var o=Ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Me(this,n)}}function Me(e,t){if(t&&("object"===Be(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ze(e)}function ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}_e.Z.Step,m.Z.Header,Pe.Z.Option;var $e=Re.Z.TabPane,Ke=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ie(e,t)}(c,e);var t,n,r,o=Le(c);function c(e){var t,n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=o.call(this,e),n=ze(t),a=function(e){console.log("radio checked",e.target.value),t.setState({radioValue:e.target.value})},(r="onChangeRadio")in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,t.state={current:1,radioValue:"tag",radioValue2:"tag",limit:4,productRuleRecommend:1,productRuleCollectionId:"all",productRuleCollectionIdRecommend:"all"},t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;this.props.fetchData({url:"api/get-collections",callback:function(t){e.setState({collections:t.data.collections})}}),this.props.fetchData({url:"api/get-products",callback:function(t){e.setState({products:t.data.products})}}),this.props.fetchData({url:"api/get-history",callback:function(t){e.setState({recommends:t.data.recommends}),console.log(recommends)}})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){var n=e.data,r=e.postResponse;console.log(n),console.log(r)}},{key:"render",value:function(){var e=this,t=this.state,n=(t.status1,t.status2,t.current,t.radioValue),r=t.collections,o=t.products,c=t.limit,a=t.radioValue2,i=t.tagValue,u=t.productRuleCollectionId,s=t.tagValueRecommend,f=t.productRuleCollectionIdRecommend,d=t.productRuleRecommend,p=t.loading,y=t.listProductRecommend,h=t.productRuleId,m=t.recommends,b=[{title:"Auto",key:"auto",render:function(t){return t.active_auto?(0,l.jsx)(Se.Z,{icon:(0,l.jsx)(Ve.Z,{}),color:"success",children:"Activated"}):"0"!=t.product_rule_id||"product"==t.product_recommend_rule_type?"":(0,l.jsx)(Ze.Z,{type:"primary",style:{width:"60%"},onClick:function(n){e.props.postData({url:"api/active-auto",data:{id:t.id},callback:function(n){if(n.data){S("info","Activated successfull!");var r=m.indexOf(t);m[r].active_auto=1,e.setState({recommends:m})}}})},children:"Activate"})}},{title:"Product",key:"pr",render:function(e){return(0,l.jsxs)("div",{children:[e.product_rule_type&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Type:"})," ",e.product_rule_type]}),"0"!=e.product_rule_id&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Product id:"})," ",e.product_rule_id]}),"0"!=e.product_rule_collection_id&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Collection id:"})," ",e.product_rule_collection_id]}),""!=e.tag_value&&null!=e.tag_value&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Tags:"})," ",e.tag_value]})]})}},{title:"Product Recommend",key:"prr",render:function(e){return(0,l.jsxs)("div",{children:[e.product_recommend_rule_type&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Type:"})," ",e.product_recommend_rule_type]}),"0"!=e.product_rule_collection_id_recommend&&"collection"==e.product_recommend_rule_type&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Collection id:"})," ",e.product_rule_collection_id_recommend]}),""!=e.tag_value_recommend&&null!=e.tag_value_recommend&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Tags:"})," ",e.tag_value_recommend]})]})}},{title:"Rule",key:"rr",render:function(e){return(0,l.jsxs)("div",{children:[e.product_rule_recommend&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Rule:"})," ",1==e.product_rule_recommend?"Best selling":"Newest"]}),e.limit&&(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Limit:"})," ",e.limit]})]})}},{title:"Date",key:"dt",render:function(e){return new Date(e.updated_at).toDateString()}}];return(0,l.jsx)(U,{keyMenu:["product-recomend"],children:(0,l.jsxs)(Re.Z,{defaultActiveKey:"1",children:[(0,l.jsxs)($e,{tab:"Bulk",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Product's rule"}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsxs)(ke.ZP.Group,{onChange:this.onChangeRadio,value:n,children:[(0,l.jsx)(ke.ZP,{value:"tag",children:"Tags"}),(0,l.jsx)(ke.ZP,{value:"collection",children:"Collection"}),(0,l.jsx)(ke.ZP,{value:"product",children:"Product"})]})}),(0,l.jsxs)("div",{className:"mt-3",children:["tag"==n&&(0,l.jsx)(w.Z,{placeholder:"tag1, tag2, ...",onChange:function(t){e.setState({tagValue:t.target.value})}}),"collection"==n&&(0,l.jsx)(Ce.Z,{gutter:[12,12],children:(0,l.jsx)(De.Z,{span:"24",children:(0,l.jsxs)(Pe.Z,{style:{width:"100%"},defaultValue:"all",onChange:function(t){e.setState({productRuleCollectionId:t})},showSearch:!0,filterOption:function(e,t){try{return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}catch(e){console.log(e)}},children:[(0,l.jsx)(Pe.Z.Option,{value:"all",children:"All"}),r&&Array.isArray(r)&&r.map((function(e){return(0,l.jsx)(Pe.Z.Option,{value:e.id,children:e.title})}))]})})}),"product"==n&&(0,l.jsx)(Ce.Z,{gutter:[12,12],children:(0,l.jsx)(De.Z,{span:"24",children:(0,l.jsx)(Pe.Z,{style:{width:"100%"},defaultValue:"Select product",onChange:function(t){e.setState({productRuleId:t})},showSearch:!0,filterOption:function(e,t){try{return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}catch(e){console.log(e)}},children:o&&Array.isArray(o)&&o.map((function(e){return(0,l.jsxs)(Pe.Z.Option,{value:e.id,children:[e.title," -"," "+e.handle]})}))})})})]})]}),(0,l.jsxs)("div",{className:"mt-5",children:[(0,l.jsx)("h2",{children:"Product recommend rule"}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsxs)(Ee.Z,{children:[(0,l.jsx)("a",{children:"Limit: "}),(0,l.jsx)(w.Z,{type:"number",value:c,onChange:function(t){e.setState({limit:t.target.value})}})," ",(0,l.jsx)("a",{children:"Rule"})," ",(0,l.jsxs)(Pe.Z,{style:{width:"200px"},defaultValue:"1",onChange:function(t){e.setState({productRuleRecommend:t})},children:[(0,l.jsx)(Pe.Z.Option,{value:"1",children:"Best selling"}),(0,l.jsx)(Pe.Z.Option,{value:"2",children:"Newest"})]})]})}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsxs)(ke.ZP.Group,{onChange:function(t){e.setState({radioValue2:t.target.value})},value:a,children:[(0,l.jsx)(ke.ZP,{value:"tag",children:"Tags"}),(0,l.jsx)(ke.ZP,{value:"collection",children:"Collection"}),(0,l.jsx)(ke.ZP,{value:"product",children:"Product"})]})}),(0,l.jsxs)("div",{className:"mt-3",children:["tag"==a&&(0,l.jsx)(w.Z,{placeholder:"tag1, tag2, ...",onChange:function(t){e.setState({tagValueRecommend:t.target.value})}}),"collection"==a&&(0,l.jsx)(Ce.Z,{gutter:[12,12],children:(0,l.jsx)(De.Z,{span:"24",children:(0,l.jsxs)(Pe.Z,{showSearch:!0,filterOption:function(e,t){try{return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}catch(e){console.log(e)}},style:{width:"100%"},defaultValue:"all",onChange:function(t){e.setState({productRuleCollectionIdRecommend:t})},children:[(0,l.jsx)(Pe.Z.Option,{value:"all",children:"All"}),r&&Array.isArray(r)&&r.map((function(e){return(0,l.jsx)(Pe.Z.Option,{value:e.id,children:e.title})}))]})})}),"product"==a&&(0,l.jsxs)(Ce.Z,{gutter:[12,12],children:[(0,l.jsx)(De.Z,{span:"24",children:(0,l.jsx)(Pe.Z,{style:{width:"100%"},defaultValue:"Select product",onChange:function(t){var n=o[t],r=e.state.listProductRecommend;r||(r=[]),r.includes(n)||r.push(n),e.setState({listProductRecommend:r})},showSearch:!0,filterOption:function(e,t){try{return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}catch(e){console.log(e)}},children:o&&Array.isArray(o)&&o.map((function(e,t){return(0,l.jsxs)(Pe.Z.Option,{value:t,children:[e.title," -"," "+e.handle]})}))})}),(0,l.jsx)(De.Z,{span:"24",children:(0,l.jsx)(Te.ZP,{className:"demo-loadmore-list",itemLayout:"horizontal",dataSource:y,renderItem:function(t){return(0,l.jsx)(Te.ZP.Item,{actions:[(0,l.jsx)("a",{onClick:function(n){var r=e.state.listProductRecommend;r||(r=[]),r=r.filter((function(e){return e.id!==t.id})),e.setState({listProductRecommend:r})},children:"Delete"},"list-loadmore-more")],children:(0,l.jsxs)("div",{children:[t.title,"+"," "+t.handle]})})}})})]})]})]}),(0,l.jsx)("div",{className:"mt-5",children:(0,l.jsx)(Ze.Z,{loading:p,type:"primary",size:"middle",onClick:function(t){e.setState({loading:1}),e.props.postData({url:"api/save-product-recommend",data:{productRuleType:n,productRecommendRuleType:a,tagValue:i,productRuleCollectionId:u,limit:c,tagValueRecommend:s,productRuleCollectionIdRecommend:f,productRuleRecommend:d,productRuleId:h,listProductRecommend:y},callback:function(t){e.setState({loading:0}),S(t.data.status,t.data.message)}})},children:"SAVE"})})]},"1"),(0,l.jsx)($e,{tab:"History",children:(0,l.jsx)("div",{children:m&&(0,l.jsx)(Ae.Z,{columns:b,dataSource:m})})})]})})}}])&&Ne(t.prototype,n),r&&Ne(t,r),c}(r.Component);Ke.propsType={fetchData:u.func.isRequired,postData:u.func.isRequired};const qe=Ke;var Fe="@@fetchdata",Ge="@@fetchdata_failed",He="@@fetchdata_succed",We="@@postdata",Xe="@@postdata_failed",Ye="@@postdata_succed";const Je=(0,a.$j)((function(e){return{data:e.data,postResponse:e.postData}}),(function(e){return{fetchData:function(t){return e(function(e){return{type:Fe,payload:e}}(t))},postData:function(t){return e(function(e){return{type:We,payload:e}}(t))}}}))(qe);const Qe=function(){return(0,l.jsx)(i.rs,{children:(0,l.jsx)(i.AW,{path:"/",component:Je})})};var et=n(4890),tt=n(8318),nt=n(810),rt=n(8500),ot=n(797),ct=n(7757),at=n.n(ct),it=n(4857),ut=at().mark(ft),lt=at().mark(dt),st=at().mark(pt);function ft(e){var t,n;return at().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload.state,r.next=4,(0,it.RE)(C,"GET",e.payload.url,null,e.payload.parameters);case 4:if(200!==(n=r.sent).status){r.next=8;break}return r.next=8,(0,it.gz)((o={data:n.data,state:t},{type:He,payload:o}));case 8:"function"==typeof e.payload.callback&&e.payload.callback(n),r.next=17;break;case 11:return r.prev=11,r.t0=r.catch(0),"function"==typeof e.payload.errorCallback&&e.payload.errorCallback(r.t0),console.log(r.t0),r.next=17,(0,it.gz)({type:Ge});case 17:case"end":return r.stop()}var o}),ut,null,[[0,11]])}function dt(){return at().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,it.ib)(Fe,ft);case 2:case"end":return e.stop()}}),lt)}function pt(){return at().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,it.$6)([(0,it.rM)(dt)]);case 2:case"end":return e.stop()}}),st)}const yt=pt;var ht=at().mark(vt),mt=at().mark(jt),bt=at().mark(gt);function vt(e){var t;return at().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,it.RE)(C,"POST",e.payload.url,e.payload.data,e.payload.parameters,e.payload.headers);case 3:if(200!==(t=n.sent).status){n.next=10;break}return n.next=7,(0,it.gz)((r={data:t.data,state:e.payload.state},{type:Ye,payload:r}));case 7:t.data.status&&t.data.message&&!e.payload.hideNotification&&(0,it.$6)(S(t.data.status,t.data.message)),n.next=10;break;case 10:"function"==typeof e.payload.callback&&e.payload.callback(t),n.next=19;break;case 13:return n.prev=13,n.t0=n.catch(0),"function"==typeof e.payload.errorCallback&&e.payload.errorCallback(n.t0),console.log(n.t0),n.next=19,(0,it.gz)({type:Xe});case 19:case"end":return n.stop()}var r}),ht,null,[[0,13]])}function jt(){return at().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,it.ib)(We,vt);case 2:case"end":return e.stop()}}),mt)}function gt(){return at().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,it.$6)([(0,it.rM)(jt)]);case 2:case"end":return e.stop()}}),bt)}const Ot=gt;var xt=at().mark(wt);function wt(){return at().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,it.$6)([(0,it.rM)(yt),(0,it.rM)(Ot)]);case 2:case"end":return e.stop()}}),xt)}const _t=wt;function Pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Rt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pt(Object(n),!0).forEach((function(t){St(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function St(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zt={loading:!1};const kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Rt(Rt({},e),{},{loading:!0});case He:var n=t.payload.state;n=n||"fetchData";var r=Rt(Rt({},e),{},{loading:!1});return r[n]=t.payload.data,r;case Ge:return Rt(Rt({},e),{},{loading:!1});default:return Zt}};function Ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ct(Object(n),!0).forEach((function(t){Et(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Tt={loading:!1};const At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case We:return Dt(Dt({},e),{},{loading:!0,data:t.payload.data});case Ye:var n=t.payload.state;n=n||"postData";var r=Dt(Dt({},e),{},{loading:!1});return r[n]=t.payload.data,r;case Xe:return Dt(Dt({},e),{},{loading:!1});default:return Tt}};var Vt=function(e){var t=(0,rt.Uo)({}),n=(0,ot.ZP)(),r=(0,et.MT)((0,et.UY)({router:(0,tt.iz)(e),data:kt,postData:At}),t((0,et.md)((0,nt.Z)(e),n)));return n.run(_t),r}(D);o.render((0,l.jsx)(c.VK,{history:D,children:(0,l.jsx)(a.zt,{store:Vt,children:(0,l.jsx)(Qe,{})})}),document.getElementById("app"))},7425:()=>{},4542:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[702,170,898],(()=>(t(6166),t(7425),t(4542))));e.O()}]);