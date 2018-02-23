// Generated by purs version 0.11.6
"use strict";
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_AVar = require("../Control.Monad.Aff.AVar");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Timer = require("../Control.Monad.Eff.Timer");
var Control_Monad_State = require("../Control.Monad.State");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Identity = require("../Data.Identity");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_Traversable = require("../Data.Traversable");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Success = (function () {
    function Success() {

    };
    Success.value = new Success();
    return Success;
})();
var Failure = (function () {
    function Failure(value0) {
        this.value0 = value0;
    };
    Failure.create = function (value0) {
        return new Failure(value0);
    };
    return Failure;
})();
var Describe = (function () {
    function Describe(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Describe.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Describe(value0, value1, value2);
            };
        };
    };
    return Describe;
})();
var It = (function () {
    function It(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    It.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new It(value0, value1, value2);
            };
        };
    };
    return It;
})();
var Pending = (function () {
    function Pending(value0) {
        this.value0 = value0;
    };
    Pending.create = function (value0) {
        return new Pending(value0);
    };
    return Pending;
})();
var showResult = new Data_Show.Show(function (v) {
    if (v instanceof Success) {
        return "Success";
    };
    if (v instanceof Failure) {
        return "Failure (Error ...)";
    };
    throw new Error("Failed pattern match at Test.Spec line 41, column 1 - line 41, column 35: " + [ v.constructor.name ]);
});
var showGroup = function (dictShow) {
    return new Data_Show.Show(function (v) {
        if (v instanceof Describe) {
            return "Describe " + (Data_Show.show(Data_Show.showBoolean)(v.value0) + (" " + (Data_Show.show(Data_Show.showString)(v.value1) + (" " + Data_Show.show(Data_Show.showArray(showGroup(dictShow)))(v.value2)))));
        };
        if (v instanceof It) {
            return "It " + (Data_Show.show(Data_Show.showBoolean)(v.value0) + (" " + (Data_Show.show(Data_Show.showString)(v.value1) + (" " + Data_Show.show(dictShow)(v.value2)))));
        };
        if (v instanceof Pending) {
            return "Describe " + Data_Show.show(Data_Show.showString)(v.value0);
        };
        throw new Error("Failed pattern match at Test.Spec line 50, column 1 - line 50, column 47: " + [ v.constructor.name ]);
    });
};
var pending = function (name) {
    return Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (p) {
        return Data_Semigroup.append(Data_Semigroup.semigroupArray)(p)([ new Pending(name) ]);
    });
};
var pending$prime = function (name) {
    return function (v) {
        return pending(name);
    };
};
var eqResult = new Data_Eq.Eq(function (v) {
    return function (v1) {
        if (v instanceof Success && v1 instanceof Success) {
            return true;
        };
        if (v instanceof Failure && v1 instanceof Failure) {
            return true;
        };
        return false;
    };
});
var eqGroup = function (dictEq) {
    return new Data_Eq.Eq(function (v) {
        return function (v1) {
            if (v instanceof Describe && v1 instanceof Describe) {
                return v.value0 === v1.value0 && (v.value1 === v1.value1 && Data_Eq.eq(Data_Eq.eqArray(eqGroup(dictEq)))(v.value2)(v1.value2));
            };
            if (v instanceof It && v1 instanceof It) {
                return v.value0 === v1.value0 && (v.value1 === v1.value1 && Data_Eq.eq(dictEq)(v.value2)(v1.value2));
            };
            if (v instanceof Pending && v1 instanceof Pending) {
                return v.value0 === v1.value0;
            };
            return false;
        };
    });
};
var collect = function (r) {
    return Data_Tuple.snd(Control_Monad_State.runState(r)([  ]));
};
var countTests = function (spec) {
    var go = function (v) {
        if (v instanceof Describe) {
            return Data_Foldable.for_(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(Data_Foldable.foldableArray)(v.value2)(go);
        };
        return Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (v1) {
            return v1 + 1 | 0;
        });
    };
    return Control_Monad_State.execState(Data_Traversable["for"](Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(Data_Traversable.traversableArray)(collect(spec))(go))(0);
};
var _it = function (only) {
    return function (description) {
        return function (tests) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (v) {
                return Data_Semigroup.append(Data_Semigroup.semigroupArray)(v)([ new It(only, description, tests) ]);
            }))(Data_Unit.unit);
        };
    };
};
var it = _it(false);
var itOnly = _it(true);
var _describe = function (only) {
    return function (name) {
        return function (its) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (v) {
                return Data_Semigroup.append(Data_Semigroup.semigroupArray)(v)([ new Describe(only, name, collect(its)) ]);
            }))(Data_Unit.unit);
        };
    };
};
var describe = _describe(false);
var describeOnly = _describe(true);
module.exports = {
    Describe: Describe, 
    It: It, 
    Pending: Pending, 
    Success: Success, 
    Failure: Failure, 
    collect: collect, 
    countTests: countTests, 
    describe: describe, 
    describeOnly: describeOnly, 
    it: it, 
    itOnly: itOnly, 
    pending: pending, 
    "pending'": pending$prime, 
    showResult: showResult, 
    eqResult: eqResult, 
    showGroup: showGroup, 
    eqGroup: eqGroup
};