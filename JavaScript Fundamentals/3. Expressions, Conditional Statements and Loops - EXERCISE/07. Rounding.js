function round(arr) {
    let num = arr[0];
    let precision = arr[1] > 15 ? 15 : arr[1];

    console.log(num.toFixed(precision).replace(/[0]+$/, ' '));
}