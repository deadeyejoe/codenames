goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26355__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26356__i = 0, G__26356__a = new Array(arguments.length -  0);
while (G__26356__i < G__26356__a.length) {G__26356__a[G__26356__i] = arguments[G__26356__i + 0]; ++G__26356__i;}
  args = new cljs.core.IndexedSeq(G__26356__a,0,null);
} 
return G__26355__delegate.call(this,args);};
G__26355.cljs$lang$maxFixedArity = 0;
G__26355.cljs$lang$applyTo = (function (arglist__26357){
var args = cljs.core.seq(arglist__26357);
return G__26355__delegate(args);
});
G__26355.cljs$core$IFn$_invoke$arity$variadic = G__26355__delegate;
return G__26355;
})()
);

(o.error = (function() { 
var G__26358__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26359__i = 0, G__26359__a = new Array(arguments.length -  0);
while (G__26359__i < G__26359__a.length) {G__26359__a[G__26359__i] = arguments[G__26359__i + 0]; ++G__26359__i;}
  args = new cljs.core.IndexedSeq(G__26359__a,0,null);
} 
return G__26358__delegate.call(this,args);};
G__26358.cljs$lang$maxFixedArity = 0;
G__26358.cljs$lang$applyTo = (function (arglist__26360){
var args = cljs.core.seq(arglist__26360);
return G__26358__delegate(args);
});
G__26358.cljs$core$IFn$_invoke$arity$variadic = G__26358__delegate;
return G__26358;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
