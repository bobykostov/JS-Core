function solution() {
        let element1;
        let element2;
        let resultElement;

        function init(sel1, sel2, resultSelector) {
            element1 = $(sel1);
            element2 = $(sel2);
            resultElement = $(resultSelector);
        }

        function add() {
            let sum = Number(element1.val()) + Number(element2.val());
            resultElement.val(sum);
        }

        function subtract() {
            let diff = Number(element1.val()) - Number(element2.val());
            resultElement.val(diff);
        }

        return {init, add, subtract};
    }