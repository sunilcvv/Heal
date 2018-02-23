// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans");
var Control_Monad_Free = require("../Control.Monad.Free");
var Data_Unit = require("../Data.Unit");
var Engineering_Helpers_Commons = require("../Engineering.Helpers.Commons");
var Engineering_Types_App = require("../Engineering.Types.App");
var Prelude = require("../Prelude");
var Product_Types = require("../Product.Types");
var Remote_Flow = require("../Remote.Flow");
var UI_Types = require("../UI.Types");
var splashScreen = Control_Bind.bind(Control_Monad_Except_Trans.bindExceptT(Control_Monad_Free.freeMonad))(Engineering_Helpers_Commons["runUI'"](UI_Types.splashScreenInteract)(UI_Types.SplashScreen.value))(function (v) {
    return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Control_Monad_Free.freeMonad))(Data_Unit.unit);
});
module.exports = {
    splashScreen: splashScreen
};