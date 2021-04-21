const spriteRenderer = {
	init(game) {
		this.game = game
	},
	renderSpriteArea(coordinates) {
		this.game.canvasContext.drawImage(
			this.game.sprite,
			coordinates.sx,
			coordinates.sy,
			coordinates.sw,
			coordinates.sh,
			coordinates.dx,
			coordinates.dy,
			coordinates.dw,
			coordinates.dh
			);
	},
}

export default spriteRenderer