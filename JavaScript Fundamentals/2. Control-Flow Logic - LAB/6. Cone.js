function cone(radius,height) {
    let vol = (Math.PI*radius*radius*height)/3;
    let area = Math.PI*radius*(radius+Math.sqrt(radius*radius+height*height));

    console.log("volume = " + vol);
    console.log("area = " + area);
}