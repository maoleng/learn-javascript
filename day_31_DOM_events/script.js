var element_box = document.querySelector('.box')

// bắt sự kiện click chuột bằng hàm click
// xem các sự kiện khác tại dom w3school
element_box.onclick = function() {
    console.log('xin chao')
}

// giả sử có nhiều element
var element_boxs = document.querySelectorAll('.box')

for (var i = 0; i < element_boxs.length; i++) {
    // tham số event là hành động khi click vào

    element_boxs[i].onclick = function(event) {
        console.log(event.target)
    }
}