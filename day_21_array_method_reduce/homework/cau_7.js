// Cho trước biến courses có định dạng như sau:

// [
//     { name: 'Javascript', coin: 1000 },
//     { name: 'PHP', coin: 1200 },
//     { name: 'Dart', coin: 1400 }
// ]
// Yêu cầu
// Trả về tổng coin của toàn bộ các khóa học

function run(courses) {
    return courses.reduce(function(total, each_course) {
        return total += each_course.coin
    }, 0)
}