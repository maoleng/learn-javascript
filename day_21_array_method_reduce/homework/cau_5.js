// làm phẳng mảng

array = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

new_array = array.reduce(function(flat_array, each_element){
    return flat_array.concat(each_element)
}, [])
console.log(new_array)