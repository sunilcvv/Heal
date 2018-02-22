const View = require("presto-ui").baseView;

class ExcerciseImage extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = ExcerciseImage;
