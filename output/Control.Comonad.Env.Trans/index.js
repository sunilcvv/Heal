// Generated by purs version 0.11.6
"use strict";
var Control_Comonad = require("../Control.Comonad");
var Control_Comonad_Trans_Class = require("../Control.Comonad.Trans.Class");
var Control_Extend = require("../Control.Extend");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Newtype = require("../Data.Newtype");
var Data_Traversable = require("../Data.Traversable");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var EnvT = function (x) {
    return x;
};
var withEnvT = function (f) {
    return function (v) {
        return EnvT(new Data_Tuple.Tuple(f(v.value0), v.value1));
    };
};
var runEnvT = function (v) {
    return v;
};
var newtypeEnvT = new Data_Newtype.Newtype(function (n) {
    return n;
}, EnvT);
var mapEnvT = function (f) {
    return function (v) {
        return EnvT(new Data_Tuple.Tuple(v.value0, f(v.value1)));
    };
};
var functorEnvT = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return EnvT(new Data_Tuple.Tuple(v.value0, Data_Functor.map(dictFunctor)(f)(v.value1)));
        };
    });
};
var foldableEnvT = function (dictFoldable) {
    return new Data_Foldable.Foldable(function (dictMonoid) {
        return function (fn) {
            return function (v) {
                return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(fn)(v.value1);
            };
        };
    }, function (fn) {
        return function (a) {
            return function (v) {
                return Data_Foldable.foldl(dictFoldable)(fn)(a)(v.value1);
            };
        };
    }, function (fn) {
        return function (a) {
            return function (v) {
                return Data_Foldable.foldr(dictFoldable)(fn)(a)(v.value1);
            };
        };
    });
};
var traversableEnvT = function (dictTraversable) {
    return new Data_Traversable.Traversable(function () {
        return foldableEnvT(dictTraversable.Foldable1());
    }, function () {
        return functorEnvT(dictTraversable.Functor0());
    }, function (dictApplicative) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Functor.map(Data_Functor.functorFn)(EnvT)(Data_Tuple.Tuple.create(v.value0)))(Data_Traversable.sequence(dictTraversable)(dictApplicative)(v.value1));
        };
    }, function (dictApplicative) {
        return function (f) {
            return function (v) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Functor.map(Data_Functor.functorFn)(EnvT)(Data_Tuple.Tuple.create(v.value0)))(Data_Traversable.traverse(dictTraversable)(dictApplicative)(f)(v.value1));
            };
        };
    });
};
var extendEnvT = function (dictExtend) {
    return new Control_Extend.Extend(function () {
        return functorEnvT(dictExtend.Functor0());
    }, function (f) {
        return function (v) {
            return EnvT(new Data_Tuple.Tuple(v.value0, Data_Functor.map(dictExtend.Functor0())(f)(Control_Extend.extend(dictExtend)(function ($68) {
                return EnvT(Data_Tuple.Tuple.create(v.value0)($68));
            })(v.value1))));
        };
    });
};
var comonadTransEnvT = new Control_Comonad_Trans_Class.ComonadTrans(function (dictComonad) {
    return function (v) {
        return v.value1;
    };
});
var comonadEnvT = function (dictComonad) {
    return new Control_Comonad.Comonad(function () {
        return extendEnvT(dictComonad.Extend0());
    }, function (v) {
        return Control_Comonad.extract(dictComonad)(v.value1);
    });
};
module.exports = {
    EnvT: EnvT, 
    mapEnvT: mapEnvT, 
    runEnvT: runEnvT, 
    withEnvT: withEnvT, 
    newtypeEnvT: newtypeEnvT, 
    functorEnvT: functorEnvT, 
    extendEnvT: extendEnvT, 
    comonadEnvT: comonadEnvT, 
    comonadTransEnvT: comonadTransEnvT, 
    foldableEnvT: foldableEnvT, 
    traversableEnvT: traversableEnvT
};
