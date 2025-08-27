function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const resultText = `Your Body Mass Index is ${bmi.toFixed(2)} - ${getBMICategory(bmi)}`;
        document.getElementById('result').innerText = resultText;
    } else {
        alert('Please enter valid values for weight and height.');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Under Weight';
    else if (bmi < 24.9) return 'Normal Weight';
    else if (bmi < 29.9) return 'Over weight';
    else return 'Obesity';
}
