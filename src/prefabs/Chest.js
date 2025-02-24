
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import LootStar from "./LootStar.js";
/* END-USER-IMPORTS */

export default class Chest extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 184, y ?? 138.5, texture || "atlas", frame ?? "chest/chest-1");

		this.setOrigin(0.5, 1);
		scene.physics.add.existing(this, false);
		this.body.setOffset(9, 13);
		this.body.setSize(19, 12, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	opened = false;

	open() {

		this.opened = true;

		this.play("chest");

		for (var i = 0; i <= 5; i++) {

			var temp = new LootStar(this.scene, this.x, this.y - 15);

			this.scene.lootLayer.add(temp);
		}

		this.scene.sound.play("chest");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
