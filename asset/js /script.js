function dropdown(){
    var toggle = document.getElementById("toggle");
    if (toggle.style.display == "none"){
        toggle.style.display = "block";//block means unhide when click it unhide
    }
    else{
        toggle.style.display = "none"; // if not means none nothing happen
    }
}