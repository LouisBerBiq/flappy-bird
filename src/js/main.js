import settings from "./settings.js";
// import spriteRenderer from "./spriteRenderer.js";
import background from "./background.js";
import ground from "./ground.js";
import birdy from "./birdy.js";

const game = {
	canvas: settings.canvas,
	canvasContext: settings.canvasContext,
	spriteSheetUrl: settings.spriteSheetUrl,
	sprite: new Image(),

	init() {
		this.canvasContext = this.canvas.getContext('2d');
		this.sprite.src = this.spriteSheetUrl;
		this.sprite.addEventListener('load', () => {
			//normally, you would use promises for this but in this case, there's only ONE operation so it's ok.
			background.init(this);
			ground.init(this);
			birdy.init(this)
			this.update();
		});
	},
	update() {
		window.requestAnimationFrame(() => {
			this.update();
		});
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

		background.update();
		ground.update();
		birdy.update()
	},
}

game.init();