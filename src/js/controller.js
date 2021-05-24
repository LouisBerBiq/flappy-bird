import birdy from "./birdy.js";
import UImanager from "./UImanager.js";

const controller = {
	init(game) {
		document.addEventListener('keydown', (e) => {
			// document.addEventListener('mousedown', listener)
			if (e.key === 'j') {
				if (!game.hasStarted) {
					game.hasStarted = true;

					UImanager.removeClass('menuElements.maintTitle', 'bounceUpAndDown');
					UImanager.addClass('menuElements.maintTitle', 'fadeout');
					// menuElements.maintTitle.classList.remove('bounceUpAndDown');
					// menuElements.maintTitle.classList.add('fadeout');
					// menuElements.startButton.classList.add('fadeout');
					//FUCK THIS SHIT, THIS WILL DO
				}
				birdy.kickInButt()
			}
		});
	},
}

export default controller
