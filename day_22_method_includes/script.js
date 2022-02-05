var course = [
    "PHP",
    "Javascript",
    "Laravel"
]

// Tìm trong 1 mảng xem có phần tử = tham số thứ nhất hay không
// Phương thức này trả về boolean
// Tham số thứ 2 là: tìm kiếm bắt đầu từ index...
// Khi nhập vào số âm thì tìm kiếm từ vị trí: length + tham số đó
// vd: tìm kiếm từ vị trí: 3 + -1 = 2
course.includes("PHP", 0)

var string = "Xin chao cac ban"
console.log(string.includes("chao"))
