$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/blizarazu.json',
    dataType: 'jsonp',
    success: function(response) {
      var completed = response.courses.completed;
      for(var i=0; i < completed.length; i++) {
        $('#badges')
        .append(
          '<div class="course">' +
            '<h3>' + completed[i].title + '</h3>' +
            '<img src="' + completed[i].badge + '"></img>' +
            '<a href="' + completed[i].url + '" target="_blank" class="btn btn-primary">' +
              'See Course' +
            '</a>' +
          '</div>'
        );
      }
    }
  });
});
