import settings from "./settings.js";
// import spriteRenderer from "./spriteRenderer.js";
import controller from "./controller.js";
import background from "./background.js";
import ground from "./ground.js";
import birdy from "./birdy.js";

const game = {
	canvas: settings.canvas,
	canvasContext: settings.canvasContext,
	spriteSheetUrl: settings.spriteSheetUrl,
	sprite: new Image(),
	tubeWalls: [],
	
	hasStarted: false,

	init() {
		this.canvasContext = this.canvas.getContext('2d');
		this.sprite.src = this.spriteSheetUrl;
		this.sprite.addEventListener('load', () => {
			controller.init(this);
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

/* BEGINNER'S NOTES

normally, you would use promises for asynchornous operations but in this case, there's only ONE operation so it's ok.
*/