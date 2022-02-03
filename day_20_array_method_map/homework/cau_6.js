// Giống bài trước, trong bài này bạn sẽ lại viết hàm getHTMLfromArray 
// sử dụng để render ra HTML cho giao diện website.

function getHTMLfromArray(cars) {
    var output = cars.map(function(car) {
        car_name = Object.values(car)
        return '<li>' + car_name + '</li>'
    })
    return output
}