const View = require("presto-ui").baseView;

class Icons extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
		this.style_IconContent = {
			onClick : this.props.onClick
		}
	}

}

module.exports = Icons;
