// Cho biến numbers là một mảng chứa các giá trị số bất kì. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers

// Ví dụ:

// Input: [1, 2] - Output: 3
// Input: [1, 2, 0, 6] - Output: 9

function sum(numbers) {
    return numbers.reduce(function(parameter, current_value) {
        parameter += current_value
        return parameter
    }, 0)
}