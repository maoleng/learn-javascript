// Thêm phương thức reduce2 cho kiểu mảng, 
// logic hoạt động tương tự reduce gốc.

// input [1, 2, 3, 4].reduce2(function reducer(total, number) { return total + number })
// output 10

function reduce2(inputs) {
    var index_of_array_1 = inputs.indexOf('[')
    var index_of_array_2 = inputs.indexOf(']')
    var array = inputs.slice(index_of_array_1 + 1, index_of_array_2)
    var final_arr = array.split(', ')
    console.log(final_arr)
    return final_arr.reduce(function(sum, each_number) {
        sum += Number(each_number)
        return sum
    }, 0)
}
