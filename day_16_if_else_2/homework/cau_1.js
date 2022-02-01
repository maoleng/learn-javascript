// Cho trước biến number có giá trị số ngẫu nhiên trong các số sau: 3, 5, 15

// Yêu cầu
// Nếu number chia hết cho 3 thì trả về chuỗi f
// Nếu number chia hết cho 5 thì trả về số 8
// Nếu number chia hết cho 15 thì trả về chuỗi f8

function run(number) {
    if ( number % 15 === 0 ) {
        return 'f8'
    } else if ( number % 5 === 0 ) {
        return 8
    } else if ( number % 3 === 0 ) {
        return 'f'
    }
}