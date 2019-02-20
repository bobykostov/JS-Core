function sort(arr) {
    let sorted = arr
        .sort()
        .sort((a, b) => a.length > b.length);
    console.log(sorted.join('\n'));
    console.log('\n');
}