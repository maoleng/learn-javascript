// Cho trước biến monsters là một danh sách các con thú trong game có định dạng như sau:

// [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180,
//     },
//     // ...
// ]
// Yêu cầu
// Tìm thú có chỉ số attack bằng 150 và trả về thú đó trong hàm findAMonsterByAttack đã cho trước (Trả về thú đầu tiên tìm được)
// Trường hợp trong danh sách monsters không có thú phù hợp thì hàm findAMonsterByAttack trả về null
// Ví dụ 1:

// Input:
// [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180
//     }
// ]
// Output:
// {
//     name: 'Khủng long',
//     attack: 150,
//     speed: 80,
//     hitpoint: 180
// }
// Ví dụ 2:

// Input:
// [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100
//     }
// ]
// Output:
// null

function findAMonsterByAttack(monsters) {
    var check = monsters.find(function(monsters, index) {
        return monsters.attack === 150
    })
    if ( check === undefined ) {
        return null
    } else {
        return check
    }
}