function distance(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let t = arr[2]/3600;

    let dist1 = v1*t;
    let dist2 = v2*t;
    let delta = Math.abs(dist1-dist2);

    console.log(delta*1000);
}