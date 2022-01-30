// Viết hàm getCurrentTimestamp trả về timestamp hiện tại.

function getCurrentTimestamp() {
    var timestamp = new Date();
    return timestamp = Math.floor(Date.now() / 1000);
}
