import BaseScene from './BaseScene.js';

let player;
let scraps;
let cursors;
let wall;
const xLimit = 256;
const yLimit = 256;

export default class Level5 extends BaseScene {
    constructor() {
        super('Level5');
    }

    create() {
        this.createShared();

        // Player
        player = this.physics.add.sprite(130, 256, 'kidback1').setDisplayOrigin(0, 0);
        player.setScale(1);
        player.setFlipX(true);

        // Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(128, 0, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        //wall 
        wall = this.physics.add.staticGroup();
        //bas
        wall.create(144, 240, 'wallbottom');
        wall.create(176, 240, 'wallbottom');
        wall.create(112, 240, 'wallbottom');
        wall.create(80, 240, 'wallbotleft');
        wall.create(208, 240, 'wallbotright');

        
        wall.create(144, 50, 'walltop');
        wall.create(176, 50, 'walltop');
        wall.create(112, 50, 'walltop');
        wall.create(80, 50, 'wallupleft');
        wall.create(208, 50, 'wallupright');

        for (let i = 0; i < 6; i++){
            wall.create(144, 50+(32*i), 'wallleft');
        }

        wall.create(14, 176, 'wallbottom');
        wall.create(46, 176, 'wallbottom');
        wall.create(78, 176, 'wallbotright');

        wall.create(274, 176, 'wallbottom');
        wall.create(242, 176, 'wallbottom');
        wall.create(210, 176, 'wallbotleft');
        


        this.physics.add.collider(player, wall);


        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(0, 128, 'object1').setDisplayOrigin(0, 0);
        scraps.create(96, 0, 'object2').setDisplayOrigin(0, 0);
        scraps.create(160, 0, 'object3').setDisplayOrigin(0, 0);
        scraps.create(256, 128, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        const scrapCollider = this.physics.add.collider(player, scraps, (player, scrap) => {
            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        scrapCollider.overlapOnly = true;

        const ladderCollider = this.physics.add.collider(player, ladderGroup, () => {
            if (ladderState === 4) this.scene.start('Level4');
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