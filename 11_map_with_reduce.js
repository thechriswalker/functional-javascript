module.exports = function(a,f){ return a.reduce(function(acc, curr, i, arr){ acc.push(f(curr, i, arr)); return acc; }, []); }
