goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34890 = arguments.length;
var i__4790__auto___34891 = (0);
while(true){
if((i__4790__auto___34891 < len__4789__auto___34890)){
args__4795__auto__.push((arguments[i__4790__auto___34891]));

var G__34892 = (i__4790__auto___34891 + (1));
i__4790__auto___34891 = G__34892;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34534){
var G__34536 = cljs.core.first(seq34534);
var seq34534__$1 = cljs.core.next(seq34534);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34536,seq34534__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34557 = cljs.core.seq(sources);
var chunk__34558 = null;
var count__34559 = (0);
var i__34560 = (0);
while(true){
if((i__34560 < count__34559)){
var map__34585 = chunk__34558.cljs$core$IIndexed$_nth$arity$2(null,i__34560);
var map__34585__$1 = (((((!((map__34585 == null))))?(((((map__34585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34585):map__34585);
var src = map__34585__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34585__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34585__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34585__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34585__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34588){var e_34912 = e34588;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34912);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34912.message)].join('')));
}

var G__34913 = seq__34557;
var G__34914 = chunk__34558;
var G__34915 = count__34559;
var G__34916 = (i__34560 + (1));
seq__34557 = G__34913;
chunk__34558 = G__34914;
count__34559 = G__34915;
i__34560 = G__34916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34557);
if(temp__5735__auto__){
var seq__34557__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34557__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34557__$1);
var G__34917 = cljs.core.chunk_rest(seq__34557__$1);
var G__34918 = c__4609__auto__;
var G__34919 = cljs.core.count(c__4609__auto__);
var G__34920 = (0);
seq__34557 = G__34917;
chunk__34558 = G__34918;
count__34559 = G__34919;
i__34560 = G__34920;
continue;
} else {
var map__34592 = cljs.core.first(seq__34557__$1);
var map__34592__$1 = (((((!((map__34592 == null))))?(((((map__34592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34592):map__34592);
var src = map__34592__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34597){var e_34931 = e34597;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34931);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34931.message)].join('')));
}

var G__34932 = cljs.core.next(seq__34557__$1);
var G__34933 = null;
var G__34934 = (0);
var G__34935 = (0);
seq__34557 = G__34932;
chunk__34558 = G__34933;
count__34559 = G__34934;
i__34560 = G__34935;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34610 = cljs.core.seq(js_requires);
var chunk__34611 = null;
var count__34612 = (0);
var i__34613 = (0);
while(true){
if((i__34613 < count__34612)){
var js_ns = chunk__34611.cljs$core$IIndexed$_nth$arity$2(null,i__34613);
var require_str_34939 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34939);


var G__34940 = seq__34610;
var G__34941 = chunk__34611;
var G__34942 = count__34612;
var G__34943 = (i__34613 + (1));
seq__34610 = G__34940;
chunk__34611 = G__34941;
count__34612 = G__34942;
i__34613 = G__34943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34610);
if(temp__5735__auto__){
var seq__34610__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34610__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34610__$1);
var G__34944 = cljs.core.chunk_rest(seq__34610__$1);
var G__34945 = c__4609__auto__;
var G__34946 = cljs.core.count(c__4609__auto__);
var G__34947 = (0);
seq__34610 = G__34944;
chunk__34611 = G__34945;
count__34612 = G__34946;
i__34613 = G__34947;
continue;
} else {
var js_ns = cljs.core.first(seq__34610__$1);
var require_str_34948 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34948);


var G__34949 = cljs.core.next(seq__34610__$1);
var G__34950 = null;
var G__34951 = (0);
var G__34952 = (0);
seq__34610 = G__34949;
chunk__34611 = G__34950;
count__34612 = G__34951;
i__34613 = G__34952;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34637 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34637) : callback.call(null,G__34637));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34648){
var map__34649 = p__34648;
var map__34649__$1 = (((((!((map__34649 == null))))?(((((map__34649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34649):map__34649);
var msg = map__34649__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34659(s__34660){
return (new cljs.core.LazySeq(null,(function (){
var s__34660__$1 = s__34660;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34660__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34670 = cljs.core.first(xs__6292__auto__);
var map__34670__$1 = (((((!((map__34670 == null))))?(((((map__34670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34670):map__34670);
var src = map__34670__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34670__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34660__$1,map__34670,map__34670__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34649,map__34649__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34659_$_iter__34661(s__34662){
return (new cljs.core.LazySeq(null,((function (s__34660__$1,map__34670,map__34670__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34649,map__34649__$1,msg,info,reload_info){
return (function (){
var s__34662__$1 = s__34662;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34662__$1);
if(temp__5735__auto____$1){
var s__34662__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34662__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34662__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34664 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34663 = (0);
while(true){
if((i__34663 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34663);
cljs.core.chunk_append(b__34664,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34958 = (i__34663 + (1));
i__34663 = G__34958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34664),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34659_$_iter__34661(cljs.core.chunk_rest(s__34662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34664),null);
}
} else {
var warning = cljs.core.first(s__34662__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34659_$_iter__34661(cljs.core.rest(s__34662__$2)));
}
} else {
return null;
}
break;
}
});})(s__34660__$1,map__34670,map__34670__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34649,map__34649__$1,msg,info,reload_info))
,null,null));
});})(s__34660__$1,map__34670,map__34670__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34649,map__34649__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34659(cljs.core.rest(s__34660__$1)));
} else {
var G__34964 = cljs.core.rest(s__34660__$1);
s__34660__$1 = G__34964;
continue;
}
} else {
var G__34965 = cljs.core.rest(s__34660__$1);
s__34660__$1 = G__34965;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__34683_34966 = cljs.core.seq(warnings);
var chunk__34684_34967 = null;
var count__34685_34968 = (0);
var i__34686_34969 = (0);
while(true){
if((i__34686_34969 < count__34685_34968)){
var map__34718_34970 = chunk__34684_34967.cljs$core$IIndexed$_nth$arity$2(null,i__34686_34969);
var map__34718_34971__$1 = (((((!((map__34718_34970 == null))))?(((((map__34718_34970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34718_34970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34718_34970):map__34718_34970);
var w_34972 = map__34718_34971__$1;
var msg_34973__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718_34971__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718_34971__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718_34971__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718_34971__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34976)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34974),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34975),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34973__$1)].join(''));


var G__34979 = seq__34683_34966;
var G__34980 = chunk__34684_34967;
var G__34981 = count__34685_34968;
var G__34982 = (i__34686_34969 + (1));
seq__34683_34966 = G__34979;
chunk__34684_34967 = G__34980;
count__34685_34968 = G__34981;
i__34686_34969 = G__34982;
continue;
} else {
var temp__5735__auto___34983 = cljs.core.seq(seq__34683_34966);
if(temp__5735__auto___34983){
var seq__34683_34984__$1 = temp__5735__auto___34983;
if(cljs.core.chunked_seq_QMARK_(seq__34683_34984__$1)){
var c__4609__auto___34985 = cljs.core.chunk_first(seq__34683_34984__$1);
var G__34986 = cljs.core.chunk_rest(seq__34683_34984__$1);
var G__34987 = c__4609__auto___34985;
var G__34988 = cljs.core.count(c__4609__auto___34985);
var G__34989 = (0);
seq__34683_34966 = G__34986;
chunk__34684_34967 = G__34987;
count__34685_34968 = G__34988;
i__34686_34969 = G__34989;
continue;
} else {
var map__34728_34990 = cljs.core.first(seq__34683_34984__$1);
var map__34728_34991__$1 = (((((!((map__34728_34990 == null))))?(((((map__34728_34990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728_34990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34728_34990):map__34728_34990);
var w_34992 = map__34728_34991__$1;
var msg_34993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34991__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728_34991__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34996)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34994),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34995),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34993__$1)].join(''));


var G__34997 = cljs.core.next(seq__34683_34984__$1);
var G__34998 = null;
var G__34999 = (0);
var G__35000 = (0);
seq__34683_34966 = G__34997;
chunk__34684_34967 = G__34998;
count__34685_34968 = G__34999;
i__34686_34969 = G__35000;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34647_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34647_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34756){
var map__34757 = p__34756;
var map__34757__$1 = (((((!((map__34757 == null))))?(((((map__34757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34757):map__34757);
var msg = map__34757__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34757__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34763 = cljs.core.seq(updates);
var chunk__34765 = null;
var count__34766 = (0);
var i__34767 = (0);
while(true){
if((i__34767 < count__34766)){
var path = chunk__34765.cljs$core$IIndexed$_nth$arity$2(null,i__34767);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34816_35003 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34819_35004 = null;
var count__34820_35005 = (0);
var i__34821_35006 = (0);
while(true){
if((i__34821_35006 < count__34820_35005)){
var node_35008 = chunk__34819_35004.cljs$core$IIndexed$_nth$arity$2(null,i__34821_35006);
var path_match_35009 = shadow.cljs.devtools.client.browser.match_paths(node_35008.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35009)){
var new_link_35010 = (function (){var G__34831 = node_35008.cloneNode(true);
G__34831.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35009),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34831;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35009], 0));

goog.dom.insertSiblingAfter(new_link_35010,node_35008);

goog.dom.removeNode(node_35008);


var G__35015 = seq__34816_35003;
var G__35016 = chunk__34819_35004;
var G__35017 = count__34820_35005;
var G__35018 = (i__34821_35006 + (1));
seq__34816_35003 = G__35015;
chunk__34819_35004 = G__35016;
count__34820_35005 = G__35017;
i__34821_35006 = G__35018;
continue;
} else {
var G__35019 = seq__34816_35003;
var G__35020 = chunk__34819_35004;
var G__35021 = count__34820_35005;
var G__35022 = (i__34821_35006 + (1));
seq__34816_35003 = G__35019;
chunk__34819_35004 = G__35020;
count__34820_35005 = G__35021;
i__34821_35006 = G__35022;
continue;
}
} else {
var temp__5735__auto___35023 = cljs.core.seq(seq__34816_35003);
if(temp__5735__auto___35023){
var seq__34816_35024__$1 = temp__5735__auto___35023;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35024__$1)){
var c__4609__auto___35025 = cljs.core.chunk_first(seq__34816_35024__$1);
var G__35026 = cljs.core.chunk_rest(seq__34816_35024__$1);
var G__35027 = c__4609__auto___35025;
var G__35028 = cljs.core.count(c__4609__auto___35025);
var G__35029 = (0);
seq__34816_35003 = G__35026;
chunk__34819_35004 = G__35027;
count__34820_35005 = G__35028;
i__34821_35006 = G__35029;
continue;
} else {
var node_35030 = cljs.core.first(seq__34816_35024__$1);
var path_match_35031 = shadow.cljs.devtools.client.browser.match_paths(node_35030.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35031)){
var new_link_35032 = (function (){var G__34832 = node_35030.cloneNode(true);
G__34832.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35031),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34832;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35031], 0));

goog.dom.insertSiblingAfter(new_link_35032,node_35030);

goog.dom.removeNode(node_35030);


var G__35033 = cljs.core.next(seq__34816_35024__$1);
var G__35034 = null;
var G__35035 = (0);
var G__35036 = (0);
seq__34816_35003 = G__35033;
chunk__34819_35004 = G__35034;
count__34820_35005 = G__35035;
i__34821_35006 = G__35036;
continue;
} else {
var G__35037 = cljs.core.next(seq__34816_35024__$1);
var G__35038 = null;
var G__35039 = (0);
var G__35040 = (0);
seq__34816_35003 = G__35037;
chunk__34819_35004 = G__35038;
count__34820_35005 = G__35039;
i__34821_35006 = G__35040;
continue;
}
}
} else {
}
}
break;
}


var G__35041 = seq__34763;
var G__35042 = chunk__34765;
var G__35043 = count__34766;
var G__35044 = (i__34767 + (1));
seq__34763 = G__35041;
chunk__34765 = G__35042;
count__34766 = G__35043;
i__34767 = G__35044;
continue;
} else {
var G__35045 = seq__34763;
var G__35046 = chunk__34765;
var G__35047 = count__34766;
var G__35048 = (i__34767 + (1));
seq__34763 = G__35045;
chunk__34765 = G__35046;
count__34766 = G__35047;
i__34767 = G__35048;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34763);
if(temp__5735__auto__){
var seq__34763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34763__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34763__$1);
var G__35049 = cljs.core.chunk_rest(seq__34763__$1);
var G__35050 = c__4609__auto__;
var G__35051 = cljs.core.count(c__4609__auto__);
var G__35052 = (0);
seq__34763 = G__35049;
chunk__34765 = G__35050;
count__34766 = G__35051;
i__34767 = G__35052;
continue;
} else {
var path = cljs.core.first(seq__34763__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34835_35053 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34838_35054 = null;
var count__34839_35055 = (0);
var i__34840_35056 = (0);
while(true){
if((i__34840_35056 < count__34839_35055)){
var node_35057 = chunk__34838_35054.cljs$core$IIndexed$_nth$arity$2(null,i__34840_35056);
var path_match_35058 = shadow.cljs.devtools.client.browser.match_paths(node_35057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35058)){
var new_link_35059 = (function (){var G__34845 = node_35057.cloneNode(true);
G__34845.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34845;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35058], 0));

goog.dom.insertSiblingAfter(new_link_35059,node_35057);

goog.dom.removeNode(node_35057);


var G__35060 = seq__34835_35053;
var G__35061 = chunk__34838_35054;
var G__35062 = count__34839_35055;
var G__35063 = (i__34840_35056 + (1));
seq__34835_35053 = G__35060;
chunk__34838_35054 = G__35061;
count__34839_35055 = G__35062;
i__34840_35056 = G__35063;
continue;
} else {
var G__35064 = seq__34835_35053;
var G__35065 = chunk__34838_35054;
var G__35066 = count__34839_35055;
var G__35067 = (i__34840_35056 + (1));
seq__34835_35053 = G__35064;
chunk__34838_35054 = G__35065;
count__34839_35055 = G__35066;
i__34840_35056 = G__35067;
continue;
}
} else {
var temp__5735__auto___35068__$1 = cljs.core.seq(seq__34835_35053);
if(temp__5735__auto___35068__$1){
var seq__34835_35069__$1 = temp__5735__auto___35068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34835_35069__$1)){
var c__4609__auto___35070 = cljs.core.chunk_first(seq__34835_35069__$1);
var G__35071 = cljs.core.chunk_rest(seq__34835_35069__$1);
var G__35072 = c__4609__auto___35070;
var G__35073 = cljs.core.count(c__4609__auto___35070);
var G__35074 = (0);
seq__34835_35053 = G__35071;
chunk__34838_35054 = G__35072;
count__34839_35055 = G__35073;
i__34840_35056 = G__35074;
continue;
} else {
var node_35075 = cljs.core.first(seq__34835_35069__$1);
var path_match_35076 = shadow.cljs.devtools.client.browser.match_paths(node_35075.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35076)){
var new_link_35077 = (function (){var G__34846 = node_35075.cloneNode(true);
G__34846.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35076),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34846;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35076], 0));

goog.dom.insertSiblingAfter(new_link_35077,node_35075);

goog.dom.removeNode(node_35075);


var G__35078 = cljs.core.next(seq__34835_35069__$1);
var G__35079 = null;
var G__35080 = (0);
var G__35081 = (0);
seq__34835_35053 = G__35078;
chunk__34838_35054 = G__35079;
count__34839_35055 = G__35080;
i__34840_35056 = G__35081;
continue;
} else {
var G__35082 = cljs.core.next(seq__34835_35069__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__34835_35053 = G__35082;
chunk__34838_35054 = G__35083;
count__34839_35055 = G__35084;
i__34840_35056 = G__35085;
continue;
}
}
} else {
}
}
break;
}


var G__35086 = cljs.core.next(seq__34763__$1);
var G__35087 = null;
var G__35088 = (0);
var G__35089 = (0);
seq__34763 = G__35086;
chunk__34765 = G__35087;
count__34766 = G__35088;
i__34767 = G__35089;
continue;
} else {
var G__35090 = cljs.core.next(seq__34763__$1);
var G__35091 = null;
var G__35092 = (0);
var G__35093 = (0);
seq__34763 = G__35090;
chunk__34765 = G__35091;
count__34766 = G__35092;
i__34767 = G__35093;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34847){
var map__34848 = p__34847;
var map__34848__$1 = (((((!((map__34848 == null))))?(((((map__34848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34848):map__34848);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34848__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34848__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34850,done){
var map__34851 = p__34850;
var map__34851__$1 = (((((!((map__34851 == null))))?(((((map__34851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34851):map__34851);
var msg = map__34851__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34853){
var map__34854 = p__34853;
var map__34854__$1 = (((((!((map__34854 == null))))?(((((map__34854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34854):map__34854);
var src = map__34854__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34854__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34857){var e = e34857;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34859,done){
var map__34860 = p__34859;
var map__34860__$1 = (((((!((map__34860 == null))))?(((((map__34860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34860):map__34860);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34860__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34860__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34863){
var map__34864 = p__34863;
var map__34864__$1 = (((((!((map__34864 == null))))?(((((map__34864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34864):map__34864);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34864__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34864__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34867,done){
var map__34868 = p__34867;
var map__34868__$1 = (((((!((map__34868 == null))))?(((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34868):map__34868);
var msg = map__34868__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34868__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34871_35112 = type;
var G__34871_35113__$1 = (((G__34871_35112 instanceof cljs.core.Keyword))?G__34871_35112.fqn:null);
switch (G__34871_35113__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34873 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34873.cljs$core$IFn$_invoke$arity$1 ? fexpr__34873.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34873.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34876){var e = e34876;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35124 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35124)){
var s_35125 = temp__5735__auto___35124;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35125.onclose = (function (e){
return null;
}));

s_35125.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
