function firLas(arr) {
    let howmany = arr.shift();
    console.log(arr.slice(0, howmany).join(' '));
    console.log(arr.slice(arr.length - howmany, arr.length).join(' '));
}