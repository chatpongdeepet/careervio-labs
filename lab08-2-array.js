// 1. stingsort
let str1 = ["Apple", "Cat", "Zoo", "Bird", "Dog"];
let arr1 = str1.sort();
console.log(arr1);

// 2.numbersort
let arr2 = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
let arr2Sort = arr2.sort();
console.log(arr2Sort);

// 3.splice array and sort
let arr3 = ["Apple", "Mango", "Cat", "Banana"];
arr3.splice(2, 1, "Orange");
arr3.sort();
console.log(arr3);

// map array
let rickCharactor = ["Rick", "Morty", "Summer", "Jerry", "Beth", "Birdperson"];
let nameLength = rickCharactor.map(key => key.length);
console.log(nameLength);

// filter
let rickCharactor2 = [  {id: 1, name: "Rick"}, 
                        {id: 2, name: "Morty"}, 
                        {id: 3, name: "Summer"}, 
                        {id: 4, name: "Jerry"}, 
                        {id: 5, name: "Beth"}, 
                        {id: 6, name: "Birdperson"}
                    ];
let filterName = rickCharactor2.filter(rickName => rickName.id < 2);
console.log(filterName);

let findIdName = rickCharactor2.find(nameID => nameID.name == "Jerry");
console.log(findIdName);

rickCharactor2.forEach((order) => {
    console.log(`ID of ${order.name} is ${order.id}`);
});



