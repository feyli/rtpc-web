import BaseScene from './BaseScene.js';

let player;
let obstacles;
let scraps;
let cursors;
let xLimit = 256;
let yLimit = 256;

export default class Level2 extends BaseScene {
    constructor() {
        super('Level2');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(64, 256, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);


        // Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        // Obstacles
        obstacles = this.physics.add.staticGroup();
        obstacles.create(0, 128, 'hollwallbottop').setOrigin(0, 0);
        obstacles.create(32, 128, 'hollwallbotright').setOrigin(0, 0);
        obstacles.create(32, 96, 'hollwallright').setOrigin(0, 0);
        obstacles.create(96, 0, 'hollwallright').setOrigin(0, 0);
        obstacles.create(96, 32, 'hollwallbotleft').setOrigin(0, 0);
        obstacles.create(128, 32, 'hollwallbottop').setOrigin(0, 0);
        obstacles.create(256, 64, 'hollwallbottop').setOrigin(0, 0);
        obstacles.create(224, 64, 'hollwallupleft').setOrigin(0, 0);
        obstacles.create(224, 96, 'hollwallright').setOrigin(0, 0);
        obstacles.create(224, 224, 'hollwallright').setOrigin(0, 0);
        obstacles.create(224, 256, 'hollwallright').setOrigin(0, 0);
        obstacles.refresh();
    
        this.physics.add.collider(player, obstacles);

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

        const scrapCollider = this.physics.add.collider(player, scraps, (player, scrap) => {
            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        scrapCollider.overlapOnly = true;

        const ladderCollider = this.physics.add.collider(player, ladderGroup, () => {
            if (ladderState === 4) this.scene.start('Level3');
        })

        ladderCollider.overlapOnly = true;

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() { this.updateShared(player) };
}