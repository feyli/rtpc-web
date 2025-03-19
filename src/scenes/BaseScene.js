import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    createShared() {
        this.add.image(0, 0, 'floor').setScale(1).setDisplayOrigin(0, 0);

        const grid = this.add.image(0, 0, 'quadrillage').setScale(1);
        grid.x = grid.displayWidth / 2;
        grid.y = grid.displayHeight / 2;
    }
}