(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add"],{"1af0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layui-container fly-marginTop",class:{"d-hide":t.isHide}},[r("div",{staticClass:"fly-panel",staticStyle:{"padding-top":"5px"},attrs:{pad20:""}},[r("div",{staticClass:"layui-form layui-form-pane"},[r("div",{staticClass:"layui-tab layui-tab-brief",attrs:{"lay-filter":"user"}},[t._m(0),r("div",{staticClass:"layui-form layui-tab-content",staticStyle:{padding:"20px 0"},attrs:{id:"LAY_ucm"}},[r("div",{staticClass:"layui-tab-item layui-show"},[r("form",[r("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.validate;return[r("div",{staticClass:"layui-row layui-col-space15 layui-form-item"},[r("div",{staticClass:"layui-col-md3"},[r("validation-provider",{attrs:{name:"catalog",rules:"is_not:请选择"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("div",{staticClass:"layui-row"},[r("label",{staticClass:"layui-form-label"},[t._v("所在专栏")]),r("div",{staticClass:"layui-input-block",on:{click:function(e){return t.changeSelect()}}},[r("div",{staticClass:"layui-unselect layui-form-select",class:{"layui-form-selected":t.isSelect}},[r("div",{staticClass:"layui-select-title"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.catalogs[t.cataIndex].text,expression:"catalogs[cataIndex].text"}],staticClass:"layui-input layui-unselect",attrs:{type:"text",placeholder:"请选择",readonly:""},domProps:{value:t.catalogs[t.cataIndex].text},on:{input:function(e){e.target.composing||t.$set(t.catalogs[t.cataIndex],"text",e.target.value)}}}),r("i",{staticClass:"layui-edge"})]),r("dl",{staticClass:"layui-anim layui-anim-upbit"},t._l(t.catalogs,(function(e,a){return r("dd",{key:"catalog"+a,class:{"layui-this":a===t.cataIndex},on:{click:function(r){return t.chooseCatalog(e,a)}}},[t._v(t._s(e.text))])})),0)])])]),r("div",{staticClass:"layui-row"},[r("span",{staticStyle:{color:"#c00"}},[t._v(t._s(a[0]))])])]}}],null,!0)})],1),r("div",{staticClass:"layui-col-md9"},[r("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("div",{staticClass:"layui-row"},[r("label",{staticClass:"layui-form-label",attrs:{for:"L_title"}},[t._v("标题")]),r("div",{staticClass:"layui-input-block"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"layui-input",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),r("div",{staticClass:"layui-row"},[r("span",{staticStyle:{color:"#c00"}},[t._v(t._s(a[0]))])])]}}],null,!0)})],1)]),r("editor",{attrs:{initContent:t.content},on:{changeContent:t.add}}),r("div",{staticClass:"layui-form-item"},[r("div",{staticClass:"layui-inline"},[r("label",{staticClass:"layui-form-label"},[t._v("悬赏飞吻")]),r("div",{staticClass:"layui-input-inline",staticStyle:{width:"190px"}},[r("div",{staticClass:"layui-unselect layui-form-select",class:{"layui-form-selected":t.isSelect_fav},on:{click:function(e){return t.changeFav()}}},[r("div",{staticClass:"layui-select-title"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.favList[t.favIndex],expression:"favList[favIndex]"}],staticClass:"layui-input layui-unselect",attrs:{type:"text",placeholder:"请选择",readonly:""},domProps:{value:t.favList[t.favIndex]},on:{input:function(e){e.target.composing||t.$set(t.favList,t.favIndex,e.target.value)}}}),r("i",{staticClass:"layui-edge"})]),r("dl",{staticClass:"layui-anim layui-anim-upbit"},t._l(t.favList,(function(e,a){return r("dd",{key:"catalog"+a,class:{"layui-this":a===t.favIndex},on:{click:function(r){return t.chooseFav(e,a)}}},[t._v(t._s(e))])})),0)])]),r("div",{staticClass:"layui-form-mid layui-word-aux"},[t._v("发表后无法更改飞吻")])])]),r("div",{staticClass:"layui-form-item"},[r("validation-provider",{ref:"codefield",attrs:{name:"code",rules:"required|length:4"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("div",{staticClass:"layui-row"},[r("label",{staticClass:"layui-form-label",attrs:{for:"L_vercode"}},[t._v("验证码")]),r("div",{staticClass:"layui-input-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"layui-input",attrs:{type:"text",name:"code",placeholder:"请输入验证码",autocomplete:"off"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),r("div",{},[r("span",{staticClass:"svg",staticStyle:{color:"#c00"},domProps:{innerHTML:t._s(t.svg)},on:{click:function(e){return t._getCode()}}})])]),r("div",{staticClass:"layui-form-mid"},[r("span",{staticStyle:{color:"#c00"}},[t._v(t._s(a[0]))])])]}}],null,!0)})],1),r("div",{staticClass:"layui-form-item"},[r("button",{staticClass:"layui-btn",attrs:{type:"button"},on:{click:function(e){a().then(t.submit)}}},[t._v("立即发布")])])]}}])})],1)])])])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"layui-tab-title"},[r("li",{staticClass:"layui-this"},[t._v(" 发表新帖 ")])])}],n=(r("498a"),r("96cf"),r("1da1")),o=r("cc48"),s=r("81b3"),l=r("32d8"),c={name:"add",mixins:[s["a"]],components:{Editor:l["a"]},data:function(){return{isSelect:!1,isSelect_fav:!1,cataIndex:0,favIndex:0,catalogs:[{text:"请选择",value:""},{text:"提问",value:"ask"},{text:"分享",value:"share"},{text:"讨论",value:"discuss"},{text:"建议",value:"advise"}],favList:[20,30,50,60,80],content:"",title:""}},mounted:function(){var t=this,e=localStorage.getItem("addData");e&&""!==e&&this.$confirm("是否加载未编辑完的内容？",(function(){var r=JSON.parse(e);t.content=r.content,t.title=r.title,t.cataIndex=r.cataIndex,t.favIndex=r.favIndex}),(function(){localStorage.setItem("addData","")}))},methods:{chooseCatalog:function(t,e){this.cataIndex=e},chooseFav:function(t,e){this.favIndex=e},changeSelect:function(){this.isSelect=!this.isSelect},changeFav:function(){this.isSelect_fav=!this.isSelect_fav},add:function(t){this.content=t;var e={title:this.title,cataIndex:this.cataIndex,content:this.content,favIndex:this.favIndex};""!==this.title.trim()&&""!==this.content.trim()&&localStorage.setItem("addData",JSON.stringify(e))},submit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.observer.validate();case 2:if(e=t.sent,e){t.next=5;break}return t.abrupt("return");case 5:if(""!==this.content.trim()){t.next=8;break}return this.$alert("文章内容不得为空！"),t.abrupt("return");case 8:Object(o["a"])({title:this.title,catalog:this.catalogs[this.cataIndex].value,content:this.content,fav:this.favList[this.favIndex],code:this.code,sid:this.$store.state.sid}).then((function(t){200===t.code?(localStorage.setItem("addData",""),r.$pop("","发贴成功!"),setTimeout((function(){r.$router.push({name:"detail",params:{tid:t.data._id}})}),2e3)):r.$alert(t.msg)}));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{isHide:function(){return this.$store.state.isHide}}},u=c,f=r("2877"),d=Object(f["a"])(u,a,i,!1,null,"fe7d24e0",null);e["default"]=d.exports},4127:function(t,e,r){"use strict";var a=r("d233"),i=r("b313"),n=Object.prototype.hasOwnProperty,o={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},s=Array.isArray,l=Array.prototype.push,c=function(t,e){l.apply(t,s(e)?e:[e])},u=Date.prototype.toISOString,f=i["default"],d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,format:f,formatter:i.formatters[f],indices:!1,serializeDate:function(t){return u.call(t)},skipNulls:!1,strictNullHandling:!1},p=function(t){return"string"===typeof t||"number"===typeof t||"boolean"===typeof t||"symbol"===typeof t||"bigint"===typeof t},y=function t(e,r,i,n,o,l,u,f,y,m,v,h,g){var b=e;if("function"===typeof u?b=u(r,b):b instanceof Date?b=m(b):"comma"===i&&s(b)&&(b=b.join(",")),null===b){if(n)return l&&!h?l(r,d.encoder,g,"key"):r;b=""}if(p(b)||a.isBuffer(b)){if(l){var x=h?r:l(r,d.encoder,g,"key");return[v(x)+"="+v(l(b,d.encoder,g,"value"))]}return[v(r)+"="+v(String(b))]}var C,w=[];if("undefined"===typeof b)return w;if(s(u))C=u;else{var S=Object.keys(b);C=f?S.sort(f):S}for(var O=0;O<C.length;++O){var j=C[O];o&&null===b[j]||(s(b)?c(w,t(b[j],"function"===typeof i?i(r,j):r,i,n,o,l,u,f,y,m,v,h,g)):c(w,t(b[j],r+(y?"."+j:"["+j+"]"),i,n,o,l,u,f,y,m,v,h,g)))}return w},m=function(t){if(!t)return d;if(null!==t.encoder&&void 0!==t.encoder&&"function"!==typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||d.charset;if("undefined"!==typeof t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i["default"];if("undefined"!==typeof t.format){if(!n.call(i.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var a=i.formatters[r],o=d.filter;return("function"===typeof t.filter||s(t.filter))&&(o=t.filter),{addQueryPrefix:"boolean"===typeof t.addQueryPrefix?t.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof t.allowDots?d.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"===typeof t.charsetSentinel?t.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof t.delimiter?d.delimiter:t.delimiter,encode:"boolean"===typeof t.encode?t.encode:d.encode,encoder:"function"===typeof t.encoder?t.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof t.encodeValuesOnly?t.encodeValuesOnly:d.encodeValuesOnly,filter:o,formatter:a,serializeDate:"function"===typeof t.serializeDate?t.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof t.skipNulls?t.skipNulls:d.skipNulls,sort:"function"===typeof t.sort?t.sort:null,strictNullHandling:"boolean"===typeof t.strictNullHandling?t.strictNullHandling:d.strictNullHandling}};t.exports=function(t,e){var r,a,i=t,n=m(e);"function"===typeof n.filter?(a=n.filter,i=a("",i)):s(n.filter)&&(a=n.filter,r=a);var l,u=[];if("object"!==typeof i||null===i)return"";l=e&&e.arrayFormat in o?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var f=o[l];r||(r=Object.keys(i)),n.sort&&r.sort(n.sort);for(var d=0;d<r.length;++d){var p=r[d];n.skipNulls&&null===i[p]||c(u,y(i[p],p,f,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var v=u.join(n.delimiter),h=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),v.length>0?h+v:""}},4328:function(t,e,r){"use strict";var a=r("4127"),i=r("9e6a"),n=r("b313");t.exports={formats:n,parse:i,stringify:a}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),i=r("5899"),n="["+i+"]",o=RegExp("^"+n+n+"*"),s=RegExp(n+n+"*$"),l=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"9e6a":function(t,e,r){"use strict";var a=r("d233"),i=Object.prototype.hasOwnProperty,n=Array.isArray,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:a.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},l="utf8=%26%2310003%3B",c="utf8=%E2%9C%93",u=function(t,e){var r,u={},f=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,d=e.parameterLimit===1/0?void 0:e.parameterLimit,p=f.split(e.delimiter,d),y=-1,m=e.charset;if(e.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&(p[r]===c?m="utf-8":p[r]===l&&(m="iso-8859-1"),y=r,r=p.length);for(r=0;r<p.length;++r)if(r!==y){var v,h,g=p[r],b=g.indexOf("]="),x=-1===b?g.indexOf("="):b+1;-1===x?(v=e.decoder(g,o.decoder,m,"key"),h=e.strictNullHandling?null:""):(v=e.decoder(g.slice(0,x),o.decoder,m,"key"),h=e.decoder(g.slice(x+1),o.decoder,m,"value")),h&&e.interpretNumericEntities&&"iso-8859-1"===m&&(h=s(h)),h&&"string"===typeof h&&e.comma&&h.indexOf(",")>-1&&(h=h.split(",")),g.indexOf("[]=")>-1&&(h=n(h)?[h]:h),i.call(u,v)?u[v]=a.combine(u[v],h):u[v]=h}return u},f=function(t,e,r){for(var a=e,i=t.length-1;i>=0;--i){var n,o=t[i];if("[]"===o&&r.parseArrays)n=[].concat(a);else{n=r.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,l=parseInt(s,10);r.parseArrays||""!==s?!isNaN(l)&&o!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=a):n[s]=a:n={0:a}}a=n}return a},d=function(t,e,r){if(t){var a=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,s=r.depth>0&&n.exec(a),l=s?a.slice(0,s.index):a,c=[];if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}var u=0;while(r.depth>0&&null!==(s=o.exec(a))&&u<r.depth){if(u+=1,!r.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(s[1])}return s&&c.push("["+a.slice(s.index)+"]"),f(c,e,r)}},p=function(t){if(!t)return o;if(null!==t.decoder&&void 0!==t.decoder&&"function"!==typeof t.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e="undefined"===typeof t.charset?o.charset:t.charset;return{allowDots:"undefined"===typeof t.allowDots?o.allowDots:!!t.allowDots,allowPrototypes:"boolean"===typeof t.allowPrototypes?t.allowPrototypes:o.allowPrototypes,arrayLimit:"number"===typeof t.arrayLimit?t.arrayLimit:o.arrayLimit,charset:e,charsetSentinel:"boolean"===typeof t.charsetSentinel?t.charsetSentinel:o.charsetSentinel,comma:"boolean"===typeof t.comma?t.comma:o.comma,decoder:"function"===typeof t.decoder?t.decoder:o.decoder,delimiter:"string"===typeof t.delimiter||a.isRegExp(t.delimiter)?t.delimiter:o.delimiter,depth:"number"===typeof t.depth||!1===t.depth?+t.depth:o.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof t.interpretNumericEntities?t.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"===typeof t.parameterLimit?t.parameterLimit:o.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"===typeof t.plainObjects?t.plainObjects:o.plainObjects,strictNullHandling:"boolean"===typeof t.strictNullHandling?t.strictNullHandling:o.strictNullHandling}};t.exports=function(t,e){var r=p(e);if(""===t||null===t||"undefined"===typeof t)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof t?u(t,r):t,n=r.plainObjects?Object.create(null):{},o=Object.keys(i),s=0;s<o.length;++s){var l=o[s],c=d(l,i[l],r);n=a.merge(n,c,r)}return a.compact(n)}},b313:function(t,e,r){"use strict";var a=String.prototype.replace,i=/%20/g,n=r("d233"),o={RFC1738:"RFC1738",RFC3986:"RFC3986"};t.exports=n.assign({default:o.RFC3986,formatters:{RFC1738:function(t){return a.call(t,i,"+")},RFC3986:function(t){return String(t)}}},o)},d233:function(t,e,r){"use strict";var a=Object.prototype.hasOwnProperty,i=Array.isArray,n=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),o=function(t){while(t.length>1){var e=t.pop(),r=e.obj[e.prop];if(i(r)){for(var a=[],n=0;n<r.length;++n)"undefined"!==typeof r[n]&&a.push(r[n]);e.obj[e.prop]=a}}},s=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},a=0;a<t.length;++a)"undefined"!==typeof t[a]&&(r[a]=t[a]);return r},l=function t(e,r,n){if(!r)return e;if("object"!==typeof r){if(i(e))e.push(r);else{if(!e||"object"!==typeof e)return[e,r];(n&&(n.plainObjects||n.allowPrototypes)||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!==typeof e)return[e].concat(r);var o=e;return i(e)&&!i(r)&&(o=s(e,n)),i(e)&&i(r)?(r.forEach((function(r,i){if(a.call(e,i)){var o=e[i];o&&"object"===typeof o&&r&&"object"===typeof r?e[i]=t(o,r,n):e.push(r)}else e[i]=r})),e):Object.keys(r).reduce((function(e,i){var o=r[i];return a.call(e,i)?e[i]=t(e[i],o,n):e[i]=o,e}),o)},c=function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},u=function(t,e,r){var a=t.replace(/\+/g," ");if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch(i){return a}},f=function(t,e,r){if(0===t.length)return t;var a=t;if("symbol"===typeof t?a=Symbol.prototype.toString.call(t):"string"!==typeof t&&(a=String(t)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var i="",o=0;o<a.length;++o){var s=a.charCodeAt(o);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=a.charAt(o):s<128?i+=n[s]:s<2048?i+=n[192|s>>6]+n[128|63&s]:s<55296||s>=57344?i+=n[224|s>>12]+n[128|s>>6&63]+n[128|63&s]:(o+=1,s=65536+((1023&s)<<10|1023&a.charCodeAt(o)),i+=n[240|s>>18]+n[128|s>>12&63]+n[128|s>>6&63]+n[128|63&s])}return i},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],a=0;a<e.length;++a)for(var i=e[a],n=i.obj[i.prop],s=Object.keys(n),l=0;l<s.length;++l){var c=s[l],u=n[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(e.push({obj:n,prop:c}),r.push(u))}return o(e),t},p=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},y=function(t){return!(!t||"object"!==typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},m=function(t,e){return[].concat(t,e)};t.exports={arrayToObject:s,assign:c,combine:m,compact:d,decode:u,encode:f,isBuffer:y,isRegExp:p,merge:l}}}]);
//# sourceMappingURL=add.c03ecff7.js.map