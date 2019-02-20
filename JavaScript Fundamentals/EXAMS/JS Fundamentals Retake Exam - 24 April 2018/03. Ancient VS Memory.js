function aVm(arr) {
    let full = arr.join(' ').split(' ').filter(x => x !== '0');
    let byWord = full.join(' ').split('32656 19759 32763 ').filter(x => x !== '').map(x => x.trim());

    let codedWords = [];

    for (let word of byWord) {
        let byLetter = word.split(' ');
        let converted = [];
        for (let i = 1; i < byLetter.length; i++) {
            converted.push(String.fromCharCode(Number(byLetter[i])));
        }
        codedWords.push(converted.join(''));
    }

    console.log(codedWords.join('\n'));
}