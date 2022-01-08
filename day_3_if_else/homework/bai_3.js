// Bài tập
// Cho trước 2 biến:

// userCoin - Số tiền user có
// bookPrice - Giá của cuốn sách
// Hãy kiểm tra xem user có đủ tiền để mua sách không, nếu đủ tiền hãy gán 'Đủ tiền' cho result
// Trong trường hợp không đủ tiền hãy gán 'Thiếu tiền' cho result.

function run(userCoin, bookPrice) {
    let result = 'Thiếu tiền'
    
    if ( userCoin >= bookPrice ) {
        result = 'Đủ tiền'
    }

    return result
}