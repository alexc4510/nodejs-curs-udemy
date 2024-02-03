const cl=console.log;
const person={
    name:'Alex',
    age:29,
    greet() {
        cl('Hi, I am ' + this.name)
    }
};

const printName = ({ name }) => {
    cl(name);
};

printName(person);

const { name, age } = person;
cl(name, age);


const hobbies=['Sports','Cooking'];
const [hobby1, hobby2]=hobbies;
cl(hobby1, hobby2);

// //for (let hobby of hobbies) {
// //    cl(hobby);
// //}

// copiedArray=[...hobbies]
// cl(copiedArray)

// copiedPerson={...person}
// cl(copiedPerson)

// const toArray = (...args) => {
//     return args;
// };

// cl(toArray(1,2,3,4));
