function capitalize(str) {
    let sep = str.split(' ');
    let cap = [];
    for (let s of sep) {
        cap.push(s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
    }
    console.log(cap.join(' '));
}