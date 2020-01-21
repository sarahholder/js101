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


const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};
//dot notation
console.log(expense.cost);

//bracket notation
console.log(expense['cost']);
//usually need to use dot notation
//if the key is a string

//object representation 5 key value 

const employee = {
    id: 'emp1234',
    dateHired: '01/07/2020',
    firstName: 'MsSarah',
    lastName: 'Holder',
    hourPayRate: 450,
    canPromote: false,
    position: 'Underwater basket weaver',
    supervisor: 'emp1235'

}
const statusMaker = (emp) => {
    if (emp.firstName[0] === 'M') {
        emp.status = 'vip';
    }else{
        emp.status = 'peasant';
    }
    return emp;
};
console.log(statusMaker(employee));


//create a function called statusMaker
//that takes in a single employee
//if teh employee firstName starts with an M
//then add a key of status and a value of 
//'vip'
// if not add a key of status and value of 'peasant