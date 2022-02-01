// Sử dụng toán tử 3 ngôi (Ternary operator) để giải bài tập sau:

// Cho trước biến a là giá trị bất kì

// Nếu a là số nguyên thì hàm trả về số a
// Nếu a không phải số nguyên thì trả về giá trị được làm tròn dưới của a
// Trong bài này giá trị của a luôn là một số nên không cần kiểm tra kiểu dữ liệu của a

// Ví dụ
// Input: 6 - Output: 6
// Input: 2 - Output: 2
// Input: 8.4 - Output: 8
// Input: 6.8 - Output: 6
// Input: 9.9 - Output: 9

function run(a) {
    return a % 1 == 0 ? a : Math.floor(a)
}
