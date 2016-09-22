angular.module("Controllers").controller("firstCtrl", ["$location", function($location) {
    this.test = {
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: ["<script>", "<head>", "Both the <head> section and the <body> section are correct"],
                    answers: ["Both the <head> section and the <body> section are correct"]
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
    this.goAhead = function() {
        $location.path("/second");
    }
}]);