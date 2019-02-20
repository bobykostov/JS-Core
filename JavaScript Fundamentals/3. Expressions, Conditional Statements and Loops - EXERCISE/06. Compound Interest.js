function compInt(arr) {
    let P = arr[0];
    let i = arr[1]/100;
    let n = 12/arr[2];
    let t = arr[3];

    let F = P*((1 + (i/n))**(n*t));

    console.log(F.toFixed(2));
}