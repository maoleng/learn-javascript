// Viết hàm getCurrentYear trả về năm hiện tại. 
// Ví dụ năm nay là 2025 thì hàm sẽ trả về 2025.

function getCurrentYear() {
    var time = new Date()
    return time.getFullYear()
}