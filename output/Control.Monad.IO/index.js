// Generated by purs version 0.11.6
"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad = require("../Control.Monad");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_Class = require("../Control.Monad.Aff.Class");
var Control_Monad_Aff_Unsafe = require("../Control.Monad.Aff.Unsafe");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Unsafe = require("../Control.Monad.Eff.Unsafe");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Control_Monad_IO_Effect = require("../Control.Monad.IO.Effect");
var Control_Monad_IOSync = require("../Control.Monad.IOSync");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_MonadZero = require("../Control.MonadZero");
var Control_Parallel = require("../Control.Parallel");
var Control_Parallel_Class = require("../Control.Parallel.Class");
var Control_Plus = require("../Control.Plus");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Functor = require("../Data.Functor");
var Data_Monoid = require("../Data.Monoid");
var Data_Newtype = require("../Data.Newtype");
var Data_Semigroup = require("../Data.Semigroup");
var Prelude = require("../Prelude");
var ParIO = function (x) {
    return x;
};
var IO = function (x) {
    return x;
};
var semigroupParIO = function (dictSemigroup) {
    return Control_Monad_Aff.semigroupParAff(dictSemigroup);
};
var semigroupIO = function (dictSemigroup) {
    return Control_Monad_Aff.semigroupAff(dictSemigroup);
};
var plusIO = Control_Monad_Aff.plusAff;
var newtypeIO = new Data_Newtype.Newtype(function (n) {
    return n;
}, IO);
var runIO = Data_Newtype.unwrap(newtypeIO);
var runIO$prime = function ($9) {
    return Control_Monad_Aff_Unsafe.unsafeCoerceAff(Data_Newtype.unwrap(newtypeIO)($9));
};
var monoidParIO = function (dictMonoid) {
    return Control_Monad_Aff.monoidParAff(dictMonoid);
};
var monoidIO = function (dictMonoid) {
    return Control_Monad_Aff.monoidAff(dictMonoid);
};
var monadZeroIO = Control_Monad_Aff.monadZero;
var monadThrowIO = Control_Monad_Aff.monadThrowAff;
var monadRecIO = Control_Monad_Aff.monadRecAff;
var monadIO = Control_Monad_Aff.monadAff;
var monadErrorIO = Control_Monad_Aff.monadErrorAff;
var monadEffIO = new Control_Monad_Eff_Class.MonadEff(function () {
    return monadIO;
}, function ($10) {
    return Data_Newtype.wrap(newtypeIO)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Unsafe.unsafeCoerceEff($10)));
});
var monadAffIO = new Control_Monad_Aff_Class.MonadAff(function () {
    return monadEffIO;
}, function ($11) {
    return Data_Newtype.wrap(newtypeIO)(Control_Monad_Aff_Unsafe.unsafeCoerceAff($11));
});
var launchIO = function ($12) {
    return Data_Functor["void"](Control_Monad_IOSync.functorIOSync)(Control_Monad_Eff_Class.liftEff(Control_Monad_IOSync.monadEffIOSync)(Control_Monad_Aff.launchAff(Data_Newtype.unwrap(newtypeIO)($12))));
};
var functorParIO = Control_Monad_Aff.functorParAff;
var functorIO = Control_Monad_Aff.functorAff;
var bindIO = Control_Monad_Aff.bindAff;
var applyParIO = Control_Monad_Aff.applyParAff;
var applyIO = Control_Monad_Aff.applyAff;
var applicativeParIO = Control_Monad_Aff.applicativeParAff;
var parallelParIO = new Control_Parallel_Class.Parallel(function () {
    return applicativeParIO;
}, function () {
    return monadIO;
}, function ($13) {
    return ParIO(Control_Monad_Aff.ParAff(runIO($13)));
}, function (v) {
    return v;
});
var applicativeIO = Control_Monad_Aff.applicativeAff;
var alternativeIO = Control_Monad_Aff.alternativeAff;
var altIO = Control_Monad_Aff.altAff;
module.exports = {
    IO: IO, 
    ParIO: ParIO, 
    launchIO: launchIO, 
    runIO: runIO, 
    "runIO'": runIO$prime, 
    newtypeIO: newtypeIO, 
    functorIO: functorIO, 
    applyIO: applyIO, 
    applicativeIO: applicativeIO, 
    bindIO: bindIO, 
    monadIO: monadIO, 
    monadRecIO: monadRecIO, 
    semigroupIO: semigroupIO, 
    monoidIO: monoidIO, 
    functorParIO: functorParIO, 
    applyParIO: applyParIO, 
    applicativeParIO: applicativeParIO, 
    semigroupParIO: semigroupParIO, 
    monoidParIO: monoidParIO, 
    monadAffIO: monadAffIO, 
    parallelParIO: parallelParIO, 
    monadEffIO: monadEffIO, 
    monadThrowIO: monadThrowIO, 
    monadErrorIO: monadErrorIO, 
    altIO: altIO, 
    plusIO: plusIO, 
    alternativeIO: alternativeIO, 
    monadZeroIO: monadZeroIO
};
