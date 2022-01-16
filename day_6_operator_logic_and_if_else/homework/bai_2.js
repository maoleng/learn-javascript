// Cho trước các biến sau:

// phone - Số điện thoại
// email - Địa chỉ email
// address - Địa chỉ nhà
// Các thông tin trên lấy được do user nhập vào một biểu mẫu (form) trên website. Trong ví dụ này user luôn chỉ nhập 1/3 trường (phone hoặc email hoặc address) và chúng ta không biết trước user sẽ nhập trường nào.

// Hãy sử dụng toán tử logical để lưu giá trị của trường mà user nhập vào biến result.

function run(phone, email, address) {
    const result = phone || email || address

    return result
}