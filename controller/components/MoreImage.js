const View = require("presto-ui").baseView;

class MoreImage extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = MoreImage;
