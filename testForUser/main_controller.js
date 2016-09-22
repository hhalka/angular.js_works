angular.module("Controllers", [])
    .controller("navigationCtrl", ["$location", function($location) {
        this.arr = [
            {
                title: "MainPage",
                link:"#/"
            },
            {
                title: "FirstPage",
                link:"#/first"
            },
            {
                title: "SecondPage",
                link:"#/second"
            },
            {
                title: "ThirdPage",
                link:"#/third"
            }
        ];
        this.startTest = function(){
            $location.path("/first");
        };
        this.rightAnswer = {score: 0};
    }]);

//angular.module("Controllers").factory("rightAnswer", function() {
//    return {score: 0};
//});