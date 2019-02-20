function area(w, h, W, H) {
    let first = W*H;
    let second = h*w;
    let overlap = Math.min(H,h)*Math.min(W,w);
    console.log((first + second - overlap));
}