function stadium(arr) {
    let seats = Number(arr[0]);

    let levAprice = 10;
    let vipAprice = 25;
    let levBprice = 7;
    let vipBprice = 15;
    let levCprice = 5;
    let vipCprice = 10;

    let spotsTaken = [];
    let fans = 0;
    let totalMoney = 0;

    for (let fan of arr.slice(1)) {
        let [zone, spot, sector] = fan.split('*');
        let seat = zone + '-' + sector + spot;

        if (!spotsTaken.includes(seat))
        {
            fans++;
            spotsTaken.push(seat);

            if (zone === 'LEVSKI' || zone === 'LITEX')
            {
                switch (sector)
                {
                    case 'A': totalMoney += levAprice; break;
                    case 'B': totalMoney += levBprice; break;
                    case 'C': totalMoney += levCprice; break;
                }
            }
            else if (zone === 'VIP')
            {
                switch (sector)
                {
                    case 'A': totalMoney += vipAprice; break;
                    case 'B': totalMoney += vipBprice; break;
                    case 'C': totalMoney += vipCprice; break;
                }
            }
        }
        else
        {
            console.log(`Seat ${spot} in zone ${zone} sector ${sector} is unavailable`);
        }
    }

    console.log(`${totalMoney} lv.`);
    console.log(`${fans} fans`);
}