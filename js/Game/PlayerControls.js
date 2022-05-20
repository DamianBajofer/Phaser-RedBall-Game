var ClickTime = 0;
function CreatePlayer(){

	// Player //
	Player = PhaserGame.add.sprite(50, PhaserObjects[0].position.y - 80, PlayerSelected);
	PhaserGame.physics.p2.enable(Player, false);
	PhaserGame.camera.follow(Player);
	Player.body.fixedRotation = true;
	Player.body.collideWorldBounds = true;
	Player.body.setCircle(25);
	Player.angle = AngleCapture;
	Player.body.setCollisionGroup(PlayerCollision);
	Player.body.collides([PlayerCollision, PhaserObjectCollision]);
	Player.body.onBeginContact.add(Collision, this);
	Sounds[1] = PhaserGame.sound.add("PlayerJump", 1, false);
	Sounds[2] = PhaserGame.sound.add("PlayerCollide", 1, false);
	if(AllMuted){
		for(var i = 1; i < Sounds.length; i++){
			Sounds[i].mute = true;
		}
		AllMuteKey = "ButtonSoundMute";
	}else{
		for(var i = 1; i < Sounds.length; i++){
			Sounds[i].mute = false;
		}
		AllMuteKey = "ButtonSound";
	}
	
}

function PlayerControls(){
	if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.UP).isDown && PhaserGame.time.now > jumpTimer && checkIfCanJump()){
		Sounds[1].play();
		if(PlayerJumpDouble > 1){
			Player.body.velocity.y = -600;
		}else{
			Player.body.velocity.y = PlayerJump;
			PlayerJumpDouble ++;
		}
		jumpDoubleTime = PhaserGame.time.now + 1000;
		jumpTimer = PhaserGame.time.now + 100;
	}
	if(PhaserGame.time.now > jumpDoubleTime){
		PlayerJumpDouble = 1;
	}
	if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown){

		if(Player.body.velocity.x >= 400){
			Player.body.velocity.x = 400;
			Player.angle += Math.round(Player.body.velocity.x) / 10;
		}else{
			Player.body.velocity.x += 20;
			Player.angle += Math.round(Player.body.velocity.x) / 10;
		}

	}else if(PhaserGame.input.keyboard.addKey(Phaser.Keyboard.LEFT).isDown){
		if(Player.body.velocity.x <= -400){
			Player.body.velocity.x = -400;
			Player.angle += Math.round(Player.body.velocity.x) / 10;
		}else{
			Player.body.velocity.x -= 20;
			Player.angle += Math.round(Player.body.velocity.x) / 10;
		}
	}else{

		if(Math.round(Player.body.velocity.x) < 0){
			Player.angle += Math.round(Player.body.velocity.x) / 10;
			AngleCapture = Player.angle;
		}else if(Math.round(Player.body.velocity.x) > 0){
			Player.angle += Math.round(Player.body.velocity.x) / 10;
			AngleCapture = Player.angle;
		}else if(Math.round(Player.body.velocity.x) == 0){
			Player.angle = AngleCapture;
		}

	}
}
function checkIfCanJump() {

    var yAxis = p2.vec2.fromValues(0, 1);
    var result = false;

    for (var i = 0; i < PhaserGame.physics.p2.world.narrowphase.contactEquations.length; i++)
    {
        var c = PhaserGame.physics.p2.world.narrowphase.contactEquations[i];

        if (c.bodyA === Player.body.data || c.bodyB === Player.body.data)
        {
            var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
            if (c.bodyA === Player.body.data) d *= -1;
            if (d > 0.5) result = true;
        }
    }
    
    return result;

}

function Collision(object){
	
	Sounds[2].play();

}