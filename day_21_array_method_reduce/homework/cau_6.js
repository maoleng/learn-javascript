// nối tên của lớp vào trong 1 mảng

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

a =  class_info.reduce(function(class_name, each_student) {
    return class_name.concat(each_student.name)
}, [])
console.log(a)