const numFilter = (item) => item !== 5 && item !== 7;

const filter = fn => arr => arr.reduce( (newArr, item) => {
    return fn(item) ? newArr.concat(item) : newArr;
}, []);

const filterNums = filter(numFilter);

console.log(filterNums([1, 3, 5, 12, 15]));

