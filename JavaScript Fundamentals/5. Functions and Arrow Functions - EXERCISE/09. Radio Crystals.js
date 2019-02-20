function radio(arr) {
    let targThick = arr[0];

    function op(chunk, operation) {
        switch (operation)
        {
            case "cut": chunk/=4; break;
            case "lap": chunk*=0.8; break;
            case "grind": chunk-=20; break;
            case "etch": chunk-=2; break;
            case "x-ray": ++chunk; return chunk;
        }

        return transport(chunk);
    }

    function transport(chunk) {
        return Math.floor(chunk);
    }

    for (let i = 1; i < arr.length; i++) {
        let chunk = arr[i];
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xrayCount = 0;

        console.log(`Processing chunk ${chunk} microns`);

        while (chunk / 4 >= targThick - 1)
        {
            chunk = op(chunk, "cut");
            ++cutCount;
        }
        if (cutCount > 0)
        {
            console.log("Cut x" + cutCount);
            console.log("Transporting and washing");
        }
        while (chunk * 0.8 >= targThick - 1)
        {
            chunk = op(chunk, "lap");
            ++lapCount;
        }
        if (lapCount > 0)
        {
            console.log("Lap x" + lapCount);
            console.log("Transporting and washing");
        }
        while (chunk - 20 >= targThick - 1)
        {
            chunk = op(chunk, "grind");
            ++grindCount;
        }
        if (grindCount > 0)
        {
            console.log("Grind x" + grindCount);
            console.log("Transporting and washing");
        }
        while (chunk - 2 >= targThick - 1)
        {
            chunk = op(chunk, "etch");
            ++etchCount;
        }
        if (etchCount > 0)
        {
            console.log("Etch x" + etchCount);
            console.log("Transporting and washing");
        }
        if (chunk === targThick - 1)
        {
            chunk = op(chunk, "x-ray");
            ++xrayCount;
        }
        if (xrayCount > 0)
        {
            console.log("X-ray x" + xrayCount);
        }

        console.log(`Finished crystal ${chunk} microns`);
    }
}