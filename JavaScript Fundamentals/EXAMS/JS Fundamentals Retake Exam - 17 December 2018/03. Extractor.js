function extractor(str) {
    let charCount = Number(/^\d+/.exec(str)[0]);
    str = str.replace(/^\d+/, '').substr(0, charCount);
    let splitChar = /.$/.exec(str)[0];
    str = str.replace(/.$/, '');

    let [regStr, newStr] = str.split(splitChar);

    let reg = new RegExp(`[${regStr}]`, 'g');
    newStr = newStr.split(reg).join('');
    while (newStr.includes('#'))
    {
        newStr = newStr.replace('#', ' ');
    }

    console.log(newStr);
}