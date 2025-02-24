// Require Blockly core.
const Blockly = require('blockly/core');
// Require the default blocks.
const libraryBlocks = require('blockly/blocks');
// Require a generator.
const { javascriptGenerator } = require('blockly/javascript');

const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
        {
            kind: 'block',
            type: 'controls_if'
        },
        {
            kind: 'block',
            type: 'controls_repeat_ext'
        },
        {
            kind: 'block',
            type: 'logic_compare'
        },
        {
            kind: 'block',
            type: 'math_number'
        },
        {
            kind: 'block',
            type: 'math_arithmetic'
        },
        {
            kind: 'block',
            type: 'text'
        }
    ]
}

const workspace = Blockly.inject('blocklyDiv', {
    media: './node_modules/blockly/media/',
    maxBlocks: 5,
    sounds: false,
    trashcan: true,
    toolbox: toolbox
});
