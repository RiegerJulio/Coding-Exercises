const productCost = 1;
const saleValue = 3;

if(productCost >= 0 && saleValue >= 0){
  const totalCost = productCost * 1.2;
  const totalProfit = (saleValue - totalCost) * 1000;
  console.log(totalProfit);
} else {
  console.log("error! the values can't be negatives");
}