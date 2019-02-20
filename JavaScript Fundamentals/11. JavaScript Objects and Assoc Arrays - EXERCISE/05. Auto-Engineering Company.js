function auto(arr) {
    let register = new Map();

    for (let line of arr) {
        let [brand, model, produced] = line.split(' | ');

        if (!register.has(brand))
        {
            register.set(brand, new Map());
            register.get(brand).set(model, Number(produced));
        }
        else if (!register.get(brand).has(model))
        {
            register.get(brand).set(model, Number(produced));
        }
        else
        {
            register.get(brand).set(model,
                register.get(brand).get(model) + Number(produced));
        }
    }

    for (let [brand] of register) {
        console.log(brand);
        for (let [model, produced] of register.get(brand)) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}