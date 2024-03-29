 function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return function(){ return repeat(operation, --num); }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  var result = fn;
  do{
    result = result();
  }while(typeof result === "function")
  return result;
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(function(){ return repeat(operation, num); });
}
