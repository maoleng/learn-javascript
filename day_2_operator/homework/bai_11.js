// Giả sử để có quyền bầu cử bạn cần ít nhất 18 tuổi. 
// Hãy hoàn thành điều kiện để kiểm tra age có đủ điều kiện để tham gia bầu cử không.

function run(bookCoin, userCoin) {
    if ( bookCoin <= userCoin ) {
        return 'Bạn có thể mua cuốn sách này!';
    } else {
        return 'Bạn không thể mua cuốn sách này!';
    }
}