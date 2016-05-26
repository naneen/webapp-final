var app = angular.module('myApp', ['ngRoute']);

app.controller('webappController', function() {
  var todoList = this;
  todoList.maxlength = 200;
  todoList.paragraph;

  todoList.addParagraph = function(){
    //
  }
});

app.config(function($routeProvider) {
   $routeProvider
    .when('/', {
      controller:'webappController as homeCtrl',
      templateUrl:'view/home.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
