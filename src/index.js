import { app, BrowserWindow } from 'electron';

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		transparent: true,
		alwaysOnTop: true,
		focusable: false,
		fullscreen: true,
		show: false
	});
	
	mainWindow.setIgnoreMouseEvents(true);
	mainWindow.on('ready-to-show', () => mainWindow.show());
	
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	
	setInterval(() => mainWindow.setAlwaysOnTop(true), 6000);
	
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
