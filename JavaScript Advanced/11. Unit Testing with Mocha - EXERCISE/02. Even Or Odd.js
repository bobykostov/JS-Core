describe('function test', function () {
    it('if arg is number should return undefined', function () {
        expect(isOddOrEven(15)).to.equal(undefined, 
            'incorrect result');
    });

    it('if arg is number should return undefined', function () {
        expect(isOddOrEven({string: 'test'})).to.be.undefined;
    });

    it('should return even', function () {
        expect(isOddOrEven('even str')).to.equal('even');
    });
    
    it('should return odd', function () {
        expect(isOddOrEven('odd str')).to.equal('odd');
    });

    it('should return even', function () {
        assert.equal(isOddOrEven('asdfasdf'), 'even');
    });
    
    it('should return odd', function () {
        assert.equal(isOddOrEven('triangles'), 'odd');
    });
});