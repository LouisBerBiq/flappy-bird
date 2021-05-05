const settings = {
	canvas: document.querySelector('#game'),
	canvasWidth: 288,
	canvasHeight: 511,
	game: null,
	canvasContext: null,
	sprite: new Image(),
	spriteSheetUrl: '../resources/sprite.png',

	scrollingSpeed: 3,
	gravity: 1,
	pipeSpacing: 280,
	pipeSpacing2: 25,
	init() {
		this.canvasContext= this.canvas.getContext('2d');
		this.sprite.src = this.spriteSheetUrl;
		console.log(this.sprite);
	}
}

export default settings