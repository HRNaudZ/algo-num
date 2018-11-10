const math = require('mathjs');
const parser = math.parser();

const f = math.parse('f(x) = x ^ 2 - 3');
const x = math.parse('x');

var X1  = 10
var X2  = 9
var sol1, sol2
var alpha = math.eval('10 ^ - 4');
var ex = 4

var iterations = 1000;

//Erreur math.abs(f.expr.eval({x : X}) - 0) > alpha
//Iteration for( var i = 0; i < iterations; i++ )

for(var i = 0; i < iterations; i++){
  sol1 = ((f.expr.eval({x : X2}) * X1 - f.expr.eval({ x : X1}) * X2) / (f.expr.eval({x : X2}) - f.expr.eval({x : X1})))
  if(isNaN(sol1)){
    sol1 = X2
    break;
  }
  X1 = X2
  X2 = sol1
}

X1  = 10
X2  = 9

do{
  sol2 = ((f.expr.eval({x : X2}) * X1 - f.expr.eval({ x : X1}) * X2) / (f.expr.eval({x : X2}) - f.expr.eval({x : X1})))
  X1 = X2
  X2 = sol2
}while(math.abs(f.expr.eval({x : sol2}) - 0) > alpha);

console.log("Fist Solution : " + sol1.toFixed(ex) + " ;;;; Second One : "+sol2.toFixed(ex));
