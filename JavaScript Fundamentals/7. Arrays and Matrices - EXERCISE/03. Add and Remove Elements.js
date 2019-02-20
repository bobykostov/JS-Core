function addRemove(arr) {
    let newArr = [];
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add')
        {
            newArr.push(++n);
        }
        else if (arr[i] === 'remove')
        {
            newArr.pop();
            ++n;
        }
    }
    if (newArr.length === 0)
        console.log("Empty");
    else
        console.log(newArr.join('\n'));
}