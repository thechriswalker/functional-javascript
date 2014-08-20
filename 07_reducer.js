module.exports = function recurduce(list, fn, init, arr, index){
  if(!arr){
    //pass one
    list = list.slice();
    arr = arguments[0];
    index = 0;
  }
  var next = fn(init, arr.shift(), index, list);
  if(arr.length === 0){ return next; }
  return recurduce(list, fn, next, arr, ++index);
};

