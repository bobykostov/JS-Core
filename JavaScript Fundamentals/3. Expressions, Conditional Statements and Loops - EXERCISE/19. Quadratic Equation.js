function quad(a,b,c) {
    let d = (b**2) - (4*a*c);

    if (d < 0)
    {
        console.log("No");
    }
    else if (d === 0)
    {
        let x = -b / (2*a);
        console.log(x);
    }
    else
    {
        let x2 = (-b + Math.sqrt(d)) / (2*a);
        let x1 = (-b - Math.sqrt(d)) / (2*a);
        console.log(x1);
        console.log(x2);
    }
}