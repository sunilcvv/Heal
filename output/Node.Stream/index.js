// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Unsafe = require("../Control.Monad.Eff.Unsafe");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Show = require("../Data.Show");
var Node_Buffer = require("../Node.Buffer");
var Node_Encoding = require("../Node.Encoding");
var Prelude = require("../Prelude");
var writeString = function (w) {
    return function (enc) {
        return $foreign.writeStringImpl(w)(Data_Show.show(Node_Encoding.showEncoding)(enc));
    };
};
var setEncoding = function (r) {
    return function (enc) {
        return $foreign.setEncodingImpl(r)(Data_Show.show(Node_Encoding.showEncoding)(enc));
    };
};
var setDefaultEncoding = function (r) {
    return function (enc) {
        return $foreign.setDefaultEncodingImpl(r)(Data_Show.show(Node_Encoding.showEncoding)(enc));
    };
};
var readChunk = $foreign.readChunkImpl(Data_Either.Left.create)(Data_Either.Right.create);
var readEither = function (r) {
    return function (size) {
        return $foreign.readImpl(readChunk)(Data_Maybe.Nothing.value)(Data_Maybe.Just.create)(r)(Data_Maybe.fromMaybe($foreign["undefined"])(size));
    };
};
var readString = function (r) {
    return function (size) {
        return function (enc) {
            return function __do() {
                var v = readEither(r)(size)();
                if (v instanceof Data_Maybe.Nothing) {
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_Maybe.Just && v.value0 instanceof Data_Either.Left) {
                    return Control_Monad_Eff_Exception["throw"]("Stream encoding should not be set")();
                };
                if (v instanceof Data_Maybe.Just && v.value0 instanceof Data_Either.Right) {
                    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Maybe.Just.create)(Control_Monad_Eff_Unsafe.unsafeCoerceEff(Node_Buffer.toString(enc)(v.value0.value0)))();
                };
                throw new Error("Failed pattern match at Node.Stream line 121, column 3 - line 124, column 80: " + [ v.constructor.name ]);
            };
        };
    };
};
var read = function (r) {
    return function (size) {
        return function __do() {
            var v = readEither(r)(size)();
            if (v instanceof Data_Maybe.Nothing) {
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Data_Maybe.Just && v.value0 instanceof Data_Either.Left) {
                return Control_Monad_Eff_Exception["throw"]("Stream encoding should not be set")();
            };
            if (v instanceof Data_Maybe.Just && v.value0 instanceof Data_Either.Right) {
                return new Data_Maybe.Just(v.value0.value0);
            };
            throw new Error("Failed pattern match at Node.Stream line 108, column 3 - line 111, column 36: " + [ v.constructor.name ]);
        };
    };
};
var onDataEither = function (r) {
    return function (cb) {
        return $foreign.onDataEitherImpl(readChunk)(r)(cb);
    };
};
var onData = function (r) {
    return function (cb) {
        var fromEither = function (x) {
            if (x instanceof Data_Either.Left) {
                return Control_Monad_Eff_Exception["throw"]("Stream encoding should not be set");
            };
            if (x instanceof Data_Either.Right) {
                return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(x.value0);
            };
            throw new Error("Failed pattern match at Node.Stream line 95, column 5 - line 99, column 17: " + [ x.constructor.name ]);
        };
        return onDataEither(r)(Control_Bind.composeKleisliFlipped(Control_Monad_Eff.bindEff)(cb)(fromEither));
    };
};
var onDataString = function (r) {
    return function (enc) {
        return function (cb) {
            return onData(r)(Control_Bind.composeKleisliFlipped(Control_Monad_Eff.bindEff)(cb)(function ($17) {
                return Control_Monad_Eff_Unsafe.unsafeCoerceEff(Node_Buffer.toString(enc)($17));
            }));
        };
    };
};
module.exports = {
    onData: onData, 
    onDataEither: onDataEither, 
    onDataString: onDataString, 
    read: read, 
    readEither: readEither, 
    readString: readString, 
    setDefaultEncoding: setDefaultEncoding, 
    setEncoding: setEncoding, 
    writeString: writeString, 
    cork: $foreign.cork, 
    destroy: $foreign.destroy, 
    end: $foreign.end, 
    isPaused: $foreign.isPaused, 
    onClose: $foreign.onClose, 
    onEnd: $foreign.onEnd, 
    onError: $foreign.onError, 
    onFinish: $foreign.onFinish, 
    onReadable: $foreign.onReadable, 
    pause: $foreign.pause, 
    pipe: $foreign.pipe, 
    resume: $foreign.resume, 
    uncork: $foreign.uncork, 
    unpipe: $foreign.unpipe, 
    unpipeAll: $foreign.unpipeAll, 
    write: $foreign.write
};
