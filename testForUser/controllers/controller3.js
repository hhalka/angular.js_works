angular.module("Controllers").controller("thirdCtrl", function() { 
    this.test = {
                    question: "How does a FOR loop start?",
                    options: ["for (i = 0; i <= 5; i++)", "for i in range(5)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
                    answers: ["for (i = 0; i <= 5; i++)"]
                 };
    this.showBtn = false;
    this.selected = {};
    this.checkAnswer = function(rightAnswer) {
        var answer = [];
        angular.forEach(this.selected, function(index, element) {
            if(index == true){
                answer.push(element);
            }
        });
        if(answer.toString() === this.test.answers.toString()){
            rightAnswer.score++;
            this.showBtn = true;
        };
    };
    this.showResult = function(rightAnswer) {
        alert("Your result is " + rightAnswer.score);
    };
});