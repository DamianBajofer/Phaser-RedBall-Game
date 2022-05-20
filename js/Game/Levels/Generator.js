var Click = false;
var ObjectPreview;
Generator = {

	preload : function(){
		
		
		
	},

	create : function(){

	// Inicializar Fisica //
	PhaserGame.physics.startSystem(Phaser.Physics.P2JS);
	PhaserGame.world.setBounds(0, 0, 2500, 1200);

	// Fondo //
	Background = PhaserGame.add.tileSprite(0, 0, 2500, 1200, "BackgroundLevel1");

	// Objetos //
	PhaserObject = PhaserGame.add.group();
	PhaserObject.enableBody = true;
	PhaserObject.physicsBodyType = Phaser.Physics.P2JS;
	CreatePlatform(0, 1200, 256, 0, "Plataforma001", "", "", PhaserObjects.length+24, "PlataformasBase");

	ObjectPreview = PhaserGame.add.image(0, 0, "Plataforma001");

	// Player //
	Player = PhaserGame.add.sprite(50, 1200 - 100, "Player005");
	PhaserGame.physics.p2.enable(Player, false);
	PhaserGame.camera.follow(Player);

	// Menu y Botones //
	CreateMenu();
	CreateButton(10, 10, "ButtonExitGame", ExitGame);

	// Cursor Personalizado //
	CreateCursor();

	},

	update : function(){

		if(PhaserGame.input.mousePointer.leftButton.isDown && !Click){
			CreatePlatform(-(PhaserGame.world.worldPosition.x)+PhaserGame.input.mousePointer.position.x, -(PhaserGame.world.worldPosition.y)+PhaserGame.input.mousePointer.position.y, 0, 0, "Plataforma001", "", "", PhaserObjects.length+1, "PlataformasBase");
			Click = true;
		}
		if(PhaserGame.input.mousePointer.leftButton.isUp){
			Click = false;
		}



		CursorPosition();
		
		if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.UP).isDown){
			Player.body.velocity.y = -1000;
		}else if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.DOWN).isDown){
			Player.body.velocity.y = 1000;
		}else{
			Player.body.velocity.y = 0;
		}
		if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.LEFT).isDown){
			Player.body.velocity.x = -1000;
		}else if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown){
			Player.body.velocity.x = 1000;
		}else{
			Player.body.velocity.x = 0;
		}

	}

}

function CreatePlatforms(object, cursor){
	PhaserObjects[PhaserObjects.length] = PhaserObject.create(object.NewPosX, object.NewPosY, Texture);
	PhaserObjects[PhaserObjects.length - 1].position.x += PhaserObjects[PhaserObjects.length - 1].width/2;
	PhaserObjects[PhaserObjects.length - 1].position.y += PhaserObjects[PhaserObjects.length - 1].height/2;
	PhaserObjects[PhaserObjects.length - 1].body.destroy(true);
}

function CreatePlatform(x, y, IncX, IncY, key, keyPolygon, keyPolygonInternal, count, group){
	for(var i = PhaserObjects.length; i < count; i++){
		PhaserObjects[i] = PhaserObject.create(x, y, key);
		PhaserObjects[i].Group = group;
		PhaserGame.physics.p2.enable([PhaserObjects[i]], false);
		if(keyPolygon != '' && keyPolygonInternal != ''){
			PhaserObjects[i].body.clearShapes();
			PhaserObjects[i].body.loadPolygon(keyPolygon, keyPolygonInternal);
		}
		PhaserObjects[i].body.static = true;
		x += IncX;
		y += IncY;
	}
}