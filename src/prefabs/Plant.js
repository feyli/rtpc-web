
// You can write more code here

import Player from "./Player.js";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Plant extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 199, y ?? 133.5, texture || "atlas", frame ?? "piranha-plant/piranha-plant-1");

		scene.physics.add.existing(this, false);
		this.body.setOffset(0, 16);
		this.body.setSize(60, 29, false);
		this.play("piranha-plant");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		/** @type {Player} */
		const player = this.scene.player;

		this.flipX = this.x < player.x;

		const distance = Phaser.Math.Distance.BetweenPoints(this, player);

		if (distance < 65) {

			this.play("piranha-plant-attack", true);

		} else {

			this.play("piranha-plant", true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
