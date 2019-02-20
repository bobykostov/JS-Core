function cooking(arr) {
    let num = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let op = arr[i];

        switch (op)
        {
            case "chop": num/=2; break;
            case "dice": num=Math.sqrt(num); break;
            case "spice": ++num; break;
            case "bake": num*=3; break;
            case "fillet": num*=0.8; break;
        }

        console.log(num.toFixed(1).replace(".0", ""));
    }
}