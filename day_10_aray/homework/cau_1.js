// Cho biến input có thể là array bất kì. 
//Hãy gán cho biến result có giá trị bằng giá trị của phần tử cuối cùng trong mảng input.


function getLastElementOfArray(input) {

    var len = input.length
    result = input[len-1]
    return result;
}