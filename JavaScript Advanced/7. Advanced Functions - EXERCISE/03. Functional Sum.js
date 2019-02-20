(function() {
    let sum = 0;

    return function summing(num) {
        sum += num;
        summing.toString = function(){
            return sum;
        };
        return summing;
    };
})();