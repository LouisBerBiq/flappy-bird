import settings from "./settings";

const spriteRenderer = {
	renderSpriteArea(coordinates) {
		settings.canvasContext.drawImage(
			settings.sprite,
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