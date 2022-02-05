// Cho biến inputs là một mảng chứa các giá trị có thể là bất kì kiểu dữ liệu nào. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs

// Ví dụ:

// Input: [1, 2, function() {}, NaN] - Output: 3
// Input: [1, 2, 'hi', 0, 6] - Output: 9
// Input: [{}, 1, [], 2, 'hi', 0, 6] - Output: 9

function sumNumbers(inputs) {
    return inputs.reduce(function(sum, current_value, current_index) {
        if ( typeof current_value != 'number' || isNaN(current_value) == true ) {
            return sum
        } else 
            return sum += current_value
    }, 0)
}