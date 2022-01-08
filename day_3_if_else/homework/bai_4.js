// Bài tập
// Cho trước biến gender có ngẫu nhiên các giá trị nằm trong các giá trị sau: 'male', 'female', 'other'.

// Hãy kiểm tra giá trị của gender và gán cho result giá trị tương ứng như ví dụ dưới đây:

// Ví dụ:

// Input: 'male' - Output: 'Nam'
// Input: 'female' - Output: 'Nữ'
// Input: 'other' - Output: 'Khác'


function run(gender) {
    let result

    if ( gender == 'male') {
        result = 'Nam'
    } 
    if ( gender == 'female') {
        result = 'Nữ'
    }
    if ( gender == 'other') {
        result = 'Khác'
    }

    return result
}