import settings from "./settings.js";
import spriteRenderer from "./spriteRenderer.js";

const background = {
	SpriteArea: {
		sx: 0,
		sy: 0,
		sw: settings.canvasWidth,
		sh: settings.canvasHeight,
		dx: 0,
		dy: 0,
		dw: settings.canvasWidth,
		dh: settings.canvasHeight,
	},
	init(game) {
		this.game = game
	},
	update() {
		spriteRenderer.init(this.game);
		spriteRenderer.renderSpriteArea(this.SpriteArea);
	},
}

export default background