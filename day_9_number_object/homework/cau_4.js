// Cho trước biến number có giá trị là một số bất kì. Hãy kiếm tra xem number có phải là số nguyên dương hay không và lưu kết quả vào biến result.

// Ví dụ:

// Input: 6 - Output: true
// Input: 0 - Output: false
// Input: -8 - Output: false



function run(number) {
    
    if ( number > 0 &&  number % 1 == 0 ) {
        result = true
    } else {
        result = false
    }

    return result;
}