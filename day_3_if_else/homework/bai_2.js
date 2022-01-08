// Bài toán
// Một website bán rượu chỉ cho phép người dùng truy cập nếu người dùng xác nhận đã đủ 16 tuổi. Developer phụ trách phát triển website đó đang không biết code như thế nào để kiểm tra được người dùng đã đủ tuổi chưa. Hãy giúp họ!

// Cho trước biến age là số tuổi của người dùng truy cập website.

// Yêu cầu
// Nếu người dùng chưa đủ 16 tuổi gán false cho isAccessible
// Nếu người dùng đã đủ 16 tuổi gán true cho isAccessible


function checkCanAccessible(age) {
    var isAccessible;
    
    if ( age >= 16 ) {
        isAccessible = true
    } else {
        isAccessible = false
    }

    return isAccessible;
}