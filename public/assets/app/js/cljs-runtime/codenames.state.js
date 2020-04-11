goog.provide('codenames.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('codenames.words');
goog.require('clojure.string');
goog.require('codenames.random');
codenames.state.new_seed = (function codenames$state$new_seed(){
return cljs.core.first(codenames.random.sample(codenames.words.words,(1),Date.now()));
});
codenames.state.select_words = (function codenames$state$select_words(seed){
return codenames.random.sample(codenames.words.words,(25),seed);
});
codenames.state.generate_word_map = (function codenames$state$generate_word_map(words){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,word){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("words","word","words/word",-298562034),clojure.string.upper_case(word),new cljs.core.Keyword("words","team","words/team",1410083788),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null);
}),words));
});
codenames.state.new_state = (function codenames$state$new_state(var_args){
var G__29027 = arguments.length;
switch (G__29027) {
case 0:
return codenames.state.new_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return codenames.state.new_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(codenames.state.new_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return codenames.state.new_state.cljs$core$IFn$_invoke$arity$1(codenames.state.new_seed());
}));

(codenames.state.new_state.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("words","seed","words/seed",156620856),seed,new cljs.core.Keyword("words","map","words/map",1526820150),codenames.state.generate_word_map(codenames.state.select_words(seed)),new cljs.core.Keyword("codenames.state","controlled-word","codenames.state/controlled-word",619536658),false], null);
}));

(codenames.state.new_state.cljs$lang$maxFixedArity = 1);

if((typeof codenames !== 'undefined') && (typeof codenames.state !== 'undefined') && (typeof codenames.state.state !== 'undefined')){
} else {
codenames.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(codenames.state.new_state.cljs$core$IFn$_invoke$arity$0());
}
codenames.state.seed_cursor = reagent.core.cursor(codenames.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("words","seed","words/seed",156620856)], null));
codenames.state.controlled_word_cursor = reagent.core.cursor(codenames.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codenames.state","controlled-word","codenames.state/controlled-word",619536658)], null));
codenames.state.word_cursor = (function codenames$state$word_cursor(index){
return reagent.core.cursor(codenames.state.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("words","map","words/map",1526820150),index], null));
});
codenames.state.random_seed = (function codenames$state$random_seed(){
return cljs.core.reset_BANG_(codenames.state.state,codenames.state.new_state.cljs$core$IFn$_invoke$arity$0());
});
codenames.state.set_seed = (function codenames$state$set_seed(seed){
return cljs.core.reset_BANG_(codenames.state.state,codenames.state.new_state.cljs$core$IFn$_invoke$arity$1(seed));
});
codenames.state.set_team = (function codenames$state$set_team(team){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(codenames.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("words","map","words/map",1526820150),cljs.core.deref(codenames.state.controlled_word_cursor),new cljs.core.Keyword("words","team","words/team",1410083788)], null),team);

return cljs.core.reset_BANG_(codenames.state.controlled_word_cursor,null);
});

//# sourceMappingURL=codenames.state.js.map
