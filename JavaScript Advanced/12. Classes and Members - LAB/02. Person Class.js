class Person {
    constructor(first, last, age, email) {
        this.firstName = first;
        this.lastName = last;
        this.age= age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}