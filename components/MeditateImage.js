const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const ImageView = require("presto-ui").views.ImageView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/MeditateImage');
const STR = require('./../res/string').values;
const HINT = require('./../res/accessibility').values;
const Font = require('./../res/fontStyle').values;
const FontColor = require('./../res/fontColor').values;
const FontSize = require('./../res/fontSize').values;
const Color = require('./../res/color').values;

class MeditateImage extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<ImageView
				height={this.props.height ? this.props.height : 80}
				width={this.props.width ? this.props.width : 94}
				imageUrl="meditateimage"
				margin={this.props.margin ? this.props.margin : "0,0,0,0"}
				weight={this.props.weight ? this.props.weight : null}
				visibility={this.props.visibility ? this.props.visibility : null}
				id={this.props.id ? this.props.id : null}
				{...this.style_MeditateImage} />
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = MeditateImage;
