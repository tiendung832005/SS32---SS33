
let book1 = {
    name: "Tôi thấy hoa vàng trên cỏ xanh",
    author: "Nguyễn Nhật Ánh",
};

let book2 = {
    name: "Làng",
    author: "Kim Lân",
};
let book3 = {
    name: "Tết ở làng địa ngục",
    author: "Thảo Trang",
};
let Books = {book1, book2, book3};

    let search = prompt("Mời bạn nhập tên tác giả để tìm kiếm sách");
if(search == book1.author){
    console.log(book1)
}
else if(search == book2.author){
    console.log(book2)
}
else if(search == book3.author){
    console.log(book3)
}
else{
    console.log("Tên tác giả bạn nhập không đúng. Hãy kiểm tra lại")
}