exports.min = function min(array) {
    let min = 0;

    if (array)
        array.forEach((element) => {
            min = Math.min(element, min);
        });

    return min;
};

exports.max = function max(array) {
    let max = 0;

    if (array)
        array.forEach((element) => {
            max = Math.max(element, max);
        });

    return max;
};

exports.avg = function avg(array) {
    let avg = 0;

    if (array && array.length)
        avg = array.reduce((acc, red) => acc + red, 0) / array.length;

    return avg;
};
