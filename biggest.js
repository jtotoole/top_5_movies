var x = process.argv[2];
var y = process.argv[3];
var z = process.argv[4];

var a = parseInt(x)
var b = parseInt(y)
var c = parseInt(z)

if ((a>b) && (a>c)){
  console.log(a)
}else if ((b>a) && (b>c)){
  console.log(b)
}else {
  console.log(c)
};
