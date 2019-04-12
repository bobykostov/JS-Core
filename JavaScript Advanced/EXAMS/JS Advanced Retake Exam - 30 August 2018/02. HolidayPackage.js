let assert = require('chai').assert;



class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}



//#region

let holidayPackage = new HolidayPackage('Italy', 'Summer');

console.log(holidayPackage.showVacationers());

// should throw an error
try {
    holidayPackage.generateHolidayPackage();
} catch (err) {
    console.log('Error: ' + err.message);
}

// should throw an error
try {
    holidayPackage.addVacationer('');
} catch (err) {
    console.log('Error: ' + err.message);
}

// should throw an error
try {
    holidayPackage.addVacationer('Ivan');
} catch (err) {
    console.log('Error: ' + err.message);
}

holidayPackage.addVacationer('Ivan Ivanov');
holidayPackage.addVacationer('Petar Petrov');
holidayPackage.addVacationer('Georgi Georgiev');

console.log(holidayPackage.showVacationers());

// should throw an error
try {
    holidayPackage.insuranceIncluded = 'true';
} catch (err) {
    console.log('Error: ' + err.message);
}

holidayPackage.insuranceIncluded = true;

console.log(holidayPackage.generateHolidayPackage());

//#endregion



describe('HolidayPackage tests', () => {
    let package;
    beforeEach(() => {
        package = new HolidayPackage('Italy', 'Summer');
    });

    describe('insuranceIncluded', () => {
        it('default value', () => {
            assert.equal(package.insuranceIncluded, false);
        });

        it('throw error at non-boolean value', () => {
            assert.throws(() => package.insuranceIncluded = 'true',
            /Insurance status must be a boolean/);
        });

        it('set valid boolean', () => {
            package.insuranceIncluded = true;
            assert.equal(package.insuranceIncluded, true);
        });
    });

    describe('showVacationers', () => {
        it('throw on empty vacationers list', () => {
            assert.equal(package.showVacationers(), 
            'No vacationers are added yet');
        });

        it('return vacationers', () => {
            package.addVacationer('Ivan Petrov');
            package.addVacationer('Sasho Sashev');
            package.addVacationer('Pesho Ivanov');
            let vacs = package.showVacationers();
            assert.equal(vacs, 'Vacationers:\n' +
            'Ivan Petrov\nSasho Sashev\nPesho Ivanov');
        });
    });

    describe('addVacationers', () => {
        it('throw on nothing', () => {
            assert.throws(() => package.addVacationer(),
            /Vacationer name must be a non-empty string/);
        });

        it('throw on non-string', () => {
            assert.throws(() => package.addVacationer(1234),
            /Vacationer name must be a non-empty string/);
        });

        it('throw on whitespace string', () => {
            assert.throws(() => package.addVacationer(' '),
            /Vacationer name must be a non-empty string/);
        });

        it('throw on empty string', () => {
            assert.throws(() => package.addVacationer(''),
            /Name must consist of first name and last name/);
        });

        it('throw on invalid name length 1', () => {
            assert.throws(() => package.addVacationer('Burr Furr Durr'),
            /Name must consist of first name and last name/);
        });

        it('throw on invalid name length 2', () => {
            assert.throws(() => package.addVacationer('Ivan'),
            /Name must consist of first name and last name/);
        });
    });

    describe('generateHolidayPackage', () => {
        it('throw on empty vacationers list', () => {
            assert.throws(() => package.generateHolidayPackage(),
            /There must be at least 1 vacationer added/);
        });

        it('return proper string', () => {
            package.addVacationer('Ivan Petrov');
            package.addVacationer('Sasho Sashev');
            package.addVacationer('Pesho Ivanov');
            assert.equal(package.generateHolidayPackage(), 
            'Holiday Package Generated\n' +
            'Destination: Italy\nVacationers:\nIvan Petrov\n' +
            'Sasho Sashev\nPesho Ivanov\nPrice: 1400');
        });
    });
});
