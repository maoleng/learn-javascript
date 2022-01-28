// Viết hàm checkExistIdol để kiểm tra xem có idol của bạn trong danh sách idols không. 
// Anh em tự quan sát mô tả của testcases mà làm bài nhé :v

function checkExistIdol(idol_array, idol_check) {
    for ( idol of idol_array ) {
        if ( idol == idol_check) {
            return true
        }
    }
    return false
}