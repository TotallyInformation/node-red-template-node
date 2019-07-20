## How to use the node-red-template-node repository

Fork the [node-red-template-node](https://github.com/TotallyInformation/node-red-template-node) repo to your own, change the name of your repo to whatever you need it to be.

Change all of the entries in all files that are marked as "REPLACE" or are in CAPITALS or surrounded by `< ... >` when they aren't HTML tags. Also change any references to the template repo to match your new one.

Install the dependencies and dev. dependencies by running `npm install`.

## Files that need configuring

Globally replace all occurrences of `node-red-template-node` with your repo name and all occurrences of `TotallyInformation` with your GitHub ID.

* `/README.md`
  
  Replace the template text with your own. Update the badges to match your repo.

* `/package.json`
  
  Change all of the references to the template repo and any references to "TotallyInformation" and "Julian Knight".

  Change the "node-red.nodes" property if needed to point to the `/nodes/*.js` files that define your nodes. Use the same name as specified in the `/bin/` files and the `/node-editor-src/script.js` file.

* `/bin` (`mergehtml.js` and `watchhtml.js`)
  
  These are helper scripts that compile the files in the `/node-editor-src` folder into the `/nodes/node.html` file.

  You need to change the `nodeName` variable. It must be the same as the name specified in `package.json` under the "node-red.nodes" property.

* `/node-editor-src`
  
   This folder contains the source files for your Node's editor panel. Run `npm run build` to put them all together correctly.
   Using these files makes it **much** easier to write and maintain the editor panel.

   * `help.html`
   * `panel.html`
   * `script.js`
      
      Make sure that you change the "global" variables to match your node definition. Use the same nodeName as defined above.

* `/nodes`
  
  This folder contains the definition files for your custom nodes. Each node is defined by 2 files: `*.html` defines the code used in the Node-RED Editor admin UI, `*.js` defines the runtime behaviours of the node. 
  
  If your package contains more than one node, you will need select appropriate file names and add them to the "node-red" section of `package.json`. You will also need to alter the helper scripts in the `bin` folder to deal with multiple nodes.
  
   * `node.js`
     
   * `(node.html)`

     This file should not be changed by hand if you are using `npm run build`. Use the files in `/node-editor-src` instead.
