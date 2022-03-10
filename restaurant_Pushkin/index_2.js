let elems = document.querySelectorAll(".css_nav_menu_radio");
let restaurans = document.querySelectorAll(".css_restaurans");
let menu = document.querySelectorAll(".css_nav_menu_view");

for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', func);
    elems[i].addEventListener('click', scrollTo);
}

function func() {
    for (var i = 0; i < restaurans.length; i++) {
        if (this.value === restaurans[i].id) {
            restaurans[i].style.cssText = "display: block; opacity: 0";
            func2(restaurans[i]);
        } else {
            restaurans[i].style.display = "none"
        }
    }
}

function func2(restaurans) {
    let opacity = 0;
    let timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer)
        }
        restaurans.style.opacity = opacity;
        opacity += 0.03
        console.log(opacity)
    }, 30)
}

function scrollTo(e) {
    scroll({ top: 350, behavior: 'smooth' });
}