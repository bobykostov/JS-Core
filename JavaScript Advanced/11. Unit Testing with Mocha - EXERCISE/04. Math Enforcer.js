let assert = require('chai').assert;



let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number')
            return undefined;
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number')
            return undefined;
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || 
            typeof(num2) !== 'number')
            return undefined;
        return num1 + num2;
    }
};



describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('addFive non-number returns undefined', function () {
            assert.isUndefined(mathEnforcer.addFive('str'));
        });

        it('addFive correct answer positive integer', function () {
            assert.equal(mathEnforcer.addFive(12), 17);
        });

        it('addFive correct answer negative integer', function () {
            assert.equal(mathEnforcer.addFive(-22), -17);
        });

        it('addFive correct answer floating point', function () {
            assert.closeTo(mathEnforcer.addFive(7.5), 12.5, 0.01);
        });
    });

    describe('subtractTen', function () {
        it('subtractTen non-number returns undefined', function () {
            assert.isUndefined(mathEnforcer.subtractTen('str'));
        });

        it('subtractTen correct answer positive integer', function () {
            assert.equal(mathEnforcer.subtractTen(87), 77);
        });

        it('subtractTen correct answer negative integer', function () {
            assert.equal(mathEnforcer.subtractTen(-43), -53);
        });

        it('subtractTen correct answer floating point', function () {
            assert.closeTo(mathEnforcer.subtractTen(16.7), 6.7, 0.01);
        });
    });

    describe('sum', function () {
        it('sum non-numbers returns undefined', function () {
            assert.isUndefined(mathEnforcer.sum('str', {}));
        });

        it('sum num1 non-number returns undefined', function () {
            assert.isUndefined(mathEnforcer.sum(4, 'str'));
        });

        it('sum num2 non-number returns undefined', function () {
            assert.isUndefined(mathEnforcer.sum('str', 4));
        });

        it('sum correct answer positive integers', function () {
            assert.equal(mathEnforcer.sum(54, 31), 85);
        });

        it('sum correct answer negative integers', function () {
            assert.equal(mathEnforcer.sum(-54, -31), -85);
        });

        it('sum correct answer floating point', function () {
            assert.closeTo(mathEnforcer.sum(23.2, 45.4), 68.6, 0.01);
        });
    });
});
