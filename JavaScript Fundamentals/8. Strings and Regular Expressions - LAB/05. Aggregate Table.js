function agg(arr) {
    let sum = 0;
    let list = [];
    for (let element of arr) {
        let townData = element.split('|');
        list.push(townData[1].trim());
        sum += Number(townData[2].trim());
    }
    console.log(list.join(', ') + '\n' + sum);
}