import birdy from "./birdy";
import settings from "./settings";

const controller = {
	init(game) {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'j') {
				if (!game.hasStarted) {
					game.hasStarted = true;
					settings.maintTitle.classList.remove('bounceUpAndDown');
					settings.maintTitle.classList.add('fadeout');
					//FUCK THIS SHIT, THIS WILL DO
				}
				birdy.kickInButt()
			}
		});
	}
}

export default controller