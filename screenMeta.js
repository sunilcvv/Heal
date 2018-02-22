const RootScreen = require("./views/RootScreen");
// Screens of page: HealApp
const HomeScreen = require("./views/HealApp/HomeScreen");
const InfoScreen = require("./views/HealApp/InfoScreen");

const screens = {
	HomeScreen,
	InfoScreen,
	RootScreen
};

const INIT_UI = "HomeScreen";

module.exports = {
	screens,
	INIT_UI
};
