$(document).ready(function(){
  var covers = $('#covers');
  var tracks = $('#tracks');
  var clear = $('#clear');
  var submit = $('#submit');
  var userInput = $('#user-input');
  var findAlbums = $('#find-albums');
  var artists = $('#artist-choices');

  $(findAlbums).click(function(event){
    event.preventDefault();
    $(covers).html('');
    $(artists).html('');
    $.getJSON('https://api.spotify.com/v1/search?q='+userInput.val()+'&type=artist',function(data){
      var results = data.artists.items;
      console.log(results);
      results.forEach(function(result){
        var artist = document.createElement('p');
        artist.className = 'artist';
        artist.id = result.id;
        $(artist).text(result.name);
        $(artist).appendTo(artists);
      })

      $(artists).children().click(function(){
        $(covers).html('');
        $.getJSON('https://api.spotify.com/v1/artists/'+this.id+'/albums',function(data){
          var albumResults = data.items;
          albumResults.forEach(function(album){
              var image = document.createElement('img');
              image.className = 'cover_img';
              image.src = album.images[0].url;
              image.id = album.id;
              $(image).appendTo(covers);
          })
          $(covers).children().click(function(){
            $.getJSON('https://api.spotify.com/v1/albums/'+this.id+'/tracks',function(data){
              var trackResults = data.items;
              trackResults.forEach(function(result){
                var track = document.createElement('p');
                // var anchor = $('<a>');
                track.innerHTML = result.name;
                console.log(track.text);
                $(track).appendTo(tracks);
              })
            })
          })
        })
      })
    })
  })
  clear.click(function(){
    tracks.text('');
  })
  submit.click(function(){
    $.post('https://lit-fortress-6467.herokuapp.com/post',function(response){
      console.log(response);
    })
  })
})
