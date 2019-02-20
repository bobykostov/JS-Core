(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str))
            return str + this;
        else return this.valueOf();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str))
            return this + str;
        else return this.valueOf();
    };

    String.prototype.isEmpty = function () {
        return this.valueOf() === '';
    };

    String.prototype.truncate = function (n) {
        if (n < 4)
            return '.'.repeat(n);
        else if (this.length <= n)
            return this.valueOf();
        else if (this.includes(' ')) {
            let spl = this.split(' ');
            let str = spl[0];
            if (str + '...' <= n)
                return str + '...';
            for (let i = 1; i < spl.length; i++) {
                if (([str, spl[i]].join(' ') + '...').length <= n)
                    str = [str, spl[i]].join(' ');
                else break;
            }
            return str.trim() + '...';
        }
        else
            return this.slice(0, n - 3) + '...';
    };

    String.format = function (str, ...args) {
        for (let i = 0; i < args.length; i++) {
            str = str.replace('{' + i + '}', args[i]);
        }
        return str;
    };
})();