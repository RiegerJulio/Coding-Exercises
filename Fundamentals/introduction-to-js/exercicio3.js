const num1 = 1;
const num2 = 2;
const num3 = 5;

if (num1 > num2 && num1 > num3){
  console.log(num1 + " é maior que " + num2 + " e " + num3);
} else if (num2 > num1 && num2 > num3){
  console.log(num2 + " é maior que " + num1 + " e " + num3);
} else {
  console.log(num3 + " é maior que " + num1 + " e " + num2);
}