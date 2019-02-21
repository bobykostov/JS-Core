function tickets(arr, sortBy) {
    class Ticket {
        constructor(dest, price, status) {
            this.destination = dest;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticketsArr = [];
    for (let t of arr) {
        let [dest, price, status] = t.split('|');
        let tick = new Ticket(dest, price, status);
        ticketsArr.push(tick);
    }

    if (sortBy === 'price') {
        return ticketsArr.sort((f,s) => f[sortBy] - s[sortBy]);
    } else {
        return ticketsArr.sort((f,s) => f[sortBy].localeCompare(s[sortBy]));
    }
}