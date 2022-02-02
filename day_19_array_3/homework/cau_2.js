// Cho trước hàm checkPositiveNumbers có tham số numbers sẽ nhận một mảng gồm các phần tử là những số bất kì. Hàm này được tạo ra với mục đích kiểm tra toàn bộ các chữ số trong mảng numbers có phải là số dương hay không.

// Yêu cầu
// Nếu toàn bộ phần tử trong mảng numbers là số dương hàm sẽ trả về true
// Nếu một trong các phần tử của mảng numbers không phải số dương hàm sẽ trả về false
// Ví dụ:

// Input: [1, 2, 3] - Output: true
// Input: [1, -8, 3] - Output: false
// Input: [-2, -6, 3] - Output: false

function checkPositiveNumbers(numbers) {
    var check = numbers.every(function(numbers, index) {
        return numbers > 0
    })
    return check
}