document.addEventListener('DOMContentLoaded',function(){
  var request = new XMLHttpRequest();
  var covers = document.getElementById('covers');
  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status < 400){
        var results = JSON.parse(request.responseText).results;
        var random = makeRandomArray();
        for(var i=0;i<3;i++){
          var coverArt = document.createElement('img');
          coverArt.className = 'album-img';
          coverArt.id = 'album-'+i;
          coverArt.src = 'images/'+results[random[i]].cover_art;
          covers.appendChild(coverArt);
        }
      }
    }
  }
  request.open('GET','https://lit-fortress-6467.herokuapp.com/object');
  request.send();
})
