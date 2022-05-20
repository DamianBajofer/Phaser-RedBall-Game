var Grids = [];
var GridX = 0;
var GridY = 0;
var GridIncrementX = 50;
var GridIncrementY = 50;
var GridSteps = 1;
var TotalGrids = 2400;
var Texture = "Plataforma001";



// Variables del Juego //
var PhaserGame;
var Cursor;
var CursorX = -50;
var CursorY = -50;
// Variables de Niveles //
var Generator;
var Level1;
var Level2;
var Level3;
var Level4;
var Level5;
var LevelSelector;
// Variables de Sistema de Precarga //
var ContainerPreloader;
var ProgressBar;
var Progress;
var TextProgress;
var PlayerSelectedFrame;
var PlayerActualSelected = 0;
var PlayerSelected = "Player001";
// Variables de Estados //
var Overlay;
var ShowControls = false;
var WindowControls;
var Sounds = [];
var AllMuteKey = "ButtonSound";
var MusicMuteKey = "ButtonMusic";
var AllMuted = false;
var MusicMuted = false;
// Variables de Objetos y Colisiones de Objetos //
var PhaserObject;
var PhaserObjects = [];
var PlatformMaterial = [];
var ContactMaterial = [];
var PhaserObjectCollision;
var ObjectGroup;
var CheckPoints = [];
var Animations = [];
// Variables de Player //
var Player;
var Players = [];
var jumpTimer = 0;
var PlayerJump = -400;
var PlayerJumpDouble = 1;
var jumpDoubleTime = 0;
var Angulo = 20;
var AngleCapture = 0;
var PlayerMaterial;
var PlayerCollision;
var PlayerPositionX = 0;
var PlayerPositionY = 0;
// Variables de Fondo de Escena //
var Background;
// Variables de Sonidos //
var ButtonSounds = [];
// Variables de Dimensiones de Pantalla //
var IfPressed = false;

// Inicializacion del Juego y Declaracion de Niveles //
PhaserGame = new Phaser.Game(1200, 650, Phaser.AUTO, "PhaserGame");
PhaserGame.state.add("Loading", Loading);
PhaserGame.state.add("Generator", Generator);
PhaserGame.state.add("Levels", Levels);
PhaserGame.state.add("Level1", Level1);
PhaserGame.state.add("Level2", Level2);
PhaserGame.state.add("Level3", Level3);
PhaserGame.state.add("Level4", Level4);
PhaserGame.state.add("Level5", Level5);
PhaserGame.state.start("Loading");

function DestroyLevel(NewLevel){

	if(Sounds[0] != undefined){
		Sounds[0].destroy(true);
	}
	RestartStatistics();
	PhaserGame.state.start(NewLevel);

}

function RestartStatistics(){

	// Variables del Juego //
	PhaserGame;
	Cursor;
	CursorX = -50;
	CursorY = -50;
	// Variables de Niveles //
	Generator;
	Level1;
	Level2;
	Level3;
	Level4;
	Level5;
	LevelSelector;
	// Variables de Sistema de Precarga //
	ContainerPreloader;
	ProgressBar;
	Progress;
	TextProgress;
	PlayerSelectedFrame;
	ShowControls = false;
	// Variables de Estados //
	Overlay;
	Sounds = [];
	// Variables de Objetos y Colisiones de Objetos //
	PhaserObject;
	PhaserObjects = [];
	PlatformMaterial = [];
	ContactMaterial = [];
	PhaserObjectCollision;
	// Variables de Player //
	Player;
	jumpTimer = 0;
	PlayerJump = -400;
	PlayerJumpDouble = 1;
	jumpDoubleTime = 0;
	Angulo = 20;
	AngleCapture = 0;
	PlayerMaterial;
	PlayerCollision;
	// Variables de Fondo de Escena //
	Background;
	// Variables de Sonidos //
	ButtonSounds = [];
	
}