var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
   $routeProvider
    .when('/', {
      controller:'homeController as homeCtrl',
      templateUrl:'src/view/home.html'
    })
    .when('/output', {
      controller:'coutputController as outputCtrl',
      templateUrl:'src/view/output.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

app.controller('homeController', function() {
  var todoList = this;
  todoList.maxlength = 200;
  todoList.paragraph;

  todoList.addParagraph = function(){
    //
  }
});

app.controller('outputController', function() {
  var todoList = this;
  todoList.maxlength = 200;
  todoList.paragraph;

  todoList.addParagraph = function(){
    //
  }
});
