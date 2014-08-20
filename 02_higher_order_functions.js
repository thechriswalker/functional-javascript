module.exports = function repeat(op, num){
  if(!num){ return; }
  op(); 
  repeat(op, --num);
};
