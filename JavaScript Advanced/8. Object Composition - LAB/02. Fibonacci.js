function getFibonator() {
    let f0 = 0, f1 = 0;

    return function () {
        if (f1 === 0)
        {
            ++f1;
            return f1;
        }

        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
        return f1;
    };
}