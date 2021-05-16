import birdy from "./birdy.js";
import menuElements from "./menuElements.js";

const controller = {
	init(game) {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'j') {
				if (!game.hasStarted) {
					game.hasStarted = true;
					menuElements.maintTitle.classList.remove('bounceUpAndDown');
					menuElements.maintTitle.classList.add('fadeout');
					menuElements.startButton.classList.add('fadeout');
					//FUCK THIS SHIT, THIS WILL DO
				}
				birdy.kickInButt()
			}
		});
	}
}

export default controller
