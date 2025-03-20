import BaseScene from './BaseScene.js';

let player;
let walls;
let scraps;

export default class Level3 extends BaseScene {
    constructor() {
        super('Level3');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(64, 256, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);


        // Obstacles
        walls = this.physics.add.staticGroup();
        walls.create(0, 128, 'wallsideleft').setOrigin(0, 0);
        walls.create(32, 128, 'hollwallbotright').setOrigin(0, 0);
        walls.create(32, 96, 'wallsidetop').setOrigin(0, 0);
        walls.create(96, 0, 'wallsidetop').setOrigin(0, 0);
        walls.create(96, 32, 'hollwallbotleft').setOrigin(0, 0);
        walls.create(128, 32, 'wallsideright').setOrigin(0, 0);
        walls.create(256, 64, 'wallsideright').setOrigin(0, 0);
        walls.create(224, 64, 'hollwallupleft').setOrigin(0, 0);
        walls.create(224, 96, 'wallsidebot').setOrigin(0, 0);
        walls.create(224, 224, 'wallsidetop').setOrigin(0, 0);
        walls.create(224, 256, 'wallsidebot').setOrigin(0, 0);

        walls.refresh();
    
        this.physics.add.collider(player, walls);

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(128, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(0, 96, 'object1').setDisplayOrigin(0, 0);
        scraps.create(256, 96, 'object2').setDisplayOrigin(0, 0);
        scraps.create(256, 256, 'object3').setDisplayOrigin(0, 0);
        scraps.create(128, 128, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        this.physics.add.overlap(player, scraps, (player, scrap) => {
            if (player.x !== scrap.x || player.y !== scrap.y) return;

            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        this.physics.add.overlap(player, ladderGroup, () => {
            if (player.x !== ladder.x || player.y !== ladder.y) return;

            if (ladderState === 4) this.scene.start('Level4');
        })

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() { this.updateShared(player) };
}