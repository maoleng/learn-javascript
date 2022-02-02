// Cho trước hàm findStringsInArrayByKeyword và tham số thứ nhất có tên keyword sẽ là một chuỗi bất kỳ.

// Tham số thứ hai có tên strings sẽ là một array chứa các chuỗi bất kì, array này có định dạng như sau:

// ['hi', 'abc', 'chuỗi', '123']
// Yêu cầu
// Trong hàm cho trước, hãy trả về một array mới gồm các phần tử trong array strings có chứa giá trị của biến keyword. Trường hợp không có phần tử phù hợp trả về mảng rỗng.

// Ví dụ:

// Input: PHP, ['Javascript', 'PHP'] - Output: ['PHP']
// Input: PHP, ['Javascript', 'PHP', 'Học PHP'] - Output: ['PHP', 'Học PHP']
// Input: Gấu, ['Javascript', 'PHP'] - Output: []

function findStringsInArrayByKeyword(keyword, strings) {
    var array_return = []
    var check = strings.forEach(function(strings, index) {
        if ( strings.indexOf(keyword) != -1 ) {
            array_return.push(strings)
        }
    })
    return array_return
}
