function trip(arr) {
    let x1 = arr[0], x2 = arr[2], x3 = arr[4];
    let y1 = arr[1], y2 = arr[3], y3 = arr[5];

    let dist12 = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
    let dist23 = Math.sqrt((x2 - x3)**2 + (y2 - y3)**2);
    let dist31 = Math.sqrt((x3 - x1)**2 + (y3 - y1)**2);

    if (dist12 <= dist31 && dist23 <= dist31)
    {
        console.log("1->2->3: " + (dist12 + dist23));
    }
    else if (dist12 <= dist23 && dist31 <= dist23)
    {
        console.log("2->1->3: " + (dist12 + dist31));
    }
    else if (dist23 <= dist12 && dist31 <= dist12)
    {
        console.log("1->3->2: " + (dist23 + dist31));
    }
}