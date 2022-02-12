// Cho trước DOM có cấu trúc HTML như sau:

// <ul class="parent">
//     <li>"Cày" JS DOM tại F8</li>
//     <li>"Cày" JS DOM tại F8</li>

//     <ul>
//         <li>"Cày" JS DOM tại F8</li>
//         <li>"Cày" JS DOM tại F8</li>

//         <ul>
//             <li>"Cày" JS DOM tại F8</li>
//             <li>"Cày" JS DOM tại F8</li>
//         </ul>
//     </ul>
// </ul>
// Yêu cầu
// Get list elements li là con trực tiếp của ul thứ nhất và lưu vào biến listItems1
// Get list elements li là con trực tiếp của ul thứ hai và lưu vào biến listItems2
// Get list elements li là con trực tiếp của ul thứ nhất và ul thứ hai sau đó lưu vào biến listItems3

var listItems1 = document.querySelectorAll('.parent > li')
var listItems2 = document.querySelectorAll('.parent > ul > li')
var listItems3 = document.querySelectorAll('.parent > li, .parent > ul > li')