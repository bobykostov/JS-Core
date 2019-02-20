function extract(str) {
    let result = [];
    let startIndex = str.indexOf('(');
    let endIndex = str.indexOf(')', startIndex);
    while (startIndex > -1 && endIndex > -1)
    {
        let snippet = str.substring(startIndex+1, endIndex);
        result.push(snippet);
        startIndex = str.indexOf('(', endIndex);
        endIndex = str.indexOf(')', startIndex);
    }
    console.log(result.join(', '));
}