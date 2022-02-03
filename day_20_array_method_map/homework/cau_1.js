// Cho trước hàm convertToBoolean có tham số inputs là một array gồm các phần tử có giá trị bất kì. Ví dụ:

// [1, 'hi', false, 8, undefined, '', NaN]
// Yêu cầu
// Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu boolean

// Ví dụ:

// Input: [0, 1, 2] - Output: [false, true, true]
// Input: [NaN, 'hi', ''] - Output: [false, true, false]

function convertToBoolean(inputs) {
    var array_to_return = inputs.map(function(each) {
        if ( each === 0 || each === null || each === undefined || each === '' || each === NaN || each === false) {
            return false
        } else {
            return true
        }
    })
    return array_to_return
}