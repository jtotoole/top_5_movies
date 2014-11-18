var a = process.argv[2];
var b = process.argv[3];

ahalf = (a.length)/2;
bhalf = (b.length)/2;

a_half_rounded = Math.floor(ahalf)
b_half_rounded = Math.floor(bhalf)

if (a.length > b.length){
  console.log(a.slice(0, a_half_rounded))
}else{
  console.log(b.slice(0, b_half_rounded))
};

if (a.length > b.length){
  console.log("The difference in the character lengths is " + (a.length-b.length) + ".");
}else{
  console.log("The difference in the character lengths is " + (b.length-a.length) + ".");
};
