let person = {
    name: "Ronaldo",
    age: "38",
    address: "Protugal",
}
console.log(person);
person.date = "5/2/1985",
console.log("Sau khi thêm ngày sinh: ", person);
delete person.age,
console.log("Sau khi xóa thuộc tính tuổi", person);