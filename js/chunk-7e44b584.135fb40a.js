(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e44b584"],{1148:function(t,e,i){"use strict";var a=i("a691"),r=i("1d80");t.exports=function(t){var e=String(r(this)),i="",s=a(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},b680:function(t,e,i){"use strict";var a=i("23e7"),r=i("a691"),s=i("408a"),n=i("1148"),c=i("d039"),o=1..toFixed,u=Math.floor,l=function(t,e,i){return 0===e?i:e%2===1?l(t,e-1,i*t):l(t*t,e/2,i)},f=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},d=function(t,e,i){var a=-1,r=i;while(++a<6)r+=e*t[a],t[a]=r%1e7,r=u(r/1e7)},p=function(t,e){var i=6,a=0;while(--i>=0)a+=t[i],t[i]=u(a/e),a=a%e*1e7},m=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var a=String(t[e]);i=""===i?a:i+n.call("0",7-a.length)+a}return i},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,i,a,c,o=s(this),u=r(t),h=[0,0,0,0,0,0],g="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(g="-",o=-o),o>1e-21)if(e=f(o*l(2,69,1))-69,i=e<0?o*l(2,-e,1):o/l(2,e,1),i*=4503599627370496,e=52-e,e>0){d(h,0,i),a=u;while(a>=7)d(h,1e7,0),a-=7;d(h,l(10,a,1),0),a=e-1;while(a>=23)p(h,1<<23),a-=23;p(h,1<<a),d(h,1,1),p(h,2),v=m(h)}else d(h,0,i),d(h,1<<-e,0),v=m(h)+n.call("0",u);return u>0?(c=v.length,v=g+(c<=u?"0."+n.call("0",u-c)+v:v.slice(0,c-u)+"."+v.slice(c-u))):v=g+v,v}})},bd41:function(t,e,i){"use strict";i("db0e")},bd96:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"card",class:t.item.class},[i("a",{attrs:{href:t.item.url,target:t.item.target,rel:"noreferrer"}},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[t.item.logo?i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:t.item.logo,alt:t.item.name+" logo"}})])]):t._e(),t.item.icon?i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("i",{class:["fa-fw",t.item.icon],staticStyle:{"font-size":"35px"}})])]):t._e(),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v(t._s(t.item.name))]),i("p",{staticClass:"subtitle is-6"},[t.item.subtitle?[t._v(" "+t._s(t.item.subtitle)+" ")]:t.api?[t._v(" "+t._s(t.percentage)+"% blocked ")]:t._e()],2)]),t.api?i("div",{staticClass:"status",class:t.api.status},[t._v(" "+t._s(t.api.status)+" ")]):t._e()]),t.item.tag?i("div",{staticClass:"tag",class:t.item.tagstyle},[i("strong",{staticClass:"tag-text"},[t._v("#"+t._s(t.item.tag))])]):t._e()])])])])},r=[],s=i("1da1"),n=(i("96cf"),i("b680"),i("d3b7"),{name:"PiHole",props:{item:Object},data:function(){return{api:{status:"",ads_percentage_today:0}}},computed:{percentage:function(){return this.api?this.api.ads_percentage_today.toFixed(1):""}},created:function(){this.fetchStatus()},methods:{fetchStatus:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(this.item.url,"/api.php"),t.next=3,fetch(e).then((function(t){return t.json()})).catch((function(t){return console.log(t)}));case 3:this.api=t.sent;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),c=n,o=(i("bd41"),i("2877")),u=Object(o["a"])(c,a,r,!1,null,"ccc9e9ca",null);e["default"]=u.exports},db0e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7e44b584.135fb40a.js.map