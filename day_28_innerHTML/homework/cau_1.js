// Kết quả của bạn:
// <div>
//     <ul><li>a</li><li>b</li><li>c</li></ul>
// </div>

// <!-- div 2  -->
// <div>
//     <ul></ul>
// </div>
// a
// b
// c
// Bài tập
// Cho trước DOM có cấu trúc HTML như sau:

// <!-- div 1 -->
// <div>
//     <ul></ul>
// </div>

// <!-- div 2  -->
// <div>
//     <ul></ul>
// </div>
// Yêu cầu
// Thêm 3 thẻ li có nội dung text tùy ý vào thẻ ul trong div 1
// Thay thế nội dung HTML của div 2 bằng thẻ h1 có nội dung text tùy ý

ul_element = document.querySelector('div > ul')
ul_element.innerHTML = "<li>a</li><li>b</li><li>c</li>"

document.querySelectorAll('div')[1] = '<h1>abcabc</h1>'