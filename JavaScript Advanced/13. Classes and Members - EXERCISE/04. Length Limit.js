class Stringer {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length > 0) {
            this.innerLength -= length;
        } else {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else if (this.innerLength === 0) {
            return '...';
        } else {
            return this.innerString
            .substring(0, this.innerLength) + '...';
        }
    }
}



let test = new Stringer('Test', 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());
