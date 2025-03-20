// filepath: /Users/mathis/Documents/dev/rtpc-web/blockly/main.js
// Import Blockly core.
import * as Blockly from 'blockly/core';
// Import a generator.
import { javascriptGenerator } from 'blockly/javascript';
// Import a message file
import * as Fr from 'blockly/msg/fr';
import { ee } from "../src/main.js";

Blockly.setLocale(Fr);

const toolbox1 = {
    kind: 'flyoutToolbox',
    contents: [
        {
            kind: 'block',
            type: 'right'
        },
        {
            kind: 'block',
            type: 'up'
        },
    ]
}

const toolbox2 = {
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

const toolboxes = {
    'Level1': toolbox1,
    'Level2': toolbox2,
    'Level3': toolbox2,
    'Level4': toolbox2,
    'Level5': toolbox2,
    'Level6': toolbox2,
}

Blockly.Blocks['left'] = {
    init: function () {
        this.appendDummyInput().appendField("Se déplacer à gauche");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
};


Blockly.Blocks['right'] = {
    init: function () {
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
};

Blockly.Blocks['down'] = {
    init: function () {
        this.appendDummyInput().appendField("Se déplacer vers le bas");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
};

Blockly.Blocks['controls_repeat_ext'] = {
    init: function () {
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
    window.queue.push('right');
}

function moveLeft() {
    window.queue.push('left');
}

function moveUp() {
    window.queue.push('up');
}

function moveDown() {
    window.queue.push('down');
}

javascriptGenerator.forBlock['left'] = function () {
    return `moveLeft();\n`;
};

javascriptGenerator.forBlock['right'] = function () {
    return `moveRight();\n`;
};

javascriptGenerator.forBlock['up'] = function () {
    return `moveUp();\n`;
};

javascriptGenerator.forBlock['down'] = function () {
    return `moveDown();\n`;
};

javascriptGenerator.forBlock['controls_repeat_ext'] = function (block) {
    const repeats = block.getFieldValue('TIMES');
    const branch = javascriptGenerator.statementToCode(block, 'DO');
    let code = '';

    for (let i = 0; i < repeats; i++) {
        code += branch;
    }

    return code;
}

const workspace = Blockly.inject('blocklyDiv', {
    media: './node_modules/blockly/media/',
    sounds: false,
    trashcan: true,
    toolbox: toolboxes[window.currentScene || 'Level1'],
});

document.querySelector('#run').addEventListener('click', () => {
    const code = javascriptGenerator.workspaceToCode(workspace);
    eval(code);
});

document.querySelector('#stop').addEventListener('click', () => {
    window.queue = [];
});

ee.on('clearWorkspace', () => {
    workspace.clear();
    window.queue = [];
    if (workspace) workspace.updateToolbox(toolboxes[window.currentScene]);
})
