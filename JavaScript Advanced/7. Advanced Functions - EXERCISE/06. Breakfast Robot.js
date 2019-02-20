function result() {
    let ingredients = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    };

    function checkIngr(ingr, needed, q) {
        for (let i = 0; i < ingr.length; i++) {
            if (ingredients[ingr[i]] < needed[i]*q) {
                return ingr[i];
            }
        }
        return '';
    }

    function takeIngr(ingr, needed, q) {
        for (let i = 0; i < ingr.length; i++) {
            ingredients[ingr[i]] -= needed[i]*q;
        }
    }

    function restock(str) {
        let [com, microEl, quantity] = str.split(' ');

        ingredients[microEl] += Number(quantity);
        return "Success";
    }

    function prepare(str) {
        let [com, recipe, quant] = str.split(' ');
        let missing = '';
        let ingr = [];
        let needed = [];

        if (recipe === "apple") {
            ingr = ['carbohydrate', 'flavour'];
            needed = [1, 2];
            missing = checkIngr(ingr, needed, quant);

            if (missing === '')
                takeIngr(ingr, needed, quant);
        } else if (recipe === "coke") {
            ingr = ['carbohydrate', 'flavour'];
            needed = [10, 20];
            missing = checkIngr(ingr, needed, quant);

            if (missing === '')
                takeIngr(ingr, needed, quant);
        } else if (recipe === "burger") {
            ingr = ['carbohydrate', 'fat', 'flavour'];
            needed = [5, 7, 3];
            missing = checkIngr(ingr, needed, quant);

            if (missing === '')
                takeIngr(ingr, needed, quant);
        } else if (recipe === "omelet") {
            ingr = ['protein', 'fat', 'flavour'];
            needed = [5, 1, 1];
            missing = checkIngr(ingr, needed, quant);

            if (missing === '')
                takeIngr(ingr, needed, quant);
        } else if (recipe === "cheverme") {
            ingr = ['protein', 'carbohydrate', 'fat', 'flavour'];
            needed = [10, 10, 10, 10];
            missing = checkIngr(ingr, needed, quant);

            if (missing === '')
                takeIngr(ingr, needed, quant);
        }

        if (missing !== '') {
            return `Error: not enough ${missing} in stock`;
        }
        return "Success";
    }

    function report() {
        let rep = `protein=${ingredients.protein} `;
        rep += `carbohydrate=${ingredients.carbohydrate} `;
        rep += `fat=${ingredients.fat} `;
        rep += `flavour=${ingredients.flavour}`;
        return rep;
    }

    return function (str) {
        if (str.includes("restock"))
            return restock(str);
        else if (str.includes("prepare"))
            return prepare(str);
        else if (str === "report")
            return report();
    };
}