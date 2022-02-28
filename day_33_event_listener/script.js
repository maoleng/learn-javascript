var btn_element = document.querySelector('#btn')
function console_when_click() {
    console.log('click 1')
}
function console_when_click_2() {
    console.log('click 2')
}

// Phương thức addEventListener có 2 đối số truyền vào: Hành động và hàm khi hành động ấy xảy ra
// Dùng phương thức này thay vì dùng onclick vì có thể gọi 2 hàm 1 lúc 
// và có thể xóa listener bằng hàm removeEventListener

btn_element.addEventListener('click', console_when_click)
btn_element.addEventListener('click', console_when_click_2)