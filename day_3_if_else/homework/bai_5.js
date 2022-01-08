// Bài tập
// Cho trước biến number có giá trị số ngẫu nhiên trong các số sau: 3, 5, 15

// Yêu cầu
// Nếu number chia hết cho 3 thì gán 'f' cho result
// Nếu number chia hết cho 5 thì gán 8 cho result
// Nếu number chia hết cho 15 gán 'f8' cho result


function run(number) {
    let result

    if ( number % 3 == 0 ) {
        result = 'f'
    } 
    if ( number % 5 == 0 ) {
        result = 8
    } 
    if ( number % 15 == 0 ) {
        result = 'f8'
    } 
    
    
    return result
}