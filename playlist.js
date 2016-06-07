$(document).ready(function(){
  var covers = $('#covers');
  var tracks = $('#tracks');
  var clear = $('#clear');
  var submit = $('#submit');
  var findAlbums = $('#find-albums');
  findAlbums.click(function(event){
    event.preventDefault();
    $.getJSON('https://lit-fortress-6467.herokuapp.com/object',function(data){
      covers.html('');
      var results = data.results;
      for(var i=0;i<results.length;i++){
        var cover = $('<div>');
        cover.addClass('album');
        cover.attr('id',results[i].id);
        var image = $('<img>');
        image.addClass('cover_img');
        image.attr('src', 'images/'+results[i].cover_art);
        image.appendTo(cover);
        cover.appendTo(covers);
      }
      var album = $('.album');
      album.on('click',function(){
        for(var j=0;j<results.length;j++){
          if(results[j].id === Number(this.id)){
            tracks.append(`${results[j].artist}: ${results[j].title}\n`);
          }
        }
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
