console.log('objects');

const wordLength = (word) => {

    return word.length;

}

console.log('num of letters ', wordLength('cat'));
console.log('num of letters ', wordLength('monkeybutt'));

const ageCheck = (age) => {
    if (age >= 21){
     console.log('party');
    } else {
    console.log('no drinks for you')};

};

ageCheck(12); //'no drinks for you'
ageCheck(24);// 'party
