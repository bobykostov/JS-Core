function oddEven(num) {
    if (num === Math.round(num))
    {
        if (num % 2 === 0)
        {
            console.log("even");
        }
        else if (num % 2 !== 0)
        {
            console.log("odd");
        }
    }
    else
    {
        console.log("invalid");
    }
}