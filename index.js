const arr = [1, 2, 3, 4, 5];

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

console.log(some(arr, (el) => el > 1)); // true - те саме, що arr.some(el => el > 1)

function filter(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

console.log(filter(arr, (el) => el > 1)); // [2, 3] - те саме, що arr.filter(el => el > 1)

function reduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < array.length; i++) {
        if (accumulator === undefined && i === 0) {
            accumulator = array[0];
        } else {
            accumulator = callback(accumulator, array[i], i, array);
        }
    }

    if (accumulator === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    return accumulator;
}
console.log(reduce(arr, (sum, el) => sum + el, 0)); // 6 - те саме, що arr.reduce((sum, el) => sum + el, 0)
