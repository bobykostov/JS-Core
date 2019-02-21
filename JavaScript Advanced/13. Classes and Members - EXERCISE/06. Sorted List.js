class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    
    add(el) {
        this.list.push(el);
        this.size++;
        this.list.sort((a,b) => a - b);
    }
    
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        }
    }
    
    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}
