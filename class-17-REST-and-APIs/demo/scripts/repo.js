(function(module) {
  var repo = {};

  repos.all = [];


  repos.requestRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token' + githubToken
      },
      success: function(data, message, xhr){
        repos.all = data;
      },
      error: function(xhr, status, error){
        console.log('error');
      }
    }).then(callback);
  };

  module.repos = repos;

})(window);
