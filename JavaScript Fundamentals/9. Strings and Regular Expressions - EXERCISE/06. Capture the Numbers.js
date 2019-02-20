function capture(arr) {
    let regex = /[\d]+/g;
    let extr = [], match;
    for (let line of arr) {
        while (match = regex.exec(line))
        {
            extr.push(match);
        }
    }
    console.log(extr.join(' '));
}