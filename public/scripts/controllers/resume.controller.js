
myApp.controller('ResumeController',['FactoryFactory', '$window',function(FactoryFactory, $window) {

  let self = this;

  self.message = 'angular sourced';

  self.scroll = ($window) => {
    console.log('window: ',$window.pageYOffset);
  }



}]);//end of myApp.controller
