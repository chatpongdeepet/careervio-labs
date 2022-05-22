let student1 = {
    name: "Chatpong Deepet",
    age: 18,
    height: 170,
    moviesLike: {
        action: true,
        romantic: false},
}
// clone object
let student2 = Object.assign({}, student1);
// assign new key in clone object
student2.name ="Wianna";
student2.age = null;
// print code in object
for (let code in student2 ) {
    console.log(code);
}
// print key in object
for (let key in student2 ) {
    console.log(student2[key]);
}
// add new property
student2.isActive = true;
// console.log(student2);
delete student2.isActive;
// console.log(student2);