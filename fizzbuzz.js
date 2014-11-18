var a = process.argv[2];

a = parseInt(a)

if ((a % 3 == 0) && (a % 5 == 0)) {
  console.log("FizzBuzz")
}else if (a % 3 == 0){
  console.log("Fizz")
}else if (a % 5 == 0){
  console.log("Buzz")
}else {
  console.log(a)
};
