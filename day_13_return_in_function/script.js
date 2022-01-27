// //Trả về trong hàm
// var check_confirm = confirm("Bạn chắc không ?")
// console.log(check_confirm)

// //Ví dụ, trả về giá trị trong dòng return và kết thúc chương trình ngay đó
// function cong(a, b) {
//     return a + b
// }
// cong(5, 10)


function checkExistIdol(idol_array, idol_name) {
    for ( idol of idol_array ) {
        if ( idol == 'Maria Ozawe') {
            return idol
        }
        return true
    }
}

a = checkExistIdol(['Nguyen Van A', 'Tran Van B'], 'Megu Fujiure')
console.log(a)