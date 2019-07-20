    // @ts-check
    'use strict'

    /** Node-RED Editor Panel definition and control script for this node */

    /** @typedef {import("node-red").Red} Red */

    //#region --------- "global" variables for the panel --------- //

    /** Module name must match this nodes html file @constant {string} moduleName */
    var moduleName  = '<REPLACE WITH NODE NAME>'
    /** Node's label @constant {string} paletteCategory */
    var nodeLabel  = '<REPLACE WITH REQUIRED PALETTE CATEGORY>'
    /** Node's palette category @constant {string} paletteCategory */
    var paletteCategory  = '<REPLACE WITH REQUIRED PALETTE CATEGORY>'
    /** Node's background color @constant {string} paletteColor */
    var paletteColor  = '#E6E0F8'

    //#endregion ------------------------------------------------- //

    //#region --------- "global" functions for the panel --------- //

    //#endregion ------------------------------------------------- //

    // Register the node type, defaults and set up the edit fns
     //@ts-ignore
    RED.nodes.registerType(moduleName, {

        category: paletteCategory,
        color: paletteColor,
        defaults: {
            name: { value: '' },
            topic: { value: '' },
        },
        inputs: 1,
        inputLabels: 'Inbound msg',
        outputs: 1,
        outputLabels: ['Outbound msg', ],
        icon: 'ui_template.png',
        paletteLabel: nodeLabel,
        label: function () { return this.url || this.name || nodeLabel },

        oneditprepare: function () {
            var that = this

        }, // ---- End of oneditprepare ---- //

        //oneditsave: function() {},

        //oneditcancel: function() {},

        /** Handle window resizing for the editor */
        //oneditresize: function(size) {},

    }) // ---- End of registerType function ---- //
