//ax + by = e
//cx + dy = f
//x + (b/a)y = e/a
//y + (c/d)x = f/d
// x = (e/a) -(b/a)y
// y = (f/d) - (c/d)x

var a = 7
var b = 10
var c = -2
var d = 1
var e = 36
var f = 9

var y = (f/d -(c*e)/(d*a)) / (1 - (c*b)/(d*a));
var x = (e/a - (b*f)/(d*a)) / (1 - (c*b)/(d*a));

console.log("\nLa solution est ( "+parseFloat(x).toFixed(8)+", "+parseFloat(y).toFixed(8)+" ) .\n");
