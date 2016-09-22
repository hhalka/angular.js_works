 var toDoList = {
    user: "Halka",
    tasks: [{description: "read newspaper", isDone: false}, {description: "make to do list", isDone: false}],
};

var todo = angular.module("todo", []);

todo.controller("ToDoCtrl", function($scope){
    $scope.list = toDoList.tasks;
    $scope.user = toDoList.user;

    $scope.taskDescription = "";
    $scope.task = {description: "", isDone: false};
    $scope.taskIndex = 0;
    $scope.temporaryTask = {description: "", isDone: false};
    $scope.showEditForm = false;

    $scope.addTask = function(){
        var task = {description: $scope.taskDescription, isDone: false};
        $scope.list.push(task);
        $scope.taskDescription = "";
    };
    $scope.deleteTask = function(task){
        $scope.list.splice($scope.list.indexOf(task), 1);
    };
    $scope.editTask = function(task){
        $scope.showEditForm = true;
        $scope.taskIndex = $scope.list.indexOf(task);
        $scope.temporaryTask = angular.copy(task);
    };
    $scope.saveEdited = function(){
        $scope.list[$scope.taskIndex].description = $scope.temporaryTask.description;
        $scope.temporaryTask.description = "";
        $scope.showEditForm = false;
    };
})