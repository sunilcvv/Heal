// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Array = require("../Data.Array");
var Data_Char = require("../Data.Char");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_String_Unsafe = require("../Data.String.Unsafe");
var Data_Tuple = require("../Data.Tuple");
var Data_Unfoldable = require("../Data.Unfoldable");
var Prelude = require("../Prelude");
var CodePoint = function (x) {
    return x;
};
var unsurrogate = function (lead) {
    return function (trail) {
        return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
    };
};
var showCodePoint = new Data_Show.Show(function (v) {
    return "(CodePoint 0x" + (Data_String.toUpper(Data_Int.toStringAs(Data_Int.hexadecimal)(v)) + ")");
});
var isTrail = function (cu) {
    return 56320 <= cu && cu <= 57343;
};
var isLead = function (cu) {
    return 55296 <= cu && cu <= 56319;
};
var uncons = function (s) {
    var v = Data_String.length(s);
    if (v === 0) {
        return Data_Maybe.Nothing.value;
    };
    if (v === 1) {
        return new Data_Maybe.Just({
            head: Data_String_Unsafe.charCodeAt(0)(s), 
            tail: ""
        });
    };
    var cu0 = Data_String_Unsafe.charCodeAt(0)(s);
    var cu1 = Data_String_Unsafe.charCodeAt(1)(s);
    var $21 = isLead(cu0) && isTrail(cu1);
    if ($21) {
        return new Data_Maybe.Just({
            head: unsurrogate(cu0)(cu1), 
            tail: Data_String.drop(2)(s)
        });
    };
    return new Data_Maybe.Just({
        head: cu0, 
        tail: Data_String.drop(1)(s)
    });
};
var unconsButWithTuple = function (s) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return new Data_Tuple.Tuple(v.head, v.tail);
    })(uncons(s));
};
var toCodePointArrayFallback = function (s) {
    return Data_Unfoldable.unfoldr(Data_Unfoldable.unfoldableArray)(unconsButWithTuple)(s);
};
var unsafeCodePointAt0Fallback = function (s) {
    var cu0 = Data_String_Unsafe.charCodeAt(0)(s);
    var cu1 = Data_String_Unsafe.charCodeAt(1)(s);
    var $25 = isLead(cu0) && isTrail(cu1);
    if ($25) {
        return unsurrogate(cu0)(cu1);
    };
    return cu0;
};
var unsafeCodePointAt0 = $foreign._unsafeCodePointAt0(unsafeCodePointAt0Fallback);
var toCodePointArray = $foreign._toCodePointArray(toCodePointArrayFallback)(unsafeCodePointAt0);
var length = function ($52) {
    return Data_Array.length(toCodePointArray($52));
};
var lastIndexOf = function (p) {
    return function (s) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (i) {
            return length(Data_String.take(i)(s));
        })(Data_String.lastIndexOf(p)(s));
    };
};
var indexOf = function (p) {
    return function (s) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (i) {
            return length(Data_String.take(i)(s));
        })(Data_String.indexOf(p)(s));
    };
};
var fromCharCode = function ($53) {
    return Data_String.singleton(Data_Char.fromCharCode($53));
};
var singletonFallback = function (v) {
    if (v <= 65535) {
        return fromCharCode(v);
    };
    var lead = ((v - 65536 | 0) / 1024 | 0) + 55296 | 0;
    var trail = (v - 65536 | 0) % 1024 + 56320 | 0;
    return fromCharCode(lead) + fromCharCode(trail);
};
var fromCodePointArray = $foreign._fromCodePointArray(singletonFallback);
var splitAt = function (i) {
    return function (s) {
        var cps = toCodePointArray(s);
        var $27 = i < 0 || Data_Array.length(cps) < i;
        if ($27) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just({
            before: fromCodePointArray(Data_Array.take(i)(cps)), 
            after: fromCodePointArray(Data_Array.drop(i)(cps))
        });
    };
};
var singleton = $foreign._singleton(singletonFallback);
var takeFallback = function (n) {
    return function (v) {
        if (n < 1) {
            return "";
        };
        var v1 = uncons(v);
        if (v1 instanceof Data_Maybe.Just) {
            return singleton(v1.value0.head) + takeFallback(n - 1 | 0)(v1.value0.tail);
        };
        return v;
    };
};
var take = $foreign._take(takeFallback);
var lastIndexOf$prime = function (p) {
    return function (i) {
        return function (s) {
            var i$prime = Data_String.length(take(i)(s));
            return Data_Functor.map(Data_Maybe.functorMaybe)(function (k) {
                return length(Data_String.take(k)(s));
            })(Data_String["lastIndexOf'"](p)(i$prime)(s));
        };
    };
};
var eqCodePoint = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordCodePoint = new Data_Ord.Ord(function () {
    return eqCodePoint;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
var drop = function (n) {
    return function (s) {
        return Data_String.drop(Data_String.length(take(n)(s)))(s);
    };
};
var indexOf$prime = function (p) {
    return function (i) {
        return function (s) {
            var s$prime = drop(i)(s);
            return Data_Functor.map(Data_Maybe.functorMaybe)(function (k) {
                return i + length(Data_String.take(k)(s$prime)) | 0;
            })(Data_String.indexOf(p)(s$prime));
        };
    };
};
var countTail = function ($copy_p) {
    return function ($copy_s) {
        return function ($copy_accum) {
            var $tco_var_p = $copy_p;
            var $tco_var_s = $copy_s;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(p, s, accum) {
                var v = uncons(s);
                if (v instanceof Data_Maybe.Just) {
                    var $39 = p(v.value0.head);
                    if ($39) {
                        $tco_var_p = p;
                        $tco_var_s = v.value0.tail;
                        $copy_accum = accum + 1 | 0;
                        return;
                    };
                    $tco_done = true;
                    return accum;
                };
                $tco_done = true;
                return accum;
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_p, $tco_var_s, $copy_accum);
            };
            return $tco_result;
        };
    };
};
var countFallback = function (p) {
    return function (s) {
        return countTail(p)(s)(0);
    };
};
var count = $foreign._count(countFallback)(unsafeCodePointAt0);
var dropWhile = function (p) {
    return function (s) {
        return drop(count(p)(s))(s);
    };
};
var takeWhile = function (p) {
    return function (s) {
        return take(count(p)(s))(s);
    };
};
var codePointToInt = function (v) {
    return v;
};
var codePointFromInt = function (n) {
    if (0 <= n && n <= 1114111) {
        return new Data_Maybe.Just(n);
    };
    return Data_Maybe.Nothing.value;
};
var codePointFromChar = function ($54) {
    return CodePoint(Data_Char.toCharCode($54));
};
var codePointAtFallback = function ($copy_n) {
    return function ($copy_s) {
        var $tco_var_n = $copy_n;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(n, s) {
            var v = uncons(s);
            if (v instanceof Data_Maybe.Just) {
                var $46 = n === 0;
                if ($46) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0.head);
                };
                $tco_var_n = n - 1 | 0;
                $copy_s = v.value0.tail;
                return;
            };
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_n, $copy_s);
        };
        return $tco_result;
    };
};
var codePointAt = function (v) {
    return function (v1) {
        if (v < 0) {
            return Data_Maybe.Nothing.value;
        };
        if (v === 0 && v1 === "") {
            return Data_Maybe.Nothing.value;
        };
        if (v === 0) {
            return new Data_Maybe.Just(unsafeCodePointAt0(v1));
        };
        return $foreign._codePointAt(codePointAtFallback)(Data_Maybe.Just.create)(Data_Maybe.Nothing.value)(unsafeCodePointAt0)(v)(v1);
    };
};
module.exports = {
    codePointAt: codePointAt, 
    codePointFromChar: codePointFromChar, 
    codePointFromInt: codePointFromInt, 
    codePointToInt: codePointToInt, 
    count: count, 
    drop: drop, 
    dropWhile: dropWhile, 
    fromCodePointArray: fromCodePointArray, 
    indexOf: indexOf, 
    "indexOf'": indexOf$prime, 
    lastIndexOf: lastIndexOf, 
    "lastIndexOf'": lastIndexOf$prime, 
    length: length, 
    singleton: singleton, 
    splitAt: splitAt, 
    take: take, 
    takeWhile: takeWhile, 
    toCodePointArray: toCodePointArray, 
    uncons: uncons, 
    eqCodePoint: eqCodePoint, 
    ordCodePoint: ordCodePoint, 
    showCodePoint: showCodePoint
};
