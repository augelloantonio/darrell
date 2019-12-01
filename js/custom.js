var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    if (window.pageYOffset >= 60) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "";
        } else {
            document.getElementById("navbar").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }
};