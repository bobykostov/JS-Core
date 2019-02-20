function aggregate(arr) {
    function aggregate(elems, initVal, func) {
        let val = initVal;
        for (let i = 0; i < elems.length; i++) {
            val = func(val, elems[i]);
        }
        console.log(val);
    }

    aggregate(arr, 0, (a,b) => a + b);
    aggregate(arr, 0, (a,b) => a + (1 / b));
    aggregate(arr, '', (a,b) => a + b);
}