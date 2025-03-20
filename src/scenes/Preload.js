import BaseScene from './BaseScene.js';

export default class Preload extends BaseScene {
    constructor() {
        super('Preload');
    }

    preload() {
        // Load shared assets once
        this.load.image('floor', 'assets/background288.webp');
        this.load.image('floor2', 'assets/placeholder2.webp');
        this.load.image('player', 'assets/circle.webp');
        this.load.image('object1', 'assets/metal_pipe.webp');
        this.load.image('object2', 'assets/metal_plate.webp');
        this.load.image('object3', 'assets/metal_can.webp');
        this.load.image('ladder0', 'assets/ladder_step_0.webp');
        this.load.image('ladder1', 'assets/ladder_step_1.webp');
        this.load.image('ladder2', 'assets/ladder_step_2.webp');
        this.load.image('ladder3', 'assets/ladder_step_3.webp');
        this.load.image('ladder4', 'assets/ladder_step_4.webp');
        this.load.image('obstacle', 'assets/obstacle.webp');
        this.load.image('kidside1', 'assets/kid_side1.webp');
        this.load.image('kidside2', 'assets/kid_side2.webp');
        this.load.image('kidup1', 'assets/kid_back1.webp');
        this.load.image('kidup2', 'assets/kid_back2.webp');
        this.load.image('kidup3', 'assets/kid_back3.webp');
        this.load.image('kidup4', 'assets/kid_back4.webp');
        this.load.image('kiddown1', 'assets/kid_front1.webp');
        this.load.image('kiddown2', 'assets/kid_front2.webp');
        this.load.image('kiddown3', 'assets/kid_front3.webp');
        this.load.image('kiddown4', 'assets/kid_front4.webp');

        // Load walls
        this.load.image('wallbotleft', 'assets/wall_bottom_left.webp');
        this.load.image('wallbotright', 'assets/wall_bottom_right.webp');
        this.load.image('wallupleft', 'assets/wall_top_left.webp');
        this.load.image('wallupright', 'assets/wall_top_right.webp');
        this.load.image('wallleft', 'assets/wall_left.webp');
        this.load.image('wallright', 'assets/wall_right.webp');
        this.load.image('walltop', 'assets/wall_top.webp');
        this.load.image('wallbottom', 'assets/wall_bottom.webp');
        this.load.image('wallcenter', 'assets/wall_center.webp');
        this.load.image('wall', 'assets/wall.webp');
        this.load.image('hollwallbotleft', 'assets/wall_hollow_bottom_left.webp');
        this.load.image('hollwallbotright', 'assets/wall_hollow_bottom_right.webp');
        this.load.image('hollwallupleft', 'assets/wall_hollow_top_left.webp');
        this.load.image('hollwallupright', 'assets/wall_hollow_top_right.webp');
        this.load.image('hollwallleft', 'assets/wall_hollow_left.webp');
        this.load.image('hollwallright', 'assets/wall_hollow_right.webp');
        this.load.image('hollwallbottop', 'assets/wall_hollow_bottop.webp');
        this.load.image('wallsidebot', 'assets/wall_side_bottom.webp');
        this.load.image('wallsidecenter', 'assets/wall_side_center.webp');
        this.load.image('wallsideleft', 'assets/wall_side_left.webp');
        this.load.image('wallsideright', 'assets/wall_side_right.webp');
        this.load.image('wallsidetop', 'assets/wall_side_top.webp');
    }

    create() {
        // Proceed to Level1 when ready
        this.scene.start('Level1');
    }
}