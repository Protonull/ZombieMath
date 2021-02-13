ig.module("game.entities.ammo").requires("impact.game").defines(function(){
    EntityAmmo = ig.Entity.extend({
        // Identification
        name: "Ammo",
        // Collision
        size: {x: 8, y: 8},
        // Movement
        vel: {x: 0, y: 0},
        maxVel: {x: 0, y: 0},
        // Animation
        animSheet: new ig.AnimationSheet("media/zombiemath.png", 8, 8),

        init: function( x, y, settings ) {
            this.addAnim(0, 0.1, [47], true);
            this.addAnim(1, 0.1, [42], true);
            this.addAnim(2, 0.1, [43], true);
            this.addAnim(3, 0.1, [44], true);
            this.addAnim(4, 0.1, [45], true);
            this.addAnim(5, 0.1, [46], true);
            this.currentAnim = this.anims[0];
            this.parent( x, y, settings );
        },
        update: function() {
            this.parent();
        }
    });
});
