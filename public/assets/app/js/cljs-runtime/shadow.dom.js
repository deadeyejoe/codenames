goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32299 = coll;
var G__32300 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32299,G__32300) : shadow.dom.lazy_native_coll_seq.call(null,G__32299,G__32300));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32324 = arguments.length;
switch (G__32324) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32329 = arguments.length;
switch (G__32329) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32337 = arguments.length;
switch (G__32337) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32355 = arguments.length;
switch (G__32355) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32364 = arguments.length;
switch (G__32364) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32374 = arguments.length;
switch (G__32374) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32380){if((e32380 instanceof Object)){
var e = e32380;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32380;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32384 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32385 = null;
var count__32386 = (0);
var i__32387 = (0);
while(true){
if((i__32387 < count__32386)){
var el = chunk__32385.cljs$core$IIndexed$_nth$arity$2(null,i__32387);
var handler_33092__$1 = ((function (seq__32384,chunk__32385,count__32386,i__32387,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32384,chunk__32385,count__32386,i__32387,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33092__$1);


var G__33093 = seq__32384;
var G__33094 = chunk__32385;
var G__33095 = count__32386;
var G__33096 = (i__32387 + (1));
seq__32384 = G__33093;
chunk__32385 = G__33094;
count__32386 = G__33095;
i__32387 = G__33096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32384);
if(temp__5735__auto__){
var seq__32384__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32384__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32384__$1);
var G__33097 = cljs.core.chunk_rest(seq__32384__$1);
var G__33098 = c__4609__auto__;
var G__33099 = cljs.core.count(c__4609__auto__);
var G__33100 = (0);
seq__32384 = G__33097;
chunk__32385 = G__33098;
count__32386 = G__33099;
i__32387 = G__33100;
continue;
} else {
var el = cljs.core.first(seq__32384__$1);
var handler_33101__$1 = ((function (seq__32384,chunk__32385,count__32386,i__32387,el,seq__32384__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32384,chunk__32385,count__32386,i__32387,el,seq__32384__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33101__$1);


var G__33102 = cljs.core.next(seq__32384__$1);
var G__33103 = null;
var G__33104 = (0);
var G__33105 = (0);
seq__32384 = G__33102;
chunk__32385 = G__33103;
count__32386 = G__33104;
i__32387 = G__33105;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32407 = arguments.length;
switch (G__32407) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32420 = cljs.core.seq(events);
var chunk__32421 = null;
var count__32422 = (0);
var i__32423 = (0);
while(true){
if((i__32423 < count__32422)){
var vec__32439 = chunk__32421.cljs$core$IIndexed$_nth$arity$2(null,i__32423);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32439,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33107 = seq__32420;
var G__33108 = chunk__32421;
var G__33109 = count__32422;
var G__33110 = (i__32423 + (1));
seq__32420 = G__33107;
chunk__32421 = G__33108;
count__32422 = G__33109;
i__32423 = G__33110;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32420);
if(temp__5735__auto__){
var seq__32420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32420__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32420__$1);
var G__33111 = cljs.core.chunk_rest(seq__32420__$1);
var G__33112 = c__4609__auto__;
var G__33113 = cljs.core.count(c__4609__auto__);
var G__33114 = (0);
seq__32420 = G__33111;
chunk__32421 = G__33112;
count__32422 = G__33113;
i__32423 = G__33114;
continue;
} else {
var vec__32443 = cljs.core.first(seq__32420__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33115 = cljs.core.next(seq__32420__$1);
var G__33116 = null;
var G__33117 = (0);
var G__33118 = (0);
seq__32420 = G__33115;
chunk__32421 = G__33116;
count__32422 = G__33117;
i__32423 = G__33118;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32448 = cljs.core.seq(styles);
var chunk__32449 = null;
var count__32450 = (0);
var i__32451 = (0);
while(true){
if((i__32451 < count__32450)){
var vec__32464 = chunk__32449.cljs$core$IIndexed$_nth$arity$2(null,i__32451);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32464,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33119 = seq__32448;
var G__33120 = chunk__32449;
var G__33121 = count__32450;
var G__33122 = (i__32451 + (1));
seq__32448 = G__33119;
chunk__32449 = G__33120;
count__32450 = G__33121;
i__32451 = G__33122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32448);
if(temp__5735__auto__){
var seq__32448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32448__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32448__$1);
var G__33123 = cljs.core.chunk_rest(seq__32448__$1);
var G__33124 = c__4609__auto__;
var G__33125 = cljs.core.count(c__4609__auto__);
var G__33126 = (0);
seq__32448 = G__33123;
chunk__32449 = G__33124;
count__32450 = G__33125;
i__32451 = G__33126;
continue;
} else {
var vec__32470 = cljs.core.first(seq__32448__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33127 = cljs.core.next(seq__32448__$1);
var G__33128 = null;
var G__33129 = (0);
var G__33130 = (0);
seq__32448 = G__33127;
chunk__32449 = G__33128;
count__32450 = G__33129;
i__32451 = G__33130;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32480_33131 = key;
var G__32480_33132__$1 = (((G__32480_33131 instanceof cljs.core.Keyword))?G__32480_33131.fqn:null);
switch (G__32480_33132__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33134 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33134,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33134,"aria-");
}
})())){
el.setAttribute(ks_33134,value);
} else {
(el[ks_33134] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32503){
var map__32505 = p__32503;
var map__32505__$1 = (((((!((map__32505 == null))))?(((((map__32505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32505):map__32505);
var props = map__32505__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32513 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32520 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32520,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32520;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32526 = arguments.length;
switch (G__32526) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32544){
var vec__32545 = p__32544;
var seq__32546 = cljs.core.seq(vec__32545);
var first__32547 = cljs.core.first(seq__32546);
var seq__32546__$1 = cljs.core.next(seq__32546);
var nn = first__32547;
var first__32547__$1 = cljs.core.first(seq__32546__$1);
var seq__32546__$2 = cljs.core.next(seq__32546__$1);
var np = first__32547__$1;
var nc = seq__32546__$2;
var node = vec__32545;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32548 = nn;
var G__32549 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32548,G__32549) : create_fn.call(null,G__32548,G__32549));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32550 = nn;
var G__32551 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32550,G__32551) : create_fn.call(null,G__32550,G__32551));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32555 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32555,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32555,(1),null);
var seq__32559_33148 = cljs.core.seq(node_children);
var chunk__32560_33149 = null;
var count__32561_33150 = (0);
var i__32562_33151 = (0);
while(true){
if((i__32562_33151 < count__32561_33150)){
var child_struct_33153 = chunk__32560_33149.cljs$core$IIndexed$_nth$arity$2(null,i__32562_33151);
var children_33155 = shadow.dom.dom_node(child_struct_33153);
if(cljs.core.seq_QMARK_(children_33155)){
var seq__32604_33156 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33155));
var chunk__32606_33157 = null;
var count__32607_33158 = (0);
var i__32608_33159 = (0);
while(true){
if((i__32608_33159 < count__32607_33158)){
var child_33160 = chunk__32606_33157.cljs$core$IIndexed$_nth$arity$2(null,i__32608_33159);
if(cljs.core.truth_(child_33160)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33160);


var G__33161 = seq__32604_33156;
var G__33162 = chunk__32606_33157;
var G__33163 = count__32607_33158;
var G__33164 = (i__32608_33159 + (1));
seq__32604_33156 = G__33161;
chunk__32606_33157 = G__33162;
count__32607_33158 = G__33163;
i__32608_33159 = G__33164;
continue;
} else {
var G__33166 = seq__32604_33156;
var G__33167 = chunk__32606_33157;
var G__33168 = count__32607_33158;
var G__33169 = (i__32608_33159 + (1));
seq__32604_33156 = G__33166;
chunk__32606_33157 = G__33167;
count__32607_33158 = G__33168;
i__32608_33159 = G__33169;
continue;
}
} else {
var temp__5735__auto___33170 = cljs.core.seq(seq__32604_33156);
if(temp__5735__auto___33170){
var seq__32604_33171__$1 = temp__5735__auto___33170;
if(cljs.core.chunked_seq_QMARK_(seq__32604_33171__$1)){
var c__4609__auto___33172 = cljs.core.chunk_first(seq__32604_33171__$1);
var G__33173 = cljs.core.chunk_rest(seq__32604_33171__$1);
var G__33174 = c__4609__auto___33172;
var G__33175 = cljs.core.count(c__4609__auto___33172);
var G__33176 = (0);
seq__32604_33156 = G__33173;
chunk__32606_33157 = G__33174;
count__32607_33158 = G__33175;
i__32608_33159 = G__33176;
continue;
} else {
var child_33177 = cljs.core.first(seq__32604_33171__$1);
if(cljs.core.truth_(child_33177)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33177);


var G__33178 = cljs.core.next(seq__32604_33171__$1);
var G__33179 = null;
var G__33180 = (0);
var G__33181 = (0);
seq__32604_33156 = G__33178;
chunk__32606_33157 = G__33179;
count__32607_33158 = G__33180;
i__32608_33159 = G__33181;
continue;
} else {
var G__33182 = cljs.core.next(seq__32604_33171__$1);
var G__33183 = null;
var G__33184 = (0);
var G__33185 = (0);
seq__32604_33156 = G__33182;
chunk__32606_33157 = G__33183;
count__32607_33158 = G__33184;
i__32608_33159 = G__33185;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33155);
}


var G__33187 = seq__32559_33148;
var G__33188 = chunk__32560_33149;
var G__33189 = count__32561_33150;
var G__33190 = (i__32562_33151 + (1));
seq__32559_33148 = G__33187;
chunk__32560_33149 = G__33188;
count__32561_33150 = G__33189;
i__32562_33151 = G__33190;
continue;
} else {
var temp__5735__auto___33191 = cljs.core.seq(seq__32559_33148);
if(temp__5735__auto___33191){
var seq__32559_33192__$1 = temp__5735__auto___33191;
if(cljs.core.chunked_seq_QMARK_(seq__32559_33192__$1)){
var c__4609__auto___33193 = cljs.core.chunk_first(seq__32559_33192__$1);
var G__33194 = cljs.core.chunk_rest(seq__32559_33192__$1);
var G__33195 = c__4609__auto___33193;
var G__33196 = cljs.core.count(c__4609__auto___33193);
var G__33197 = (0);
seq__32559_33148 = G__33194;
chunk__32560_33149 = G__33195;
count__32561_33150 = G__33196;
i__32562_33151 = G__33197;
continue;
} else {
var child_struct_33198 = cljs.core.first(seq__32559_33192__$1);
var children_33199 = shadow.dom.dom_node(child_struct_33198);
if(cljs.core.seq_QMARK_(children_33199)){
var seq__32619_33201 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33199));
var chunk__32621_33202 = null;
var count__32622_33203 = (0);
var i__32623_33204 = (0);
while(true){
if((i__32623_33204 < count__32622_33203)){
var child_33206 = chunk__32621_33202.cljs$core$IIndexed$_nth$arity$2(null,i__32623_33204);
if(cljs.core.truth_(child_33206)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33206);


var G__33207 = seq__32619_33201;
var G__33208 = chunk__32621_33202;
var G__33209 = count__32622_33203;
var G__33210 = (i__32623_33204 + (1));
seq__32619_33201 = G__33207;
chunk__32621_33202 = G__33208;
count__32622_33203 = G__33209;
i__32623_33204 = G__33210;
continue;
} else {
var G__33211 = seq__32619_33201;
var G__33212 = chunk__32621_33202;
var G__33213 = count__32622_33203;
var G__33214 = (i__32623_33204 + (1));
seq__32619_33201 = G__33211;
chunk__32621_33202 = G__33212;
count__32622_33203 = G__33213;
i__32623_33204 = G__33214;
continue;
}
} else {
var temp__5735__auto___33216__$1 = cljs.core.seq(seq__32619_33201);
if(temp__5735__auto___33216__$1){
var seq__32619_33218__$1 = temp__5735__auto___33216__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32619_33218__$1)){
var c__4609__auto___33219 = cljs.core.chunk_first(seq__32619_33218__$1);
var G__33220 = cljs.core.chunk_rest(seq__32619_33218__$1);
var G__33221 = c__4609__auto___33219;
var G__33222 = cljs.core.count(c__4609__auto___33219);
var G__33223 = (0);
seq__32619_33201 = G__33220;
chunk__32621_33202 = G__33221;
count__32622_33203 = G__33222;
i__32623_33204 = G__33223;
continue;
} else {
var child_33225 = cljs.core.first(seq__32619_33218__$1);
if(cljs.core.truth_(child_33225)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33225);


var G__33227 = cljs.core.next(seq__32619_33218__$1);
var G__33228 = null;
var G__33229 = (0);
var G__33230 = (0);
seq__32619_33201 = G__33227;
chunk__32621_33202 = G__33228;
count__32622_33203 = G__33229;
i__32623_33204 = G__33230;
continue;
} else {
var G__33231 = cljs.core.next(seq__32619_33218__$1);
var G__33232 = null;
var G__33233 = (0);
var G__33234 = (0);
seq__32619_33201 = G__33231;
chunk__32621_33202 = G__33232;
count__32622_33203 = G__33233;
i__32623_33204 = G__33234;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33199);
}


var G__33235 = cljs.core.next(seq__32559_33192__$1);
var G__33236 = null;
var G__33237 = (0);
var G__33238 = (0);
seq__32559_33148 = G__33235;
chunk__32560_33149 = G__33236;
count__32561_33150 = G__33237;
i__32562_33151 = G__33238;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32647 = cljs.core.seq(node);
var chunk__32648 = null;
var count__32649 = (0);
var i__32650 = (0);
while(true){
if((i__32650 < count__32649)){
var n = chunk__32648.cljs$core$IIndexed$_nth$arity$2(null,i__32650);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33242 = seq__32647;
var G__33243 = chunk__32648;
var G__33244 = count__32649;
var G__33245 = (i__32650 + (1));
seq__32647 = G__33242;
chunk__32648 = G__33243;
count__32649 = G__33244;
i__32650 = G__33245;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32647);
if(temp__5735__auto__){
var seq__32647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32647__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32647__$1);
var G__33248 = cljs.core.chunk_rest(seq__32647__$1);
var G__33249 = c__4609__auto__;
var G__33250 = cljs.core.count(c__4609__auto__);
var G__33251 = (0);
seq__32647 = G__33248;
chunk__32648 = G__33249;
count__32649 = G__33250;
i__32650 = G__33251;
continue;
} else {
var n = cljs.core.first(seq__32647__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33252 = cljs.core.next(seq__32647__$1);
var G__33253 = null;
var G__33254 = (0);
var G__33255 = (0);
seq__32647 = G__33252;
chunk__32648 = G__33253;
count__32649 = G__33254;
i__32650 = G__33255;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32668 = arguments.length;
switch (G__32668) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32671 = arguments.length;
switch (G__32671) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32679 = arguments.length;
switch (G__32679) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33277 = arguments.length;
var i__4790__auto___33278 = (0);
while(true){
if((i__4790__auto___33278 < len__4789__auto___33277)){
args__4795__auto__.push((arguments[i__4790__auto___33278]));

var G__33279 = (i__4790__auto___33278 + (1));
i__4790__auto___33278 = G__33279;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32688_33280 = cljs.core.seq(nodes);
var chunk__32689_33281 = null;
var count__32690_33282 = (0);
var i__32691_33283 = (0);
while(true){
if((i__32691_33283 < count__32690_33282)){
var node_33285 = chunk__32689_33281.cljs$core$IIndexed$_nth$arity$2(null,i__32691_33283);
fragment.appendChild(shadow.dom._to_dom(node_33285));


var G__33287 = seq__32688_33280;
var G__33288 = chunk__32689_33281;
var G__33289 = count__32690_33282;
var G__33290 = (i__32691_33283 + (1));
seq__32688_33280 = G__33287;
chunk__32689_33281 = G__33288;
count__32690_33282 = G__33289;
i__32691_33283 = G__33290;
continue;
} else {
var temp__5735__auto___33292 = cljs.core.seq(seq__32688_33280);
if(temp__5735__auto___33292){
var seq__32688_33293__$1 = temp__5735__auto___33292;
if(cljs.core.chunked_seq_QMARK_(seq__32688_33293__$1)){
var c__4609__auto___33294 = cljs.core.chunk_first(seq__32688_33293__$1);
var G__33295 = cljs.core.chunk_rest(seq__32688_33293__$1);
var G__33296 = c__4609__auto___33294;
var G__33297 = cljs.core.count(c__4609__auto___33294);
var G__33298 = (0);
seq__32688_33280 = G__33295;
chunk__32689_33281 = G__33296;
count__32690_33282 = G__33297;
i__32691_33283 = G__33298;
continue;
} else {
var node_33303 = cljs.core.first(seq__32688_33293__$1);
fragment.appendChild(shadow.dom._to_dom(node_33303));


var G__33304 = cljs.core.next(seq__32688_33293__$1);
var G__33305 = null;
var G__33306 = (0);
var G__33307 = (0);
seq__32688_33280 = G__33304;
chunk__32689_33281 = G__33305;
count__32690_33282 = G__33306;
i__32691_33283 = G__33307;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32686){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32686));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32699_33312 = cljs.core.seq(scripts);
var chunk__32700_33313 = null;
var count__32701_33314 = (0);
var i__32702_33315 = (0);
while(true){
if((i__32702_33315 < count__32701_33314)){
var vec__32712_33317 = chunk__32700_33313.cljs$core$IIndexed$_nth$arity$2(null,i__32702_33315);
var script_tag_33318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712_33317,(0),null);
var script_body_33319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32712_33317,(1),null);
eval(script_body_33319);


var G__33320 = seq__32699_33312;
var G__33321 = chunk__32700_33313;
var G__33322 = count__32701_33314;
var G__33323 = (i__32702_33315 + (1));
seq__32699_33312 = G__33320;
chunk__32700_33313 = G__33321;
count__32701_33314 = G__33322;
i__32702_33315 = G__33323;
continue;
} else {
var temp__5735__auto___33324 = cljs.core.seq(seq__32699_33312);
if(temp__5735__auto___33324){
var seq__32699_33325__$1 = temp__5735__auto___33324;
if(cljs.core.chunked_seq_QMARK_(seq__32699_33325__$1)){
var c__4609__auto___33326 = cljs.core.chunk_first(seq__32699_33325__$1);
var G__33327 = cljs.core.chunk_rest(seq__32699_33325__$1);
var G__33328 = c__4609__auto___33326;
var G__33329 = cljs.core.count(c__4609__auto___33326);
var G__33330 = (0);
seq__32699_33312 = G__33327;
chunk__32700_33313 = G__33328;
count__32701_33314 = G__33329;
i__32702_33315 = G__33330;
continue;
} else {
var vec__32716_33331 = cljs.core.first(seq__32699_33325__$1);
var script_tag_33332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32716_33331,(0),null);
var script_body_33333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32716_33331,(1),null);
eval(script_body_33333);


var G__33337 = cljs.core.next(seq__32699_33325__$1);
var G__33338 = null;
var G__33339 = (0);
var G__33340 = (0);
seq__32699_33312 = G__33337;
chunk__32700_33313 = G__33338;
count__32701_33314 = G__33339;
i__32702_33315 = G__33340;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32722){
var vec__32723 = p__32722;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32723,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32723,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32732 = arguments.length;
switch (G__32732) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32744 = cljs.core.seq(style_keys);
var chunk__32745 = null;
var count__32746 = (0);
var i__32747 = (0);
while(true){
if((i__32747 < count__32746)){
var it = chunk__32745.cljs$core$IIndexed$_nth$arity$2(null,i__32747);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33367 = seq__32744;
var G__33368 = chunk__32745;
var G__33369 = count__32746;
var G__33370 = (i__32747 + (1));
seq__32744 = G__33367;
chunk__32745 = G__33368;
count__32746 = G__33369;
i__32747 = G__33370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32744);
if(temp__5735__auto__){
var seq__32744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32744__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32744__$1);
var G__33375 = cljs.core.chunk_rest(seq__32744__$1);
var G__33376 = c__4609__auto__;
var G__33377 = cljs.core.count(c__4609__auto__);
var G__33378 = (0);
seq__32744 = G__33375;
chunk__32745 = G__33376;
count__32746 = G__33377;
i__32747 = G__33378;
continue;
} else {
var it = cljs.core.first(seq__32744__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33381 = cljs.core.next(seq__32744__$1);
var G__33382 = null;
var G__33383 = (0);
var G__33384 = (0);
seq__32744 = G__33381;
chunk__32745 = G__33382;
count__32746 = G__33383;
i__32747 = G__33384;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32753,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32759 = k32753;
var G__32759__$1 = (((G__32759 instanceof cljs.core.Keyword))?G__32759.fqn:null);
switch (G__32759__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32753,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32760){
var vec__32762 = p__32760;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32752){
var self__ = this;
var G__32752__$1 = this;
return (new cljs.core.RecordIter((0),G__32752__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32754,other32755){
var self__ = this;
var this32754__$1 = this;
return (((!((other32755 == null)))) && ((this32754__$1.constructor === other32755.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32754__$1.x,other32755.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32754__$1.y,other32755.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32754__$1.__extmap,other32755.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32752){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32769 = cljs.core.keyword_identical_QMARK_;
var expr__32770 = k__4447__auto__;
if(cljs.core.truth_((pred__32769.cljs$core$IFn$_invoke$arity$2 ? pred__32769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32770) : pred__32769.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32770)))){
return (new shadow.dom.Coordinate(G__32752,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32769.cljs$core$IFn$_invoke$arity$2 ? pred__32769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32770) : pred__32769.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32770)))){
return (new shadow.dom.Coordinate(self__.x,G__32752,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32752),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32752){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32752,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32758){
var extmap__4478__auto__ = (function (){var G__32777 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32758,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32758)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32777);
} else {
return G__32777;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32758),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32758),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32783,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32788 = k32783;
var G__32788__$1 = (((G__32788 instanceof cljs.core.Keyword))?G__32788.fqn:null);
switch (G__32788__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32783,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32789){
var vec__32790 = p__32789;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32782){
var self__ = this;
var G__32782__$1 = this;
return (new cljs.core.RecordIter((0),G__32782__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32784,other32785){
var self__ = this;
var this32784__$1 = this;
return (((!((other32785 == null)))) && ((this32784__$1.constructor === other32785.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32784__$1.w,other32785.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32784__$1.h,other32785.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32784__$1.__extmap,other32785.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32782){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32809 = cljs.core.keyword_identical_QMARK_;
var expr__32810 = k__4447__auto__;
if(cljs.core.truth_((pred__32809.cljs$core$IFn$_invoke$arity$2 ? pred__32809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32810) : pred__32809.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32810)))){
return (new shadow.dom.Size(G__32782,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32809.cljs$core$IFn$_invoke$arity$2 ? pred__32809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32810) : pred__32809.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32810)))){
return (new shadow.dom.Size(self__.w,G__32782,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32782),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32782){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32782,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32786){
var extmap__4478__auto__ = (function (){var G__32820 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32786,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32786)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32820);
} else {
return G__32820;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32786),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32786),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33452 = (i + (1));
var G__33453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33452;
ret = G__33453;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32888){
var vec__32889 = p__32888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32889,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32902 = arguments.length;
switch (G__32902) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33467 = ps;
var G__33468 = (i + (1));
el__$1 = G__33467;
i = G__33468;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32926 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32930_33472 = cljs.core.seq(props);
var chunk__32931_33473 = null;
var count__32932_33474 = (0);
var i__32933_33475 = (0);
while(true){
if((i__32933_33475 < count__32932_33474)){
var vec__32944_33476 = chunk__32931_33473.cljs$core$IIndexed$_nth$arity$2(null,i__32933_33475);
var k_33477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32944_33476,(0),null);
var v_33478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32944_33476,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33477);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33477),v_33478);


var G__33482 = seq__32930_33472;
var G__33483 = chunk__32931_33473;
var G__33484 = count__32932_33474;
var G__33485 = (i__32933_33475 + (1));
seq__32930_33472 = G__33482;
chunk__32931_33473 = G__33483;
count__32932_33474 = G__33484;
i__32933_33475 = G__33485;
continue;
} else {
var temp__5735__auto___33486 = cljs.core.seq(seq__32930_33472);
if(temp__5735__auto___33486){
var seq__32930_33487__$1 = temp__5735__auto___33486;
if(cljs.core.chunked_seq_QMARK_(seq__32930_33487__$1)){
var c__4609__auto___33488 = cljs.core.chunk_first(seq__32930_33487__$1);
var G__33489 = cljs.core.chunk_rest(seq__32930_33487__$1);
var G__33490 = c__4609__auto___33488;
var G__33491 = cljs.core.count(c__4609__auto___33488);
var G__33492 = (0);
seq__32930_33472 = G__33489;
chunk__32931_33473 = G__33490;
count__32932_33474 = G__33491;
i__32933_33475 = G__33492;
continue;
} else {
var vec__32948_33493 = cljs.core.first(seq__32930_33487__$1);
var k_33494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948_33493,(0),null);
var v_33495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948_33493,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33494);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33494),v_33495);


var G__33496 = cljs.core.next(seq__32930_33487__$1);
var G__33497 = null;
var G__33498 = (0);
var G__33499 = (0);
seq__32930_33472 = G__33496;
chunk__32931_33473 = G__33497;
count__32932_33474 = G__33498;
i__32933_33475 = G__33499;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32956 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(1),null);
var seq__32961_33500 = cljs.core.seq(node_children);
var chunk__32963_33501 = null;
var count__32964_33502 = (0);
var i__32965_33503 = (0);
while(true){
if((i__32965_33503 < count__32964_33502)){
var child_struct_33507 = chunk__32963_33501.cljs$core$IIndexed$_nth$arity$2(null,i__32965_33503);
if((!((child_struct_33507 == null)))){
if(typeof child_struct_33507 === 'string'){
var text_33508 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33508),child_struct_33507].join(''));
} else {
var children_33509 = shadow.dom.svg_node(child_struct_33507);
if(cljs.core.seq_QMARK_(children_33509)){
var seq__33000_33510 = cljs.core.seq(children_33509);
var chunk__33002_33511 = null;
var count__33003_33512 = (0);
var i__33004_33513 = (0);
while(true){
if((i__33004_33513 < count__33003_33512)){
var child_33514 = chunk__33002_33511.cljs$core$IIndexed$_nth$arity$2(null,i__33004_33513);
if(cljs.core.truth_(child_33514)){
node.appendChild(child_33514);


var G__33515 = seq__33000_33510;
var G__33516 = chunk__33002_33511;
var G__33517 = count__33003_33512;
var G__33518 = (i__33004_33513 + (1));
seq__33000_33510 = G__33515;
chunk__33002_33511 = G__33516;
count__33003_33512 = G__33517;
i__33004_33513 = G__33518;
continue;
} else {
var G__33519 = seq__33000_33510;
var G__33520 = chunk__33002_33511;
var G__33521 = count__33003_33512;
var G__33522 = (i__33004_33513 + (1));
seq__33000_33510 = G__33519;
chunk__33002_33511 = G__33520;
count__33003_33512 = G__33521;
i__33004_33513 = G__33522;
continue;
}
} else {
var temp__5735__auto___33523 = cljs.core.seq(seq__33000_33510);
if(temp__5735__auto___33523){
var seq__33000_33524__$1 = temp__5735__auto___33523;
if(cljs.core.chunked_seq_QMARK_(seq__33000_33524__$1)){
var c__4609__auto___33525 = cljs.core.chunk_first(seq__33000_33524__$1);
var G__33526 = cljs.core.chunk_rest(seq__33000_33524__$1);
var G__33527 = c__4609__auto___33525;
var G__33528 = cljs.core.count(c__4609__auto___33525);
var G__33529 = (0);
seq__33000_33510 = G__33526;
chunk__33002_33511 = G__33527;
count__33003_33512 = G__33528;
i__33004_33513 = G__33529;
continue;
} else {
var child_33530 = cljs.core.first(seq__33000_33524__$1);
if(cljs.core.truth_(child_33530)){
node.appendChild(child_33530);


var G__33531 = cljs.core.next(seq__33000_33524__$1);
var G__33532 = null;
var G__33533 = (0);
var G__33534 = (0);
seq__33000_33510 = G__33531;
chunk__33002_33511 = G__33532;
count__33003_33512 = G__33533;
i__33004_33513 = G__33534;
continue;
} else {
var G__33536 = cljs.core.next(seq__33000_33524__$1);
var G__33537 = null;
var G__33538 = (0);
var G__33539 = (0);
seq__33000_33510 = G__33536;
chunk__33002_33511 = G__33537;
count__33003_33512 = G__33538;
i__33004_33513 = G__33539;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33509);
}
}


var G__33543 = seq__32961_33500;
var G__33544 = chunk__32963_33501;
var G__33545 = count__32964_33502;
var G__33546 = (i__32965_33503 + (1));
seq__32961_33500 = G__33543;
chunk__32963_33501 = G__33544;
count__32964_33502 = G__33545;
i__32965_33503 = G__33546;
continue;
} else {
var G__33547 = seq__32961_33500;
var G__33548 = chunk__32963_33501;
var G__33549 = count__32964_33502;
var G__33550 = (i__32965_33503 + (1));
seq__32961_33500 = G__33547;
chunk__32963_33501 = G__33548;
count__32964_33502 = G__33549;
i__32965_33503 = G__33550;
continue;
}
} else {
var temp__5735__auto___33551 = cljs.core.seq(seq__32961_33500);
if(temp__5735__auto___33551){
var seq__32961_33552__$1 = temp__5735__auto___33551;
if(cljs.core.chunked_seq_QMARK_(seq__32961_33552__$1)){
var c__4609__auto___33553 = cljs.core.chunk_first(seq__32961_33552__$1);
var G__33554 = cljs.core.chunk_rest(seq__32961_33552__$1);
var G__33555 = c__4609__auto___33553;
var G__33556 = cljs.core.count(c__4609__auto___33553);
var G__33557 = (0);
seq__32961_33500 = G__33554;
chunk__32963_33501 = G__33555;
count__32964_33502 = G__33556;
i__32965_33503 = G__33557;
continue;
} else {
var child_struct_33558 = cljs.core.first(seq__32961_33552__$1);
if((!((child_struct_33558 == null)))){
if(typeof child_struct_33558 === 'string'){
var text_33559 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33559),child_struct_33558].join(''));
} else {
var children_33560 = shadow.dom.svg_node(child_struct_33558);
if(cljs.core.seq_QMARK_(children_33560)){
var seq__33009_33561 = cljs.core.seq(children_33560);
var chunk__33011_33562 = null;
var count__33012_33563 = (0);
var i__33013_33564 = (0);
while(true){
if((i__33013_33564 < count__33012_33563)){
var child_33565 = chunk__33011_33562.cljs$core$IIndexed$_nth$arity$2(null,i__33013_33564);
if(cljs.core.truth_(child_33565)){
node.appendChild(child_33565);


var G__33566 = seq__33009_33561;
var G__33567 = chunk__33011_33562;
var G__33568 = count__33012_33563;
var G__33569 = (i__33013_33564 + (1));
seq__33009_33561 = G__33566;
chunk__33011_33562 = G__33567;
count__33012_33563 = G__33568;
i__33013_33564 = G__33569;
continue;
} else {
var G__33570 = seq__33009_33561;
var G__33571 = chunk__33011_33562;
var G__33572 = count__33012_33563;
var G__33573 = (i__33013_33564 + (1));
seq__33009_33561 = G__33570;
chunk__33011_33562 = G__33571;
count__33012_33563 = G__33572;
i__33013_33564 = G__33573;
continue;
}
} else {
var temp__5735__auto___33574__$1 = cljs.core.seq(seq__33009_33561);
if(temp__5735__auto___33574__$1){
var seq__33009_33575__$1 = temp__5735__auto___33574__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33009_33575__$1)){
var c__4609__auto___33576 = cljs.core.chunk_first(seq__33009_33575__$1);
var G__33577 = cljs.core.chunk_rest(seq__33009_33575__$1);
var G__33578 = c__4609__auto___33576;
var G__33579 = cljs.core.count(c__4609__auto___33576);
var G__33580 = (0);
seq__33009_33561 = G__33577;
chunk__33011_33562 = G__33578;
count__33012_33563 = G__33579;
i__33013_33564 = G__33580;
continue;
} else {
var child_33581 = cljs.core.first(seq__33009_33575__$1);
if(cljs.core.truth_(child_33581)){
node.appendChild(child_33581);


var G__33582 = cljs.core.next(seq__33009_33575__$1);
var G__33583 = null;
var G__33584 = (0);
var G__33585 = (0);
seq__33009_33561 = G__33582;
chunk__33011_33562 = G__33583;
count__33012_33563 = G__33584;
i__33013_33564 = G__33585;
continue;
} else {
var G__33586 = cljs.core.next(seq__33009_33575__$1);
var G__33587 = null;
var G__33588 = (0);
var G__33589 = (0);
seq__33009_33561 = G__33586;
chunk__33011_33562 = G__33587;
count__33012_33563 = G__33588;
i__33013_33564 = G__33589;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33560);
}
}


var G__33590 = cljs.core.next(seq__32961_33552__$1);
var G__33591 = null;
var G__33592 = (0);
var G__33593 = (0);
seq__32961_33500 = G__33590;
chunk__32963_33501 = G__33591;
count__32964_33502 = G__33592;
i__32965_33503 = G__33593;
continue;
} else {
var G__33594 = cljs.core.next(seq__32961_33552__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__32961_33500 = G__33594;
chunk__32963_33501 = G__33595;
count__32964_33502 = G__33596;
i__32965_33503 = G__33597;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33600 = arguments.length;
var i__4790__auto___33601 = (0);
while(true){
if((i__4790__auto___33601 < len__4789__auto___33600)){
args__4795__auto__.push((arguments[i__4790__auto___33601]));

var G__33602 = (i__4790__auto___33601 + (1));
i__4790__auto___33601 = G__33602;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33023){
var G__33025 = cljs.core.first(seq33023);
var seq33023__$1 = cljs.core.next(seq33023);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33025,seq33023__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33032 = arguments.length;
switch (G__33032) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29557__auto___33605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_33045){
var state_val_33046 = (state_33045[(1)]);
if((state_val_33046 === (1))){
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33045__$1,(2),once_or_cleanup);
} else {
if((state_val_33046 === (2))){
var inst_33041 = (state_33045[(2)]);
var inst_33043 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33045__$1 = (function (){var statearr_33048 = state_33045;
(statearr_33048[(7)] = inst_33041);

return statearr_33048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33045__$1,inst_33043);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29271__auto__ = null;
var shadow$dom$state_machine__29271__auto____0 = (function (){
var statearr_33050 = [null,null,null,null,null,null,null,null];
(statearr_33050[(0)] = shadow$dom$state_machine__29271__auto__);

(statearr_33050[(1)] = (1));

return statearr_33050;
});
var shadow$dom$state_machine__29271__auto____1 = (function (state_33045){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_33045);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e33052){if((e33052 instanceof Object)){
var ex__29274__auto__ = e33052;
var statearr_33054_33606 = state_33045;
(statearr_33054_33606[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_33045;
state_33045 = G__33607;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
shadow$dom$state_machine__29271__auto__ = function(state_33045){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29271__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29271__auto____1.call(this,state_33045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29271__auto____0;
shadow$dom$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29271__auto____1;
return shadow$dom$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_33055 = f__29558__auto__();
(statearr_33055[(6)] = c__29557__auto___33605);

return statearr_33055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
