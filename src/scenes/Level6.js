// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level6.js
import BaseScene from './BaseScene.js';

let player;
let walls;
let scraps;

export default class Level6 extends BaseScene {
    constructor() {
        super('Level6');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(96, 256, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);

        // Obstacles
        walls = this.physics.add.staticGroup();
        walls.create(64, 32, 'wallsideleft').setOrigin(0, 0);
        walls.create(96, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(128, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(160, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(192, 32, 'hollwallbotright').setOrigin(0, 0);
        walls.create(192, 0, 'wallsidetop').setOrigin(0, 0);

        walls.create(64, 256, 'wallsidebot').setOrigin(0, 0);
        walls.create(64, 224, 'hollwallupleft').setOrigin(0, 0);
        walls.create(96, 224, 'hollwallbottop').setOrigin(0, 0);
        walls.create(128, 224, 'hollwallbottop').setOrigin(0, 0);
        walls.create(160, 224, 'hollwallbottop').setOrigin(0, 0);
        walls.create(192, 224, 'wallsideright').setOrigin(0, 0);

        walls.create(64, 96, 'wall').setOrigin(0, 0);
        walls.create(128, 96, 'wallsidetop').setOrigin(0, 0);
        walls.create(192, 96, 'wall').setOrigin(0, 0);

        walls.create(96, 128, 'wallsideleft').setOrigin(0, 0);
        walls.create(128, 128, 'wallsidecenter').setOrigin(0, 0);
        walls.create(160, 128, 'wallsideright').setOrigin(0, 0);

        walls.create(64, 160, 'wall').setOrigin(0, 0);
        walls.create(128, 160, 'wallsidebot').setOrigin(0, 0);
        walls.create(192, 160, 'wall').setOrigin(0, 0);

        walls.refresh();

        this.physics.add.collider(player, walls);

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(160, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(256, 0, 'object1').setDisplayOrigin(0, 0);
        scraps.create(96, 96, 'object2').setDisplayOrigin(0, 0);
        scraps.create(160, 160, 'object3').setDisplayOrigin(0, 0);
        scraps.create(0, 256, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        this.physics.add.overlap(player, scraps, (player, scrap) => {
            if (player.x !== scrap.x || player.y !== scrap.y) return;

            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        this.physics.add.overlap(player, ladder, () => {
            if (player.x !== ladder.x || player.y !== ladder.y) return;

            if (ladderState >= 4) document.location.href = "/congrats.html";
        });

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() {
        this.updateShared(player, walls);
    }
}
