function functCalc(fir, sec, op) {
    let add = function (a, b) {
        return a + b;
    };
    let subt = function (a, b) {
        return a - b;
    };
    let mult = function (a, b) {
        return a * b;
    };
    let div = function (a, b) {
        return a / b;
    };

    switch (op)
    {
        case "+":
            console.log(add(fir, sec));break;
        case "-":
            console.log(subt(fir, sec));break;
        case "*":
            console.log(mult(fir, sec));break;
        case "/":
            console.log(div(fir, sec));break;
    }
}