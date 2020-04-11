goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29697 = arguments.length;
switch (G__29697) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29702 = (function (f,blockable,meta29703){
this.f = f;
this.blockable = blockable;
this.meta29703 = meta29703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29704,meta29703__$1){
var self__ = this;
var _29704__$1 = this;
return (new cljs.core.async.t_cljs$core$async29702(self__.f,self__.blockable,meta29703__$1));
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29704){
var self__ = this;
var _29704__$1 = this;
return self__.meta29703;
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29703","meta29703",1373601453,null)], null);
}));

(cljs.core.async.t_cljs$core$async29702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29702");

(cljs.core.async.t_cljs$core$async29702.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29702.
 */
cljs.core.async.__GT_t_cljs$core$async29702 = (function cljs$core$async$__GT_t_cljs$core$async29702(f__$1,blockable__$1,meta29703){
return (new cljs.core.async.t_cljs$core$async29702(f__$1,blockable__$1,meta29703));
});

}

return (new cljs.core.async.t_cljs$core$async29702(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29729 = arguments.length;
switch (G__29729) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29745 = arguments.length;
switch (G__29745) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29757 = arguments.length;
switch (G__29757) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32130 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32130) : fn1.call(null,val_32130));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32130) : fn1.call(null,val_32130));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29774 = arguments.length;
switch (G__29774) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32159 = n;
var x_32160 = (0);
while(true){
if((x_32160 < n__4666__auto___32159)){
(a[x_32160] = x_32160);

var G__32165 = (x_32160 + (1));
x_32160 = G__32165;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29788 = (function (flag,meta29789){
this.flag = flag;
this.meta29789 = meta29789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29790,meta29789__$1){
var self__ = this;
var _29790__$1 = this;
return (new cljs.core.async.t_cljs$core$async29788(self__.flag,meta29789__$1));
}));

(cljs.core.async.t_cljs$core$async29788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29790){
var self__ = this;
var _29790__$1 = this;
return self__.meta29789;
}));

(cljs.core.async.t_cljs$core$async29788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29789","meta29789",-1372271036,null)], null);
}));

(cljs.core.async.t_cljs$core$async29788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29788");

(cljs.core.async.t_cljs$core$async29788.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29788.
 */
cljs.core.async.__GT_t_cljs$core$async29788 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29788(flag__$1,meta29789){
return (new cljs.core.async.t_cljs$core$async29788(flag__$1,meta29789));
});

}

return (new cljs.core.async.t_cljs$core$async29788(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29804 = (function (flag,cb,meta29805){
this.flag = flag;
this.cb = cb;
this.meta29805 = meta29805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29806,meta29805__$1){
var self__ = this;
var _29806__$1 = this;
return (new cljs.core.async.t_cljs$core$async29804(self__.flag,self__.cb,meta29805__$1));
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29806){
var self__ = this;
var _29806__$1 = this;
return self__.meta29805;
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29805","meta29805",1116717228,null)], null);
}));

(cljs.core.async.t_cljs$core$async29804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29804");

(cljs.core.async.t_cljs$core$async29804.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29804.
 */
cljs.core.async.__GT_t_cljs$core$async29804 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29804(flag__$1,cb__$1,meta29805){
return (new cljs.core.async.t_cljs$core$async29804(flag__$1,cb__$1,meta29805));
});

}

return (new cljs.core.async.t_cljs$core$async29804(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29817_SHARP_){
var G__29823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29817_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29823) : fret.call(null,G__29823));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29820_SHARP_){
var G__29824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29820_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29824) : fret.call(null,G__29824));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32219 = (i + (1));
i = G__32219;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32230 = arguments.length;
var i__4790__auto___32231 = (0);
while(true){
if((i__4790__auto___32231 < len__4789__auto___32230)){
args__4795__auto__.push((arguments[i__4790__auto___32231]));

var G__32232 = (i__4790__auto___32231 + (1));
i__4790__auto___32231 = G__32232;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29836){
var map__29837 = p__29836;
var map__29837__$1 = (((((!((map__29837 == null))))?(((((map__29837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29837):map__29837);
var opts = map__29837__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29827){
var G__29828 = cljs.core.first(seq29827);
var seq29827__$1 = cljs.core.next(seq29827);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29828,seq29827__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29853 = arguments.length;
switch (G__29853) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29557__auto___32262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (7))){
var inst_29897 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29908_32266 = state_29902__$1;
(statearr_29908_32266[(2)] = inst_29897);

(statearr_29908_32266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (1))){
var state_29902__$1 = state_29902;
var statearr_29909_32267 = state_29902__$1;
(statearr_29909_32267[(2)] = null);

(statearr_29909_32267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (4))){
var inst_29879 = (state_29902[(7)]);
var inst_29879__$1 = (state_29902[(2)]);
var inst_29881 = (inst_29879__$1 == null);
var state_29902__$1 = (function (){var statearr_29910 = state_29902;
(statearr_29910[(7)] = inst_29879__$1);

return statearr_29910;
})();
if(cljs.core.truth_(inst_29881)){
var statearr_29911_32269 = state_29902__$1;
(statearr_29911_32269[(1)] = (5));

} else {
var statearr_29912_32271 = state_29902__$1;
(statearr_29912_32271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (13))){
var state_29902__$1 = state_29902;
var statearr_29913_32273 = state_29902__$1;
(statearr_29913_32273[(2)] = null);

(statearr_29913_32273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (6))){
var inst_29879 = (state_29902[(7)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29902__$1,(11),to,inst_29879);
} else {
if((state_val_29903 === (3))){
var inst_29899 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29902__$1,inst_29899);
} else {
if((state_val_29903 === (12))){
var state_29902__$1 = state_29902;
var statearr_29915_32280 = state_29902__$1;
(statearr_29915_32280[(2)] = null);

(statearr_29915_32280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (2))){
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29902__$1,(4),from);
} else {
if((state_val_29903 === (11))){
var inst_29890 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
if(cljs.core.truth_(inst_29890)){
var statearr_29916_32283 = state_29902__$1;
(statearr_29916_32283[(1)] = (12));

} else {
var statearr_29917_32284 = state_29902__$1;
(statearr_29917_32284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (9))){
var state_29902__$1 = state_29902;
var statearr_29918_32289 = state_29902__$1;
(statearr_29918_32289[(2)] = null);

(statearr_29918_32289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (5))){
var state_29902__$1 = state_29902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29920_32290 = state_29902__$1;
(statearr_29920_32290[(1)] = (8));

} else {
var statearr_29921_32291 = state_29902__$1;
(statearr_29921_32291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (14))){
var inst_29895 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29922_32293 = state_29902__$1;
(statearr_29922_32293[(2)] = inst_29895);

(statearr_29922_32293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (10))){
var inst_29887 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29926_32296 = state_29902__$1;
(statearr_29926_32296[(2)] = inst_29887);

(statearr_29926_32296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29903 === (8))){
var inst_29884 = cljs.core.async.close_BANG_(to);
var state_29902__$1 = state_29902;
var statearr_29927_32298 = state_29902__$1;
(statearr_29927_32298[(2)] = inst_29884);

(statearr_29927_32298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_29931 = [null,null,null,null,null,null,null,null];
(statearr_29931[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_29931[(1)] = (1));

return statearr_29931;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_29902){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_29902);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29933){if((e29933 instanceof Object)){
var ex__29274__auto__ = e29933;
var statearr_29934_32301 = state_29902;
(statearr_29934_32301[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32302 = state_29902;
state_29902 = G__32302;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_29943 = f__29558__auto__();
(statearr_29943[(6)] = c__29557__auto___32262);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29949){
var vec__29951 = p__29949;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29951,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29951,(1),null);
var job = vec__29951;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29557__auto___32309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_29960){
var state_val_29961 = (state_29960[(1)]);
if((state_val_29961 === (1))){
var state_29960__$1 = state_29960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29960__$1,(2),res,v);
} else {
if((state_val_29961 === (2))){
var inst_29956 = (state_29960[(2)]);
var inst_29958 = cljs.core.async.close_BANG_(res);
var state_29960__$1 = (function (){var statearr_29964 = state_29960;
(statearr_29964[(7)] = inst_29956);

return statearr_29964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29960__$1,inst_29958);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_29966 = [null,null,null,null,null,null,null,null];
(statearr_29966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_29966[(1)] = (1));

return statearr_29966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29960){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_29960);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e29970){if((e29970 instanceof Object)){
var ex__29274__auto__ = e29970;
var statearr_29971_32313 = state_29960;
(statearr_29971_32313[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32314 = state_29960;
state_29960 = G__32314;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_29972 = f__29558__auto__();
(statearr_29972[(6)] = c__29557__auto___32309);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29975){
var vec__29976 = p__29975;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29976,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29976,(1),null);
var job = vec__29976;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32316 = n;
var __32317 = (0);
while(true){
if((__32317 < n__4666__auto___32316)){
var G__29983_32318 = type;
var G__29983_32319__$1 = (((G__29983_32318 instanceof cljs.core.Keyword))?G__29983_32318.fqn:null);
switch (G__29983_32319__$1) {
case "compute":
var c__29557__auto___32323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32317,c__29557__auto___32323,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async){
return (function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = ((function (__32317,c__29557__auto___32323,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async){
return (function (state_29999){
var state_val_30000 = (state_29999[(1)]);
if((state_val_30000 === (1))){
var state_29999__$1 = state_29999;
var statearr_30003_32325 = state_29999__$1;
(statearr_30003_32325[(2)] = null);

(statearr_30003_32325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (2))){
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29999__$1,(4),jobs);
} else {
if((state_val_30000 === (3))){
var inst_29996 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29999__$1,inst_29996);
} else {
if((state_val_30000 === (4))){
var inst_29988 = (state_29999[(2)]);
var inst_29989 = process(inst_29988);
var state_29999__$1 = state_29999;
if(cljs.core.truth_(inst_29989)){
var statearr_30005_32326 = state_29999__$1;
(statearr_30005_32326[(1)] = (5));

} else {
var statearr_30006_32328 = state_29999__$1;
(statearr_30006_32328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (5))){
var state_29999__$1 = state_29999;
var statearr_30007_32330 = state_29999__$1;
(statearr_30007_32330[(2)] = null);

(statearr_30007_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (6))){
var state_29999__$1 = state_29999;
var statearr_30008_32334 = state_29999__$1;
(statearr_30008_32334[(2)] = null);

(statearr_30008_32334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (7))){
var inst_29994 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
var statearr_30009_32335 = state_29999__$1;
(statearr_30009_32335[(2)] = inst_29994);

(statearr_30009_32335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32317,c__29557__auto___32323,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async))
;
return ((function (__32317,switch__29270__auto__,c__29557__auto___32323,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_30013 = [null,null,null,null,null,null,null];
(statearr_30013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_30013[(1)] = (1));

return statearr_30013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_29999){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_29999);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30014){if((e30014 instanceof Object)){
var ex__29274__auto__ = e30014;
var statearr_30016_32338 = state_29999;
(statearr_30016_32338[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32343 = state_29999;
state_29999 = G__32343;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_29999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_29999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(__32317,switch__29270__auto__,c__29557__auto___32323,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async))
})();
var state__29559__auto__ = (function (){var statearr_30018 = f__29558__auto__();
(statearr_30018[(6)] = c__29557__auto___32323);

return statearr_30018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
});})(__32317,c__29557__auto___32323,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async))
);


break;
case "async":
var c__29557__auto___32348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32317,c__29557__auto___32348,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async){
return (function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = ((function (__32317,c__29557__auto___32348,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async){
return (function (state_30038){
var state_val_30039 = (state_30038[(1)]);
if((state_val_30039 === (1))){
var state_30038__$1 = state_30038;
var statearr_30040_32354 = state_30038__$1;
(statearr_30040_32354[(2)] = null);

(statearr_30040_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (2))){
var state_30038__$1 = state_30038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30038__$1,(4),jobs);
} else {
if((state_val_30039 === (3))){
var inst_30034 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30038__$1,inst_30034);
} else {
if((state_val_30039 === (4))){
var inst_30022 = (state_30038[(2)]);
var inst_30025 = async(inst_30022);
var state_30038__$1 = state_30038;
if(cljs.core.truth_(inst_30025)){
var statearr_30042_32357 = state_30038__$1;
(statearr_30042_32357[(1)] = (5));

} else {
var statearr_30044_32358 = state_30038__$1;
(statearr_30044_32358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (5))){
var state_30038__$1 = state_30038;
var statearr_30045_32359 = state_30038__$1;
(statearr_30045_32359[(2)] = null);

(statearr_30045_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (6))){
var state_30038__$1 = state_30038;
var statearr_30048_32360 = state_30038__$1;
(statearr_30048_32360[(2)] = null);

(statearr_30048_32360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30039 === (7))){
var inst_30031 = (state_30038[(2)]);
var state_30038__$1 = state_30038;
var statearr_30050_32361 = state_30038__$1;
(statearr_30050_32361[(2)] = inst_30031);

(statearr_30050_32361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32317,c__29557__auto___32348,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async))
;
return ((function (__32317,switch__29270__auto__,c__29557__auto___32348,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_30051 = [null,null,null,null,null,null,null];
(statearr_30051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_30051[(1)] = (1));

return statearr_30051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_30038){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30038);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30056){if((e30056 instanceof Object)){
var ex__29274__auto__ = e30056;
var statearr_30057_32366 = state_30038;
(statearr_30057_32366[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32367 = state_30038;
state_30038 = G__32367;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_30038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_30038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
;})(__32317,switch__29270__auto__,c__29557__auto___32348,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async))
})();
var state__29559__auto__ = (function (){var statearr_30060 = f__29558__auto__();
(statearr_30060[(6)] = c__29557__auto___32348);

return statearr_30060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
});})(__32317,c__29557__auto___32348,G__29983_32318,G__29983_32319__$1,n__4666__auto___32316,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29983_32319__$1)].join('')));

}

var G__32368 = (__32317 + (1));
__32317 = G__32368;
continue;
} else {
}
break;
}

var c__29557__auto___32369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30090){
var state_val_30091 = (state_30090[(1)]);
if((state_val_30091 === (7))){
var inst_30086 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30092_32370 = state_30090__$1;
(statearr_30092_32370[(2)] = inst_30086);

(statearr_30092_32370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (1))){
var state_30090__$1 = state_30090;
var statearr_30096_32371 = state_30090__$1;
(statearr_30096_32371[(2)] = null);

(statearr_30096_32371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (4))){
var inst_30067 = (state_30090[(7)]);
var inst_30067__$1 = (state_30090[(2)]);
var inst_30068 = (inst_30067__$1 == null);
var state_30090__$1 = (function (){var statearr_30098 = state_30090;
(statearr_30098[(7)] = inst_30067__$1);

return statearr_30098;
})();
if(cljs.core.truth_(inst_30068)){
var statearr_30099_32375 = state_30090__$1;
(statearr_30099_32375[(1)] = (5));

} else {
var statearr_30100_32376 = state_30090__$1;
(statearr_30100_32376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (6))){
var inst_30067 = (state_30090[(7)]);
var inst_30075 = (state_30090[(8)]);
var inst_30075__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30078 = [inst_30067,inst_30075__$1];
var inst_30079 = (new cljs.core.PersistentVector(null,2,(5),inst_30077,inst_30078,null));
var state_30090__$1 = (function (){var statearr_30101 = state_30090;
(statearr_30101[(8)] = inst_30075__$1);

return statearr_30101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30090__$1,(8),jobs,inst_30079);
} else {
if((state_val_30091 === (3))){
var inst_30088 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30090__$1,inst_30088);
} else {
if((state_val_30091 === (2))){
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30090__$1,(4),from);
} else {
if((state_val_30091 === (9))){
var inst_30083 = (state_30090[(2)]);
var state_30090__$1 = (function (){var statearr_30102 = state_30090;
(statearr_30102[(9)] = inst_30083);

return statearr_30102;
})();
var statearr_30105_32378 = state_30090__$1;
(statearr_30105_32378[(2)] = null);

(statearr_30105_32378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (5))){
var inst_30071 = cljs.core.async.close_BANG_(jobs);
var state_30090__$1 = state_30090;
var statearr_30107_32379 = state_30090__$1;
(statearr_30107_32379[(2)] = inst_30071);

(statearr_30107_32379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (8))){
var inst_30075 = (state_30090[(8)]);
var inst_30081 = (state_30090[(2)]);
var state_30090__$1 = (function (){var statearr_30108 = state_30090;
(statearr_30108[(10)] = inst_30081);

return statearr_30108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30090__$1,(9),results,inst_30075);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_30114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_30114[(1)] = (1));

return statearr_30114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_30090){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30090);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30115){if((e30115 instanceof Object)){
var ex__29274__auto__ = e30115;
var statearr_30116_32381 = state_30090;
(statearr_30116_32381[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32383 = state_30090;
state_30090 = G__32383;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30117 = f__29558__auto__();
(statearr_30117[(6)] = c__29557__auto___32369);

return statearr_30117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


var c__29557__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30158){
var state_val_30159 = (state_30158[(1)]);
if((state_val_30159 === (7))){
var inst_30154 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30167_32388 = state_30158__$1;
(statearr_30167_32388[(2)] = inst_30154);

(statearr_30167_32388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (20))){
var state_30158__$1 = state_30158;
var statearr_30170_32389 = state_30158__$1;
(statearr_30170_32389[(2)] = null);

(statearr_30170_32389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (1))){
var state_30158__$1 = state_30158;
var statearr_30171_32390 = state_30158__$1;
(statearr_30171_32390[(2)] = null);

(statearr_30171_32390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (4))){
var inst_30120 = (state_30158[(7)]);
var inst_30120__$1 = (state_30158[(2)]);
var inst_30121 = (inst_30120__$1 == null);
var state_30158__$1 = (function (){var statearr_30173 = state_30158;
(statearr_30173[(7)] = inst_30120__$1);

return statearr_30173;
})();
if(cljs.core.truth_(inst_30121)){
var statearr_30177_32392 = state_30158__$1;
(statearr_30177_32392[(1)] = (5));

} else {
var statearr_30178_32393 = state_30158__$1;
(statearr_30178_32393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (15))){
var inst_30136 = (state_30158[(8)]);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30158__$1,(18),to,inst_30136);
} else {
if((state_val_30159 === (21))){
var inst_30149 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30180_32397 = state_30158__$1;
(statearr_30180_32397[(2)] = inst_30149);

(statearr_30180_32397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (13))){
var inst_30151 = (state_30158[(2)]);
var state_30158__$1 = (function (){var statearr_30185 = state_30158;
(statearr_30185[(9)] = inst_30151);

return statearr_30185;
})();
var statearr_30186_32399 = state_30158__$1;
(statearr_30186_32399[(2)] = null);

(statearr_30186_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (6))){
var inst_30120 = (state_30158[(7)]);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30158__$1,(11),inst_30120);
} else {
if((state_val_30159 === (17))){
var inst_30144 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
if(cljs.core.truth_(inst_30144)){
var statearr_30187_32400 = state_30158__$1;
(statearr_30187_32400[(1)] = (19));

} else {
var statearr_30190_32401 = state_30158__$1;
(statearr_30190_32401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (3))){
var inst_30156 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30158__$1,inst_30156);
} else {
if((state_val_30159 === (12))){
var inst_30130 = (state_30158[(10)]);
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30158__$1,(14),inst_30130);
} else {
if((state_val_30159 === (2))){
var state_30158__$1 = state_30158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30158__$1,(4),results);
} else {
if((state_val_30159 === (19))){
var state_30158__$1 = state_30158;
var statearr_30197_32405 = state_30158__$1;
(statearr_30197_32405[(2)] = null);

(statearr_30197_32405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (11))){
var inst_30130 = (state_30158[(2)]);
var state_30158__$1 = (function (){var statearr_30198 = state_30158;
(statearr_30198[(10)] = inst_30130);

return statearr_30198;
})();
var statearr_30199_32408 = state_30158__$1;
(statearr_30199_32408[(2)] = null);

(statearr_30199_32408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (9))){
var state_30158__$1 = state_30158;
var statearr_30200_32411 = state_30158__$1;
(statearr_30200_32411[(2)] = null);

(statearr_30200_32411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (5))){
var state_30158__$1 = state_30158;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30204_32413 = state_30158__$1;
(statearr_30204_32413[(1)] = (8));

} else {
var statearr_30205_32414 = state_30158__$1;
(statearr_30205_32414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (14))){
var inst_30136 = (state_30158[(8)]);
var inst_30136__$1 = (state_30158[(2)]);
var inst_30137 = (inst_30136__$1 == null);
var inst_30138 = cljs.core.not(inst_30137);
var state_30158__$1 = (function (){var statearr_30207 = state_30158;
(statearr_30207[(8)] = inst_30136__$1);

return statearr_30207;
})();
if(inst_30138){
var statearr_30208_32415 = state_30158__$1;
(statearr_30208_32415[(1)] = (15));

} else {
var statearr_30209_32416 = state_30158__$1;
(statearr_30209_32416[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (16))){
var state_30158__$1 = state_30158;
var statearr_30210_32417 = state_30158__$1;
(statearr_30210_32417[(2)] = false);

(statearr_30210_32417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (10))){
var inst_30127 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30211_32419 = state_30158__$1;
(statearr_30211_32419[(2)] = inst_30127);

(statearr_30211_32419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (18))){
var inst_30141 = (state_30158[(2)]);
var state_30158__$1 = state_30158;
var statearr_30213_32424 = state_30158__$1;
(statearr_30213_32424[(2)] = inst_30141);

(statearr_30213_32424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30159 === (8))){
var inst_30124 = cljs.core.async.close_BANG_(to);
var state_30158__$1 = state_30158;
var statearr_30215_32430 = state_30158__$1;
(statearr_30215_32430[(2)] = inst_30124);

(statearr_30215_32430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_30218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__);

(statearr_30218[(1)] = (1));

return statearr_30218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1 = (function (state_30158){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30158);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30219){if((e30219 instanceof Object)){
var ex__29274__auto__ = e30219;
var statearr_30220_32437 = state_30158;
(statearr_30220_32437[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32438 = state_30158;
state_30158 = G__32438;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__ = function(state_30158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1.call(this,state_30158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30224 = f__29558__auto__();
(statearr_30224[(6)] = c__29557__auto__);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));

return c__29557__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30226 = arguments.length;
switch (G__30226) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30234 = arguments.length;
switch (G__30234) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30240 = arguments.length;
switch (G__30240) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29557__auto___32468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30279){
var state_val_30280 = (state_30279[(1)]);
if((state_val_30280 === (7))){
var inst_30272 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
var statearr_30287_32473 = state_30279__$1;
(statearr_30287_32473[(2)] = inst_30272);

(statearr_30287_32473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (1))){
var state_30279__$1 = state_30279;
var statearr_30288_32475 = state_30279__$1;
(statearr_30288_32475[(2)] = null);

(statearr_30288_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (4))){
var inst_30253 = (state_30279[(7)]);
var inst_30253__$1 = (state_30279[(2)]);
var inst_30254 = (inst_30253__$1 == null);
var state_30279__$1 = (function (){var statearr_30289 = state_30279;
(statearr_30289[(7)] = inst_30253__$1);

return statearr_30289;
})();
if(cljs.core.truth_(inst_30254)){
var statearr_30290_32478 = state_30279__$1;
(statearr_30290_32478[(1)] = (5));

} else {
var statearr_30291_32479 = state_30279__$1;
(statearr_30291_32479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (13))){
var state_30279__$1 = state_30279;
var statearr_30292_32481 = state_30279__$1;
(statearr_30292_32481[(2)] = null);

(statearr_30292_32481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (6))){
var inst_30253 = (state_30279[(7)]);
var inst_30259 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30253) : p.call(null,inst_30253));
var state_30279__$1 = state_30279;
if(cljs.core.truth_(inst_30259)){
var statearr_30294_32483 = state_30279__$1;
(statearr_30294_32483[(1)] = (9));

} else {
var statearr_30295_32484 = state_30279__$1;
(statearr_30295_32484[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (3))){
var inst_30274 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30279__$1,inst_30274);
} else {
if((state_val_30280 === (12))){
var state_30279__$1 = state_30279;
var statearr_30296_32486 = state_30279__$1;
(statearr_30296_32486[(2)] = null);

(statearr_30296_32486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (2))){
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30279__$1,(4),ch);
} else {
if((state_val_30280 === (11))){
var inst_30253 = (state_30279[(7)]);
var inst_30263 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30279__$1,(8),inst_30263,inst_30253);
} else {
if((state_val_30280 === (9))){
var state_30279__$1 = state_30279;
var statearr_30297_32490 = state_30279__$1;
(statearr_30297_32490[(2)] = tc);

(statearr_30297_32490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (5))){
var inst_30256 = cljs.core.async.close_BANG_(tc);
var inst_30257 = cljs.core.async.close_BANG_(fc);
var state_30279__$1 = (function (){var statearr_30298 = state_30279;
(statearr_30298[(8)] = inst_30256);

return statearr_30298;
})();
var statearr_30299_32491 = state_30279__$1;
(statearr_30299_32491[(2)] = inst_30257);

(statearr_30299_32491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (14))){
var inst_30270 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
var statearr_30300_32492 = state_30279__$1;
(statearr_30300_32492[(2)] = inst_30270);

(statearr_30300_32492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (10))){
var state_30279__$1 = state_30279;
var statearr_30301_32493 = state_30279__$1;
(statearr_30301_32493[(2)] = fc);

(statearr_30301_32493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (8))){
var inst_30265 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
if(cljs.core.truth_(inst_30265)){
var statearr_30302_32494 = state_30279__$1;
(statearr_30302_32494[(1)] = (12));

} else {
var statearr_30303_32495 = state_30279__$1;
(statearr_30303_32495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_30279){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30279);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__29274__auto__ = e30305;
var statearr_30309_32496 = state_30279;
(statearr_30309_32496[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32497 = state_30279;
state_30279 = G__32497;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_30279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_30279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30313 = f__29558__auto__();
(statearr_30313[(6)] = c__29557__auto___32468);

return statearr_30313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29557__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (7))){
var inst_30333 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30340_32498 = state_30338__$1;
(statearr_30340_32498[(2)] = inst_30333);

(statearr_30340_32498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (1))){
var inst_30315 = init;
var state_30338__$1 = (function (){var statearr_30341 = state_30338;
(statearr_30341[(7)] = inst_30315);

return statearr_30341;
})();
var statearr_30342_32499 = state_30338__$1;
(statearr_30342_32499[(2)] = null);

(statearr_30342_32499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (4))){
var inst_30318 = (state_30338[(8)]);
var inst_30318__$1 = (state_30338[(2)]);
var inst_30319 = (inst_30318__$1 == null);
var state_30338__$1 = (function (){var statearr_30343 = state_30338;
(statearr_30343[(8)] = inst_30318__$1);

return statearr_30343;
})();
if(cljs.core.truth_(inst_30319)){
var statearr_30344_32504 = state_30338__$1;
(statearr_30344_32504[(1)] = (5));

} else {
var statearr_30345_32507 = state_30338__$1;
(statearr_30345_32507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (6))){
var inst_30323 = (state_30338[(9)]);
var inst_30318 = (state_30338[(8)]);
var inst_30315 = (state_30338[(7)]);
var inst_30323__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30315,inst_30318) : f.call(null,inst_30315,inst_30318));
var inst_30324 = cljs.core.reduced_QMARK_(inst_30323__$1);
var state_30338__$1 = (function (){var statearr_30347 = state_30338;
(statearr_30347[(9)] = inst_30323__$1);

return statearr_30347;
})();
if(inst_30324){
var statearr_30348_32518 = state_30338__$1;
(statearr_30348_32518[(1)] = (8));

} else {
var statearr_30349_32519 = state_30338__$1;
(statearr_30349_32519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (3))){
var inst_30335 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30338__$1,inst_30335);
} else {
if((state_val_30339 === (2))){
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30338__$1,(4),ch);
} else {
if((state_val_30339 === (9))){
var inst_30323 = (state_30338[(9)]);
var inst_30315 = inst_30323;
var state_30338__$1 = (function (){var statearr_30352 = state_30338;
(statearr_30352[(7)] = inst_30315);

return statearr_30352;
})();
var statearr_30353_32523 = state_30338__$1;
(statearr_30353_32523[(2)] = null);

(statearr_30353_32523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (5))){
var inst_30315 = (state_30338[(7)]);
var state_30338__$1 = state_30338;
var statearr_30354_32527 = state_30338__$1;
(statearr_30354_32527[(2)] = inst_30315);

(statearr_30354_32527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (10))){
var inst_30331 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30355_32528 = state_30338__$1;
(statearr_30355_32528[(2)] = inst_30331);

(statearr_30355_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (8))){
var inst_30323 = (state_30338[(9)]);
var inst_30327 = cljs.core.deref(inst_30323);
var state_30338__$1 = state_30338;
var statearr_30356_32533 = state_30338__$1;
(statearr_30356_32533[(2)] = inst_30327);

(statearr_30356_32533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29271__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29271__auto____0 = (function (){
var statearr_30357 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30357[(0)] = cljs$core$async$reduce_$_state_machine__29271__auto__);

(statearr_30357[(1)] = (1));

return statearr_30357;
});
var cljs$core$async$reduce_$_state_machine__29271__auto____1 = (function (state_30338){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30338);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30358){if((e30358 instanceof Object)){
var ex__29274__auto__ = e30358;
var statearr_30359_32542 = state_30338;
(statearr_30359_32542[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32543 = state_30338;
state_30338 = G__32543;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29271__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29271__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29271__auto____0;
cljs$core$async$reduce_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29271__auto____1;
return cljs$core$async$reduce_$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30360 = f__29558__auto__();
(statearr_30360[(6)] = c__29557__auto__);

return statearr_30360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));

return c__29557__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29557__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30366){
var state_val_30367 = (state_30366[(1)]);
if((state_val_30367 === (1))){
var inst_30361 = cljs.core.async.reduce(f__$1,init,ch);
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30366__$1,(2),inst_30361);
} else {
if((state_val_30367 === (2))){
var inst_30363 = (state_30366[(2)]);
var inst_30364 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30363) : f__$1.call(null,inst_30363));
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30366__$1,inst_30364);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29271__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29271__auto____0 = (function (){
var statearr_30368 = [null,null,null,null,null,null,null];
(statearr_30368[(0)] = cljs$core$async$transduce_$_state_machine__29271__auto__);

(statearr_30368[(1)] = (1));

return statearr_30368;
});
var cljs$core$async$transduce_$_state_machine__29271__auto____1 = (function (state_30366){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30366);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30369){if((e30369 instanceof Object)){
var ex__29274__auto__ = e30369;
var statearr_30370_32558 = state_30366;
(statearr_30370_32558[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32563 = state_30366;
state_30366 = G__32563;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29271__auto__ = function(state_30366){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29271__auto____1.call(this,state_30366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29271__auto____0;
cljs$core$async$transduce_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29271__auto____1;
return cljs$core$async$transduce_$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30376 = f__29558__auto__();
(statearr_30376[(6)] = c__29557__auto__);

return statearr_30376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));

return c__29557__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30379 = arguments.length;
switch (G__30379) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29557__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30404){
var state_val_30405 = (state_30404[(1)]);
if((state_val_30405 === (7))){
var inst_30386 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
var statearr_30408_32571 = state_30404__$1;
(statearr_30408_32571[(2)] = inst_30386);

(statearr_30408_32571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (1))){
var inst_30380 = cljs.core.seq(coll);
var inst_30381 = inst_30380;
var state_30404__$1 = (function (){var statearr_30410 = state_30404;
(statearr_30410[(7)] = inst_30381);

return statearr_30410;
})();
var statearr_30411_32572 = state_30404__$1;
(statearr_30411_32572[(2)] = null);

(statearr_30411_32572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (4))){
var inst_30381 = (state_30404[(7)]);
var inst_30384 = cljs.core.first(inst_30381);
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30404__$1,(7),ch,inst_30384);
} else {
if((state_val_30405 === (13))){
var inst_30398 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
var statearr_30413_32574 = state_30404__$1;
(statearr_30413_32574[(2)] = inst_30398);

(statearr_30413_32574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (6))){
var inst_30389 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
if(cljs.core.truth_(inst_30389)){
var statearr_30416_32575 = state_30404__$1;
(statearr_30416_32575[(1)] = (8));

} else {
var statearr_30417_32576 = state_30404__$1;
(statearr_30417_32576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (3))){
var inst_30402 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30404__$1,inst_30402);
} else {
if((state_val_30405 === (12))){
var state_30404__$1 = state_30404;
var statearr_30418_32583 = state_30404__$1;
(statearr_30418_32583[(2)] = null);

(statearr_30418_32583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (2))){
var inst_30381 = (state_30404[(7)]);
var state_30404__$1 = state_30404;
if(cljs.core.truth_(inst_30381)){
var statearr_30421_32584 = state_30404__$1;
(statearr_30421_32584[(1)] = (4));

} else {
var statearr_30422_32585 = state_30404__$1;
(statearr_30422_32585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (11))){
var inst_30395 = cljs.core.async.close_BANG_(ch);
var state_30404__$1 = state_30404;
var statearr_30426_32586 = state_30404__$1;
(statearr_30426_32586[(2)] = inst_30395);

(statearr_30426_32586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (9))){
var state_30404__$1 = state_30404;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30427_32587 = state_30404__$1;
(statearr_30427_32587[(1)] = (11));

} else {
var statearr_30428_32588 = state_30404__$1;
(statearr_30428_32588[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (5))){
var inst_30381 = (state_30404[(7)]);
var state_30404__$1 = state_30404;
var statearr_30429_32589 = state_30404__$1;
(statearr_30429_32589[(2)] = inst_30381);

(statearr_30429_32589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (10))){
var inst_30400 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
var statearr_30430_32594 = state_30404__$1;
(statearr_30430_32594[(2)] = inst_30400);

(statearr_30430_32594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (8))){
var inst_30381 = (state_30404[(7)]);
var inst_30391 = cljs.core.next(inst_30381);
var inst_30381__$1 = inst_30391;
var state_30404__$1 = (function (){var statearr_30431 = state_30404;
(statearr_30431[(7)] = inst_30381__$1);

return statearr_30431;
})();
var statearr_30432_32599 = state_30404__$1;
(statearr_30432_32599[(2)] = null);

(statearr_30432_32599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_30434 = [null,null,null,null,null,null,null,null];
(statearr_30434[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_30434[(1)] = (1));

return statearr_30434;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_30404){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30404);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30435){if((e30435 instanceof Object)){
var ex__29274__auto__ = e30435;
var statearr_30436_32610 = state_30404;
(statearr_30436_32610[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32611 = state_30404;
state_30404 = G__32611;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_30404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_30404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30437 = f__29558__auto__();
(statearr_30437[(6)] = c__29557__auto__);

return statearr_30437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));

return c__29557__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30440 = (function (ch,cs,meta30441){
this.ch = ch;
this.cs = cs;
this.meta30441 = meta30441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30442,meta30441__$1){
var self__ = this;
var _30442__$1 = this;
return (new cljs.core.async.t_cljs$core$async30440(self__.ch,self__.cs,meta30441__$1));
}));

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30442){
var self__ = this;
var _30442__$1 = this;
return self__.meta30441;
}));

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30440.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30441","meta30441",-1013919353,null)], null);
}));

(cljs.core.async.t_cljs$core$async30440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30440");

(cljs.core.async.t_cljs$core$async30440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30440.
 */
cljs.core.async.__GT_t_cljs$core$async30440 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30440(ch__$1,cs__$1,meta30441){
return (new cljs.core.async.t_cljs$core$async30440(ch__$1,cs__$1,meta30441));
});

}

return (new cljs.core.async.t_cljs$core$async30440(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29557__auto___32639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30614){
var state_val_30615 = (state_30614[(1)]);
if((state_val_30615 === (7))){
var inst_30610 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30618_32640 = state_30614__$1;
(statearr_30618_32640[(2)] = inst_30610);

(statearr_30618_32640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (20))){
var inst_30501 = (state_30614[(7)]);
var inst_30518 = cljs.core.first(inst_30501);
var inst_30520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30518,(0),null);
var inst_30521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30518,(1),null);
var state_30614__$1 = (function (){var statearr_30619 = state_30614;
(statearr_30619[(8)] = inst_30520);

return statearr_30619;
})();
if(cljs.core.truth_(inst_30521)){
var statearr_30621_32644 = state_30614__$1;
(statearr_30621_32644[(1)] = (22));

} else {
var statearr_30624_32645 = state_30614__$1;
(statearr_30624_32645[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (27))){
var inst_30563 = (state_30614[(9)]);
var inst_30555 = (state_30614[(10)]);
var inst_30463 = (state_30614[(11)]);
var inst_30557 = (state_30614[(12)]);
var inst_30563__$1 = cljs.core._nth(inst_30555,inst_30557);
var inst_30565 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30563__$1,inst_30463,done);
var state_30614__$1 = (function (){var statearr_30627 = state_30614;
(statearr_30627[(9)] = inst_30563__$1);

return statearr_30627;
})();
if(cljs.core.truth_(inst_30565)){
var statearr_30628_32651 = state_30614__$1;
(statearr_30628_32651[(1)] = (30));

} else {
var statearr_30629_32652 = state_30614__$1;
(statearr_30629_32652[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (1))){
var state_30614__$1 = state_30614;
var statearr_30634_32653 = state_30614__$1;
(statearr_30634_32653[(2)] = null);

(statearr_30634_32653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (24))){
var inst_30501 = (state_30614[(7)]);
var inst_30527 = (state_30614[(2)]);
var inst_30528 = cljs.core.next(inst_30501);
var inst_30473 = inst_30528;
var inst_30474 = null;
var inst_30475 = (0);
var inst_30476 = (0);
var state_30614__$1 = (function (){var statearr_30639 = state_30614;
(statearr_30639[(13)] = inst_30473);

(statearr_30639[(14)] = inst_30527);

(statearr_30639[(15)] = inst_30476);

(statearr_30639[(16)] = inst_30474);

(statearr_30639[(17)] = inst_30475);

return statearr_30639;
})();
var statearr_30642_32654 = state_30614__$1;
(statearr_30642_32654[(2)] = null);

(statearr_30642_32654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (39))){
var state_30614__$1 = state_30614;
var statearr_30647_32658 = state_30614__$1;
(statearr_30647_32658[(2)] = null);

(statearr_30647_32658[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (4))){
var inst_30463 = (state_30614[(11)]);
var inst_30463__$1 = (state_30614[(2)]);
var inst_30464 = (inst_30463__$1 == null);
var state_30614__$1 = (function (){var statearr_30652 = state_30614;
(statearr_30652[(11)] = inst_30463__$1);

return statearr_30652;
})();
if(cljs.core.truth_(inst_30464)){
var statearr_30653_32662 = state_30614__$1;
(statearr_30653_32662[(1)] = (5));

} else {
var statearr_30654_32663 = state_30614__$1;
(statearr_30654_32663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (15))){
var inst_30473 = (state_30614[(13)]);
var inst_30476 = (state_30614[(15)]);
var inst_30474 = (state_30614[(16)]);
var inst_30475 = (state_30614[(17)]);
var inst_30496 = (state_30614[(2)]);
var inst_30497 = (inst_30476 + (1));
var tmp30643 = inst_30473;
var tmp30644 = inst_30474;
var tmp30645 = inst_30475;
var inst_30473__$1 = tmp30643;
var inst_30474__$1 = tmp30644;
var inst_30475__$1 = tmp30645;
var inst_30476__$1 = inst_30497;
var state_30614__$1 = (function (){var statearr_30655 = state_30614;
(statearr_30655[(13)] = inst_30473__$1);

(statearr_30655[(15)] = inst_30476__$1);

(statearr_30655[(16)] = inst_30474__$1);

(statearr_30655[(17)] = inst_30475__$1);

(statearr_30655[(18)] = inst_30496);

return statearr_30655;
})();
var statearr_30656_32669 = state_30614__$1;
(statearr_30656_32669[(2)] = null);

(statearr_30656_32669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (21))){
var inst_30531 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30660_32672 = state_30614__$1;
(statearr_30660_32672[(2)] = inst_30531);

(statearr_30660_32672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (31))){
var inst_30563 = (state_30614[(9)]);
var inst_30568 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30563);
var state_30614__$1 = state_30614;
var statearr_30661_32673 = state_30614__$1;
(statearr_30661_32673[(2)] = inst_30568);

(statearr_30661_32673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (32))){
var inst_30555 = (state_30614[(10)]);
var inst_30557 = (state_30614[(12)]);
var inst_30554 = (state_30614[(19)]);
var inst_30556 = (state_30614[(20)]);
var inst_30570 = (state_30614[(2)]);
var inst_30571 = (inst_30557 + (1));
var tmp30657 = inst_30555;
var tmp30658 = inst_30554;
var tmp30659 = inst_30556;
var inst_30554__$1 = tmp30658;
var inst_30555__$1 = tmp30657;
var inst_30556__$1 = tmp30659;
var inst_30557__$1 = inst_30571;
var state_30614__$1 = (function (){var statearr_30662 = state_30614;
(statearr_30662[(10)] = inst_30555__$1);

(statearr_30662[(12)] = inst_30557__$1);

(statearr_30662[(19)] = inst_30554__$1);

(statearr_30662[(21)] = inst_30570);

(statearr_30662[(20)] = inst_30556__$1);

return statearr_30662;
})();
var statearr_30663_32674 = state_30614__$1;
(statearr_30663_32674[(2)] = null);

(statearr_30663_32674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (40))){
var inst_30583 = (state_30614[(22)]);
var inst_30587 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30583);
var state_30614__$1 = state_30614;
var statearr_30667_32675 = state_30614__$1;
(statearr_30667_32675[(2)] = inst_30587);

(statearr_30667_32675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (33))){
var inst_30574 = (state_30614[(23)]);
var inst_30576 = cljs.core.chunked_seq_QMARK_(inst_30574);
var state_30614__$1 = state_30614;
if(inst_30576){
var statearr_30671_32677 = state_30614__$1;
(statearr_30671_32677[(1)] = (36));

} else {
var statearr_30672_32678 = state_30614__$1;
(statearr_30672_32678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (13))){
var inst_30486 = (state_30614[(24)]);
var inst_30493 = cljs.core.async.close_BANG_(inst_30486);
var state_30614__$1 = state_30614;
var statearr_30673_32680 = state_30614__$1;
(statearr_30673_32680[(2)] = inst_30493);

(statearr_30673_32680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (22))){
var inst_30520 = (state_30614[(8)]);
var inst_30524 = cljs.core.async.close_BANG_(inst_30520);
var state_30614__$1 = state_30614;
var statearr_30674_32681 = state_30614__$1;
(statearr_30674_32681[(2)] = inst_30524);

(statearr_30674_32681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (36))){
var inst_30574 = (state_30614[(23)]);
var inst_30578 = cljs.core.chunk_first(inst_30574);
var inst_30579 = cljs.core.chunk_rest(inst_30574);
var inst_30580 = cljs.core.count(inst_30578);
var inst_30554 = inst_30579;
var inst_30555 = inst_30578;
var inst_30556 = inst_30580;
var inst_30557 = (0);
var state_30614__$1 = (function (){var statearr_30675 = state_30614;
(statearr_30675[(10)] = inst_30555);

(statearr_30675[(12)] = inst_30557);

(statearr_30675[(19)] = inst_30554);

(statearr_30675[(20)] = inst_30556);

return statearr_30675;
})();
var statearr_30676_32682 = state_30614__$1;
(statearr_30676_32682[(2)] = null);

(statearr_30676_32682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (41))){
var inst_30574 = (state_30614[(23)]);
var inst_30589 = (state_30614[(2)]);
var inst_30590 = cljs.core.next(inst_30574);
var inst_30554 = inst_30590;
var inst_30555 = null;
var inst_30556 = (0);
var inst_30557 = (0);
var state_30614__$1 = (function (){var statearr_30678 = state_30614;
(statearr_30678[(10)] = inst_30555);

(statearr_30678[(12)] = inst_30557);

(statearr_30678[(19)] = inst_30554);

(statearr_30678[(20)] = inst_30556);

(statearr_30678[(25)] = inst_30589);

return statearr_30678;
})();
var statearr_30679_32683 = state_30614__$1;
(statearr_30679_32683[(2)] = null);

(statearr_30679_32683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (43))){
var state_30614__$1 = state_30614;
var statearr_30681_32684 = state_30614__$1;
(statearr_30681_32684[(2)] = null);

(statearr_30681_32684[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (29))){
var inst_30598 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30682_32685 = state_30614__$1;
(statearr_30682_32685[(2)] = inst_30598);

(statearr_30682_32685[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (44))){
var inst_30607 = (state_30614[(2)]);
var state_30614__$1 = (function (){var statearr_30683 = state_30614;
(statearr_30683[(26)] = inst_30607);

return statearr_30683;
})();
var statearr_30684_32687 = state_30614__$1;
(statearr_30684_32687[(2)] = null);

(statearr_30684_32687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (6))){
var inst_30546 = (state_30614[(27)]);
var inst_30545 = cljs.core.deref(cs);
var inst_30546__$1 = cljs.core.keys(inst_30545);
var inst_30547 = cljs.core.count(inst_30546__$1);
var inst_30548 = cljs.core.reset_BANG_(dctr,inst_30547);
var inst_30553 = cljs.core.seq(inst_30546__$1);
var inst_30554 = inst_30553;
var inst_30555 = null;
var inst_30556 = (0);
var inst_30557 = (0);
var state_30614__$1 = (function (){var statearr_30685 = state_30614;
(statearr_30685[(10)] = inst_30555);

(statearr_30685[(12)] = inst_30557);

(statearr_30685[(27)] = inst_30546__$1);

(statearr_30685[(28)] = inst_30548);

(statearr_30685[(19)] = inst_30554);

(statearr_30685[(20)] = inst_30556);

return statearr_30685;
})();
var statearr_30686_32692 = state_30614__$1;
(statearr_30686_32692[(2)] = null);

(statearr_30686_32692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (28))){
var inst_30574 = (state_30614[(23)]);
var inst_30554 = (state_30614[(19)]);
var inst_30574__$1 = cljs.core.seq(inst_30554);
var state_30614__$1 = (function (){var statearr_30687 = state_30614;
(statearr_30687[(23)] = inst_30574__$1);

return statearr_30687;
})();
if(inst_30574__$1){
var statearr_30688_32693 = state_30614__$1;
(statearr_30688_32693[(1)] = (33));

} else {
var statearr_30690_32694 = state_30614__$1;
(statearr_30690_32694[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (25))){
var inst_30557 = (state_30614[(12)]);
var inst_30556 = (state_30614[(20)]);
var inst_30559 = (inst_30557 < inst_30556);
var inst_30560 = inst_30559;
var state_30614__$1 = state_30614;
if(cljs.core.truth_(inst_30560)){
var statearr_30691_32695 = state_30614__$1;
(statearr_30691_32695[(1)] = (27));

} else {
var statearr_30693_32696 = state_30614__$1;
(statearr_30693_32696[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (34))){
var state_30614__$1 = state_30614;
var statearr_30694_32697 = state_30614__$1;
(statearr_30694_32697[(2)] = null);

(statearr_30694_32697[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (17))){
var state_30614__$1 = state_30614;
var statearr_30695_32698 = state_30614__$1;
(statearr_30695_32698[(2)] = null);

(statearr_30695_32698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (3))){
var inst_30612 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30614__$1,inst_30612);
} else {
if((state_val_30615 === (12))){
var inst_30537 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30696_32703 = state_30614__$1;
(statearr_30696_32703[(2)] = inst_30537);

(statearr_30696_32703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (2))){
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30614__$1,(4),ch);
} else {
if((state_val_30615 === (23))){
var state_30614__$1 = state_30614;
var statearr_30697_32707 = state_30614__$1;
(statearr_30697_32707[(2)] = null);

(statearr_30697_32707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (35))){
var inst_30596 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30698_32711 = state_30614__$1;
(statearr_30698_32711[(2)] = inst_30596);

(statearr_30698_32711[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (19))){
var inst_30501 = (state_30614[(7)]);
var inst_30510 = cljs.core.chunk_first(inst_30501);
var inst_30511 = cljs.core.chunk_rest(inst_30501);
var inst_30512 = cljs.core.count(inst_30510);
var inst_30473 = inst_30511;
var inst_30474 = inst_30510;
var inst_30475 = inst_30512;
var inst_30476 = (0);
var state_30614__$1 = (function (){var statearr_30699 = state_30614;
(statearr_30699[(13)] = inst_30473);

(statearr_30699[(15)] = inst_30476);

(statearr_30699[(16)] = inst_30474);

(statearr_30699[(17)] = inst_30475);

return statearr_30699;
})();
var statearr_30702_32715 = state_30614__$1;
(statearr_30702_32715[(2)] = null);

(statearr_30702_32715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (11))){
var inst_30473 = (state_30614[(13)]);
var inst_30501 = (state_30614[(7)]);
var inst_30501__$1 = cljs.core.seq(inst_30473);
var state_30614__$1 = (function (){var statearr_30703 = state_30614;
(statearr_30703[(7)] = inst_30501__$1);

return statearr_30703;
})();
if(inst_30501__$1){
var statearr_30704_32719 = state_30614__$1;
(statearr_30704_32719[(1)] = (16));

} else {
var statearr_30705_32720 = state_30614__$1;
(statearr_30705_32720[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (9))){
var inst_30539 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30710_32721 = state_30614__$1;
(statearr_30710_32721[(2)] = inst_30539);

(statearr_30710_32721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (5))){
var inst_30471 = cljs.core.deref(cs);
var inst_30472 = cljs.core.seq(inst_30471);
var inst_30473 = inst_30472;
var inst_30474 = null;
var inst_30475 = (0);
var inst_30476 = (0);
var state_30614__$1 = (function (){var statearr_30712 = state_30614;
(statearr_30712[(13)] = inst_30473);

(statearr_30712[(15)] = inst_30476);

(statearr_30712[(16)] = inst_30474);

(statearr_30712[(17)] = inst_30475);

return statearr_30712;
})();
var statearr_30713_32726 = state_30614__$1;
(statearr_30713_32726[(2)] = null);

(statearr_30713_32726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (14))){
var state_30614__$1 = state_30614;
var statearr_30718_32727 = state_30614__$1;
(statearr_30718_32727[(2)] = null);

(statearr_30718_32727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (45))){
var inst_30604 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30721_32728 = state_30614__$1;
(statearr_30721_32728[(2)] = inst_30604);

(statearr_30721_32728[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (26))){
var inst_30546 = (state_30614[(27)]);
var inst_30600 = (state_30614[(2)]);
var inst_30601 = cljs.core.seq(inst_30546);
var state_30614__$1 = (function (){var statearr_30727 = state_30614;
(statearr_30727[(29)] = inst_30600);

return statearr_30727;
})();
if(inst_30601){
var statearr_30730_32729 = state_30614__$1;
(statearr_30730_32729[(1)] = (42));

} else {
var statearr_30731_32730 = state_30614__$1;
(statearr_30731_32730[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (16))){
var inst_30501 = (state_30614[(7)]);
var inst_30508 = cljs.core.chunked_seq_QMARK_(inst_30501);
var state_30614__$1 = state_30614;
if(inst_30508){
var statearr_30736_32733 = state_30614__$1;
(statearr_30736_32733[(1)] = (19));

} else {
var statearr_30738_32734 = state_30614__$1;
(statearr_30738_32734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (38))){
var inst_30593 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30739_32735 = state_30614__$1;
(statearr_30739_32735[(2)] = inst_30593);

(statearr_30739_32735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (30))){
var state_30614__$1 = state_30614;
var statearr_30740_32736 = state_30614__$1;
(statearr_30740_32736[(2)] = null);

(statearr_30740_32736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (10))){
var inst_30476 = (state_30614[(15)]);
var inst_30474 = (state_30614[(16)]);
var inst_30485 = cljs.core._nth(inst_30474,inst_30476);
var inst_30486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30485,(0),null);
var inst_30487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30485,(1),null);
var state_30614__$1 = (function (){var statearr_30741 = state_30614;
(statearr_30741[(24)] = inst_30486);

return statearr_30741;
})();
if(cljs.core.truth_(inst_30487)){
var statearr_30742_32737 = state_30614__$1;
(statearr_30742_32737[(1)] = (13));

} else {
var statearr_30743_32738 = state_30614__$1;
(statearr_30743_32738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (18))){
var inst_30534 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30744_32739 = state_30614__$1;
(statearr_30744_32739[(2)] = inst_30534);

(statearr_30744_32739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (42))){
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30614__$1,(45),dchan);
} else {
if((state_val_30615 === (37))){
var inst_30583 = (state_30614[(22)]);
var inst_30463 = (state_30614[(11)]);
var inst_30574 = (state_30614[(23)]);
var inst_30583__$1 = cljs.core.first(inst_30574);
var inst_30584 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30583__$1,inst_30463,done);
var state_30614__$1 = (function (){var statearr_30745 = state_30614;
(statearr_30745[(22)] = inst_30583__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30584)){
var statearr_30746_32740 = state_30614__$1;
(statearr_30746_32740[(1)] = (39));

} else {
var statearr_30747_32741 = state_30614__$1;
(statearr_30747_32741[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (8))){
var inst_30476 = (state_30614[(15)]);
var inst_30475 = (state_30614[(17)]);
var inst_30478 = (inst_30476 < inst_30475);
var inst_30479 = inst_30478;
var state_30614__$1 = state_30614;
if(cljs.core.truth_(inst_30479)){
var statearr_30748_32742 = state_30614__$1;
(statearr_30748_32742[(1)] = (10));

} else {
var statearr_30749_32743 = state_30614__$1;
(statearr_30749_32743[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29271__auto__ = null;
var cljs$core$async$mult_$_state_machine__29271__auto____0 = (function (){
var statearr_30750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30750[(0)] = cljs$core$async$mult_$_state_machine__29271__auto__);

(statearr_30750[(1)] = (1));

return statearr_30750;
});
var cljs$core$async$mult_$_state_machine__29271__auto____1 = (function (state_30614){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30614);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30751){if((e30751 instanceof Object)){
var ex__29274__auto__ = e30751;
var statearr_30752_32748 = state_30614;
(statearr_30752_32748[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32749 = state_30614;
state_30614 = G__32749;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29271__auto__ = function(state_30614){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29271__auto____1.call(this,state_30614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29271__auto____0;
cljs$core$async$mult_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29271__auto____1;
return cljs$core$async$mult_$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_30753 = f__29558__auto__();
(statearr_30753[(6)] = c__29557__auto___32639);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30755 = arguments.length;
switch (G__30755) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32766 = arguments.length;
var i__4790__auto___32767 = (0);
while(true){
if((i__4790__auto___32767 < len__4789__auto___32766)){
args__4795__auto__.push((arguments[i__4790__auto___32767]));

var G__32768 = (i__4790__auto___32767 + (1));
i__4790__auto___32767 = G__32768;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30774){
var map__30777 = p__30774;
var map__30777__$1 = (((((!((map__30777 == null))))?(((((map__30777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30777):map__30777);
var opts = map__30777__$1;
var statearr_30781_32773 = state;
(statearr_30781_32773[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30784_32775 = state;
(statearr_30784_32775[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30786_32776 = state;
(statearr_30786_32776[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30767){
var G__30768 = cljs.core.first(seq30767);
var seq30767__$1 = cljs.core.next(seq30767);
var G__30769 = cljs.core.first(seq30767__$1);
var seq30767__$2 = cljs.core.next(seq30767__$1);
var G__30770 = cljs.core.first(seq30767__$2);
var seq30767__$3 = cljs.core.next(seq30767__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30768,G__30769,G__30770,seq30767__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30797 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30798){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30798 = meta30798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30799,meta30798__$1){
var self__ = this;
var _30799__$1 = this;
return (new cljs.core.async.t_cljs$core$async30797(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30798__$1));
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30799){
var self__ = this;
var _30799__$1 = this;
return self__.meta30798;
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30798","meta30798",101158698,null)], null);
}));

(cljs.core.async.t_cljs$core$async30797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30797");

(cljs.core.async.t_cljs$core$async30797.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30797.
 */
cljs.core.async.__GT_t_cljs$core$async30797 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30797(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30798){
return (new cljs.core.async.t_cljs$core$async30797(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30798));
});

}

return (new cljs.core.async.t_cljs$core$async30797(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29557__auto___32793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (7))){
var inst_30818 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30910_32796 = state_30905__$1;
(statearr_30910_32796[(2)] = inst_30818);

(statearr_30910_32796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (20))){
var inst_30830 = (state_30905[(7)]);
var state_30905__$1 = state_30905;
var statearr_30911_32798 = state_30905__$1;
(statearr_30911_32798[(2)] = inst_30830);

(statearr_30911_32798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (27))){
var state_30905__$1 = state_30905;
var statearr_30912_32799 = state_30905__$1;
(statearr_30912_32799[(2)] = null);

(statearr_30912_32799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (1))){
var inst_30805 = (state_30905[(8)]);
var inst_30805__$1 = calc_state();
var inst_30807 = (inst_30805__$1 == null);
var inst_30808 = cljs.core.not(inst_30807);
var state_30905__$1 = (function (){var statearr_30915 = state_30905;
(statearr_30915[(8)] = inst_30805__$1);

return statearr_30915;
})();
if(inst_30808){
var statearr_30916_32800 = state_30905__$1;
(statearr_30916_32800[(1)] = (2));

} else {
var statearr_30917_32801 = state_30905__$1;
(statearr_30917_32801[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (24))){
var inst_30863 = (state_30905[(9)]);
var inst_30877 = (state_30905[(10)]);
var inst_30854 = (state_30905[(11)]);
var inst_30877__$1 = (inst_30854.cljs$core$IFn$_invoke$arity$1 ? inst_30854.cljs$core$IFn$_invoke$arity$1(inst_30863) : inst_30854.call(null,inst_30863));
var state_30905__$1 = (function (){var statearr_30919 = state_30905;
(statearr_30919[(10)] = inst_30877__$1);

return statearr_30919;
})();
if(cljs.core.truth_(inst_30877__$1)){
var statearr_30921_32802 = state_30905__$1;
(statearr_30921_32802[(1)] = (29));

} else {
var statearr_30922_32803 = state_30905__$1;
(statearr_30922_32803[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (4))){
var inst_30821 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30821)){
var statearr_30924_32804 = state_30905__$1;
(statearr_30924_32804[(1)] = (8));

} else {
var statearr_30925_32805 = state_30905__$1;
(statearr_30925_32805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (15))){
var inst_30848 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30848)){
var statearr_30927_32806 = state_30905__$1;
(statearr_30927_32806[(1)] = (19));

} else {
var statearr_30928_32807 = state_30905__$1;
(statearr_30928_32807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (21))){
var inst_30853 = (state_30905[(12)]);
var inst_30853__$1 = (state_30905[(2)]);
var inst_30854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30853__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30853__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30853__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30905__$1 = (function (){var statearr_30929 = state_30905;
(statearr_30929[(13)] = inst_30855);

(statearr_30929[(12)] = inst_30853__$1);

(statearr_30929[(11)] = inst_30854);

return statearr_30929;
})();
return cljs.core.async.ioc_alts_BANG_(state_30905__$1,(22),inst_30856);
} else {
if((state_val_30906 === (31))){
var inst_30886 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30886)){
var statearr_30930_32812 = state_30905__$1;
(statearr_30930_32812[(1)] = (32));

} else {
var statearr_30931_32813 = state_30905__$1;
(statearr_30931_32813[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (32))){
var inst_30862 = (state_30905[(14)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30905__$1,(35),out,inst_30862);
} else {
if((state_val_30906 === (33))){
var inst_30853 = (state_30905[(12)]);
var inst_30830 = inst_30853;
var state_30905__$1 = (function (){var statearr_30932 = state_30905;
(statearr_30932[(7)] = inst_30830);

return statearr_30932;
})();
var statearr_30933_32815 = state_30905__$1;
(statearr_30933_32815[(2)] = null);

(statearr_30933_32815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (13))){
var inst_30830 = (state_30905[(7)]);
var inst_30837 = inst_30830.cljs$lang$protocol_mask$partition0$;
var inst_30838 = (inst_30837 & (64));
var inst_30839 = inst_30830.cljs$core$ISeq$;
var inst_30840 = (cljs.core.PROTOCOL_SENTINEL === inst_30839);
var inst_30841 = ((inst_30838) || (inst_30840));
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30841)){
var statearr_30934_32818 = state_30905__$1;
(statearr_30934_32818[(1)] = (16));

} else {
var statearr_30935_32819 = state_30905__$1;
(statearr_30935_32819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (22))){
var inst_30862 = (state_30905[(14)]);
var inst_30863 = (state_30905[(9)]);
var inst_30861 = (state_30905[(2)]);
var inst_30862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30861,(0),null);
var inst_30863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30861,(1),null);
var inst_30864 = (inst_30862__$1 == null);
var inst_30865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30863__$1,change);
var inst_30866 = ((inst_30864) || (inst_30865));
var state_30905__$1 = (function (){var statearr_30936 = state_30905;
(statearr_30936[(14)] = inst_30862__$1);

(statearr_30936[(9)] = inst_30863__$1);

return statearr_30936;
})();
if(cljs.core.truth_(inst_30866)){
var statearr_30937_32821 = state_30905__$1;
(statearr_30937_32821[(1)] = (23));

} else {
var statearr_30938_32822 = state_30905__$1;
(statearr_30938_32822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (36))){
var inst_30853 = (state_30905[(12)]);
var inst_30830 = inst_30853;
var state_30905__$1 = (function (){var statearr_30940 = state_30905;
(statearr_30940[(7)] = inst_30830);

return statearr_30940;
})();
var statearr_30941_32827 = state_30905__$1;
(statearr_30941_32827[(2)] = null);

(statearr_30941_32827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (29))){
var inst_30877 = (state_30905[(10)]);
var state_30905__$1 = state_30905;
var statearr_30942_32831 = state_30905__$1;
(statearr_30942_32831[(2)] = inst_30877);

(statearr_30942_32831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (6))){
var state_30905__$1 = state_30905;
var statearr_30943_32836 = state_30905__$1;
(statearr_30943_32836[(2)] = false);

(statearr_30943_32836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (28))){
var inst_30873 = (state_30905[(2)]);
var inst_30874 = calc_state();
var inst_30830 = inst_30874;
var state_30905__$1 = (function (){var statearr_30944 = state_30905;
(statearr_30944[(7)] = inst_30830);

(statearr_30944[(15)] = inst_30873);

return statearr_30944;
})();
var statearr_30945_32847 = state_30905__$1;
(statearr_30945_32847[(2)] = null);

(statearr_30945_32847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (25))){
var inst_30900 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30946_32848 = state_30905__$1;
(statearr_30946_32848[(2)] = inst_30900);

(statearr_30946_32848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (34))){
var inst_30898 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30947_32857 = state_30905__$1;
(statearr_30947_32857[(2)] = inst_30898);

(statearr_30947_32857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (17))){
var state_30905__$1 = state_30905;
var statearr_30949_32859 = state_30905__$1;
(statearr_30949_32859[(2)] = false);

(statearr_30949_32859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (3))){
var state_30905__$1 = state_30905;
var statearr_30950_32864 = state_30905__$1;
(statearr_30950_32864[(2)] = false);

(statearr_30950_32864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (12))){
var inst_30902 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30905__$1,inst_30902);
} else {
if((state_val_30906 === (2))){
var inst_30805 = (state_30905[(8)]);
var inst_30810 = inst_30805.cljs$lang$protocol_mask$partition0$;
var inst_30811 = (inst_30810 & (64));
var inst_30812 = inst_30805.cljs$core$ISeq$;
var inst_30813 = (cljs.core.PROTOCOL_SENTINEL === inst_30812);
var inst_30814 = ((inst_30811) || (inst_30813));
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30814)){
var statearr_30952_32877 = state_30905__$1;
(statearr_30952_32877[(1)] = (5));

} else {
var statearr_30953_32878 = state_30905__$1;
(statearr_30953_32878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (23))){
var inst_30862 = (state_30905[(14)]);
var inst_30868 = (inst_30862 == null);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30868)){
var statearr_30954_32879 = state_30905__$1;
(statearr_30954_32879[(1)] = (26));

} else {
var statearr_30955_32880 = state_30905__$1;
(statearr_30955_32880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (35))){
var inst_30889 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30889)){
var statearr_30956_32882 = state_30905__$1;
(statearr_30956_32882[(1)] = (36));

} else {
var statearr_30957_32886 = state_30905__$1;
(statearr_30957_32886[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (19))){
var inst_30830 = (state_30905[(7)]);
var inst_30850 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30830);
var state_30905__$1 = state_30905;
var statearr_30958_32887 = state_30905__$1;
(statearr_30958_32887[(2)] = inst_30850);

(statearr_30958_32887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (11))){
var inst_30830 = (state_30905[(7)]);
var inst_30834 = (inst_30830 == null);
var inst_30835 = cljs.core.not(inst_30834);
var state_30905__$1 = state_30905;
if(inst_30835){
var statearr_30959_32892 = state_30905__$1;
(statearr_30959_32892[(1)] = (13));

} else {
var statearr_30960_32894 = state_30905__$1;
(statearr_30960_32894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (9))){
var inst_30805 = (state_30905[(8)]);
var state_30905__$1 = state_30905;
var statearr_30961_32897 = state_30905__$1;
(statearr_30961_32897[(2)] = inst_30805);

(statearr_30961_32897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (5))){
var state_30905__$1 = state_30905;
var statearr_30962_32899 = state_30905__$1;
(statearr_30962_32899[(2)] = true);

(statearr_30962_32899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (14))){
var state_30905__$1 = state_30905;
var statearr_30963_32900 = state_30905__$1;
(statearr_30963_32900[(2)] = false);

(statearr_30963_32900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (26))){
var inst_30863 = (state_30905[(9)]);
var inst_30870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30863);
var state_30905__$1 = state_30905;
var statearr_30964_32903 = state_30905__$1;
(statearr_30964_32903[(2)] = inst_30870);

(statearr_30964_32903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (16))){
var state_30905__$1 = state_30905;
var statearr_30965_32904 = state_30905__$1;
(statearr_30965_32904[(2)] = true);

(statearr_30965_32904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (38))){
var inst_30894 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30972_32905 = state_30905__$1;
(statearr_30972_32905[(2)] = inst_30894);

(statearr_30972_32905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (30))){
var inst_30855 = (state_30905[(13)]);
var inst_30863 = (state_30905[(9)]);
var inst_30854 = (state_30905[(11)]);
var inst_30880 = cljs.core.empty_QMARK_(inst_30854);
var inst_30881 = (inst_30855.cljs$core$IFn$_invoke$arity$1 ? inst_30855.cljs$core$IFn$_invoke$arity$1(inst_30863) : inst_30855.call(null,inst_30863));
var inst_30882 = cljs.core.not(inst_30881);
var inst_30883 = ((inst_30880) && (inst_30882));
var state_30905__$1 = state_30905;
var statearr_30973_32906 = state_30905__$1;
(statearr_30973_32906[(2)] = inst_30883);

(statearr_30973_32906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (10))){
var inst_30805 = (state_30905[(8)]);
var inst_30826 = (state_30905[(2)]);
var inst_30827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30826,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30826,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30826,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30830 = inst_30805;
var state_30905__$1 = (function (){var statearr_30974 = state_30905;
(statearr_30974[(7)] = inst_30830);

(statearr_30974[(16)] = inst_30827);

(statearr_30974[(17)] = inst_30829);

(statearr_30974[(18)] = inst_30828);

return statearr_30974;
})();
var statearr_30975_32907 = state_30905__$1;
(statearr_30975_32907[(2)] = null);

(statearr_30975_32907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (18))){
var inst_30845 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30976_32908 = state_30905__$1;
(statearr_30976_32908[(2)] = inst_30845);

(statearr_30976_32908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (37))){
var state_30905__$1 = state_30905;
var statearr_30977_32910 = state_30905__$1;
(statearr_30977_32910[(2)] = null);

(statearr_30977_32910[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (8))){
var inst_30805 = (state_30905[(8)]);
var inst_30823 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30805);
var state_30905__$1 = state_30905;
var statearr_30982_32911 = state_30905__$1;
(statearr_30982_32911[(2)] = inst_30823);

(statearr_30982_32911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29271__auto__ = null;
var cljs$core$async$mix_$_state_machine__29271__auto____0 = (function (){
var statearr_30991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30991[(0)] = cljs$core$async$mix_$_state_machine__29271__auto__);

(statearr_30991[(1)] = (1));

return statearr_30991;
});
var cljs$core$async$mix_$_state_machine__29271__auto____1 = (function (state_30905){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_30905);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e30992){if((e30992 instanceof Object)){
var ex__29274__auto__ = e30992;
var statearr_30993_32918 = state_30905;
(statearr_30993_32918[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32920 = state_30905;
state_30905 = G__32920;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29271__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29271__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29271__auto____0;
cljs$core$async$mix_$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29271__auto____1;
return cljs$core$async$mix_$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31000 = f__29558__auto__();
(statearr_31000[(6)] = c__29557__auto___32793);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31030 = arguments.length;
switch (G__31030) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31054 = arguments.length;
switch (G__31054) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31050_SHARP_){
if(cljs.core.truth_((p1__31050_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31050_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31050_SHARP_.call(null,topic)))){
return p1__31050_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31050_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31058 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31059){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31059 = meta31059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31060,meta31059__$1){
var self__ = this;
var _31060__$1 = this;
return (new cljs.core.async.t_cljs$core$async31058(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31059__$1));
}));

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31060){
var self__ = this;
var _31060__$1 = this;
return self__.meta31059;
}));

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31059","meta31059",1769814376,null)], null);
}));

(cljs.core.async.t_cljs$core$async31058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31058");

(cljs.core.async.t_cljs$core$async31058.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31058.
 */
cljs.core.async.__GT_t_cljs$core$async31058 = (function cljs$core$async$__GT_t_cljs$core$async31058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31059){
return (new cljs.core.async.t_cljs$core$async31058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31059));
});

}

return (new cljs.core.async.t_cljs$core$async31058(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29557__auto___32954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (7))){
var inst_31165 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31173_32955 = state_31169__$1;
(statearr_31173_32955[(2)] = inst_31165);

(statearr_31173_32955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (20))){
var state_31169__$1 = state_31169;
var statearr_31179_32959 = state_31169__$1;
(statearr_31179_32959[(2)] = null);

(statearr_31179_32959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (1))){
var state_31169__$1 = state_31169;
var statearr_31180_32960 = state_31169__$1;
(statearr_31180_32960[(2)] = null);

(statearr_31180_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (24))){
var inst_31148 = (state_31169[(7)]);
var inst_31157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31148);
var state_31169__$1 = state_31169;
var statearr_31181_32967 = state_31169__$1;
(statearr_31181_32967[(2)] = inst_31157);

(statearr_31181_32967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (4))){
var inst_31071 = (state_31169[(8)]);
var inst_31071__$1 = (state_31169[(2)]);
var inst_31072 = (inst_31071__$1 == null);
var state_31169__$1 = (function (){var statearr_31182 = state_31169;
(statearr_31182[(8)] = inst_31071__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31072)){
var statearr_31183_32974 = state_31169__$1;
(statearr_31183_32974[(1)] = (5));

} else {
var statearr_31185_32975 = state_31169__$1;
(statearr_31185_32975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (15))){
var inst_31142 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31186_32976 = state_31169__$1;
(statearr_31186_32976[(2)] = inst_31142);

(statearr_31186_32976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (21))){
var inst_31162 = (state_31169[(2)]);
var state_31169__$1 = (function (){var statearr_31187 = state_31169;
(statearr_31187[(9)] = inst_31162);

return statearr_31187;
})();
var statearr_31188_32977 = state_31169__$1;
(statearr_31188_32977[(2)] = null);

(statearr_31188_32977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (13))){
var inst_31096 = (state_31169[(10)]);
var inst_31102 = cljs.core.chunked_seq_QMARK_(inst_31096);
var state_31169__$1 = state_31169;
if(inst_31102){
var statearr_31189_32978 = state_31169__$1;
(statearr_31189_32978[(1)] = (16));

} else {
var statearr_31190_32979 = state_31169__$1;
(statearr_31190_32979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (22))){
var inst_31154 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31154)){
var statearr_31191_32980 = state_31169__$1;
(statearr_31191_32980[(1)] = (23));

} else {
var statearr_31192_32981 = state_31169__$1;
(statearr_31192_32981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (6))){
var inst_31071 = (state_31169[(8)]);
var inst_31148 = (state_31169[(7)]);
var inst_31150 = (state_31169[(11)]);
var inst_31148__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31071) : topic_fn.call(null,inst_31071));
var inst_31149 = cljs.core.deref(mults);
var inst_31150__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31149,inst_31148__$1);
var state_31169__$1 = (function (){var statearr_31193 = state_31169;
(statearr_31193[(7)] = inst_31148__$1);

(statearr_31193[(11)] = inst_31150__$1);

return statearr_31193;
})();
if(cljs.core.truth_(inst_31150__$1)){
var statearr_31194_32983 = state_31169__$1;
(statearr_31194_32983[(1)] = (19));

} else {
var statearr_31195_32984 = state_31169__$1;
(statearr_31195_32984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (25))){
var inst_31159 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31196_32985 = state_31169__$1;
(statearr_31196_32985[(2)] = inst_31159);

(statearr_31196_32985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (17))){
var inst_31096 = (state_31169[(10)]);
var inst_31113 = cljs.core.first(inst_31096);
var inst_31134 = cljs.core.async.muxch_STAR_(inst_31113);
var inst_31135 = cljs.core.async.close_BANG_(inst_31134);
var inst_31136 = cljs.core.next(inst_31096);
var inst_31082 = inst_31136;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31169__$1 = (function (){var statearr_31197 = state_31169;
(statearr_31197[(12)] = inst_31083);

(statearr_31197[(13)] = inst_31135);

(statearr_31197[(14)] = inst_31084);

(statearr_31197[(15)] = inst_31085);

(statearr_31197[(16)] = inst_31082);

return statearr_31197;
})();
var statearr_31198_32992 = state_31169__$1;
(statearr_31198_32992[(2)] = null);

(statearr_31198_32992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (3))){
var inst_31167 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31169__$1,inst_31167);
} else {
if((state_val_31170 === (12))){
var inst_31144 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31199_32993 = state_31169__$1;
(statearr_31199_32993[(2)] = inst_31144);

(statearr_31199_32993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (2))){
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31169__$1,(4),ch);
} else {
if((state_val_31170 === (23))){
var state_31169__$1 = state_31169;
var statearr_31200_32994 = state_31169__$1;
(statearr_31200_32994[(2)] = null);

(statearr_31200_32994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (19))){
var inst_31071 = (state_31169[(8)]);
var inst_31150 = (state_31169[(11)]);
var inst_31152 = cljs.core.async.muxch_STAR_(inst_31150);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31169__$1,(22),inst_31152,inst_31071);
} else {
if((state_val_31170 === (11))){
var inst_31096 = (state_31169[(10)]);
var inst_31082 = (state_31169[(16)]);
var inst_31096__$1 = cljs.core.seq(inst_31082);
var state_31169__$1 = (function (){var statearr_31207 = state_31169;
(statearr_31207[(10)] = inst_31096__$1);

return statearr_31207;
})();
if(inst_31096__$1){
var statearr_31208_32996 = state_31169__$1;
(statearr_31208_32996[(1)] = (13));

} else {
var statearr_31209_32997 = state_31169__$1;
(statearr_31209_32997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (9))){
var inst_31146 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31210_32999 = state_31169__$1;
(statearr_31210_32999[(2)] = inst_31146);

(statearr_31210_32999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (5))){
var inst_31078 = cljs.core.deref(mults);
var inst_31079 = cljs.core.vals(inst_31078);
var inst_31080 = cljs.core.seq(inst_31079);
var inst_31082 = inst_31080;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31169__$1 = (function (){var statearr_31211 = state_31169;
(statearr_31211[(12)] = inst_31083);

(statearr_31211[(14)] = inst_31084);

(statearr_31211[(15)] = inst_31085);

(statearr_31211[(16)] = inst_31082);

return statearr_31211;
})();
var statearr_31212_33006 = state_31169__$1;
(statearr_31212_33006[(2)] = null);

(statearr_31212_33006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (14))){
var state_31169__$1 = state_31169;
var statearr_31216_33007 = state_31169__$1;
(statearr_31216_33007[(2)] = null);

(statearr_31216_33007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (16))){
var inst_31096 = (state_31169[(10)]);
var inst_31104 = cljs.core.chunk_first(inst_31096);
var inst_31106 = cljs.core.chunk_rest(inst_31096);
var inst_31110 = cljs.core.count(inst_31104);
var inst_31082 = inst_31106;
var inst_31083 = inst_31104;
var inst_31084 = inst_31110;
var inst_31085 = (0);
var state_31169__$1 = (function (){var statearr_31217 = state_31169;
(statearr_31217[(12)] = inst_31083);

(statearr_31217[(14)] = inst_31084);

(statearr_31217[(15)] = inst_31085);

(statearr_31217[(16)] = inst_31082);

return statearr_31217;
})();
var statearr_31220_33008 = state_31169__$1;
(statearr_31220_33008[(2)] = null);

(statearr_31220_33008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (10))){
var inst_31083 = (state_31169[(12)]);
var inst_31084 = (state_31169[(14)]);
var inst_31085 = (state_31169[(15)]);
var inst_31082 = (state_31169[(16)]);
var inst_31090 = cljs.core._nth(inst_31083,inst_31085);
var inst_31091 = cljs.core.async.muxch_STAR_(inst_31090);
var inst_31092 = cljs.core.async.close_BANG_(inst_31091);
var inst_31093 = (inst_31085 + (1));
var tmp31213 = inst_31083;
var tmp31214 = inst_31084;
var tmp31215 = inst_31082;
var inst_31082__$1 = tmp31215;
var inst_31083__$1 = tmp31213;
var inst_31084__$1 = tmp31214;
var inst_31085__$1 = inst_31093;
var state_31169__$1 = (function (){var statearr_31225 = state_31169;
(statearr_31225[(17)] = inst_31092);

(statearr_31225[(12)] = inst_31083__$1);

(statearr_31225[(14)] = inst_31084__$1);

(statearr_31225[(15)] = inst_31085__$1);

(statearr_31225[(16)] = inst_31082__$1);

return statearr_31225;
})();
var statearr_31229_33015 = state_31169__$1;
(statearr_31229_33015[(2)] = null);

(statearr_31229_33015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (18))){
var inst_31139 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31230_33016 = state_31169__$1;
(statearr_31230_33016[(2)] = inst_31139);

(statearr_31230_33016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (8))){
var inst_31084 = (state_31169[(14)]);
var inst_31085 = (state_31169[(15)]);
var inst_31087 = (inst_31085 < inst_31084);
var inst_31088 = inst_31087;
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31088)){
var statearr_31231_33017 = state_31169__$1;
(statearr_31231_33017[(1)] = (10));

} else {
var statearr_31232_33018 = state_31169__$1;
(statearr_31232_33018[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31169){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31169);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__29274__auto__ = e31234;
var statearr_31237_33019 = state_31169;
(statearr_31237_33019[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33020 = state_31169;
state_31169 = G__33020;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31238 = f__29558__auto__();
(statearr_31238[(6)] = c__29557__auto___32954);

return statearr_31238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31240 = arguments.length;
switch (G__31240) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31253 = arguments.length;
switch (G__31253) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31262 = arguments.length;
switch (G__31262) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29557__auto___33026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31302){
var state_val_31303 = (state_31302[(1)]);
if((state_val_31303 === (7))){
var state_31302__$1 = state_31302;
var statearr_31308_33027 = state_31302__$1;
(statearr_31308_33027[(2)] = null);

(statearr_31308_33027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (1))){
var state_31302__$1 = state_31302;
var statearr_31309_33028 = state_31302__$1;
(statearr_31309_33028[(2)] = null);

(statearr_31309_33028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (4))){
var inst_31265 = (state_31302[(7)]);
var inst_31267 = (inst_31265 < cnt);
var state_31302__$1 = state_31302;
if(cljs.core.truth_(inst_31267)){
var statearr_31310_33030 = state_31302__$1;
(statearr_31310_33030[(1)] = (6));

} else {
var statearr_31315_33031 = state_31302__$1;
(statearr_31315_33031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (15))){
var inst_31298 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31316_33033 = state_31302__$1;
(statearr_31316_33033[(2)] = inst_31298);

(statearr_31316_33033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (13))){
var inst_31291 = cljs.core.async.close_BANG_(out);
var state_31302__$1 = state_31302;
var statearr_31317_33034 = state_31302__$1;
(statearr_31317_33034[(2)] = inst_31291);

(statearr_31317_33034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (6))){
var state_31302__$1 = state_31302;
var statearr_31318_33036 = state_31302__$1;
(statearr_31318_33036[(2)] = null);

(statearr_31318_33036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (3))){
var inst_31300 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31302__$1,inst_31300);
} else {
if((state_val_31303 === (12))){
var inst_31288 = (state_31302[(8)]);
var inst_31288__$1 = (state_31302[(2)]);
var inst_31289 = cljs.core.some(cljs.core.nil_QMARK_,inst_31288__$1);
var state_31302__$1 = (function (){var statearr_31319 = state_31302;
(statearr_31319[(8)] = inst_31288__$1);

return statearr_31319;
})();
if(cljs.core.truth_(inst_31289)){
var statearr_31320_33037 = state_31302__$1;
(statearr_31320_33037[(1)] = (13));

} else {
var statearr_31321_33038 = state_31302__$1;
(statearr_31321_33038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (2))){
var inst_31264 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31265 = (0);
var state_31302__$1 = (function (){var statearr_31323 = state_31302;
(statearr_31323[(7)] = inst_31265);

(statearr_31323[(9)] = inst_31264);

return statearr_31323;
})();
var statearr_31324_33039 = state_31302__$1;
(statearr_31324_33039[(2)] = null);

(statearr_31324_33039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (11))){
var inst_31265 = (state_31302[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31302,(10),Object,null,(9));
var inst_31275 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31265) : chs__$1.call(null,inst_31265));
var inst_31276 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31265) : done.call(null,inst_31265));
var inst_31277 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31275,inst_31276);
var state_31302__$1 = state_31302;
var statearr_31325_33042 = state_31302__$1;
(statearr_31325_33042[(2)] = inst_31277);


cljs.core.async.impl.ioc_helpers.process_exception(state_31302__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (9))){
var inst_31265 = (state_31302[(7)]);
var inst_31279 = (state_31302[(2)]);
var inst_31280 = (inst_31265 + (1));
var inst_31265__$1 = inst_31280;
var state_31302__$1 = (function (){var statearr_31326 = state_31302;
(statearr_31326[(7)] = inst_31265__$1);

(statearr_31326[(10)] = inst_31279);

return statearr_31326;
})();
var statearr_31327_33047 = state_31302__$1;
(statearr_31327_33047[(2)] = null);

(statearr_31327_33047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (5))){
var inst_31286 = (state_31302[(2)]);
var state_31302__$1 = (function (){var statearr_31329 = state_31302;
(statearr_31329[(11)] = inst_31286);

return statearr_31329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31302__$1,(12),dchan);
} else {
if((state_val_31303 === (14))){
var inst_31288 = (state_31302[(8)]);
var inst_31293 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31288);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31302__$1,(16),out,inst_31293);
} else {
if((state_val_31303 === (16))){
var inst_31295 = (state_31302[(2)]);
var state_31302__$1 = (function (){var statearr_31331 = state_31302;
(statearr_31331[(12)] = inst_31295);

return statearr_31331;
})();
var statearr_31332_33049 = state_31302__$1;
(statearr_31332_33049[(2)] = null);

(statearr_31332_33049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (10))){
var inst_31269 = (state_31302[(2)]);
var inst_31271 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31302__$1 = (function (){var statearr_31333 = state_31302;
(statearr_31333[(13)] = inst_31269);

return statearr_31333;
})();
var statearr_31334_33051 = state_31302__$1;
(statearr_31334_33051[(2)] = inst_31271);


cljs.core.async.impl.ioc_helpers.process_exception(state_31302__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (8))){
var inst_31284 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31335_33053 = state_31302__$1;
(statearr_31335_33053[(2)] = inst_31284);

(statearr_31335_33053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31336[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31336[(1)] = (1));

return statearr_31336;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31302){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31302);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31337){if((e31337 instanceof Object)){
var ex__29274__auto__ = e31337;
var statearr_31338_33056 = state_31302;
(statearr_31338_33056[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33057 = state_31302;
state_31302 = G__33057;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31339 = f__29558__auto__();
(statearr_31339[(6)] = c__29557__auto___33026);

return statearr_31339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31343 = arguments.length;
switch (G__31343) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29557__auto___33059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31379){
var state_val_31380 = (state_31379[(1)]);
if((state_val_31380 === (7))){
var inst_31357 = (state_31379[(7)]);
var inst_31358 = (state_31379[(8)]);
var inst_31357__$1 = (state_31379[(2)]);
var inst_31358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31357__$1,(0),null);
var inst_31359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31357__$1,(1),null);
var inst_31360 = (inst_31358__$1 == null);
var state_31379__$1 = (function (){var statearr_31381 = state_31379;
(statearr_31381[(9)] = inst_31359);

(statearr_31381[(7)] = inst_31357__$1);

(statearr_31381[(8)] = inst_31358__$1);

return statearr_31381;
})();
if(cljs.core.truth_(inst_31360)){
var statearr_31382_33060 = state_31379__$1;
(statearr_31382_33060[(1)] = (8));

} else {
var statearr_31383_33061 = state_31379__$1;
(statearr_31383_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (1))){
var inst_31346 = cljs.core.vec(chs);
var inst_31347 = inst_31346;
var state_31379__$1 = (function (){var statearr_31384 = state_31379;
(statearr_31384[(10)] = inst_31347);

return statearr_31384;
})();
var statearr_31385_33062 = state_31379__$1;
(statearr_31385_33062[(2)] = null);

(statearr_31385_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (4))){
var inst_31347 = (state_31379[(10)]);
var state_31379__$1 = state_31379;
return cljs.core.async.ioc_alts_BANG_(state_31379__$1,(7),inst_31347);
} else {
if((state_val_31380 === (6))){
var inst_31375 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
var statearr_31386_33063 = state_31379__$1;
(statearr_31386_33063[(2)] = inst_31375);

(statearr_31386_33063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (3))){
var inst_31377 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31379__$1,inst_31377);
} else {
if((state_val_31380 === (2))){
var inst_31347 = (state_31379[(10)]);
var inst_31349 = cljs.core.count(inst_31347);
var inst_31350 = (inst_31349 > (0));
var state_31379__$1 = state_31379;
if(cljs.core.truth_(inst_31350)){
var statearr_31389_33064 = state_31379__$1;
(statearr_31389_33064[(1)] = (4));

} else {
var statearr_31390_33065 = state_31379__$1;
(statearr_31390_33065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (11))){
var inst_31347 = (state_31379[(10)]);
var inst_31368 = (state_31379[(2)]);
var tmp31388 = inst_31347;
var inst_31347__$1 = tmp31388;
var state_31379__$1 = (function (){var statearr_31397 = state_31379;
(statearr_31397[(10)] = inst_31347__$1);

(statearr_31397[(11)] = inst_31368);

return statearr_31397;
})();
var statearr_31398_33066 = state_31379__$1;
(statearr_31398_33066[(2)] = null);

(statearr_31398_33066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (9))){
var inst_31358 = (state_31379[(8)]);
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31379__$1,(11),out,inst_31358);
} else {
if((state_val_31380 === (5))){
var inst_31373 = cljs.core.async.close_BANG_(out);
var state_31379__$1 = state_31379;
var statearr_31404_33067 = state_31379__$1;
(statearr_31404_33067[(2)] = inst_31373);

(statearr_31404_33067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (10))){
var inst_31371 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
var statearr_31405_33068 = state_31379__$1;
(statearr_31405_33068[(2)] = inst_31371);

(statearr_31405_33068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (8))){
var inst_31347 = (state_31379[(10)]);
var inst_31359 = (state_31379[(9)]);
var inst_31357 = (state_31379[(7)]);
var inst_31358 = (state_31379[(8)]);
var inst_31363 = (function (){var cs = inst_31347;
var vec__31353 = inst_31357;
var v = inst_31358;
var c = inst_31359;
return (function (p1__31340_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31340_SHARP_);
});
})();
var inst_31364 = cljs.core.filterv(inst_31363,inst_31347);
var inst_31347__$1 = inst_31364;
var state_31379__$1 = (function (){var statearr_31406 = state_31379;
(statearr_31406[(10)] = inst_31347__$1);

return statearr_31406;
})();
var statearr_31407_33069 = state_31379__$1;
(statearr_31407_33069[(2)] = null);

(statearr_31407_33069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31420[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31420[(1)] = (1));

return statearr_31420;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31379){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31379);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31425){if((e31425 instanceof Object)){
var ex__29274__auto__ = e31425;
var statearr_31426_33070 = state_31379;
(statearr_31426_33070[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_31379;
state_31379 = G__33071;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31427 = f__29558__auto__();
(statearr_31427[(6)] = c__29557__auto___33059);

return statearr_31427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31429 = arguments.length;
switch (G__31429) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29557__auto___33075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31453){
var state_val_31454 = (state_31453[(1)]);
if((state_val_31454 === (7))){
var inst_31435 = (state_31453[(7)]);
var inst_31435__$1 = (state_31453[(2)]);
var inst_31436 = (inst_31435__$1 == null);
var inst_31437 = cljs.core.not(inst_31436);
var state_31453__$1 = (function (){var statearr_31458 = state_31453;
(statearr_31458[(7)] = inst_31435__$1);

return statearr_31458;
})();
if(inst_31437){
var statearr_31459_33077 = state_31453__$1;
(statearr_31459_33077[(1)] = (8));

} else {
var statearr_31460_33078 = state_31453__$1;
(statearr_31460_33078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (1))){
var inst_31430 = (0);
var state_31453__$1 = (function (){var statearr_31461 = state_31453;
(statearr_31461[(8)] = inst_31430);

return statearr_31461;
})();
var statearr_31462_33080 = state_31453__$1;
(statearr_31462_33080[(2)] = null);

(statearr_31462_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (4))){
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31453__$1,(7),ch);
} else {
if((state_val_31454 === (6))){
var inst_31448 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31465_33081 = state_31453__$1;
(statearr_31465_33081[(2)] = inst_31448);

(statearr_31465_33081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (3))){
var inst_31450 = (state_31453[(2)]);
var inst_31451 = cljs.core.async.close_BANG_(out);
var state_31453__$1 = (function (){var statearr_31468 = state_31453;
(statearr_31468[(9)] = inst_31450);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31453__$1,inst_31451);
} else {
if((state_val_31454 === (2))){
var inst_31430 = (state_31453[(8)]);
var inst_31432 = (inst_31430 < n);
var state_31453__$1 = state_31453;
if(cljs.core.truth_(inst_31432)){
var statearr_31470_33083 = state_31453__$1;
(statearr_31470_33083[(1)] = (4));

} else {
var statearr_31471_33084 = state_31453__$1;
(statearr_31471_33084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (11))){
var inst_31430 = (state_31453[(8)]);
var inst_31440 = (state_31453[(2)]);
var inst_31441 = (inst_31430 + (1));
var inst_31430__$1 = inst_31441;
var state_31453__$1 = (function (){var statearr_31473 = state_31453;
(statearr_31473[(10)] = inst_31440);

(statearr_31473[(8)] = inst_31430__$1);

return statearr_31473;
})();
var statearr_31474_33085 = state_31453__$1;
(statearr_31474_33085[(2)] = null);

(statearr_31474_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (9))){
var state_31453__$1 = state_31453;
var statearr_31475_33086 = state_31453__$1;
(statearr_31475_33086[(2)] = null);

(statearr_31475_33086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (5))){
var state_31453__$1 = state_31453;
var statearr_31478_33088 = state_31453__$1;
(statearr_31478_33088[(2)] = null);

(statearr_31478_33088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (10))){
var inst_31445 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31479_33089 = state_31453__$1;
(statearr_31479_33089[(2)] = inst_31445);

(statearr_31479_33089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (8))){
var inst_31435 = (state_31453[(7)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31453__$1,(11),out,inst_31435);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31480[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31480[(1)] = (1));

return statearr_31480;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31453){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31453);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31481){if((e31481 instanceof Object)){
var ex__29274__auto__ = e31481;
var statearr_31482_33090 = state_31453;
(statearr_31482_33090[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33091 = state_31453;
state_31453 = G__33091;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31483 = f__29558__auto__();
(statearr_31483[(6)] = c__29557__auto___33075);

return statearr_31483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31486 = (function (f,ch,meta31487){
this.f = f;
this.ch = ch;
this.meta31487 = meta31487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31488,meta31487__$1){
var self__ = this;
var _31488__$1 = this;
return (new cljs.core.async.t_cljs$core$async31486(self__.f,self__.ch,meta31487__$1));
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31488){
var self__ = this;
var _31488__$1 = this;
return self__.meta31487;
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31492 = (function (f,ch,meta31487,_,fn1,meta31493){
this.f = f;
this.ch = ch;
this.meta31487 = meta31487;
this._ = _;
this.fn1 = fn1;
this.meta31493 = meta31493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31494,meta31493__$1){
var self__ = this;
var _31494__$1 = this;
return (new cljs.core.async.t_cljs$core$async31492(self__.f,self__.ch,self__.meta31487,self__._,self__.fn1,meta31493__$1));
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31494){
var self__ = this;
var _31494__$1 = this;
return self__.meta31493;
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31484_SHARP_){
var G__31498 = (((p1__31484_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31484_SHARP_) : self__.f.call(null,p1__31484_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31498) : f1.call(null,G__31498));
});
}));

(cljs.core.async.t_cljs$core$async31492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31487","meta31487",407562967,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31486","cljs.core.async/t_cljs$core$async31486",-1828856648,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31493","meta31493",-2100015289,null)], null);
}));

(cljs.core.async.t_cljs$core$async31492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31492");

(cljs.core.async.t_cljs$core$async31492.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31492.
 */
cljs.core.async.__GT_t_cljs$core$async31492 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31492(f__$1,ch__$1,meta31487__$1,___$2,fn1__$1,meta31493){
return (new cljs.core.async.t_cljs$core$async31492(f__$1,ch__$1,meta31487__$1,___$2,fn1__$1,meta31493));
});

}

return (new cljs.core.async.t_cljs$core$async31492(self__.f,self__.ch,self__.meta31487,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31506 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31506) : self__.f.call(null,G__31506));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31487","meta31487",407562967,null)], null);
}));

(cljs.core.async.t_cljs$core$async31486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31486");

(cljs.core.async.t_cljs$core$async31486.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31486.
 */
cljs.core.async.__GT_t_cljs$core$async31486 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31486(f__$1,ch__$1,meta31487){
return (new cljs.core.async.t_cljs$core$async31486(f__$1,ch__$1,meta31487));
});

}

return (new cljs.core.async.t_cljs$core$async31486(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31508 = (function (f,ch,meta31509){
this.f = f;
this.ch = ch;
this.meta31509 = meta31509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31510,meta31509__$1){
var self__ = this;
var _31510__$1 = this;
return (new cljs.core.async.t_cljs$core$async31508(self__.f,self__.ch,meta31509__$1));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31510){
var self__ = this;
var _31510__$1 = this;
return self__.meta31509;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31509","meta31509",571921484,null)], null);
}));

(cljs.core.async.t_cljs$core$async31508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31508");

(cljs.core.async.t_cljs$core$async31508.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31508.
 */
cljs.core.async.__GT_t_cljs$core$async31508 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31508(f__$1,ch__$1,meta31509){
return (new cljs.core.async.t_cljs$core$async31508(f__$1,ch__$1,meta31509));
});

}

return (new cljs.core.async.t_cljs$core$async31508(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31514 = (function (p,ch,meta31515){
this.p = p;
this.ch = ch;
this.meta31515 = meta31515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31516,meta31515__$1){
var self__ = this;
var _31516__$1 = this;
return (new cljs.core.async.t_cljs$core$async31514(self__.p,self__.ch,meta31515__$1));
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31516){
var self__ = this;
var _31516__$1 = this;
return self__.meta31515;
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31515","meta31515",301609692,null)], null);
}));

(cljs.core.async.t_cljs$core$async31514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31514");

(cljs.core.async.t_cljs$core$async31514.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31514.
 */
cljs.core.async.__GT_t_cljs$core$async31514 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31514(p__$1,ch__$1,meta31515){
return (new cljs.core.async.t_cljs$core$async31514(p__$1,ch__$1,meta31515));
});

}

return (new cljs.core.async.t_cljs$core$async31514(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31521 = arguments.length;
switch (G__31521) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29557__auto___33136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (7))){
var inst_31539 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31545_33137 = state_31543__$1;
(statearr_31545_33137[(2)] = inst_31539);

(statearr_31545_33137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (1))){
var state_31543__$1 = state_31543;
var statearr_31546_33138 = state_31543__$1;
(statearr_31546_33138[(2)] = null);

(statearr_31546_33138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (4))){
var inst_31525 = (state_31543[(7)]);
var inst_31525__$1 = (state_31543[(2)]);
var inst_31526 = (inst_31525__$1 == null);
var state_31543__$1 = (function (){var statearr_31547 = state_31543;
(statearr_31547[(7)] = inst_31525__$1);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31526)){
var statearr_31548_33139 = state_31543__$1;
(statearr_31548_33139[(1)] = (5));

} else {
var statearr_31549_33140 = state_31543__$1;
(statearr_31549_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (6))){
var inst_31525 = (state_31543[(7)]);
var inst_31530 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31525) : p.call(null,inst_31525));
var state_31543__$1 = state_31543;
if(cljs.core.truth_(inst_31530)){
var statearr_31550_33142 = state_31543__$1;
(statearr_31550_33142[(1)] = (8));

} else {
var statearr_31551_33143 = state_31543__$1;
(statearr_31551_33143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (3))){
var inst_31541 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31543__$1,inst_31541);
} else {
if((state_val_31544 === (2))){
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31543__$1,(4),ch);
} else {
if((state_val_31544 === (11))){
var inst_31533 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31552_33144 = state_31543__$1;
(statearr_31552_33144[(2)] = inst_31533);

(statearr_31552_33144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (9))){
var state_31543__$1 = state_31543;
var statearr_31553_33145 = state_31543__$1;
(statearr_31553_33145[(2)] = null);

(statearr_31553_33145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (5))){
var inst_31528 = cljs.core.async.close_BANG_(out);
var state_31543__$1 = state_31543;
var statearr_31554_33146 = state_31543__$1;
(statearr_31554_33146[(2)] = inst_31528);

(statearr_31554_33146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (10))){
var inst_31536 = (state_31543[(2)]);
var state_31543__$1 = (function (){var statearr_31555 = state_31543;
(statearr_31555[(8)] = inst_31536);

return statearr_31555;
})();
var statearr_31556_33147 = state_31543__$1;
(statearr_31556_33147[(2)] = null);

(statearr_31556_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (8))){
var inst_31525 = (state_31543[(7)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31543__$1,(11),out,inst_31525);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31558 = [null,null,null,null,null,null,null,null,null];
(statearr_31558[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31558[(1)] = (1));

return statearr_31558;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31543){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31543);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31559){if((e31559 instanceof Object)){
var ex__29274__auto__ = e31559;
var statearr_31560_33152 = state_31543;
(statearr_31560_33152[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33154 = state_31543;
state_31543 = G__33154;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31561 = f__29558__auto__();
(statearr_31561[(6)] = c__29557__auto___33136);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31563 = arguments.length;
switch (G__31563) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29557__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31625){
var state_val_31626 = (state_31625[(1)]);
if((state_val_31626 === (7))){
var inst_31621 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31627_33186 = state_31625__$1;
(statearr_31627_33186[(2)] = inst_31621);

(statearr_31627_33186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (20))){
var inst_31591 = (state_31625[(7)]);
var inst_31602 = (state_31625[(2)]);
var inst_31603 = cljs.core.next(inst_31591);
var inst_31577 = inst_31603;
var inst_31578 = null;
var inst_31579 = (0);
var inst_31580 = (0);
var state_31625__$1 = (function (){var statearr_31632 = state_31625;
(statearr_31632[(8)] = inst_31577);

(statearr_31632[(9)] = inst_31578);

(statearr_31632[(10)] = inst_31580);

(statearr_31632[(11)] = inst_31602);

(statearr_31632[(12)] = inst_31579);

return statearr_31632;
})();
var statearr_31637_33200 = state_31625__$1;
(statearr_31637_33200[(2)] = null);

(statearr_31637_33200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (1))){
var state_31625__$1 = state_31625;
var statearr_31642_33205 = state_31625__$1;
(statearr_31642_33205[(2)] = null);

(statearr_31642_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (4))){
var inst_31566 = (state_31625[(13)]);
var inst_31566__$1 = (state_31625[(2)]);
var inst_31567 = (inst_31566__$1 == null);
var state_31625__$1 = (function (){var statearr_31644 = state_31625;
(statearr_31644[(13)] = inst_31566__$1);

return statearr_31644;
})();
if(cljs.core.truth_(inst_31567)){
var statearr_31645_33215 = state_31625__$1;
(statearr_31645_33215[(1)] = (5));

} else {
var statearr_31646_33217 = state_31625__$1;
(statearr_31646_33217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (15))){
var state_31625__$1 = state_31625;
var statearr_31650_33224 = state_31625__$1;
(statearr_31650_33224[(2)] = null);

(statearr_31650_33224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (21))){
var state_31625__$1 = state_31625;
var statearr_31653_33226 = state_31625__$1;
(statearr_31653_33226[(2)] = null);

(statearr_31653_33226[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (13))){
var inst_31577 = (state_31625[(8)]);
var inst_31578 = (state_31625[(9)]);
var inst_31580 = (state_31625[(10)]);
var inst_31579 = (state_31625[(12)]);
var inst_31587 = (state_31625[(2)]);
var inst_31588 = (inst_31580 + (1));
var tmp31647 = inst_31577;
var tmp31648 = inst_31578;
var tmp31649 = inst_31579;
var inst_31577__$1 = tmp31647;
var inst_31578__$1 = tmp31648;
var inst_31579__$1 = tmp31649;
var inst_31580__$1 = inst_31588;
var state_31625__$1 = (function (){var statearr_31654 = state_31625;
(statearr_31654[(8)] = inst_31577__$1);

(statearr_31654[(9)] = inst_31578__$1);

(statearr_31654[(10)] = inst_31580__$1);

(statearr_31654[(14)] = inst_31587);

(statearr_31654[(12)] = inst_31579__$1);

return statearr_31654;
})();
var statearr_31655_33239 = state_31625__$1;
(statearr_31655_33239[(2)] = null);

(statearr_31655_33239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (22))){
var state_31625__$1 = state_31625;
var statearr_31656_33240 = state_31625__$1;
(statearr_31656_33240[(2)] = null);

(statearr_31656_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (6))){
var inst_31566 = (state_31625[(13)]);
var inst_31575 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31566) : f.call(null,inst_31566));
var inst_31576 = cljs.core.seq(inst_31575);
var inst_31577 = inst_31576;
var inst_31578 = null;
var inst_31579 = (0);
var inst_31580 = (0);
var state_31625__$1 = (function (){var statearr_31657 = state_31625;
(statearr_31657[(8)] = inst_31577);

(statearr_31657[(9)] = inst_31578);

(statearr_31657[(10)] = inst_31580);

(statearr_31657[(12)] = inst_31579);

return statearr_31657;
})();
var statearr_31658_33241 = state_31625__$1;
(statearr_31658_33241[(2)] = null);

(statearr_31658_33241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (17))){
var inst_31591 = (state_31625[(7)]);
var inst_31595 = cljs.core.chunk_first(inst_31591);
var inst_31596 = cljs.core.chunk_rest(inst_31591);
var inst_31597 = cljs.core.count(inst_31595);
var inst_31577 = inst_31596;
var inst_31578 = inst_31595;
var inst_31579 = inst_31597;
var inst_31580 = (0);
var state_31625__$1 = (function (){var statearr_31659 = state_31625;
(statearr_31659[(8)] = inst_31577);

(statearr_31659[(9)] = inst_31578);

(statearr_31659[(10)] = inst_31580);

(statearr_31659[(12)] = inst_31579);

return statearr_31659;
})();
var statearr_31660_33246 = state_31625__$1;
(statearr_31660_33246[(2)] = null);

(statearr_31660_33246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (3))){
var inst_31623 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31625__$1,inst_31623);
} else {
if((state_val_31626 === (12))){
var inst_31611 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31661_33256 = state_31625__$1;
(statearr_31661_33256[(2)] = inst_31611);

(statearr_31661_33256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (2))){
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31625__$1,(4),in$);
} else {
if((state_val_31626 === (23))){
var inst_31619 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31664_33260 = state_31625__$1;
(statearr_31664_33260[(2)] = inst_31619);

(statearr_31664_33260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (19))){
var inst_31606 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31665_33261 = state_31625__$1;
(statearr_31665_33261[(2)] = inst_31606);

(statearr_31665_33261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (11))){
var inst_31577 = (state_31625[(8)]);
var inst_31591 = (state_31625[(7)]);
var inst_31591__$1 = cljs.core.seq(inst_31577);
var state_31625__$1 = (function (){var statearr_31667 = state_31625;
(statearr_31667[(7)] = inst_31591__$1);

return statearr_31667;
})();
if(inst_31591__$1){
var statearr_31668_33263 = state_31625__$1;
(statearr_31668_33263[(1)] = (14));

} else {
var statearr_31669_33264 = state_31625__$1;
(statearr_31669_33264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (9))){
var inst_31613 = (state_31625[(2)]);
var inst_31614 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31625__$1 = (function (){var statearr_31670 = state_31625;
(statearr_31670[(15)] = inst_31613);

return statearr_31670;
})();
if(cljs.core.truth_(inst_31614)){
var statearr_31671_33265 = state_31625__$1;
(statearr_31671_33265[(1)] = (21));

} else {
var statearr_31672_33266 = state_31625__$1;
(statearr_31672_33266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (5))){
var inst_31569 = cljs.core.async.close_BANG_(out);
var state_31625__$1 = state_31625;
var statearr_31673_33267 = state_31625__$1;
(statearr_31673_33267[(2)] = inst_31569);

(statearr_31673_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (14))){
var inst_31591 = (state_31625[(7)]);
var inst_31593 = cljs.core.chunked_seq_QMARK_(inst_31591);
var state_31625__$1 = state_31625;
if(inst_31593){
var statearr_31678_33269 = state_31625__$1;
(statearr_31678_33269[(1)] = (17));

} else {
var statearr_31681_33270 = state_31625__$1;
(statearr_31681_33270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (16))){
var inst_31609 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31684_33271 = state_31625__$1;
(statearr_31684_33271[(2)] = inst_31609);

(statearr_31684_33271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (10))){
var inst_31578 = (state_31625[(9)]);
var inst_31580 = (state_31625[(10)]);
var inst_31585 = cljs.core._nth(inst_31578,inst_31580);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31625__$1,(13),out,inst_31585);
} else {
if((state_val_31626 === (18))){
var inst_31591 = (state_31625[(7)]);
var inst_31600 = cljs.core.first(inst_31591);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31625__$1,(20),out,inst_31600);
} else {
if((state_val_31626 === (8))){
var inst_31580 = (state_31625[(10)]);
var inst_31579 = (state_31625[(12)]);
var inst_31582 = (inst_31580 < inst_31579);
var inst_31583 = inst_31582;
var state_31625__$1 = state_31625;
if(cljs.core.truth_(inst_31583)){
var statearr_31685_33274 = state_31625__$1;
(statearr_31685_33274[(1)] = (10));

} else {
var statearr_31688_33275 = state_31625__$1;
(statearr_31688_33275[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____0 = (function (){
var statearr_31692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31692[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__);

(statearr_31692[(1)] = (1));

return statearr_31692;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____1 = (function (state_31625){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31625);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31693){if((e31693 instanceof Object)){
var ex__29274__auto__ = e31693;
var statearr_31694_33284 = state_31625;
(statearr_31694_33284[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33286 = state_31625;
state_31625 = G__33286;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__ = function(state_31625){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____1.call(this,state_31625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29271__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31698 = f__29558__auto__();
(statearr_31698[(6)] = c__29557__auto__);

return statearr_31698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));

return c__29557__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31702 = arguments.length;
switch (G__31702) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31709 = arguments.length;
switch (G__31709) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31720 = arguments.length;
switch (G__31720) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29557__auto___33342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31746){
var state_val_31747 = (state_31746[(1)]);
if((state_val_31747 === (7))){
var inst_31741 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31748_33343 = state_31746__$1;
(statearr_31748_33343[(2)] = inst_31741);

(statearr_31748_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (1))){
var inst_31723 = null;
var state_31746__$1 = (function (){var statearr_31749 = state_31746;
(statearr_31749[(7)] = inst_31723);

return statearr_31749;
})();
var statearr_31754_33344 = state_31746__$1;
(statearr_31754_33344[(2)] = null);

(statearr_31754_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (4))){
var inst_31726 = (state_31746[(8)]);
var inst_31726__$1 = (state_31746[(2)]);
var inst_31727 = (inst_31726__$1 == null);
var inst_31728 = cljs.core.not(inst_31727);
var state_31746__$1 = (function (){var statearr_31757 = state_31746;
(statearr_31757[(8)] = inst_31726__$1);

return statearr_31757;
})();
if(inst_31728){
var statearr_31758_33348 = state_31746__$1;
(statearr_31758_33348[(1)] = (5));

} else {
var statearr_31759_33354 = state_31746__$1;
(statearr_31759_33354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (6))){
var state_31746__$1 = state_31746;
var statearr_31763_33359 = state_31746__$1;
(statearr_31763_33359[(2)] = null);

(statearr_31763_33359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (3))){
var inst_31743 = (state_31746[(2)]);
var inst_31744 = cljs.core.async.close_BANG_(out);
var state_31746__$1 = (function (){var statearr_31765 = state_31746;
(statearr_31765[(9)] = inst_31743);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31746__$1,inst_31744);
} else {
if((state_val_31747 === (2))){
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31746__$1,(4),ch);
} else {
if((state_val_31747 === (11))){
var inst_31726 = (state_31746[(8)]);
var inst_31735 = (state_31746[(2)]);
var inst_31723 = inst_31726;
var state_31746__$1 = (function (){var statearr_31772 = state_31746;
(statearr_31772[(10)] = inst_31735);

(statearr_31772[(7)] = inst_31723);

return statearr_31772;
})();
var statearr_31773_33366 = state_31746__$1;
(statearr_31773_33366[(2)] = null);

(statearr_31773_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (9))){
var inst_31726 = (state_31746[(8)]);
var state_31746__$1 = state_31746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31746__$1,(11),out,inst_31726);
} else {
if((state_val_31747 === (5))){
var inst_31723 = (state_31746[(7)]);
var inst_31726 = (state_31746[(8)]);
var inst_31730 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31726,inst_31723);
var state_31746__$1 = state_31746;
if(inst_31730){
var statearr_31777_33372 = state_31746__$1;
(statearr_31777_33372[(1)] = (8));

} else {
var statearr_31779_33373 = state_31746__$1;
(statearr_31779_33373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (10))){
var inst_31738 = (state_31746[(2)]);
var state_31746__$1 = state_31746;
var statearr_31781_33380 = state_31746__$1;
(statearr_31781_33380[(2)] = inst_31738);

(statearr_31781_33380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31747 === (8))){
var inst_31723 = (state_31746[(7)]);
var tmp31776 = inst_31723;
var inst_31723__$1 = tmp31776;
var state_31746__$1 = (function (){var statearr_31783 = state_31746;
(statearr_31783[(7)] = inst_31723__$1);

return statearr_31783;
})();
var statearr_31784_33385 = state_31746__$1;
(statearr_31784_33385[(2)] = null);

(statearr_31784_33385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31785[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31785[(1)] = (1));

return statearr_31785;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31746){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31746);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31786){if((e31786 instanceof Object)){
var ex__29274__auto__ = e31786;
var statearr_31787_33392 = state_31746;
(statearr_31787_33392[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33394 = state_31746;
state_31746 = G__33394;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31795 = f__29558__auto__();
(statearr_31795[(6)] = c__29557__auto___33342);

return statearr_31795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31806 = arguments.length;
switch (G__31806) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29557__auto___33397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31851){
var state_val_31852 = (state_31851[(1)]);
if((state_val_31852 === (7))){
var inst_31847 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31857_33398 = state_31851__$1;
(statearr_31857_33398[(2)] = inst_31847);

(statearr_31857_33398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (1))){
var inst_31813 = (new Array(n));
var inst_31814 = inst_31813;
var inst_31815 = (0);
var state_31851__$1 = (function (){var statearr_31858 = state_31851;
(statearr_31858[(7)] = inst_31815);

(statearr_31858[(8)] = inst_31814);

return statearr_31858;
})();
var statearr_31859_33402 = state_31851__$1;
(statearr_31859_33402[(2)] = null);

(statearr_31859_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (4))){
var inst_31819 = (state_31851[(9)]);
var inst_31819__$1 = (state_31851[(2)]);
var inst_31820 = (inst_31819__$1 == null);
var inst_31821 = cljs.core.not(inst_31820);
var state_31851__$1 = (function (){var statearr_31861 = state_31851;
(statearr_31861[(9)] = inst_31819__$1);

return statearr_31861;
})();
if(inst_31821){
var statearr_31867_33403 = state_31851__$1;
(statearr_31867_33403[(1)] = (5));

} else {
var statearr_31869_33404 = state_31851__$1;
(statearr_31869_33404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (15))){
var inst_31841 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31874_33409 = state_31851__$1;
(statearr_31874_33409[(2)] = inst_31841);

(statearr_31874_33409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (13))){
var state_31851__$1 = state_31851;
var statearr_31875_33410 = state_31851__$1;
(statearr_31875_33410[(2)] = null);

(statearr_31875_33410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (6))){
var inst_31815 = (state_31851[(7)]);
var inst_31837 = (inst_31815 > (0));
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31837)){
var statearr_31880_33411 = state_31851__$1;
(statearr_31880_33411[(1)] = (12));

} else {
var statearr_31881_33412 = state_31851__$1;
(statearr_31881_33412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (3))){
var inst_31849 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31851__$1,inst_31849);
} else {
if((state_val_31852 === (12))){
var inst_31814 = (state_31851[(8)]);
var inst_31839 = cljs.core.vec(inst_31814);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31851__$1,(15),out,inst_31839);
} else {
if((state_val_31852 === (2))){
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31851__$1,(4),ch);
} else {
if((state_val_31852 === (11))){
var inst_31831 = (state_31851[(2)]);
var inst_31832 = (new Array(n));
var inst_31814 = inst_31832;
var inst_31815 = (0);
var state_31851__$1 = (function (){var statearr_31882 = state_31851;
(statearr_31882[(7)] = inst_31815);

(statearr_31882[(8)] = inst_31814);

(statearr_31882[(10)] = inst_31831);

return statearr_31882;
})();
var statearr_31883_33413 = state_31851__$1;
(statearr_31883_33413[(2)] = null);

(statearr_31883_33413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (9))){
var inst_31814 = (state_31851[(8)]);
var inst_31829 = cljs.core.vec(inst_31814);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31851__$1,(11),out,inst_31829);
} else {
if((state_val_31852 === (5))){
var inst_31815 = (state_31851[(7)]);
var inst_31814 = (state_31851[(8)]);
var inst_31824 = (state_31851[(11)]);
var inst_31819 = (state_31851[(9)]);
var inst_31823 = (inst_31814[inst_31815] = inst_31819);
var inst_31824__$1 = (inst_31815 + (1));
var inst_31825 = (inst_31824__$1 < n);
var state_31851__$1 = (function (){var statearr_31884 = state_31851;
(statearr_31884[(12)] = inst_31823);

(statearr_31884[(11)] = inst_31824__$1);

return statearr_31884;
})();
if(cljs.core.truth_(inst_31825)){
var statearr_31885_33418 = state_31851__$1;
(statearr_31885_33418[(1)] = (8));

} else {
var statearr_31886_33419 = state_31851__$1;
(statearr_31886_33419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (14))){
var inst_31844 = (state_31851[(2)]);
var inst_31845 = cljs.core.async.close_BANG_(out);
var state_31851__$1 = (function (){var statearr_31892 = state_31851;
(statearr_31892[(13)] = inst_31844);

return statearr_31892;
})();
var statearr_31893_33420 = state_31851__$1;
(statearr_31893_33420[(2)] = inst_31845);

(statearr_31893_33420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (10))){
var inst_31835 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31897_33421 = state_31851__$1;
(statearr_31897_33421[(2)] = inst_31835);

(statearr_31897_33421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (8))){
var inst_31814 = (state_31851[(8)]);
var inst_31824 = (state_31851[(11)]);
var tmp31891 = inst_31814;
var inst_31814__$1 = tmp31891;
var inst_31815 = inst_31824;
var state_31851__$1 = (function (){var statearr_31900 = state_31851;
(statearr_31900[(7)] = inst_31815);

(statearr_31900[(8)] = inst_31814__$1);

return statearr_31900;
})();
var statearr_31901_33422 = state_31851__$1;
(statearr_31901_33422[(2)] = null);

(statearr_31901_33422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_31905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31905[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_31905[(1)] = (1));

return statearr_31905;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31851){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31851);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e31912){if((e31912 instanceof Object)){
var ex__29274__auto__ = e31912;
var statearr_31913_33427 = state_31851;
(statearr_31913_33427[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33428 = state_31851;
state_31851 = G__33428;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_31922 = f__29558__auto__();
(statearr_31922[(6)] = c__29557__auto___33397);

return statearr_31922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31935 = arguments.length;
switch (G__31935) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29557__auto___33433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29558__auto__ = (function (){var switch__29270__auto__ = (function (state_31984){
var state_val_31985 = (state_31984[(1)]);
if((state_val_31985 === (7))){
var inst_31980 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
var statearr_31997_33434 = state_31984__$1;
(statearr_31997_33434[(2)] = inst_31980);

(statearr_31997_33434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (1))){
var inst_31940 = [];
var inst_31941 = inst_31940;
var inst_31942 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31984__$1 = (function (){var statearr_32002 = state_31984;
(statearr_32002[(7)] = inst_31942);

(statearr_32002[(8)] = inst_31941);

return statearr_32002;
})();
var statearr_32003_33435 = state_31984__$1;
(statearr_32003_33435[(2)] = null);

(statearr_32003_33435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (4))){
var inst_31945 = (state_31984[(9)]);
var inst_31945__$1 = (state_31984[(2)]);
var inst_31946 = (inst_31945__$1 == null);
var inst_31947 = cljs.core.not(inst_31946);
var state_31984__$1 = (function (){var statearr_32006 = state_31984;
(statearr_32006[(9)] = inst_31945__$1);

return statearr_32006;
})();
if(inst_31947){
var statearr_32008_33439 = state_31984__$1;
(statearr_32008_33439[(1)] = (5));

} else {
var statearr_32010_33440 = state_31984__$1;
(statearr_32010_33440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (15))){
var inst_31974 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
var statearr_32011_33441 = state_31984__$1;
(statearr_32011_33441[(2)] = inst_31974);

(statearr_32011_33441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (13))){
var state_31984__$1 = state_31984;
var statearr_32012_33442 = state_31984__$1;
(statearr_32012_33442[(2)] = null);

(statearr_32012_33442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (6))){
var inst_31941 = (state_31984[(8)]);
var inst_31969 = inst_31941.length;
var inst_31970 = (inst_31969 > (0));
var state_31984__$1 = state_31984;
if(cljs.core.truth_(inst_31970)){
var statearr_32013_33443 = state_31984__$1;
(statearr_32013_33443[(1)] = (12));

} else {
var statearr_32014_33444 = state_31984__$1;
(statearr_32014_33444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (3))){
var inst_31982 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31984__$1,inst_31982);
} else {
if((state_val_31985 === (12))){
var inst_31941 = (state_31984[(8)]);
var inst_31972 = cljs.core.vec(inst_31941);
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31984__$1,(15),out,inst_31972);
} else {
if((state_val_31985 === (2))){
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31984__$1,(4),ch);
} else {
if((state_val_31985 === (11))){
var inst_31945 = (state_31984[(9)]);
var inst_31949 = (state_31984[(10)]);
var inst_31960 = (state_31984[(2)]);
var inst_31962 = [];
var inst_31963 = inst_31962.push(inst_31945);
var inst_31941 = inst_31962;
var inst_31942 = inst_31949;
var state_31984__$1 = (function (){var statearr_32021 = state_31984;
(statearr_32021[(11)] = inst_31963);

(statearr_32021[(12)] = inst_31960);

(statearr_32021[(7)] = inst_31942);

(statearr_32021[(8)] = inst_31941);

return statearr_32021;
})();
var statearr_32023_33445 = state_31984__$1;
(statearr_32023_33445[(2)] = null);

(statearr_32023_33445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (9))){
var inst_31941 = (state_31984[(8)]);
var inst_31958 = cljs.core.vec(inst_31941);
var state_31984__$1 = state_31984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31984__$1,(11),out,inst_31958);
} else {
if((state_val_31985 === (5))){
var inst_31945 = (state_31984[(9)]);
var inst_31942 = (state_31984[(7)]);
var inst_31949 = (state_31984[(10)]);
var inst_31949__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31945) : f.call(null,inst_31945));
var inst_31950 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31949__$1,inst_31942);
var inst_31952 = cljs.core.keyword_identical_QMARK_(inst_31942,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31953 = ((inst_31950) || (inst_31952));
var state_31984__$1 = (function (){var statearr_32030 = state_31984;
(statearr_32030[(10)] = inst_31949__$1);

return statearr_32030;
})();
if(cljs.core.truth_(inst_31953)){
var statearr_32031_33446 = state_31984__$1;
(statearr_32031_33446[(1)] = (8));

} else {
var statearr_32032_33449 = state_31984__$1;
(statearr_32032_33449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (14))){
var inst_31977 = (state_31984[(2)]);
var inst_31978 = cljs.core.async.close_BANG_(out);
var state_31984__$1 = (function (){var statearr_32037 = state_31984;
(statearr_32037[(13)] = inst_31977);

return statearr_32037;
})();
var statearr_32040_33451 = state_31984__$1;
(statearr_32040_33451[(2)] = inst_31978);

(statearr_32040_33451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (10))){
var inst_31966 = (state_31984[(2)]);
var state_31984__$1 = state_31984;
var statearr_32046_33455 = state_31984__$1;
(statearr_32046_33455[(2)] = inst_31966);

(statearr_32046_33455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31985 === (8))){
var inst_31945 = (state_31984[(9)]);
var inst_31949 = (state_31984[(10)]);
var inst_31941 = (state_31984[(8)]);
var inst_31955 = inst_31941.push(inst_31945);
var tmp32033 = inst_31941;
var inst_31941__$1 = tmp32033;
var inst_31942 = inst_31949;
var state_31984__$1 = (function (){var statearr_32050 = state_31984;
(statearr_32050[(14)] = inst_31955);

(statearr_32050[(7)] = inst_31942);

(statearr_32050[(8)] = inst_31941__$1);

return statearr_32050;
})();
var statearr_32054_33456 = state_31984__$1;
(statearr_32054_33456[(2)] = null);

(statearr_32054_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29271__auto__ = null;
var cljs$core$async$state_machine__29271__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$state_machine__29271__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$state_machine__29271__auto____1 = (function (state_31984){
while(true){
var ret_value__29272__auto__ = (function (){try{while(true){
var result__29273__auto__ = switch__29270__auto__(state_31984);
if(cljs.core.keyword_identical_QMARK_(result__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29273__auto__;
}
break;
}
}catch (e32063){if((e32063 instanceof Object)){
var ex__29274__auto__ = e32063;
var statearr_32064_33462 = state_31984;
(statearr_32064_33462[(5)] = ex__29274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33466 = state_31984;
state_31984 = G__33466;
continue;
} else {
return ret_value__29272__auto__;
}
break;
}
});
cljs$core$async$state_machine__29271__auto__ = function(state_31984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29271__auto____1.call(this,state_31984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29271__auto____0;
cljs$core$async$state_machine__29271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29271__auto____1;
return cljs$core$async$state_machine__29271__auto__;
})()
})();
var state__29559__auto__ = (function (){var statearr_32069 = f__29558__auto__();
(statearr_32069[(6)] = c__29557__auto___33433);

return statearr_32069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29559__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
