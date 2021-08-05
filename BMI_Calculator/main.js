// On submit, we want to take the two values passed in
// and enter them into a function that will output their 
// BMI Calculation


function userInput() {
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    var result = []
    var floatH = parseFloat(h);
    var floatW = parseFloat(w);
    result.push(floatH)
    result.push(floatW)
    console.log(result)
    return result;
};

function trueResult() {
    var results = userInput()
    var height = results[0]
    var weight = results[1]
    var bodyMassIndex = weight / (height ** 2)
    bodyMassIndex = Math.round(bodyMassIndex * 100) / 100
    var resultEle = document.getElementById('result')
    resultEle.innerHTML = `Your BMI is: ${bodyMassIndex}`
    showResult(bodyMassIndex)
};

function showResult(bMI) {
    var showWeightEle = document.getElementById('weightresult')
    if (bMI <= 18.5) {
        showWeightEle.innerHTML = `Weight Type: Underweight`
    } else if (bMI > 18.5 && bMI <= 24.9) {
        showWeightEle.innerHTML = `Weight Type: Normal Weight`
    } else if (bMI > 25 && bMI <= 29.9) {
        showWeightEle.innerHTML = `Weight Type: Overweight`
    } else if (bMI > 30) {
        showWeightEle.innerHTML = `Weight Type: Obese`
    } else {
        console.log('There has been an error...')
    }
};