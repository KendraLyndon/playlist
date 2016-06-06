document.addEventListener('DOMContentLoaded',function(){
  var request = new XMLHttpRequest();
  var covers = document.getElementById('covers');
  var entry = document.getElementById('tracks');

  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status < 400){
        var results = JSON.parse(request.responseText).results;
        for(var i=0;i<results.length;i++){
          var cover = document.createElement('div');
          cover.className = 'album';
          cover.id = results[i].id;
          var image = document.createElement('img');
          image.className = 'cover_img';
          image.src = 'images/'+results[i].cover_art;
          cover.appendChild(image);
          covers.appendChild(cover);
        }
        var album = document.getElementsByClassName('album');

        for(var i=0;i<album.length;i++){
          album[i].addEventListener('click',function(){
            for(var j=0;j<results.length;j++){
              if(results[j].id === Number(this.id)){
                var artist = results[j].artist;
                var title = results[j].title;
                entry.textContent+=`${artist}: ${title}\n`;
              }
            }
          })
        }
      }
    }
  }
  request.open('GET','https://lit-fortress-6467.herokuapp.com/object');
  request.send();
})
