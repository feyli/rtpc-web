
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bee extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 161, y ?? 101, texture || "atlas", frame ?? "bee/bee-1");

		scene.physics.add.existing(this, false);
		this.body.setOffset(11, 13);
		this.body.setSize(15, 18, false);
		this.play("bee");

		/* START-USER-CTR-CODE */

		this.scene.events.once("scene-awake", () => {

			if (this.horizontal) {

				this.body.velocity.x = this.speed;
				this.body.velocity.y = 0;

			} else {

				this.body.velocity.x = 0;
				this.body.velocity.y = this.speed;
			}
		});

		this.initX = x;
		this.initY = y;
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	distance = 0;
	/** @type {boolean} */
	horizontal = false;

	/* START-USER-CODE */

	speed = 40;

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		if (this.horizontal) {

			this.horizontalMove();

		} else {

			this.verticalMove();
		}
	}

	verticalMove() {

		if (!this.visible) {
			return;
		}

		if (this.body.velocity.y > 0 && this.y > this.initY + this.distance) {

			this.body.velocity.y = -40;

		} else if (this.body.velocity.y < 0 && this.y < this.initY - this.distance) {

			this.body.velocity.y = 40;
		}

		this.flipX = this.x < this.scene.player.x;
	}

	horizontalMove() {

		if (this.body.velocity.x > 0 && this.x > this.initX + this.distance) {

			this.body.velocity.x = -40;

		} else if (this.body.velocity.x < 0 && this.x < this.initX - this.distance) {

			this.body.velocity.x = 40;
		}

		this.flipX = this.body.velocity.x > 0;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
