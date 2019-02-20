function lastK(n, k) {
    let seq = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i-k);
        let sum = seq.slice(start, i).reduce((a, b) => a + b);
        seq[i] = sum;
    }
    console.log(seq.join(' '));
}