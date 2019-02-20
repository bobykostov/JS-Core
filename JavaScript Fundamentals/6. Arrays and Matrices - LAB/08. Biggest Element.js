function biggest(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    arr.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)
        )
    );
    console.log(biggestNum);
}