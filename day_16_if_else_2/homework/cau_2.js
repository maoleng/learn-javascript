// Trong một game X có 3 tộc thú (ngư tộc, xà tộc, điểu tộc), tuân theo một cơ chế tương khắc trong thuyết ngũ hành, không tộc nào là mạnh hoàn toàn. Mỗi thú trong tộc có các chỉ số mạnh yếu khác nhau.

// Ví dụ:

// Bạch tuộc, Cá mập thuộc Ngư tộc
// Rắn, Trăn thuộc Xà tộc
// Đại bàng, Cú mèo thuộc Điểu tộc
// Cho trước biến type thể hiện thú thuộc tộc nào. Giá trị của biến type này có thể là một trong các giá trị sau:

// Giá trị 'NGU_TOC' là thú thuộc Ngư tộc
// Giá trị 'XA_TOC' là thú thuộc Xà tộc
// Giá trị 'DIEU_TOC' là thú thuộc Điểu tộc
// Bên phải màn hình là hàm khởi tạo các chỉ số ban đầu cho thú. Hãy kiểm tra tộc của thú và đặt các chỉ số mặc định cho thú như sau:

// #	Ngư tộc	Xà tộc	Điểu tộc
// atk	100	200	300
// hp	200	300	100
// spd	300	100	200

const NGU_TOC = 'NGU_TOC'
const XA_TOC = 'XA_TOC'
const DIEU_TOC = 'DIEU_TOC'
/*
 * Mình định nghĩa 3 constants trên với mục đích
 * để các bạn không phải gõ lại chữ khi so sánh
 * 
 * Ví dụ:
 * - Thay vì: if (type === 'NGU_TOC')
 * - Hãy: if (type === NGU_TOC)
*/

/** @param {string} type */
function initMonster(type) {
    // Có thể khai báo nhiều biến một lúc
    // mỗi biến cách nhau bởi dấu phẩy (,)
    let atk, hp, spd
    if ( type === NGU_TOC ) {
        atk = 100
        hp = 200
        spd = 300
    } else if ( type === XA_TOC ) {
        atk = 200
        hp = 300
        spd = 100
    } else if ( type === DIEU_TOC) {
        atk = 300
        hp = 100
        spd = 200
    }
    return [atk, hp, spd]
}

