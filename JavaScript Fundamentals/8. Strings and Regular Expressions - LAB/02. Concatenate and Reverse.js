function conRev(arr) {
    let joined = arr.join('');
    let charArray = Array.from(joined);
    let reversed = charArray.reverse();
    console.log(reversed.join(''));
}