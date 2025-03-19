import Phaser from 'phaser';

let currentInstruction = null;
let targetX = 0;
let targetY = 0;
let lastInstructionTime = 0;
let lastX = 0;
let lastY = 0;
const stuckThreshold = 1000;
const xLimit = 256;
const yLimit = 256;

export default class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    xLimit;
    yLimit;

    createShared() {
        window.queue = [];
        this.add.image(0, 0, 'floor').setScale(1).setDisplayOrigin(0, 0);
        // this.add.image(0, 0, 'quadrillage').setScale(1).setOrigin(0, 0).setAlpha(0.5);
        this.add.grid(0, 0, 288, 288, 32, 32, null, 0, 0x305C03, 0.5).setOrigin(0, 0);
    }

    updateShared(player) {
        if (player.x >= xLimit) {
            player.x = xLimit;
        }

        if (player.x <= 0) {
            player.x = 0;
        }

        if (player.y >= yLimit) {
            player.y = yLimit;
        }

        if (player.y <= 0) {
            player.y = 0;
        }

        // Check if we got stuck
        if (currentInstruction) {
            if (this.time.now - lastInstructionTime > stuckThreshold) {
                if (player.x === lastX && player.y === lastY) {
                    currentInstruction = null;
                    lastInstructionTime = this.time.now;
                }
            }
        }

        // Queue processing
        if (!currentInstruction && window.queue.length > 0) {
            if (this.time.now - lastInstructionTime > 300) {
                currentInstruction = window.queue.shift();
                switch (currentInstruction) {
                    case 'up':
                        targetY = player.y - 32;
                        break;
                    case 'down':
                        targetY = player.y + 32;
                        break;
                    case 'left':
                        targetX = player.x - 32;
                        break;
                    case 'right':
                        targetX = player.x + 32;
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
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                }
                break;

            case 'right':
                if (player.x < targetX) {
                    player.x++;
                } else {
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                }
                break;

            case 'down':
                if (player.y < targetY) {
                    player.y++;
                } else {
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                }
                break;

            case 'left':
                if (player.x > targetX) {
                    player.x--;
                } else {
                    lastInstructionTime = this.time.now;
                    currentInstruction = null;
                }
                break;

            default:
                // Update last known position if moving
                lastX = player.x;
                lastY = player.y;
        }
    }
}