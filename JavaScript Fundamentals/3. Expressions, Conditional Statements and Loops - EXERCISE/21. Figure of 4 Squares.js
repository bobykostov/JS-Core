function figure(n) {
    let m = n%2===0?n-1:n;
    let figure = '';
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= 2*n-1; j++) {
            let char = '';
            if (i === 1 || i === m || i === Math.ceil(m/2))
            {
                if (j === 1 || j === 2*n-1 || j === Math.ceil((2*n-1)/2))
                {
                    char = j === 2*n-1 ? "+\n" : "+";
                }
                else
                {
                    char = "-";
                }
            }
            else
            {
                if (j === 1 || j === 2*n-1 || j === Math.ceil((2*n-1)/2))
                {
                    char = j === 2*n-1 ? "|\n" : "|";
                }
                else
                {
                    char = " ";
                }
            }
            figure += char;
        }
    }
    console.log(figure);
}