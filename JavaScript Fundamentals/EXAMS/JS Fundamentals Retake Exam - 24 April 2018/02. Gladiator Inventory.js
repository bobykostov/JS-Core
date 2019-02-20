function gladInven(arr) {
    let inventory = arr[0].split(' ');

    let i = 0;
    while (arr[++i] !== 'Fight!')
    {
        let [command, item] = arr[i].split(' ');

        if (command === 'Buy' && !inventory.includes(item))
        {
            inventory.push(arr[i].slice(arr[i].indexOf(' ')).trim())
        }
        else if (command === 'Trash' && inventory.includes(item))
        {
            inventory.splice(inventory.indexOf(item),1);
        }
        else if (command === 'Repair' && inventory.includes(item))
        {
            let toMove = inventory.splice(inventory.indexOf(item),1).join('');
            inventory.push(toMove);
        }
        else if (command === 'Upgrade')
        {
            let [itm, upgrade] = item.split('-');

            if (inventory.includes(itm))
            {
                inventory.splice(inventory.indexOf(itm)+1, 0, itm + ":" + upgrade);
            }
        }
    }

    console.log(inventory.join(' '));
}