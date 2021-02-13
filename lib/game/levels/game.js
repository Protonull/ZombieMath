ig.module( 'game.levels.game' )
.requires( 'impact.image','game.entities.player','game.entities.ammo','game.entities.zombie' )
.defines(function(){
LevelGame=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 20,
			"y": 60
		},
		{
			"type": "EntityAmmo",
			"x": 0,
			"y": 80
		},
		{
			"type": "EntityAmmo",
			"x": 8,
			"y": 80
		},
		{
			"type": "EntityAmmo",
			"x": 16,
			"y": 80
		},
		{
			"type": "EntityZombie",
			"x": 128,
			"y": 60
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 17,
			"height": 28,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 8,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "scenery",
			"width": 16,
			"height": 29,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/zombiemath.png",
			"repeat": false,
			"preRender": true,
			"distance": "1",
			"tilesize": 8,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[25,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[31,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[37,38,0,39,0,0,0,0,0,0,0,0,0,0,0,0],
				[19,20,21,22,23,24,19,20,21,22,22,23,24,19,20,21],
				[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13],
				[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40],
				[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40],
				[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],
				[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]
			]
		},
		{
			"name": "shubbery",
			"width": 16,
			"height": 9,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/zombiemath.png",
			"repeat": false,
			"preRender": true,
			"distance": "1",
			"tilesize": 8,
			"foreground": true,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,16,15,17]
			]
		}
	]
}/*]JSON*/;
LevelGameResources=[new ig.Image('media/zombiemath.png'), new ig.Image('media/zombiemath.png')];
});