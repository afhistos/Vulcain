const electron = require('electron');
const {appVersion} = require('./constants.js');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 720,
        minWidth: 750,
        minHeight: 600,
        icon: '../resources/favicon.png',
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            contextIsolation: false,
            enableRemoteModule: true,
            sandbox: false
        }
    });
    mainWindow.loadURL(`file://${__dirname}/display.html`);
    const template = [{
        label: 'Options',
        submenu: [
            {label: 'Fermer', accelerator: 'CmdOrCtrl+Q', click: function(e) {app.quit()}},
            {label: 'Rafraîchir', accelerator: 'CmdOrCtrl+R', click: function(e) {mainWindow.webContents.reloadIgnoringCache()}},
            {label: 'Redémarrer', accelerator: 'CmdOrCtrl+Shift+R', click: function(e){app.relaunch(); app.exit();}},
            {label: 'Mode développeur', accelerator: 'CmdOrCtrl+Shift+K', 
            click: function(e) {mainWindow.webContents.openDevTools()}},
            {label: 'Recharger le CSS', accelerator: 'CmdOrCtrl+K', click: function(e){mainWindow.webContents.send('reload-css', 'yeet')}},
            {label: 'Retour en arrière', accelerator: 'CmdOrCtrl+Z', click: function(e){if(mainWindow.webContents.canGoBack()){mainWindow.webContents.goBack()}}}
        ]},{
        label: 'Infos',
        submenu :[
            {label: `Version de l'app: ${appVersion}`, enabled: false},
            {label: `Version d'Electron: ${process.versions.electron}`, enabled: false},
            {label: `Version d'Ares: ${process.versions.ares}`, enabled: false},
            {label: `Version de Chromium: ${process.versions.chrome}`, enabled: false},
            {label: `Version de l'analyseur HTTP: ${process.versions.http_parser}`, enabled: false},
            {label: `Version des modules: ${process.versions.modules}`, enabled: false},
            {label: `Version de NodeJS: ${process.versions.node}`, enabled: false},
            {label: `Version d'OpenSSL: ${process.versions.openssl}`, enabled: false},
            {label: `Version d'UV: ${process.versions.uv}`, enabled: false},
            {label: `Version de V8: ${process.versions.v8}`, enabled: false},
            {label: `Version de ZLib: ${process.versions.zlib}`, enabled: false},
        ]}];
    const menu = electron.Menu.buildFromTemplate(template);
    electron.Menu.setApplicationMenu(menu);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        electron.shell.openExternal(url);
      });
});

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
