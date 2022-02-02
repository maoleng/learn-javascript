// Cho trước hàm getRequestBodyFromValues và tham số formValues, các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:

// [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
//     // ...
// ]
// Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. Mỗi object chứa 2 keys là field và value.

// Yêu cầu
// Từ array formValues đã cho, hãy trả về một object có các keys tương ứng với các fields của các objects nằm trong array formValues.

// Ví dụ 1:
// Input:

// [
//     { field: 'name', value: 'Sơn Đặng' },
// ]
// Output:

// { name: 'Sơn Đặng' }
// Ví dụ 2:
// Input:

// [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
// ]
// Output:

// { name: 'Sơn Đặng', age: 18 }
// Ví dụ 3:
// Input:

// [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]
// Output:

// { name: 'Sơn Đặng', age: 18, address: 'Hà Nội' }

var object_return = {}
function getRequestBodyFromValues(formValues) {
    formValues.forEach(function a(formValues, index) {
        var key = Object.values(formValues)[0]
        var value = Object.values(formValues)[1]
        object_return[key] = value
    })
    return object_return
}