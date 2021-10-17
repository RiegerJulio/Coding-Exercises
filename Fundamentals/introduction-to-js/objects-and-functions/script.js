// Exercise OBJECTS AND FOR IN

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1-
//
// console.log("Bem-vinda " + info.personagem);

// 2-
//
// info.recorrente = 'Sim';

// console.log(info);

// 3-
//
// for (const key in info) {
//   console.log(key);
// }

// 4-
//
// for (const key in info) {
//   console.log(info[key]);
// }

// 5-
//
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (const key in info) {
  
//   if(key === 'recorrente' && info.recorrente === "Sim" && info2.recorrente === "Sim"){
//     console.log("ambos reccorrentes");
//   }else {
//     console.log(info2[key] + " e " + info[key]);
//   }
// }

// Exercise FUNCTIONS

// 1-
// function isPalindrome(word){
//   for(key in word){
//     if(word[key] != word[(word.length - 1) - key]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("arara"));
// console.log(isPalindrome("batata"));

// 2-
// function bigIndex(number){
//   bigNum = 0;
//   for (let index in number) {
//     if(number[bigNum] < number[index]){
//       bigNum = index;
//     }
//   } return bigNum;
// }

// console.log(bigIndex([2, 3, 2, 5, 8, 2, 3]));

// 3-
// function smallIndex(number){
//   smallNum = 0;
//   for (let index in number) {
//     if(number[smallNum] > number[index]){
//       smallNum = index;
//     }
//   } return smallNum;
// }

// console.log(smallIndex([2, 4, 6, 7, 10, 0, -3]));

// 4-
// function biggerName(names){
//   let bigName = "";
//   for (const index in names) {
//     if(names[index].length > bigName.length){
//       bigName = names[index];
//     }
//   } return bigName;
// }

// console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5- 
// function sumNumbers (number){
//   let sum = 0;
//   for (let index = 1; index <= number; index++) {
//     sum = sum + index;
//   } return sum;
// }

// console.log(sumNumbers(5));

