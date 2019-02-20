function heroic(arr) {
    let heroes = [];
    for (let line of arr) {
        let args = line.split(' / ');
        let name = args[0];
        let level = args[1];
        let itemList = args[2];
        let items = [];
        if (args.length > 2)
            items = itemList.split(', ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));
}