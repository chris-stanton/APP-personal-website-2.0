myApp.controller('DevelopmentController',['FactoryFactory',function(FactoryFactory) {

  console.log('DevelopmentController running...');

  var self = this;

  self.message = 'angular sourced';

  // self.apps = [
  //   {
  //     title : "Personal Application",
  //     github_link : "https://github.com/chris-stanton/APP-personal-website-2.0",
  //     about : "You are currently viewing this application!!  Application is ment to be a tool to help aide is discovering new oppurtunities within Software Development community. " +
  //             "Within the application, potential employers can read alittle bit about myself and my personal life, learn about a few applications I have developed and view my resume. ",
  //     technologies : [
  //       "HTML",
  //       "CSS",
  //       "Flex Box",
  //       "Javascript",
  //       "Angular",
  //       "Node JS",
  //       "Express JS",
  //       "Git/GitHub"
  //     ],
  //     mac : "../assets/images/mockups/personal-mac.png",
  //     iphone : "../assets/images/mockups/personal-iphone.png",
  //   },
  //   {
  //     title : "Local Weather Forecast",
  //     github_link : "https://github.com/chris-stanton/APP-local-weather-forecast",
  //     about : "Local Weather Forcast App uses DarkSky's API to give the user the current weather conditions. " +
  //             "The User can also view an hourly and daily graph thats displays current temp. 'feels like' temp, humidity and chance of rain. " +
  //             "lastly the user can view a 7 day outlook with high/low temps, sunrise/sunset times and chance of rain.",
  //     technologies : [
  //       "HTML",
  //       "CSS",
  //       "Flex Box",
  //       "Javascript",
  //       "jQuery",
  //       "Node JS",
  //       "Dark Sky API",
  //       "Google Geolocation API",
  //       "Font-Awesome",
  //       "Chart JS",
  //       "Git/GitHub"
  //     ],
  //     mac : "../assets/images/mockups/weather-mac.png",
  //     iphone : "../assets/images/mockups/weather-iphone.png",
  //   }
  //
  // ]



}]);//end of myApp.controller
