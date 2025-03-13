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
}