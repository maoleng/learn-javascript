// Callback là 1 function, là 1 đối số của 1 hàm
function my_function (param) {
    // Lúc này param là hàm this_is_call_back
    param('1234 hello')
}
function this_is_call_back(param) {
    console.log('value of callback is: ' +  param)
}
// my_function(this_is_call_back)



// Viết lại map2 giống map 1
// do map là 1 phương thức
Array.prototype.map2 = function(param_function) {
    var i, array_to_return = []
    for (i = 0; i < this.length; i++) {
        // param_function lúc này là tham số trong map2
        param_function(this[i], i)
        array_to_return.push(this[i])
    }
    return array_to_return
}

my_array = ['PHP', 'Javascript', 'Laravel']
my_array_2  = [1, 2, 3, 4, 5,6 ,7,8,9 ]
// a = my_array.map2(function(each, index) {
//     console.log(index + '-' + each)
// })
// console.log(a)