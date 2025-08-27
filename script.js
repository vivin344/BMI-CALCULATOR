function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const resultText = `Your BMI is ${bmi.toFixed(2)} - ${getBMICategory(bmi)}`;
        document.getElementById('result').innerText = resultText;
    } else {
        alert('Please enter valid values for weight and height.');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi < 24.9) return 'Normal weight';
    else if (bmi < 29.9) return 'Overweight';
    else return 'Obesity';
}
