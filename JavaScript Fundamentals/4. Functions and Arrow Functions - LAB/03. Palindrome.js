function palindrome(word) {
    function isPalin(w) {
        let rev = '';
        for (let i = w.length-1; i >= 0; i--) {
            rev += w[i];
        }
        if (w === rev) return true;
        else return false;
    }

    console.log(isPalin(word));
}