import Phaser from 'phaser';
import { ee } from '../main.js';

export default class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    createShared() {
        // Example: listen for events from the emitter
        ee.on('moveLeft', () => {
            // To be completed
        });
        ee.on('moveRight', () => {
            // To be completed
        });
    }

    showGrid() {
        const grid = this.add.image(0, 0, 'quadrillage').setScale(1);
        grid.x = grid.displayWidth / 2;
        grid.y = grid.displayHeight / 2;
    }
}