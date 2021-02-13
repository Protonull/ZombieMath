ig.module("game.math").requires("impact.game").defines(function(){
    "use strict";
    ig.Game.inject({
        questions: [
            // Level 1
            {level: 1, text: "1", answer: "1"},
            {level: 1, text: "2", answer: "2"},
            {level: 1, text: "3", answer: "3"},
            {level: 1, text: "4", answer: "4"},
            {level: 1, text: "5", answer: "5"},
            {level: 1, text: "6", answer: "6"},
            {level: 1, text: "7", answer: "7"},
            {level: 1, text: "8", answer: "8"},
            {level: 1, text: "9", answer: "9"},
            // Level 2
            {level: 2, text: "1 + 1", answer: "2"},
            {level: 2, text: "1 + 2", answer: "3"},
            {level: 2, text: "1 + 3", answer: "4"},
            {level: 2, text: "1 + 4", answer: "5"},
            {level: 2, text: "2 + 1", answer: "3"},
            {level: 2, text: "2 + 2", answer: "4"},
            {level: 2, text: "2 + 3", answer: "5"},
            {level: 2, text: "3 + 1", answer: "4"},
            {level: 2, text: "3 + 2", answer: "5"},
            {level: 2, text: "4 + 1", answer: "5"},
            {level: 2, text: "5 - 1", answer: "4"},
            {level: 2, text: "5 - 2", answer: "3"},
            {level: 2, text: "5 - 3", answer: "2"},
            {level: 2, text: "5 - 4", answer: "1"},
            {level: 2, text: "4 - 1", answer: "3"},
            {level: 2, text: "4 - 2", answer: "2"},
            {level: 2, text: "4 - 3", answer: "1"},
            {level: 2, text: "3 - 1", answer: "2"},
            {level: 2, text: "3 - 2", answer: "1"},
            {level: 2, text: "2 - 1", answer: "1"}
        ],
        getQuestion: function (level) {
            if ("number" != typeof level || level < 1) level = 1;
            let question = this.questions.filter(function(a){return a.level == level});
            return question.length == 0 ? this.getQuestion(level - 1) : question.random();
        },
        answerQuestion: function (answer) {
            if ("string" != typeof answer) return false;
            if (this.problem.answer != answer) {
                this.bullet.count--;
                this.score--;
            }
            else {
                this.problem = this.getQuestion(this.level);
                this.bullet.count++;
                this.score++;
            }
        },
        update: function () {
            this.level = this.score <  9 ? 1 :
                         this.score < 15 ? 2 :
                         this.score < 25 ? 3 :
                         this.score < 35 ? 4 :
                         this.score < 45 ? 5 : 6;
            this.parent();
        }
	})
});
