const math = require('mathjs')
const parser = math.parser();

parser.eval('f(x) = sin(4 x ^ 4 + 3 x + 2)');

var a = 0
var b = 0.5
var alpha = parser.eval('10 ^ - 3');
ex = 3
var m = 5
var sol
var temp;

if(a > b){
  temp = a;
  a = b;
  b = temp;
}

while( b - a > alpha){
  m = ( a + b ) / 2;
  if((parser.eval('f('+m+')') * parser.eval('f('+a+')')) > 0){
    a = m;
  }else{
    b = m;
  }
}

console.log("L'encadrement de la solution X est : "+a+" < X < "+b+"\n\n");
console.log("La solution à "+alpha+" près est : "+parseFloat(m).toFixed(ex));
