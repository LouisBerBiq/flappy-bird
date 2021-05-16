import menuElements from "./menuElements";

const scoring = {
	score: 0,
	scoreAnimationOffsetFirstDigit: 0,
	scoreAnimationOffsetSecondDigit: 0,
	scoreAnimationOffsetThirdDigit: 0,
	firstPipe: true,
	init(game) {
		this.game = game
	},
	scoreTimer() {
		if (this.game.frameCounter >= this.game.frameInterval && !this.firstPipe) {
			this.score++;

			if (this.scoreAnimationOffsetSecondDigit < 0) {
				menuElements.scoreCounterSecondDigit.style.display = 'block'
			}
				if (this.scoreAnimationOffsetFirstDigit < -9) {
					this.scoreAnimationOffsetSecondDigit--;
					this.scoreAnimationOffsetFirstDigit = 0;
			}
			// if (this.scoreAnimationOffsetFirstDigit < -9) {
			// 	this.scoreAnimationOffsetFirstDigit = 0;
			// 	this.scoreAnimationOffsetSecondDigit--;
			// 	menuElements.scoreCounterThirdDigit.style.display = 'block'
			// }
			this.scoreAnimationOffsetFirstDigit--;
			menuElements.scoreCounterFirstDigit.style.animationDelay = `${this.scoreAnimationOffsetFirstDigit}s`;
			menuElements.scoreCounterSecondDigit.style.animationDelay = `${this.scoreAnimationOffsetSecondDigit}s`;
		}
	}
}

export default scoring