function addDestination() {
    let city = $('.inputData').first();
    let country = $('.inputData').last();

    if (city.val() !== '' && country.val() !== '') {
        let season = $('#seasons option:selected').text();

        let destItem = $(`<td>${city.val()}, ${country.val()}</td>`);
        let seasonItem = $(`<td>${season}</td>`);
        let row = $('<tr>').append(destItem).append(seasonItem)
        $('#destinationsList').append(row);

        city.val('');
        country.val('');

        let summary = $(`#${season.toLowerCase()}`);
        let num = summary.val();
        summary.val(++num);
    }
}
