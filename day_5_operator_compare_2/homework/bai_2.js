// Kiểm tra biến bonusPoint có phải chứa giá trị là 50 hay không. Nếu đúng gán true cho result, sai gán false cho result. Vẫn là bài toán trước, nhưng hãy viết code ngắn gọn hơn.

// Gợi ý: Toán tử so sánh sẽ trả về kết quả có kiểu dữ liệu boolean.


function run(bonusPoint) {
    var result
    
    if ( bonusPoint === 50 ) {
        result = true
    } else {
        result = false
    }
    
    return result;
}