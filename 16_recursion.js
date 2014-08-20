/*
var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }
*/

module.exports = function(tree){
  if("dependencies" in tree){
    return Object.keys(deps(tree.dependencies, {})).sort();
  }
  return [];
  //now recurse the dependencies.
  function deps(list, set){
    return Object.keys(list).reduce(function(acc, curr){
      acc[curr+"@"+list[curr].version] = true;
      if("dependencies" in list[curr]){
        acc = deps(list[curr].dependencies, acc);
      }
      return acc;
    }, set);
  }
}
