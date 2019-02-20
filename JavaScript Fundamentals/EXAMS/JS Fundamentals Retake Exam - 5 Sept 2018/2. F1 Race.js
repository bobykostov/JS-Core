function race(arr) {
    let pilots = arr[0].split(' ');

    for (let line of arr.slice(1)) {
        let [action, pilot] = line.split(' ');

        switch (action)
        {
            case 'Join':
                if (!pilots.includes(pilot))
                {
                    pilots.push(pilot);
                }
                break;
            case 'Crash':
                if (pilots.includes(pilot))
                {
                    let index = pilots.indexOf(pilot);
                    pilots.splice(index,1);
                }
                break;
            case 'Pit':
                if (pilots.includes(pilot))
                {
                    let index1 = pilots.indexOf(pilot);
                    let toMove1 = pilots.splice(index1,1)[0];
                    pilots.splice(index1+1 > pilots.length-1 ? pilots.length-1 : index1+1, 0 ,toMove1);
                }
                break;
            case 'Overtake':
                if (pilots.includes(pilot))
                {
                    let index2 = pilots.indexOf(pilot);
                    let toMove2 = pilots.splice(index2,1)[0];
                    pilots.splice(index2-1 < 0 ? 0 : index2-1, 0 ,toMove2);
                }
                break;
        }
    }

    console.log(pilots.join(' ~ '));
}