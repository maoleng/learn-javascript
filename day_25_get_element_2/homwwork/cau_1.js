// Cho trước DOM có cấu trúc HTML như sau:

// <div class="box">
//     <div class="children">Children</div>
//     <div class="children">Children</div>
// </div>
// Yêu cầu
// Get element có class box và lưu vào biến boxElement
// Từ biến boxElement get elements có class children lưu vào biến childrenElements

var boxElement = document.querySelector('.box')
var childrenElements = boxElement.querySelectorAll('.children')