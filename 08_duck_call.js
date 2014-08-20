module.exports = function(){
  return Array.prototype.reduce.call(arguments, function(acc, curr){ if( Object.hasOwnProperty.call(curr, "quack") ){ acc++; } return acc; }, 0);
}
