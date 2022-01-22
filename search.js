function search(arr, x) {
    console.log(arr);
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === x) return true;
    } return false;
}

module.exports = search;