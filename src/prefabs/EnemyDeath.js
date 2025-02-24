
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnemyDeath extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 148, y ?? 98, texture || "atlas", frame ?? "enemy-death/enemy-death-1");

		this.play("enemy-death");

		/* START-USER-CTR-CODE */
		this.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {

			this.destroy();
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
