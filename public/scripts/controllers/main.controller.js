myApp.controller('MainController', ['FactoryFactory', '$http',function(FactoryFactory, $http) {

  let self = this;

  $http({
    method: 'GET',
    url: 'https://api.github.com/users/chris-stanton'
  }).then(function(response) {
    console.log(response.data);
    self.github_username = response.data.login;
    self.github_public_repos = response.data.public_repos;
    self.github_url = response.data.url;
  });




}]); // end controller code block
