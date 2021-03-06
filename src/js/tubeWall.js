import settings from "./settings";
import spriteRenderer from "./spriteRenderer";

export default class TubesWall {
	constructor() {
		this.canvasContext = settings.canvasContext;

		this.verticalTubeSpacing = 100;

		this.x = settings.canvasWidth;
		this.width = 52;
		this.height = 320;
		this.topY = -Math.floor(Math.random() * settings.pipeSpacing) - settings.pipeSpacing2;
		this.bottomY = this.topY + this.height + this.verticalTubeSpacing;
	}
	update() {
		this.x -= settings.scrollingSpeed;
		this.render();
	}
	render() {
		// up side
		this.canvasContext.save();
		this.canvasContext.translate(this.x, this.topY);
		spriteRenderer.renderSpriteArea(
			{
				sx: 112,
				sy: 646,
				sw: this.width,
				sh: this.height,
				dx: 0,
				dy: 0,
				dw: this.width,
				dh: this.height,
			}
		)
		this.canvasContext.restore();

		// down side
		this.canvasContext.save();
		this.canvasContext.translate(this.x, this.bottomY);
		spriteRenderer.renderSpriteArea(
			{
				sx: 168,
				sy: 646,
				sw: this.width,
				sh: this.height,
				dx: 0,
				dy: 0,
				dw: this.width,
				dh: this.height,
			}
		)
		this.canvasContext.restore();
	}
}