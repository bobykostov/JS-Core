function triangleArea(a,b,c) {
    let sp = (a+b+c)/2;
    console.log(Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c)));
}