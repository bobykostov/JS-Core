class Textbox {
    constructor(selector, regex) {
        this._elements = $(selector);
        this._invalidSymbols = regex;
        this.value = $(this.elements[0]).val();
        this.onInput();
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        for(let el of this.elements){
            $(el).val(val);
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this._value);
    }

    onInput() {
        this.elements.on('input', (event) => {
            this.value = $(event.target).val();
        });
    }
}



let textbox = new Textbox(".textbox", /[^A-Za-z0-9]/);
let inputs = $('.textbox');

inputs.on('input', () => {
    console.log(textbox.value);
});
