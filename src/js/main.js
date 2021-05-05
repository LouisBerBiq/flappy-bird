import settings from "./settings.js";
import controller from "./controller.js";

import background from "./background.js";
import ground from "./ground.js";
import birdy from "./birdy.js";
import TubesWall from "./TubeWall.js";
import spriteRenderer from "./spriteRenderer.js";

const game = {
	canvas: settings.canvas,
	canvasContext: settings.canvasContext,
	spriteSheetUrl: settings.spriteSheetUrl,
	sprite: new Image(),
	tubesWalls: [],
	maxTubeWalls: 3, //TODO: auto calculate at game start
	frameCounter: 0,
	frameInterval: 80,

	hasStarted: false,

	init() {
		this.canvasContext = this.canvas.getContext('2d');
		this.sprite.src = this.spriteSheetUrl;
		this.sprite.addEventListener('load', () => {
			spriteRenderer.init(this)
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
		
		background.update(); //this has to be drawn before the pipes

		if (this.hasStarted) {
			if (this.frameCounter++ > this.frameInterval) {
				if (this.tubesWalls.length >= this.maxTubeWalls) {
					this.tubesWalls.splice(0, 1);
				}
				this.tubesWalls.push(new TubesWall(this));
				this.frameCounter = 0;
			}
			this.tubesWalls.forEach((tubesWall) => {
				tubesWall.update();
			});
		}

		ground.update();
		birdy.update();
	},
}

game.init();

/* BEGINNER'S NOTES

normally, you would use promises for asynchornous operations but in this case, there's only ONE operation so it's ok.
*/