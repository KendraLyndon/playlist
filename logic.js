function randomizer(){
  return Math.floor(Math.random()*5);
}

function makeRandomArray(){
  var arr = [];
  for(var i=0;i<3;i++){
    var random = randomizer();
    while(arr.indexOf(random) != -1){
      random = randomizer();
    }
    arr.push(random);
  }; return arr;
}
