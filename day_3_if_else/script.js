/**các điều kiện sai:
0
false
''
""
undefined
NaN
null
*/
var name = "Huu Loc"

if ( name ) {
    console.log('dieu kien dung')
} else {
    console.log('dieu kien sai')
}

/**Toán tử logic
 &&: và
 ||: hoặc
 !: not
*/

var a = 5
var b = 6
var c =10

if ( !( a > 0 && b > 0 ||c > 0 ) ) {
    console.log('dieu kien dung')
} else {
    console.log('dieu kien sai')
}