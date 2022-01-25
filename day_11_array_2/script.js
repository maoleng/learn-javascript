var languages = [
    "HTML",
    "CSS",
    "Javascript",
    "PHP",
    "MySQL"
]

//Chuyển array sang chuỗi
// console.log(languages.toString())

//Chuyển sang chuỗi và ngăn cách bởi 1 kí tự
// console.log(languages.join(' - '))

//Xóa phần tử cuối mảng và trả về phần tử mảng đã xóa
// console.log(languages.pop())
// console.log(languages)

//Xóa phần tử đầu mảng và trả về phần tử mảng đã xóa
// console.log(languages.shift())
// console.log(languages)
//Xóa hết sẽ trả về undefined

//Thêm 1 phần tử vào cuối mảng; trả về số phần tử của mảng
// console.log(languages.push('SQL Sever', 'AutoIT'))
// console.log(languages)

//Thêm 1 phần tử vào đầu mảng; trả về số phần tử của mảng
// console.log(languages.unshift('SQL Sever', 'AutoIT'))
// console.log(languages)

//Hàm xóa phần tử trong mảng, tham số 1: index, tham số 2: số phần tử sẽ xóa
// languages.splice(1,2)
// console.log(languages)

// thay vì xóa, ta có thể dùng hàm đó để chèn phần tử vào 
//tham số 1: index; tham số 2: 0; tham số 3: nội dung muốn chèn vào
// languages.splice(2, 0, 'test thu chen duong khong')
// console.log(languages)

//kết hợp cả 2; xóa rồi chèn vào 
// languages.splice(2, 1, 'JS')
// console.log(languages)

//Ghép 2 mảng lại
// languages_2 = ["AutoHotKey", "C", "C++", "C#"]
// console.log(languages.concat(languages_2))

//Hàm cắt mảng, trả về 1 mảng đã cắt ra, giống hàm stringmid trong au3
// console.log(languages.slice(1,3))
