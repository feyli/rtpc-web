import GameOver from "./scenes/GameOver.js";
import Home from "./scenes/Home.js";
import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 320,
		height: 240,
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
				debug: false
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