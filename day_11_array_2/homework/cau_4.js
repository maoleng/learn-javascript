// Cho biến animals là mảng chứa tên các loài động vật. Hãy thêm tên các loài động vật khác vào mảng animals tuân thủ theo các yêu cầu sau:

// Nếu mảng không có phần tử nào, hãy thêm hai phần tử Cat, Mouse vào mảng
// Nếu mảng có một phần tử, hãy thêm phần tử Elephant vào đầu mảng
// Nếu mảng có trên hai phần tử, hãy xóa phần tử thứ hai đi và thêm hai phần tử Monkey, Tiger vào vị trí đã xóa



function run(animals) {

    if ( animals.length == 0 ) {
        animals.push('Cat', 'Mouse')
    }
    if ( animals.length == 1 ) {
        animals.unshift('Elephant')
    }
    if ( animals.length > 2 ) {
        animals.splice(1, 1, 'Monkey', 'Tiger')

    }

    return animals;
}