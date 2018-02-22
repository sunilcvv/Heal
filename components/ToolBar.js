const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../globalConfig');
const Controller = require('./../controller/components/ToolBar');
const STR = require('./../res/string').values;
const HINT = require('./../res/accessibility').values;
const Font = require('./../res/fontStyle').values;
const FontColor = require('./../res/fontColor').values;
const FontSize = require('./../res/fontSize').values;
const Color = require('./../res/color').values;

class ToolBar extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		let HEAL = (this.props.HEAL) ? this.props.HEAL : this.HEAL;
		this.layout = (
			<LinearLayout
				height={this.props.height ? this.props.height : 80}
				width={this.props.width ? this.props.width : "match_parent"}
				orientation="horizontal"
				gravity="center"
				padding="20,0,20,0"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				margin={this.props.margin ? this.props.margin : "0,0,0,0"}
				weight={this.props.weight ? this.props.weight : null}
				visibility={this.props.visibility ? this.props.visibility : null}
				id={this.props.id ? this.props.id : null}
				{...this.style_Header}>
				<LinearLayout
					id={this.id("Group")}
					height="38"
					width="match_parent"
					orientation="horizontal"
					{...this.style_Group}>
					<ImageView
						id={this.id("Ic_menu_black_48dp")}
						height="30"
						width="30"
						margin="0,4,0,0"
						onClick={this.props.onClick_Ic_menu_black_48dp}
						imageUrl="54bc04c050c619e07894577f140141e2340ed0ce"
						{...this.style_Ic_menu_black_48dp} />
					<TextView
						id={this.id("HEAL")}
						height="38"
						width="260"
						weight="1"
						text={HEAL}
						textSize={FontSize.A_28}
						color={FontColor.A__FF000000}
						fontStyle={Font.AMARANTH}
						gravity="center"
						{...this.style_HEAL} />
					<ImageView
						id={this.id("Ic_notifications_black_48dp")}
						height="30"
						width="30"
						margin="0,2,0,0"
						onClick={this.props.onClick_Ic_notifications_black_48dp}
						imageUrl="821a7c06ec0afc3411d2ec969733765bc2627e28"
						{...this.style_Ic_notifications_black_48dp} />
				</LinearLayout>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = ToolBar;
