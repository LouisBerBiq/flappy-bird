import settings from "./settings.js";
import spriteRenderer from "./spriteRenderer.js";

const ground = {
	SpriteArea: {
		sx: 584,
		sy: 0,
		sw: 336,
		sh: 112,
		dx: 0,
		dy: 0,
		dw: 336,
		dh: 112,
	},
	init(game) {
		this.game = game
		this.maxOffset = this.SpriteArea.sw - settings.canvasWidth;

		this.SpriteArea.dy = settings.canvasHeight - this.SpriteArea.dh
	},
	update() {
		if (this.SpriteArea.dx <= -this.maxOffset) {
			this.SpriteArea.dx = 0
		}
		this.SpriteArea.dx -= settings.scrollingSpeed;

		spriteRenderer.init(this.game); //need to find a way to remove this
		spriteRenderer.renderSpriteArea(this.SpriteArea);
	}
}

export default ground