// Tạo hàm checkPositiveInteger có tham số là number, hàm này dùng để kiểm tra một số có phải là số nguyên dương hay không.

// Nếu number là số nguyên dương hàm sẽ return true
// Nếu number không phải số nguyên dương hàm sẽ return false


function checkPositiveInteger(number) {
    if ( number % 1 == 0 && number > 0 ) {
        return true
    } else {
        return false
    }
}