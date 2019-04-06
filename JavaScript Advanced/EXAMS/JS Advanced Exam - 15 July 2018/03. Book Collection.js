class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (!['livingRoom', 'bedRoom', 'closet'].includes(room)) {
            throw new Error(`"Cannot have book shelf in ${room}"`);
        }

        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCapacity === this.shelf.length) {
            this.shelf.shift();
        }

        let bookObj = {
            'bookName': bookName,
            'bookAuthor': bookAuthor,
            'genre': genre
        };

        this.shelf.push(bookObj);
        this.shelf.sort((a,b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        let str = `Results for search "${genre}":`;
        
        let genreSelected = this.shelf.filter(b => b.genre === genre);
        genreSelected.forEach((b) => {
            str += `\n\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`;
        });

        return str;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }

        let str = `"${this.shelfGenre}" shelf in ${this.room} contains:`;

        for (let book of this.shelf) {
            str += `\n\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`;
        }

        return str;
    }
}



let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

/*
"Programming" shelf in livingRoom contains:
📖 "Introduction to Programming with C#" - Svetlin Nakov
📖 "Introduction to Programming with Java" - Svetlin Nakov
📖 "Programming for .NET Framework" - Svetlin Nakov
*/



let garden = new BookCollection("Programming", "garden");

//"Cannot have book shelf in garden"



let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));

/*
Shelf's capacity: 1
Results for search "history":
📖 Cuentos para pensar - "The Guns of August"
📖 David McCullough - "John Adams"
*/
