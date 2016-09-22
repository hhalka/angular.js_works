angular.module("Controllers").controller("secondCtrl", ["$location", function($location) {
   this.test = {
                    question: "How do you find the number with the highest value of x and y?",
                    options: ["Math.ceil(x, y)", "ceil(x, y)", "Math.max(x, y)", "top(x, y)"],
                    answers: ["Math.max(x, y)"]
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
    }
    this.goAhead = function() {
        $location.path("/third");
    }
}]);