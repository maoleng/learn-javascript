// Cho biến anArray là mảng bất kì.

// Nếu mảng có ít hơn 3 phần tử thì hãy xóa một phần tử đầu mảng đi
// Nếu mảng có nhiều hơn 2 phần tử thì hãy xóa hai phần tử cuối mảng đi
// Ví dụ:

// Input: [10] - Output: []
// Input: [6, 8] - Output: [8]
// Input: [1, 2, 3, 4] - Output: [1, 2]


function run(anArray) {

    if ( anArray.length < 3 ) {
        anArray.shift()
    }
    if ( anArray.length > 2 ) {
        anArray.pop()
        anArray.pop()
    }

    return anArray
}