const math = require('mathjs')
const parser = math.parser();

const f = math.parse('f(x) = x ^ 2 - 3');
const x = math.parse('x');
var g = math.derivative(f, x);

var X  = 10
var alpha = math.eval('10 ^ - 4');
var ex = 4
var iterations = 1000;

var sol1 = X - ( f.expr.eval({x : X}) / g.eval({x : X}) )
var sol2 = X - ( f.expr.eval({x : X}) / g.eval({x : X}) )

//Erreur math.abs(f.expr.eval({x : X}) - 0) > alpha
//Iteration for( var i = 0; i < iterations; i++ )

for(var i = 0; i < iterations; i++){
  sol1 = sol1 - ( f.expr.eval({x : sol1}) / g.eval({x : sol1}) )
}

while(math.abs(f.expr.eval({x : sol2}) - 0) > alpha){
  sol2 = sol2 - ( f.expr.eval({x : sol2}) / g.eval({x : sol2}) )
}

console.log("Fist Solution : " + sol1.toFixed(ex) + " ;;;; Second One : "+sol2.toFixed(ex));
