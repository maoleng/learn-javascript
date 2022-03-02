// JSON
// Là một định dạng dữ liệu ở dạng chuỗi
// JSON có Number, Bool, NULL, array, object
// ví dụ:
var json = '"day la 1 chuoi the hien duoi json"'
var json = '["day", "la", "mang", "duoi", "dang", "json"]'
var json = '{"key":"value", "keynek": 5}'

// Chuyển từ json sang js type
// console.log(JSON.parse(json))

// Chuyển từ js sang json
console.log(JSON.stringify({name: 'Bui Huu Loc', age: 18}))