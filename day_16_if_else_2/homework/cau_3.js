// Nối tiếp bài tập trước, các bạn đã biết game X của chúng ta có 3 tộc thú (ngư tộc, xà tộc, điểu tộc). Khi các tộc thú chạm trán và chiến đấu với nhau thì tùy vào map (bản đồ hoặc khu vực) và mỗi tộc thú sẽ lợi thế / yếu thế khác nhau.

// Ví dụ:

// Ngư tộc có lợi thế ở sông nước, yếu thế trên cạn
// Xà tộc lợi thế khi ở đồi núi, khu vực nhiều đất đá
// Điểu tộc lợi thế ở rừng rậm, trên bầu trời
// Bên phải màn hình là hàm tính toán lại chỉ số thú tùy vào map và thú đang có mặt.

// Cho trước biến place thể hiện thú đang có mặt ở khu vực nào:

// place có giá trị 'BIEN' là thú đang ở biển
// place có giá trị 'NUI' là thú đang trên núi
// place có giá trị 'RUNG' là thú đang trong rừng
// Cho trước các biến type thể hiện thú ở tộc nào. atk, hp, spd là các chỉ số hiện tại của thú. Hãy dựa vào place mà thú đang có mặt và tính toán lại các chỉ số của thú theo mô tả sau:

// Yêu cầu
// Ở biển
// Ngư tộc các chỉ số +10
// Mọi tộc khác các chỉ số -10
// Ở núi
// Xà tộc các chỉ số +10
// Mọi tộc khác các chỉ số -10
// Ở rừng
// Điểu tộc các chỉ số +10
// Mọi tộc khác các chỉ số -10


// Kéo xuống dưới để xem ví dụ sử dụng
// toán tử gán

const NGU_TOC = 'NGU_TOC'
const XA_TOC = 'XA_TOC'
const DIEU_TOC = 'DIEU_TOC'

const BIEN = 'BIEN'
const NUI = 'NUI'
const RUNG = 'RUNG'

/**
 * @param {string} place
 * @param {string} type
 * @param {number} atk
 * @param {number} hp
 * @param {number} spd
 */
function recalculateWithPlace(place, type, atk, hp, spd) {
    
    if ( place === BIEN ) {
        if ( type === NGU_TOC ) {
            atk += 10
            hp += 10
            spd += 10
        } else {
            atk -= 10
            hp -= 10
            spd -= 10
        }
    }
    if ( place === NUI ) {
        if ( type === XA_TOC ) {
            atk += 10
            hp += 10
            spd += 10
        } else {
            atk -= 10
            hp -= 10
            spd -= 10
        }
    }
    if ( place === RUNG ) {
        if ( type === DIEU_TOC ) {
            atk += 10
            hp += 10
            spd += 10
        } else {
            atk -= 10
            hp -= 10
            spd -= 10
        }
    }



    return [atk, hp, spd]
}

/**
 * Ví dụ sử dụng toán tử gán
 * 
 * let atk = 100
 * 
 * Để cộng thêm 50 cho atk làm như sau:
 * 
 * atk = atk + 50 // Output: 150
 * 
 * Hoặc viết ngắn gọn hơn:
 * 
 * atk += 50 (tương đương atk = atk + 50)
 * 
 * Chú ý:
 * - Hãy nhớ đọc hiểu toán tử gán từ phải qua trái
 * - Các toán tử + - * / có cách làm tương tự
 */