h1_element = document.querySelector('h1')

// Phương thức lấy ra nội dung trong thẻ 

// innerText trả về nội dung của thẻ
// không lấy tên thẻ ở trong, dấu xuống dòng
console.log(h1_element.innerText) 

// textContent trả về nội dung của thẻ
// lấy cả dấu xuống dòng và các node text trong thẻ gọi tới phương thức này
console.log(h1_element.textContent)

// cùng 1 phương thức, nhưng ta có thể set cho nội dung mới cho thẻ
// nếu set html thì nó tự quy đổi dấu < và > thành mã riêng
h1_element.textContent = "<h1>hjjj</h1>"
