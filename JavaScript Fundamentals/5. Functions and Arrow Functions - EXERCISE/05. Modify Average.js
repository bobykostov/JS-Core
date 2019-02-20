function modify(num) {
    let number = num.toString();

    while (getAvg(number) <= 5)
    {
        number += '9';
    }

    console.log(number);

    function getAvg(number) {
        let sum = 0;

        for (let digit of number) {
            sum += Number(digit);
        }

        return sum/number.length;
    }
}