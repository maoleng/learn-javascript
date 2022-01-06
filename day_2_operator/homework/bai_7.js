// Cho trước các biến x, y và z là các giá trị số ngẫu nhiên:

// Gán x bằng giá trị của nó nhân 2
// Gán y bằng giá trị của nó chia 3
// Gán z bằng số dư của nó khi chia cho 2

function run(x, y, z) {
    x *= 2
    y /= 3
    z %= 2

    return 'x is ' + x + ' and y is ' + y + ' and z is ' + z;
}