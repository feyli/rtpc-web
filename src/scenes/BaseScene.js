import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    createShared() {
        this.add.image(0, 0, 'floor').setScale(1).setDisplayOrigin(0, 0);
        // this.add.image(0, 0, 'quadrillage').setScale(1).setOrigin(0, 0).setAlpha(0.5);
        this.add.grid(0, 0, 288, 288, 32, 32, null, 0, 0x305C03, 0.5).setOrigin(0, 0);
    }
}