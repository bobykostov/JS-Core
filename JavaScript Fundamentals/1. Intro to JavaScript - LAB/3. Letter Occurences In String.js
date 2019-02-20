function occur(word, letter) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i])
        {
            counter++;
        }
    }
    console.log(counter);
}