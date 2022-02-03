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

//điều chỉnh mảng chứa object mới
function handle_class_info(each_student) {
    return {
        id: each_student.id,
        name: 'ten la ' + each_student.name,
        age: each_student.age,
        age_in_text: 'tuoi la ' + each_student.age
    }
}
new_class_info = class_info.map(handle_class_info)


//lấy ra tên học sinh lưu vào mảng
new_class = class_info.map(function(each_student) {
    return each_student.name
})