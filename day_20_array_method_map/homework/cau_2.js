// Cho trước biến inputs là một array gồm các phần tử là các chữ số bất kì. Trong hàm run, hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.

// Ví dụ:

// Input: [1, 2, 3] - Output: [3, 6, 9]
// Input: [4, -8, 0] - Output: [12, -24, 0]

function run(inputs) {
    var output = inputs.map(function(each_input) {
        return each_input * 3
    })
    return output
}