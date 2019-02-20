function game(objs, fighting) {
    let kingdoms = {};

    for (let obj of objs) {
        let kd = obj.kingdom;
        let gen = obj.general;
        let arm = obj.army;

        if (!kingdoms.hasOwnProperty(kd)) {
            kingdoms[kd] = {};
            kingdoms[kd][gen] = {
                army: arm,
                win: 0,
                loss: 0
            };
        } else if (!kingdoms[kd].hasOwnProperty(gen)) {
            kingdoms[kd][gen] = {
                army: arm,
                win: 0,
                loss: 0
            };
        } else if (kingdoms[kd].hasOwnProperty(gen)) {
            kingdoms[kd][gen].army += arm;
        }
    }

    for (let line of fighting) {
        let attKd = line[0];
        let attGen = line[1];
        let defKd = line[2];
        let defGen = line[3];

        if (attKd !== defKd) {
            if (kingdoms[attKd][attGen].army > kingdoms[defKd][defGen].army) {
                kingdoms[attKd][attGen].army = Math
                .floor(kingdoms[attKd][attGen].army*1.1);
                kingdoms[attKd][attGen].win++;

                kingdoms[defKd][defGen].army = Math
                .floor(kingdoms[defKd][defGen].army*0.9);
                kingdoms[defKd][defGen].loss++;
            } else if (kingdoms[attKd][attGen].army < kingdoms[defKd][defGen].army) {
                kingdoms[attKd][attGen].army = Math
                .floor(kingdoms[attKd][attGen].army*0.9);
                kingdoms[attKd][attGen].loss++;

                kingdoms[defKd][defGen].army = Math
                .floor(kingdoms[defKd][defGen].army*1.1);
                kingdoms[defKd][defGen].win++;
            }
        }
    }

    let winner = Object.keys(kingdoms).sort((k1, k2) => {
        let totalWins1 = 0;
        let totalLosses1 = 0;
        Object.keys(kingdoms[k1]).forEach(g => {
            totalWins1 += kingdoms[k1][g].win;
            totalLosses1 += kingdoms[k1][g].loss;
        });

        let totalWins2 = 0;
        let totalLosses2 = 0;
        Object.keys(kingdoms[k2]).forEach(g => {
            totalWins2 += kingdoms[k2][g].win;
            totalLosses2 += kingdoms[k2][g].loss;
        });

        if (totalWins2 > totalWins1) {
            return 1;
        } else if (totalWins2 < totalWins1) {
            return -1;
        }

        if (totalLosses1 > totalLosses2) {
            return 1;
        } else if (totalLosses1 < totalLosses2) {
            return -1;
        }

        return k1.localeCompare(k2);
    })[0];

    console.log(`Winner: ${winner}`);
    let sortedGens = Object.keys(kingdoms[winner])
    .sort((a, b) => kingdoms[winner][b].army - kingdoms[winner][a].army);
    for (let gen of sortedGens) {
        console.log(`/\\general: ${gen}`);
        console.log(`---army: ${kingdoms[winner][gen].army}`);
        console.log(`---wins: ${kingdoms[winner][gen].win}`);
        console.log(`---losses: ${kingdoms[winner][gen].loss}`);
    }
}