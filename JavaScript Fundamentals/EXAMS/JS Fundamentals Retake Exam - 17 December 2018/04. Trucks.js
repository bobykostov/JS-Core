function trucks(arr) {
    let trucks = {};
    let backupTires = [];

    for (let line of arr) {
        if (line[0] === 'NEWTRUCK')
        {
            let plateNum = line[1];
            let tires = line[2];

            if (!trucks.hasOwnProperty(plateNum))
            {
                trucks[plateNum] = {
                    tires: tires,
                    totalDistance: 0,
                    tiresChanged: false
                };
            }
        }
        else if (line[0] === 'NEWTIRES')
        {
            backupTires.push(line[1]);
        }
        else if (line[0] === 'WORK')
        {
            let plateNum = line[1];
            let km = line[2];

            if (trucks.hasOwnProperty(plateNum))
            {
                let tireQualityNeeded = km/1000;
                let tiresFine = checkTires(plateNum, tireQualityNeeded, trucks);

                if (!tiresFine && !trucks[plateNum].tiresChanged && backupTires.length > 0)
                {
                    trucks[plateNum].tires = backupTires.shift();
                    tiresFine = checkTires(plateNum, tireQualityNeeded, trucks);
                }

                if (tiresFine)
                {
                    trucks[plateNum].tires = trucks[plateNum].tires
                        .map(t => t-tireQualityNeeded);
                    trucks[plateNum].totalDistance += km;
                }
            }
        }
    }

    for (let truck in trucks)
    {
        console.log(`Truck ${truck} has traveled ${trucks[truck].totalDistance}.`);
    }
    console.log(`You have ${backupTires.length} sets of tires left.`);

    function checkTires(plateNum, tireQualityNeeded, trucks) {
        for (let tire of trucks[plateNum].tires) {
            if (tire < tireQualityNeeded)
                return false;
        }
        return true;
    }
}