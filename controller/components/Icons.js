const View = require("presto-ui").baseView;

class Icons extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = Icons;
