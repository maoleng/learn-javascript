// Tạo hàm tính tổng hai số a và b:

// Tạo hàm sum và định nghĩa hai tham số a và b
// Trong trường hợp giá trị của a và b hợp lệ để thực hiện phép tính thì return tổng của a và b
// Trường hợp a và b không hợp lệ để thực hiện phép tính thì return false

function sum(a, b) {
    if ( isNaN(a) == true || isNaN(b) == true) {
        return false
    }
    if ( typeof a == 'number' && typeof b == 'number') {
        return a + b
    }
    return false
}