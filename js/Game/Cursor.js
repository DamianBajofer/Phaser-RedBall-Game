function CreateCursor(){
	Cursor = PhaserGame.add.sprite(CursorX, CursorY, "CursorNormal");
	Cursor.scale.setTo(0.8, 0.8);
	Cursor.alpha = 1;
}
function CursorPosition(){
	Cursor.position.x = -(PhaserGame.world.worldPosition.x)+PhaserGame.input.mousePointer.x;
	Cursor.position.y = -(PhaserGame.world.worldPosition.y)+PhaserGame.input.mousePointer.y;
	PhaserGame.canvas.style.cursor = "none";
}