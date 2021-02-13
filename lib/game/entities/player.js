ig.module("game.entities.player").requires("impact.game").defines(function(){
    EntityPlayer = ig.Entity.extend({
        // Identification
        name: "Player",
        // Collision
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        size: {x: 8, y: 12},
        // Movement
        vel: {x: 0, y: 0},
        maxVel: {x: 0, y: 0},
        // Animation
        animSheet: new ig.AnimationSheet("media/zombiemath.png", 8, 12),
        // Shooting
        shooting: false,

        init: function(x, y, settings) {
            // Animations
            this.addAnim("idle", 0.1, [1], true);
            this.addAnim("aim", 1, [0, 0, 0, 1], true);
            this.addAnim("fire", 0.4, [2, 0, 0, 0, 0, 1], true);
            this.addAnim("aimHard", 0.6, [3, 0, 0, 0, 0, 0, 1], true);
            this.addAnim("fireHard", 0.4, [4, 3, 0, 0, 0, 0, 0, 1], true);
            this.currentAnim = this.anims.idle;
            // Key Bindings
            //ig.input.bind(ig.KEY.SPACE, "FIRE");
            ig.input.bind(ig.KEY.ENTER, "FIRE");
            ig.input.bind(ig.KEY._1, "1");
            ig.input.bind(ig.KEY.NUMPAD_1, "1");
            ig.input.bind(ig.KEY._2, "2");
            ig.input.bind(ig.KEY.NUMPAD_2, "2");
            ig.input.bind(ig.KEY._3, "3");
            ig.input.bind(ig.KEY.NUMPAD_3, "3");
            ig.input.bind(ig.KEY._4, "4");
            ig.input.bind(ig.KEY.NUMPAD_4, "4");
            ig.input.bind(ig.KEY._5, "5");
            ig.input.bind(ig.KEY.NUMPAD_5, "5");
            ig.input.bind(ig.KEY._6, "6");
            ig.input.bind(ig.KEY.NUMPAD_6, "6");
            ig.input.bind(ig.KEY._7, "7");
            ig.input.bind(ig.KEY.NUMPAD_7, "7");
            ig.input.bind(ig.KEY._8, "8");
            ig.input.bind(ig.KEY.NUMPAD_8, "8");
            ig.input.bind(ig.KEY._9, "9");
            ig.input.bind(ig.KEY.NUMPAD_9, "9");
            // Derp
            //conso
            //this.anims.aim.update

            // Parent
            this.parent(x, y, settings);
        },
        update: function() {
            this.parent();
            if (ig.input.pressed("FIRE")) this.shoot();
            if (ig.input.pressed("1")) ig.game.answerQuestion("1");
            if (ig.input.pressed("2")) ig.game.answerQuestion("2");
            if (ig.input.pressed("3")) ig.game.answerQuestion("3");
            if (ig.input.pressed("4")) ig.game.answerQuestion("4");
            if (ig.input.pressed("5")) ig.game.answerQuestion("5");
            if (ig.input.pressed("6")) ig.game.answerQuestion("6");
            if (ig.input.pressed("7")) ig.game.answerQuestion("7");
            if (ig.input.pressed("8")) ig.game.answerQuestion("8");
            if (ig.input.pressed("9")) ig.game.answerQuestion("9");
        },

        shoot: function () {
            // If Already Shooting, Or Have No Bullets, Return, Otherwise Set Shooting To True
            if (this.shooting || ig.game.bullet.count < 1) return; else this.shooting = true;
            // Player Scope, And Determine Bullet Strength
            let player = this, combo = [5, 10, 15].indexOf(ig.game.bullet.count) > -1;
            // Reduce Bullet Count Based On Bullet Strength
            ig.game.bullet.count -= combo ? 5 : 1;
            // Get A List Of Zombies Based On Bullet Strength
            let zombies = ig.game.getEntitiesByType(EntityZombie).order(function(a, b){return a.pos.x - b.pos.x}).filter(function(a){return a.dead != true && a.pos.x < ig.system.width}).slice(0, combo ? 6 : 1);
            // Get The Location Of Where The Bullet Will Finally Stop
            let destination = zombies.length == 0 ? ig.system.width : combo ? zombies[(zombies.length - 1)].pos.x : zombies[0].pos.x;
            // If Combo, Charge And Shoot, Otherwise Just Shoot
            if (combo) player.playAnim("aimHard");
            setTimeout(function(){
                player.playAnim(combo ? "fireHard" : "fire");
                for (let i = 0; i < zombies.length; i++) {
                    setTimeout(function(){zombies[i].dead = true}, i * 50);
                }
                player.shooting = false;
            }, combo ? 500 : 0);
        }
    });
});
