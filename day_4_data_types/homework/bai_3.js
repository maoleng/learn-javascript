// Kiểm tra biến input có phải là chuỗi hay không.
//Là chuỗi thì gán true cho output, không phải là chuỗi thì gán false cho output.



function run(input) {
    var output;
    if ( typeof input == "string" ) {
        output = true
    } else {
        output = false
    }
    return output;
}