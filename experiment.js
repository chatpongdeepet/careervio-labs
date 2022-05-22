// let user = {
//     name: "John",
//     age: 30
// };
// let clone = user;

// clone.name = "Peter";

// console.log(user.name);

let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);
console.log(clone)