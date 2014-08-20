module.exports = function curry(fn, n, args){
  if(!n){ n = fn.length; }
  if(!args){ args = []; }
  return function(arg){
    var myArgs = args.concat([arg]);
    if(myArgs.length === n){
      return fn.apply(null, myArgs);
    }
    return curry(fn, n, myArgs);
  };
};
