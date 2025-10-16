//objects
const obj = {
    name : "mohit",
    last : "kumar",
    age : 21,
    course : "bca"
}

obj.college = "lcet";
delete obj.name;
obj.name = "sohit";

for(let i in obj) {
    console.log(i ,obj[i]);
}
