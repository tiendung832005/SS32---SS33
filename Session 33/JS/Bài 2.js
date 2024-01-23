let phoneBook = {
    contact1:{
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com"
    },
    contact2:{
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com"
    },
}
for (var contact in phoneBook) {
        var contact = phoneBook[contact];
        console.log("Tên: " + contact.name);
        console.log("điện thoại: " + contact.phone);
        console.log("Email: " + contact.email);
        console.log("------------");
}