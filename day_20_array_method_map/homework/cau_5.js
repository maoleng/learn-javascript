// Trong bài này bạn sẽ viết hàm getHTMLfromArray 
// sử dụng để render ra HTML cho giao diện website.

function getHTMLfromArray(cars) {
    array_cars = cars.map(function(car) {
        return "<li>" + car + "</li>"
    })
    return array_cars
}