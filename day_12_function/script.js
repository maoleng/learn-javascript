//Tạo hàm và gọi hàm
function show_dialog() {
    alert('hi xin chao cac ban')
}
// show_dialog()

//Hàm có tham số
function write_log(message) {
    console.log('day la 1 dong log: ' + message)
}
write_log('xin chao cac ban')

//Vòng for òf
function vong_for_of() {
    var my_string = ''
    for ( var parameter of arguments ) {
        my_string += parameter
        my_string += ' - '
    }
    console.log(my_string)
}

vong_for_of('xin', 'chao', 'cac', 'ban')