
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "../../phaserjs_editor_scripts_base/UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FixedToCameraComp extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__FixedToCameraComp"] = this;

		/* START-USER-CTR-CODE */
		this.gameObject.setScrollFactor(0, 0);
		/* END-USER-CTR-CODE */
	}

	/** @returns {FixedToCameraComp} */
	static getComponent(gameObject) {
		return gameObject["__FixedToCameraComp"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
