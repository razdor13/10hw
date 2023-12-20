const arr = [1, 2, 3, 4];

function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (predicate(el)) {
            return true;
        }
    }
    return false;
}

console.log(some(arr, (el) => el > 1)); // true - те саме, що arr.some(el => el > 1)vgb

function filter(array, predicate) {
    const workArr = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];

        if (predicate(el)) {
            workArr.push(el);
        }
    }
    return [...workArr];
}

console.log(filter(arr, (el) => el > 1)); // [2, 3] - те саме, що arr.filter(el => el > 1)

function reduce(array, predicate, initialValue) {
    let sum = initialValue;
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        sum = predicate(sum, el);
    }
    return sum;
}

console.log(reduce(arr, (sum, el) => sum + el, 0)); // 6 - те саме, що arr.reduce((sum, el) => sum + el, 0)
