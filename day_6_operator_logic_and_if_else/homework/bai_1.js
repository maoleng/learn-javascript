// Cho trước các biến a, b, c có thể là bất kì kiểu dữ liệu gì. Sử dụng toán tử logical để giải các yêu cầu sau.

// – Nếu biến a có giá trị truthy thì gán a cho result.
// – Nếu biến a là falsy b là truthy thì gán b cho result.
// – Nếu biến a và b là falsy thì gán c cho result.


function run(a, b, c) {
    var result = a || b || c
    return result
}
