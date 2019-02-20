function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(formatCurrency) {

    function formatter(value) {

        return formatCurrency(',', '$', true, value);

    }

    return formatter;
}

let dollarFormatter = getDollarFormatter(formatCurrency);
let result = dollarFormatter(5345);

console.log(result);