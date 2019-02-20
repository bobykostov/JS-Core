function find(str) {
    let regex = /\b_([A-Za-z0-9]+)\b/g;
    let extr = [], match;
    while (match = regex.exec(str)) {
        extr.push(match[1]);
    }
    console.log(extr.join(','));
}