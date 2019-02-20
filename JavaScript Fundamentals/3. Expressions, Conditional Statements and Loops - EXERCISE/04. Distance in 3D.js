function dist3d(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let z1 = arr[2];
    let x2 = arr[3];
    let y2 = arr[4];
    let z2 = arr[5];

    let xDiff = Math.abs(x1-x2);
    let yDiff = Math.abs(y1-y2);
    let zDiff = Math.abs(z1-z2);

    console.log(Math.sqrt(xDiff**2 + yDiff**2 + zDiff**2));
}