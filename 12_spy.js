module.exports = function(obj, method){
  var spy = { count: 0 }, fn = obj[method];
  obj[method] = function(){
    spy.count++;
    return fn.apply(obj, arguments);
  }
  return spy;
}
