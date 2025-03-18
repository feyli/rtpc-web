import BaseScene from './BaseScene.js';

export default class Preload extends BaseScene {
    constructor() {
        super('Preload');
    }

    preload() {
        // Load shared assets once
        this.load.image('floor', 'assets/placeholder.webp');
        this.load.image('floor2', 'assets/placeholder2.webp');
        this.load.image('circle', 'assets/circle.webp');
        this.load.image('obstacle', 'assets/obstacle.webp');
    }

    create() {
        // Proceed to Level1 when ready
        this.scene.start('Level1');
    }
}