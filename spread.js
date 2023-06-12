// arrays
let arr1 = ['A', 'B', 'C'];

let arr2 = ['1', '2', '3'];

let concatArr1 = [...arr1, ...arr2];

let concatArr2 = [...arr2, ...arr1];

console.log(concatArr2);

// objects
const obj1 = {
    key1: 'obj1 val1',
    key2: 'obj1 val2'
}

const obj2 = {
    key1: 'obj2 val1',
    key2: 'obj2 val2',
    key3: 'obj2 val3'
}

const combinedObj1 = {...obj1, ...obj2};
const combinedObj2 = { ...obj2, ...obj1 };

console.log(combinedObj1);
console.log(combinedObj2);