function repeat(operation, num) {
  // modify this so it can be interrupted
  
  operation();
  num--;
  if(num){
    setImmediate(function(){
      repeat(operation, num)
    });
  }
}

module.exports = repeat
