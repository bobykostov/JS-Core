function print(arr) {
    let toprint = arr.slice(0, arr.length-1);
    console.log(toprint.join(arr[arr.length - 1]));
}