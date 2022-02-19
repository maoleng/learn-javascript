var element_box = document.querySelector('.box')

console.log(element_box.style)
// trả về 1 object có tên các phần tử css

// gọi tới phần tử đó và set giá trị
element_box.style.width = '200px'
element_box.style.height = '200px'
element_box.style.backgroundColor = 'red'

// chỉnh sửa css bằng js
// dùng hàm assign trong đối tượng object, hàm thay đổi object
// tham số 1 là object style (cũ) , tham số thứ 2 là object css tùy chỉnh
Object.assign(element_box.style, {
    backgroundColor: 'yellow',
    width: '400px',
    height: '100px'
})