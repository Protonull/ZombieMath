ig.module("game.main").requires(
	"impact.game",
	"impact.font",
	"game.math",
	"game.levels.game",
	"game.entities.ammo",
	"game.entities.zombie"
)
.defines(function(){
	"use strict";
	// Canvas
	let canvas = document.createElement("canvas");
	let width = 128, height = 228, scale = 3;
	canvas.style.position = "absolute";
	canvas.style.left = canvas.style.top = 0;
	document.body.appendChild(canvas);
	// Extra Functions
	ig.Entity.inject({
		playAnim: function (name) {
			if ("string" != typeof name) return false;
			this.anims[name].rewind();
			this.currentAnim = this.anims[name];
			return true;
		}
	});
	Array.prototype.order = function (func) {
		this.sort("function" != typeof func ? undefined : func);
		return this;
	}
	// Create Game Script
	let MathGame = ig.Game.extend({

		font: new ig.Font("media/04b03.font.png"),
		clearColor: "#BDBDBD", //"#131417"
		player: null,
		bullet: {icons: new Array, count: 0, lines: new Array},
		problem: {text: "", answer: ""},
		score: 0,
		level: 1,

		// Zombie Spawning
		zombieCount: 0,
		zombieCountMax: 4,
		zombieCountMultiplier: 1,
		zombieCountMaxMultiplier: 5,

		init: function() {
			// LOAD ENTITIES AND PLAYER
			this.loadLevel(LevelGame);
			this.player = this.getEntityByName("Player");
			this.problem = this.getQuestion();
			// Ammo Images
			this.ammo = ig.game.getEntitiesByType(EntityAmmo).slice(0, 3).order(function(a, b){return a.pos.x - b.pos.x});
		},
		update: function() {
			// Bullet
			this.bullet.count = this.bullet.count.limit(0, 15);
			this.score = this.score < 0 ? 0 : this.score;
			// Refresh Ammo Amount
			this.ammo.forEach(function(a){
				a.anims[0].rewind();
				a.currentAnim = a.anims[0];
			});
			let ammoMost = Math.floor(this.bullet.count / 5).limit(0, 2);
			let leftOver = this.bullet.count - (ammoMost * 5);
			for (let i = 0; i <= ammoMost; i++) {
				let amount = i == ammoMost ? leftOver : 5;
				this.ammo[i].anims[amount].rewind();
				this.ammo[i].currentAnim = this.ammo[i].anims[amount];
			}
			// Zombie Spawning
			this.zombieCountMultiplier += ig.system.tick / 10;
			if (this.zombieCountMultiplier > this.zombieCountMaxMultiplier) this.zombieCountMultiplier = this.zombieCountMaxMultiplier;
			this.zombieCount += ig.system.tick * this.zombieCountMultiplier;
			if (this.zombieCount >= this.zombieCountMax) {
				this.zombieCount -= this.zombieCountMax;
				this.spawnEntity(EntityZombie, 128, 60, {
					vel: {
						x: -1.7 * this.zombieCountMultiplier,
						y: 0
					}
				});
			}

			// Parent
			this.parent();
		},
		draw: function() {
			this.parent();
			this.font.draw(this.score, 3, 3);
			this.font.draw(this.problem.text || "", ig.system.width / 2, 97.5, 2);
		}
	});
	ig.main("#canvas", MathGame, 60, width, height, scale);
});
