let Book ={
    title: "Tôi thấy hoa vàng trên cỏ xanh",
    author: "Nguyễn Nhật Ánh",
    publishedYear: "2015",
    displayInfo: function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("------------");
    }
};

Book.displayInfo();
let Library = {
    books: [],
    addBook: function(book) {
        this.books.push(book);
    },
    displayBooks: function() {
        console.log("Danh sách sách trong thư viện:");
        for (let i = 0; i < this.books.length; i++) {
            console.log("Sách " + (i + 1) + ":");
            this.books[i].displayInfo();
        }
    }
};

let book1 = {
    title: "Làng",
    author: "Kim Lân",
    publishedYear: "1948",
    displayInfo: function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("------------");
    }
};
let book2 = {
    title: "Tết ở làng địa ngục",
    author: "Thảo Trang",
    publishedYear: "2000",
    displayInfo: function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("------------");
    }
};
Library.addBook(book1);
Library.addBook(book2);

Library.displayBooks();

