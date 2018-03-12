const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ToolBar = require('../../components/ToolBar');
const ScrollView = require("presto-ui").views.ScrollView;
const Icons = require('../../components/Icons');

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/HealApp/HomeScreen');
const STR = require('./../../res/string').values;
const HINT = require('./../../res/accessibility').values;
const Font = require('./../../res/fontStyle').values;
const Color = require('./../../res/color').values;
const FontSize = require('./../../res/fontSize').values;
const FontColor = require('./../../res/fontColor').values;

class HomeScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	Heal_flow = () => {
		window.__duiShowScreen(null, {screen: "InfoScreen"});
	}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				gravity="center_horizontal"
				background={Color.A__54FFFFFF}
				cornerRadius="0"
				root={true}
				clickable="true"
				{...this.style_HomeScreenContent}>
				<ToolBar
					height="80"
					width="match_parent"
					HEAL="HEAL"
					{...this.props_ToolBar} />
				<ScrollView
					id={this.id("ScrollView")}
					height="560"
					width="match_parent"
					weight="1"
					cornerRadius="0"
					{...this.style_ScrollView}>
					<LinearLayout
						id={this.id("ScrollContent")}
						height="710"
						width="match_parent"
						orientation="vertical"
						gravity="center_horizontal"
						padding="20,30,20,30"
						cornerRadius="0"
						{...this.style_ScrollContent}>
						<LinearLayout
							id={this.id("FirstRowIcons")}
							height="140"
							width="match_parent"
							orientation="horizontal"
							weight="1"
							{...this.style_FirstRowIcons}>
							<Icons
								height="140"
								width="145"
								weight="1"
								Meditate="Heal"
								MeditateImage={Config["Icons"]["MeditateImage"]["HealImage"]}
								{...this.props_Heal} />
							<Icons
								height="140"
								width="145"
								margin="30,0,0,0"
								weight="1"
								Meditate="Excercise"
								MeditateImage={Config["Icons"]["MeditateImage"]["ExcerciseImage"]}
								{...this.props_Excercise} />
						</LinearLayout>
						<LinearLayout
							id={this.id("SecondRowIcons")}
							height="140"
							width="match_parent"
							orientation="horizontal"
							margin="0,30,0,0"
							weight="1"
							{...this.style_SecondRowIcons}>
							<Icons
								height="140"
								width="145"
								weight="1"
								Meditate="Meditate"
								{...this.props_Meditate} />
							<Icons
								height="140"
								width="145"
								margin="30,0,0,0"
								weight="1"
								Meditate="Eat"
								MeditateImage={Config["Icons"]["MeditateImage"]["EatImage"]}
								{...this.props_Eat} />
						</LinearLayout>
						<LinearLayout
							id={this.id("ThirdRowIcons")}
							height="140"
							width="match_parent"
							orientation="horizontal"
							margin="0,30,0,0"
							weight="1"
							{...this.style_ThirdRowIcons}>
							<Icons
								height="140"
								width="145"
								weight="1"
								Meditate="Sleep"
								MeditateImage={Config["Icons"]["MeditateImage"]["SleepImage"]}
								{...this.props_Sleep} />
							<Icons
								height="140"
								width="145"
								margin="30,0,0,0"
								weight="1"
								Meditate="Love"
								MeditateImage={Config["Icons"]["MeditateImage"]["LoveImage"]}
								{...this.props_Love} />
						</LinearLayout>
						<LinearLayout
							id={this.id("FourthRowIcons")}
							height="140"
							width="match_parent"
							orientation="horizontal"
							margin="0,30,0,0"
							weight="1"
							{...this.style_FourthRowIcons}>
							<Icons
								height="140"
								width="145"
								weight="1"
								Meditate="More ..."
								MeditateImage={Config["Icons"]["MeditateImage"]["MoreImage"]}
								{...this.props_More} />
							<Icons
								height="140"
								width="145"
								margin="30,0,0,0"
								weight="1"
								Meditate="About Us"
								MeditateImage={Config["Icons"]["MeditateImage"]["AboutUs"]}
								{...this.props_AboutUs} />
						</LinearLayout>
					</LinearLayout>
				</ScrollView>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = HomeScreen;
