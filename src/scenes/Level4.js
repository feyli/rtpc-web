// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level4.js
import BaseScene from './BaseScene.js';

let player;
let scraps;
let walls;

export default class Level4 extends BaseScene {
    constructor() {
        super('Level4');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(256, 256, 'kidside1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(128, 128, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        //walls
        walls = this.physics.add.staticGroup();

        for (let i = 2; i < 9; i++){
            walls.create(32*i, 32*7, 'hollwallbottop').setDisplayOrigin(0, 0);
        }

        for (let i = 2; i < 7; i++){
            walls.create(32, 32*i, 'hollwallleft').setDisplayOrigin(0, 0);
        }

        for (let i = 2; i < 7; i++){
            walls.create(32*i, 32, 'hollwallbottop').setDisplayOrigin(0, 0);
        }

        for (let i = 2; i < 5; i++){
            walls.create(32*7, 32*i, 'hollwallright').setDisplayOrigin(0, 0);
        }

        for (let i = 3; i < 7; i++){
            walls.create(32*i, 32*5, 'hollwallbottop').setDisplayOrigin(0, 0);
        }

        for (let i = 3; i < 5; i++){
            walls.create(32*3, 32*i, 'hollwallleft').setDisplayOrigin(0, 0);
        }

        walls.create(32, 32, 'hollwallupleft').setDisplayOrigin(0, 0);
        walls.create(32*7, 32, 'hollwallupright').setDisplayOrigin(0, 0);
        walls.create(32*7, 32*5, 'hollwallbotright').setDisplayOrigin(0, 0);
        walls.create(32, 32*7, 'hollwallbotleft').setDisplayOrigin(0, 0);
        walls.create(32*3, 32*5, 'hollwallbotleft').setDisplayOrigin(0, 0);

        walls.refresh();
        
        this.physics.add.collider(player, walls);

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(0, 256, 'object1').setDisplayOrigin(0, 0);
        scraps.create(64, 192, 'object2').setDisplayOrigin(0, 0);
        scraps.create(192, 128, 'object3').setDisplayOrigin(0, 0);
        scraps.create(256, 192, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        this.physics.add.overlap(player, scraps, (player, scrap) => {
            if (player.x !== scrap.x || player.y !== scrap.y) return;

            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        this.physics.add.overlap(player, ladderGroup, () => {
            if (player.x !== ladder.x || player.y !== ladder.y) return;

            if (ladderState === 4) this.scene.start('Level5');
        })

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() {
        this.updateShared(player, walls);
    }
}
