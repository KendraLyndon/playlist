$(document).ready(function(){
  var covers = $('#covers');
  $.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data){
    var results = data.results;
    for(var i=0;i<3;i++){
      var coverArt = $('<img>');
      coverArt.attr('src', 'images/'+results[makeRandomArray()[i]].cover_art);
      coverArt.addClass('album-img');
      coverArt.attr('id','album-'+i);
      coverArt.appendTo(covers);
    }
  });
})
