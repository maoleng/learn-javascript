//object constructor
function person(name, age, date_of_birth) {
    this.name = name
    this.age = age
    this.date_of_birth = date_of_birth
    this.get_name = function (){
        return 'ten la ' + this.name + ' tuoi la ' + this.age
    }
}

var sinh_vien = new person('Loc', 18, '10-05')
var giao_vien = new person('Long', 26, 'xx-xx')

sinh_vien.role = "sinh vien"
giao_vien.role = "giao vien"

// object prototype
// Thêm 1 thuộc tính vào object ở ngoài constructor
person.prototype.thuoc_tinh_moi = "day la thuoc tinh moi oke"
// console.log(sinh_vien)

//đối tượng date
var day = new Date() //là 1 đối tượng
var year = day.getFullYear()
var month = day.getMonth() + 1
var date = day.getDate()
console.log(date )
