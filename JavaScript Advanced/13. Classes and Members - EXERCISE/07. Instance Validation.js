class CheckingAccount {
    constructor(id, email, fn, ln) {
        this.clientId = id;
        this.email = email;
        this.firstName = fn;
        this.lastName = ln;
        this.products = [];
    }

    set clientId(id) {
        if (!/^[0-9]{6}$/.test(id)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = id;
    }

    set email(email) {
        if (!/^[A-Za-z0-9]{1,}@[a-z.]{1,}$/.test(email)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = email;
    }

    set firstName(fn) {
        if (fn.length < 3 || fn.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        if (!/^[A-Za-z]+$/.test(fn)) {
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = fn;
    }

    set lastName(ln) {
        if (ln.length < 3 || ln.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        if (!/^[A-Za-z]+$/.test(ln)) {
            throw new TypeError("Last name must contain only Latin characters");
        }

        this._lastName = ln;
    }
}



let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
let acc1 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
