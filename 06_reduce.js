module.exports = function(list){
  return list.reduce(function(acc, curr){
    if(curr in acc){
      acc[curr]++;
    }else{
      acc[curr] = 1;
    }
    return acc;
  }, {});
}
