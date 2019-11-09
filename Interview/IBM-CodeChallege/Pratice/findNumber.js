function findNumber(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return 'YES';
        }
    }
    return 'NO';

}