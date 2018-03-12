const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ScrollView = require("presto-ui").views.ScrollView;
const Icons = require('./components/../Icons');
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/InfoScreenContent');
const STR = require('./../res/string').values;
const HINT = require('./../res/accessibility').values;
const Font = require('./../res/fontStyle').values;
const FontColor = require('./../res/fontColor').values;
const FontSize = require('./../res/fontSize').values;
const Color = require('./../res/color').values;

class InfoScreenContent extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<LinearLayout
				height={this.props.height ? this.props.height : 640}
				width={this.props.width ? this.props.width : "match_parent"}
				orientation="horizontal"
				gravity="center"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				margin={this.props.margin ? this.props.margin : "0,0,0,0"}
				weight={this.props.weight ? this.props.weight : null}
				visibility={this.props.visibility ? this.props.visibility : null}
				id={this.props.id ? this.props.id : null}
				{...this.style_InfoScreenContent}>
				<ScrollView
					id={this.id("ScrollView")}
					height="640"
					width="match_parent"
					cornerRadius="0"
					{...this.style_ScrollView}>
					<LinearLayout
						id={this.id("ScrollContent")}
						height="641"
						width="match_parent"
						orientation="vertical"
						gravity="center_horizontal"
						padding="20,20,20,0"
						cornerRadius="0"
						{...this.style_ScrollContent}>
						<Icons
							height="140"
							width="145"
							margin="88,0,87,0"
							Meditate="Sleep"
							MeditateImage={Config["Icons"]["MeditateImage"]["SleepImage"]}
							{...this.props_Icons} />
						<TextView
							id={this.id("InfoHeading")}
							height="28"
							width="match_parent"
							margin="0,28,0,0"
							text={STR.InfoHeading3}
							textSize={FontSize.A_20}
							color={FontColor.A__FF000000}
							fontStyle={Font.AMARANTH}
							gravity="center"
							{...this.style_InfoHeading} />
						<TextView
							id={this.id("QuoteForSelected")}
							height="90"
							width="match_parent"
							margin="0,22,0,0"
							text={STR.QuoteForSelected4}
							textSize={FontSize.A_20}
							color={FontColor.A__FF000000}
							fontStyle={Font.ABEEZEE_REGULAR}
							gravity="center"
							{...this.style_QuoteForSelected} />
						<TextView
							id={this.id("InfoContent")}
							height="294"
							width="match_parent"
							margin="0,19,0,0"
							weight="1"
							text={STR.InfoContent5}
							textSize={FontSize.A_18}
							color={FontColor.A__FF000000}
							fontStyle={Font.ABEEZEE_REGULAR}
							gravity="left"
							{...this.style_InfoContent} />
					</LinearLayout>
				</ScrollView>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = InfoScreenContent;
