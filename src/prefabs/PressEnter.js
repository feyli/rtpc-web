
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PressEnter extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 163, y ?? 107, texture || "press-enter-text", frame);

		/* START-USER-CTR-CODE */

		this.scene.time.addEvent({
			callback: () => {
				this.visible = !this.visible;
			},
			delay: 500,
			repeat: -1
		});

		this.scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.ENTER)
				.on("down", () => this.scene.scene.start(this.nextScene));

		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	nextScene = "Level";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
