# nodes Folder

This folder contains the definition files for all nodes included in this package.

Note that the default filenames are `node.html` and `node.js` to make it easier for the node-template package.

If your package contains more than one node, you will need select appropriate file names and add them to the "node-red" section of `package.json`. You will also need to alter the helper scripts in the `bin` folder to deal with multiple nodes.

If you want to use additional modules to keep `node.js` smaller, it is sensible to put the files in this folder as well, then you can use `require('./libname')` in `node.js` to require the module. Don't forget to use `module.exports` to define any functions and variables that you want to make available to your node.
