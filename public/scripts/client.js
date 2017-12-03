
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/main', {
          templateUrl: '/views/main.html',
          controller: 'MainController',
          controllerAs: 'mc'
        })
        .when ('/development', {
            templateUrl: '/views/development.html',
            controller: 'DevelopmentController',
            controllerAs: 'dc'
        })
        .when ('/resume', {
            templateUrl: '/views/resume.html',
            controller: 'ResumeController',
            controllerAs: 'rc'
        })
        .otherwise ( {
            redirectTo: '/main'
        });
}]);
