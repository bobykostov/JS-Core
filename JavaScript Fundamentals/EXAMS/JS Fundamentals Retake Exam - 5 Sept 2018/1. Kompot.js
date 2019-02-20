function kompot(arr) {
    let peaches = 0, plums = 0
    let cherries = 0, others = 0;

    for (let line of arr) {
        let [fruit, weight] = line.split(/\s+/);

        switch (fruit) {
            case 'peach':
                peaches += Number(weight);
                break;
            case 'plum':
                plums += Number(weight);
                break;
            case 'cherry':
                cherries += Number(weight);
                break;
            default:
                others += Number(weight);
                break;
        }
    }

    let peachKom = Math.floor(((peaches*1000)/140)/2.5);
    let plumKom = Math.floor(((plums*1000)/20)/10);
    let cherryKom = Math.floor(((cherries*1000)/9)/25);
    let rakiya = others*0.200;

    console.log(`Cherry kompots: ${cherryKom}`);
    console.log(`Peach kompots: ${peachKom}`);
    console.log(`Plum kompots: ${plumKom}`);
    console.log(`Rakiya liters: ${rakiya.toFixed(2)}`);
}