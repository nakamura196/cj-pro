(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(t,e,r){"use strict";r.r(e);r(40);var n=r(87),c=r.n(n),l={data:function(){return{results:"",id:"",uri:null,viewers:[{image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png",url:"http://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest="},{image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png",url:"http://universalviewer.io/examples/uv/uv.html#?manifest="},{image:"https://www.kanzaki.com/parts/me128b.png",url:"http://www.kanzaki.com/works/2016/pub/image-annotator?u="},{image:"https://iiif.dl.itc.u-tokyo.ac.jp/images/icp.png",url:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="}]}},mounted:function(){var t=this;c.a.get("https://jpsearch.go.jp/rdf/sparql",{params:{query:"\n    PREFIX jps: <https://jpsearch.go.jp/term/property#>\n    PREFIX schema: <http://schema.org/>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    select * where {\n      ?s jps:accessInfo ?accessinfo . \n      ?s schema:image ?image . \n      ?s rdfs:label ?label . \n      ?accessinfo schema:associatedMedia ?media\n    }\n    ORDER BY RAND() \n    LIMIT 12\n    "}}).then((function(e){t.results=e.data.results.bindings}))},methods:{check:function(){var t=this;this.uri=null;var e="https://api.cultural.jp/iiif/"+this.id+"/manifest";c.a.get(e).then((function(r){"sc:Manifest"===r.data["@type"]&&(t.uri=e)}))},add:function(t){var e=t.split("/");this.id=e[e.length-1],this.check()}}},o=r(50),m=r(68),d=r.n(m),v=r(181),h=r(312),f=r(311),_=r(338),w=r(304),k=r(339),j=r(123),x=r(112),y=r(340),C=r(31),V=r(307),I=r(341),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-12"},[r("v-container",[r("h2",[t._v(t._s(t.$t("please_input_item_id_from_js_or_cj")))]),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{label:"ID",required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),t._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.check}},[t._v("\n        "+t._s(t.$t("execute"))+"\n      ")])],1),t._v(" "),null!==t.uri?[r("v-sheet",{staticClass:"pa-6 mt-12",attrs:{color:"grey lighten-3"}},[r("h2",[t._v(t._s(t.$t("result")))]),t._v(" "),r("a",{staticClass:"mr-4",attrs:{href:t.uri,target:"_blank"}},[r("img",{attrs:{width:"30px",src:"https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH_400x400.png"}})]),t._v(" "),t._l(t.viewers,(function(e){return r("a",{key:e.image,staticClass:"mr-4",attrs:{href:e.url+t.uri,target:"_blank"}},[r("img",{attrs:{src:e.image,width:"30px"}})])}))],2)]:t._e(),t._v(" "),r("h2",{staticClass:"mt-12"},[t._v(t._s(t.$t("example")))]),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.results,(function(e){return r("v-col",{key:e.s.value,attrs:{cols:4}},[r("v-card",{on:{click:function(r){return t.add(e.s.value)}}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.image.value,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px",contain:""}},[r("v-card-title",{domProps:{textContent:t._s(e.label.value)}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1)})),1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VCardTitle:f.b,VCol:_.a,VContainer:w.a,VForm:k.a,VIcon:j.a,VImg:x.a,VRow:y.a,VSheet:C.a,VSpacer:V.a,VTextField:I.a})}}]);