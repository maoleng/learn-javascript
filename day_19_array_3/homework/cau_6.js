// Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra các giá trị bằng nhau giữa hai array.

// Yêu cầu
// Tạo hàm findEqualValues có hai tham số là array1 và array2 (Hai tham số này sẽ được test case tại F8 truyền đối số là các array chứa nhiều các giá trị số hoặc chuỗi bất kì).
// Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm findEqualValues sẽ trả về mảng mới chứa các giá trị đó (mỗi giá trị là một phần tử trong array mới)
// Trường hợp không có giá trị bằng nhau giữa hai tham số thì hàm trả về array rỗng []
// Ví dụ:

// Input: [1, 2, 6, 8], [2, 9, 6] - Output: [2, 6]
// Input: [1, 2, 3], [2, 9, 6] - Output: [2]
// Input: [1, 2, 3], [4, 5, 6, 7, 8] - Output: []
// Input: ['Gấu'], ['Lan', 'Hằng', 'Linh', 'Trang', 'Con gái'] - Output: []

function findEqualValues(array1, array2) {
    var array_return = []
    array1.forEach(function(array1, index1) {
        array2.forEach(function(array2, index2) {
            if ( array1 === array2 ) {
                array_return.push(array1)
            }
        })        
    })
    return array_return
}