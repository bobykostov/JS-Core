function count(search, text) {
    let count = 0;
    let index = text.indexOf(search);
    while (index > -1)
    {
        count++;
        index = text.indexOf(search, index+1);
    }
    console.log(count);
}