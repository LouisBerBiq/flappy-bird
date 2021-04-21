const game = {
	canvas: document.querySelector('#game'),
	canvasContext: null,
	init() {
		this.canvasContext = this.canvas.getContext('2d');
		this.update();
	},
	update() {
		window.requestAnimationFrame(() => {
			this.update();
		});
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
}

game.init();