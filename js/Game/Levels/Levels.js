Levels = {

	preload : function preload(){},

	create : function(){

		// Fondo de Escena y Ambientacion //
		Background = PhaserGame.add.tileSprite(0, 0, 5000, 650, "BackgroundLevel1");
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

		// Overlay //
		Overlay = PhaserGame.add.graphics();
		Overlay.beginFill(0x000000, 0.6);
		Overlay.drawRect(0, 0, 1200, 650);

		// Botones y Mas //
		CreateButton(10, 10, "ButtonControls", Controls);
		CreateButton(PhaserGame.width/2-(50+(150)), PhaserGame.height/2-(25), "ButtonPrevious", SelectPlayer);
		CreateButton(PhaserGame.width/2-(50-(150)), PhaserGame.height/2-(25), "ButtonNext", SelectPlayer);
		CreateButton(PhaserGame.width/2-(50), PhaserGame.height/2-(25-(150)), "ButtonPlayNow", PlayGame);
		CreateButton(PhaserGame.width-60, 10, MusicMuteKey, MuteMusic);
		
		// Seleccion de Personajes //
		PhaserGame.add.sprite(PhaserGame.width/2-(245), PhaserGame.height/2-(25+(150)), "PlayerSelectText");
		PlayerSelectedFrame = PhaserGame.add.sprite(PhaserGame.width/2-(50), PhaserGame.height/2-(50), "PlayerSelectedFrame");
		PlayerSelectedFrame.scale.setTo(0.8, 0.8);

		// Lista de Peronajes //
		Players[0] = PhaserGame.add.sprite(PlayerSelectedFrame.position.x + 15, PlayerSelectedFrame.position.y + 15, "Player001");
		Players[0].alpha = 0;
		Players[1] = PhaserGame.add.sprite(PlayerSelectedFrame.position.x + 15, PlayerSelectedFrame.position.y + 15, "Player002");
		Players[1].alpha = 0;
		Players[2] = PhaserGame.add.sprite(PlayerSelectedFrame.position.x + 15, PlayerSelectedFrame.position.y + 15, "Player003");
		Players[2].alpha = 0;
		Players[3] = PhaserGame.add.sprite(PlayerSelectedFrame.position.x + 15, PlayerSelectedFrame.position.y + 15, "Player004");
		Players[3].alpha = 0;
		Players[4] = PhaserGame.add.sprite(PlayerSelectedFrame.position.x + 15, PlayerSelectedFrame.position.y + 15, "Player005");
		Players[4].alpha = 0;
		Players[5] = PhaserGame.add.sprite(PlayerSelectedFrame.position.x + 15, PlayerSelectedFrame.position.y + 15, "Player006");
		Players[5].alpha = 0;
		Players[PlayerActualSelected].alpha = 1;

		// Cursor Personalizado //
		CreateCursor();

	},

	update : function(){

		if(Background.position.x == -3800){
			BackgroundMove = "Left";
		}else if(Background.position.x == 0){
			BackgroundMove = "Right";
		}

		if(BackgroundMove == "Right"){
			Background.position.x -= 1;
		}else{
			Background.position.x += 1;
		}

		// Actualizar Posición del Cursor //
		CursorPosition();

	}

}