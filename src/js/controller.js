import birdy from "./birdy";

const controller = {
	init(game) {

		// press key //
		document.addEventListener('keydown', (e) => {
			if (e.key === 'j') {
				if (!game.hasStarted) {
					game.hasStarted = true;
				}
				birdy.kickInButt()
			}
		});
	}
}

export default controller