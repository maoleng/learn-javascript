var my_info = {
    name: 'Mao Leng',
    age: 18,
    address: 'Phu Yen'
}
console.log(my_info)

//Thêm 1 cặp key và value mới vào object
my_info.email = "feature451@gmail.com"
my_info['my-email'] = "feature452@gmail.com"
console.log(my_info)

//In ra value của một key
console.log(my_info.name)
console.log(my_info['address'])

//tìm value của key khi key là biến
var my_key = 'address'
console.log(my_info[my_key])

//truyền key vào object
var email = 'email'
var my_info_2 = {
    name: 'Loc',
    [email]: 'feature453@gmail.com'
}
console.log(my_info_2)

//xóa key trong object
delete my_info_2.name
console.log(my_info_2)

//function trong object
var my_info_3 = {
    name: 'Huu Loc',
    get_name: function() {
        return this.name
    }
}
console.log(my_info_3.get_name)
//names sẽ được gọi là key -> property
//get_name được gọi là phương thức -> method
