function filter(minAge, nameFirst, ageFirst, nameSec, ageSec) {
    let first = {};
    first.name = nameFirst;
    first.age = ageFirst;
    let second = {};
    second.name = nameSec;
    second.age = ageSec;

    if (first.age >= minAge)
    {
        console.log(first);
    }
    if (second.age >= minAge)
    {
        console.log(second);
    }
}