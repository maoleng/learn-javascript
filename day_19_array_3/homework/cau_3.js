// Cho hàm hasFreeCourses để kiểm tra một danh sách khóa học có khóa học nào miễn phí hay không.

// Cho biến courses là tham số của hàm trên, biến này là một array chứa nhiều object đại diện cho khóa học có định dạng như sau:

// [
//     { name: 'Javascript', vnd: 1000000 },
//     { name: 'PHP', vnd: 990000 },
//     { name: 'HTML, CSS', vnd: 0 }
//     // ...
// ]
// Yêu cầu
// Hàm hasFreeCourses sẽ trả về true nếu đối số truyền vào có chứa khóa học miễn phí
// Hàm hasFreeCourses sẽ trả về false nếu đối số truyền vào không chứa khóa học miễn phí

function hasFreeCourses(courses) {
    var check = courses.some(function(courses, index) {
        return courses.vnd == 0
    })
    return check
}