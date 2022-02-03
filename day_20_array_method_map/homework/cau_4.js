// Cho trước hàm convertToString và tham số numbers là một mảng gồm nhiều các số tương tự như sau:

// [1, 20, -8, 0, 16]
// Yêu cầu
// Dựa vào kiến thức đã học hãy xử lý để hàm convertToString trả về một array mới từ array numbers, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu string.

// Ví dụ:

// Input: [1, 2, 3] - Output: ['1', '2', '3']
// Input: [2, 4, 10] - Output: ['2', '4', '10']

function convertToString(numbers) {
    var output = numbers.map(function(each_number) {
        return each_number.toString()
    })
    return output
}