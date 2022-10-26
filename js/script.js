function hoverOnLink1(){
    document.getElementById("navlink-bottom1").classList.add("_active_");
}
function hoverOffLink1(){
    document.getElementById("navlink-bottom1").classList.remove("_active_");
}
function hoverOnLink2(){
    document.getElementById("navlink-bottom2").classList.add("_active_");
}
function hoverOffLink2(){
    document.getElementById("navlink-bottom2").classList.remove("_active_");
}
function hoverOnLink3(){
    document.getElementById("btn-line-top").classList.add("_active_");
    document.getElementById("btn-line-right").classList.add("_active_");
    document.getElementById("btn-line-bottom").classList.add("_active_");
    document.getElementById("btn-line-left").classList.add("_active_");
}
function hoverOffLink3(){
    document.getElementById("btn-line-top").classList.remove("_active_");
    document.getElementById("btn-line-right").classList.remove("_active_");
    document.getElementById("btn-line-bottom").classList.remove("_active_");
    document.getElementById("btn-line-left").classList.remove("_active_");
}
function hoverOnUp(){
    document.getElementById("Up").classList.add("_active_");
}
function hoverOffUp(){
    document.getElementById("Up").classList.remove("_active_");
}4
function hoverOnBall(){
    document.getElementById("Ball").classList.add("_active_");
}
function hoverOffBall(){
    document.getElementById("Ball").classList.remove("_active_");
}
function hoverOnPrew(){
    document.getElementById("prew-line").classList.add("_active_");
}
function hoverOffPrew(){
    document.getElementById("prew-line").classList.remove("_active_");
}
function hoverOnNext(){
    document.getElementById("next-line").classList.add("_active_");
}
function hoverOffNext(){
    document.getElementById("next-line").classList.remove("_active_");
}

$(document).ready(function() {
    $('.nav-bar-bg').click(function(event) {
        $('.nav-bar-bg,.navbar-menu').toggleClass('_active_')
    });
});