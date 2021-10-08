const angleA = 45;
const angleB = 20;
const angleC = 90;

let angleSum = angleA + angleB + angleC;

let positiveAngles = angleA > 0 && angleB > 0 && angleC > 0;

if(positiveAngles){
  if (angleSum === 180){
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log("error! this angle is invalid")
}