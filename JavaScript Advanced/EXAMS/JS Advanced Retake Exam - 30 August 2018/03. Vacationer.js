class Vacationer {
    constructor(name, card) {
        this.fullName = name;
        this.idNumber = this.generateIDNumber();
        this.creditCard = card;
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(nameArr) {
        if (nameArr.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        for (let el of nameArr) {
            if (!el.match(/^[A-Z][a-z]+$/)) {
                throw new Error("Invalid full name");
            }
        }

        let [firstName, middleName, lastName] = nameArr;
        this._fullName = {firstName, middleName, lastName};
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(card) {
        if (!card) {
            this._creditCard = {
                'cardNumber': 1111,
                'expirationDate': '',
                'securityNumber': 111
            };
        } else this.addCreditCardInfo(card);
    }

    generateIDNumber() {
        let code = this.fullName.firstName.charCodeAt(0);
        let id = 231 * code + 139 * this.fullName.middleName.length;
        let lastChar = this.fullName.lastName.slice(-1);
        if (['a', 'e', 'i', 'o', 'u'].includes(lastChar)) {
            return id + '8';
        }
        return id + '7';
    }

    addCreditCardInfo(input) {
        if (input.length < 3) {
            throw new Error("Missing credit card information");
        }
        let [cardNumber, expirationDate, securityNumber] = input;
        if (typeof cardNumber !== 'number' || 
        typeof expirationDate !== 'string' || 
        typeof securityNumber !== 'number') {
            throw new Error("Invalid credit card details");
        }

        this._creditCard = {cardNumber, expirationDate, securityNumber};
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }

        this.wishList.push(destination);
        this.wishList.sort((a,b) => a.length - b.length);
    }

    getVacationerInfo() {
        let wishL = '';

        if (this.wishList.length === 0) {
            wishL = "empty";
        } else {
            wishL = this.wishList.join(', ');
        }

        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n` +
        `ID Number: ${this.idNumber}\n` +
        `Wishlist:\n` +
        `${wishL}\n` +
        `Credit Card:\n` +
        `Card Number: ${this.creditCard.cardNumber}\n` +
        `Expiration Date: ${this.creditCard.expirationDate}\n` +
        `Security Number: ${this.creditCard.securityNumber}`;
    }
}



// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
