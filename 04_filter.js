module.exports = function(a){ return a.filter(function(b){ return b.message.length < 50; }).map(function(c){ return c.message; }); };
