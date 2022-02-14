var heading_element = document.querySelector('h1')

//Thêm 1 attribute vào element
// setAttribute('tên attribute', 'giá trị attribute')
heading_element.setAttribute('href', 'gooogle.com')
heading_element.setAttribute('style', 'color: red; font-size: 100px')


//Lấy ra value của attribute
var href = heading_element.getAttribute('href')
console.log(href)