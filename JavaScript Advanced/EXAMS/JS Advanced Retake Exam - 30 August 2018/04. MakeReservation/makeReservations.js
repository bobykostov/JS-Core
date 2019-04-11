function makeReservation(selector) {
    let submit = $('#submit');
    let infoPreview = $('#infoPreview');
    let edit = $('#edit');
    let continueB = $('#continue');
    let container = $('#container');

    let fullname = $('#fullName');
    let email = $('#email');
    let phone = $('#phoneNumber');
    let address = $('#address');
    let postal = $('#postalCode');

    let oldVals = [];

    submit.on('click', () => {
        if (fullname.val().trim() === '' || email.val().trim() === '') {
            return;
        }

        infoPreview.append($(`<li>Name: ${fullname.val()}</li>`))
        .append($(`<li>E-mail: ${email.val()}</li>`))
        .append($(`<li>Phone: ${phone.val()}</li>`))
        .append($(`<li>Address: ${address.val()}</li>`))
        .append($(`<li>Postal Code: ${postal.val()}</li>`));

        $('.block input').each(function (i) {
            oldVals.push($(this).val());
        });

        fullname.val('');
        email.val('');
        phone.val('');
        address.val('');
        postal.val('');

        submit.attr('disabled', true);
        edit.attr('disabled', false);
        continueB.attr('disabled', false);
    });

    edit.on('click', () => {
        submit.attr('disabled', false);
        edit.attr('disabled', true);
        continueB.attr('disabled', true);

        fullname.val(oldVals[0]);
        email.val(oldVals[1]);
        phone.val(oldVals[2]);
        address.val(oldVals[3]);
        postal.val(oldVals[4]);

        oldVals = [];
        infoPreview.empty();
    });

    continueB.on('click', () => {
        let checkOut = $('<button id="checkOut">Check Out</button>').on('click', () => {
            $('#wrapper').html('<h4>Thank you for your reservation!</h4>');
        });

        let select = $(`<select id="paymentOptions" class="custom-select">
            <option selected disabled hidden>Choose</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
        </select>`);

        select.on('change', () => {
            let selectedVal = select.find(':selected').val();
            $('#extraDetails').empty();

            if (selectedVal === 'creditCard') {
                for (let text of ['Card Number', 'Expiration Date', 'Security Numbers']) {
                    $('#extraDetails').append('<div class="inputLabel">' +
                        `${text}<input>` + '</div><br>');
                }
            } else if (selectedVal === 'bankTransfer') {
                $('#extraDetails').append('<p>' +
                    'You have 48 hours to transfer the amount to:' +
                    '<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>');
            }
            $('#extraDetails').append(checkOut);
        });

        container.append($('<h2>Payment details</h2>'))
        .append(select)
        .append($('<div id="extraDetails"></div>'));

        edit.attr('disabled', true);
        continueB.attr('disabled', true);
    });
}
