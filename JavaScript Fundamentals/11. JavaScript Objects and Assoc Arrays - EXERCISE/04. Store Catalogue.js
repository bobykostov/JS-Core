function catalog(arr) {
    let catalog = new Map();

    for (let line of arr) {
        let [product, price] = line.split(' : ');

        catalog.set(product, price);
    }

    let keys = Array.from(catalog.keys()).sort();
    let initials = [];
    for (let key of keys) {
        if (!initials.includes(key.charAt(0)))
            initials.push(key.charAt(0));
    }

    for (let key of keys) {
        if (initials.includes(key.charAt(0)))
        {
            console.log(key.charAt(0));
            initials.shift();
        }
        console.log(`${key}: ${catalog.get(key)}`);
    }
}