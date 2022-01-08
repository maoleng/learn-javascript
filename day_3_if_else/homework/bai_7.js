// Tại F8, bạn có thể bấm Thích một bình luận bất kì nếu bạn đã đăng nhập với tư cách thành viên. Hãy giúp mình kiểm tra xem một người có thể thích bình luận trên F8 hay không nhé.

// Cho trước biến isAuthenticated là kiểu boolean thể hiện người dùng đã đăng nhập hay chưa. Khi biến này có giá trị true là người dùng đã đăng nhập, ngược lại biến có giá trị false thì người dùng chưa đăng nhập.

// Cho biến role thể hiện vai trò của người dùng trên F8. Với role là 'member' thì người dùng có vai trò thành viên, role là 'admin' thì người dùng là quản trị viên. Trong trường hợp role có giá trị '' thì người dùng chưa có vai trò trên F8.

// Bài tập
// Khi người dùng đã đăng nhập và người dùng có vai trò là thành viên hoặc quản trị viên hãy gán giá trị true cho biến result để thể hiện người dùng có quyền bấm Thích.
// Các trường hợp khác hãy gán false cho result thể hiện người dùng không có quyền bấm Thích.

function votableCheck(isAuthenticated, role) {
    var result;

    if ( isAuthenticated == true && ( role == 'admin' || role == 'member' ) ) {
        result = true
        return result;
    }
    if ( isAuthenticated == false && ( role == 'admin' || role == 'member' ) ) {
        result = false
    }else {
        result = false
    }

    return result;
}