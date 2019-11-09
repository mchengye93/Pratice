function oddNumbers(l, r) {
    let oddArr = [];
    for (let i = l ; i <=r; i++) {
        if (i%2 !== 0) {
            oddArr.push(i);
        }
    }
    return oddArr;
}