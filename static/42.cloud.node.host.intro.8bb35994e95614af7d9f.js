webpackJsonp([42],{820:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),u=l(a),r=n(3),c=l(r),d=n(7),i=l(d),o=n(5),f=l(o),s=n(4),m=l(s),p=n(1),b=l(p),h=n(69),v=(l(h),n(36)),_=n(1048),g=function(e){return{home:e.home,center:e.center}},E=function(e){function t(){var e;(0,c.default)(this,t);for(var n=arguments.length,l=Array(n),a=0;a<n;a++)l[a]=arguments[a];var r=(0,f.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l)));return r.state={isAdmin:""},r}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.home.curOrg,n=(e.center.linkUrl,t&&t.is_admin);return n?b.default.createElement("div",null,b.default.createElement("div",{className:"eip-unbound-box"},b.default.createElement("h2",null,"您现在还没有同步云服务器，也没有成功上报信息的私有物理机。"),b.default.createElement("p",null,"你可以按照下面按钮添加公有云账号，将云服务商的虚拟主机信息同步到系统中"),b.default.createElement("p",null,"或者在私有物理机上安装AGENT，上报物理机信息"),1==n?b.default.createElement("a",{className:"eip-unbound-link",href:"/manage",target:"view_window"},"绑定云账号"):null,b.default.createElement("img",{src:_,alt:"",className:"eip-unbound-img",style:{marginTop:0}}))):null}}]),t}(b.default.Component);t.default=(0,v.connect)(g,null)(E)},1048:function(e,t,n){e.exports=n.p+"355298bbe49d6dd9b333a95f247be5e0.png"}});