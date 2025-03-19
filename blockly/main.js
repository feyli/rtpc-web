// filepath: /Users/mathis/Documents/dev/rtpc-web/blockly/main.js
// Import Blockly core.
import * as Blockly from 'blockly/core';
// Import a generator.
import {javascriptGenerator} from 'blockly/javascript';
// Import a message file
import * as Fr from 'blockly/msg/fr';
import { ee } from "../src/main.js";

Blockly.setLocale(Fr);

const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
        {
            kind: 'block',
            type: 'left'
        },
        {
            kind: 'block',
            type: 'right'
        },
        {
            kind: 'block',
            type: 'up'
        },
        {
            kind: 'block',
            type: 'down'
        },
        {
            kind: 'block',
            type: 'controls_repeat_ext'
        }
    ]
}

Blockly.Blocks['left'] = {
    init: function() {
        this.appendDummyInput().appendField("Se déplacer à gauche");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
};


Blockly.Blocks['right'] = {
    init: function() {
        this.appendDummyInput().appendField("Se déplacer à droite");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
};

Blockly.Blocks['up'] = {
    init: function () {
        this.appendDummyInput().appendField("Se déplacer vers le haut");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
}

Blockly.Blocks['down'] = {
    init: function() {
        this.appendDummyInput().appendField("Se déplacer vers le bas");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
}

Blockly.Blocks['controls_repeat_ext'] = {
    init: function() {
        // Replaced value input with a numeric field
        this.appendDummyInput()
            .appendField('Répéter')
            .appendField(new Blockly.FieldNumber(1, 1), 'TIMES')
            .appendField('fois');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(255);
        this.setTooltip('Répète un bloc plusieurs fois.');
        this.setInputsInline(true);
        this.appendStatementInput('DO')
            .appendField('faire');
    }
};


function moveRight() {
    ee.emit('moveRight');
}

function moveLeft() {
    ee.emit('moveLeft');
}

function moveUp() {
    ee.emit('moveUp');
}

function moveDown() {
    ee.emit('moveDown');
}

javascriptGenerator.forBlock['left'] = function() {
    return `moveLeft();\n`;
}

javascriptGenerator.forBlock['right'] = function() {
    return `moveRight();\n`;
}

javascriptGenerator.forBlock['up'] = function() {
    return `moveUp();\n`;
}

javascriptGenerator.forBlock['down'] = function() {
    return `moveDown();\n`;
}

const workspace = Blockly.inject('blocklyDiv', {
    media: './node_modules/blockly/media/',
    sounds: false,
    trashcan: true,
    toolbox
});

document.querySelector('#run').addEventListener('click', () => {
    const code = javascriptGenerator.workspaceToCode(workspace);
    eval(code);
});

document.querySelector('#stop').addEventListener('click', () => {
    ee.emit('stop');
    console.log("emitted stop event");
})

