function juice(arr) {
    let juiceQuant = {};
    let final = new Map();

    for (let line of arr) {
        let [fruit, quantity] = line.split(' => ');

        if (juiceQuant[fruit] === undefined)
            juiceQuant[fruit] = Number(quantity);
        else
            juiceQuant[fruit] += Number(quantity);

        if (juiceQuant[fruit] >= 1000)
        {
            if (!final.has(fruit))
                final.set(fruit, Math.floor(juiceQuant[fruit]/1000));
            else
                final.set(fruit, final.get(fruit) + Math.floor(juiceQuant[fruit]/1000));

            juiceQuant[fruit] -= final.get(fruit)*1000;
        }
    }

    for (let [fruit, bottles] of final) {
        console.log(`${fruit} => ${bottles}`);
    }
}