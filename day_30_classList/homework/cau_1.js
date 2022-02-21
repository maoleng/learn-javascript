// Bài tập
// Cho DOM từ cấu trúc HTML sau:

// <h1>Học JS DOM tại F8</h1>
// <h2 class="test">Làm bài tập JS tại F8</h2>
// Yêu cầu
// Thêm class first-heading vào thẻ h1
// Thêm class second-heading vào thẻ h2
// Xóa bỏ class test tại thẻ h2

var element_h1 = document.querySelector('h1')
element_h1.classList.add('first-heading')

var element_h2 = document.querySelector('h2')
element_h2.classList.add('second-heading')

element_h2.classList.remove('test')
