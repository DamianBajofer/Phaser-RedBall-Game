var LoadingContainer;
var Progress;
var LoadingText;
var AutorText;
function LoadingSystem(){


	// Fondo de Escena //
	Background = PhaserGame.add.tileSprite(0, 0, PhaserGame.width, PhaserGame.height, "BackgroundLoading");
	// Barra de Progreso //
	LoadingContainer = PhaserGame.add.sprite(PhaserGame.world.centerX - 180, PhaserGame.world.centerY - 18, "LoadingBar");
	// Progreso //
	Progress = PhaserGame.add.tileSprite(LoadingContainer.position.x, LoadingContainer.position.y, 360, 36, "LoadingProgress");
	Progress.width = 0;
	// Texto //
	LoadingText = PhaserGame.add.sprite(LoadingContainer.position.x + 10, LoadingContainer.position.y - 20, "LoadingText");
	AutorText = PhaserGame.add.sprite(PhaserGame.width, PhaserGame.height, "AutorText");
	AutorText.position.x -= AutorText.width+20;
	AutorText.position.y -= AutorText.height+12;

	// Eventos de Precarga.
	PhaserGame.load.onLoadStart.add(LoadStart, this);
	PhaserGame.load.onFileComplete.add(FileComplete, this);
	PhaserGame.load.onLoadComplete.add(LoadComplete, this);

	// Imagenes, Sonidos y Más //
	Preloaders();

}

function LoadStart(){

}

function FileComplete(progress, cacheKey, success, totalLoaded, totalFiles){
	Progress.width = (360*progress)/100;
}

function LoadComplete(){
	PhaserGame.state.start("Levels");
}