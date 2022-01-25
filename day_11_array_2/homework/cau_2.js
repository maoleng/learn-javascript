// Cho trước biến input là array bất kì. Hãy chuyển đổi kiểu dữ liệu biến input sang chuỗi, mỗi giá trị của các phần tử được cách nhau bằng dấu ' - ', gán giá trị sau chuyển đổi cho biến result.

// Ví dụ:

// Input: [1, 2, 3] - Output: '1 - 2 - 3'
// Input: ['Chicken', 'Tiger', 'Monkey'] - Output: 'Chicken - Tiger - Monkey'


function arrayToString(input) {
    
    var result = input.join(' - ')

    return result;
}