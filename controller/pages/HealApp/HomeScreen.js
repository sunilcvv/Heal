const View = require("presto-ui").baseView;

class HomeScreen extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
		this.props_Heal = {
			onClick : this.onNextClick
		}		

		}

		onNextClick = () => {
			window.__runDuiCallback(JSON.stringify({tag:"HomeScreenClick"}));
		}

	}


module.exports = HomeScreen;
