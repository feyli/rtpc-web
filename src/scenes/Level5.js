// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level5.js
// filepath: /Users/mathis/Documents/dev/rtpc-web/src/scenes/Level5.js
import BaseScene from './BaseScene.js';

let player;
let scraps;
let walls;

export default class Level5 extends BaseScene {
    constructor() {
        super('Level5');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(128, 256, 'kidup1').setDisplayOrigin(0, 0);
        player.setScale(1);

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(128, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        //walls
        walls = this.physics.add.staticGroup();
        //bas
        walls.create(128, 224, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(160, 224, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(96, 224, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(64, 224, 'wallbotleft').setDisplayOrigin(0, 0);
        walls.create(192, 224, 'wallbotright').setDisplayOrigin(0, 0);

        
        walls.create(128, 32, 'walltop').setDisplayOrigin(0, 0);
        walls.create(160, 32, 'walltop').setDisplayOrigin(0, 0);
        walls.create(96, 32, 'walltop').setDisplayOrigin(0, 0);
        walls.create(64, 32, 'wallupleft').setDisplayOrigin(0, 0);
        walls.create(192, 32, 'wallupright').setDisplayOrigin(0, 0);

        for (let i = 1; i < 6; i++){
            walls.create(128, 32+(32*i), 'wallsidecenter').setDisplayOrigin(0, 0);
        }

        walls.create(0, 160, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(32, 160, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(64, 160, 'wallbotright').setDisplayOrigin(0, 0);

        walls.create(256, 160, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(224, 160, 'wallbottom').setDisplayOrigin(0, 0);
        walls.create(192, 160, 'wallbotleft').setDisplayOrigin(0, 0);
        
        walls.refresh();

        this.physics.add.collider(player, walls);

        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(0, 128, 'object1').setDisplayOrigin(0, 0);
        scraps.create(96, 0, 'object2').setDisplayOrigin(0, 0);
        scraps.create(160, 0, 'object3').setDisplayOrigin(0, 0);
        scraps.create(256, 128, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        this.physics.add.overlap(player, scraps, (player, scrap) => {
            if (player.x !== scrap.x || player.y !== scrap.y) return;

            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        this.physics.add.overlap(player, ladder, () => {
            if (player.x !== ladder.x || player.y !== ladder.y) return;

            if (ladderState === 4) this.scene.start('Level6');
        })

        // Camera bounds
        this.cameras.main.setBounds(0, 0, this.xLimit, this.yLimit);
        player.setToTop();
    }

    update() {
        this.updateShared(player, walls);
    }
}

