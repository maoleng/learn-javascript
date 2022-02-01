var date = 2

if ( date == 2 ) {
    console.log("Hôm nay là thứ 2")
} else if ( date == 3 ) {
    console.log("Hôm nay là thứ 3")
} else {
    console.log("Không bít")
}


//câu lệnh switch case
switch (date) {
    case 2:
    case 3:
    case 4:
        console.log("Hôm nay là thứ 2, 3, 4")
        break;
    default:
        console.log("Không bít")
        break;
}

// toán tử ternary
var a = 1
var b = 2
console.log( a > b ? a : b )
