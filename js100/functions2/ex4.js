// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

//bmi = weightInKilograms / heightInMeters**2;

function calBMI(weight, height) {
  let bmi =  weight / (height / 100)**2;

    return bmi.toFixed(2)
}

console.log(calBMI(80, 180))