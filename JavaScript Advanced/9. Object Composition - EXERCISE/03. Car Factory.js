function factory(carObj) {
    let newCar = {};
    newCar.model = carObj.model;

    let engine = {};
    if (carObj.power <= 90) {
        engine = { power: 90, volume: 1800 };
    }
    else if (carObj.power <= 120) {
        engine = { power: 120, volume: 2400 };
    }
    else if (carObj.power <= 200) {
        engine = { power: 200, volume: 3500 };
    }
    newCar.engine = engine;

    newCar.carriage = {
        type: carObj.carriage,
        color: carObj.color
    };

    let w = carObj.wheelsize;
    if (carObj.wheelsize % 2 == 0) {
        w -= 1;
    }
    newCar.wheels = [w, w, w, w];

    return newCar;
}