function sorted() {
    return {
        list: [],
        size: 0,
        add: function (el) {
            this.list.push(el);
            this.size++;
            this.list.sort((a,b) => a - b);
        },
        remove: function (i) {
            if (i >= 0 && i < this.list.length) {
                this.list.splice(i, 1);
                this.size--;
            }
        },
        get: function (i) {
            if (i >= 0 && i < this.list.length)
                return this.list[i];
        }
    };
}