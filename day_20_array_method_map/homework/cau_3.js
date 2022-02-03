// Cho trước hàm convertToNumber và tham số inputs là một mảng gồm nhiều chuỗi chữa các số tương tự như sau:

// ['1', '6', '2', '8']
// Yêu cầu
// Dựa vào kiến thức đã học hãy xử lý để hàm convertToNumber trả về một array mới từ array inputs, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu number.

// Ví dụ:

// Input: ['1', '2', '3'] - Output: [1, 2, 3]
// Input: ['2', '4', '10'] - Output: [2, 4, 10]
// Input: ['2.2', '4', '10'] - Output: [2.2, 4, 10]

function convertToNumber(inputs) {   
    var output = inputs.map(function(input) {
        return Number(input)
    })
    return output
}