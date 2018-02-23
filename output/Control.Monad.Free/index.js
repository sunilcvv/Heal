// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Monad = require("../Control.Monad");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_CatList = require("../Data.CatList");
var Data_Either = require("../Data.Either");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Traversable = require("../Data.Traversable");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var ExpF = function (x) {
    return x;
};
var Free = (function () {
    function Free(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Free.create = function (value0) {
        return function (value1) {
            return new Free(value0, value1);
        };
    };
    return Free;
})();
var Return = (function () {
    function Return(value0) {
        this.value0 = value0;
    };
    Return.create = function (value0) {
        return new Return(value0);
    };
    return Return;
})();
var Bind = (function () {
    function Bind(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Bind.create = function (value0) {
        return function (value1) {
            return new Bind(value0, value1);
        };
    };
    return Bind;
})();
var toView = function ($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
        var runExpF = function (v2) {
            return v2;
        };
        var concatF = function (v2) {
            return function (r) {
                return new Free(v2.value0, Data_Semigroup.append(Data_CatList.semigroupCatList)(v2.value1)(r));
            };
        };
        if (v.value0 instanceof Return) {
            var v2 = Data_CatList.uncons(v.value1);
            if (v2 instanceof Data_Maybe.Nothing) {
                $tco_done = true;
                return new Return(Unsafe_Coerce.unsafeCoerce(v.value0.value0));
            };
            if (v2 instanceof Data_Maybe.Just) {
                $copy_v = Unsafe_Coerce.unsafeCoerce(concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1));
                return;
            };
            throw new Error("Failed pattern match at Control.Monad.Free line 215, column 7 - line 219, column 64: " + [ v2.constructor.name ]);
        };
        if (v.value0 instanceof Bind) {
            $tco_done = true;
            return new Bind(v.value0.value0, function (a) {
                return Unsafe_Coerce.unsafeCoerce(concatF(v.value0.value1(a))(v.value1));
            });
        };
        throw new Error("Failed pattern match at Control.Monad.Free line 213, column 3 - line 221, column 56: " + [ v.value0.constructor.name ]);
    };
    while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
    };
    return $tco_result;
};
var runFreeM = function (dictFunctor) {
    return function (dictMonadRec) {
        return function (k) {
            var go = function (f) {
                var v = toView(f);
                if (v instanceof Return) {
                    return Data_Functor.map((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(Control_Monad_Rec_Class.Done.create)(Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(v.value0));
                };
                if (v instanceof Bind) {
                    return Data_Functor.map((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(Control_Monad_Rec_Class.Loop.create)(k(Data_Functor.map(dictFunctor)(v.value1)(v.value0)));
                };
                throw new Error("Failed pattern match at Control.Monad.Free line 182, column 10 - line 184, column 37: " + [ v.constructor.name ]);
            };
            return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go);
        };
    };
};
var runFree = function (dictFunctor) {
    return function (k) {
        var go = function ($copy_f) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(f) {
                var v = toView(f);
                if (v instanceof Return) {
                    $tco_done = true;
                    return v.value0;
                };
                if (v instanceof Bind) {
                    $copy_f = k(Data_Functor.map(dictFunctor)(v.value1)(v.value0));
                    return;
                };
                throw new Error("Failed pattern match at Control.Monad.Free line 166, column 10 - line 168, column 33: " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_f);
            };
            return $tco_result;
        };
        return go;
    };
};
var resume$prime = function (k) {
    return function (j) {
        return function (f) {
            var v = toView(f);
            if (v instanceof Return) {
                return j(v.value0);
            };
            if (v instanceof Bind) {
                return k(v.value0)(v.value1);
            };
            throw new Error("Failed pattern match at Control.Monad.Free line 201, column 17 - line 203, column 20: " + [ v.constructor.name ]);
        };
    };
};
var resume = function (dictFunctor) {
    return resume$prime(function (g) {
        return function (i) {
            return new Data_Either.Left(Data_Functor.map(dictFunctor)(i)(g));
        };
    })(Data_Either.Right.create);
};
var fromView = function (f) {
    return new Free(Unsafe_Coerce.unsafeCoerce(f), Data_CatList.empty);
};
var suspendF = function (dictApplicative) {
    return function (f) {
        return fromView(new Bind(Unsafe_Coerce.unsafeCoerce(Control_Applicative.pure(dictApplicative)(f)), Unsafe_Coerce.unsafeCoerce));
    };
};
var freeMonad = new Control_Monad.Monad(function () {
    return freeApplicative;
}, function () {
    return freeBind;
});
var freeFunctor = new Data_Functor.Functor(function (k) {
    return function (f) {
        return Control_Bind.bindFlipped(freeBind)(function ($118) {
            return Control_Applicative.pure(freeApplicative)(k($118));
        })(f);
    };
});
var freeBind = new Control_Bind.Bind(function () {
    return freeApply;
}, function (v) {
    return function (k) {
        return new Free(v.value0, Data_CatList.snoc(v.value1)(Unsafe_Coerce.unsafeCoerce(k)));
    };
});
var freeApply = new Control_Apply.Apply(function () {
    return freeFunctor;
}, Control_Monad.ap(freeMonad));
var freeApplicative = new Control_Applicative.Applicative(function () {
    return freeApply;
}, function ($119) {
    return fromView(Return.create($119));
});
var freeMonadRec = new Control_Monad_Rec_Class.MonadRec(function () {
    return freeMonad;
}, function (k) {
    return function (a) {
        return Control_Bind.bind(freeBind)(k(a))(function (v) {
            if (v instanceof Control_Monad_Rec_Class.Loop) {
                return Control_Monad_Rec_Class.tailRecM(freeMonadRec)(k)(v.value0);
            };
            if (v instanceof Control_Monad_Rec_Class.Done) {
                return Control_Applicative.pure(freeApplicative)(v.value0);
            };
            throw new Error("Failed pattern match at Control.Monad.Free line 84, column 26 - line 86, column 21: " + [ v.constructor.name ]);
        });
    };
});
var liftF = function (f) {
    return fromView(new Bind(Unsafe_Coerce.unsafeCoerce(f), function ($120) {
        return Control_Applicative.pure(freeApplicative)(Unsafe_Coerce.unsafeCoerce($120));
    }));
};
var freeMonadTrans = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return liftF;
});
var substFree = function (k) {
    var go = function (f) {
        var v = toView(f);
        if (v instanceof Return) {
            return Control_Applicative.pure(freeApplicative)(v.value0);
        };
        if (v instanceof Bind) {
            return Control_Bind.bind(freeBind)(k(v.value0))(Data_Functor.map(Data_Functor.functorFn)(go)(v.value1));
        };
        throw new Error("Failed pattern match at Control.Monad.Free line 156, column 10 - line 158, column 33: " + [ v.constructor.name ]);
    };
    return go;
};
var hoistFree = function (k) {
    return substFree(function ($121) {
        return liftF(k($121));
    });
};
var foldableFree = function (dictFunctor) {
    return function (dictFoldable) {
        return new Data_Foldable.Foldable(function (dictMonoid) {
            return function (f) {
                var go = function ($122) {
                    return (function (v) {
                        if (v instanceof Data_Either.Left) {
                            return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(go)(v.value0);
                        };
                        if (v instanceof Data_Either.Right) {
                            return f(v.value0);
                        };
                        throw new Error("Failed pattern match at Control.Monad.Free line 91, column 21 - line 93, column 21: " + [ v.constructor.name ]);
                    })(resume(dictFunctor)($122));
                };
                return go;
            };
        }, function (f) {
            var go = function (r) {
                return function ($123) {
                    return (function (v) {
                        if (v instanceof Data_Either.Left) {
                            return Data_Foldable.foldl(dictFoldable)(go)(r)(v.value0);
                        };
                        if (v instanceof Data_Either.Right) {
                            return f(r)(v.value0);
                        };
                        throw new Error("Failed pattern match at Control.Monad.Free line 96, column 23 - line 98, column 23: " + [ v.constructor.name ]);
                    })(resume(dictFunctor)($123));
                };
            };
            return go;
        }, function (f) {
            var go = function (r) {
                return function ($124) {
                    return (function (v) {
                        if (v instanceof Data_Either.Left) {
                            return Data_Foldable.foldr(dictFoldable)(Data_Function.flip(go))(r)(v.value0);
                        };
                        if (v instanceof Data_Either.Right) {
                            return f(v.value0)(r);
                        };
                        throw new Error("Failed pattern match at Control.Monad.Free line 101, column 23 - line 103, column 23: " + [ v.constructor.name ]);
                    })(resume(dictFunctor)($124));
                };
            };
            return go;
        });
    };
};
var traversableFree = function (dictTraversable) {
    return new Data_Traversable.Traversable(function () {
        return foldableFree(dictTraversable.Functor0())(dictTraversable.Foldable1());
    }, function () {
        return freeFunctor;
    }, function (dictApplicative) {
        return function (tma) {
            return Data_Traversable.traverse(traversableFree(dictTraversable))(dictApplicative)(Control_Category.id(Control_Category.categoryFn))(tma);
        };
    }, function (dictApplicative) {
        return function (f) {
            var go = function ($125) {
                return (function (v) {
                    if (v instanceof Data_Either.Left) {
                        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function ($126) {
                            return Control_Bind.join(freeBind)(liftF($126));
                        })(Data_Traversable.traverse(dictTraversable)(dictApplicative)(go)(v.value0));
                    };
                    if (v instanceof Data_Either.Right) {
                        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Control_Applicative.pure(freeApplicative))(f(v.value0));
                    };
                    throw new Error("Failed pattern match at Control.Monad.Free line 108, column 21 - line 110, column 30: " + [ v.constructor.name ]);
                })(resume(dictTraversable.Functor0())($125));
            };
            return go;
        };
    });
};
var foldFree = function (dictMonadRec) {
    return function (k) {
        var go = function (f) {
            var v = toView(f);
            if (v instanceof Return) {
                return Data_Functor.map((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(Control_Monad_Rec_Class.Done.create)(Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(v.value0));
            };
            if (v instanceof Bind) {
                return Data_Functor.map((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(function ($127) {
                    return Control_Monad_Rec_Class.Loop.create(v.value1($127));
                })(k(v.value0));
            };
            throw new Error("Failed pattern match at Control.Monad.Free line 146, column 10 - line 148, column 37: " + [ v.constructor.name ]);
        };
        return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go);
    };
};
var eqFree = function (dictFunctor) {
    return function (dictEq1) {
        return function (dictEq) {
            return new Data_Eq.Eq(function (x) {
                return function (y) {
                    var v = resume(dictFunctor)(y);
                    var v1 = resume(dictFunctor)(x);
                    if (v1 instanceof Data_Either.Left && v instanceof Data_Either.Left) {
                        return Data_Eq.eq1(dictEq1)(eqFree(dictFunctor)(dictEq1)(dictEq))(v1.value0)(v.value0);
                    };
                    if (v1 instanceof Data_Either.Right && v instanceof Data_Either.Right) {
                        return Data_Eq.eq(dictEq)(v1.value0)(v.value0);
                    };
                    return false;
                };
            });
        };
    };
};
var ordFree = function (dictFunctor) {
    return function (dictOrd1) {
        return function (dictOrd) {
            return new Data_Ord.Ord(function () {
                return eqFree(dictFunctor)(dictOrd1.Eq10())(dictOrd.Eq0());
            }, function (x) {
                return function (y) {
                    var v = resume(dictFunctor)(y);
                    var v1 = resume(dictFunctor)(x);
                    if (v1 instanceof Data_Either.Left && v instanceof Data_Either.Left) {
                        return Data_Ord.compare1(dictOrd1)(ordFree(dictFunctor)(dictOrd1)(dictOrd))(v1.value0)(v.value0);
                    };
                    if (v1 instanceof Data_Either.Left) {
                        return Data_Ordering.LT.value;
                    };
                    if (v instanceof Data_Either.Left) {
                        return Data_Ordering.GT.value;
                    };
                    if (v1 instanceof Data_Either.Right && v instanceof Data_Either.Right) {
                        return Data_Ord.compare(dictOrd)(v1.value0)(v.value0);
                    };
                    throw new Error("Failed pattern match at Control.Monad.Free line 54, column 17 - line 58, column 36: " + [ v1.constructor.name, v.constructor.name ]);
                };
            });
        };
    };
};
var eq1Free = function (dictFunctor) {
    return function (dictEq1) {
        return new Data_Eq.Eq1(function (dictEq) {
            return Data_Eq.eq(eqFree(dictFunctor)(dictEq1)(dictEq));
        });
    };
};
var ord1Free = function (dictFunctor) {
    return function (dictOrd1) {
        return function (dictOrd) {
            return new Data_Ord.Ord1(function () {
                return eq1Free(dictFunctor)(dictOrd1.Eq10());
            }, function (dictOrd2) {
                return Data_Ord.compare(ordFree(dictFunctor)(dictOrd1)(dictOrd2));
            });
        };
    };
};
module.exports = {
    foldFree: foldFree, 
    hoistFree: hoistFree, 
    liftF: liftF, 
    resume: resume, 
    "resume'": resume$prime, 
    runFree: runFree, 
    runFreeM: runFreeM, 
    substFree: substFree, 
    suspendF: suspendF, 
    eqFree: eqFree, 
    eq1Free: eq1Free, 
    ordFree: ordFree, 
    ord1Free: ord1Free, 
    freeFunctor: freeFunctor, 
    freeBind: freeBind, 
    freeApplicative: freeApplicative, 
    freeApply: freeApply, 
    freeMonad: freeMonad, 
    freeMonadTrans: freeMonadTrans, 
    freeMonadRec: freeMonadRec, 
    foldableFree: foldableFree, 
    traversableFree: traversableFree
};
