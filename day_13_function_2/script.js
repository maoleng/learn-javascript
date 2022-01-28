// //Trả về trong hàm
var check_confirm = confirm("Bạn chắc không ?")
console.log(check_confirm)

//Ví dụ, trả về giá trị trong dòng return và kết thúc chương trình ngay đó
function cong(a, b) {
    return a + b
}
cong(5, 10)

//các loại function
//declare function
function xin_chao() {
    console.log('Xin chao cac ban')
}

//expression function
var xin_chao = function() {
    console.log('xin chao cac ban')
}