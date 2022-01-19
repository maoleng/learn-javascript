// Cho statusText là một biến có thể là bất cứ kiểu dữ liệu gì.

// Nếu statusText là chuỗi và có độ dài từ 1 trở lên hãy gán true cho result.
// Các trường hợp khác hãy gán false cho result.


function run(statusText) {
    if ( typeof statusText == 'string' && statusText.length >= 1) {
        result = true
        return result
    }
    result = false
    return result;
}