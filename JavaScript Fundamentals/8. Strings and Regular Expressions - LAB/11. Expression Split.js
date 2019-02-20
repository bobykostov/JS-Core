function expSpl(expression) {
    let elements = expression.split(/[\s.();,]+/g);
    console.log(elements.join('\n'));
}