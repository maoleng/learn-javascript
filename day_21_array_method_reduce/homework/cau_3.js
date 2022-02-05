// Tạo hàm getTotalAmount để tính tổng số tiền một đơn hàng.

function getTotalAmount(inputs) {
    return inputs.reduce(function(sum, each_product) {
        return sum += Object.values(each_product)[1]
    }, 0)
}