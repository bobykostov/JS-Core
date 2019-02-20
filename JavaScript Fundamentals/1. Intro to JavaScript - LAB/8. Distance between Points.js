function distance(x1, y1, x2, y2) {
    let fir = {};
    let sec = {};
    fir.x = x1;
    fir.y = y1;
    sec.x = x2;
    sec.y = y2;

    let xDiff = Math.max(fir.x, sec.x) - Math.min(fir.x, sec.x);
    let yDiff = Math.max(fir.y, sec.y) - Math.min(fir.y, sec.y);

    let dist = Math.sqrt((xDiff*xDiff) + (yDiff*yDiff));

    console.log(dist);
}