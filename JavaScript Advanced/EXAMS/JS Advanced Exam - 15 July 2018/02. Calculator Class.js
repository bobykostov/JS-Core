let assert = require('chai').assert;



class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
           throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}



//#region

let output = new Calculator();
output.add(10);
output.add("Pesho");
output.add("5");
console.log(output.toString());
output.add(10);
console.log(output.divideNums());
output.add(1);
console.log(output.orderBy());
console.log(output.toString());

//#endregion



describe('Calculator Class tests', () => {
    let calc;
    beforeEach(() => {
        calc = new Calculator();
    });

    describe('divideNums', () => {
        it('throw on empty expenses array', () => {
            assert.throws(() => calc.divideNums(),
            /There are no numbers in the array!/);
        });

        it('pass zero', () => {
            calc.add(10);
            calc.add(0)
            assert.equal(calc.divideNums(),
            'Cannot divide by zero');
        });

        it('return divided expenses', () => {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            assert.equal(calc.divideNums(), 1);
        });
    });

    describe('toString', () => {
        it('return empty array', () => {
            assert.equal(calc.toString(), 'empty array');
        });

        it('return joined expenses list', () => {
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            assert.equal(calc.toString(),
            '10 -> Pesho -> 5');
        });
    });

    describe('orderBy', () => {
        it('return empty', () => {
            assert.equal(calc.orderBy(), 'empty');
        });

        it('sort numbers', () => {
            calc.add(567);
            calc.add(1);
            calc.add(17);
            assert.equal(calc.orderBy(), '1, 17, 567');
        });

        it('sort various types', () => {
            calc.add(987);
            calc.add('Pesho');
            calc.add(234);
            calc.add('Gosho');
            assert.equal(calc.orderBy(),
            '234, 987, Gosho, Pesho');
        });
    });
});
