function addSticker() {
    let stickerList = $('#sticker-list');

    let titleInput = $('.title').val();
    let textInput = $('.content').val();

    if (titleInput !== '' && textInput !== '')
    {
        let titleNote = $(`<h2>${titleInput}</h2>`);
        let textNote = $(`<p>${textInput}</p>`);

        let item = $('<li class="note-content">');
        item.append($('<a class="button">x</a>')
            .on('click', () => {
                item.remove();
            }));
        item.append(titleNote);
        item.append($('<hr>'));
        item.append(textNote);
        stickerList.append(item);

        $('.title').val('');
        $('.content').val('');
    }
}
