const math = require('mathjs')
const parser = math.parser();

parser.eval('f(x) = x ^ 3 + x - 1');

var a = 0
var b = 1
var alpha = parser.eval('10 ^ - 4');
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

console.log("L'encadrement de la solution X est : "+a+" < X < "+b);
console.log(parser.eval('f(0.68231201171875)'))
