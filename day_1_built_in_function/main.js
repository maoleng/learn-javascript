//In ra hộp thoại thông báo
alert("Xin Chào")

//hàm kiểm tra, xác nhận
confirm("Bạn có đủ trên 18 tuổi ?")

//hiện ra hộp thoại, người dùng có thể nhập vào
prompt("Ngày sinh của bạn là: ")

//sau 1 khoảng thời gian thì chạy function
setTimeout(function thong_bao() {
    alert("Sau 1 giây thì in ra thông báo")
}, 1000)

//chạy function sau mỗi định kì của timeout
setInterval(function in_ra_log() {
    console.log("In ra...")
}, 1000)