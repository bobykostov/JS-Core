function rotate(arr) {
    let n = Number(arr.pop());
    for (let i = 0; i < n%arr.length; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}