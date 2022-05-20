// Variables //
var Buttons = [], Menu, MenuBody;

function CreateMenu(){

	Menu = PhaserGame.add.graphics();
	Menu.beginFill(0x000000, 0.6);
	Menu.drawRect(0, 0, 1200, 70);
	Menu.fixedToCamera = true;

}

function CreateButton(x, y, key, callBack){

	// Create Button //
	Buttons[Buttons.length] = PhaserGame.add.button(x, y, key, callBack, this, 1, 0, 2);
	Buttons[Buttons.length - 1].scale.setTo(0.8, 0.8);
	Buttons[Buttons.length - 1].id = Buttons.length;
	Buttons[Buttons.length - 1].fixedToCamera = true;
	Buttons[Buttons.length - 1].events.onInputOver.add(function(){
		PhaserGame.canvas.style.cursor = "none";
		PhaserGame.sound.play("ButtonSoundHover");
	}, this);
	Buttons[Buttons.length - 1].events.onInputDown.add(function(){
		PhaserGame.canvas.style.cursor = "none";
		PhaserGame.sound.play("ButtonSoundClicked");
	}, this);
}

// Buttons Actions //
function PlayGame(){
	DestroyLevel("Level1");
}
function RestartLevel(){
	DestroyLevel(PhaserGame.state.current);
}
function PuaseGame(){
	PhaserGame.paused = !PhaserGame.paused;
}
function Controls(){
	if(ShowControls){
		WindowControls.destroy(true);
		ShowControls = false;
	}else{
		WindowControls = PhaserGame.add.sprite(PhaserGame.width/2, PhaserGame.height/2, "WindowControls");
		WindowControls.position.x -= WindowControls.width/2;
		WindowControls.position.y -= WindowControls.height/2;
		WindowControls.fixedToCamera = true;
		ShowControls = true;
	}
}
function ExitGame(){
	DestroyLevel("Levels");
}
function MuteAll(Button){
	if(AllMuted){
		for(var i = 1; i < Sounds.length; i++){
			Sounds[i].mute = false;
		}
		Button.loadTexture("ButtonSound", 0, false);
		AllMuted = false;
	}else{
		for(var i = 1; i < Sounds.length; i++){
			Sounds[i].mute = true;
		}
		Button.loadTexture("ButtonSoundMute", 0, false);
		AllMuted = true;
	}
}
function MuteMusic(Button){
	if(Sounds[0].mute){
		Sounds[0].mute = false;
		Button.loadTexture("ButtonMusic", 0, false);
		MusicMuted = false;
	}else{
		Sounds[0].mute = true;
		Button.loadTexture("ButtonMusicMute", 0, false);
		MusicMuted = true;
	}
}
function SelectPlayer(Button){
	if(Button.key == "ButtonNext"){

		if(PlayerActualSelected == Players.length - 1){
			PlayerActualSelected = 0;
		}else{
			PlayerActualSelected++;
		}
		for(var i = 0; i < Players.length; i++){

			Players[i].alpha = 0;

		}
		Players[PlayerActualSelected].alpha = 1;
		PlayerSelected = Players[PlayerActualSelected].key;


	}else if(Button.key == "ButtonPrevious"){

		if(PlayerActualSelected == 0){
			PlayerActualSelected = Players.length - 1;
		}else{
			PlayerActualSelected--;
		}
		for(var i = 0; i < Players.length; i++){

			Players[i].alpha = 0;

		}
		Players[PlayerActualSelected].alpha = 1;
		PlayerSelected = Players[PlayerActualSelected].key;

	}
}