function result() {
    let menu = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    let stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    function restock(ingr, q) {
        stock[ingr] += q;
        return 'Success';
    }

    function prepare(item, q) {
        let ingrs = Object.keys(menu[item]);

        for (let ingr of ingrs) {
            if (stock[ingr] < menu[item][ingr] * q) {
                return `Error: not enough ${ingr} in stock`;
            }
        }

        for (let ingr of ingrs) {
            stock[ingr] -= menu[item][ingr] * q;
        }

        return 'Success';
    }

    function report() {
        let rep = Object.keys(stock)
            .map(i => `${i}=${stock[i]}`).join(' ');
        return rep;
    }

    return function command(line) {
        let [com, item, quantity] = line.split(' ');
        quantity = Number(quantity);

        switch (com) {
            case 'restock':
                return restock(item, quantity);
            case 'prepare':
                return prepare(item, quantity);
            case 'report':
                return report();
        }
    };
}