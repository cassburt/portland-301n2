(function(module){
  var repoView = {};

  repoView.getTemplate = function(data, callback){
    getTemplate('repoTemplate', data, callback);
  };

  var ui = function(){
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  repoView.index = function(){
    ui();
    repos.all.map(function(repo){
      repoView.getTemplate(repo, function(html){
        $('#about ul').append(html);
      });
    });
  };

  module.repoView = repoView;
})(window);

//ignore this
var render =function(repo) {
  var template = Handlebars.compile($('#repo-template').text());
  return template(repo);
};
