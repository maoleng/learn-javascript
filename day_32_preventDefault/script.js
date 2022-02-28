// Ví dụ về preventDefault
// Ngăn chặn không cho chuyển hướng khi ấn vào thẻ a

var a_elements = document.querySelectorAll('a')

for (var i = 0; i < a_elements.length; i++) {
    a_elements[i].onclick = function(e) {
        e.preventDefault()
        console.log(e.target)   
    }
}
    