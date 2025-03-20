// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level2.js
import BaseScene from './BaseScene.js';

let player;
let walls;
let scraps;

export default class Level2 extends BaseScene {
    constructor() {
        super('Level2');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(0, 256, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);

        // Obstacles
        walls = this.physics.add.staticGroup();
        walls.create(64, 32, 'wallsideleft').setOrigin(0, 0);
        walls.create(96, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(128, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(160, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(192, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(224, 32, 'hollwallbottop').setOrigin(0, 0);
        walls.create(256, 32, 'wallsideright').setOrigin(0, 0);
        walls.create(0, 128, 'wallsideleft').setOrigin(0, 0);
        walls.create(32, 128, 'hollwallbottop').setOrigin(0, 0);
        walls.create(64, 128, 'hollwallbottop').setOrigin(0, 0);
        walls.create(96, 128, 'hollwallbottop').setOrigin(0, 0);
        walls.create(128, 128, 'hollwallbottop').setOrigin(0, 0);
        walls.create(160, 128, 'wallsideright').setOrigin(0, 0);
        walls.create(128, 224, 'wallsideleft').setOrigin(0, 0);
        walls.create(160, 224, 'hollwallbottop').setOrigin(0, 0);
        walls.create(192, 224, 'hollwallbottop').setOrigin(0, 0);
        walls.create(224, 224, 'hollwallbottop').setOrigin(0, 0);
        walls.create(256, 224, 'wallsideright').setOrigin(0, 0);

        walls.refresh();
    
        this.physics.add.collider(player, walls);

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(256, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(192, 64, 'object1').setDisplayOrigin(0, 0);
        scraps.create(0, 96, 'object2').setDisplayOrigin(0, 0);
        scraps.create(192, 160, 'object3').setDisplayOrigin(0, 0);
        scraps.create(256, 256, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        this.physics.add.overlap(player, scraps, (player, scrap) => {
            if (player.x !== scrap.x || player.y !== scrap.y) return;

            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        this.physics.add.overlap(player, ladder, (player, ladder) => {
            if (player.x !== ladder.x || player.y !== ladder.y) return;

            if (ladderState === 4) this.scene.start('Level3');
        })

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() {
        this.updateShared(player, walls);
    }
}
