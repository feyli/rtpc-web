import GameOver from "./scenes/GameOver.js";
import Home from "./scenes/Home.js";
import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";
export const ee = new Phaser.Events.EventEmitter();

window.addEventListener('load', function () {

	let game = new Phaser.Game({
		width: 320,
		height: 240,
		parent: 'game',
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		render: {
			pixelArt: true
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: true
			}
		}
	});


	game.scene.add("Preload", Preload);
	game.scene.add("Home", Home);
	game.scene.add("Level", Level);
	game.scene.add("GameOver", GameOver);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}