const View = require("presto-ui").baseView;

class AboutUs extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = AboutUs;
