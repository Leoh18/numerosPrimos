const main = () => {

let num = 7;
let primos = true;

if (num === 1) {
  console.log('1 nao e um numero primo, e nao e um numero composto.');
}
  else if(num > 1) {

  for (let i = 2; i < num; i++) {
    if (num % i === 0){
      primos = false;
      break;
    }
  }
  if(primos) {
      console.log(`${num} e um numero primo`);
    } else {
      console.log(`${num} nao e um numero primo`);
    }
  }
  else {
    console.log('este nao e um numero primo.');
  }
}
main();