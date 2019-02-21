class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let n = this.name;
        if (this.unitedRats.length > 0) {
            this.unitedRats
            .forEach(r => n += `\n##${r}`);
        }
        return n;
    }
}