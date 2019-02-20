function sortArray (arr, method){
    let ascending = function (a,b) {
        return a-b;
    };
    
    let descending = function (a,b) {
        return b-a;
    };
    
    let sortingMethod = {
        'asc': ascending,
        'desc': descending
    };
    
    return arr.sort(sortingMethod[method]);
}