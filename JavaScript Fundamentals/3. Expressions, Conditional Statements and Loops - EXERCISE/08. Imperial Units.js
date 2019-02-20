function imperial(inches) {
    let feet = Math.floor(inches/12);
    inches = inches - (12*feet);

    console.log(feet + "\'-" + inches + "\"");
}