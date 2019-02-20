let assert = require('chai').assert;



function lookupChar(string, index) {
    if (typeof(string) !== 'string' || 
        !Number.isInteger(index))
        return undefined;
    if (string.length <= index || index < 0)
        return 'Incorrect index';

    return string.charAt(index);
}



describe('lookupChar', function () {
    describe('invalid inputs checks', function () {
        it('number instead of string returns undefined', function () {
            assert.isUndefined(lookupChar(123, 321));
        });

        it('obj instead of string returns undefined', function () {
            assert.isUndefined(lookupChar({}, 321));
        });

        it('string instead of number returns undefined', function () {
            assert.isUndefined(lookupChar('string1', 'string2'));
        });

        it('obj instead of number returns undefined', function () {
            assert.isUndefined(lookupChar('string1', {}));
        });

        it('floating point number returns undefined', function () {
            assert.isUndefined(lookupChar('string1', 3.14));
        });
        
        it('index less than length returns incorrect', function () {
            assert.equal(lookupChar('string1', -9), 'Incorrect index');
        });
        
        it('index more than length returns incorrect', function () {
            assert.equal(lookupChar('string1', 27), 'Incorrect index');
        });
    });

    describe('correct answer checks', function () {
        it('should return char at index', function () {
            assert.equal(lookupChar('testString', 4), 'S');
        });

        it('should return char at index', function () {
            assert.equal(lookupChar('testString', 0), 't');
        });

        it('should return char at index', function () {
            assert.equal(lookupChar('testString', 9), 'g');
        });
    });
});
