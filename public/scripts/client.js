
var myApp = angular.module('myApp', ['ngRoute', '720kb.tooltips']);

myApp.config(['$routeProvider', 'tooltipsConfProvider', function($routeProvider, tooltipsConfProvider) {

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

  // angular-tooltips global config options
  tooltipsConfProvider.configure({
    'smart': true,
    'side': 'top',
    'size': 'small',
    'speed': 'slow',
    'tooltipTemplateUrlCache': false
  });


}]); // end myApp.config()
