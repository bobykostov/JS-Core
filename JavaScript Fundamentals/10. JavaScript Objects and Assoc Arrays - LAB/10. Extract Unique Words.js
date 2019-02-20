function extract(inputSentences) {
    let wordPattern = /\b[\w]+\b/g;
    let words = new Set();
    for (let sentence of inputSentences) {
        let matches = sentence.match(wordPattern);
        matches.forEach(x => words.add(x.toLowerCase()));
    }
    console.log([...words.values()].join(', '));
}