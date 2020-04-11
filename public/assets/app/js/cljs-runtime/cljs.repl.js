goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35466){
var map__35467 = p__35466;
var map__35467__$1 = (((((!((map__35467 == null))))?(((((map__35467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35467):map__35467);
var m = map__35467__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35469_35683 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35470_35684 = null;
var count__35471_35685 = (0);
var i__35472_35686 = (0);
while(true){
if((i__35472_35686 < count__35471_35685)){
var f_35687 = chunk__35470_35684.cljs$core$IIndexed$_nth$arity$2(null,i__35472_35686);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35687], 0));


var G__35688 = seq__35469_35683;
var G__35689 = chunk__35470_35684;
var G__35690 = count__35471_35685;
var G__35691 = (i__35472_35686 + (1));
seq__35469_35683 = G__35688;
chunk__35470_35684 = G__35689;
count__35471_35685 = G__35690;
i__35472_35686 = G__35691;
continue;
} else {
var temp__5735__auto___35692 = cljs.core.seq(seq__35469_35683);
if(temp__5735__auto___35692){
var seq__35469_35693__$1 = temp__5735__auto___35692;
if(cljs.core.chunked_seq_QMARK_(seq__35469_35693__$1)){
var c__4609__auto___35694 = cljs.core.chunk_first(seq__35469_35693__$1);
var G__35695 = cljs.core.chunk_rest(seq__35469_35693__$1);
var G__35696 = c__4609__auto___35694;
var G__35697 = cljs.core.count(c__4609__auto___35694);
var G__35698 = (0);
seq__35469_35683 = G__35695;
chunk__35470_35684 = G__35696;
count__35471_35685 = G__35697;
i__35472_35686 = G__35698;
continue;
} else {
var f_35699 = cljs.core.first(seq__35469_35693__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35699], 0));


var G__35700 = cljs.core.next(seq__35469_35693__$1);
var G__35701 = null;
var G__35702 = (0);
var G__35703 = (0);
seq__35469_35683 = G__35700;
chunk__35470_35684 = G__35701;
count__35471_35685 = G__35702;
i__35472_35686 = G__35703;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35705 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35705], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35705)))?cljs.core.second(arglists_35705):arglists_35705)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35474_35706 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35475_35707 = null;
var count__35476_35708 = (0);
var i__35477_35709 = (0);
while(true){
if((i__35477_35709 < count__35476_35708)){
var vec__35490_35710 = chunk__35475_35707.cljs$core$IIndexed$_nth$arity$2(null,i__35477_35709);
var name_35711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490_35710,(0),null);
var map__35493_35712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490_35710,(1),null);
var map__35493_35713__$1 = (((((!((map__35493_35712 == null))))?(((((map__35493_35712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35493_35712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35493_35712):map__35493_35712);
var doc_35714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35493_35713__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35493_35713__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35711], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35715], 0));

if(cljs.core.truth_(doc_35714)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35714], 0));
} else {
}


var G__35716 = seq__35474_35706;
var G__35717 = chunk__35475_35707;
var G__35718 = count__35476_35708;
var G__35719 = (i__35477_35709 + (1));
seq__35474_35706 = G__35716;
chunk__35475_35707 = G__35717;
count__35476_35708 = G__35718;
i__35477_35709 = G__35719;
continue;
} else {
var temp__5735__auto___35720 = cljs.core.seq(seq__35474_35706);
if(temp__5735__auto___35720){
var seq__35474_35721__$1 = temp__5735__auto___35720;
if(cljs.core.chunked_seq_QMARK_(seq__35474_35721__$1)){
var c__4609__auto___35722 = cljs.core.chunk_first(seq__35474_35721__$1);
var G__35723 = cljs.core.chunk_rest(seq__35474_35721__$1);
var G__35724 = c__4609__auto___35722;
var G__35725 = cljs.core.count(c__4609__auto___35722);
var G__35726 = (0);
seq__35474_35706 = G__35723;
chunk__35475_35707 = G__35724;
count__35476_35708 = G__35725;
i__35477_35709 = G__35726;
continue;
} else {
var vec__35496_35727 = cljs.core.first(seq__35474_35721__$1);
var name_35728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35496_35727,(0),null);
var map__35499_35729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35496_35727,(1),null);
var map__35499_35730__$1 = (((((!((map__35499_35729 == null))))?(((((map__35499_35729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35499_35729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35499_35729):map__35499_35729);
var doc_35731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35499_35730__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35499_35730__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35728], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35732], 0));

if(cljs.core.truth_(doc_35731)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35731], 0));
} else {
}


var G__35734 = cljs.core.next(seq__35474_35721__$1);
var G__35735 = null;
var G__35736 = (0);
var G__35737 = (0);
seq__35474_35706 = G__35734;
chunk__35475_35707 = G__35735;
count__35476_35708 = G__35736;
i__35477_35709 = G__35737;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35501 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35502 = null;
var count__35503 = (0);
var i__35504 = (0);
while(true){
if((i__35504 < count__35503)){
var role = chunk__35502.cljs$core$IIndexed$_nth$arity$2(null,i__35504);
var temp__5735__auto___35738__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35738__$1)){
var spec_35739 = temp__5735__auto___35738__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35739)], 0));
} else {
}


var G__35740 = seq__35501;
var G__35741 = chunk__35502;
var G__35742 = count__35503;
var G__35743 = (i__35504 + (1));
seq__35501 = G__35740;
chunk__35502 = G__35741;
count__35503 = G__35742;
i__35504 = G__35743;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35501);
if(temp__5735__auto____$1){
var seq__35501__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35501__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35501__$1);
var G__35744 = cljs.core.chunk_rest(seq__35501__$1);
var G__35745 = c__4609__auto__;
var G__35746 = cljs.core.count(c__4609__auto__);
var G__35747 = (0);
seq__35501 = G__35744;
chunk__35502 = G__35745;
count__35503 = G__35746;
i__35504 = G__35747;
continue;
} else {
var role = cljs.core.first(seq__35501__$1);
var temp__5735__auto___35748__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35748__$2)){
var spec_35749 = temp__5735__auto___35748__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35749)], 0));
} else {
}


var G__35750 = cljs.core.next(seq__35501__$1);
var G__35751 = null;
var G__35752 = (0);
var G__35753 = (0);
seq__35501 = G__35750;
chunk__35502 = G__35751;
count__35503 = G__35752;
i__35504 = G__35753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35754 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35755 = cljs.core.ex_cause(t);
via = G__35754;
t = G__35755;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35603 = datafied_throwable;
var map__35603__$1 = (((((!((map__35603 == null))))?(((((map__35603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35603):map__35603);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35603__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35603__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35603__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35604 = cljs.core.last(via);
var map__35604__$1 = (((((!((map__35604 == null))))?(((((map__35604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35604):map__35604);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35605 = data;
var map__35605__$1 = (((((!((map__35605 == null))))?(((((map__35605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35605):map__35605);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35606 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35606__$1 = (((((!((map__35606 == null))))?(((((map__35606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35606):map__35606);
var top_data = map__35606__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35613 = phase;
var G__35613__$1 = (((G__35613 instanceof cljs.core.Keyword))?G__35613.fqn:null);
switch (G__35613__$1) {
case "read-source":
var map__35614 = data;
var map__35614__$1 = (((((!((map__35614 == null))))?(((((map__35614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35614):map__35614);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35617 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35617);
var G__35617__$2 = (cljs.core.truth_((function (){var fexpr__35618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35618.cljs$core$IFn$_invoke$arity$1 ? fexpr__35618.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35618.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35617__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35617__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35617__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35619 = top_data;
var G__35619__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35619,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35619);
var G__35619__$2 = (cljs.core.truth_((function (){var fexpr__35621 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35621.cljs$core$IFn$_invoke$arity$1 ? fexpr__35621.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35621.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35619__$1);
var G__35619__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35619__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35619__$2);
var G__35619__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35619__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35619__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35619__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35619__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35622 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(3),null);
var G__35625 = top_data;
var G__35625__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35625);
var G__35625__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35625__$1);
var G__35625__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35625__$2);
var G__35625__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35625__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35625__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35625__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35625__$4;
}

break;
case "execution":
var vec__35626 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35601_SHARP_){
var or__4185__auto__ = (p1__35601_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35631 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35631.cljs$core$IFn$_invoke$arity$1 ? fexpr__35631.cljs$core$IFn$_invoke$arity$1(p1__35601_SHARP_) : fexpr__35631.call(null,p1__35601_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35632 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35632__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35632,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35632);
var G__35632__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35632__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35632__$1);
var G__35632__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35632__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35632__$2);
var G__35632__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35632__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35632__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35632__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35632__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35613__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35635){
var map__35636 = p__35635;
var map__35636__$1 = (((((!((map__35636 == null))))?(((((map__35636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35636):map__35636);
var triage_data = map__35636__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35636__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35638 = phase;
var G__35638__$1 = (((G__35638 instanceof cljs.core.Keyword))?G__35638.fqn:null);
switch (G__35638__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35639 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35640 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35641 = loc;
var G__35642 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35643_35765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35644_35766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35645_35767 = true;
var _STAR_print_fn_STAR__temp_val__35646_35768 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35645_35767);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35646_35768);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35633_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35633_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35644_35766);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35643_35765);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35639,G__35640,G__35641,G__35642) : format.call(null,G__35639,G__35640,G__35641,G__35642));

break;
case "macroexpansion":
var G__35651 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35652 = cause_type;
var G__35653 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35654 = loc;
var G__35655 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35651,G__35652,G__35653,G__35654,G__35655) : format.call(null,G__35651,G__35652,G__35653,G__35654,G__35655));

break;
case "compile-syntax-check":
var G__35658 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35659 = cause_type;
var G__35660 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35661 = loc;
var G__35662 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35658,G__35659,G__35660,G__35661,G__35662) : format.call(null,G__35658,G__35659,G__35660,G__35661,G__35662));

break;
case "compilation":
var G__35665 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35666 = cause_type;
var G__35667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35668 = loc;
var G__35669 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35665,G__35666,G__35667,G__35668,G__35669) : format.call(null,G__35665,G__35666,G__35667,G__35668,G__35669));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35670 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35671 = symbol;
var G__35672 = loc;
var G__35673 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35674_35778 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35675_35779 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35676_35780 = true;
var _STAR_print_fn_STAR__temp_val__35677_35781 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35676_35780);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35677_35781);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35634_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35634_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35675_35779);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35674_35778);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35670,G__35671,G__35672,G__35673) : format.call(null,G__35670,G__35671,G__35672,G__35673));
} else {
var G__35678 = "Execution error%s at %s(%s).\n%s\n";
var G__35679 = cause_type;
var G__35680 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35681 = loc;
var G__35682 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35678,G__35679,G__35680,G__35681,G__35682) : format.call(null,G__35678,G__35679,G__35680,G__35681,G__35682));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35638__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
