ig.module("game.entities.zombie").requires("impact.game").defines(function(){
    EntityZombie = ig.Entity.extend({
        // Identification
        name: "Zombie",
        // Collision
        type: ig.Entity.TYPE.B,
        size: {x: 8, y: 12},
        // Movement
        vel: {x: -1.7, y: 0},
        maxVel: {x: 10, y: 0},
        // Animation
        animSheet: new ig.AnimationSheet("media/zombiemath.png", 8, 12),
        // Status
        dead: false,
        deadCount: 0,
        deadRemove: 4,

        init: function( x, y, settings ) {
            this.addAnim("walking", 0.5, [5, 20]);
            this.addAnim("death", 0.5, [21, 22, 23], true);
            this.currentAnim = this.anims.walking;
            this.parent( x, y, settings );
        },
        update: function() {
            if (this.dead) {
                if (this.deadCount == 0) {
                    this.type = ig.Entity.TYPE.NONE;
                    this.anims.death.rewind();
                    this.currentAnim = this.anims.death;
                }
                this.vel.x = 0;
                this.deadCount += ig.system.tick;
                if (this.deadCount >= this.deadRemove) {
                    this.kill();
                }
            }
            this.parent();
        }
    });
});
