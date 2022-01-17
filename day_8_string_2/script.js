var string = "    Xin chao Mao Leng chao chao     "

//1. Độ dài chuỗi
//console.log(string.length)

//2. Tìm chuỗi con trong chuỗi mẹ
//trả về: vị trí đầu tiên tìm thấy
//console.log(string.indexOf('chao'))

//tìm chuỗi con trong chuỗi mẹ, bắt đầu từ 1 vị trí
//thêm tham số thứ 2 là vị trí bắt đầu tìm
//console.log(string.indexOf('chao', 5))

//tìm chuỗi con trong chuỗi mẹ, từ phải sang trái
//console.log(string.lastIndexOf('chao'))

//không tìm được thì trả về -1
//console.log(string.indexOf('abc'))

//hàm tìm kiếm sử dụng regex
//console.log(string.search('[a-z]'))

//2. Cắt chuỗi
//hàm trả về 1 chuỗi con sau khi cắt ra
//console.log(string.slice(9,18))
//console.log(string.slice(9))

//cắt ngược: đếm từ phải sang trái, index là 0; -1; -2; -3....
//console.log(string.slice(-4))

//3. Thay thế chuỗi trong chuỗi
//trả về chuỗi mới sau khi thay thế
//console.log(string.replace('chao', 'hello'))

//4. Viết hoa
//console.log(string.toUpperCase())

//5. Viết thường
//console.log(string.toLowerCase())

//6. Xóa khoảng trắng 2 bên
//console.log(string.trim())

//7. Cắt chuỗi bởi 1 kí tự, cho vào mảng
//trả về 1 mảng, các phần tử được ngăn cách bởi kí tự truyền vào
//console.log(string.split(' '))

//8. Lấy kí tự từ index truyền vào
//trả về 1 kí tự
//console.log(string.charAt(5))

//index không có thì trả về chuỗi rỗng ''

