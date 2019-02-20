function count(inputLines) {
    let text = inputLines.join('\n');
    let words = text.split(/[^\w_]+/)
        .filter(w => w !== '');
    let wordsCount = {};
    for (let w of words) {
        wordsCount[w] ? wordsCount[w]++ : wordsCount[w] = 1;
    }
    console.log(JSON.stringify(wordsCount));
}