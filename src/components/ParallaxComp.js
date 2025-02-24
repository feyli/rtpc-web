
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "../../phaserjs_editor_scripts_base/UserComponent.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ParallaxComp extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ParallaxComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ParallaxComp} */
	static getComponent(gameObject) {
		return gameObject["__ParallaxComp"];
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	gameObject;
	/** @type {number} */
	factor = 0.5;

	/* START-USER-CODE */

	update() {

		const x = this.gameObject.scene.cameras.main.scrollX * this.factor;
		this.gameObject.tilePositionX = Math.floor(x);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
