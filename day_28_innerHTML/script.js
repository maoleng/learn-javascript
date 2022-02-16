var box = document.querySelector('.header')


// ---innerHTML là lấy trong box
// Viết html vào
// Có thể truyền cả attribute
box.innerHTML = '<h1 style="font-size:100px ">cascsa</h1>'

// Lấy html ra
// trả về string có cả node element attribute text
console.log(box.innerHTML)


// ---outerHTML là lấy cả box và trong box
box.outerHTML = '<h3>MaoLeng</h3>'
