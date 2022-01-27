// Viết hàm calculateTriangleArea để tính diện tích tam giác. 
// Hàm này nhận hai tham số là a (cạnh đáy), h (chiều cao) 
// hàm sẽ trả về giá trị là diện tích của tam giác được tính từ hai tham số đã cho. 
// a và h sẽ được truyền các giá trị số nguyên bất kì từ hệ thống test case.

function calculateTriangleArea(a, h) {
    if ( a % 1 == 0 && a > 0 & h % 1 == 0 && h > 0 ) {
        return (a * h) / 2
    }
    return false
}
