describe("Sum function tests", function () {
    it("Should return 6 for [1, 2, 3]", function () {
        let array = [1, 2, 3];
        let result = sum(array);
        expect(result).to.be.equal(6);
    });
    it("Should return 1 for [1]", function () {
        let array = [1];
        let result = sum(array);
        expect(result).to.be.equal(1);
    });
    it("Should return 3 for [1.5, 1.5]", function () {
        let array = [1.5, 1.5];
        let result = sum(array);
        expect(result).to.be.equal(3);
    });
    it("Should return -3 for [-1.5, -1.5]", function () {
        let array = [-1.5, -1.5];
        let result = sum(array);
        expect(result).to.be.equal(-3);
    });
    it("Should return 0 for []", function () {
        let array = [];
        let result = sum(array);
        expect(result).to.be.equal(0);
    });
    it("Should return NaN for string", function () {
        let array = 'string';
        let result = sum(array);
        expect(result).to.be.NaN;
    });
});