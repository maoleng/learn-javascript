// Cho trước cấu trúc DOM từ mã HTML sau:

// <div class="container">
//     <div class="box">
//         <ul>
//             <li class="item">F8 lý thuyết</li>
//             <li class="item">F8 bài tập</li>
//             <li class="item">F8 thực hành</li>
//         </ul>
//     </div>
//     <div class="box">
//         <ul>
//             <li class="item">Kiền trì</li>
//             <li class="item">Học mỗi ngày</li>
//             <li class="item">Tin vào bản thân</li>
//         </ul>
//     </div>
// </div>
// Yêu cầu
// Get elements box và lưu vào biến boxHTMLCollection
// Lấy element box thứ nhất lưu vào biến box1Element
// Lấy element box thứ hai lưu vào biến box2Element
// Get tất cả li và lưu vào biến allItemElements
// Get tất cả li là con của box thứ nhất và lưu vào biến box1ItemElements
// Get tất cả li là con của box thứ hai và lưu vào biến box2ItemElements

let boxHTMLCollection = document.getElementsByClassName("box");
let box1Element = document.querySelector(".box");
let box2Element = document.querySelector(".box:nth-child(2)");
let allItemElements = document.getElementsByTagName("li");
let box1ItemElements = document.querySelectorAll(".container .box:first-child li");
let box2ItemElements = document.querySelectorAll(".container .box:nth-child(2) li");