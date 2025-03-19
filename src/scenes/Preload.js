import BaseScene from './BaseScene.js';

export default class Preload extends BaseScene {
    constructor() {
        super('Preload');
    }

    preload() {
        // Load shared assets once
        this.load.image('floor', 'assets/background288.png');
        this.load.image('floor2', 'assets/placeholder2.png');
        this.load.image('player', 'assets/circle.png');
        this.load.image('object1', 'assets/metal_can.png');
        this.load.image('object2', 'assets/metal_pipe.png');
        this.load.image('object3', 'assets/metal_plate.png');
        this.load.image('wall1', 'assets/wall.png');
        this.load.image('wall2', 'assets/wall_hollow.png');
        this.load.image('wall3', 'assets/wall_side.png');
        this.load.image('ladder1', 'assets/ladder_step_1.png');
        this.load.image('ladder2', 'assets/ladder_step_2.png');
        this.load.image('ladder3', 'assets/ladder_step_3.png');
        this.load.image('ladder4', 'assets/ladder_step_4.png');
        this.load.image('obstacle', 'assets/obstacle.png');

        this.load.image('cadrillage', 'assets/cadrilage.png');
    }

    create() {
        // Proceed to Level1 when ready
        this.scene.start('Level1');
    }
}