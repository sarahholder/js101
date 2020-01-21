console.log('hi');

const junkDrawer = ['hi', 2, true, {name: 'Sarah Holder'}, [1, 2, 3, 4]];
console.log(junkDrawer[2]);
junkDrawer.push('fluffy');

const valuePrinter = (arr, idx) => {
    return arr[idx];
};
console.log(valuePrinter([1, 2, 3, 4, 5], 2)); //3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle','fish' ], 4)); //turtle
;
const numArray = [1, 2, 3, 4, 5];
console.log(valuePrinter(numArray, 2));


