// Tự viết một hàm tên là multiplyNumbers, 
// hàm này sẽ được testcases tại F8 gọi và truyền đối số là một mảng gồm nhiều chữ số
// Kết quả cần đạt được là hàm multiplyNumbers sẽ trả lại 1 số là tích của toàn bộ các chữ số trong mảng đầu vào

function multiplyNumbers(array) {
    return array.reduce(function(mul, each) {
        return mul *= each
    }, 1)
}