let jobs = [];
let job = {
    id: "01",
    title: "CSKH",
    description: "Tư vấn khách hàng",
    completed: true,
};
function addJob() {
    let id = prompt("Nhập ID của công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Trạng thái đã hoàn thành?:");

    let job = {
        id: id,
        title: title,
        description: description,
        completed: completed == "true",
    };

    jobs.push(job);
    console.log("Công việc đã được thêm vào danh sách:");
    console.log(job);
}

function printJob() {
    console.log("Danh sách công việc:");
    console.log(jobs);
}

function findJob() {
    let idToSearch = prompt("Nhập ID công việc cần tìm:");

    let foundJob = jobs.find(job.id == idToSearch);

    if (foundJob) {
        console.log("Công việc đã tìm thấy:");
        console.log(foundJob);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

while (true) {
    let choice = prompt("Chọn một trong các lựa chọn: \n 1. Thêm công việc \n 2. In danh sách công việc \n 3. Tìm công việc theo ID \n 4. Thoát");

    switch (choice) {
        case "1":
            addJob();
            break;
        case "2":
            printJob();
            break;
        case "3":
            findJob();
            break;
        case "4":
            console.log("Thoát chương trình");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
