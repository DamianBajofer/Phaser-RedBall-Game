Level1 = {

	preload : function(){
		
		
		
	},

	create : function(){

	// Inicializar Fisica //
	PhaserGame.physics.startSystem(Phaser.Physics.P2JS);
	PhaserGame.world.setBounds(0, 0, 5000, 1200);
	PhaserGame.physics.p2.gravity.y = 800;

	// Fondo //
	Background = PhaserGame.add.tileSprite(0, 0, 5000, 1200, "BackgroundLevel1");


	// Sonido //
	Sounds[0] = PhaserGame.sound.play("BackgroundSoundLevel1", 0.6, 1, true, true);
	if(MusicMuted){
		Sounds[0].mute = true;
		MusicMuteKey = "ButtonMusicMute";
	}else{
		Sounds[0].mute = false;
		MusicMuteKey = "ButtonMusic";
	}
	if(AllMuted){
		AllMuteKey = "ButtonSoundMute";
	}else{
		AllMuteKey = "ButtonSound";
	}

	// Menu de Botones //
	CreateMenu();
	// Botones //
	CreateButton(10, 10, "ButtonRestartLevel", PlayGame);
	CreateButton(120, 10, "ButtonControls", Controls);
	CreateButton(230, 10, "ButtonExitGame", ExitGame);
	CreateButton(PhaserGame.width-130, 10, AllMuteKey, MuteAll);
	CreateButton(PhaserGame.width-60, 10, MusicMuteKey, MuteMusic);

	// Grupos de Colisiones //
	PhaserObjectCollision = PhaserGame.physics.p2.createCollisionGroup();
	PlayerCollision = PhaserGame.physics.p2.createCollisionGroup();
	PhaserGame.physics.p2.updateBoundsCollisionGroup();

	// Objetos //
	PhaserObject = PhaserGame.add.group();
	PhaserObject.enableBody = true;
	PhaserObject.physicsBodyType = Phaser.Physics.P2JS;
	CreateObject(0, 1200, 256, 0, "Plataforma001", "", "", 24, "PlataformasBase");
	CreateObject(500, 1200-(128-17), 0, 0, "Plataforma002", "PlataformasP2", "plataforma002", 1, "PlataformasAdicionales");
	CreateObject(800, 1200-(128-17), 0, 0, "Plataforma008", "PlataformasP2", "plataforma008", 1, "PlataformasAdicionales");

	// Player //
	CreatePlayer();

	// Rebote en Plataformas //
	PlayerMaterial = PhaserGame.physics.p2.createMaterial('PlayerMaterial', Player.body);
	for(var i = 0; i < PhaserObjects.length; i++){
		ContactMaterial[i] = PhaserGame.physics.p2.createContactMaterial(PlayerMaterial, PlatformMaterial[i]);
		ContactMaterial[i].restitution = 0.6;
	}
	// Rebote en extremos del Mundo //
	ContactMaterial[ContactMaterial.length] = PhaserGame.physics.p2.createMaterial('worldMaterial');
	PhaserGame.physics.p2.setWorldMaterial(ContactMaterial[ContactMaterial.length - 1], true, true, true, true);
	ContactMaterial[ContactMaterial.length - 1] = PhaserGame.physics.p2.createContactMaterial(PlayerMaterial, ContactMaterial[ContactMaterial.length - 1]);
	ContactMaterial[ContactMaterial.length - 1].restitution = 0.5;

	// Cursor Personalizado //
	CreateCursor();

	},

	update : function(){

		CursorPosition();
		PlayerControls();

	}

}

function CreateObject(x, y, IncX, IncY, key, keyPolygon, keyPolygonInternal, count, group){
	var Longitud = PhaserObjects.length;
	for(var i = PhaserObjects.length; i < Longitud+count; i++){
		PhaserObjects[i] = PhaserObject.create(x, y, key);
		PhaserObjects[i].Group = group;
		PhaserGame.physics.p2.enable([PhaserObjects[i]], false);
		if(keyPolygon != '' && keyPolygonInternal != ''){
			PhaserObjects[i].body.clearShapes();
			PhaserObjects[i].body.loadPolygon(keyPolygon, keyPolygonInternal);
		}
		PhaserObjects[i].body.static = true;
		PhaserObjects[i].body.setCollisionGroup(PhaserObjectCollision);
		PhaserObjects[i].body.collides([PhaserObjectCollision, PlayerCollision]);
		PlatformMaterial[i] = PhaserGame.physics.p2.createMaterial('PlatformMaterial', PhaserObjects[i].body);
		x += IncX;
		y += IncY;
	}
}