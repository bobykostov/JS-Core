function city(sales) {
    let townsWithProducts = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome)
            income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }

    for (let [town] of townsWithProducts) {
        console.log(`Town - ${town}`);

        for (let [product, income] of townsWithProducts.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}