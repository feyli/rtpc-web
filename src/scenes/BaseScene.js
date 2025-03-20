import Phaser from 'phaser';
import { ee } from "../main.js";

let currentInstruction = null;
let targetX = 0;
let targetY = 0;
let lastInstructionTime = 0;
let lastX = 0;
let lastY = 0;
const stuckThreshold = 1000;
const xLimit = 256;
const yLimit = 256;

let walkSideConfig = {
    key: "walk_side",

    frames: [
        { key: "kidside1", frame: 0 },
        { key: "kidside2", frame: 1 },
    ],

    sortFrames: true,
    defaultTextureKey: 'kidside1',
    skipMissedFrames: true,
    randomFrame: false,

    // time
    delay: 0,
    duration: null,
    frameRate: 16,
    timeScale: 1,

    // repeat
    repeat: -1, // set to (-1) to repeat forever
    repeatDelay: 0,
    yoyo: false,

    // visible
    showBeforeDelay: false,
    showOnStart: false,
    hideOnComplete: false,
};

let walkUpConfig = {
    key: "walk_up",
    frames: [
        { key: "kidup1", frame: 0 },
        { key: "kidup2", frame: 1 },
        { key: "kidup3", frame: 2 },
        { key: "kidup4", frame: 3 },
    ],

    sortFrames: true,
    defaultTextureKey: 'kidside1',
    skipMissedFrames: true,
    randomFrame: false,

    // time
    delay: 0,
    duration: null,
    frameRate: 16,
    timeScale: 1,

    // repeat
    repeat: -1, // set to (-1) to repeat forever
    repeatDelay: 0,
    yoyo: false,

    // visible
    showBeforeDelay: false,
    showOnStart: false,
    hideOnComplete: false,
};

let walkDownConfig = {
    key: "walk_down",
    frames: [
        { key: "kiddown1", frame: 0 },
        { key: "kiddown2", frame: 1 },
        { key: "kiddown3", frame: 2 },
        { key: "kiddown4", frame: 3 },
    ],

    sortFrames: true,
    defaultTextureKey: 'kidside1',
    skipMissedFrames: true,
    randomFrame: false,

    delay: 0,
    duration: null,
    frameRate: 16,
    timeScale: 1,

    repeat: -1, // set to (-1) to repeat forever
    repeatDelay: 0,
    yoyo: false,

    showBeforeDelay: false,
    showOnStart: false,
    hideOnComplete: false,
};

export default class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    xLimit;
    yLimit;

    createShared() {
        window.currentScene = this.scene.key;
        ee.emit('clearWorkspace');
        window.queue = [];
        this.add.image(0, 0, 'floor').setScale(1).setDisplayOrigin(0, 0);
        // this.add.image(0, 0, 'quadrillage').setScale(1).setOrigin(0, 0).setAlpha(0.5);
        this.add.grid(0, 0, 288, 288, 32, 32, null, 0, 0x305C03, 0.5).setOrigin(0, 0);

        // Configure animations
        this.anims.create(walkSideConfig);
        this.anims.create(walkUpConfig);
        this.anims.create(walkDownConfig);

        ee.on('restart', () => {
            this.scene.restart();
        });
    }

    updateShared(player) {
        if (player.x > xLimit) {
            player.x = xLimit;
            player.anims.stop('walk_side');
        } else if (player.y > yLimit) {
            player.y = yLimit;
            player.anims.stop('walk_down');
        } else if (player.x < 0) {
            player.x = 0;
            player.anims.stop('walk_side');
        } else if (player.y < 0) {
            player.y = 0;
            player.anims.stop('walk_up');
        }

        // Check if we got stuck
        if (currentInstruction) {
            if (this.time.now - lastInstructionTime > stuckThreshold && player.x === lastX && player.y === lastY) {
                currentInstruction = null;
                lastInstructionTime = this.time.now;
            }
        }

        // Queue processing
        if (!currentInstruction && window.queue.length > 0) {
            if (this.time.now - lastInstructionTime > 300) {
                currentInstruction = window.queue.shift();
                switch (currentInstruction) {
                    case 'up':
                        targetY = player.y - 32;
                        player.anims.play('walk_up', true);
                        break;
                    case 'down':
                        targetY = player.y + 32;
                        player.play('walk_down', true);
                        break;
                    case 'left':
                        targetX = player.x - 32;
                        player.setFlipX(false);
                        player.play('walk_side', true);
                        break;
                    case 'right':
                        targetX = player.x + 32;
                        player.setFlipX(true);
                        player.play('walk_side', true);
                        break;
                }
                lastX = player.x;
                lastY = player.y;
            }
        }

        switch (currentInstruction) {
            case 'up':
                if (player.y > targetY) {
                    player.y--;
                } else {
                    player.anims.stop('walk_up');
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                    player.setTexture('kidup1');
                }
                break;

            case 'right':
                if (player.x < targetX) {
                    player.x++;
                } else {
                    player.anims.stop('walk_side');
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                    player.setTexture('kidside1');
                }
                break;

            case 'down':
                if (player.y < targetY) {
                    player.y++;
                } else {
                    player.anims.stop('walk_down');
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                    player.setTexture('kiddown1');
                }
                break;

            case 'left':
                if (player.x > targetX) {
                    player.x--;
                } else {
                    player.anims.stop('walk_side');
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                    player.setTexture('kidside1');
                }
                break;

            default:
                // Update last known position if moving
                lastX = player.x;
                lastY = player.y;
        }
    }
}