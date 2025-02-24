
// You can write more code here

/* START OF COMPILED CODE */

import PressEnter from "../prefabs/PressEnter.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(0, -2, 320, 240, "background");
		background.setOrigin(0, 0);

		// middleground
		const middleground = this.add.tileSprite(0, 0, 384, 240, "middleground");
		middleground.setOrigin(0, 0);

		// press_enter_text
		const press_enter_text = new PressEnter(this, 160, 179);
		this.add.existing(press_enter_text);

		// title_screen
		this.add.image(160, 53, "title-screen");

		// credits_text
		this.add.image(160, 205, "credits-text");

		this.background = background;
		this.middleground = middleground;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.TileSprite} */
	middleground;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {

		this.middleground.tilePositionX += 0.5;
		this.background.tilePositionX += 0.2;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
