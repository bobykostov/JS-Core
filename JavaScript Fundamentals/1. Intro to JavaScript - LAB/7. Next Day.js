function next(year, month, day) {
    let tomorrow = new Date(year,month-1,day+1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);
}