/**
 * Copyright (c) 2019 Julian Knight (Totally Information)
 * https://it.knightnet.org.uk
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
'use strict'

/** Change to the correct name
 * @const {string} nodeName Must match the name used in node.html and package.json
 */
const nodeName = 'NODENAME'

/** Export the function that defines the node
 * The outer function is only run ONCE no matter how many instances are added to flows.
 * @param {Object} RED The Node-RED instance object
*/
module.exports = function(RED) {
    /* NB: entries in settings.js are read-only and shouldn't be read using RED.settings.get, that is only for settings that can change in-flight.
     *     see Node-RED issue #1543.  */

    /*  RED.events.on('nodes-started',function() {
            console.log('****** All nodes have started ******')
        })
        RED.events.on('nodes-stopped',function() {
            console.log('****** All nodes have stopped ******')
        })
    */

    /** Function that is called for every instance of this Node that is added to your flows.
     * @param {Object} config All of the configuration settings defined in the Editor admin panel (node.html)
     */
    function nodeGo(config) {
        // Create the node
        RED.nodes.createNode(this, config)

        /** A copy of 'this' object in case we need it in context of callbacks of other functions. @constant {Object} node */
        const node = this

        //#region ----- Create local copies of the node configuration (as defined in the .html file) ----- //
         // NB: node.id and node.type are also available
        node.name          = config.name  || ''
        node.topic         = config.topic || ''
        //#endregion ----- Local node config copy ----- //

        /** Handler function for node input events (when a node instance receives a msg)
         * Note: Defined here rather than further up so that we can pick up the instance topic and name from the config settings if needed.
         * @param {Object} msg The msg object received.
         **/
        function nodeInputHandler(msg) {

            // If input msg is null, nothing will be sent
            if ( msg !== null ) {
                // if msg isn't null and isn't an object
                // NOTE: This is paranoid and shouldn't be possible!
                if ( typeof msg !== 'object' ) {
                    // Force msg to be an object with payload of original msg
                    msg = { 'payload': msg }
                }
                // Add topic from node config if present and not present in msg
                if ( !(msg.hasOwnProperty('topic')) || msg.topic === '' ) {
                    if ( node.topic !== '' ) msg.topic = node.topic
                    else msg.topic = nodeName
                }
            }

        } // -- end of msg received processing -- //

        // Process inbound messages
        node.on('input', nodeInputHandler)

        /** Optional. Do something when Node-RED is closing down which includes when this node instance is redeployed.
         * This is optional, only use it if you need to tidy something up before terminating.
         *
         * The "removed" parameter will indicate why the node instance was terminated, either due to a
         * (re)deploy or because Node-RED shut down.
         *
         * The "done" parameter is a function and should be called to tell Node-RED it can terminate.
         */
        // node.on('close', function(removed,done) {
        //     done()
        // })

    } // --- End of nodeGo() ---- //

    /** Register the node by name. This must be called before overriding any of the Node functions.
     * @param {string} nodeName Name of the Node being defined. Must match the entries in node.html and package.json.
     * @param {function} nodeGo The function that is called for each instance of this node.
     * @param {Object} options
     */
    RED.nodes.registerType(nodeName, nodeGo, {})

} // ---- End of export ---- //

//EOF
