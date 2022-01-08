// Trong game X, tại Đấu Trường Điểu Tộc chỉ cho phép thú thuộc Điểu Tộc và Xà Tộc tham gia.

// Cho trước biến type thể hiện thú thuộc tộc nào. Hãy kiểm tra xem thú có được phép tham gia Đấu Trường Điểu Tộc hay không.

// Trường hợp ĐƯỢC phép tham gia. Hãy gán true cho result
// Trường hợp KHÔNG được phép tham gia. Hãy gán false cho result
// Đấu Trường Điểu Tộc không cho phép Ngư Tộc vì Điểu Tộc không chấp bọn cá vớ vẩn :v

const NGU_TOC = 'NGU_TOC'
const XA_TOC = 'XA_TOC'
const DIEU_TOC = 'DIEU_TOC'

function checkCanJoin(type) {
    let result = false
    if(!(type=='NGU_TOC')) result=true

    return result
}
