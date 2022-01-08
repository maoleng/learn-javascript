// Bài tập
// Cho trước 2 biến a và b có kiểu dữ liệu bất kì. Hãy kiểm tra đảm bảo cả a và b đều là số rồi thực hiện gán tổng của a và b cho result.

function sum(a, b) {
    let result
    x= typeof a;
    y= typeof b;
    if( x== 'number' && y== 'number' ) {
        result=a+b;
    }
    return result
}
