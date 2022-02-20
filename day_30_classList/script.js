var element_box = document.querySelector('.box')

// Trong element có 1 thuộc tính là classlist 
// dùng để làm việc với các class
// Trả về 1 mảng và các class
console.log(element_box.classList)

// Từ classList có thể gọi tới các thuộc tính
// add: thêm 1 class vào element đó
// tham số: tên các class cách nhau bởi dấu phẩy
element_box.classList.add('red', 'blue')

// contains: kiểm tra xem có class đó trong element đó không
console.log(element_box.classList.contains('red'))

// remove: xóa class đó khỏi box element
element_box.classList.remove('red')

// toggle: nếu có class đó thì xóa, không có thì thêm
element_box.classList.toggle('red')