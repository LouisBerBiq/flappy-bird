import menuElements from "./menuElements.js";

const UImanager = {
	addClass(target, className) {
		target.classList.add(className);
	},
	removeClass(target, className) {
		target.classList.remove(className);
	},
	replaceClass(target, className1, className2) {
		target.classList.replace(className1, className2);
	},
	toggleClass() {

	}
}

export default UImanager