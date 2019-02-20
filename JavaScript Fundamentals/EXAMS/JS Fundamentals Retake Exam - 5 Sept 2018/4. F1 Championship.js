function f1champ(arr) {
    let championship = {};

    for (let line of arr) {
        let [team, pilot, points] = line.split(' -> ');
        points = Number(points);

        if (!championship.hasOwnProperty(team)) {
            championship[team] = {};
            championship[team][pilot] = points;
        } else if (!championship[team].hasOwnProperty(pilot)) {
            championship[team][pilot] = points;
        } else
        {
            championship[team][pilot] += points;
        }
    }

    Object.keys(championship).forEach(team => {
        let total = 0;

        Object.keys(championship[team]).forEach(pilot => {
            total += championship[team][pilot]
        });

        championship[team].total = total;
    });

    let sortedTeams = Object.keys(championship)
    .sort((a, b) =>
        championship[b].total - championship[a].total);

    for (let team of sortedTeams.slice(0, 3)) {
        console.log(`${team}: ${championship[team].total}`);

        let sortedPilots = Object.keys(championship[team]).sort((a, b) => championship[team][b] - championship[team][a]);

        for (let pilot of sortedPilots) {
            if (pilot !== 'total') {
                console.log(`-- ${pilot} -> ${championship[team][pilot]}`);
            }
        }
    }
}