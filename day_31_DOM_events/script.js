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

//bắt sự kiện thay đổi input text
var text_input_element = document.querySelector('#input_text')
text_input_element.onchange = function (event) {
    //thuộc tính target trả về chính element đó
    //lấy ra value của input text
    console.log(event.target.value)
}

//bắt sự kiện Khi tick vào checkbox
var element_check_box = document.querySelector('#input_check_box')
element_check_box.onchange = function (event) {
    console.log(event.target.checked)
}

//bắt sự kiện khi thay đổi selection
var select_option = document.querySelector('select')
select_option.onchange = function (event) {
    console.log(event.target.value)
}

//bắt sự kiện khi người dùng ấn vào phím
var test_keyboard = document.querySelector('#input_test_keyboard')
test_keyboard.onkeypress = function (event) {
    if ( event.keyCode == 13 ) {
        console.log("may da nhan nut gui tin nhan")
    }
    
}
