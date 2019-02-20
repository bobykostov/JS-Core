function validity(arr) {
    let x1 = arr[0], x2 = arr[2];
    let y1 = arr[1], y2 = arr[3];

    function distance(X1, Y1, X2, Y2) {
        let distX = X1 - X2;
        let distY = Y1 - Y2;

        return Math.sqrt(distX**2 + distY**2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0)))
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0)))
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2)))
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}