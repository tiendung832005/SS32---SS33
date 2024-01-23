// //Object literal - {}
// let person = {
//     // Properties: Thuộc tính - tính chất
//     // dùng để chỉ đến đối tượng cần mô tả
//     // key: value
//     name: "Tiến Dũng",
//     age: 19,
//     school: "Vin School",
//     favoriteFoods: ["Phở", "Bún", "Miến"],
//     bestFriends: "G-dragon",
//     exBoyFriends: "Ronaldo",
//     height: 185,
//     weight: 76,
//     single: true,
//     //methods: Phương thức - Hành động mà các đối tượng có thể thực hiên được
//     //key: value(function),
//     //keyN: valueN (function)
//     eat: function(){
//         console.log("Ăn phở ngon quá");
//     },
//     seeFriends: function(){
//         console.log("Are you crazy??")
//     },
// };

// let person1 = {
//     name: "Ronaldo",
//     age: 39,
//     school: "Portugal School",
//     favoriteFoods: ["gà", "lợn", "Cá"],
//     bestFriends: "Messi",
//     exBoyFriends: "M3P",
//     height: 189,
//     weight: 80,
//     single: false,
//     eat: function(){
//         console.log("Vamoss Vamoss");
//     },
//     seeFriends: function(){
//         console.log("Siuuuuuuuuuuuuu...")
//     },
// };

// let person2 = {
//     name: "M3P",
//     age: 24,
//     school: "France School",
//     favoriteFoods: ["heo quay", "Pizza", "water"],
//     bestFriends: "Pogba",
//     exBoyFriends: "No",
//     height: 180,
//     weight: 75,
//     single: true,
//     eat: function(){
//         console.log("hahahahahhaha");
//     },
//     seeFriends: function(){
//         console.log("Kylian")
//     },
// };

// console.log(person);
// console.log(person1);
// console.log(person2);

// let studen1 = {
//     id: 1,
//     name: "Tiến Dũng",
//     age: 18,
//     school: "PTIT"
// };
// let studen2 = {
//     id: 2,
//     name: "Ronaldo",
//     age: 38,
//     school: "Ri con"
// };
// let studen3 = {
//     id: 3,
//     name: "Messi",
//     age: 36,
//     school: "Si con"
// };
// class Student{
//     constructor(id, name, age, country){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     introduce(){
//         console.log("Chao Xìn!!!")
//     }

// }

// let student1 = new Student(1, "Ronaldo", 38, "Portugal");
// let student2 = new Student(2, "Messi", 35, "Argentina");
// let student3 = new Student(3, "M3P", 24, "France");

// console.log("Student 1", student1);
// console.log("Student 2", student2);
// console.log("Student 3", student3);

let person1 = {
    name: "Ronaldo",
    age: 39,
    school: "Portugal School",
    favoriteFoods: ["gà", "lợn", "Cá"],
    bestFriends: "Messi",
    exBoyFriends: "M3P",
    height: 189,
    weight: 80,
    single: false,
    eat: function(){
        console.log("Vamoss Vamoss");
    },
    seeFriends: function(){
        console.log("Siuuuuuuuuuuuuu...")
    },
};

console.log(`Xin chào, tôi là ${person1.name}, tôi thích món ${person1.favoriteFoods[2]}`)

console.log(`Xin chào, tôi là ${person1["name"]}, tôi thích món ${person1["favoriteFoods"][2]}`)

person1["height"];

//read All - Duyệt qua toàn bộ thuộc tính trong 1 đối tượng
//for..in
for(let key in person1){
    // person[key]
    console.log(key, person1[key])
}