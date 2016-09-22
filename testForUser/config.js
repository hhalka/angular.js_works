angular.module("routeApp").config(function($routeProvider) {
   $routeProvider
        .when("/", {
            templateUrl: "templates/mainTemplate.html"
            //controller: "navigationCtrl",
            //controllerAs: "nav"
        })
        .when("/first", {
            templateUrl: "templates/firstTemplate.html"
            //controller: "navigationCtrl",
            //controllerAs: "nav"
        })
        .when("/second", {
            templateUrl: "templates/secondTemplate.html"
            //controller: "navigationCtrl",
            //controllerAs: "nav"
        })
        .when("/third", {
            templateUrl: "templates/thirdTemplate.html"
            //controller: "navigationCtrl",
            //controllerAs: "nav"
        });
        $routeProvider.otherwise("/");
});