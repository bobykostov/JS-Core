function prime(num) {
    let count = 0;
    if (num <= 1)
    {
        console.log("false");
    }
    else
    {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) count++;
        }
        if (count === 0) console.log("true");
        else console.log("false");
    }
}