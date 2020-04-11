goog.provide('codenames.random');
goog.require('cljs.core');
goog.require('clojure.string');
codenames.random.modulus = Math.pow((2),(32));
codenames.random.multiplier = (134775813);
codenames.random.increment = (1);
codenames.random.step = (function codenames$random$step(in$){
return cljs.core.mod(((codenames.random.multiplier * in$) + codenames.random.increment),codenames.random.modulus);
});
codenames.random.random_lazy_seq = (function codenames$random$random_lazy_seq(seed,limit){
var stepped = codenames.random.step(seed);
var out = (cljs.core.truth_(limit)?cljs.core.mod(stepped,limit):stepped);
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(out,(codenames.random.random_lazy_seq.cljs$core$IFn$_invoke$arity$2 ? codenames.random.random_lazy_seq.cljs$core$IFn$_invoke$arity$2(stepped,limit) : codenames.random.random_lazy_seq.call(null,stepped,limit)));
}),null,null));
});
codenames.random.generator = (function codenames$random$generator(seed,limit){
return codenames.random.random_lazy_seq(seed,limit);
});
codenames.random.coerce_seed = (function codenames$random$coerce_seed(seed){
if(typeof seed === 'string'){
return cljs.core.hash(clojure.string.lower_case(seed));
} else {
return seed;
}
});
codenames.random.sample = (function codenames$random$sample(collection,amount,seed){
var gen = codenames.random.generator(codenames.random.coerce_seed(seed),(cljs.core.count(collection) - (1)));
var indices = cljs.core.PersistentVector.EMPTY;
var sampled = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sampled),amount)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gen,indices,sampled){
return (function (p1__26429_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(collection,p1__26429_SHARP_);
});})(gen,indices,sampled))
,indices);
} else {
var vec__26433 = gen;
var seq__26434 = cljs.core.seq(vec__26433);
var first__26435 = cljs.core.first(seq__26434);
var seq__26434__$1 = cljs.core.next(seq__26434);
var next_rn = first__26435;
var rest_rn = seq__26434__$1;
var already_generated_QMARK_ = (sampled.cljs$core$IFn$_invoke$arity$1 ? sampled.cljs$core$IFn$_invoke$arity$1(next_rn) : sampled.call(null,next_rn));
if(cljs.core.truth_(already_generated_QMARK_)){
var G__26436 = rest_rn;
var G__26437 = indices;
var G__26438 = sampled;
gen = G__26436;
indices = G__26437;
sampled = G__26438;
continue;
} else {
var G__26439 = rest_rn;
var G__26440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indices,next_rn);
var G__26441 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sampled,next_rn);
gen = G__26439;
indices = G__26440;
sampled = G__26441;
continue;
}
}
break;
}
});

//# sourceMappingURL=codenames.random.js.map
