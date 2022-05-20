const { app, Tray, Menu, shell } = require('electron');
const path = require('path');

app.on('ready', function (){
    const icon = path.join(__dirname + './icon.png');
    const tray = new Tray(icon);

    const template = [
        {
            label: 'Bing',
            click: function (){
                shell.openExternal('https://bing.com');
            }
        },
        {
            label: 'Google',
            click: function (){
                shell.openExternal('https://google.com');
            }
        }
    ]

    const ctxMenu = Menu.buildFromTemplate(template);

    tray.setToolTip('A demo system tray app');
    tray.setContextMenu(ctxMenu);
});
