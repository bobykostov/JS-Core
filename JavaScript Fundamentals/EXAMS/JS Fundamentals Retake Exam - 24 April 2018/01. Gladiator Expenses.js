function expenses(lostFights, helmetPr, swordPr, shieldPr, armorPr) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0)
            ++helmetCount;
        if (i % 3 === 0)
            ++swordCount;
        if (i % 6 === 0)
            ++shieldCount;
        if (i % 12 === 0)
            ++armorCount;
    }

    let total = helmetCount * helmetPr + swordCount * swordPr + shieldCount * shieldPr + armorCount * armorPr;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}