let Book ={
    title: "Tôi thấy hoa vàng trên cỏ xanh",
    author: "Nguyễn Nhật Ánh",
    publishedYear: "2015",
    isAvailable: true,

borrow() {
    if (this.isAvailable) {
        this.isAvailable = false;
        console.log("Sách đã được mượn.");
    } else {
        console.log("Sách hiện không có.");
    }
},
returnBook() {
    if (!this.isAvailable) {
        this.isAvailable = true;
        console.log("Sách đã được trả.");
    } else {
        console.log("Sách đã ở trong tình trạng đã trả hoặc đã được mượn.");
    }
},
displayInfo() {
    console.log("Tiêu đề: " + this.title);
    console.log("Tác giả: " + this.author);
    console.log("Năm xuất bản: " + this.publishedYear);
    console.log("Tình trạng: " + (this.isAvailable ? "Đã trả" : "Đã mượn"));
    console.log("------------");
}
};
Book.borrow();
Book.displayInfo();

Book.returnBook();
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
    },
    isBookAvailable: function(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title == title) {
                return this.books[i].isAvailable;
            }
        }
    }
};

let book1 = {
    title: "Làng",
    author: "Kim Lân",
    publishedYear: "1948",
    isAvailable: true,
    displayInfo: function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("Tình trạng: " + (this.isAvailable ? "Đã trả" : "Đã mượn"));
        console.log("------------");
    }
};

let book2 = {
    title: "Tết ở làng địa ngục",
    author: "Thảo Trang",
    publishedYear: "2000",
    isAvailable: false,
    displayInfo: function() {
        console.log("Tiêu đề: " + this.title);
        console.log("Tác giả: " + this.author);
        console.log("Năm xuất bản: " + this.publishedYear);
        console.log("Tình trạng: " + (this.isAvailable ? "Đã trả" : "Đã mượn"));
        console.log("------------");
    }
};

Library.addBook(book1);
Library.addBook(book2);

console.log("Truyện 'Làng' có sẵn để mượn: " + Library.isBookAvailable("Làng"));
console.log("Tiểu thuyết 'Tết ở làng địa ngục' có sẵn để mượn: " + Library.isBookAvailable("Tết ở làng địa ngục"));
