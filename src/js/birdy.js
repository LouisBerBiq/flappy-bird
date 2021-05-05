import settings from "./settings.js";
import spriteRenderer from "./spriteRenderer.js";
import ground from "./ground.js";

const birdy = {
	animationFrame: 0,
	totalAnimationFrames: 0,
	frameInterval: 0,
	maxFrameInterval: 5,
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
	maxFallSpeed: 5,

	init(game) {
		// redefine properties
		this.x = 40;
		this.y = (settings.canvasHeight - ground.SpriteArea.dh) / 2;

		this.totalAnimationFrames = this.SpriteAreaFrames.length - 1;

		this.game = game;
		this.canvasContext = game.canvasContext;
	},
	update() {
		if (this.game.hasStarted) {
			if (this.fallSpeed < this.maxFallSpeed)
				this.fallSpeed += settings.gravity;
			this.y += this.fallSpeed;
			this.checkGroundCollision()
		}

		spriteRenderer.init(this.game); //need to find a way to remove this
		this.render();
	},
	render() {
		this.frameInterval ++;
		if (!(this.frameInterval % this.maxFrameInterval)) {
			this.frameInterval = 0;
			this.animationFrame = this.animationFrame < this.totalAnimationFrames - 1 ? this.animationFrame + 1 : 0
		}
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
	},
	kickInButt() {
		this.fallSpeed = -this.maxFallSpeed * 1.2;
	},
	checkGroundCollision() {
		if (this.y + this.frameHeight > ground.SpriteArea.dy) {
			this.y = ground.SpriteArea.dy - this.frameHeight;
			this.kickInButt();
		}
	}
}

export default birdy
/* BEGINNER'S NOTES

I have no idea why I have to divide this by 2 to get the real size <- I'm still not sure, should look more into it.

*/