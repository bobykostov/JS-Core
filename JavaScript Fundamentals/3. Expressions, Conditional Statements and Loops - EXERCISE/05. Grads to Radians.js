function grToDegs(grads) {
    grads = grads % 400;
    let degs = grads*0.9;

    console.log(degs < 0 ? 360 + degs : degs);
}