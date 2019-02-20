function match(str) {
    let words = str.match(/\w+/g);
    console.log(words.join('|'));
}