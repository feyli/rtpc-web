
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 145, y ?? 112, texture || "atlas", frame ?? "player-idle/player-idle-1");

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 300;
		this.body.setOffset(10, 6);
		this.body.setSize(12, 26, false);
		this.play("player-idle");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	alive = true;
	health = 3;
	onLadder = false;

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		if (this.onLadder) {

			this.body.gravity.y = 0;

		} else {

			this.body.gravity.y = 300;
		}

		this.onLadder = false;
	}

	death() {

		this.alive = false;

		this.body.velocity.x = 0;
		this.body.velocity.y = -400;
		this.health = 0;
	}

	increaseHealth() {

		this.health++;

		if (this.health > 3) {

			this.health = 3;
		}

		this.scene.sound.play("carrot");
	}

	smashEnemy() {

		this.body.velocity.y = -300;

		this.scene.sound.play("enemy-death");
	}

	hurt() {

		if (this.hurtFlag) {

			return;
		}

		this.hurtFlag = true;

		this.play("player-hurt");
		this.y -= 5;

		this.body.velocity.y = -150;
		this.body.velocity.x = this.flipX ? -22 : 22;
		this.health--;

		this.scene.sound.play("hurt");

		if (this.health < 1) {

			this.death();

		} else {

			this.scene.time.delayedCall(300, () => {

				this.hurtFlag = false;
			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
