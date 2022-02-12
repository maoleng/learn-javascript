// Phương thức getElementById tìm thẻ id trong document theo tên của id
// Trả về 1 kết quả
var heading = document.getElementById('heading')
// console.log([heading])

// Phương thức getElementsByClassName tìm các thẻ trong document theo tên của class
// Trả về 1 mảng các kết quả
var headings = document.getElementsByClassName('heading')
// console.log(headings)

// Phương thức getElementsByTagName tìm các thẻ theo tên thẻ truyền vào
// Trả về 1 mảng các kết quả
document.getElementsByTagName('h1')

// Tìm giống như css selector, trả về kết quả đầu tiên tìm thấy
var query = document.querySelector('.container .sub')
// console.log(query)

// tìm giống như css selector, trả về tất cả kết quả tìm thấy dạng mảng
document.querySelectorAll('.container .sub')