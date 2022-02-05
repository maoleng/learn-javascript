// Cho trước tham số grades là một mảng chứa các điểm số. Hãy viết logic tính tổng số điểm trong hàm cho trước.

// Lưu ý
// Hãy quan sát testacses để biết được tham số đầu vào và kết quả cần đạt được.

// Ví dụ:

// // Giá trị của biến grades khi
// // testcase này gọi hàm getSumOfGrades
// Input: [10, 5, 15, 20]

// // Kết quả kì vọng hàm
// // getSumOfGrades sẽ trả về
// Expect: 50
// Từ quan sát trên bạn hãy viết nội dung hàm getSumOfGrades sao cho khi đối số là [10, 5, 15, 20] thì kết quả trả về là 50 thì bạn sẽ vượt qua được testcase này.

function getSumOfGrades(grades) {
    return grades.reduce(function(total_point, grade) {
        return total_point += grade
    }, 0)
}
