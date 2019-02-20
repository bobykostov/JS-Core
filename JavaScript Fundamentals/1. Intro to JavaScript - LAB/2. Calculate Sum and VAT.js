function sumvat(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let vat = sum*0.2;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);
}