// Viết hàm kiểm tra một chuỗi có nằm trong một chuỗi khác hay không. Đặt tên hàm này là stringInString, hàm có hai tham số lần lượt là needle (chuỗi muốn tìm) và haystack (chuỗi gốc, giá trị của needle sẽ được tìm xem có tồn tại trong haystack hay không)

// Yêu cầu:

// Tạo hàm stringInString theo mô tả trên
// Nếu needle được tìm thấy trong haystack hàm sẽ trả về true
// Nếu không tìm thấy needle trong haystack hàm sẽ trả về false
// Nếu một trong các giá trị đầu vào không phải chuỗi hàm sẽ trả về false

function stringInString(needle, haystack) {
    if ( typeof needle == 'string' && typeof haystack == 'string' ) {
        if ( haystack.indexOf(needle) == -1 ) {
            return false
        }
        return true
    }
    return false
}