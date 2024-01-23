let number = +prompt("Mời bạn nhập vào số lượng sinh viên");
for(let i=0;i<number;i++){
    let information = {}
    let id = prompt("Mời bạn nhập vào id"+ i);
    let name = prompt("Mời bạn nhập vào tên"+ i);
    information.id = id;
    information.name = name;
    console.log(information);
};