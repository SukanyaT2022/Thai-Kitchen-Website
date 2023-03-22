
var bigheroImage =["https://images.pexels.com/photos/12866496/pexels-photo-12866496.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg?auto=compress&cs=tinysrgb&w=800", 
"https://images.pexels.com/photos/162993/food-thai-spicy-asian-162993.jpeg?auto=compress&cs=tinysrgb&w=800"]

var index = 0; /*we start from 0*/
var a = document.getElementById("animation")

function changeImage() {
    a.src = bigheroImage[index]
    index > 1 ? index = 0: index++;
}
//setinterverse is set time
window.onload = function(){
    setInterval(changeImage,3000) ;//3000 means change picture every 2 second
}