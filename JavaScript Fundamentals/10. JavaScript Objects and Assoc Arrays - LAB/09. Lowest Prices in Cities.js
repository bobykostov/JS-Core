function lowest(arr) {
    let townProdPrice = new Map();

    for (let line of arr) {
        let [town, product, price] = line.split(' | ');

        if (!townProdPrice.has(product))
            townProdPrice.set(product, new Map());

        townProdPrice.get(product).set(town, Number(price));
    }

    for (let [key, value] of townProdPrice) {
        let sortedTowns = Array.from(value.keys())
            .sort((k1, k2) => {
                return value.get(k1) - value.get(k2)
            });

        console.log(`${key} -> ${value.get(sortedTowns[0])} (${sortedTowns[0]})`);
    }
}