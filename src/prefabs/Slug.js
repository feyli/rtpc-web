
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Slug extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 156, y ?? 99, texture || "atlas", frame ?? "slug/slug-1");

		this.setOrigin(0.5, 1);
		scene.physics.add.existing(this, false);
		this.body.gravity.y = 500;
		this.body.bounce.x = 1;
		this.body.setOffset(7, 10);
		this.body.setSize(20, 11, false);
		this.play("slug");

		/* START-USER-CTR-CODE */
		this.body.velocity.x = this.speed;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	speed = 40;

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		this.flipX = this.body.velocity.x > 0;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
