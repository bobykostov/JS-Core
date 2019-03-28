let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
global.$ = $;

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
    </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0)
            return;
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0)
            return;
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0)
            return;
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || 
            !Number.isInteger(Number(newIncome)) || 
            Number(newIncome) <= 0)
            return;
        this.income = Number(newIncome);
    }
};



describe('sharedObject', function () {
    describe('initial values', function () {
        it('name is null', function () {
            expect(sharedObject.name).to.be.null;
        });

        it('income is null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('change name', function () {
        it('name - empty string', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it('name - invalid on existing', function () {
            sharedObject.name = 'first';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('first');
        });

        it('name - invalid on existing; textbox', function () {
            $('#name').val('second');
            sharedObject.changeName('');
            expect($('#name').val()).to.equal('second');
        });

        it('name - valid string', function () {
            sharedObject.changeName('kkkk');
            expect(sharedObject.name).to.equal('kkkk');
        });

        it('name - textbox check', function () {
            sharedObject.changeName('asdf');
            expect($('#name').val()).to.equal('asdf');
        });
    });

    describe('change income', function () {
        it('income - <0', function () {
            sharedObject.changeIncome(-123);
            expect(sharedObject.income).to.be.null;
        });

        it('income - =0', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.null;
        });

        it('income - non-number', function () {
            sharedObject.changeIncome('asdf');
            expect(sharedObject.income).to.be.null;
        });

        it('income - non-integer', function () {
            sharedObject.changeIncome(4321.4321);
            expect(sharedObject.income).to.be.null;
        });

        it('income - <0 with existing', function () {
            sharedObject.income = 111;
            sharedObject.changeIncome(-123);
            expect(sharedObject.income).to.equal(111);
        });

        it('income - =0 with existing', function () {
            sharedObject.income = 111;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(111);
        });

        it('income - non-number with existing', function () {
            sharedObject.income = 111;
            sharedObject.changeIncome('asdf');
            expect(sharedObject.income).to.equal(111);
        });

        it('income - non-integer with existing', function () {
            sharedObject.income = 111;
            sharedObject.changeIncome(333.567);
            expect(sharedObject.income).to.equal(111);
        });

        it('income - <0 textbox with existing', function () {
            $('#income').val('222');
            sharedObject.changeIncome('-543');
            expect($('#income').val()).to.equal('222');
        });

        it('income - =0 textbox with existing', function () {
            $('#income').val('222');
            sharedObject.changeIncome('0');
            expect($('#income').val()).to.equal('222');
        });

        it('income - empty textbox with existing', function () {
            $('#income').val('222');
            sharedObject.changeIncome('');
            expect($('#income').val()).to.equal('222');
        });

        it('income - non-number textbox with existing', function () {
            $('#income').val('222');
            sharedObject.changeIncome('asdf');
            expect($('#income').val()).to.equal('222');
        });

        it('income - non-integer textbox with existing', function () {
            $('#income').val('222');
            sharedObject.changeIncome('456.234');
            expect($('#income').val()).to.equal('222');
        });

        it('income - valid num', function () {
            sharedObject.changeIncome(789);
            expect(sharedObject.income).to.equal(789);
        });

        it('income - textbox after change', function () {
            sharedObject.changeIncome(987);
            expect($('#income').val()).to.equal('987');
        });
    });

    describe('update name', function () {
        it('name - empty string', function () {
            sharedObject.name = 'asdf5678';
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('asdf5678');
        });

        it('name - string', function () {
            sharedObject.name = 'dfgh';
            $('#name').val('zxcv');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('zxcv');
        });
    });

    describe('update income', function () {
        it('income - empty string', function () {
            sharedObject.income = 804;
            $('#income').val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(804);
        });

        it('income - non-number', function () {
            sharedObject.income = 804;
            $('#income').val('number');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(804);
        });

        it('income - <0', function () {
            sharedObject.income = 804;
            $('#income').val('-321');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(804);
        });

        it('income - =0', function () {
            sharedObject.income = 804;
            $('#income').val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(804);
        });

        it('income - non-integer', function () {
            sharedObject.income = 804;
            $('#income').val('444.777');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(804);
        });

        it('income - changed textbox, valid number', function () {
            sharedObject.income = 804;
            $('#income').val('7654');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(7654);
        });
    });
});
