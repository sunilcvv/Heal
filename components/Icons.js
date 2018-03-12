const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const SleepImage = require('./components/../SleepImage');
const HealImage = require('./components/../HealImage');
const ExcerciseImage = require('./components/../ExcerciseImage');
const EatImage = require('./components/../EatImage');
const LoveImage = require('./components/../LoveImage');
const MoreImage = require('./components/../MoreImage');
const AboutUs = require('./components/../AboutUs');
const LinearLayout = require("presto-ui").views.LinearLayout;
const MeditateImage = require('./components/../MeditateImage');
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/Icons');
const STR = require('./../res/string').values;
const HINT = require('./../res/accessibility').values;
const Font = require('./../res/fontStyle').values;
const FontColor = require('./../res/fontColor').values;
const FontSize = require('./../res/fontSize').values;
const Color = require('./../res/color').values;

class Icons extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.Meditate = STR.Meditate1;
	}

	onPop = () => {}

	override_MeditateImage = () => {
		let overrides = Config["Icons"]["MeditateImage"]
		switch(this.props.MeditateImage) {
			case overrides["SleepImage"]:
			return SleepImage;
			case overrides["HealImage"]:
			return HealImage;
			case overrides["ExcerciseImage"]:
			return ExcerciseImage;
			case overrides["EatImage"]:
			return EatImage;
			case overrides["LoveImage"]:
			return LoveImage;
			case overrides["MoreImage"]:
			return MoreImage;
			case overrides["AboutUs"]:
			return AboutUs;
		};
		return MeditateImage;
	}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		let Meditate = (this.props.Meditate) ? this.props.Meditate : this.Meditate;
		let MeditateImage = this.override_MeditateImage();
		this.layout = (
			<LinearLayout
				height={this.props.height ? this.props.height : 140}
				width={this.props.width ? this.props.width : "match_parent"}
				orientation="vertical"
				padding="17,5,17,10"
				background={Color.A__FFCAF3F3}
				cornerRadius="31"
				root={true}
				margin={this.props.margin ? this.props.margin : "0,0,0,0"}
				weight={this.props.weight ? this.props.weight : null}
				visibility={this.props.visibility ? this.props.visibility : null}
				id={this.props.id ? this.props.id : null}
				{...this.style_IconContent}>
				<LinearLayout
					id={this.id("Content")}
					height="125"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					{...this.style_Content}>
					<MeditateImage
						height="80"
						width="94"
						margin="9,0,8,0"
						weight="1"
						{...this.props_MeditateImage} />
					<TextView
						id={this.id("Meditate")}
						height="25"
						width="match_parent"
						margin="0,20,0,0"
						text={Meditate}
						textSize={FontSize.A_20}
						color={FontColor.A__FF000000}
						fontStyle={Font.AMARANTH}
						gravity="center"
						{...this.style_Meditate} />
				</LinearLayout>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = Icons;
