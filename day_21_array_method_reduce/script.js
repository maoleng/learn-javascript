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
        age: 19
    }
]

//tính tổng tuổi bằng for of
var total_age = 0
for ( each of class_info ) {
    total_age += each.age
}

// thuộc tính reduce trả về 1 giá trị
// tham số đầu tiên sẽ bị gán là undefined nếu nó ko được sử dụng ở bật kì lần lặp nào
// reduce có 2 tham số: call back function và một biến tồn tại qua các vòng lặp
// call back function có tham số là: giá trị trả về tồn tại qua các lần lặp, giá trị hiện tại của từng lần lặp, index của từng lần lặp, mảng
output = class_info.reduce(function(value_return, current_value) {
    return value_return += current_value.age
}, 0)