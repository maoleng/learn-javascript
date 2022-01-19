// Cho trước biến title và description là các chuỗi có nội dung bất kì.

// Nếu cả hai biến cho trước giá trị đều có chứa chuỗi Javascript thì gán true cho result.
// Trường hợp khác gán false cho result.


function run(title, description) {
    if ( title.indexOf('Javascript') !== -1  && description.indexOf('Javascript') !== -1 ) {
        result = true
        return result
    }
    result = false
    return result
}