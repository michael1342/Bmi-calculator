//BMI Calculator

const personName = 'Michael'
let weight = 70
let height = 1.75
let heightSquared = height * height
const bmi = weight / heightSquared
const isUnderweight = bmi < 18.5
const normalWeight = bmi >= 18.5 && bmi < 25
const overWeight = bmi >= 25
const isHighRisk = bmi > 90
let overWeightRisk = 'High Risk'
let normalWeightRisk = 'Normal Weight'
let underWeightRisk = 'Underweight'

console.log(personName + ' has a BMI of ' + bmi)

  const checker =  (isUnderweight === true) ? console.log(underWeightRisk) : (normalWeight === true) ? console.log(normalWeightRisk) : (overWeight || isHighRisk === true) ? console.log(overWeightRisk) : console.log('Invalid BMI')


//bmiChecker()
let result = bmi.toFixed(2)

console.log(`Name: ${personName} \nBMI: ${result} \nUnderweight: ${isUnderweight} \nNormal Weight: ${normalWeight} \nOverweight: ${overWeight} \nHigh Risk Alert!: ${isHighRisk}`)