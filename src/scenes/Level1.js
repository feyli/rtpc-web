// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level1.js
import BaseScene from './BaseScene.js';

let scraps;
let player;

export default class Level1 extends BaseScene {
    constructor() {
        super('Level1');
    }

    create() {
        this.createShared();

        // player
        player = this.physics.add.sprite(2*32, 4*32, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(256, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(5*32, 4*32, 'object1').setDisplayOrigin(0, 0);
        scraps.create(5*32, 0, 'object2').setDisplayOrigin(0, 0);

        scraps.refresh();

        this.physics.add.overlap(player, scraps, (player, scrap) => {
            if (player.x !== scrap.x || player.y !== scrap.y) return;

            scrap.destroy();
            ladderState += 2;
            ladder.setTexture('ladder' + ladderState);
        });

        this.physics.add.overlap(player, ladder, (player, ladder) => {
            if (player.x !== ladder.x || player.y !== ladder.y) return;

            if (ladderState === 4) this.scene.start('Level2');
        });

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() { this.updateShared(player); };
}
