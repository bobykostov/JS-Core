function arena(arr) {
    let gladiators = {};
    let gladSkill = {};

    for (let line of arr) {
        if (line.includes(' -> ')) {
            let [glad, tech, skill] = line.split(' -> ');

            if (!gladiators.hasOwnProperty(glad)) {
                gladiators[glad] = {};
                gladiators[glad][tech] = Number(skill);
                gladSkill[glad] = {};
            } else if (!gladiators[glad].hasOwnProperty(tech) ||
                gladiators[glad][tech] < Number(skill)) {
                gladiators[glad][tech] = Number(skill);
            }

            gladSkill[glad] = Object
            .values(gladiators[glad])
            .reduce((a, b) => a+b);
        } else if (line.includes(' vs ')) {
            let [glad1, glad2] = line.split(' vs ');

            if (gladiators.hasOwnProperty(glad1) &&
                gladiators.hasOwnProperty(glad2)) {
                for (let tech of Object.keys(gladiators[glad1])) {
                    if (gladiators[glad2].hasOwnProperty(tech)) {
                        if (gladSkill[glad1] > gladSkill[glad2]) {
                            delete gladiators[glad2];
                            delete gladSkill[glad2];
                        } else
                        {
                            delete gladiators[glad1];
                            delete gladSkill[glad1];
                        }

                        break;
                    }
                }
            }
        } else break;
    }

    let sortedGlads = Object.keys(gladiators)
    .sort(function (a, b) {
        if (gladSkill[b] - gladSkill[a] === 0) {
            return a.localeCompare(b);
        }

        return gladSkill[b] - gladSkill[a];
    });

    for (let glad of sortedGlads) {
        console.log(`${glad}: ${gladSkill[glad]} skill`);

        let sortedTechs = Object.keys(gladiators[glad])
        .sort(function(a, b) {
            if (gladiators[glad][b] - gladiators[glad][a] === 0) {
                return a.localeCompare(b);
            }

            return gladiators[glad][b] - gladiators[glad][a]
        });

        for (let tech of sortedTechs) {
            console.log(`- ${tech} <!> ${gladiators[glad][tech]}`);
        }
    }
}