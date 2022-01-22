// Cho biến couldBeAnything có thể là bất cứ kiểu dữ liệu gì.
// Hãy kiểm tra nếu biến cho trước là array thì gán true cho result. 
// Các trường hợp khác gán false cho result.


function checkIsArray(couldBeAnything) {

    result = Array.isArray(couldBeAnything)
    return result;
}