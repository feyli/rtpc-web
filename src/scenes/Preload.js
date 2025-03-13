import BaseScene from './BaseScene.js';

export default class Preload extends BaseScene {
    constructor() {
        super('Preload');
    }

    preload() {
        // Load shared assets once
        this.load.image('floor', 'assets/placeholder.png');
        this.load.image('floor2', 'assets/placeholder2.png');
        this.load.image('circle', 'assets/circle.png');
        this.load.image('obstacle', 'assets/obstacle.png');
    }

    create() {
        // Proceed to Level1 when ready
        this.scene.start('Level1');
    }
}