function lastMonth(arr) {
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];

    let current = new Date(year, month-1, day);
    current.setDate(1);
    current.setHours(-1);

    console.log(current.getDate());
}