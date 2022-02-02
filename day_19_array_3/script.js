class_info = [
    {
        id: 1,
        name: 'Loc',
        age: 18
    },
    {
        id: 2,
        name: 'Kim',
        age: 18
    },
    {
        id: 3,
        name: 'Duy',
        age: 18
    },
    {
        id: 4,
        name: 'Kim',
        age: 18
    },
    {
        id: 5,
        name: 'Kim',
        age: 18
    }
]

// --------------------------------
// Vòng forEach duyệt từng phần tử mảng có 2 tham số tên của array và index
// class_info.forEach(function(class_info, index) {
//     console.log(index+ ' ' + class_info)
// })
// --------------------------------
// Vòng every duyệt từng phần tửng mảng và kiểm tra điều kiện
// khi có 1 điều kiện sai thì trả về false
// var every = class_info.every(function( class_info, index ) {
//     return class_info.age >= 17
// })
// console.log(every)
// --------------------------------
// Vòng some duyệt từng phẩn tử mảng và kiểm tra điều kiện
// khi có 1 điều kiện đúng thì trả về đúng
// var some = class_info.some(function(class_info, index) {
//     return class_info.name === 'Duy'
// })
// console.log(some)
// --------------------------------
// Vòng find duyệt từng phần tử trong mảng và tìm kiếm
// nếu tìm thấy thì trả về phần tử đó (phần tử đầu tiên)
// var find = class_info.find(function(class_info, index) {
//     return class_info.id == 1
// })
// console.log(find)
// --------------------------------
// Vòng filter duyệt từng phần tử trong mảng và tìm kiếm
// Tìm thấy thì trả về phần tử đó, 
// tìm thấy nhiều phần tử thì trả về 1 mảng chứa kết quả
// var filter = class_info.filter(function(class_info, index) {
//     return class_info.name == 'Kim'
// })
// console.log(filter)
