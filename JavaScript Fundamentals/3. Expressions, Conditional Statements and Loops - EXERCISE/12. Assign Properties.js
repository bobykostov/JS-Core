function assign(arr) {
    let prop1 = arr[0];
    let prop2 = arr[2];
    let prop3 = arr[4];
    let name = arr[1];
    let age = arr[3];
    let gender = arr[5];

    let person = {};
    person[prop1] = name;
    person[prop2] = age;
    person[prop3] = gender;

    console.log(person);
}