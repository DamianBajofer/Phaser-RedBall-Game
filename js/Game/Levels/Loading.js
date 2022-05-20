Loading = {

	preload : function(){

		PhaserGame.load.image("BackgroundLoading", "./images/Fondos/Loading.png");
		PhaserGame.load.image("LoadingBar", "./images/Ventanas/ProgressBar.png");
		PhaserGame.load.image("LoadingProgress", "./images/Ventanas/Progress.png");
		PhaserGame.load.image("LoadingText", "./images/Textos/Loading.png");
		PhaserGame.load.image("AutorText", "./images/Textos/Autor.png");

	},

	create : function(){
		
		// Comenzar a Cargar el Juego //
		LoadingSystem();

	},

	update : function(){

	}

}