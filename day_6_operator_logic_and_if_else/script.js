/*
các giá trị false:
    0
    null
    ''
    undefined
    NaN
    false
*/

var a = 5
var b = 6

var result = 'A' && 'B' && false && 'D'
//nó sẽ in ra false vì toán tử này đọc từ giá trị từ trái sang phải
//gặp một trong các giá trị false thì dừng và gán gt đó vào biến
console.log(result)

var result_2 = false|| false || false || 'C' 
//chỉ cần có 1 giá trị đúng thì nó đúng
console.log(result_2)