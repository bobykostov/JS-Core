function triangle(n) {
    function print(count) {
        console.log("*".repeat(count));
    }
    for (let i = 1; i <= n; i++) print(i);
    for (let i = n-1; i > 0; i--) print(i);
}