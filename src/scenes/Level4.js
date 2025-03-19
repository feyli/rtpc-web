import BaseScene from './BaseScene.js';

let player;
let scraps;
let cursors;
let wall;
const xLimit = 256;
const yLimit = 256;

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

        // Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        // Ladder
        let ladderState = 0;
        const ladderGroup = this.physics.add.staticGroup();
        const ladder = ladderGroup.create(128, 128, 'ladder0').setDisplayOrigin(0, 0);
        ladderGroup.refresh();

        //wall 
        wall = this.physics.add.staticGroup();
        //wall.create(112, 144, 'wallbottom');

        for (let i = 0; i < 7; i++){
            wall.create(270-(32*i), 240, 'wallbottom');
        }

        for (let i = 0; i < 5; i++){
            wall.create(46, 208-(32*i), 'wallleft');
        }

        for (let i = 0; i < 5; i++){
            wall.create(78+(32*i), 50, 'walltop');
        }

        for (let i = 0; i < 3; i++){
            wall.create(236, 80+(32*i), 'wallright');
        }

        for (let i = 0; i < 3; i++){
            wall.create(210-(32*i), 176, 'wallbottom');
        }

        for (let i = 0; i < 2; i++){
            wall.create(115, 146-(32*i), 'wallleft');
        }

        wall.create(46, 240, 'wallbotleft');
        wall.create(46, 50, 'wallupleft');
        wall.create(236, 50, 'wallupright');
        wall.create(236, 176, 'wallbotright');
        wall.create(115, 176, 'wallbotleft');


        
        
        this.physics.add.collider(player, wall);


        // Scraps
        scraps = this.physics.add.staticGroup();
        scraps.create(0, 256, 'object1').setDisplayOrigin(0, 0);
        scraps.create(64, 192, 'object2').setDisplayOrigin(0, 0);
        scraps.create(192, 128, 'object3').setDisplayOrigin(0, 0);
        scraps.create(256, 192, 'object1').setDisplayOrigin(0, 0);

        scraps.refresh();

        const scrapCollider = this.physics.add.collider(player, scraps, (player, scrap) => {
            scrap.destroy();
            ladder.setTexture('ladder' + ++ladderState);
        });

        scrapCollider.overlapOnly = true;

        const ladderCollider = this.physics.add.collider(player, ladderGroup, () => {
            if (ladderState === 4) this.scene.start('Level5');
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