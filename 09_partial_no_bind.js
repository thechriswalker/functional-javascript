module.exports = function(prefix){
  return function(){
    console.log.apply(console, [prefix].concat(Array.prototype.slice.call(arguments)));
  }
}
