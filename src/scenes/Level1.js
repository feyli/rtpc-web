// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level1.js
import BaseScene from './BaseScene.js';

let player;
let scraps;
let cursors;
const xLimit = 256;
const yLimit = 256;

export default class Level1 extends BaseScene {
    constructor() {
        super('Level1');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(0, 0, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);

        // Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(256, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(96, 192, 'object1').setDisplayOrigin(0, 0);
        scraps.create(192, 160, 'object2').setDisplayOrigin(0, 0);
        scraps.create(160, 32, 'object3').setDisplayOrigin(0, 0);
        scraps.create(32, 32, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        const scrapCollider = this.physics.add.collider(player, scraps, (player, scrap) => {
            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        scrapCollider.overlapOnly = true;

        const ladderCollider = this.physics.add.collider(player, ladderGroup, () => {
            if (ladderState === 4) this.scene.start('Level2');
        })

        ladderCollider.overlapOnly = true;

        // Camera bounds
        this.cameras.main.setBounds(0, 0, xLimit, yLimit);
    }

    update() {
        // Movement
        if (cursors.left.isDown && player.x >= 0) {
            player.setVelocityX(-200);
        } else if (cursors.right.isDown && player.x <= xLimit) {
            player.setVelocityX(200);
        } else {
            player.setVelocityX(0);
        }

        if (cursors.up.isDown && player.y >= 0) {
            player.setVelocityY(-200);
        } else if (cursors.down.isDown && player.y <= yLimit) {
            player.setVelocityY(200);
        } else {
            player.setVelocityY(0);
        }
    }
}
