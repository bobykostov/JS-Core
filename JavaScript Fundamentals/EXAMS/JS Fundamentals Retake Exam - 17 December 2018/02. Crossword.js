function crossword(arr) {
    let chars = [];

    for (let line of arr) {
        if (line[0] === 'get') {
            let num = line[1];
            let word = line[2];

            chars.push(word[num - 1]);
        }
        else {
            let [comm, secComm, num, word] = line;

            if (comm === 'filter') {
                let selected = word.split('').filter(a => {
                    if (secComm === 'UPPERCASE')
                        return a !== '0' && a === a.toUpperCase() && !Number(a);
                    if (secComm === 'LOWERCASE')
                        return a !== '0' && a === a.toLowerCase() && !Number(a);
                    if (secComm === 'NUMS')
                        return Number(a);
                });
                chars.push(selected[num - 1]);
            }

            if (comm === 'sort') {
                let wordChars = word.split('').sort((a, b) => {
                    if (secComm === 'A')
                        return a.localeCompare(b);
                    if (secComm === 'Z')
                        return b.localeCompare(a);
                });
                chars.push(wordChars[num - 1]);
            }

            if (comm === 'rotate') {
                let wordChars = word.split('');
                for (let i = 0; i < secComm; i++) {
                    let last = wordChars.pop();
                    wordChars.unshift(last);
                }
                chars.push(wordChars[num - 1])
            }
        }
    }

    console.log(chars.join(''));
}