const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/Enjoyimage');
const STR = require('./../res/string').values;
const HINT = require('./../res/accessibility').values;
const Font = require('./../res/fontStyle').values;
const FontColor = require('./../res/fontColor').values;
const FontSize = require('./../res/fontSize').values;
const Color = require('./../res/color').values;

class Enjoyimage extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<LinearLayout
				height={this.props.height ? this.props.height : 80}
				width={this.props.width ? this.props.width : 94}
				root={true}
				margin={this.props.margin ? this.props.margin : "0,0,0,0"}
				weight={this.props.weight ? this.props.weight : null}
				visibility={this.props.visibility ? this.props.visibility : null}
				id={this.props.id ? this.props.id : null}
				{...this.style_Enjoyimage}>
				<LinearLayout
					id={this.id("Bg")}
					height="80"
					width="94"
					cornerRadius="0"
					{...this.style_Bg} />
				<ImageView
					id={this.id("Noun_1506944_cc")}
					height="95"
					width="94"
					imageUrl="429ea52463826da542b596ed05af199c6cd01301"
					{...this.style_Noun_1506944_cc} />
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = Enjoyimage;
