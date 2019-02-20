function numstr(unparsed) {
    let num = Number(unparsed);
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += i.toString();
    }
    console.log(str);
}