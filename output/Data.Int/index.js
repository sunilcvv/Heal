// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Boolean = require("../Data.Boolean");
var Data_Bounded = require("../Data.Bounded");
var Data_CommutativeRing = require("../Data.CommutativeRing");
var Data_DivisionRing = require("../Data.DivisionRing");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Field = require("../Data.Field");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Int_Bits = require("../Data.Int.Bits");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Ring = require("../Data.Ring");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Global = require("../Global");
var $$Math = require("../Math");
var Prelude = require("../Prelude");
var Radix = function (x) {
    return x;
};
var Even = (function () {
    function Even() {

    };
    Even.value = new Even();
    return Even;
})();
var Odd = (function () {
    function Odd() {

    };
    Odd.value = new Odd();
    return Odd;
})();
var showParity = new Data_Show.Show(function (v) {
    if (v instanceof Even) {
        return "Even";
    };
    if (v instanceof Odd) {
        return "Odd";
    };
    throw new Error("Failed pattern match at Data.Int line 110, column 1 - line 110, column 35: " + [ v.constructor.name ]);
});
var radix = function (n) {
    if (n >= 2 && n <= 36) {
        return new Data_Maybe.Just(n);
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Int line 193, column 1 - line 193, column 28: " + [ n.constructor.name ]);
};
var odd = function (x) {
    return (x & 1) !== 0;
};
var octal = 8;
var hexadecimal = 16;
var fromStringAs = $foreign.fromStringAsImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var fromString = fromStringAs(10);
var fromNumber = $foreign.fromNumberImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var unsafeClamp = function (x) {
    if (x === Global.infinity) {
        return 0;
    };
    if (x === -Global.infinity) {
        return 0;
    };
    if (x >= $foreign.toNumber(Data_Bounded.top(Data_Bounded.boundedInt))) {
        return Data_Bounded.top(Data_Bounded.boundedInt);
    };
    if (x <= $foreign.toNumber(Data_Bounded.bottom(Data_Bounded.boundedInt))) {
        return Data_Bounded.bottom(Data_Bounded.boundedInt);
    };
    if (Data_Boolean.otherwise) {
        return Data_Maybe.fromMaybe(0)(fromNumber(x));
    };
    throw new Error("Failed pattern match at Data.Int line 64, column 1 - line 64, column 29: " + [ x.constructor.name ]);
};
var round = function ($23) {
    return unsafeClamp($$Math.round($23));
};
var floor = function ($24) {
    return unsafeClamp($$Math.floor($24));
};
var even = function (x) {
    return (x & 1) === 0;
};
var parity = function (n) {
    var $14 = even(n);
    if ($14) {
        return Even.value;
    };
    return Odd.value;
};
var eqParity = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Even && y instanceof Even) {
            return true;
        };
        if (x instanceof Odd && y instanceof Odd) {
            return true;
        };
        return false;
    };
});
var ordParity = new Data_Ord.Ord(function () {
    return eqParity;
}, function (x) {
    return function (y) {
        if (x instanceof Even && y instanceof Even) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Even) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Even) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Odd && y instanceof Odd) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Data.Int line 108, column 8 - line 108, column 40: " + [ x.constructor.name, y.constructor.name ]);
    };
});
var semiringParity = new Data_Semiring.Semiring(function (x) {
    return function (y) {
        var $19 = Data_Eq.eq(eqParity)(x)(y);
        if ($19) {
            return Even.value;
        };
        return Odd.value;
    };
}, function (v) {
    return function (v1) {
        if (v instanceof Odd && v1 instanceof Odd) {
            return Odd.value;
        };
        return Even.value;
    };
}, Odd.value, Even.value);
var ringParity = new Data_Ring.Ring(function () {
    return semiringParity;
}, Data_Semiring.add(semiringParity));
var divisionRingParity = new Data_DivisionRing.DivisionRing(function () {
    return ringParity;
}, Control_Category.id(Control_Category.categoryFn));
var decimal = 10;
var commutativeRingParity = new Data_CommutativeRing.CommutativeRing(function () {
    return ringParity;
});
var euclideanRingParity = new Data_EuclideanRing.EuclideanRing(function () {
    return commutativeRingParity;
}, function (v) {
    if (v instanceof Even) {
        return 0;
    };
    if (v instanceof Odd) {
        return 1;
    };
    throw new Error("Failed pattern match at Data.Int line 130, column 1 - line 130, column 53: " + [ v.constructor.name ]);
}, function (x) {
    return function (v) {
        return x;
    };
}, function (v) {
    return function (v1) {
        return Even.value;
    };
});
var fieldParity = new Data_Field.Field(function () {
    return euclideanRingParity;
});
var ceil = function ($25) {
    return unsafeClamp($$Math.ceil($25));
};
var boundedParity = new Data_Bounded.Bounded(function () {
    return ordParity;
}, Even.value, Odd.value);
var binary = 2;
var base36 = 36;
module.exports = {
    Even: Even, 
    Odd: Odd, 
    base36: base36, 
    binary: binary, 
    ceil: ceil, 
    decimal: decimal, 
    even: even, 
    floor: floor, 
    fromNumber: fromNumber, 
    fromString: fromString, 
    fromStringAs: fromStringAs, 
    hexadecimal: hexadecimal, 
    octal: octal, 
    odd: odd, 
    parity: parity, 
    radix: radix, 
    round: round, 
    eqParity: eqParity, 
    ordParity: ordParity, 
    showParity: showParity, 
    boundedParity: boundedParity, 
    semiringParity: semiringParity, 
    ringParity: ringParity, 
    commutativeRingParity: commutativeRingParity, 
    euclideanRingParity: euclideanRingParity, 
    divisionRingParity: divisionRingParity, 
    fieldParity: fieldParity, 
    pow: $foreign.pow, 
    toNumber: $foreign.toNumber, 
    toStringAs: $foreign.toStringAs
};
