import Phaser from 'phaser';
import Preload from './scenes/Preload.js';
import Level1 from './scenes/Level1.js';
import Level2 from './scenes/Level2.js';
import Level4 from './scenes/Level4.js';

export const ee = new Phaser.Events.EventEmitter();

window.addEventListener('load', () => {
  const config = {
    type: Phaser.CANVAS,
    width: 288,
    height: 288,
    parent: 'game',
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: { debug: false }
    },
    scene: [Preload, Level1, Level2, Level4]
  };
  new Phaser.Game(config);
});