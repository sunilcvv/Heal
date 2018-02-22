const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const InfoScreenContent = require('../../components/InfoScreenContent');

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/HealApp/InfoScreen');
const STR = require('./../../res/string').values;
const HINT = require('./../../res/accessibility').values;
const Font = require('./../../res/fontStyle').values;
const Color = require('./../../res/color').values;
const FontSize = require('./../../res/fontSize').values;
const FontColor = require('./../../res/fontColor').values;

class InfoScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="horizontal"
				gravity="center"
				cornerRadius="0"
				root={true}
				clickable="true"
				{...this.style_Group}>
				<InfoScreenContent
					height="640"
					width="match_parent"
					{...this.props_InfoScreenContent} />
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = InfoScreen;
