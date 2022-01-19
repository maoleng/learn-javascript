// Cho trước biết statusText có giá trị là chuỗi bất kì, biến này là tượng trưng cho giá trị người dùng nhập vào khi đăng status lên trang cá nhân - nội dung status của người dùng viết sẽ được lưu vào biến này.

// Vì là dữ liệu người dùng tự nhập nên đôi khi họ sẽ viết thừa những khoảng trắng (dấu space) ở trước hoặc sau nội dung chính. Việc này đôi khi gây ra những vấn đề / bug trong ứng dụng của chúng ta.

// Yêu cầu: Hãy loại bỏ khoảng trắng thừa ở phía trước và sau nội dung của biến statusText


function trimText(statusText) {
    a = statusText.trim()
    return a
}