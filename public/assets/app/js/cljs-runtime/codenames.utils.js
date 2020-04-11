goog.provide('codenames.utils');
goog.require('cljs.core');
goog.require('reagent.core');
codenames.utils.atom_input = (function codenames$utils$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28188_SHARP_){
return cljs.core.reset_BANG_(value,p1__28188_SHARP_.target.value);
})], null)], null);
});
codenames.utils.shadow = (function codenames$utils$shadow(atom){
var initial_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(atom));
var current_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(atom));
return reagent.core.cursor((function() {
var G__28189 = null;
var G__28189__1 = (function (_k){
if((cljs.core.deref(initial_value) === cljs.core.deref(atom))){
} else {
cljs.core.reset_BANG_(initial_value,cljs.core.deref(atom));

cljs.core.reset_BANG_(current_value,cljs.core.deref(atom));
}

return cljs.core.deref(current_value);
});
var G__28189__2 = (function (_k,v){
return cljs.core.reset_BANG_(current_value,v);
});
G__28189 = function(_k,v){
switch(arguments.length){
case 1:
return G__28189__1.call(this,_k);
case 2:
return G__28189__2.call(this,_k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28189.cljs$core$IFn$_invoke$arity$1 = G__28189__1;
G__28189.cljs$core$IFn$_invoke$arity$2 = G__28189__2;
return G__28189;
})()
,cljs.core.PersistentVector.EMPTY);
});

//# sourceMappingURL=codenames.utils.js.map
