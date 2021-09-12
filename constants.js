const appVersion = "0.1.0-alpha";
const wsUrl = 'ws://193.168.147.112:44444';
console.warn("Ignore the next error. 'module.exports' is for NodeJS imports and is not recognized by the JS parser, but is needed to pass infos to the main process");
//For node.js "require" function
module.exports = {appVersion};
