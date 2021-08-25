var sampleTasklist = new Tasklist("My Tasks1");
var newTask = new Task("Medium urgency");
var completedTask = new Task("Completed Task");
completedTask.completed = true;
sampleTasklist.addNewTask(newTask);
sampleTasklist.addNewTask(completedTask);

/////Angular JS: MVC
var app = angular.module("app", []);
app
  .controller("TaskListController", ["$scope", function($scope) {
    $scope.tasklist = sampleTasklist;
    $scope.selectedTask = null;

    $scope.selectTask = function(task) {
      $scope.selectedTask = task;
    }
    $scope.addNewTask = function(name) {
      var newtask = new Task(name);
      $scope.tasklist.addNewTask(newtask);
      $scope.selectedTask = newtask;
      $scope.newtaskname = null;
    }
    $scope.resetSelectedTask = function() {
      $scope.selectedTask = null;
    }
  }]);

function Tasklist(name) {
  this.name = name;
  this.tasks = [];
  this.addNewTask = function(task) {
    this.tasks.push(task);
  }
}

function Task(name) {
  this.title = name;
  this.duedate = null;
  this.description = null;
  this.reminder = null;
  this.urgency = 2;
  this.completed = false;
}
