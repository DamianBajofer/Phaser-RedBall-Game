function Preloaders(){
	// Centrar Juego en Pantalla //
	cf($("canvas"), "fixed");
	// Fondo de Escenas //
	PhaserGame.load.image("BackgroundLevel1", "./images/Fondos/Level1.png");
	// Botones del Menu, Ventanas, Textos y Cursores //
	PhaserGame.load.image("PlayerSelectText", "./images/Textos/PlayerSelectText.png");
	PhaserGame.load.spritesheet("ButtonControls", "./images/Botones/ButtonControls.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonNext", "./images/Botones/ButtonNext.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonPrevious", "./images/Botones/ButtonPrevious.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonPause", "./images/Botones/ButtonPause.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonPlayNow", "./images/Botones/ButtonPlayNow.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonRestartLevel", "./images/Botones/ButtonRestartLevel.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonExitGame", "./images/Botones/ButtonExitGame.png", 100, 50);
	PhaserGame.load.spritesheet("ButtonSound", "./images/Botones/ButtonSound.png", 50, 50);
	PhaserGame.load.spritesheet("ButtonSoundMute", "./images/Botones/ButtonSoundMute.png", 50, 50);
	PhaserGame.load.spritesheet("ButtonMusic", "./images/Botones/ButtonMusic.png", 50, 50);
	PhaserGame.load.spritesheet("ButtonMusicMute", "./images/Botones/ButtonMusicMute.png", 50, 50);
	PhaserGame.load.image("WindowControls", "./images/Ventanas/WindowControls.png");
	PhaserGame.load.image("CursorNormal", "./images/Cursores/CursorNormal.png");
	// Imagenes de Seleccion de Personajes //
	PhaserGame.load.image("PlayerPreviousFrame", "./images/Player/PlayerPreviousFrame.png");
	PhaserGame.load.image("PlayerSelectedFrame", "./images/Player/PlayerSelectedFrame.png");
	PhaserGame.load.image("PlayerNextFrame", "./images/Player/PlayerNextFrame.png");
	// PLayer //
	PhaserGame.load.image("Player001", "./images/Player/Player001.png");
	PhaserGame.load.image("Player002", "./images/Player/Player002.png");
	PhaserGame.load.image("Player003", "./images/Player/Player003.png");
	PhaserGame.load.image("Player004", "./images/Player/Player004.png");
	PhaserGame.load.image("Player005", "./images/Player/Player005.png");
	PhaserGame.load.image("Player006", "./images/Player/Player006.png");
	// Objetos (Plataformas, Items y Más) //
	PhaserGame.load.image("Plataforma001", "./images/Plataformas/plataforma001.png");
	PhaserGame.load.image("Plataforma002", "./images/Plataformas/plataforma002.png");
	PhaserGame.load.image("Plataforma003", "./images/Plataformas/plataforma003.png");
	PhaserGame.load.image("Plataforma004", "./images/Plataformas/plataforma004.png");
	PhaserGame.load.image("Plataforma005", "./images/Plataformas/plataforma005.png");
	PhaserGame.load.image("Plataforma006", "./images/Plataformas/plataforma006.png");
	PhaserGame.load.image("Plataforma007", "./images/Plataformas/plataforma007.png");
	PhaserGame.load.image("Plataforma008", "./images/Plataformas/plataforma008.png");
	PhaserGame.load.image("Plataforma009", "./images/Plataformas/plataforma009.png");
	PhaserGame.load.image("Plataforma010", "./images/Plataformas/plataforma010.png");
	PhaserGame.load.image("Plataforma011", "./images/Plataformas/plataforma011.png");
	PhaserGame.load.spritesheet("CheckPoint", "./images/Plataformas/Checkpoints.png", 30, 30);
	// Json - Fisicas //
	PhaserGame.load.physics("PlataformasP2", "./images/Plataformas/plataformas.json");
	// Audios //
	PhaserGame.load.audio("BackgroundSoundLevel1", "./audio/BackgroundSoundLevel1.wav");
	PhaserGame.load.audio("ButtonSoundClicked", "./audio/ButtonSoundClicked.wav");
	PhaserGame.load.audio("ButtonSoundHover", "./audio/ButtonSoundHover.wav");
	PhaserGame.load.audio("PlayerJump", "./audio/PlayerJump.wav");
	PhaserGame.load.audio("PlayerCollide", "./audio/PlayerCollide.wav");
	// Comenzar a Cargar las Imagenes //
	PhaserGame.load.start();
}