function bmi(name, age, weight, height) {
    let bmiCalc = weight/((height/100)**2);
    let rec = "admission required";

    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(bmiCalc)
    }

    if (bmiCalc < 18.5) {
        obj.status = 'underweight';
    } else if (bmiCalc < 25) {
        obj.status = 'normal';
    } else if (bmiCalc < 30) {
        obj.status = 'overweight';
    } else {
        obj.status = 'obese';
        obj.recommendation = rec;
    }

    return obj;
}