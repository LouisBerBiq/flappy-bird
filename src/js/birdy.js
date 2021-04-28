import settings from "./settings.js";
import spriteRenderer from "./spriteRenderer.js";
import ground from "./ground.js";

const birdy = {
	animationFrame: 0,
	totalanimationFrames: 3,
	frameWidth: 34,
	frameHeight: 24,
	SpriteAreaFrames: [
		{sx: 6, sy: 982},
		{sx: 62, sy: 982},
		{sx: 118, sy: 982}
	],

	// game properties
	x: 20,
	y: 0,
	fallSpeed: 0,
	maxFallSpeed: 7,

	init(game) {
		// redefine properties
		this.y = (settings.canvasHeight - ground.SpriteArea.sh) / 4; // I have no idea why I have to divide this by 2 to get the real size

		this.game = game;
		this.canvasContext = game.canvasContext;
	},
	update() {
		spriteRenderer.init(this.game); //need to find a way to remove this
		this.render();
	},
	render() {
		this.animationFrame = this.animationFrame < this.totalanimationFrames - 1 ? this.animationFrame + 1 : 0
		this.canvasContext.save();
		this.canvasContext.translate(this.x, this.y);
		this.canvasContext.rotate(0);
		spriteRenderer.renderSpriteArea(
			{
				sx: this.SpriteAreaFrames[this.animationFrame].sx,
				sy: this.SpriteAreaFrames[this.animationFrame].sy,
				sw: this.frameWidth,
				sh: this.frameHeight,
				dx: this.x,
				dy: this.y,
				dw: this.frameWidth,
				dh: this.frameHeight,
			}
		)
		this.canvasContext.restore();
	}
}

export default birdy