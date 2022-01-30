// Viết hàm getDifferentSeconds trả về different seconds giữa 2 mốc thời gian. Hàm nhận 2 đối số là date string có format tương tự 2020/06/31 16:00:00.

// Ví dụ:

// Input: '2020/06/31 16:00:00', '2020/06/31 16:00:10' - Output: 10
// Input: '2020/06/31 16:00:00', '2020/08/01 12:00:00' - Output: 2664000

function getDifferentSeconds(aTime, bTime){
    var a = new Date(aTime)
    var b = new Date(bTime)
    var timestampa = Math.floor(a.getTime()/1000)
    var timestampb = Math.floor(b.getTime()/1000)
    return timestampb - timestampa
}