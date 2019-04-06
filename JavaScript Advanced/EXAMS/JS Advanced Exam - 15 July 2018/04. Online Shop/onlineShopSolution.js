function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;

    $(selector).html(form);

    let product = $('.custom-select');
    product.on('keyup', () => {
        if (product.val().length === 0 || capacity + Number(prodQuant.val()) > 150)
            $('#submit').attr('disabled', 'disabled');
        else
            $('#submit').removeAttr('disabled');
    });

    let prodPrice = $('#price');
    let prodQuant = $('#quantity');

    let capacity = 0;
    let totalPrice = 0;

    prodQuant.on('change', () => {
        if (product.val().length === 0 || capacity + Number(prodQuant.val()) > 150)
            $('#submit').attr('disabled', 'disabled');
        else
            $('#submit').removeAttr('disabled');
    });

    let inventory = $('.display');

    $('#submit').on('click', () => {
        let item = $(`<li>Product: ${product.val()} ` +
            `Price: ${prodPrice.val()} ` +
            `Quantity: ${prodQuant.val()}</li>`);

        inventory.append(item);

        capacity += Number(prodQuant.val());
        $('#capacity').val(capacity);
        if (capacity === 150) {
            $('#capacity').addClass('fullCapacity');
            $('#capacity').val('full');
            product.attr('disabled', 'disabled');
            prodPrice.attr('disabled', 'disabled');
            prodQuant.attr('disabled', 'disabled');
        }

        totalPrice += Number(prodPrice.val());
        $('#sum').val(totalPrice);

        product.val('');
        prodPrice.val('1');
        prodQuant.val('1');
        $('#submit').attr('disabled', 'disabled');
    });
}
