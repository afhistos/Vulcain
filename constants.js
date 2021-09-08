const appVersion = "1.0.0-alpha";
const wsUrl = 'ws://mysuperwebsocket:port';
console.warn("Ignore the next error. 'module.exports' is for NodeJS imports and is not recognized by the JS parser, but is needed to pass infos to the main process");
//For node.js "require" function
module.exports = {appVersion};
