// Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:


// Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseFloat('50') //50

//Chuyển đổi chuỗi đã cho thành một số nguyên
Number.parseInt('60') //60

//Chuyển đổi số thành chuỗi
var numberObject = 50
a = numberObject.toString()
console.log(typeof a)


//Làm tròn số
var number = 1234.5678

number.toFixed() //1235
number.toFixed(5) // 1234.56780

