// Good Luck! You got this 
// Write your code here.
function BMI(weight, height) 
{
    const bmi = weight / (height * height);
    return bmi
  }
const ali_weight = 73;
const ali_Height = 1.77; 
const ali_BMI = BMI(ali_weight, ali_Height);

const mohamed_weight =80;
const mohamed_Height = 1.85; 
const mohamed_BMI = BMI(mohamed_weight, mohamed_Height);

if (mohamed_BMI > ali_BMI) {
  console.log("Mohamed has a bigger BMI");
} else if (ali_BMI > mohamed_BMI) {
  console.log("Ali has a bigger BMI");
} else {
  console.log("Mohamed and Ali have the same BMI");
}