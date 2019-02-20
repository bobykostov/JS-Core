describe("Create calculator tests", function() {

    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    describe("Add", function() {
        it("Should return 0 after initialization", function() {
            let result = calc.get();
            expect(result).to.be.equal(0);
        });
        it("Should return 5 after add 5", function() {
            calc.add(5);
            let result = calc.get();
            expect(result).to.be.equal(5);
        });
        it("Should return 10 after add 5 add 5", function() {
            calc.add(5);
            calc.add(5);
            let result = calc.get();
            expect(result).to.be.equal(10);
        });
        it("Should return 11 after add 5.5 add 5.5", function() {
            calc.add(5.5);
            calc.add(5.5);
            let result = calc.get();
            expect(result).to.be.equal(11);
        });
        it("Should return -11 after add -5.5 add -5.5", function() {
            calc.add(-5.5);
            calc.add(-5.5);
            let result = calc.get();
            expect(result).to.be.equal(-11);
        });
        it("Should return 11 after add '5.5' add '5.5'", function() {
            calc.add('5.5');
            calc.add('5.5');
            let result = calc.get();
            expect(result).to.be.equal(11);
        });
        it("Should return NaN after add string", function() {
            calc.add('string');
            let result = calc.get();
            expect(result).to.be.NaN;
        });
    });

    describe("Subtract", function() {
        it("Should return -5 after subtract 5", function() {
            calc.subtract(5);
            let result = calc.get();
            expect(result).to.be.equal(-5);
        });
        it("Should return -10 after subtract 5 subtract 5", function() {
            calc.subtract(5);
            calc.subtract(5);
            let result = calc.get();
            expect(result).to.be.equal(-10);
        });
        it("Should return -11 after subtract 5.5 subtract 5.5", function() {
            calc.subtract(5.5);
            calc.subtract(5.5);
            let result = calc.get();
            expect(result).to.be.equal(-11);
        });
        it("Should return 11 after subtract -5.5 subtract -5.5", function() {
            calc.subtract(-5.5);
            calc.subtract(-5.5);
            let result = calc.get();
            expect(result).to.be.equal(11);
        });
        it("Should return 11 after subtract '5.5' subtract '5.5'", function() {
            calc.add('5.5');
            calc.add('5.5');
            let result = calc.get();
            expect(result).to.be.equal(11);
        });
        it("Should return NaN after subtract string", function() {
            calc.subtract('string');
            let result = calc.get();
            expect(result).to.be.NaN;
        });
    });

    describe("Add in combination with subtract", function() {
        it('Should return 10', function() {
            calc.add(10);
            calc.add(10);
            calc.add(5);
            calc.subtract(15);
            let result = calc.get();
            expect(result).to.be.equal(10);
        });
        it('Should return -10', function() {
            calc.subtract(10);
            calc.subtract(10);
            calc.subtract(5);
            calc.add(15);
            let result = calc.get();
            expect(result).to.be.equal(-10);
        });
    });
});