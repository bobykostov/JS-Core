function argInfo() {
    let argTypes = {};

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        let type = typeof arg;

        if (!argTypes.hasOwnProperty(type)) {
            argTypes[type] = 1;
        } else
        {
            argTypes[type]++;
        }

        console.log(`${type}: ${arg}`);
    }

    Object.keys(argTypes)
    .sort((a, b) => argTypes[b]-argTypes[a])
    .forEach(f => console.log(`${f} = ${argTypes[f]}`))
}