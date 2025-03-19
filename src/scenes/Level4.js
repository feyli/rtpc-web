import BaseScene from './BaseScene.js';

let player;
let obstacles;
let cursors;
let xLimit;
let yLimit;

export default class Level2s extends BaseScene {
    constructor() {
        super('Level4');
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
        player = this.physics.add.sprite(400, 650, 'player');
        player.setScale(0.4);

        // Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        // Obstacles
        obstacles = this.physics.add.staticGroup();
        obstacles.create(400, 500, 'wall3');
        obstacles.create(400, 500, 'wall3');
        obstacles.create(400, 500, 'wall3');
        obstacles.angle += 90;  
        this.physics.add.collider(player, obstacles);

        //map 
        const mapData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        const tileTypes = ["rien", "wall1"];

        function generateMap() {
            const mapElement = document.getElementById("map");
            mapElement.innerHTML = "";
            mapData.forEach(row => {
                row.forEach(tile => {
                    const div = document.createElement("div");
                    div.classList.add("tile", tileTypes[tile]);
                    mapElement.appendChild(div);
                });
            });
        }

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