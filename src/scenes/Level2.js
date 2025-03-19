import BaseScene from './BaseScene.js';

let player;
let obstacles;
let cursors;
let xLimit;
let yLimit;

export default class Level1 extends BaseScene {
    constructor() {
        super('Level2');
    }

    create() {
        this.createShared();

        /// Background
        const bg = this.add.image(0, 0, 'floor').setScale(1);
        //calcule léchelle de la scène 
        const scaleX = this.scale.width / bg.width;
        const scaleY = this.scale.height / bg.height;
        const scale = Math.max(scaleX, scaleY); 
        bg.setScale(scale);
        bg.x = bg.displayWidth / 2;
        bg.y = bg.displayHeight / 2;
        xLimit = bg.displayWidth;
        yLimit = bg.displayHeight;


        // Player
        player = this.physics.add.sprite(100, 650, 'player');
        player.setScale(0.4);

        // Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        // Obstacles
        obstacles = this.physics.add.staticGroup();
        obstacles.create(400, 500, 'obstacle');
        obstacles.create(200, 250, 'obstacle');
        this.physics.add.collider(player, obstacles);

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

        if (player.x > 700) {
            // Change scene
            this.scene.start('Level1');
        }
    }
}